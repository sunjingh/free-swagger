(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3636a255"],{"047c":function(e,t,a){var n=a("3546");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=a("499e").default;r("5d9a6cfa",n,!0,{sourceMap:!1,shadowMode:!1})},3546:function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,".shallow-yellow[data-v-7552c5e4]{background:rgba(255,247,238,.6901960784313725)}.option-container[data-v-7552c5e4]{display:flex}.option-container .summary[data-v-7552c5e4]{color:hsla(0,0%,50.2%,.6509803921568628);margin-left:10px}.option-container .label[data-v-7552c5e4]{display:flex;justify-content:center;align-items:center;width:70px;padding-left:20px}.option-container .light-green[data-v-7552c5e4]{color:#1ce3c3}.option-container .red[data-v-7552c5e4]{color:#ff3f45}.option-container .purple[data-v-7552c5e4]{color:#941af9}.option-container .pink[data-v-7552c5e4]{color:pink}.option-container .yellow[data-v-7552c5e4]{color:#ffa142}.option-container .green[data-v-7552c5e4]{color:#67c23a}.option-container .blue[data-v-7552c5e4]{color:#409eff}.option-container .added[data-v-7552c5e4]{position:absolute;left:20px}.option-container .path[data-v-7552c5e4]{margin-left:10px;width:400px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.search[data-v-7552c5e4]{width:400px;margin-right:12px}",""]),e.exports=t},"3bf6":function(e,t,a){var n=a("f75b");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=a("499e").default;r("57fed654",n,!0,{sourceMap:!1,shadowMode:!1})},"3dfd":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.collapse?a("div",{staticClass:"collapse",on:{click:function(t){e.collapse=!e.collapse}}},[a("i",{staticClass:"el-icon-setting"})]):a("div",{attrs:{id:"extends-app"}},[a("api-options",{ref:"apiOptions"}),a("div",{staticClass:"operation-container"},[a("el-link",{attrs:{underline:!1},on:{click:function(t){return e.handleCopyPath()}}},[e._v("复制url")]),a("el-link",{attrs:{underline:!1},on:{click:function(t){return e.handleCopyApi()}}},[e._v("复制snippet")]),a("el-link",{attrs:{underline:!1},on:{click:function(t){return e.handleCopyFake()}}},[e._v("复制模拟数据")]),a("div",{staticClass:"switch-container"},[a("span",{staticClass:"text"},[e._v("语言：")]),a("el-switch",{attrs:{"active-value":"ts","inactive-value":"js","active-color":"#409eff","inactive-color":"#ecac0f","active-text":"TS","inactive-text":"JS"},model:{value:e.state.storage.currentLanguage,callback:function(t){e.$set(e.state.storage,"currentLanguage",t)},expression:"state.storage.currentLanguage"}})],1)],1),a("div",{staticClass:"collapse"},[a("div",{staticClass:"right"},[a("more-setting",{staticClass:"more-setting"})],1),a("i",{staticClass:"el-icon-caret-left",on:{click:function(t){e.collapse=!e.collapse}}})])],1)},r=[],o=(a("99af"),a("4de4"),a("7db0"),a("4160"),a("baa5"),a("fb6a"),a("ac1f"),a("5319"),a("159b"),a("b85c")),i=a("3835"),s=a("2909"),c=(a("96cf"),a("1da1")),l=a("ed08"),p=a("3b29"),u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"more-setting"},[a("el-dropdown",{attrs:{placement:"top"}},[a("el-button",{attrs:{type:"primary",size:"mini"}},[e._v(" 更多配置"),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("div",{staticClass:"top-area"},[a("div",[e._v("snippet 附加功能")]),a("div",{on:{click:function(e){e.stopPropagation()}}},[a("span",{staticClass:"js-doc-text"},[e._v("JS Doc")]),a("el-switch",{attrs:{"active-text":"开","inactive-text":"关"},model:{value:e.state.storage.useJsDoc,callback:function(t){e.$set(e.state.storage,"useJsDoc",t)},expression:"state.storage.useJsDoc"}})],1),a("div",{on:{click:function(e){e.stopPropagation()}}},[a("span",{staticClass:"js-doc-text"},[e._v("Interface")]),a("el-switch",{attrs:{"active-text":"开","inactive-text":"关"},model:{value:e.state.storage.useInterface,callback:function(t){e.$set(e.state.storage,"useInterface",t)},expression:"state.storage.useInterface"}})],1)]),a("el-dropdown-item",{nativeOn:{click:function(t){e.dialog=!0}}},[e._v("编辑模版")]),a("el-dropdown-item",{nativeOn:{click:function(t){return e.handleCopyJsDoc()}}},[e._v("复制全量 JS Doc（JS）")]),a("el-dropdown-item",{nativeOn:{click:function(t){return e.handleCopyInterface()}}},[e._v("复制全量 Interface（TS）")])],1)],1),a("el-dialog",{attrs:{visible:e.dialog,center:"","modal-append-to-body":!1,width:"1000px",title:"编辑 snippet 模版"},on:{"update:visible":function(t){e.dialog=t}}},[a("el-form",{attrs:{model:e.form,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"模版语言"}},[a("el-select",{on:{change:e.handleLangChange},model:{value:e.state.storage.exportLanguage,callback:function(t){e.$set(e.state.storage,"exportLanguage",t)},expression:"state.storage.exportLanguage"}},[a("el-option",{attrs:{label:"javascript",value:"js"}}),a("el-option",{attrs:{label:"typescript",value:"ts"}})],1)],1),a("el-form-item",[a("span",{attrs:{slot:"label"},slot:"label"},[a("el-tooltip",{attrs:{effect:"light",placement:"left-start"}},[a("el-link",{attrs:{slot:"content"},on:{click:e.handleLink},slot:"content"},[e._v("https://www.npmjs.com/package/free-swagger-client")]),a("i",{staticClass:"el-icon-question"})],1),e._v(" 模版")],1),a("div",{attrs:{id:"textarea"}}),a("div",{staticClass:"mt-20"},[a("el-button",{attrs:{size:"small",disabled:"js"!==e.state.storage.exportLanguage},on:{click:e.handleResetJs}},[e._v("重置为默认js模版")]),a("el-button",{attrs:{size:"small",disabled:"ts"!==e.state.storage.exportLanguage},on:{click:e.handleResetTs}},[e._v("重置为默认ts模版")])],1)]),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.handleSubmit}},[e._v("保存")]),a("el-button",{on:{click:function(t){e.dialog=!1}}},[e._v("取消")])],1)],1)],1)],1)},d=[],f=(a("0fb7"),a("450d"),a("f529")),h=a.n(f),m=a("33f9"),v=a("95a9"),g={name:"MoreSetting",data:function(){return{state:p["state"],dialog:!1,instance:null,form:{jsTemplate:"",tsTemplate:""}}},watch:{dialog:{handler:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!e){a.next=9;break}return a.next=3,t.$nextTick();case 3:t.instance=m["editor"].create(document.querySelector("#textarea"),{value:"js"===p["state"].storage.exportLanguage?p["state"].storage.jsTemplate:p["state"].storage.tsTemplate,theme:"vs-dark",language:"javascript",automaticLayout:!0}),t.instance.onDidChangeModelContent((function(){t.handleInput(t.instance.getValue())})),t.form.jsTemplate=p["state"].storage.jsTemplate,t.form.tsTemplate=p["state"].storage.tsTemplate,a.next=10;break;case 9:null===(n=t.instance)||void 0===n||n.dispose();case 10:case"end":return a.stop()}}),a)})))()},immediate:!0}},methods:{handleCopyJsDoc:p["handleCopyJsDoc"],handleCopyInterface:p["handleCopyInterface"],handleInput:function(e){"js"===p["state"].storage.exportLanguage?this.form.jsTemplate=e:this.form.tsTemplate=e},handleLangChange:function(e){var t;"js"===e?this.form.jsTemplate=p["state"].storage.jsTemplate:this.form.tsTemplate=p["state"].storage.tsTemplate,null===(t=this.instance)||void 0===t||t.setValue("js"===e?this.form.jsTemplate:this.form.tsTemplate)},openAllController:function(){if(p["state"].isNewUi)return h.a.error("新 swagger ui 无法使用该功能");var e=document.querySelectorAll(".opblock-tag-section:not(.is-open)");e.forEach((function(e){return e.firstChild.click()}))},closeAllController:function(){if(p["state"].isNewUi)return h.a.error("新 swagger ui 无法使用该功能");var e=document.querySelectorAll(".opblock-tag-section.is-open");e.forEach((function(e){return e.firstChild.click()}))},handleResetJs:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.form.jsTemplate=v["jsTemplate"],null===(a=e.instance)||void 0===a||a.setValue(v["jsTemplate"]);case 2:case"end":return t.stop()}}),t)})))()},handleResetTs:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.form.tsTemplate=v["tsTemplate"],null===(a=e.instance)||void 0===a||a.setValue(v["tsTemplate"]);case 2:case"end":return t.stop()}}),t)})))()},handleLink:function(){window.open("https://www.npmjs.com/package/free-swagger-client","_blank")},handleSubmit:function(){p["state"].storage.jsTemplate=this.form.jsTemplate,p["state"].storage.tsTemplate=this.form.tsTemplate,h.a.success("保存成功"),this.dialog=!1}}},b=g,x=(a("ee19"),a("2877")),w=Object(x["a"])(b,u,d,!1,null,"535fea6d",null),k=w.exports,y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-select",{staticClass:"search",attrs:{size:"mini",placeholder:"请选择 api",filterable:""},on:{change:e.handleSearch},model:{value:e.state.key,callback:function(t){e.$set(e.state,"key",t)},expression:"state.key"}},e._l(e.state.options,(function(t,n){return a("el-option",{key:n,attrs:{value:t.key},on:{change:function(t){return e.handleCopyApi()}}},[a("div",{staticClass:"option-container"},[a("div",{class:["label",{"light-green":"patch"===t.method,pink:"options"===t.method,purple:"head"===t.method,green:"get"===t.method,blue:"post"===t.method,yellow:"put"===t.method,red:"delete"===t.method}]},[e._v(" "+e._s(t.method)+" ")]),a("div",{staticClass:"path"},[e._v(e._s(t.path))]),a("div",{staticClass:"summary"},[e._v(e._s(t.collection.summary))])])])})),1)},C=[],j=a("4f0c"),T={name:"ApiOptions",data:function(){return{state:p["state"]}},watch:{"state.options":function(e){e.length&&(p["state"].key=e[0].key,this.handleSearch(p["state"].key))}},methods:{handleCopyApi:p["handleCopyApi"],findControllerDom:function(e){var t=e.isNewUi,a=e.controller,n=t?'[title="'.concat(a,'"]'):"#operations-tag-".concat(a);return document.querySelector(n)},findApiDom:function(e){var t=e.controllerDom,a=e.isNewUi,n=e.operationId,r=a?'[data-hashurl$="'.concat(n,'"]'):'[id$="'.concat(n,'"]');return a?t.querySelector(r):t.parentNode.querySelector(r)},openControllerDom:function(e,t){var a=t?e.classList.contains("open"):e.parentNode.classList.contains("is-open");a||(t?e.querySelector("* > a").click():e.click())},clickApiDom:function(e,t){t?e.click():e.classList.contains("is-open")||e.firstChild.click()},expandApiCollapse:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){var n,r,o,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(n=e.controller,r=e.operationId,o=t.findControllerDom({isNewUi:p["state"].isNewUi,controller:n}),o){a.next=4;break}return a.abrupt("return",!1);case 4:return t.openControllerDom(o,p["state"].isNewUi),a.next=7,t.$nextTick();case 7:if(i=t.findApiDom({isNewUi:p["state"].isNewUi,controllerDom:o,operationId:r}),i){a.next=10;break}return a.abrupt("return",!1);case 10:return t.clickApiDom(i),a.abrupt("return",{apiDom:i,controllerDom:o});case 12:case"end":return a.stop()}}),a)})))()},handleSearch:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return p["state"].currentApi=p["state"].options.find((function(t){return t.key===e})),Object(p["handleCopyApi"])(p["state"].currentApi.path,p["state"].currentApi.method,p["state"].swagger),a.next=4,Object(l["a"])({cb:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var a,r,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=p["state"].currentApi.collection,r=a.controller,o=a.operationId,e.next=3,t.expandApiCollapse({controller:r,operationId:o});case 3:return i=e.sent,e.next=6,t.$nextTick();case 6:p["state"].isNewUi=!window.ui,i&&(n=i.apiDom,n.scrollIntoView({behavior:"smooth"}),Object(j["c"])(n,"custom-highlight-anime"));case 8:case"end":return e.stop()}}),e)})));function a(){return e.apply(this,arguments)}return a}(),endCondition:function(){return n},retryNumber:10,success:function(){p["state"].domLoaded=!0},error:function(){return console.error("Error: 请输入 dom 节点")}});case 4:case"end":return a.stop()}}),a)})))()}}},_=T,A=(a("902e"),Object(x["a"])(_,y,C,!1,null,"7552c5e4",null)),O=A.exports,S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"api-icons"},[a("el-tooltip",{attrs:{content:"复制url"}},[a("svg-icon",{staticClass:"url",attrs:{name:"url"},on:{click:function(t){return e.handleCopyPath(e.path,e.method)}}})],1),a("el-tooltip",{attrs:{content:"复制snippet"}},[a("svg-icon",{staticClass:"snippet",attrs:{name:"snippet"},on:{click:function(t){return e.handleCopyApi(e.path,e.method)}}})],1),a("el-tooltip",{attrs:{content:"复制模拟数据"}},[a("span",{staticClass:"mock",on:{click:function(t){return e.handleCopyFake(e.path,e.method)}}},[e._v("mock")])])],1)},L=[],R={name:"ApiIcons",props:{path:{type:String,required:!0},method:{type:String,required:!0},summary:{type:String,required:!0}},methods:{handleCopyPath:p["handleCopyPath"],handleCopyApi:p["handleCopyApi"],handleCopyFake:p["handleCopyFake"]}},I=R,q=(a("9a80"),Object(x["a"])(I,S,L,!1,null,"2bde9f82",null)),D=q.exports,N=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-tooltip",{attrs:{content:"复制interface"}},[a("svg-icon",{attrs:{name:"ts"},on:{click:function(t){return e.handleCopyInterface(e.state.swagger,e.interfaceName)}}})],1)},$=[],E={name:"InterfaceIcon",props:{interfaceName:{type:String,required:!0}},data:function(){return{state:p["state"]}},methods:{handleCopyInterface:p["handleCopyInterface"]}},F=E,M=(a("5460"),Object(x["a"])(F,N,$,!1,null,"3a139dd0",null)),J=M.exports,U=a("2b0e"),z=U["default"].extend(J),P=U["default"].extend(D),V=function(e){var t=new z({propsData:{interfaceName:e}}).$mount();return t.$el},H=function(e,t,a){var n=new P({propsData:{path:e,method:t,summary:a}}).$mount();return n.$el},B=a("5b5d"),G=a.n(B),K={name:"app",components:{MoreSetting:k,ApiOptions:O},data:function(){return{state:p["state"],collapse:!1}},watch:{"state.domLoaded":function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(e){a.next=2;break}return a.abrupt("return");case 2:if(!p["state"].isNewUi){a.next=7;break}return a.next=5,t.injectForController(void 0,!0);case 5:a.next=11;break;case 7:return a.next=9,t.bindClickEventForController();case 9:return a.next=11,t.bindClickEventForModel();case 11:case"end":return a.stop()}}),a)})))()}},methods:{handleCopyApi:p["handleCopyApi"],handleCopyPath:p["handleCopyPath"],handleCopyFake:p["handleCopyFake"],bindClickEventForController:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var a,n,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(l["b"])();case 2:return a=Object(s["a"])(document.querySelectorAll(".opblock-tag")),a.forEach((function(t){return t.addEventListener("click",(function(t){e.injectForController(t.currentTarget)}))})),n=a.filter((function(e){return e.parentNode.classList.contains("is-open")})),r=Object(i["a"])(n,1),o=r[0],t.next=7,e.injectForController(o);case 7:case"end":return t.stop()}}),t)})))()},injectForController:function(e){var t=arguments,a=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=t.length>1&&void 0!==t[1]&&t[1],e||r){n.next=3;break}return n.abrupt("return");case 3:return n.next=5,Object(l["b"])(0);case 5:o=r?Object(s["a"])(document.querySelectorAll("li.menuLi")):Object(s["a"])(e.nextSibling.querySelectorAll(".opblock")),o.forEach((function(e){p["state"].isNewUi||a.injectApiIconsForApiNode(e),a.bindClickApiHandlerForApiNode(e,p["state"].isNewUi)}));case 7:case"end":return n.stop()}}),n)})))()},injectApiIconsForApiNode:function(e){var t,a,n;e.style.position="relative";var r=null===(t=e.querySelector(".opblock-summary-method"))||void 0===t?void 0:t.innerText,o=null===(a=e.querySelector(".opblock-summary-path"))||void 0===a?void 0:a.innerText.replace(/\u200B/g,""),i=null===(n=e.querySelector(".opblock-summary-description"))||void 0===n?void 0:n.innerText;if(r&&o&&i){var s=H(o,r.toLowerCase(),i);e.appendChild(s)}},bindClickApiHandlerForApiNode:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.addEventListener("click",(function(e){var a=e.currentTarget;if(t){var n,r=a.dataset.hashurl,s=r.lastIndexOf("/"),c=r.slice(s+1,r.length),l=Object(o["a"])(new G.a(p["state"].swagger.paths));try{for(l.s();!(n=l.n()).done;){var u=n.value,d=u.node,f=u.path;if(d===c){var h=function(){var e=Object(i["a"])(f,2),t=e[0],a=e[1],n="".concat(a," ").concat(t," ").concat(p["state"].swagger.paths[t][a].summary);return p["state"].key=n,p["state"].currentApi=p["state"].options.find((function(e){return e.key===n})),"break"}();if("break"===h)break}}}catch(y){l.e(y)}finally{l.f()}}else{var m,v,g,b=null===(m=a.querySelector(".opblock-summary-method"))||void 0===m?void 0:m.innerText,x=null===(v=a.querySelector(".opblock-summary-path"))||void 0===v?void 0:v.innerText,w=null===(g=a.querySelector(".opblock-summary-description"))||void 0===g?void 0:g.innerText;if(!b||!x||!w)return;var k=b.toLowerCase()+" "+x+" "+w;p["state"].key=k,p["state"].currentApi=p["state"].options.find((function(e){return e.key===k}))}Object(p["handleCopyApi"])()}))},bindClickEventForModel:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$nextTick();case 2:null===(a=document.querySelector(".models"))||void 0===a||null===(n=a.firstChild)||void 0===n||n.addEventListener("click",e.modelTagHandler);case 3:case"end":return t.stop()}}),t)})))()},modelTagHandler:function(){return Object(c["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(l["b"])(0);case 2:t=Object(s["a"])(document.querySelectorAll(".model-container")),t.forEach((function(e){e.style.position="relative";var t=V(e.innerText);e.appendChild(t)}));case 4:case"end":return e.stop()}}),e)})))()}}},Q=K,W=(a("4203"),Object(x["a"])(Q,n,r,!1,null,"718ca580",null));t["default"]=W.exports},4203:function(e,t,a){"use strict";a("3bf6")},5460:function(e,t,a){"use strict";a("b328")},"902e":function(e,t,a){"use strict";a("047c")},"90a7":function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,".more-setting[data-v-535fea6d]{display:inline-block}.el-icon-question[data-v-535fea6d]:hover{cursor:pointer;color:#409eff}#textarea[data-v-535fea6d]{height:400px}.js-doc-text[data-v-535fea6d]{margin-right:10px}[data-v-535fea6d] .el-switch__label *{line-height:normal}.mt-20[data-v-535fea6d]{margin-top:20px}.top-area[data-v-535fea6d]{color:#606266;padding:0 20px;margin-bottom:10px;border-bottom:1px solid #dee0e3}.top-area>div[data-v-535fea6d]{cursor:default;display:flex;line-height:35px;align-items:center;justify-content:space-between}",""]),e.exports=t},"90db":function(e,t,a){var n=a("90a7");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=a("499e").default;r("617ce6f0",n,!0,{sourceMap:!1,shadowMode:!1})},"9a80":function(e,t,a){"use strict";a("f30c")},b328:function(e,t,a){var n=a("b611");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=a("499e").default;r("11fadc14",n,!0,{sourceMap:!1,shadowMode:!1})},b611:function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,".svg-icon[data-v-3a139dd0]{font-size:22px;position:absolute;right:20px;top:20px}",""]),e.exports=t},ee19:function(e,t,a){"use strict";a("90db")},f30c:function(e,t,a){var n=a("ff0c");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=a("499e").default;r("2d1dc29f",n,!0,{sourceMap:!1,shadowMode:!1})},f75b:function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,".collapse[data-v-718ca580]{height:50px;position:fixed;right:10px;bottom:-3px;display:flex;justify-content:center;align-items:center}.collapse>i[data-v-718ca580]{font-size:20px;color:#409eff;cursor:pointer}.operation-container[data-v-718ca580]{min-width:600px;display:flex;align-items:center}.operation-container>a[data-v-718ca580]{margin-right:15px}#extends-app[data-v-718ca580]{display:flex;position:fixed;z-index:100;right:0;bottom:0;width:100%;padding:10px;background-color:#f1f1f1}.switch-container[data-v-718ca580]{display:flex;align-items:center;margin-right:20px}.switch-container .text[data-v-718ca580]{font-weight:700;color:#606266;font-size:14px}.right[data-v-718ca580]{width:100%!important;height:100%;display:flex;justify-content:space-between;align-items:center}.right[data-v-718ca580],.right .more-setting[data-v-718ca580]{margin-right:20px}[data-v-718ca580] .el-switch__label *{line-height:normal}[data-v-718ca580] .el-switch__label--left{color:#ffa142!important}[data-v-718ca580] .el-switch__label--right{color:#409eff!important}",""]),e.exports=t},ff0c:function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,".api-icons[data-v-2bde9f82]{position:absolute;top:11px;right:55px;width:160px;display:flex;justify-content:space-between;align-items:center}.svg-icon[data-v-2bde9f82]{font-size:20px}.url[data-v-2bde9f82]{font-size:16px}.mock[data-v-2bde9f82]{cursor:pointer}",""]),e.exports=t}}]);