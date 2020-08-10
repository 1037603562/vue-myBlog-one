<template>
    <div class="mygithub">
        <!-- 头部 -->
        <div class="mytop">
            <myNav></myNav>
        </div>
        <!-- 身体 -->
        <div class="mybody">
                <div class="my_card">
                    <!-- html相关知识 -->
                    <el-card>
                        <h1 style="margin-left:40%;">react框架相关知识</h1>
                        <h3 id="nr-1">1.ReactJS简介</h3>
                        <p>- React 起源于 Facebook 的内部项目，因为该公司对市场上所有 JavaScript MVC 框架，都不满意，就决定自己写一套，用来架设 Instagram 的网站。做出来以后，发现这套东西很好用，就在2013年5月开源了。</p>
                        <p>- 由于 React 的设计思想极其独特，属于革命性创新，性能出众，代码逻辑却非常简单。所以，越来越多的人开始关注和使用，认为它可能是将来 Web 开发的主流工具。</p>
                        <p>- library</p>
                        <p>- Framework</p>

                        <h3>前端三大主流框架</h3>
                        <p>- Angular.js：出来最早的前端框架，学习曲线比较陡，NG1学起来比较麻烦，NG2开始，进行了一系列的改革，也开始启用组件化了；在NG中，也支持使用TS（TypeScript）进行编程；</p>
                        <p>- Vue.js：最火的一门前端框架，它是中国人开发的，对我我们来说，文档要友好一些；</p>
                        <p>- React.js：最流行的一门框架，因为它的设计很优秀；</p>
                        <p>- windowsPhone 7    7.5   8   10</p>


                        <h3>React与vue.js的对比</h3>
                        <h3>组件化方面</h3>
                        <p>1. 什么是模块化：从 代码 的角度，去分析问题，把我们编程时候的业务逻辑，分割到不同的模块中来进行开发，这样能够方便代码的重用；</p>
                        <p>2. 什么是组件化：从 UI 的角度，去分析问题，把一个页面，拆分为一些互不相干的小组件，随着我们项目的开发，我们手里的组件会越来越多，最后，我们如果要实现一个页面，可能直接把现有的组件拿过来进行拼接，就能快速得到一个完整的页面， 这样方便了UI元素的重用；组件是元素的集合体；</p>
                        <p>3. 组件化的好处：</p>
                        <p>4. Vue是如何实现组件化的：.vue 组件模板文件，浏览器不识别这样的.vue文件，所以，在运行前，会把 .vue 预先编译成真正的组件；</p>
                        <p>- template： UI结构</p>
                        <p>- script： 业务逻辑和数据</p>
                        <p>- style： UI的样式</p>
                        <p>5. React如何实现组件化：在React中实现组件化的时候，根本没有 像 .vue 这样的模板文件，而是，直接使用JS代码的形式，去创建任何你想要的组件；</p>
                        <p>- React中的组件，都是直接在 js 文件中定义的；</p>
                        <p>- React的组件，并没有把一个组件 拆分为 三部分（结构、样式、业务逻辑），而是全部使用JS来实现一个组件的；（也就是说：结构、样式、业务逻辑是混合在JS里面一起编写出来的）</p>

                        <h3>开发团队方面</h3>
                        <p>- React是由FaceBook前端官方团队进行维护和更新的；因此，React的维护开发团队，技术实力比较雄厚；</p>
                        <p>- Vue：第一版，主要是有作者 尤雨溪 专门进行维护的，当 Vue更新到 2.x 版本后，也有了一个小团队进行相关的维护和开发；</p>
                        <h3>社区方面</h3>
                        <p>- 在社区方面，React由于诞生的较早，所以社区比较强大，一些常见的问题、坑、最优解决方案，文档、博客在社区中都是可以很方便就能找到的；</p>
                        <p>- Vue是近两年才诞生开源出来的，所以，它的社区相对于React来说，要小巧一些，所以，可能有的一些坑，没人踩过；</p>

                        <h3>移动APP开发体验方面</h3>
                        <p>- Vue，结合 Weex 这门技术，提供了 迁移到 移动端App开发的体验（Weex，目前只是一个 小的玩具， 并没有很成功的 大案例；）</p>
                        <p>- React，结合 ReactNative，也提供了无缝迁移到 移动App的开发体验（RN用的最多，也是最火最流行的）；</p>

                        <h3>为什么要学习React</h3>
                        <p>1. 设计很优秀，是基于组件化的，方便我们UI代码的重用；</p>
                        <p>2. 开发团队实力强悍，不必担心短更的情况；</p>
                        <p>3. 社区强大，很多问题都能找到对应的解决方案；</p>
                        <p>4. 提供了无缝转到 ReactNative 上的开发体验，让我们技术能力得到了拓展；增强了我们的核心竞争力</p>


                        <h3 id="nr-2">2.React中几个核心的概念</h3>
                        <h3>虚拟DOM（Virtual Document Object Model）</h3>
                        <p>- DOM的本质是什么：就是用JS表示的UI元素</p>
                        <p>- DOM和虚拟DOM的区别：</p>
                            <p style="padding-left: 50px;">- DOM是由浏览器中的JS提供功能，所以我们只能人为的使用 浏览器提供的固定的API来操作DOM对象；</p>
                            <p style="padding-left: 50px;">  - 虚拟DOM：并不是由浏览器提供的，而是我们程序员手动模拟实现的，类似于浏览器中的DOM，但是有着本质的区别；</p>
                        <p>- 为什么要实现虚拟DOM：</p>
                        <p>- 什么是React中的虚拟DOM：</p>
                        <p>- 虚拟DOM的目的：</p>
                        <img src="../../assets/img/react/img/虚拟DOM引入图片.png" alt="">


                        <h3>Diff算法</h3>
                        <p>- tree diff:新旧DOM树，逐层对比的方式，就叫做 tree diff,每当我们从前到后，把所有层的节点对比完后，必然能够找到那些 需要被更新的元素；</p>
                        <p>- component diff：在对比每一层的时候，组件之间的对比，叫做 component diff;当对比组件的时候，如果两个组件的类型相同，则暂时认为这个组件不需要被更新，如果组件的类型不同，则立即将旧组件移除，新建一个组件，替换到被移除的位置；</p>
                        <p>- element diff:在组件中，每个元素之间也要进行对比，那么，元素级别的对比，叫做 element diff；</p>
                        <p>- key：key这个属性，可以把 页面上的 DOM节点 和 虚拟DOM中的对象，做一层关联关系；</p>
                        <img src="../../assets/img/react/img/Diff.png" alt="">

                        <h3>虚拟DOM概念的理解</h3>
                        <img src="../../assets/img/react/img/React中虚拟DOM的概念.png" alt="">


                        <h3 id="nr-3">React项目的创建</h3>
                        <p>1. 运行 cnpm i react react-dom -S 安装包</p>
                        <p>2.在index.html页面中，创建容器</p>
                            <p style="padding-left: 50px;">容器：将来 使用react创建的虚拟dom元素 都会被渲染到这个指定的容器当中</p>
                            <p style="padding-left: 50px;">&lt;div id="app"&gt;&lt;/div&gt;</p>
                        <p>3. 在项目中导入两个相关的包：</p>
                            <p style="padding-left: 50px;">1. 在 React 学习中，需要安装 两个包 react  react-dom</p>
                            <p style="padding-left: 50px;"> 1.1 react 这个包，是专门用来创建React组件、组件生命周期等这些东西的；</p>
                            <p style="padding-left: 50px;"> 1.2 react-dom 里面主要封装了和 DOM 操作相关的包，比如，要把 组件渲染到页面上</p>
                            <P style="padding-left: 50px;">import React from 'react'</P>
                            <P style="padding-left: 50px;">import ReactDOM from 'react-dom'</P>
                        <p>4.创建虚拟dom元素</p>
                        
                            <p>创建虚拟dom元素</p>
                            <p>//参数1为创建元素的类型，字符串，表示元素的名称</p>
                            <p>//参数2是一个对象或null 表示当前这个dom元素的属性</p>
                            <p>//参数3 字节点 包括其他虚拟dom获取文本子节点</p>
                            <p>//参数n 其他子节点</p>
                            <p>需要创建的虚拟dom元素：&lt;h1 id="myh1" title="this is a h1"&gt;这是一个大大的h1&lt;/h1&gt;</p>
                            <p>const myh1 = React.createElement('h1',{id:'myh1',title:'this is a h1'},'这是一个大大的h1')</p>


                            <p>使用reactdom将虚拟dom渲染到页面上</p>

                            <p>//参数1 要渲染的那个虚拟dom</p>
                            <p>//参数2 指定页面上的一个容器-第二步</p>
                            <p>ReactDOM.render(myh1,document.getElementById('app'))</p>


                            <h3 id="nr-4">4.JSX语法</h3>
                            <p>上面的这种方式创建虚拟dom可行，但是太麻烦了，程序员一般不会使用，最好的还是html语法，react官方也是考虑到了这点，所以推荐使用JSX语法--符合xml规范的js</p>
                            <p>1.如何启用jsx语法</p>
                                    <p style="padding-left: 50px;">安装babel插件</p>
                                        <p style="padding-left: 90px;">运行 cnpm i babel-core babel-loader babel-plugin-transform-runtime -D</p>
                                        <p style="padding-left: 90px;">运行 cnpm i babel-preset-env babel-preset-stage-0 -D</p>
                                    <p style="padding-left: 50px;">安装能识别转换jsx语法的包babel-preset-react</p>
                                        <p style="padding-left: 90px;">运行cnpm i babel-preset-react -D</p>
                            <p>2.在webpack.config.js中添加loader规则</p>
                                <p>
                                      module:{//所有第三方模块配置规则</br>
                                                  <p style="padding-left: 90px;"s>rules:[</p>
                                                    <p style="padding-left: 120px;">{test:/\.js|jsx$/,use:'babel-loader',exclude:/node_modules/}</p>
                                                    <p style="padding-left: 120px;">]</p>
                                                <p style="padding-left: 90px;">}</p>
                                </p>
                            <p>在项目根目录中创建一个.babelrc文件，并进行相关配置</p>
                            <p>
                                {</br>
                                    "presets":["env","stage-0","react"],</br>
                                    "plugins": ["transform-runtime"]</br>
                                }</br>
                            </p>


                            <p>2.jsx语法的本质：并不是直接把jsx渲染到页面上面去，而是内部先转换成了creatElement形式，再渲染的</p>
                            <p>3.在jsx中混合写入js表达式：在jsx语法中，要把js代码写到{ }中</p>
                                    <span style="padding-left: 120px;">--渲染数字</span></br>
                                    <span style="padding-left: 120px;">--渲染字符串</span></br>
                                    <span style="padding-left: 120px;">--渲染布尔值</span></br>
                                    <span style="padding-left: 120px;">--为属性绑定值</span></br>
                                    <span style="padding-left: 120px;">--渲染jsx元素</span></br>
                                    <span style="padding-left: 120px;">--渲染jsx元素数组</span></br>
                                    <span style="padding-left: 120px;">--将普通字符串数组，转换为jsx数组并渲染到页面上【两种方案】</span></br>
                            <img src="../../assets/img/react/img/jsx语法最基本使用示例.png" alt="">
                            <p>4.在jsx中写注释：推荐使用{/*这是注释*/}</p>
                            <p>5.为jsx中的元素添加class类名：需要使用className来替代class;htmlFor替换label的for属性</p>
                            <P>6.在jsx创建dom的时候，所有的节点，必须有唯一的根元素进行包裹</P>
                            <p>7.在jsx语法中，标签必须成对出现，如果是单标签，则必须自闭和</p>
                            <p style="color:#aaa;font-size:13px;">当编译引擎在编译jsx代码的时候，如果遇到&lt;那么就把它动作html代码去编译，如果遇到了{}就吧花括号内部的代码当中普通的js代码去编译</p>

                            <h3 id="nr-5">5.组件的创建</h3>
                            <p>第一种创建组件的方式：构造函数创建组件</p>
                                    <p style="padding-left: 120px;">function Hello(props){//组件中props永远是只读的不可修改</p>
                                        <p style="padding-left: 150px;font-size:13px;color:#aaa;">//如果在一个组件中return一个null 则表示此组件是空的 什么都不渲染</p>
                                        <p style="padding-left: 150px;font-size:13px;color:#aaa;">//return null</p>
                                        <p style="padding-left: 150px;">return &lt;div&gt;{props.name}--{props.age}--{props.sex}&lt;/div&gt;//在组件中必须返回一个合法的jsx虚拟dom元素</p>
                                    <p style="padding-left: 120px;">}</p>

                                    <p>//在组件中接收外部传过来的值 如何用这个值（在形参列表中接收，然后直接点出来 ）</p>

                                   <p> const dog = {//1、外部值</p>
                                        <p style="padding-left: 120px;">name:'大黄',</p>
                                        <p style="padding-left: 120px;"> age:3,</p>
                                        <p style="padding-left: 120px;"> sex:'雄'</p>
                                   <p style="padding-left: 100px;"> }</p>

                                  <p>  ReactDOM.render(&lt;div&gt;</p>
                                                  <p style="padding-left: 120px;"> &lt;Hello name={dog.name} age={dog.age} sex={dog.sex}&gt;&lt;/Hello&gt;</p>
                                                  <p style="padding-left: 120px;">  &lt;/div&gt;,document.getElementById('app'))</p>

                                <p>将组件抽离成单独的jsx文件</p>
                                <p>和vue抽离组件是一样的</p>
                                <p>1.新建一个Hi.jsx文件</p>
                                <p>2.在新建文件当中录入import React from 'react'（必须要该导入）</p>
                                <p>3.将之前构造函数创建的组件放到Hi.jsx文件当中</p>
                                <p>4.在index.js当中引入Hi.jsx文件--import Hi from '../src/component/Hi.jsx'</p>
                                <p>将Hi组件以标签的形式放入到ReactDOM.render当中即可</p>
                                <p>具体如下图所示：</p>
                                <img src="../../assets/img/react/img/抽离组件到jsx文件当中.png" alt="">

                                <h3>导入组件时省略后缀名jsx</h3>
                                <p>只需要在webpack.config.js文件中新增如下配置即可</p>
                                <p> resolve:{</p>
                                    <p style="margin-left:50px;">extensions:['.js','.jsx','.json']//表示 这几个文件的后缀名 可以省略不写</p>
                                <p>}</p>













                    </el-card>
                    <!-- css相关知识 -->
                    <el-card style="margin-top:20px;">
                        <h1 style="margin-left:40%;">其他框架相关知识</h1>
                        <div>
                          暂无
                        </div>
                        

                    </el-card>
                </div>
                <div class="mulu" :class="this.num >100 ? 'moveMulu' : ''">
                    <div class="mulu_m">
                             <div class="ml-top">
                                <i class="el-icon-tickets"></i>
                                <label>目录1</label>
                            </div>
                            <div class="ml-body">
                                <ul>
                                    <li><a href="#nr-1" style="color:#425669">1.ReactJS简介</a></li>
                                    <li><a href="#nr-2" style="color:#425669">2.React中几个核心的概念</a></li>
                                    <li><a href="#nr-3" style="color:#425669">3.React项目的创建</a></li>
                                    <li><a href="#nr-4" style="color:#425669">4.JSX语法</a></li>
                                    <li><a href="#nr-5" style="color:#425669">5.组件的创建</a></li>
                                </ul>
                                
                            </div>
                    </div>
                </div>

        </div>
        <!-- 底部 -->
        <div class="myfoot">
            <my-bottom></my-bottom>
        </div>
         <!-- 回到顶部 -->
           <backtop :tags ='targets'></backtop>    
    </div>
</template>

<script>
import myNav from '../../components/mynav.vue'
import myBottom from '../../components/myBottom.vue'
import backtop from '../../components/Backtop.vue'

    export default {
        data() {
            return {
                targets: '.mygithub',
                num:null,
            }
        },
        methods:{
             getScroll(e) {//获取鼠标滚动后的数值
               
                this.num =e.target.scrollTop
               // console.log(this.num)
            }
        },
         mounted () {
             window.addEventListener('scroll', this. getScroll, true);
          
        },
       components: {
            myNav,
            myBottom,
            backtop,
        },
    }
</script>

<style lang="scss" scoped>
@media screen and (max-width: 540px){
  .el-card{
      width: 100%!important;
      padding-left: 0!important;
      margin-left: -95px!important;
      margin-right: -30px!important;
      h1{
          margin-left: 0!important;
      }
  }
   .mulu{
       display: none;
       
   }

     
	}

	@media (min-width: 541px) and (max-width: 960px){
	.mulu{
          display: none;
    }  
      img{
        margin-left: -10px;
    } 
    .el-card{
      width: 100%!important;
      padding-left: 0!important;
      margin-left: -50px!important;
  }
	}
	@media screen and (min-width: 961px){
		
	}


.mygithub{
      overflow-x: hidden;
        overflow-y: scroll;
    
        }
.mygithub{
    

    background-color: #e9e9e9;
    width: 100%;
     height: 100%;
    .mytop{
        width: 100%;
        height: 380px;
        background: url(../../assets/img/bgc/darksky.jpg) no-repeat top center;
		background-size: cover;
      
       
    }
    .mybody{
        display: flex;
        justify-content: space-between;
        .my_card{
             img{width: 100%}
            margin-left: 100px;
            margin-top: -100px;
            
            .el-card{
                width: 890px;
                // height: 890px;
                border-radius: 20px;
                padding-left: 25px;
            }
        }
        .mulu{
   
    width: 25%;
    position: fixed;
    right: 27px;
   top: 390px;
    margin: 15px 0 0 15px;
    
    .ml-top{
        font-size: 20px;
        font-weight: bold;
       padding-left: 50px;
       
        i{
            font-size: 24px; 
        }
    }
    .ml-body{
         padding-left: 50px;
         line-height: 30px;
    }
}
        .moveMulu{
                    position: fixed;
                    right: 27px;
                      top: 36px;
                
                }
    }
    .myfoot{

    }




    .back-ball {
        background-color: tomato;
        color: #fff;
        width: 48px;
        height: 33px;
        border-radius: 50%;
        padding: 10px;
        line-height: 10px;
       i{
            font-weight: bold;
            font-size: 35px;
       }
    }
}
</style>