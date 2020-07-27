<template>
    <div class="home-first">
        <myNav></myNav>
        <div class="hello">
            <h3>你好，我是iJUN</h3>
        </div>
        <div class="bt">
            <a href="#dream"><el-button type="primary" plain round >开始阅读</el-button></a>
            <el-button type="primary" plain round >技术博客</el-button>
        </div>
        <div class="lianxi">
             <el-tooltip class="item" effect="dark" content="访问我的csdn" placement="top">
                 <a href="#">
                   <i class="iconfont icon-csdn"></i>
                </a>
             </el-tooltip>
              <el-tooltip class="item" effect="dark" content="访问我的qq" placement="top">
                  <a href="#">
                    <i class="iconfont icon-qq"></i>
                   </a>
             </el-tooltip>
               <el-tooltip class="item" effect="dark" content="访问我的微信" placement="top">
                   <a href="#">
                    <i class="iconfont icon-weixin1"></i>
                   </a>
             </el-tooltip>
               <el-tooltip class="item" effect="dark" content="访问我的github" placement="top">
                   <a href="#">
                    <i class="iconfont icon-huaban88"></i>
                   </a>
             </el-tooltip>
         
           
        </div>  

        <!--第二屏  -->
       <div class="twoPin">
            <el-card class="box-card mycard" shadow="hover" id="dream">
                <h3> <i class="iconfont icon-dengpao"></i>我的梦想</h3>
                <p>
                    不是每个人都应该像我这样去建造一座水晶大教堂，但是每个人都应该拥有自己的梦想，设计自己的梦想，追求自己的梦想，实现自己的梦想。梦想是生命的灵魂，是心灵的灯塔，是引导人走向成功的信仰。有了崇高的梦想，只要矢志不渝地追求，梦想就会成为现实，奋斗就会变成壮举，生命就会创造奇迹。——罗伯·舒乐
                </p>
             </el-card>
         
               <el-card :body-style="{ padding: '0px' }" class="ecd">
                     <img src="../assets/img/2.jpg" class="image">
                     <h3 @click="toBenZhan">本站相关知识</h3>
                    <div style="padding: 14px;">
                        <p>nav部分下拉滑动，固定到顶部</p>
                    </div>
                </el-card>

                 <el-card :body-style="{ padding: '0px' }" class="ecd">
                    <router-link to="/jsbase">
                         <img src="../assets/img/3.jpg" class="image">
                        <h3>js基础知识</h3>
                        <div style="padding: 14px;">
                            <span>好吃的汉堡</span>
                            <div class="bottom clearfix">
                            <time class="time">{{ 2 }}</time>
                            <el-button type="text" class="button">操作按钮</el-button>
                            </div>
                        </div>
                    </router-link>
                </el-card>

                 <el-card :body-style="{ padding: '0px' }" class="ecd">
                     <img src="../assets/img/4.jpg" class="image">
                     <h3>jquery基础知识</h3>
                    <div style="padding: 14px;">
                        <span>css基础知识</span>
                        <div class="bottom clearfix">
                        <time class="time">{{ 3 }}</time>
                        <el-button type="text" class="button">操作按钮</el-button>
                        </div>
                    </div>
                </el-card>

                 <el-card :body-style="{ padding: '0px' }" class="ecd">
                     <img src="../assets/img/5.jpg" class="image">
                     <h3>vue基础知识</h3>
                    <div style="padding: 14px;">
                        <span>好吃的汉堡</span>
                        <div class="bottom clearfix">
                        <time class="time">{{ 4 }}</time>
                        <el-button type="text" class="button">操作按钮</el-button>
                        </div>
                    </div>
                </el-card>

                 <el-card :body-style="{ padding: '0px' }" class="ecd">
                     <img src="../assets/img/6.jpg" class="image">
                     <h3>html相关知识</h3>
                    <div style="padding: 14px;">
                        <span>好吃的汉堡</span>
                        <div class="bottom clearfix">
                        <time class="time">{{ 5 }}</time>
                        <el-button type="text" class="button">操作按钮</el-button>
                        </div>
                    </div>
                </el-card>

                 <el-card :body-style="{ padding: '0px' }" class="ecd">
                    <router-link to="/mygithub">
                             <img src="../assets/img/7.jpg" class="image">
                            <h3>代码版本控制相关</h3>
                            <div style="padding: 14px;">
                               <p style="color:#303133">怎么将自己的代码上传至github</p>
                            </div> 
                    </router-link>
                </el-card>
                
       </div>
       <!-- 底部组件 -->
        <myBottom></myBottom>
    
 <!--回到顶部 -->
     <template>
        <el-backtop target=".home-first">
            <div class="back-ball">
                        <i class="el-icon-top"></i>
                        </div>
        </el-backtop>
    </template>

    </div> 
</template>

<script>
import myNav from '../components/mynav.vue'
import myBottom from '../components/myBottom.vue'
    export default {
       methods: {
           toBenZhan() {
               console.log('ddd')
               this.$router.push('/benzhan')
           }
       },
        
        components: {
            myNav,
            myBottom,
        },
    }
</script>

<style lang="scss" scoped>

	@media screen and (max-width: 540px){
        .twoPin{
            padding:25px 10px!important;
            .ecd{
                width:90%!important;
            }
        }
	}
	@media (min-width: 541px) and (max-width: 960px){
		.navs{
             .nv-right{
            display: none;
        }
        }

        .twoPin{
            width: 100%;
           padding: 0!important;
           
            #dream{
                margin-right: 40px;
                margin-left: 40px;
                margin-top: 40px;
            }
            .ecd{
                width: 40%!important;
                margin-left: 55px!important;
                img{
                    width: 100%;
                }
            }
            
        }
       
	}
	@media screen and (min-width: 961px){
		
	}






.home-first{
      overflow-x: hidden;
        overflow-y: scroll;//** 注意： ** target挂载点需要是一个滚动区域（设置高度。overflow-y：scroll）
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
//     width: 100%;
//     height: 100%;
//     background-image: url('../assets/img/zhuozi1.jpg');
//     background-repeat: no-repeat;
//  min-width:785px; 
background: url(../assets/img/bgc/sun1.jpg) no-repeat top center;
		background-size: cover;
		background-attachment: fixed;
		width: 100%;
		height: 100%;
		// position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;

}
.search{
    font-weight: bold;
}
.hello{
    text-align: center;
    font-size: 50px;
    color: #cdcace;
    margin-top: 135px;
}
.bt{
     text-align: center;
    margin-top: 100px;
    
    .el-button{
         background-color: unset;
        color:#cdcace;
        margin-left: 50px;
        width: 150px;
        height: 45px;
       
        

    }
}

.lianxi{
    text-align: center;
   height: 45px;
    color: #fff;
     margin-top: 150px;
    i{
        margin-left: 30px;
         font-size: 20px;
       
    }
}

// 第二屏
.twoPin{
overflow: hidden;
  
    background-color: #e9e9e9;
   padding:50px 110px ;
  
   //卡片视图
   .mycard{
     text-align: center;
     padding:50px;
     border-radius: 15px;
     h3{
         font-size: 30px;
         cursor: pointer;
         i{
             font-size: 30px;
             padding-right: 10px;
         }
     }
     p{
         color: #97a2ad;
         font-size: 20px;
        text-align: left
     }
    
   }
   .ecd:hover{transform: scale(1.05);
           transition: all 0.2s ease;}
   .ecd{
       width: 30%;
       float: left;
        margin: 15px;
        border-radius: 10px;
        position: relative;
         h3{
             cursor: pointer;
         }
        .image{
            height: 300px;
            border-radius: 10px;
        }
        img:hover{
           
        }
        h3{
            position: absolute;
            top:200px;
            text-align: center;
            font-size: 25px;
            color: #FFF;
        }
   }
}






















//dropdown样式
 .el-dropdown-link {
    cursor: pointer;
    color: #cdcace;
      font-size: 16px;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
</style>