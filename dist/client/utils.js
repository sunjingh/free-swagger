"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const standalone_1 = __importDefault(require("prettier/standalone"));
const parser_typescript_1 = __importDefault(require("prettier/parser-typescript"));
const parser_babylon_1 = __importDefault(require("prettier/parser-babylon"));
const camelcase_1 = __importDefault(require("camelcase"));
const curlyBracketReg = /{((?:.|\r?\n)+?)}/g;
const specialCharactersReg = /[`~!@#$%^&*()_+<>«»?:"{},./;'[\]]/g;
const TYPE_MAP = {
    boolean: "boolean",
    bool: "boolean",
    Boolean: "boolean",
    Int64: "number",
    integer: "number",
    number: "number",
    string: "string",
    file: "Blob",
    formData: "FormData"
};
exports.TYPE_MAP = TYPE_MAP;
// "/pet/{petId}" -> "/pet/${arguments[1].petId}"
// "/pet/{map.id}" -> "/pet/${arguments[1]["map.id"]}"
// 目前默认第二个参数为 pathParams
const formatUrl = (path) => path.replace(curlyBracketReg, (_, $1) => specialCharactersReg.test($1)
    ? `\${arguments[1]['${$1}']}`
    : `\${arguments[1].${$1}}`);
exports.formatUrl = formatUrl;
// 格式化含有泛型的接口
// Animal<Dog> -> Animal_Dog
// Map<string,string> -> Map_string_string
const formatGenericInterface = (definitionClassName) => {
    let res = definitionClassName.replace(specialCharactersReg, "_");
    // 清空尾部的分割符号 _
    while (res.endsWith("_")) {
        res = res.slice(0, -1);
    }
    return res;
};
exports.formatGenericInterface = formatGenericInterface;
// 获取 $ref 指向的类型
const getRef = (ref) => {
    const propType = ref.slice(ref.lastIndexOf("/") + 1);
    return formatGenericInterface(propType);
};
exports.getRef = getRef;
const isRef = (schema) => schema && !!schema.$ref;
exports.isRef = isRef;
// 找到 schema 对应的 Ts 类型 & 找到需要导入的 interface 名
const schemaToTsType = (schema) => {
    if (!schema)
        return {
            type: "any",
            imports: [],
            isBinary: false,
            required: false,
            description: ""
        };
    const imports = [];
    const recursive = (schema) => {
        if (schema.$ref) {
            const ref = getRef(schema.$ref);
            imports.push(ref);
            return ref;
        }
        if (!schema.type)
            return "any";
        if (schema.type === "array" && schema.items) {
            return `${recursive(schema.items)}[]`;
        }
        // todo 对 object 的响应 schema 做处理
        if (schema.type === "object") {
            let type = "";
            if (!schema.properties)
                return "object";
            Object.keys(schema.properties).forEach(key => {
                type += schema.properties ? recursive(schema.properties[key]) : "";
            });
            return type;
        }
        if (schema.enum) {
            return schema.enum.map(value => `"${value}"`).join(" | ");
        }
        // 极小情况下的容错
        if (Array.isArray(schema.type)) {
            return JSON.stringify(schema.type);
        }
        // 基本类型
        return TYPE_MAP[schema.type];
    };
    return {
        type: recursive(schema),
        imports,
        isBinary: schema.type === "file",
        required: false,
        description: ""
    };
};
exports.schemaToTsType = schemaToTsType;
const formatCode = (code, lang) => standalone_1.default.format(code, {
    plugins: [parser_babylon_1.default, parser_typescript_1.default],
    printWidth: 120,
    tabWidth: 2,
    parser: lang === "js" ? "babel" : "typescript",
    trailingComma: "none",
    jsxBracketSameLine: false
});
exports.formatCode = formatCode;
const pascalCase = (str) => camelcase_1.default(str, {
    pascalCase: true
});
exports.pascalCase = pascalCase;