(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ea85e20"],{"2d3e":function(e,r,a){"use strict";a("a4d3"),a("e01a"),a("99af"),a("a623"),a("c740"),a("4160"),a("caad"),a("a15b"),a("d81d"),a("b0c0"),a("7a82"),a("b64b"),a("ac1f"),a("2532"),a("1276"),a("159b");var n=a("9523"),t=a("6374");Object.defineProperty(r,"__esModule",{value:!0}),r.formatGenericInterface=r.flatInterfaceName=r.resetInterfaceMap=r.findInterface=r.buildInInterfaces=r.genericInterfaceMap=r.recursiveMap=r.map=r.shouldSkipGenerate=r.parseInterface=void 0;var s=a("fff2"),o=a("792e"),i={Map:{name:"JavaMap",code:"\n   export type JavaMap<T, U> = Record<string, U>\n  "},List:{name:"JavaList",code:"\n   export type JavaList<T> = Array<T>\n  "}};r.buildInInterfaces=i;var c={};r.map=c;var u={};r.genericInterfaceMap=u;var p={};r.recursiveMap=p;var f=function(e){return u[e]||c[e]||p[e]};r.findInterface=f;var m=function(){r.map=c={},r.genericInterfaceMap=u={},r.recursiveMap=p={}};r.resetInterfaceMap=m;var d=function(e){var r,a=[],n="",o=function(e){return Object.keys(s.SPECIAL_CHARACTERS_MAP_OPEN).includes(e)},i=function(e){return Object.keys(s.SPECIAL_CHARACTERS_MAP_CLOSE).includes(e)},c=t(e.split(""));try{for(c.s();!(r=c.n()).done;){var u=r.value;if(o(u))a.push(n),n="",a.push(u);else if(","===u)n&&(a.push(n),n="");else if(i(u)){n&&(a.push(n),n="");var p=void 0,f=[];while(!o(p)&&a.length>0)p=a.pop(),"string"!==typeof p||o(p)?o(p)||f.unshift(p):f.unshift({name:p});if(a.length){var m=a.pop();"string"===typeof m&&a.push({name:m,generics:f})}if(1===a.length)return a[0]}else n+=u}}catch(d){c.e(d)}finally{c.f()}return{name:n}},y=function(e){var r=[];return s.traverseTree(d(e),(function(e){r.push(e.name)})),r};r.flatInterfaceName=y;var l=function e(r){return r.generics?"".concat(r.name,"<").concat(r.generics.map((function(r){return e(r)})).join(","),">"):r.name},P=function(e){var r=d(e);return s.traverseTree(r,(function(e){i[e.name]&&(e.name=i[e.name].name),s.TYPE_MAP[e.name]&&(e.name=s.TYPE_MAP[e.name])})),l(r)};r.formatGenericInterface=P;var v=function(e,r){var a={};return Object.keys(e).forEach((function(n){var t=e[n],o=s.schemaToTsType(t),i=o.imports,c=o.type;a[n]={type:c,imports:i,required:(null===r||void 0===r?void 0:r.includes(n))||!1,description:t.description||""}})),a},I=function(e){var r=Object.keys(e).findIndex((function(r){var a;return e[r].$ref||"array"===e[r].type&&(null===(a=e[r].items)||void 0===a?void 0:a.$ref)}));return Object.keys(e)[r]},b=function(e){var r,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=d(e);return!!(null===(r=n.generics)||void 0===r?void 0:r.length)&&(!!a||y(e).every((function(e){return s.TYPE_MAP[e]||c[e]||p[e]})))};r.shouldSkipGenerate=b;var h=function(e,r){var a,t,s=arguments.length>2&&void 0!==arguments[2]&&arguments[2],f=s?p:c,m=d(r),y={name:(null===(a=m.generics)||void 0===a?void 0:a.length)?"".concat(m.name,"<T>"):m.name,props:{},hasGeneric:!!(null===(t=m.generics)||void 0===t?void 0:t.length),skipGenerate:Object.keys(i).includes(m.name)};if(y.skipGenerate)return y;var l=e[r],P=l.properties,b=l.required;if(!P)return y;if(y.hasGeneric){if(u[m.name])return void(y.skipGenerate=!0);var h=I(P);return y.props=h?Object.assign(n({},h,{type:"array"===P[h].type?"T[]":"T",imports:[],required:(null===b||void 0===b?void 0:b.includes(h))||!1,description:P[h].description||""}),v(o.omit(P,h),b)):v(P,b),p[m.name]&&delete p[m.name],c[m.name]&&delete c[m.name],void(u[m.name]=y)}y.props=v(P,b),f[m.name]=y};r.parseInterface=h},"32fc":function(e,r,a){"use strict";a("99af"),a("a15b"),a("d81d"),a("45fc"),a("b0c0"),a("7a82"),a("4fad"),a("b64b");var n=a("278c"),t=a("7037");Object.defineProperty(r,"__esModule",{value:!0}),r.genPath=void 0;var s=a("792e"),o=function(e){return Object.keys(e).some((function(r){return"object"!==t(e[r])}))},i=function(e){return!e||s.isEmpty(e)?"":o(e)?e.type:"{\n    ".concat(Object.entries(e).map((function(e){var r=n(e,2),a=r[0],t=r[1];return'"'.concat(a,'"').concat(t.required?"":"?",": ").concat(t.type)})).join(","),"\n      }")},c=function(e){var r=e.pathParamsInterface,a=e.queryParamsInterface,n=e.bodyParamsInterface;return{IQueryParams:i(a),IBodyParams:i(n),IPathParams:i(r)}},u=function(e,r){var a=c(e),n=a.IPathParams,t=a.IBodyParams,s=a.IQueryParams;return r({name:e.name,method:e.method,url:e.url,responseType:e.responseInterface.isBinary?"blob":"json",deprecated:e.deprecated,summary:e.summary,IResponse:e.responseInterface.type,pathParams:Object.keys(e.pathParamsInterface),IQueryParams:s,IBodyParams:t,IPathParams:n})};r.genPath=u},"59ae":function(e,r,a){"use strict";a("99af"),a("7a82");var n=a("448a");Object.defineProperty(r,"__esModule",{value:!0}),r.parsePath=void 0;var t=a("8e80"),s=a("d0f0"),o=a("792e"),i=function(e,r,a,i){var c=i.parameters,u=i.summary,p=void 0===u?"":u,f=i.responses,m=i.deprecated,d=void 0!==m&&m,y=s.getRequestType(c),l=y.bodyParamsInterface,P=y.queryParamsInterface,v=y.pathParamsInterface,I=y.imports,b=t.getResponseType(f),h=b.responseInterface;return{imports:o.uniq([].concat(n(I),n(h.imports))),summary:p,deprecated:d,url:r,name:e,method:a,bodyParamsInterface:l,queryParamsInterface:P,pathParamsInterface:v,responseInterface:h}};r.parsePath=i},"8e80":function(e,r,a){"use strict";a("7a82"),Object.defineProperty(r,"__esModule",{value:!0}),r.getResponseType=void 0;var n=a("fff2"),t=200,s=function(e){if(!e[t])return{responseInterface:{type:"",imports:[],required:!1,description:"",isBinary:!1}};var r=e[t].schema;return{responseInterface:n.schemaToTsType(r)}};r.getResponseType=s},"95a9":function(e,r,a){"use strict";a("99af"),a("4160"),a("d81d"),a("13d5"),a("b8bf"),a("7a82"),a("b64b"),a("159b");var n=this&&this.__createBinding||(Object.create?function(e,r,a,n){void 0===n&&(n=a),Object.defineProperty(e,n,{enumerable:!0,get:function(){return r[a]}})}:function(e,r,a,n){void 0===n&&(n=a),e[n]=r[a]}),t=this&&this.__exportStar||function(e,r){for(var a in e)"default"===a||r.hasOwnProperty(a)||n(r,e,a)};Object.defineProperty(r,"__esModule",{value:!0}),r.compileInterfaces=void 0;var s=a("32fc"),o=a("59ae"),i=a("f55f"),c=a("2d3e"),u=a("fff2"),p=a("caf7"),f=function(e,r,a){var n=!r||!a;if(n)return"";var t=p.mergeDefaultConfig(e),i=e.source.paths[r][a].operationId;if(!i)return"";var c=o.parsePath(i,"".concat(e.source.basePath).concat(r),a,e.source.paths[r][a]),f=s.genPath(c,t.templateFunction);return u.formatCode(t.lang)(f)},m=function(e,r){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!e.definitions||c.shouldSkipGenerate(r,a))return"";c.parseInterface(e.definitions,r);try{return u.formatCode("ts")(i.genInterface(c.findInterface(r)))}catch(n){return console.warn("interfaceName: ".concat(r," 生成失败，检查是否符合 swagger 规范")),console.warn(n),"\n    // interfaceName: ".concat(r," 生成失败，检查是否符合 swagger 规范\n    \n    ")}},d=function(e,r){if(!e.definitions)return"";if(c.resetInterfaceMap(),r)return m(e,r,!0);var a="\n    /* eslint-disable */\n    // @ts-nocheck\n    // generated by free-swagger-client\n    \n    ",n=Object.keys(c.buildInInterfaces).reduce((function(e,r){return e+c.buildInInterfaces[r].code}),"");Object.keys(e.definitions).forEach((function(r){c.parseInterface(e.definitions,r)}));var t=Object.keys(c.map).reduce((function(r,a){return r+m(e,a)}),""),s=Object.keys(c.recursiveMap).reduce((function(e,r){return e+u.formatCode("ts")(i.genInterface(c.recursiveMap[r]))}),""),o=Object.keys(c.genericInterfaceMap).reduce((function(e,r){return e+u.formatCode("ts")(i.genInterface(c.genericInterfaceMap[r]))}),"");return u.formatCode("ts")(a+n+o+t+s)};r.compileInterfaces=d,r["default"]=f,t(a("a4e5"),r),t(a("fff2"),r),t(a("32fc"),r),t(a("59ae"),r)},a4e5:function(e,r,a){"use strict";a("7a82"),Object.defineProperty(r,"__esModule",{value:!0}),r.tsTemplate=r.jsTemplate=void 0,r.jsTemplate='\n// js template\n({\n  url,\n  summary,\n  method,\n  name,\n  responseType,\n  deprecated,\n  pathParams,\n  IQueryParams,\n  IBodyParams,\n  IPathParams\n}) => {\n  // 处理路径参数\n  // `/pet/{id}` => `/pet/${id}`\n const parsedUrl = url.replace(/{(.*?)}/g, \'${$1}\'); \n\n const onlyIQueryParams = IQueryParams && !IBodyParams\n const onlyIBodyParams = IBodyParams && !IQueryParams\n const multipleParams = IQueryParams && IBodyParams\n \n  return `\n  ${deprecated ? `/**deprecated*/` : ""}\n  ${summary ? `// ${summary}` : ""}\n  export const ${name} = (${\n   onlyIQueryParams\n    ? "params,"\n    : onlyIBodyParams \n    ? "params,"\n    : multipleParams\n    ? "queryParams,"\n    // no params\n    : IPathParams\n    ? "params,"\n    : ""\n  }${\n  IPathParams ? `{${pathParams.join(",")}},` : multipleParams ? "pathParams," : ""\n}${\n  multipleParams\n    ? `bodyParams: ${IBodyParams}`\n    : ""\n}) => axios.request({\n     url: \\`${parsedUrl}\\`,\n     method: "${method}",\n     params:'.concat('${ multipleParams ? "queryParams" : IQueryParams ? "params," : "{},"}',"\n     data:",'${ multipleParams ? "bodyParams" : IBodyParams ? "params," : "{},"}','\n     ${responseType === "json" ? "" : `responseType: ${responseType}`}\n })`;\n};'),r.tsTemplate='\n// ts template\n({\n  url,\n  summary,\n  method,\n  name,\n  responseType,\n  deprecated,\n  pathParams,\n  IResponse,\n  IQueryParams,\n  IBodyParams,\n  IPathParams\n}) => {\n  // 处理路径参数\n  // `/pet/{id}` => `/pet/${id}`\n const parsedUrl = url.replace(/{(.*?)}/g, \'${$1}\'); \n \n const onlyIQueryParams = IQueryParams && !IBodyParams\n const onlyIBodyParams = IBodyParams && !IQueryParams\n const multipleParams = IQueryParams && IBodyParams\n \n  return `\n  ${deprecated ? `/**deprecated*/` : ""}\n  ${summary ? `// ${summary}` : ""}  \n  export const ${name} = (${\n  onlyIQueryParams\n    ? `params: ${IQueryParams},`\n    : onlyIBodyParams \n    ? `params: ${IBodyParams},`\n    : multipleParams\n    ? `params: ${IQueryParams},`\n    // no params\n    :  IPathParams\n    ? "params:{[key:string]: never},"\n    : ""\n}${\n  pathParams.length ? `{${pathParams.join(",")}}: ${IPathParams},` : multipleParams ? "pathParams:{[key:string]: never}," : ""\n}${\n  multipleParams\n    ? `bodyParams: ${IBodyParams}`\n    : ""\n}) => axios.request<${IResponse || "any"},AxiosResponse<${IResponse ||\n"any"}>>({\n     url: \\`${parsedUrl}\\`,\n     method: "${method}",\n     params:'.concat('${ multipleParams ? "queryParams" : IQueryParams ? "params," : "{},"}',"\n     data:",'${ multipleParams ? "bodyParams" : IBodyParams ? "params," : "{},"}','\n     ${responseType === "json" ? "" : `responseType: ${responseType}`}\n })`;\n};')},caf7:function(module,exports,__webpack_require__){"use strict";__webpack_require__("7a82"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.mergeDefaultConfig=void 0;var template_1=__webpack_require__("a4e5");exports.mergeDefaultConfig=function(config){return Object.assign({lang:"js",templateFunction:eval(template_1.jsTemplate)},config)}},d0f0:function(e,r,a){"use strict";a("a4d3"),a("e01a"),a("4160"),a("45fc"),a("b0c0"),a("7a82"),a("159b");var n=a("448a");Object.defineProperty(r,"__esModule",{value:!0}),r.getRequestType=void 0;var t=a("fff2"),s=function(e,r){var a=[],s="",o=!1;if(e.schema||e.items){var i=t.schemaToTsType(e.schema||e.items);s=i.type,o=!!i.isBinary,a.push.apply(a,n(i.imports)),r.push.apply(r,n(i.imports))}else s=t.TYPE_MAP[e.type];return{type:s,imports:a,isBinary:o,description:e.description||"",required:e.required||!1}},o=function(e){if(!e||e.some(t.isRef))return{imports:[],pathParamsInterface:{},queryParamsInterface:{},bodyParamsInterface:{}};var r={},a={},n={},o=[];return e.forEach((function(e){switch(e["in"]){case"path":r[e.name]=s(e,o);break;case"query":a[e.name]=s(e,o);break;case"formData":n={type:"FormData",imports:[],isBinary:!0,description:"",required:!0};break;case"body":n=s(e,o);break;default:return}})),{imports:o,pathParamsInterface:r,bodyParamsInterface:n,queryParamsInterface:a}};r.getRequestType=o},f55f:function(e,r,a){"use strict";a("a4d3"),a("e01a"),a("99af"),a("d81d"),a("b0c0"),a("7a82"),a("4fad");var n=a("278c");Object.defineProperty(r,"__esModule",{value:!0}),r.genInterface=void 0;var t=function(e){var r=e.name,a=e.props,t=e.skipGenerate;return t?"":" \n    export interface ".concat(r," {\n        ").concat(Object.entries(a).map((function(e){var r=n(e,2),a=r[0],t=r[1];return"\n            ".concat(a," ").concat(t.required?"":"?",": ").concat(t.type,"  ").concat(t.description&&"// ".concat(t.description),"\n            ")})),"\n      }\n      ")};r.genInterface=t},fff2:function(e,r,a){"use strict";a("4de4"),a("4160"),a("caad"),a("277d"),a("a15b"),a("baa5"),a("d81d"),a("fb6a"),a("b0c0"),a("7a82"),a("b64b"),a("07ac"),a("2532"),a("159b");var n=a("448a"),t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.SPECIAL_CHARACTERS_MAP_CLOSE=r.SPECIAL_CHARACTERS_MAP_OPEN=r.TYPE_MAP=r.traverseTree=r.schemaToTsType=r.isRef=r.getRef=r.formatGenericInterface=r.formatCode=void 0;var s=t(a("24bc")),o=t(a("5b18")),i=t(a("cc89")),c=a("2d3e");Object.defineProperty(r,"formatGenericInterface",{enumerable:!0,get:function(){return c.formatGenericInterface}});var u={"«":"<","[":"<","{":"<","<":"<"};r.SPECIAL_CHARACTERS_MAP_OPEN=u;var p={"»":">","]":">","}":">",">":">"};r.SPECIAL_CHARACTERS_MAP_CLOSE=p;var f={boolean:"boolean",bool:"boolean",Boolean:"boolean",long:"number",Int64:"number",integer:"number",number:"number",string:"string",file:"Blob",formData:"FormData",Void:"void",object:"object",array:"Array<any>"};r.TYPE_MAP=f;var m=function e(r,a){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"generics";a(r),r[n]&&r[n].forEach((function(r){e(r,a,n)}))};r.traverseTree=m;var d=function(e){var r=e.slice(e.lastIndexOf("/")+1);return c.formatGenericInterface(r)};r.getRef=d;var y=function(e){return e&&!!e.$ref};r.isRef=y;var l=function(e){if(!e)return{type:"any",imports:[],isBinary:!1,required:!1,description:""};var r=[],a=function e(a){if(a.$ref){var t=/^\w*$/,s=d(a.$ref);return r.push.apply(r,n(c.flatInterfaceName(s).filter((function(e){return!Object.values(f).includes(e)})).filter((function(e){return t.test(e)})).map((function(e){return c.buildInInterfaces[e]?c.buildInInterfaces[e].name:e})))),s}if(!a.type)return"any";if("array"===a.type&&a.items)return"".concat(e(a.items),"[]");if("object"===a.type){var o="";return a.properties?(Object.keys(a.properties).forEach((function(r){o+=a.properties?e(a.properties[r]):""})),o):"object"}return a["enum"]?a["enum"].map((function(e){return'"'.concat(e,'"')})).join(" | "):Array.isArray(a.type)?JSON.stringify(a.type):f[a.type]};return{type:a(e),imports:r,isBinary:"file"===e.type,required:!1,description:""}};r.schemaToTsType=l;var P=function(e){return function(r){return s["default"].format(r,{plugins:[i["default"],o["default"]],printWidth:120,tabWidth:2,parser:"ts"===e?"typescript":"babel",trailingComma:"none"})}};r.formatCode=P}}]);