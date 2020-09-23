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