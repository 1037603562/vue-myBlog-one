(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-28cec398"],{"0b96":function(t,s,r){"use strict";var e=function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("el-backtop",{attrs:{target:this.tags}},[r("div",{staticClass:"back-ball"},[r("i",{staticClass:"el-icon-top"})])])},a=[],i={mounted:function(){},props:{tags:{type:String,default:""}}},n=i,o=(r("a956"),r("2877")),c=Object(o["a"])(n,e,a,!1,null,"73326458",null);s["a"]=c.exports},2763:function(t,s,r){},"2ae2":function(t,s,r){"use strict";var e=r("a12f"),a=r.n(e);a.a},4494:function(t,s,r){},5306:function(t,s,r){},"564e":function(t,s,r){"use strict";var e=r("5306"),a=r.n(e);a.a},7038:function(t,s,r){"use strict";var e=r("4494"),a=r.n(e);a.a},"750b":function(t,s,r){"use strict";var e=r("2763"),a=r.n(e);a.a},"88da":function(t,s,r){},"8b49":function(t,s,r){"use strict";r.r(s);var e=function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("div",{staticClass:"myvue"},[r("div",{staticClass:"mytop"},[r("myNav")],1),r("div",{staticClass:"mybody"},[r("div",{staticClass:"my_card"},[r("el-card",[r("div",[t._v(" // 入口文件 import Vue from 'vue'"),r("br"),t._v(" // 配置vuex的步骤"),r("br"),t._v(" // 1. 运行 cnpm i vuex -S"),r("br"),t._v(" // 2. 导入包"),r("br"),t._v(" import Vuex from 'vuex'"),r("br"),t._v(" // 3. 注册vuex到vue中"),r("br"),t._v(" Vue.use(Vuex)"),r("br"),t._v(" // 4. new Vuex.Store() 实例，得到一个 数据仓储对象"),r("br"),t._v(" var store = new Vuex.Store({"),r("br"),r("br"),r("br"),r("br"),t._v(" state: {"),r("br"),t._v(" // 大家可以把 state 想象成 组件中的 data ,专门用来存储数据的"),r("br"),t._v(" // 如果在 组件中，想要访问，store 中的数据，只能通过 this.$store.state.*** 来访问"),r("br"),t._v(" count: 0"),r("br"),t._v(" },"),r("br"),r("br"),r("br"),r("br"),t._v(" mutations: {"),r("br"),t._v(" //mutations相对于组件中的methods,但是他不能使用异步方法（定时器，axios)"),r("br"),t._v(" // 注意： 如果要操作 store 中的 state 值，只能通过 调用 mutations 提供的方法，才能操作对应的数据，不推荐直接操作 state 中的数据，因为 万一导致了数据的紊乱，不能快速定位到错误的原因，因为，每个组件都可能有操作数据的方法；"),r("br"),t._v(" increment(state) {"),r("br"),t._v(" state.count++"),r("br"),t._v(" },"),r("br"),t._v(" // 注意： 如果组件想要调用 mutations 中的方法，只能使用 this.$store.commit('方法名')"),r("br"),t._v(" // 这种 调用 mutations 方法的格式，和 this.$emit('父组件中方法名')"),r("br"),t._v(" subtract(state, obj) {"),r("br"),t._v(" // 注意： mutations 的 函数参数列表中，最多支持两个参数，其中，参数1： 是 state 状态； 参数2： 通过 commit 提交过来的参数；"),r("br"),r("br"),t._v(" state.count -= (obj.c + obj.d)"),r("br"),t._v(" }"),r("br"),t._v(" },"),r("br"),r("br"),r("br"),r("br"),t._v(" getters: {"),r("br"),t._v(" // 注意：这里的 getters， 只负责 对外提供数据，不负责 修改数据，如果想要修改 state 中的数据，请 去找 mutations"),r("br"),t._v(" optCount: function (state) {"),r("br"),t._v(" return '当前最新的count值是：' + state.count"),r("br"),t._v(" }"),r("br"),t._v(" // 经过咱们回顾对比，发现 getters 中的方法， 和组件中的过滤器比较类似，因为 过滤器和 getters 都没有修改原数据， 都是把原数据做了一层包装，提供给了 调用者；"),r("br"),t._v(" // 其次， getters 也和 computed 比较像， 只要 state 中的数据发生变化了，那么，如果 getters 正好也引用了这个数据，那么 就会立即触发 getters 的重新求值；"),r("br"),t._v(" }"),r("br"),t._v(" })"),r("br"),r("br"),r("br"),r("br"),t._v(" //actions专门用来处理异步 实际修改状态值得依然是mutation--即异步的事情写在这里，然后在调用一下mutation"),r("br"),t._v(" actions:{"),r("br"),t._v(" jianAsync(context){"),r("br"),t._v(" //放慢一秒之后再去减一"),r("br"),t._v(" context.commit('subtract')"),r("br"),t._v(" // 注意： 如果组件想要调用 actions 中的方法，只能使用 this.$store.dispatch('方法名')"),r("br"),t._v(" }"),r("br"),t._v(" }"),r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),t._v(" modules:{//该方法见下图"),r("br"),r("img",{attrs:{src:"/src/assets/111.png",alt:""}}),t._v(" }"),r("br"),r("br"),r("br"),t._v(" // 总结："),r("br"),t._v(" // 1. state中的数据，不能直接修改，如果想要修改，必须通过 mutations"),r("br"),t._v(" // 2. 如果组件想要直接 从 state 上获取数据： 需要 this.$store.state.***"),r("br"),t._v(" // 3. 如果 组件，想要修改数据，必须使用 mutations 提供的方法，需要通过 this.$store.commit('方法的名称'， 唯一的一个参数)"),r("br"),t._v(" // 4. 如果 store 中 state 上的数据， 在对外提供的时候，需要做一层包装，那么 ，推荐使用 getters, 如果需要使用 getters ,则用 this.$store.getters.***"),r("br"),t._v(" import App from './App.vue'"),r("br"),t._v(" const vm = new Vue({"),r("br"),t._v(" el: '#app',"),r("br"),t._v(" render: c => c(App),"),r("br"),t._v(" store // 5. 将 vuex 创建的 store 挂载到 VM 实例上， 只要挂载到了 vm 上，任何组件都能使用 store 来存取数据"),r("br"),t._v(" })"),r("br")])])],1)]),r("div",{staticClass:"myfoot"},[r("my-bottom")],1),r("backtop",{attrs:{tags:t.targets}})],1)},a=[],i=r("aa16"),n=r("a0f9"),o=r("0b96"),c={data:function(){return{targets:".myvue",num:null}},methods:{getScroll:function(t){this.num=t.target.scrollTop}},mounted:function(){window.addEventListener("scroll",this.getScroll,!0)},components:{myNav:i["a"],myBottom:n["a"],backtop:o["a"]}},l=c,u=(r("750b"),r("2877")),v=Object(u["a"])(l,e,a,!1,null,"1cfcb126",null);s["default"]=v.exports},a0f9:function(t,s,r){"use strict";var e=function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("div",{staticClass:"bts themecolor"},[t._m(0),r("div",{staticClass:"lianxi2"},[r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"访问我的csdn",placement:"top"}},[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"iconfont icon-csdn"})])]),r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"访问我的qq",placement:"top"}},[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"iconfont icon-qq"})])]),r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"访问我的微信",placement:"top"}},[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"iconfont icon-weixin1"})])]),r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"访问我的github",placement:"top"}},[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"iconfont icon-huaban88"})])])],1)])},a=[function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("div",{staticClass:"bts_a"},[r("div",{staticStyle:{"margin-top":"20px"}},[t._v("Copyright © 2020 iJun | Powered by Vue | Theme Matery")]),r("div",[t._v("本站于2020年7月上线试用")])])}],i={},n=i,o=(r("7038"),r("2877")),c=Object(o["a"])(n,e,a,!1,null,"ef57ebd6",null);s["a"]=c.exports},a12f:function(t,s,r){},a956:function(t,s,r){"use strict";var e=r("88da"),a=r.n(e);a.a},aa16:function(t,s,r){"use strict";var e=function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("div",{staticClass:"navsBoss",class:this.num>100?"themecolor":""},[r("div",{ref:"navsRef",staticClass:"navs"},[r("chouti",{staticClass:"cd"}),t._m(0),r("div",{staticClass:"nv-right"},[r("ul",[r("router-link",{attrs:{to:"/"}},[r("li",[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"el-icon-s-home"}),r("span",[t._v("首页")])])])]),r("router-link",{attrs:{to:"/mylabel"}},[r("li",[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"el-icon-s-order"}),r("span",[t._v("标签")])])])]),r("router-link",{attrs:{to:"/reacthome"}},[r("li",[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"el-icon-s-shop"}),r("span",[t._v("前端框架")])])])]),r("router-link",{attrs:{to:"/archives"}},[r("li",[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"el-icon-s-claim"}),r("span",[t._v("归档")])])])]),r("li",[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"el-icon-postcard"}),r("el-dropdown",[r("span",{staticClass:"el-dropdown-link"},[t._v(" 关于"),r("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),r("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[r("router-link",{attrs:{to:"/aboutme"}},[r("el-dropdown-item",{attrs:{icon:"el-icon-plus"}},[t._v("关于我")])],1),r("router-link",{attrs:{to:"/another"}},[r("el-dropdown-item",{attrs:{icon:"el-icon-circle-plus"}},[t._v("Another")])],1)],1)],1)],1)]),r("li",[r("router-link",{attrs:{to:"/comment"}},[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"el-icon-chat-dot-round"}),r("span",[t._v("留言板")])])])],1),r("li",[r("router-link",{attrs:{to:"/friends"}},[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"el-icon-search search"}),r("span",[t._v("友情链接")])])])],1)],1)])],1)])},a=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"nv-left"},[e("a",{attrs:{href:"/"}},[e("img",{attrs:{src:r("e17d"),alt:""}}),e("span",[t._v("iJun's Blog")])])])}],i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"chouti"},[e("i",{staticClass:"el-icon-s-unfold",staticStyle:{"margin-left":"-34px"},attrs:{type:"primary"},on:{click:function(s){t.drawer=!0}}}),e("el-drawer",{staticClass:"dw",attrs:{direction:"ltr",title:"我是标题",visible:t.drawer,"with-header":!1},on:{"update:visible":function(s){t.drawer=s}}},[e("div",{staticClass:"dr_top"},[e("img",{attrs:{src:r("e17d"),alt:""}}),e("h3",[t._v("iJun's Blog")]),e("p",[t._v("专注于Web,分享生活,分享知识")])]),e("div",{staticClass:"dr_body"},[e("ul",[e("router-link",{attrs:{to:"/"}},[e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"el-icon-s-home"}),e("span",[t._v("首页")])])])]),e("router-link",{attrs:{to:"/mylabel"}},[e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"el-icon-s-order"}),e("span",[t._v("标签")])])])]),e("router-link",{attrs:{to:"/reacthome"}},[e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"el-icon-s-shop"}),e("span",[t._v("前端框架")])])])]),e("router-link",{attrs:{to:"/archives"}},[e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"el-icon-s-claim"}),e("span",[t._v("归档")])])])]),e("li",[e("a",{attrs:{href:"#"}},[e("el-menu",[e("el-submenu",{attrs:{index:"1"}},[e("template",{slot:"title"},[e("i",{staticClass:"el-icon-postcard"}),e("span",[t._v("关于")])]),e("router-link",{attrs:{to:"/aboutme"}},[e("el-menu-item",{staticStyle:{"padding-left":"100px"},attrs:{index:"1-1"}},[e("i",{staticClass:"el-icon-plus"}),t._v(" 关于我 ")])],1),e("router-link",{attrs:{to:"/another"}},[e("el-menu-item",{staticStyle:{"padding-left":"100px"},attrs:{index:"1-2"}},[e("i",{staticClass:"el-icon-circle-plus"}),t._v(" Another ")])],1)],2)],1)],1)]),e("li",[e("router-link",{attrs:{to:"/comment"}},[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"el-icon-chat-dot-round"}),e("span",[t._v("留言板")])])])],1),e("li",[e("router-link",{attrs:{to:"/friends"}},[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"el-icon-search search"}),e("span",[t._v("友情链接")])])])],1)],1)])])],1)},n=[],o={data:function(){return{drawer:!1}}},c=o,l=(r("564e"),r("2877")),u=Object(l["a"])(c,i,n,!1,null,"14112c4b",null),v=u.exports,b={data:function(){return{num:null}},methods:{getScroll:function(t){this.num=t.target.scrollTop}},mounted:function(){window.addEventListener("scroll",this.getScroll,!0)},components:{chouti:v}},d=b,m=(r("2ae2"),Object(l["a"])(d,e,a,!1,null,"5d705116",null));s["a"]=m.exports},e17d:function(t,s,r){t.exports=r.p+"img/123.c21b830d.png"}}]);
//# sourceMappingURL=chunk-28cec398.255d8b90.js.map