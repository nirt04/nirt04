(function(t){function e(e){for(var i,c,r=e[0],s=e[1],l=e[2],u=0,p=[];u<r.length;u++)c=r[u],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i]);d&&d(e);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(i=!1)}i&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var i={},o={app:0},a=[];function c(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=i,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(n,i,function(e){return t[e]}.bind(null,i));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/ContextMenu/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var d=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"393a":function(t,e,n){"use strict";var i=n("7c60"),o=n.n(i);o.a},"56d7":function(t,e,n){"use strict";n.r(e),n.d(e,"eventBus",(function(){return b}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var i,o,a=n("2b0e"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"div-1",attrs:{id:"div-1"}},[t._v(" LTR ")]),n("div",{staticClass:"div-2",attrs:{id:"div-2"}},[t._v(" RTL ")]),n("ContextApp",{attrs:{target:"div-1"}}),n("ContextApp",{attrs:{rtl:!0,target:"div-2"}})],1)},r=[],s=(n("99af"),n("4160"),n("d81d"),n("159b"),{created:function(){this.contextItemsCloned=JSON.parse(JSON.stringify(this.contextItems))},render:function(t){var e=this,n=[],i=function n(i,o){var a=i.map((function(i){var a=t("i",{class:"fas fa-caret-left",style:{color:"#737373"}}),c=t("i",{class:"fas fa-caret-right",style:{color:"#737373"}}),r=t("i",{style:{color:"#737373",marginLeft:e.$attrs.rtl?"5px":"unset",marginRight:e.$attrs.rtl?"unset":"5px"},class:i.icon}),s=t("span",{style:{display:"inline-block",paddingLeft:e.$attrs.rtl&&i.items?"50px":"unset",paddingRight:!e.$attrs.rtl&&i.items?"50px":"unset"}},i.text),l=(t("span",{style:{}},e.$attrs.rtl?[s,r]:[r,s]),function(){return i.icon?e.$attrs.rtl?t("span",{},[s,r]):t("span",{},[r,s]):[s]}),d=function(){return i.items&&e.$attrs.rtl?[a,l()]:i.items&&!e.$attrs.rtl?[l(),c]:[l()]},u=t("span",{style:{textAlign:e.$attrs.rtl?"end":"start",display:i.items||i.icon?"flex":"block",alignItems:"center",justifyContent:i.items?"space-between":e.$attrs.rtl?"flex-end":"flex-start",padding:"10px 0 ",paddingLeft:!i.items&&e.$attrs.rtl?"50px":"5px",paddingRight:i.items||e.$attrs.rtl?"5px":"50px",background:"".concat(!e.findContextItemById(o)||e.findContextItemById(o).selectedOption!==i.id&&e.findContextItemById(o).selectedOptionEcho!==i.id?"white":"orange")},class:"".concat(i.id||""," ").concat(e.$attrs.target,"-context"),on:{mouseover:function(){e.onOptionHover(i.id,o)}}},d());return i.seperator?t("hr",{style:{opacity:"0.35"}}):i.items?t("span",{on:{mouseover:function(){e.onOptionHover(i.id,o),e.onContextExpend(i.id)}},style:{padding:0,background:"".concat(e.findContextItemById(o)&&e.findContextItemById(o).selectedOption===i.id?"orange":"white")},class:"".concat(i.id||""," ").concat(e.$attrs.target,"-context")},[u,t("div",{class:"".concat(i.id,"-childs context-child-lgl-").concat(e.$attrs.rtl?"rtl":"ltr"," ").concat(e.$attrs.target,"-context"),style:{display:"".concat(e.findContextItemById(o)&&e.findContextItemById(o).selectedOption===i.id?"block":"none")}},n(i.items,i.id))]):u}));return a};return n=i(this.contextItems.items,this.contextItems.id),t("div",{on:{blur:function(){e.isContextVisable=!1,e.colapseExpanded()}},style:{left:"".concat(this.contextPosition.screenX,"px"),top:"".concat(this.contextPosition.screenY,"px"),visibility:"".concat(this.isContextVisable?"visible":"hidden")},class:"context-app--main-container ".concat(this.$attrs.target,"-context")},n)},computed:{},watch:{},data:function(){return{visableChilds:[],contextPosition:{screenY:0,screenX:0},contextItemsCloned:null,contextItems:{id:"root",selectedOption:null,selectedOptionEcho:null,items:[{text:"aaaaa",id:"root-child-1"},{text:"aaaaa",id:"root-child-2"},{seperator:!0,id:"root-child-sep"},{selectedOption:null,selectedOptionEcho:null,id:"parent1",icon:"fas fa-archway",text:"parent1",items:[{id:"parent1-child-1",text:"itemb"},{seperator:!0,id:"parent1-child-sep"},{id:"parent1-child-2",text:"itemb"},{id:"parent1-child-3",text:"itemb"},{selectedOption:null,selectedOptionEcho:null,id:"parent2",text:"parent2",items:[{id:"parent2-child-1",text:"itemc",icon:"fas fa-archway"},{id:"parent2-child-2",text:"itemc",icon:"fas fa-archway"},{id:"parent2-child-3",text:"itemc"}]}]},{text:"super-long-word-aaaaaaaaaaaaaa",id:"root-child-3",icon:"fab fa-adversal"},{text:"aaaaa",id:"root-child-4",icon:"fas fa-archway"},{text:"aaaaa",id:"root-child-5",icon:"fas fa-archway"},{text:"aaaaa",id:"root-child-6",icon:"fas fa-archway"}]},isContextVisable:!1}},methods:{setElementPosition:function(t,e,n,i,o){var a=document.querySelector(".".concat(this.$attrs.target,"-context.").concat(n)),c=e.getBoundingClientRect();t.style.left="".concat(i?c.x-t.clientWidth:c.x+a.clientWidth,"px"),t.style.top="".concat(c.y-5,"px"),this.isElementOverflowScreen(t)&&!o&&this.setElementPosition(t,e,n,!i,"final")},findContextItemById:function(t){if("root"===t)return this.contextItems;var e=function e(n){for(var i=null,o=0;o<n.length;o++)if(n[o].id===t?i=n[o]:n[o].items&&(i=e(n[o].items)),i)break;return i};return e(this.contextItems.items)},onOptionHover:function(t,e){var n=function t(e){void 0!==e.selectedOption&&(e.selectedOption=null,e.selectedOptionEcho=null),e.items&&e.items.forEach((function(e){t(e)}))},i=this.findContextItemById(e),o=this.findContextItemById(i.selectedOption)||null;if(void 0!==i.selectedOptionEcho&&(i.selectedOptionEcho=t),!i.selectedOption||o&&!o.items)return n(i),i.selectedOption=t;setTimeout((function(){i.selectedOptionEcho===t&&(i.selectedOption=t)}),200)},isElementOverflowScreen:function(t){var e=t.getBoundingClientRect();return e.x<0||e.y<0},onContextExpend:function(t){var e=document.querySelector(".".concat(this.$attrs.target,"-context.").concat(t)),n=document.querySelector(".".concat(this.$attrs.target,"-context.").concat(t,"-childs"));this.setElementPosition(n,e,t,this.$attrs.rtl)},colapseExpanded:function(){this.isContextVisable=!1;var t=document.querySelectorAll(".".concat(this.$attrs.target,"-context.context-child-lgl-").concat(this.$attrs.rtl?"rtl":"ltr"));t.forEach((function(t){return t.style.display="none"})),this.contextItems=JSON.parse(JSON.stringify(this.contextItemsCloned))},onWindowContextClick:function(t){t.target&&t.target.classList.contains(this.$attrs.target)||this.colapseExpanded()},onContextClick:function(t){b.$emit("windowContextMenu",this.$attrs.target);var e=document.querySelector(".".concat(this.$attrs.target,"-context.context-app--main-container"));this.contextPosition.screenY=t.clientY,this.contextPosition.screenX=t.clientX-(this.$attrs.rtl?e.getBoundingClientRect().width:0),this.isContextVisable=!this.isContextVisable,this.isContextVisable||this.colapseExpanded()}},mounted:function(){var t=this,e=document.querySelector(".".concat(this.$attrs.target));e.addEventListener("contextmenu",(function(n){n.preventDefault(),t.onContextClick(n),console.log("Context clicked over",e)})),window.addEventListener("click",(function(e){e.target&&e.target.classList.contains(t.$attrs.target)||t.colapseExpanded()})),window.oncontextmenu=function(t){b.$emit("onGlobalWindowContext",t)},b.$on("onGlobalWindowContext",(function(e){e.target&&e.target.classList.contains(t.$attrs.target)||t.colapseExpanded()}))}}),l=s,d=(n("393a"),n("2877")),u=Object(d["a"])(l,i,o,!1,null,"ae802fca",null),p=u.exports,f={mounted:function(){},name:"App",components:{ContextApp:p}},x=f,h=(n("5c0b"),Object(d["a"])(x,c,r,!1,null,null,null)),m=h.exports,g=n("ecee"),v=n("c074"),y=n("ad3d");a["a"].component("font-awesome-icon",y["a"]),g["c"].add(v["a"]);var b=new a["a"];a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(m)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var i=n("9c0c"),o=n.n(i);o.a},"7c60":function(t,e,n){},"9c0c":function(t,e,n){}});
//# sourceMappingURL=app.2eed01b3.js.map