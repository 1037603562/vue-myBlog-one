(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d4a431c"],{"0b96":function(t,s,a){"use strict";var r=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("el-backtop",{attrs:{target:this.tags}},[a("div",{staticClass:"back-ball"},[a("i",{staticClass:"el-icon-top"})])])},e=[],i={mounted:function(){},props:{tags:{type:String,default:""}}},n=i,o=(a("a956"),a("2877")),c=Object(o["a"])(n,r,e,!1,null,"73326458",null);s["a"]=c.exports},"888d":function(t,s,a){"use strict";var r=a("c53c"),e=a.n(r);e.a},"88da":function(t,s,a){},"8b49":function(t,s,a){"use strict";a.r(s);var r=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"myvue"},[a("div",{staticClass:"mytop"},[a("myNav")],1),a("div",{staticClass:"mybody"},[a("div",{staticClass:"my_card"},[a("el-card",[a("div",[t._v(" // 入口文件 import Vue from 'vue'"),a("br"),t._v(" // 配置vuex的步骤"),a("br"),t._v(" // 1. 运行 cnpm i vuex -S"),a("br"),t._v(" // 2. 导入包"),a("br"),t._v(" import Vuex from 'vuex'"),a("br"),t._v(" // 3. 注册vuex到vue中"),a("br"),t._v(" Vue.use(Vuex)"),a("br"),t._v(" // 4. new Vuex.Store() 实例，得到一个 数据仓储对象"),a("br"),t._v(" var store = new Vuex.Store({"),a("br"),a("br"),a("br"),a("br"),t._v(" state: {"),a("br"),t._v(" // 大家可以把 state 想象成 组件中的 data ,专门用来存储数据的"),a("br"),t._v(" // 如果在 组件中，想要访问，store 中的数据，只能通过 this.$store.state.*** 来访问"),a("br"),t._v(" count: 0"),a("br"),t._v(" },"),a("br"),a("br"),a("br"),a("br"),t._v(" mutations: {"),a("br"),t._v(" //mutations相对于组件中的methods,但是他不能使用异步方法（定时器，axios)"),a("br"),t._v(" // 注意： 如果要操作 store 中的 state 值，只能通过 调用 mutations 提供的方法，才能操作对应的数据，不推荐直接操作 state 中的数据，因为 万一导致了数据的紊乱，不能快速定位到错误的原因，因为，每个组件都可能有操作数据的方法；"),a("br"),t._v(" increment(state) {"),a("br"),t._v(" state.count++"),a("br"),t._v(" },"),a("br"),t._v(" // 注意： 如果组件想要调用 mutations 中的方法，只能使用 this.$store.commit('方法名')"),a("br"),t._v(" // 这种 调用 mutations 方法的格式，和 this.$emit('父组件中方法名')"),a("br"),t._v(" subtract(state, obj) {"),a("br"),t._v(" // 注意： mutations 的 函数参数列表中，最多支持两个参数，其中，参数1： 是 state 状态； 参数2： 通过 commit 提交过来的参数；"),a("br"),t._v(" console.log(obj)"),a("br"),t._v(" state.count -= (obj.c + obj.d)"),a("br"),t._v(" }"),a("br"),t._v(" },"),a("br"),a("br"),a("br"),a("br"),t._v(" getters: {"),a("br"),t._v(" // 注意：这里的 getters， 只负责 对外提供数据，不负责 修改数据，如果想要修改 state 中的数据，请 去找 mutations"),a("br"),t._v(" optCount: function (state) {"),a("br"),t._v(" return '当前最新的count值是：' + state.count"),a("br"),t._v(" }"),a("br"),t._v(" // 经过咱们回顾对比，发现 getters 中的方法， 和组件中的过滤器比较类似，因为 过滤器和 getters 都没有修改原数据， 都是把原数据做了一层包装，提供给了 调用者；"),a("br"),t._v(" // 其次， getters 也和 computed 比较像， 只要 state 中的数据发生变化了，那么，如果 getters 正好也引用了这个数据，那么 就会立即触发 getters 的重新求值；"),a("br"),t._v(" }"),a("br"),t._v(" })"),a("br"),a("br"),a("br"),a("br"),t._v(" //actions专门用来处理异步 实际修改状态值得依然是mutation--即异步的事情写在这里，然后在调用一下mutation"),a("br"),t._v(" actions:{"),a("br"),t._v(" jianAsync(context){"),a("br"),t._v(" //放慢一秒之后再去减一"),a("br"),t._v(" context.commit('subtract')"),a("br"),t._v(" // 注意： 如果组件想要调用 actions 中的方法，只能使用 this.$store.dispatch('方法名')"),a("br"),t._v(" }"),a("br"),t._v(" }"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),t._v(" modules:{//该方法见下图"),a("br"),a("img",{attrs:{src:"/src/assets/111.png",alt:""}}),t._v(" }"),a("br"),a("br"),a("br"),t._v(" // 总结："),a("br"),t._v(" // 1. state中的数据，不能直接修改，如果想要修改，必须通过 mutations"),a("br"),t._v(" // 2. 如果组件想要直接 从 state 上获取数据： 需要 this.$store.state.***"),a("br"),t._v(" // 3. 如果 组件，想要修改数据，必须使用 mutations 提供的方法，需要通过 this.$store.commit('方法的名称'， 唯一的一个参数)"),a("br"),t._v(" // 4. 如果 store 中 state 上的数据， 在对外提供的时候，需要做一层包装，那么 ，推荐使用 getters, 如果需要使用 getters ,则用 this.$store.getters.***"),a("br"),t._v(" import App from './App.vue'"),a("br"),t._v(" const vm = new Vue({"),a("br"),t._v(" el: '#app',"),a("br"),t._v(" render: c => c(App),"),a("br"),t._v(" store // 5. 将 vuex 创建的 store 挂载到 VM 实例上， 只要挂载到了 vm 上，任何组件都能使用 store 来存取数据"),a("br"),t._v(" })"),a("br")])])],1)]),a("div",{staticClass:"myfoot"},[a("my-bottom")],1),a("backtop",{attrs:{tags:t.targets}})],1)},e=[],i=a("aa16"),n=a("a0f9"),o=a("0b96"),c={data:function(){return{targets:".myvue",num:null}},methods:{getScroll:function(t){this.num=t.target.scrollTop}},mounted:function(){window.addEventListener("scroll",this.getScroll,!0)},components:{myNav:i["a"],myBottom:n["a"],backtop:o["a"]}},l=c,u=(a("888d"),a("2877")),v=Object(u["a"])(l,r,e,!1,null,"56c2a65a",null);s["default"]=v.exports},"8f94":function(t,s,a){},"90f1":function(t,s,a){},"9aad":function(t,s,a){"use strict";var r=a("9afb"),e=a.n(r);e.a},"9afb":function(t,s,a){},a0f9:function(t,s,a){"use strict";var r=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"bts"},[t._m(0),a("div",{staticClass:"lianxi2"},[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"访问我的csdn",placement:"top"}},[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"iconfont icon-csdn"})])]),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"访问我的qq",placement:"top"}},[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"iconfont icon-qq"})])]),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"访问我的微信",placement:"top"}},[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"iconfont icon-weixin1"})])]),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"访问我的github",placement:"top"}},[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"iconfont icon-huaban88"})])])],1)])},e=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"bts_a"},[a("div",[t._v("Copyright © 2020 iHao | Powered by Hexo | Theme Matery")]),a("div",[t._v("| 总访问量: 12070 次 | 总访问人数: 2612 人")]),a("div",[t._v("本站已安全运行 120 天 4 小时 17 分钟 29 秒")])])}],i={},n=i,o=(a("b065"),a("2877")),c=Object(o["a"])(n,r,e,!1,null,"e6efc038",null);s["a"]=c.exports},a956:function(t,s,a){"use strict";var r=a("88da"),e=a.n(r);e.a},aa16:function(t,s,a){"use strict";var r=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"navsBoss",class:this.num>100?"navAfterStyle":""},[a("div",{ref:"navsRef",staticClass:"navs"},[a("chouti",{staticClass:"cd"}),t._m(0),a("div",{staticClass:"nv-right"},[a("ul",[a("router-link",{attrs:{to:"/"}},[a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"el-icon-s-home"}),a("span",[t._v("首页")])])])]),a("router-link",{attrs:{to:"/mylabel"}},[a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"el-icon-s-order"}),a("span",[t._v("标签")])])])]),t._m(1),a("router-link",{attrs:{to:"/archives"}},[a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"el-icon-s-claim"}),a("span",[t._v("归档")])])])]),a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"el-icon-postcard"}),a("el-dropdown",[a("span",{staticClass:"el-dropdown-link"},[t._v(" 关于"),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("router-link",{attrs:{to:"/aboutme"}},[a("el-dropdown-item",{attrs:{icon:"el-icon-plus"}},[t._v("关于我")])],1),a("router-link",{attrs:{to:"/another"}},[a("el-dropdown-item",{attrs:{icon:"el-icon-circle-plus"}},[t._v("Another")])],1)],1)],1)],1)]),a("li",[a("router-link",{attrs:{to:"/comment"}},[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"el-icon-chat-dot-round"}),a("span",[t._v("留言板")])])])],1),a("li",[a("router-link",{attrs:{to:"/friends"}},[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"el-icon-search search"}),a("span",[t._v("友情链接")])])])],1)],1)])],1)])},e=[function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("div",{staticClass:"nv-left"},[r("a",{attrs:{href:"/"}},[r("img",{attrs:{src:a("e17d"),alt:""}}),r("span",[t._v("iJun's Blog")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"el-icon-s-shop"}),a("span",[t._v("分类")])])])}],i=function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("div",{staticClass:"chouti"},[r("i",{staticClass:"el-icon-s-unfold",staticStyle:{"margin-left":"16px"},attrs:{type:"primary"},on:{click:function(s){t.drawer=!0}}}),r("el-drawer",{staticClass:"dw",attrs:{direction:"ltr",title:"我是标题",visible:t.drawer,"with-header":!1},on:{"update:visible":function(s){t.drawer=s}}},[r("div",{staticClass:"dr_top"},[r("img",{attrs:{src:a("e17d"),alt:""}}),r("h3",[t._v("iJun's Blog")]),r("p",[t._v("专注于Web,分享生活,分享知识")])]),r("div",{staticClass:"dr_body"},[r("ul",[r("router-link",{attrs:{to:"/"}},[r("li",[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"el-icon-s-home"}),r("span",[t._v("首页")])])])]),r("router-link",{attrs:{to:"/mylabel"}},[r("li",[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"el-icon-s-order"}),r("span",[t._v("标签")])])])]),r("li",[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"el-icon-s-shop"}),r("span",[t._v("分类")])])]),r("router-link",{attrs:{to:"/archives"}},[r("li",[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"el-icon-s-claim"}),r("span",[t._v("归档")])])])]),r("li",[r("a",{attrs:{href:"#"}},[r("el-menu",[r("el-submenu",{attrs:{index:"1"}},[r("template",{slot:"title"},[r("i",{staticClass:"el-icon-postcard"}),r("span",[t._v("关于")])]),r("router-link",{attrs:{to:"/aboutme"}},[r("el-menu-item",{staticStyle:{"padding-left":"100px"},attrs:{index:"1-1"}},[r("i",{staticClass:"el-icon-plus"}),t._v(" 关于我 ")])],1),r("router-link",{attrs:{to:"/another"}},[r("el-menu-item",{staticStyle:{"padding-left":"100px"},attrs:{index:"1-2"}},[r("i",{staticClass:"el-icon-circle-plus"}),t._v(" Another ")])],1)],2)],1)],1)]),r("li",[r("router-link",{attrs:{to:"/comment"}},[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"el-icon-chat-dot-round"}),r("span",[t._v("留言板")])])])],1),r("li",[r("router-link",{attrs:{to:"/friends"}},[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"el-icon-search search"}),r("span",[t._v("友情链接")])])])],1)],1)])])],1)},n=[],o={data:function(){return{drawer:!1}}},c=o,l=(a("9aad"),a("2877")),u=Object(l["a"])(c,i,n,!1,null,"3f2084f3",null),v=u.exports,b={data:function(){return{num:null}},methods:{getScroll:function(t){this.num=t.target.scrollTop}},mounted:function(){window.addEventListener("scroll",this.getScroll,!0)},components:{chouti:v}},d=b,m=(a("c562"),Object(l["a"])(d,r,e,!1,null,"720e0318",null));s["a"]=m.exports},b065:function(t,s,a){"use strict";var r=a("90f1"),e=a.n(r);e.a},c53c:function(t,s,a){},c562:function(t,s,a){"use strict";var r=a("8f94"),e=a.n(r);e.a},e17d:function(t,s,a){t.exports=a.p+"img/123.c21b830d.png"}}]);
//# sourceMappingURL=chunk-1d4a431c.bbb5ef1b.js.map