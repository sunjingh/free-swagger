(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-67cce9e8"],{"2d3e":function(e,a,r){"use strict";r("a4d3"),r("e01a"),r("99af"),r("a623"),r("c740"),r("4160"),r("caad"),r("a15b"),r("d81d"),r("b0c0"),r("7a82"),r("b64b"),r("ac1f"),r("2532"),r("1276"),r("159b");var n=r("9523"),t=r("6374");Object.defineProperty(a,"__esModule",{value:!0}),a.formatGenericInterface=a.flatInterfaceName=a.resetInterfaceMap=a.findInterface=a.shouldSkipGenerate=a.parseInterface=a.parseInterfaceName=a.buildInInterfaces=a.genericInterfaceMap=a.recursiveMap=a.map=void 0;var _=r("fff2"),s=r("792e"),o={Map:{name:"JavaMap",code:"\n   export type JavaMap<T, U> = Record<T, U>\n  "},List:{name:"JavaList",code:"\n   export type JavaList<T> = Array<T>\n  "}};a.buildInInterfaces=o;var c={};a.map=c;var i={};a.genericInterfaceMap=i;var u={};a.recursiveMap=u;var p=function(e){return i[e]||c[e]||u[e]};a.findInterface=p;var m=function(){a.map=c={},a.genericInterfaceMap=i={},a.recursiveMap=u={}};a.resetInterfaceMap=m;var d=function(e){var a,r=[],n="",s=function(e){return Object.keys(_.SPECIAL_CHARACTERS_MAP_OPEN).includes(e)},o=function(e){return Object.keys(_.SPECIAL_CHARACTERS_MAP_CLOSE).includes(e)},c=t(e.split(""));try{for(c.s();!(a=c.n()).done;){var i=a.value;if(s(i))r.push(n),n="",r.push(i);else if(","===i)n&&(r.push(n),n="");else if(o(i)){n&&(r.push(n),n="");var u=void 0,p=[];while(!s(u)&&r.length>0)u=r.pop(),"string"!==typeof u||s(u)?s(u)||p.unshift(u):p.unshift({name:u});if(r.length){var m=r.pop();"string"===typeof m&&r.push({name:m,generics:p})}if(1===r.length)return r[0]}else n+=i}}catch(d){c.e(d)}finally{c.f()}return{name:n}};a.parseInterfaceName=d;var f=function e(a){return a.generics?"".concat(a.name,"<").concat(a.generics.map((function(a){return e(a)})).join(","),">"):a.name},l=function(e){var a=[];return _.traverseTree(d(e),(function(e){a.push(e.name)})),a};a.flatInterfaceName=l;var P=function(e){var a=d(e);return _.traverseTree(a,(function(e){o[e.name]&&(e.name=o[e.name].name),_.TYPE_MAP[e.name]&&(e.name=_.TYPE_MAP[e.name])})),f(a)};a.formatGenericInterface=P;var y=function(e,a){var r={};return Object.keys(e).forEach((function(n){var t=e[n],s=_.schemaToTsType(t),o=s.imports,c=s.type;r[n]={type:c,imports:o,required:(null===a||void 0===a?void 0:a.includes(n))||!1,description:t.description||""}})),r},I=function(e){var a=Object.keys(e).findIndex((function(a){var r;return e[a].$ref||"array"===e[a].type&&(null===(r=e[a].items)||void 0===r?void 0:r.$ref)}));return Object.keys(e)[a]},h=function(e){var a,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=d(e);return!!(null===(a=n.generics)||void 0===a?void 0:a.length)&&(!!r||l(e).every((function(e){return _.TYPE_MAP[e]||c[e]||u[e]})))};a.shouldSkipGenerate=h;var E=function(e,a){var r,t,_=arguments.length>2&&void 0!==arguments[2]&&arguments[2],p=_?u:c,m=d(a),f={name:(null===(r=m.generics)||void 0===r?void 0:r.length)?"".concat(m.name,"<T>"):m.name,props:{},hasGeneric:!!(null===(t=m.generics)||void 0===t?void 0:t.length),skipGenerate:Object.keys(o).includes(m.name)};if(f.skipGenerate)return f;var l=e[a],P=l.properties,h=l.required;if(!P)return f;if(f.hasGeneric){if(i[m.name])return void(f.skipGenerate=!0);var E=I(P);return f.props=E?Object.assign(n({},E,{type:"array"===P[E].type?"T[]":"T",imports:[],required:(null===h||void 0===h?void 0:h.includes(E))||!1,description:P[E].description||""}),y(s.omit(P,E),h)):y(P,h),u[m.name]&&delete u[m.name],c[m.name]&&delete c[m.name],void(i[m.name]=f)}f.props=y(P,h),p[m.name]=f};a.parseInterface=E},"32fc":function(e,a,r){"use strict";r("99af"),r("a15b"),r("d81d"),r("45fc"),r("b0c0"),r("7a82"),r("4fad"),r("b64b");var n=r("278c"),t=r("7037");Object.defineProperty(a,"__esModule",{value:!0}),a.genIParams=a.isParsedSchemaObject=a.genPath=void 0;var _=r("792e"),s=function(e){return Object.keys(e).some((function(a){return"object"!==t(e[a])}))};a.isParsedSchemaObject=s;var o=function(e){return!e||_.isEmpty(e)?"":s(e)?e.type:"{\n    ".concat(Object.entries(e).map((function(e){var a=n(e,2),r=a[0],t=a[1];return'\n          "'.concat(r,'"').concat(t.required?"":"?",": ").concat(t.type)})).join(","),"\n      }")},c=function(e){var a=e.pathParamsInterface,r=e.queryParamsInterface,n=e.bodyParamsInterface;return{IQueryParams:o(r),IBodyParams:o(n),IPathParams:o(a)}};a.genIParams=c;var i=function(e,a,r){var n=c(e),t=n.IPathParams,_=n.IBodyParams,s=n.IQueryParams;return a({name:e.name,method:e.method,url:e.url,responseType:e.responseInterface.isBinary?"blob":"json",deprecated:!r&&e.deprecated,summary:r?"":e.summary,IResponse:e.responseInterface.type,pathParams:Object.keys(e.pathParamsInterface),IQueryParams:s,IBodyParams:_,IPathParams:t})};a.genPath=i},"37b8":function(e,a,r){"use strict";r("4160"),r("d81d"),r("13d5"),r("7a82"),r("b64b"),r("159b"),Object.defineProperty(a,"__esModule",{value:!0}),a.compileInterfaces=a.compileInterface=void 0;var n=r("2d3e"),t=r("fff2"),_=r("f55f"),s=function(e,a){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!e.definitions||n.shouldSkipGenerate(a,r))return"";n.parseInterface(e.definitions,a);try{return t.formatCode("ts")(_.genInterface(n.findInterface(a)))}catch(s){return console.warn("interfaceName: ".concat(a," 生成失败，检查是否符合 swagger 规范")),console.warn(s),"\n    // interfaceName: ".concat(a," 生成失败，检查是否符合 swagger 规范\n    \n    ")}};a.compileInterface=s;var o=function(e,a){if(!e.definitions)return"";if(n.resetInterfaceMap(),a)return s(e,a,!0);var r="/* eslint-disable */\n    // @ts-nocheck\n    // generated by free-swagger-client\n    \n    ",o=Object.keys(n.buildInInterfaces).reduce((function(e,a){return e+n.buildInInterfaces[a].code}),"");Object.keys(e.definitions).forEach((function(a){n.parseInterface(e.definitions,a)}));var c=Object.keys(n.map).reduce((function(a,r){return a+s(e,r)}),""),i=Object.keys(n.recursiveMap).reduce((function(e,a){return e+t.formatCode("ts")(_.genInterface(n.recursiveMap[a]))}),""),u=Object.keys(n.genericInterfaceMap).reduce((function(e,a){return e+t.formatCode("ts")(_.genInterface(n.genericInterfaceMap[a]))}),"");return t.formatCode("ts")(r+o+u+c+i)};a.compileInterfaces=o},"3b29":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"state",(function(){return state})),__webpack_require__.d(__webpack_exports__,"handleCopyApi",(function(){return handleCopyApi})),__webpack_require__.d(__webpack_exports__,"handleCopyPath",(function(){return handleCopyPath})),__webpack_require__.d(__webpack_exports__,"handleCopyFake",(function(){return handleCopyFake})),__webpack_require__.d(__webpack_exports__,"handleCopyInterface",(function(){return handleCopyInterface})),__webpack_require__.d(__webpack_exports__,"handleCopyJsDoc",(function(){return handleCopyJsDoc})),__webpack_require__.d(__webpack_exports__,"handleCopySchema",(function(){return handleCopySchema}));var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("a4d3"),core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("e01a"),core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("99af"),core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("c740"),core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_3__),core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("4160"),core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_4__),core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("a434"),core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_5__),core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("b0c0"),core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__),core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("b64b"),core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_7__),core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("ac1f"),core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_8__),core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("5319"),core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_9__),core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("159b"),core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_10__),element_ui_lib_theme_chalk_message_css__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("0fb7"),element_ui_lib_theme_chalk_message_css__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(element_ui_lib_theme_chalk_message_css__WEBPACK_IMPORTED_MODULE_11__),element_ui_lib_theme_chalk_base_css__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("450d"),element_ui_lib_theme_chalk_base_css__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(element_ui_lib_theme_chalk_base_css__WEBPACK_IMPORTED_MODULE_12__),element_ui_lib_message__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("f529"),element_ui_lib_message__WEBPACK_IMPORTED_MODULE_13___default=__webpack_require__.n(element_ui_lib_message__WEBPACK_IMPORTED_MODULE_13__),vue__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("2b0e"),_utils_dom_utils__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("4f0c"),lodash_es__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("e247"),free_swagger_client__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("95a9"),free_swagger_client__WEBPACK_IMPORTED_MODULE_17___default=__webpack_require__.n(free_swagger_client__WEBPACK_IMPORTED_MODULE_17__),json_schema_faker__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("e08d"),json_schema_faker__WEBPACK_IMPORTED_MODULE_18___default=__webpack_require__.n(json_schema_faker__WEBPACK_IMPORTED_MODULE_18__),STORAGE_KEY="SWAGGER-EXTENDS",SUCCESS_CODE="200",state=new vue__WEBPACK_IMPORTED_MODULE_14__["default"]({data:function(){return{url:"",dialog:!1,key:"",currentApi:{key:"",path:"",method:"",collection:{controller:{},operationId:""}},storage:{jsTemplate:free_swagger_client__WEBPACK_IMPORTED_MODULE_17__["jsTemplate"],tsTemplate:free_swagger_client__WEBPACK_IMPORTED_MODULE_17__["tsTemplate"],useJsDoc:!1,exportLanguage:"js",currentLanguage:"js"},isNewUi:!1,domLoaded:!1,swagger:null,parsedSwagger:null}},computed:{options:function(){if(!this.swagger)return[];var e=[],a=[],r=this.swagger.paths,n=this.swagger.tags;return Object.keys(r).forEach((function(a){Object.keys(r[a]).forEach((function(n){var t=r[a][n],_=t.tags,s=t.summary,o=t.description,c=t.operationId;e.push({path:a,method:n,key:"".concat(n," ").concat(a," ").concat(s),tag:_[_.length-1],collection:{controller:_[_.length-1],summary:s,description:o,operationId:c}})}))})),n.forEach((function(r){var n;do{if(n=e.findIndex((function(e){return e.tag===r.name})),n<0)return;a.push(e[n]),e.splice(n,1)}while(n>=0)})),a}},watch:{storage:{handler:function(e){localStorage.setItem(STORAGE_KEY,JSON.stringify(e))},deep:!0}},created:function(){var e=localStorage.getItem(STORAGE_KEY)?JSON.parse(localStorage.getItem(STORAGE_KEY)):{};this.storage=Object(lodash_es__WEBPACK_IMPORTED_MODULE_16__["a"])(e,this.storage,(function(e,a){if(""===e)return a}))}}),handleCopyApi=function handleCopyApi(){var path=arguments.length>0&&void 0!==arguments[0]?arguments[0]:state.currentApi.path,method=arguments.length>1&&void 0!==arguments[1]?arguments[1]:state.currentApi.method,source=arguments.length>2&&void 0!==arguments[2]?arguments[2]:state.swagger;try{if(!path)throw new Error;var storage=state.storage,codeFragment=free_swagger_client__WEBPACK_IMPORTED_MODULE_17___default()({source:source,lang:storage.currentLanguage,useJsDoc:storage.useJsDoc,templateFunction:eval("js"===storage.currentLanguage?storage.jsTemplate:storage.tsTemplate)},path,method);Object(_utils_dom_utils__WEBPACK_IMPORTED_MODULE_15__["a"])(codeFragment)}catch(e){element_ui_lib_message__WEBPACK_IMPORTED_MODULE_13___default.a.error("复制失败，请检查选择的 api 或模版"),console.log(e)}},handleCopyPath=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:state.currentApi.path,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:state.currentApi.method;try{var r=e.replace(/{(.*?)}/g,":$1");Object(_utils_dom_utils__WEBPACK_IMPORTED_MODULE_15__["a"])('"'.concat(a.toUpperCase()," ").concat(r,'"'))}catch(n){element_ui_lib_message__WEBPACK_IMPORTED_MODULE_13___default.a.error("复制失败，请检查选择的 api 或模版"),console.log(n)}},handleCopyFake=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:state.currentApi.path,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:state.currentApi.method,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:state.parsedSwagger;Object(json_schema_faker__WEBPACK_IMPORTED_MODULE_18__["option"])({useExamplesValue:!0,useDefaultValue:!0,alwaysFakeOptionals:!0,refDepthMax:2,maxItems:1,failOnInvalidTypes:!1});try{var n,t,_,s=null===(n=r.paths[e][a].responses)||void 0===n||null===(t=n[SUCCESS_CODE])||void 0===t?void 0:t.schema;s?(_=Object(json_schema_faker__WEBPACK_IMPORTED_MODULE_18__["generate"])(s),_.code&&(_.code=SUCCESS_CODE)):_={code:SUCCESS_CODE,msg:"xxx",data:{}},Object(_utils_dom_utils__WEBPACK_IMPORTED_MODULE_15__["a"])(_)}catch(o){console.log(o),element_ui_lib_message__WEBPACK_IMPORTED_MODULE_13___default.a.error("复制失败，请检查选择的 api 或模版")}},handleCopyInterface=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:state.swagger,a=arguments.length>1?arguments[1]:void 0;try{var r=a&&Object(free_swagger_client__WEBPACK_IMPORTED_MODULE_17__["parseInterfaceName"])(a).generics.length;if(r)return void element_ui_lib_message__WEBPACK_IMPORTED_MODULE_13___default.a.warning("复制失败，interface 片段会丢失上下文，请选择复制 interface");var n=Object(free_swagger_client__WEBPACK_IMPORTED_MODULE_17__["compileInterfaces"])(e,a);Object(_utils_dom_utils__WEBPACK_IMPORTED_MODULE_15__["a"])(n)}catch(t){console.log(t),element_ui_lib_message__WEBPACK_IMPORTED_MODULE_13___default.a.error("复制失败，请检查选择的 api")}},handleCopyJsDoc=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:state.swagger,a=arguments.length>1?arguments[1]:void 0;try{var r=Object(free_swagger_client__WEBPACK_IMPORTED_MODULE_17__["compileJsDocs"])(e,a);Object(_utils_dom_utils__WEBPACK_IMPORTED_MODULE_15__["a"])(r)}catch(n){console.log(n),element_ui_lib_message__WEBPACK_IMPORTED_MODULE_13___default.a.error("复制失败，请检查选择的 api")}},handleCopySchema=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:state.currentApi.path,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:state.currentApi.method,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:state.parsedSwagger;try{var n=r.paths[e][a].responses[SUCCESS_CODE].schema;Object(_utils_dom_utils__WEBPACK_IMPORTED_MODULE_15__["a"])(n)}catch(t){console.log(t),element_ui_lib_message__WEBPACK_IMPORTED_MODULE_13___default.a.error("复制失败，请检查选择的 api 或模版")}}},4:function(e,a){},"59ae":function(e,a,r){"use strict";r("99af"),r("7a82");var n=r("448a");Object.defineProperty(a,"__esModule",{value:!0}),a.parsePath=void 0;var t=r("8e80"),_=r("d0f0"),s=r("792e"),o=function(e,a,r,o){var c=o.parameters,i=o.summary,u=void 0===i?"":i,p=o.responses,m=o.deprecated,d=void 0!==m&&m,f=_.getRequestType(c),l=f.bodyParamsInterface,P=f.queryParamsInterface,y=f.pathParamsInterface,I=f.imports,h=t.getResponseType(p),E=h.responseInterface;return{imports:s.uniq([].concat(n(I),n(E.imports))),summary:u,deprecated:d,url:a,name:e,method:r,bodyParamsInterface:l,queryParamsInterface:P,pathParamsInterface:y,responseInterface:E}};a.parsePath=o},"8e80":function(e,a,r){"use strict";r("7a82"),Object.defineProperty(a,"__esModule",{value:!0}),a.getResponseType=void 0;var n=r("fff2"),t=200,_=function(e){if(!e[t])return{responseInterface:{type:"",imports:[],required:!1,description:"",isBinary:!1}};var a=e[t].schema;return{responseInterface:n.schemaToTsType(a)}};a.getResponseType=_},"95a9":function(e,a,r){"use strict";r("99af"),r("b8bf"),r("7a82");var n=this&&this.__createBinding||(Object.create?function(e,a,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return a[r]}})}:function(e,a,r,n){void 0===n&&(n=r),e[n]=a[r]}),t=this&&this.__exportStar||function(e,a){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(a,r)||n(a,e,r)};Object.defineProperty(a,"__esModule",{value:!0}),a.compileJsDocs=a.compileInterfaces=void 0;var _=r("32fc"),s=r("59ae"),o=r("fff2"),c=r("caf7"),i=r("37b8");Object.defineProperty(a,"compileInterfaces",{enumerable:!0,get:function(){return i.compileInterfaces}});var u=r("f295");Object.defineProperty(a,"compileJsDocs",{enumerable:!0,get:function(){return u.compileJsDocs}});var p=r("f45f"),m=function(e,a,r){var n=!a||!r;if(n)return"";var t=c.mergeDefaultParams(e),i=e.source.paths[a][r].operationId;if(!i)return"";var u=s.parsePath(i,"".concat(e.source.basePath).concat(a),r,e.source.paths[a][r]),m=o.formatCode(t.lang)(_.genPath(u,t.templateFunction,t.useJsDoc)),d=t.useJsDoc&&"js"===t.lang?p.genJsDoc(u):"";return d+m};a["default"]=m,t(r("a4e5"),a),t(r("fff2"),a),t(r("32fc"),a),t(r("f45f"),a),t(r("59ae"),a),t(r("2d3e"),a)},a4e5:function(e,a,r){"use strict";r("7a82"),Object.defineProperty(a,"__esModule",{value:!0}),a.tsTemplate=a.jsTemplate=void 0,a.jsTemplate="({\n  url,            // 完整路径 {string}\n  summary,        // 注释 {string}\n  method,         // 请求方法 {string}\n  name,           // api 函数名 {string}\n  responseType,   // 响应值种类，同 axios {string}\n  deprecated,     // 是否废弃 {boolean}\n  pathParams,     // 路径参数 {Array<string>}\n  IQueryParams,   // 请求查询参数 ts 类型\n  IBodyParams,    // 请求体参数 ts 类型\n  IPathParams     // 请求路径参数 ts 类型\n}) => {\n  // js template\n\n  // 处理路径参数 `/pet/{id}` => `/pet/${id}`\n const parsedUrl = url.replace(/{(.*?)}/g, '${$1}'); \n\n  // 有 query 和 body 参数\n const multipleParamsCondition = ({ IQueryParams, IBodyParams }) =>\n    IQueryParams && IBodyParams\n    \n  const firstParamCodeMap = new Map()\n    // 只有 query 参数，可能有 path 参数\n    .set(\n      ({ IQueryParams, IBodyParams }) => IQueryParams && !IBodyParams,\n       `params,`\n    )\n    // 只有 body 参数，可能有 path 参数\n    .set(\n      ({ IQueryParams, IBodyParams }) => IBodyParams && !IQueryParams,\n       `params,`\n    )\n    // 有 query 和 body 参数，可能有 path 参数\n    .set(\n      multipleParamsCondition,\n      ({ IQueryParams }) => `queryParams,`\n    )\n     // 没有 query body 参数，有 path 参数\n    .set(\n      ({ IQueryParams,pathParams,IBodyParams }) => !IBodyParams && !IQueryParams && pathParams.length,\n      '_NOOP,'\n    )  \n    // 只有 path 参数\n    .set(\n      ({ pathParams }) => pathParams.length,\n      ({ pathParams, IPathParams }) =>\n        `{${pathParams.join(',')}},`\n    )\n    \n  const secondParamCodeMap = new Map()\n    // 有 path 参数\n    .set(\n      ({ pathParams }) => pathParams.length,\n      ({ pathParams, IPathParams }) =>\n        `{${pathParams.join(',')}},`\n    )\n    // 有 query 和 body 参数，有 path 参数\n    .set(multipleParamsCondition, `_NOOP,`)\n    \n  const thirdParamCodeMap = new Map()\n    // 有 query 和 body 参数，有 path 参数\n    .set(\n      multipleParamsCondition,\n      `bodyParams,`\n    )\n    \n  const paramCodeMap = new Map()\n    .set(multipleParamsCondition, 'queryParams,')\n    .set(({ IQueryParams }) => !!IQueryParams, 'params,')\n    \n  const dataCodeMap = new Map()\n    .set(multipleParamsCondition, 'bodyParams,')\n    .set(({ IBodyParams }) => !!IBodyParams, 'params,')\n\n  const createParamCode = (conditionMap, defaultCode = '') => {\n    let code = defaultCode\n    for (const [condition, codeFunction] of conditionMap.entries()) {\n      const res = condition({\n        IQueryParams,\n        IBodyParams,\n        pathParams,\n      })\n      if (res) {\n        code =\n          typeof codeFunction === 'string'\n            ? codeFunction\n            : codeFunction({\n                IQueryParams,\n                IBodyParams,\n                IPathParams,\n                pathParams,\n              })\n        break\n      }\n    }\n    return code\n  }\n \n  return `\n  ${deprecated ? `/**deprecated*/` : \"\"}\n  ${summary ? `// ${summary}` : \"\"}\n  export const ${name} = (\n    ${createParamCode(firstParamCodeMap)}\n    ${createParamCode(secondParamCodeMap)}\n    ${createParamCode(thirdParamCodeMap)}\n)  => axios.request({\n         url: \\`${parsedUrl}\\`,\n         method: \"${method}\",\n         params:${createParamCode(paramCodeMap, '{},')}\n         data:${createParamCode(dataCodeMap, '{},')}\n         ${responseType === \"json\" ? \"\" : `responseType: ${responseType},`}\n })`;\n}\n",a.tsTemplate="({\n  url,            // 完整路径 {string}\n  summary,        // 注释 {string}\n  method,         // 请求方法 {string}\n  name,           // api 函数名 {string}\n  responseType,   // 响应值种类，同 axios {string}\n  deprecated,     // 是否废弃 {boolean}\n  pathParams,     // 路径参数 {Array<string>}\n  IQueryParams,   // 请求查询参数 ts 类型\n  IBodyParams,    // 请求体参数 ts 类型\n  IPathParams,     // 请求路径参数 ts 类型\n  IResponse,      // 响应参数 ts 类型\n}) => {\n  // ts template\n\n  // 处理路径参数 `/pet/{id}` => `/pet/${id}`\n const parsedUrl = url.replace(/{(.*?)}/g, '${$1}'); \n \n // 有 query 和 body 参数\n const multipleParamsCondition = ({ IQueryParams, IBodyParams }) =>\n    IQueryParams && IBodyParams\n    \n  const firstParamCodeMap = new Map()\n    // 只有 query 参数，可能有 path 参数\n    .set(\n      ({ IQueryParams, IBodyParams }) => IQueryParams && !IBodyParams,\n      ({ IQueryParams }) => `params: ${IQueryParams},`\n    )\n    // 只有 body 参数，可能有 path 参数\n    .set(\n      ({ IQueryParams, IBodyParams }) => IBodyParams && !IQueryParams,\n      ({ IBodyParams }) => `params: ${IBodyParams},`\n    )\n    // 有 query 和 body 参数，可能有 path 参数\n    .set(\n      multipleParamsCondition,\n      ({ IQueryParams }) => `queryParams: ${IQueryParams},`\n    )\n    // 没有 query body 参数，有 path 参数\n    .set(\n      ({ IQueryParams,pathParams,IBodyParams }) => !IBodyParams && !IQueryParams && pathParams.length,\n      '_NOOP: {[key:string]: never},'\n    )\n     // 只有 path 参数\n    .set(\n      ({ pathParams }) => pathParams.length,\n      ({ pathParams, IPathParams }) =>\n        `{${pathParams.join(',')}}: ${IPathParams},`\n    )\n    \n  const secondParamCodeMap = new Map()\n    // 有 path 参数\n    .set(\n      ({ pathParams }) => pathParams.length,\n      ({ pathParams, IPathParams }) =>\n        `{${pathParams.join(',')}}: ${IPathParams},`\n    )\n    // 有 query 和 body 参数，有 path 参数\n    .set(multipleParamsCondition, `_NOOP:{[key:string]: never},`)\n    \n  const thirdParamCodeMap = new Map()\n    // 有 query 和 body 参数，有 path 参数\n    .set(\n      multipleParamsCondition,\n      ({ IBodyParams }) => `bodyParams: ${IBodyParams},`\n    )\n    \n  const paramCodeMap = new Map()\n    .set(multipleParamsCondition, 'queryParams,')\n    .set(({ IQueryParams }) => !!IQueryParams, 'params,')\n    \n  const dataCodeMap = new Map()\n    .set(multipleParamsCondition, 'bodyParams,')\n    .set(({ IBodyParams }) => !!IBodyParams, 'params,')\n\n  const createParamCode = (conditionMap, defaultCode = '') => {\n    let code = defaultCode\n    for (const [condition, codeFunction] of conditionMap.entries()) {\n      const res = condition({\n        IQueryParams,\n        IBodyParams,\n        pathParams,\n      })\n      if (res) {\n        code =\n          typeof codeFunction === 'string'\n            ? codeFunction\n            : codeFunction({\n                IQueryParams,\n                IBodyParams,\n                IPathParams,\n                pathParams,\n              })\n        break\n      }\n    }\n    return code\n  }\n \n  return `\n  ${deprecated ? `/**deprecated*/` : \"\"}\n  ${summary ? `// ${summary}` : \"\"}  \n  export const ${name} = (\n    ${createParamCode(firstParamCodeMap)}\n    ${createParamCode(secondParamCodeMap)}\n    ${createParamCode(thirdParamCodeMap)}\n) => axios.request<${IResponse || \"any\"}>({\n         url: \\`${parsedUrl}\\`,\n         method: \"${method}\",\n         params:${createParamCode(paramCodeMap, '{},')}\n         data:${createParamCode(dataCodeMap, '{},')}\n         ${responseType === \"json\" ? \"\" : `responseType: ${responseType},`}\n })`;\n}\n"},caf7:function(module,exports,__webpack_require__){"use strict";__webpack_require__("7a82"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.mergeDefaultParams=void 0;var template_1=__webpack_require__("a4e5"),mergeDefaultParams=function mergeDefaultParams(config){return Object.assign({useJsDoc:!1,lang:"js",templateFunction:eval(template_1.jsTemplate)},config)};exports.mergeDefaultParams=mergeDefaultParams},d0f0:function(e,a,r){"use strict";r("a4d3"),r("e01a"),r("4160"),r("45fc"),r("b0c0"),r("7a82"),r("159b");var n=r("448a");Object.defineProperty(a,"__esModule",{value:!0}),a.getRequestType=void 0;var t=r("fff2"),_=function(e,a){var r=[],_="",s=!1;if(e.schema||e.items){var o=t.schemaToTsType(e.schema||e.items);_=o.type,s=!!o.isBinary,r.push.apply(r,n(o.imports)),a.push.apply(a,n(o.imports))}else _=t.TYPE_MAP[e.type];return{type:_,imports:r,isBinary:s,description:e.description||"",required:e.required||!1}},s=function(e){if(!e||e.some(t.isRef))return{imports:[],pathParamsInterface:{},queryParamsInterface:{},bodyParamsInterface:{}};var a={},r={},n={},s=[];return e.forEach((function(e){switch(e["in"]){case"path":a[e.name]=_(e,s);break;case"query":r[e.name]=_(e,s);break;case"formData":n={type:"FormData",imports:[],isBinary:!0,description:"",required:!0};break;case"body":n=_(e,s);break;default:return}})),{imports:s,pathParamsInterface:a,bodyParamsInterface:n,queryParamsInterface:r}};a.getRequestType=s},f295:function(e,a,r){"use strict";r("4160"),r("d81d"),r("13d5"),r("7a82"),r("b64b"),r("159b"),Object.defineProperty(a,"__esModule",{value:!0}),a.compileJsDoc=a.compileJsDocs=void 0;var n=r("2d3e"),t=r("95a9"),_=function(e,a){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!e.definitions||n.shouldSkipGenerate(a,r))return"";n.parseInterface(e.definitions,a);try{return t.genJsDocTypeDef(n.findInterface(a))}catch(_){return console.warn("jsDoc: ".concat(a," 生成失败，检查是否符合 swagger 规范")),console.warn(_),"\n    // jsDoc: ".concat(a," 生成失败，检查是否符合 swagger 规范\n    ")}};a.compileJsDoc=_;var s=function(e,a){if(!e.definitions)return"";if(n.resetInterfaceMap(),a)return _(e,a,!0);var r="// generated by free-swagger-client\n    ";Object.keys(e.definitions).forEach((function(a){n.parseInterface(e.definitions,a)}));var s=Object.keys(n.map).reduce((function(a,r){return a+_(e,r)}),""),o=Object.keys(n.recursiveMap).reduce((function(e,a){return e+t.genJsDocTypeDef(n.recursiveMap[a])}),""),c=Object.keys(n.genericInterfaceMap).reduce((function(e,a){return e+t.genJsDocTypeDef(n.genericInterfaceMap[a])}),"");return r+c+s+o};a.compileJsDocs=s},f45f:function(e,a,r){"use strict";r("a4d3"),r("e01a"),r("99af"),r("a15b"),r("d81d"),r("b0c0"),r("4ec9"),r("7a82"),r("4fad"),r("b64b"),r("d3b7"),r("3ca3"),r("ddb0");var n=r("6374"),t=r("278c");Object.defineProperty(a,"__esModule",{value:!0}),a.genJsDoc=a.genJsDocTypeDef=void 0;var _=r("95a9"),s=r("792e"),o=function(e){var a=e.name,r=e.props,n=e.skipGenerate;return n?"":"\n/**\n * @typedef {\n *   {\n".concat(Object.entries(r).map((function(e){var a=t(e,2),r=a[0],n=a[1];return" *     '".concat(r,"': ").concat(n.type,"\n")})).join("")," *   }\n * } ").concat(a,"\n**/\n")};a.genJsDocTypeDef=o;var c=function(e){return!e||s.isEmpty(e)?"":_.isParsedSchemaObject(e)?e.type:"{\n    ".concat(Object.entries(e).map((function(e,a){var r=t(e,2),n=r[0],_=r[1];return"".concat(0!==a?"    ":"",'"').concat(n,'": ').concat(_.type)})).join("\n"),"\n}")},i=function(e){var a=e.pathParamsInterface,r=e.queryParamsInterface,n=e.bodyParamsInterface;return{IQueryParams:c(r),IBodyParams:c(n),IPathParams:c(a)}},u=function(e){var a=i(e),r=a.IBodyParams,_=a.IQueryParams,s=a.IPathParams,o=s?"\n * @param {Object} pathParams\n".concat(Object.entries(e.pathParamsInterface).map((function(e){var a=t(e,2),r=a[0],n=a[1];return" * @param {".concat(n.type,"} pathParams.").concat(r," ").concat(n.description?"-".concat(n.description):"")})).join("\n")):"",c=function(e){var a=e.IQueryParams,r=e.IBodyParams;return a&&r},u=(new Map).set((function(e){var a=e.IQueryParams,r=e.IBodyParams;return a&&!r}),(function(e){var a=e.IQueryParams,r=e.queryDescription;return"\n * @param {".concat(a,"} params ").concat(r)})).set((function(e){var a=e.IQueryParams,r=e.IBodyParams;return r&&!a}),(function(e){var a=e.IBodyParams,r=e.bodyDescription;return"\n * @param {".concat(a,"} params ").concat(r)})).set(c,(function(e){var a=e.IQueryParams,r=e.queryDescription;return"\n * @param {".concat(a,"} queryParams ").concat(r)})).set((function(e){var a=e.IQueryParams,r=e.pathParams,n=e.IBodyParams;return!n&&!a&&r.length}),"\n * @param {Object} _NOOP -never").set((function(e){var a=e.pathParams;return a.length}),(function(){return o})),p=(new Map).set((function(e){var a=e.pathParams;return a.length}),(function(){return o})).set(c,"\n * @param {Object} _NOOP -never"),m=(new Map).set(c,(function(e){var a=e.IBodyParams,r=e.bodyDescription;return"\n * @param {".concat(a,"} bodyParams ").concat(r)})),d=function(a){var o,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=c,u=n(a.entries());try{for(u.s();!(o=u.n()).done;){var p=t(o.value,2),m=p[0],d=p[1],f=e.queryParamsInterface.description?"-".concat(e.queryParamsInterface.description):"",l=e.bodyParamsInterface.description?"-".concat(e.bodyParamsInterface.description):"",P=Object.keys(e.pathParamsInterface),y=m({IQueryParams:_,IBodyParams:r,pathParams:P});if(y){i="string"===typeof d?d:d({IQueryParams:_,IBodyParams:r,IPathParams:s,pathParams:P,queryDescription:f,bodyDescription:l});break}}}catch(I){u.e(I)}finally{u.f()}return i};return"\n/** ".concat(e.deprecated?"\n * @deprecated":"","\n * @description ").concat(e.summary," ").concat(d(u)," ").concat(d(p)," ").concat(d(m)," \n**/\n")};a.genJsDoc=u},f55f:function(e,a,r){"use strict";r("a4d3"),r("e01a"),r("99af"),r("d81d"),r("b0c0"),r("7a82"),r("4fad");var n=r("278c");Object.defineProperty(a,"__esModule",{value:!0}),a.genInterface=void 0;var t=function(e){var a=e.name,r=e.props,t=e.skipGenerate;return t?"":"\n    export interface ".concat(a," {\n        ").concat(Object.entries(r).map((function(e){var a=n(e,2),r=a[0],t=a[1];return"\n            '".concat(r,"' ").concat(t.required?"":"?",": ").concat(t.type,"  ").concat(t.description&&"// ".concat(t.description),"\n            ")})),"\n      }\n      ")};a.genInterface=t},fff2:function(e,a,r){"use strict";r("4de4"),r("4160"),r("caad"),r("277d"),r("a15b"),r("baa5"),r("d81d"),r("fb6a"),r("b0c0"),r("7a82"),r("b64b"),r("07ac"),r("2532"),r("159b");var n=r("448a"),t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.SPECIAL_CHARACTERS_MAP_CLOSE=a.SPECIAL_CHARACTERS_MAP_OPEN=a.TYPE_MAP=a.traverseTree=a.schemaToTsType=a.isRef=a.getRef=a.formatGenericInterface=a.formatCode=void 0;var _=t(r("24bc")),s=t(r("5b18")),o=t(r("cc89")),c=r("2d3e");Object.defineProperty(a,"formatGenericInterface",{enumerable:!0,get:function(){return c.formatGenericInterface}});var i={"«":"<","[":"<","{":"<","<":"<"};a.SPECIAL_CHARACTERS_MAP_OPEN=i;var u={"»":">","]":">","}":">",">":">"};a.SPECIAL_CHARACTERS_MAP_CLOSE=u;var p={boolean:"boolean",bool:"boolean",Boolean:"boolean",long:"number",double:"number",Int64:"number",integer:"number",number:"number",string:"string",bigdecimal:"string",LocalDate:"string",file:"Blob",formData:"FormData",Void:"void",object:"object",array:"Array<any>"};a.TYPE_MAP=p;var m=function e(a,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"generics";r(a),a[n]&&a[n].forEach((function(a){e(a,r,n)}))};a.traverseTree=m;var d=function(e){var a=e.slice(e.lastIndexOf("/")+1);return c.formatGenericInterface(a)};a.getRef=d;var f=function(e){return e&&!!e.$ref};a.isRef=f;var l=function(e){if(!e)return{type:"any",imports:[],isBinary:!1,required:!1,description:""};var a=[],r=function e(r){if(r.$ref){var t=/^\w*$/,_=d(r.$ref);return a.push.apply(a,n(c.flatInterfaceName(_).filter((function(e){return!Object.values(p).includes(e)})).filter((function(e){return t.test(e)})).map((function(e){return c.buildInInterfaces[e]?c.buildInInterfaces[e].name:e})))),_}if(!r.type)return"any";if("array"===r.type&&r.items)return r.items["enum"]?"(".concat(e(r.items),")[]"):"".concat(e(r.items),"[]");if("object"===r.type){var s="";return r.properties?(Object.keys(r.properties).forEach((function(a){s+=r.properties?e(r.properties[a]):""})),s):"object"}return r["enum"]?r["enum"].map((function(e){return'"'.concat(e,'"')})).join(" | "):Array.isArray(r.type)?JSON.stringify(r.type):p[r.type]};return{type:r(e),imports:a,isBinary:"file"===e.type,required:!1,description:""}};a.schemaToTsType=l;var P=function(e){return function(a){return _["default"].format(a,{plugins:[o["default"],s["default"]],printWidth:120,tabWidth:2,parser:"ts"===e?"typescript":"babel",trailingComma:"none"})}};a.formatCode=P}}]);