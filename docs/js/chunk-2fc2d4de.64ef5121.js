(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2fc2d4de"],{"016f":function(t,e,s){},"053b":function(t,e,s){var a=s("1e2c"),i=s("d910").f,n=Function.prototype,r=n.toString,o=/^\s*function ([^ (]*)/,l="name";a&&!(l in n)&&i(n,l,{configurable:!0,get:function(){try{return r.call(this).match(o)[1]}catch(t){return""}}})},"0b96":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-backtop",{attrs:{target:this.tags}},[s("div",{staticClass:"back-ball"},[s("i",{staticClass:"el-icon-top"})])])},i=[],n={mounted:function(){},props:{tags:{type:String,default:""}}},r=n,o=(s("a956"),s("9ca4")),l=Object(o["a"])(r,a,i,!1,null,"73326458",null);e["a"]=l.exports},"0f57":function(t,e,s){},"46e4":function(t,e,s){},"4ea3":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mylabel"},[s("div",{staticClass:"mytop"},[s("myNav")],1),s("div",{staticClass:"mybody"},[s("h3",[t._v("留 言 板")]),s("el-card",{staticClass:"card1",attrs:{shadow:"hover"}},[s("div",{staticClass:"ly"},[s("i",{staticClass:"iconfont icon-liuyanban"}),s("div",[t._v("留言板")])])]),s("el-card",{staticClass:"card2",attrs:{shadow:"hover"}},[s("h3"),s("div",{staticClass:"pinlun"},[s("el-input",{attrs:{placeholder:"昵称",size:"small"},model:{value:t.user.name,callback:function(e){t.$set(t.user,"name",e)},expression:"user.name"}}),s("el-input",{attrs:{placeholder:"邮箱",size:"small"},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}}),s("el-input",{attrs:{placeholder:"网址",size:"small"},model:{value:t.user.ip,callback:function(e){t.$set(t.user,"ip",e)},expression:"user.ip"}}),s("el-input",{staticClass:"content",attrs:{type:"textarea",rows:6,placeholder:"请输入内容"},model:{value:t.user.content,callback:function(e){t.$set(t.user,"content",e)},expression:"user.content"}}),s("el-button",{on:{click:t.addContent}},[t._v("评论")]),s("br"),s("p",{staticStyle:{color:"#ccc","font-size":"15px",float:"left","margin-left":"40px"}},[t._v("由于没有后台 所以此处的评论都保存在本地的localStorage当中，也就是说本留言板板块实际上并没有交互功能")]),s("div",{staticClass:"show"},[s("ul",t._l(t.user,(function(e){return s("li",{key:e.ip},[s("div",{staticClass:"c_top"},[s("i",{staticClass:"el-icon-s-custom"}),s("div",[s("span",[t._v(t._s(e.name))]),s("p",[t._v(t._s(t._f("dateFormat")(e.time)))])]),s("br"),t._v(" "),s("br"),s("div",{staticClass:"ct"},[t._v(t._s(e.content))]),s("div",{staticClass:"hf"},[t._v("回复")])])])})),0)])],1)])],1),s("div",{staticClass:"myfoot"},[s("my-bottom")],1),s("backtop",{attrs:{tags:t.targets}})],1)},i=[],n=(s("053b"),s("aa16")),r=s("a0f9"),o=s("0b96"),l={data:function(){return{targets:".mylabel",user:[]}},created:function(){this.refesMsg()},methods:{addContent:function(){var t=JSON.parse(localStorage.getItem("userMsg"));if(console.log(t),null===t){var e=[];console.log(JSON.stringify(e)),localStorage.setItem("userMsg",JSON.stringify(e))}var s=new Date,a={name:this.user.name,email:this.user.email,ip:this.user.ip,content:this.user.content,time:s};if(void 0!==a.name&&void 0!==a.email&&void 0!==a.ip&&void 0!==a.content){e=JSON.parse(localStorage.getItem("userMsg"));e.push(a),console.log(e),this.user=e,localStorage.setItem("userMsg",JSON.stringify(e))}},refesMsg:function(){var t=JSON.parse(localStorage.getItem("userMsg"));if(null===t){var e=[];this.user=localStorage.setItem("userMsg",JSON.stringify(e))}this.user=JSON.parse(localStorage.getItem("userMsg"))}},filters:{dateFormat:function(t){var e=new Date(t),s=e.getFullYear(),a=e.getMonth()+1>9?e.getMonth()+1:"0"+(e.getMonth()+1),i=e.getDate()>9?e.getDate():"0"+e.getDate(),n=e.getHours()>9?e.getHours():"0"+e.getHours(),r=e.getMinutes()>9?e.getMinutes():"0"+e.getMinutes(),o=e.getSeconds()>9?e.getSeconds():"0"+e.getSeconds(),l=s+"-"+a+"-"+i+" "+n+":"+r+":"+o;return l}},components:{myNav:n["a"],myBottom:r["a"],backtop:o["a"]}},c=l,u=(s("f28e"),s("9ca4")),d=Object(u["a"])(c,a,i,!1,null,"b9e88e7e",null);e["default"]=d.exports},"564e":function(t,e,s){"use strict";var a=s("016f"),i=s.n(a);i.a},7038:function(t,e,s){"use strict";var a=s("46e4"),i=s.n(a);i.a},9025:function(t,e,s){"use strict";var a=s("0f57"),i=s.n(a);i.a},a0f9:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bts themecolor"},[t._m(0),s("div",{staticClass:"lianxi2"},[s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"访问我的csdn",placement:"top"}},[s("a",{attrs:{href:"#"}},[s("i",{staticClass:"iconfont icon-csdn"})])]),s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"访问我的qq",placement:"top"}},[s("a",{attrs:{href:"#"}},[s("i",{staticClass:"iconfont icon-qq"})])]),s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"访问我的微信",placement:"top"}},[s("a",{attrs:{href:"#"}},[s("i",{staticClass:"iconfont icon-weixin1"})])]),s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"访问我的github",placement:"top"}},[s("a",{attrs:{href:"#"}},[s("i",{staticClass:"iconfont icon-huaban88"})])])],1)])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bts_a"},[s("div",{staticStyle:{"margin-top":"20px"}},[t._v("Copyright © 2020 iJun | Powered by Vue | Theme Matery")]),s("div",[t._v("本站于2020年7月上线试用")])])}],n={},r=n,o=(s("7038"),s("9ca4")),l=Object(o["a"])(r,a,i,!1,null,"ef57ebd6",null);e["a"]=l.exports},a658:function(t,e,s){},a956:function(t,e,s){"use strict";var a=s("a658"),i=s.n(a);i.a},aa16:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"navsBoss",class:this.num>100?"themecolor":""},[s("div",{ref:"navsRef",staticClass:"navs"},[s("chouti",{staticClass:"cd"}),t._m(0),s("div",{staticClass:"nv-right"},[s("ul",[s("router-link",{attrs:{to:"/"}},[s("li",[s("a",{attrs:{href:"#"}},[s("i",{staticClass:"el-icon-s-home"}),s("span",[t._v("首页")])])])]),s("router-link",{attrs:{to:"/mylabel"}},[s("li",[s("a",{attrs:{href:"#"}},[s("i",{staticClass:"el-icon-s-order"}),s("span",[t._v("标签")])])])]),s("li",[s("a",{attrs:{href:"#"}},[s("i",{staticClass:"el-icon-postcard"}),s("el-dropdown",[s("span",{staticClass:"el-dropdown-link"},[t._v(" 框架"),s("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),s("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[s("router-link",{attrs:{to:"/reacthome"}},[s("el-dropdown-item",{attrs:{icon:"el-icon-plus"}},[t._v("react")])],1),s("router-link",{attrs:{to:"/reactnativehome"}},[s("el-dropdown-item",{attrs:{icon:"el-icon-circle-plus"}},[t._v("react native")])],1)],1)],1)],1)]),s("router-link",{attrs:{to:"/archives"}},[s("li",[s("a",{attrs:{href:"#"}},[s("i",{staticClass:"el-icon-s-claim"}),s("span",[t._v("归档")])])])]),s("li",[s("a",{attrs:{href:"#"}},[s("i",{staticClass:"el-icon-postcard"}),s("el-dropdown",[s("span",{staticClass:"el-dropdown-link"},[t._v(" 关于"),s("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),s("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[s("router-link",{attrs:{to:"/aboutme"}},[s("el-dropdown-item",{attrs:{icon:"el-icon-plus"}},[t._v("关于我")])],1),s("router-link",{attrs:{to:"/another"}},[s("el-dropdown-item",{attrs:{icon:"el-icon-circle-plus"}},[t._v("Another")])],1)],1)],1)],1)]),s("li",[s("router-link",{attrs:{to:"/comment"}},[s("a",{attrs:{href:"#"}},[s("i",{staticClass:"el-icon-chat-dot-round"}),s("span",[t._v("留言板")])])])],1),s("li",[s("router-link",{attrs:{to:"/friends"}},[s("a",{attrs:{href:"#"}},[s("i",{staticClass:"el-icon-search search"}),s("span",[t._v("友情链接")])])])],1)],1)])],1)])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nv-left"},[a("a",{attrs:{href:"/"}},[a("img",{attrs:{src:s("e17d"),alt:""}}),a("span",[t._v("iJun's Blog")])])])}],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"chouti"},[a("i",{staticClass:"el-icon-s-unfold",staticStyle:{"margin-left":"-34px"},attrs:{type:"primary"},on:{click:function(e){t.drawer=!0}}}),a("el-drawer",{staticClass:"dw",attrs:{direction:"ltr",title:"我是标题",visible:t.drawer,"with-header":!1},on:{"update:visible":function(e){t.drawer=e}}},[a("div",{staticClass:"dr_top"},[a("img",{attrs:{src:s("e17d"),alt:""}}),a("h3",[t._v("iJun's Blog")]),a("p",[t._v("专注于Web,分享生活,分享知识")])]),a("div",{staticClass:"dr_body"},[a("ul",[a("router-link",{attrs:{to:"/"}},[a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"el-icon-s-home"}),a("span",[t._v("首页")])])])]),a("router-link",{attrs:{to:"/mylabel"}},[a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"el-icon-s-order"}),a("span",[t._v("标签")])])])]),a("router-link",{attrs:{to:"/reacthome"}},[a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"el-icon-s-shop"}),a("span",[t._v("前端框架")])])])]),a("router-link",{attrs:{to:"/archives"}},[a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"el-icon-s-claim"}),a("span",[t._v("归档")])])])]),a("li",[a("a",{attrs:{href:"#"}},[a("el-menu",[a("el-submenu",{attrs:{index:"1"}},[a("template",{slot:"title"},[a("i",{staticClass:"el-icon-postcard"}),a("span",[t._v("关于")])]),a("router-link",{attrs:{to:"/aboutme"}},[a("el-menu-item",{staticStyle:{"padding-left":"100px"},attrs:{index:"1-1"}},[a("i",{staticClass:"el-icon-plus"}),t._v(" 关于我 ")])],1),a("router-link",{attrs:{to:"/another"}},[a("el-menu-item",{staticStyle:{"padding-left":"100px"},attrs:{index:"1-2"}},[a("i",{staticClass:"el-icon-circle-plus"}),t._v(" Another ")])],1)],2)],1)],1)]),a("li",[a("router-link",{attrs:{to:"/comment"}},[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"el-icon-chat-dot-round"}),a("span",[t._v("留言板")])])])],1),a("li",[a("router-link",{attrs:{to:"/friends"}},[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"el-icon-search search"}),a("span",[t._v("友情链接")])])])],1)],1)])])],1)},r=[],o={data:function(){return{drawer:!1}}},l=o,c=(s("564e"),s("9ca4")),u=Object(c["a"])(l,n,r,!1,null,"14112c4b",null),d=u.exports,f={data:function(){return{num:null}},methods:{getScroll:function(t){this.num=t.target.scrollTop}},mounted:function(){window.addEventListener("scroll",this.getScroll,!0)},components:{chouti:d}},p=f,m=(s("9025"),Object(c["a"])(p,a,i,!1,null,"50c453cc",null));e["a"]=m.exports},df4b:function(t,e,s){},e17d:function(t,e,s){t.exports=s.p+"img/123.c21b830d.png"},f28e:function(t,e,s){"use strict";var a=s("df4b"),i=s.n(a);i.a}}]);
//# sourceMappingURL=chunk-2fc2d4de.64ef5121.js.map