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
                        <h1 style="margin-left:40%;">react native相关知识</h1>
                        <h3 id="nr-1">1.Reactnative环境搭建</h3>
                            <p>必须安装的依赖有：Node、Python2、JDK 和 Android Studio。</p>
                            <p>注意 Node 的版本应大于等于 12，Python 的版本必须为 2.x（不支持 3.x），而 JDK 的版本必须是 1.8（目前不支持 1.9 及更高版本，注意 1.8 版本官方也直接称 8 版本）。安装完 Node 后建议设置 npm 镜像（淘宝源）以加速后面的过程（或使用科学上网工具）。</p>
                            <p>详细的环境配置请移步<a href="https://reactnative.cn/docs/getting-started.html" target="_Blank" style="color:blue">这里</a></p>

                            <p>调试设备：<a href="https://www.pianshen.com/article/72861608187/" target="_Blank" style="color:blue">这里</a></p>
                             <img src="../../assets/img/reactnative/android调试方法.png" alt="">

                    <!-- ------------------------------------------------------------------------------------------------------------------------------------------------------------ -->
                     <h3 id="nr-2">2.Tabbar引用</h3>
                        <p>react native本身并没有提供tabbar组件，但可以引用第三方包：react-native-tab-navigator</p>
                        <p>该包地址：<a href="https://github.com/IDBAI/react-native-tab-navigator" target="_Blank">这里</a></p>
                        <p>1.装包：npm install react-native-tab-navigator --save</p>
                        <p>2.import TabNavigator from 'react-native-tab-navigator';</p>
                        <img src="../../assets/img/reactnative/Tabbar.png" alt="">
  <!-- ------------------------------------------------------------------------------------------------------------------------------------------------------------ -->
                     <h3 id="nr-3">3.Icon图标引用</h3>
                        <p>react native本身并没有提供Icon图标组件，但可以引用第三方包：react-native-vector-icons</p>
                        <p>该包地址：<a href="https://github.com/oblador/react-native-vector-icons" target="_Blank">这里</a></p>
                        <p>1.装包：npm install --save react-native-vector-icons</p>
                        <p>2.配置：这一步比较复杂，详情请看github主页具体步骤</p>
                        <p style="padding-left:40px"> 注：1.在第一步中需要增加字体的ttf,我用的是FontAwesome，所有我的显示为：iconFontNames: [ 'MaterialIcons.ttf', 'EvilIcons.ttf' ,'FontAwesome.ttf']</p>
                        <p style="padding-left:40px">注：2.在最后一步的配置MainApplication.java，应该不需要了直接忽略这一步就行了，因为这一步该文档已经替我们做过了</p>
   <!-- ------------------------------------------------------------------------------------------------------------------------------------------------------------ -->
                     <h3 id="nr-4">4.轮播图的引用</h3>
                        <p>react native本身并没有提供轮播图组件，但可以引用第三方包react-native-swiper</p>
                        <p>该包地址：<a href="https://github.com/leecade/react-native-swiper" target="_Blank">这里</a></p>
                        <p>1.装包：npm i react-native-swiper --save</p>
                        <p>2.导入：import Swiper from 'react-native-swiper'</p>
                        <p>3.使用：组件去github主页复制</p>
 <!-- ------------------------------------------------------------------------------------------------------------------------------------------------------------ -->
                     <h3 id="nr-5">5.第三方路由插件的使用：react-native-router-flux</h3>
                     <p>注意：这个插件是依赖于React Navigation的，所以必须先安装React Navigation的相关插件</p>
                     <p>1.React Navigation相关依赖安装：<a href="https://www.jianshu.com/p/a2582f8b16fd" target="_Blank" style="color:blue">相关文章请点击这里</a></p>
                            <p style="padding-left:40px;color:#aaa">// 安装react-navigation</p>
                            <p style="padding-left:40px">yarn add @react-navigation/native</p>
                            <p style="padding-left:40px;color:#aaa">// 安装依赖库</p>
                            <p style="padding-left:40px">yarn add react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view</p>
                    <p>2.安装react-native link：如果你版本是reactNative0.60及以上，这一步就可以跳过；而React Native 0.59以及更低版本则需要手动链接，安装react-native link。</p>
                            <p style="padding-left:40px">react-native link react-native-reanimated,
                                react-native link react-native-gesture-handler,
                                react-native link react-native-screens,
                                react-native link react-native-safe-area-context</p>
                    <p>3.安装navigator库</p>
                            <p style="padding-left:40px">有三种导航模式可以选，分别是StackNavigator栈导航、TabNavigator标签导航、DrawerNavigator抽屉导航，下面会分别说一下怎么使用。</p>
                            <p style="padding-left:40px;color:#aaa">//StackNavigator</p>
                            <p style="padding-left:40px">npm install @react-navigation/stack</p>
                            <p style="padding-left:40px;color:#aaa">//TabNavigator</p>
                            <p style="padding-left:40px">npm install @react-navigation/bottom-tabs</p>
                            <p style="padding-left:40px;color:#aaa">//DrawerNavigator</p>
                            <p style="padding-left:40px">npm install @react-navigation/drawer</p>
                    <p>4.安装react-native-router-flux依赖</p>
                            <p style="padding-left:40px">yarn add react-native-router-flux</p>
                    <p>5.导入路由相关组件</p>
                            <p style="padding-left:40px">//Router:相当于HsahRouter,全局只用一次就行了</p>
                            <p style="padding-left:40px">//Stack:这是一个分组的容器，不表示具体的路由，专门用来给路由分组的</p>
                            <p style="padding-left:40px">//Scene:表示一个具体的路由规则，类似Route,</p>
                            <p style="padding-left:40px">import {Router,Stack,Scene} from 'react-native-router-flux'</p>

                    <p>6.使用：</p>
                            <img src="../../assets/img/reactnative/react-native-router-flux.png" alt="">

                    <p>7.补充Actions用法: Actions表示要进行路由的js操作 可以跳转到新路由,即可以进行编程式导航</p>
                            <p>导入路由的actions组件：import {Actions} from 'react-native-router-flux'</p>
                            <img src="../../assets/img/reactnative/编程式导航.png" alt="">
                            <h3>重要注意事项：安装此路由十分波折，我搞了2天勉强可以了，过程中总是报错：Command failed: gradlew.bat app:installDebug -PreactNativeDevServerPort=8081</h3>   
                            <h3>暂时找到了一个解决方法，但是在启动系统是还有有不少几率报这个错，每次都要启动好几次才成功，暂时就这样吧</h3>
                            <a href="https://blog.csdn.net/Bearin/article/details/106091102" style="color:blue">解决方法点击这里</a>
                   
                    <!-- ------------------------------------------------------------------------------------------------------------------------------------------------------------ -->
                     <h3 id="nr-6">6.拍照插件的使用：react-native-image-picker</h3>
                        <p>1. 运行npm install react-native-image-picker@latest --save（本次用的是yarn的方式：yarn add react-native-image-picker）安装到项目运行依赖，此时调试可能会报错，如果报错，需要使用下面的步骤解决：</p>
                        <p>- 先删除node_modules文件夹</p>
                        <p>- 运行npm i</p>
                        <p>- 运行npm start --reset-cache</p>
                        <p>2. 运行 react-native link 自动注册相关的组件到原生配置中</p>
                        <p>3. 打开项目中的android->app->src->main->AndroidManifest.xml文件，在第8行添加如下配置：</p>
                           <p><uses-permission android:name="android.permission.CAMERA" /></p>
                            <p><uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/></p>
                   
                   
                   
                   
                   
                   
                   
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
                                <template>
                                <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto;height:550px;">
                                    <li><a href="#nr-1" style="color:#425669">1.React native环境搭建</a></li>
                                    <li><a href="#nr-2" style="color:#425669">2.Tabbar引用</a></li>
                                    <li><a href="#nr-3" style="color:#425669">3.Icon图标引用</a></li>
                                    <li><a href="#nr-4" style="color:#425669">4.轮播图的引用</a></li>
                                    <li><a href="#nr-5" style="color:#425669">5.第三方路由插件的使用</a></li>
                                    <li><a href="#nr-6" style="color:#425669">6.拍照插件的使用</a></li>

                                </ul>
                                </template>
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
                count:0,
                num:null,
                url:require(`../../assets/img/react/img/React中组件的生命周期-详解.png`),
                 srcList: [
          require(`../../assets/img/react/img/React中组件的生命周期-详解.png`),
         
        ]
            }
        },
        methods:{
            load(){
        this.count = 22
      },
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