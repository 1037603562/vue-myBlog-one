<template>
    <div class="mylabel">
        <!-- 头部 -->
        <div class="mytop">
            <myNav></myNav>
        </div>
        <!-- 身体 -->
        <div class="mybody">
            <el-card class="card1" shadow="hover">
               <div class="top">
                   <div class="top_left">
                       <img src="../assets/img/123.png" alt="">
                   </div>
                   <div class="top_right">
                      <ul>
                          <li>
                              <i class="iconfont icon-brief"></i>
                              <div>个人简介</div>
                          </li>
                          <li>
                              <span> <i class="el-icon-s-custom"></i>江湖人称：xioajunjun</span>
                              <div class="top_r">
                                  <span><i class="iconfont icon-tubiao-"></i> 名字：逗你玩</span>
                              </div>
                          </li>
                          <li>
                              <span><i class="iconfont icon-shengri"></i>出生日期：1993-04-01</span>
                              <div class="top_r">
                                     <span><i class="iconfont icon-dizhi"></i>地址：湖北恩施</span>
                              </div>
                             
                          </li>
                          <li>
                              <span><i class="iconfont icon-yuleaihao"></i>个人爱好：吃饭 | 睡觉 | 打豆豆</span>
                              <div class="top_r">
                                    <span><i class="iconfont icon-zhiwenxiaoyan"></i>特点：美剧迷</span>
                              </div>
                              
                          </li>
                      </ul>
                   </div>
               </div>
               <div class="body"></div>
               <div class="bottoms"></div>
            </el-card>

             <el-card class="card2" shadow="hover">
                 <div class="c2_left">
                     <h3>关于我 | About Me</h3>
                     <ul>
                         <li>
                             <i class="iconfont icon-dian"></i>
                             <span>行业 ：计算机</span>
                         </li>
                          <li>
                             <i class="iconfont icon-dian"></i>
                             <span>现况 ：专业技术还不够，需继续努力</span>
                         </li>
                          <li>
                             <i class="iconfont icon-dian"></i>
                             <span>目标 ：优秀的前端开发工程师</span>
                         </li>
                          <li>
                             <i class="iconfont icon-dian"></i>
                             <span>博客 ：记录学习过程的点滴</span>
                         </li>
                          <li>
                             <i class="iconfont icon-dian"></i>
                             <span>兴趣 ：美剧，项目</span>
                         </li>
                          <li>
                             <i class="iconfont icon-dian"></i>
                             <span>其他 ：目前准备学习react</span>
                         </li>
                     </ul>
                 </div>
                 <div class="c2_right">
                      <h3>我的技能 | My Skills</h3>

                      <div class="jn_body_jdt">
                           <el-progress class="prs" :text-inside="true" :stroke-width="26" :percentage="70"></el-progress>
                           <span>JavaScript</span>
                      </div>
                        <div class="jn_body_jdt">
                           <el-progress status="success" :text-inside="true" :stroke-width="26" :percentage="80" ></el-progress>
                           <span>Vue</span>
                      </div>
                        <div class="jn_body_jdt">
                           <el-progress status="warning" :text-inside="true" :stroke-width="26" :percentage="83"></el-progress>
                           <span>Html</span>
                      </div>
                        <div class="jn_body_jdt">
                           <el-progress status="exception" :text-inside="true" :stroke-width="26" :percentage="90"></el-progress>
                           <span>css</span>
                      </div>
                        <div class="jn_body_jdt">
                           <el-progress :text-inside="true" :stroke-width="26" :percentage="77" ></el-progress>
                           <span>网页设计</span>
                      </div>
                        <div class="jn_body_jdt">
                           <el-progress status="exception" :text-inside="true" :stroke-width="26" :percentage="86"></el-progress>
                           <span>Vue</span>
                      </div>

                 </div>
            </el-card>

             <el-card class="card3" shadow="hover">
                <div class="cd2_one">
                    本版块暂无内容
                </div>
            </el-card>

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
import myNav from '../components/mynav.vue'
import myBottom from '../components/myBottom.vue'
import backtop from '../components/Backtop.vue'

    export default {
        data() {
            return {
                targets: '.mylabel'
            }
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
  .top_left{
      width: 100px!important;
    height: 100px!important;
    img{
        width: 100px!important;
    height: 100px!important;
    }
  }
  .top_right{
      width:116%!important;
      ul{
          li{
              font-size: 10px;
              span{margin-right: 0!important;}
              .top_r{width: 36%!important;}
          }
      }
  }
.card1,.card2,.card3{
    width: 94%!important;
    margin-left: 3%!important;
}
.c2_left{
    width:100%!important;
}
.c2_right{
    width:100%!important;
    margin-top: 10px;
    padding-top: 10px;
    border-top: 2px solid #143553;
}
	}

	@media (min-width: 541px) and (max-width: 960px){
	.top_right{
        width: 60%!important;
        float: left!important;
        font-size: 13px;
        ul{
            li{
                span{
                    margin-right: -100px!important;
                  
                }
            }
        }
        li:nth-child(2){
            .top_r{
                span{margin-left: 70px!important;}
            }
        }
        li:nth-child(3){
            .top_r{
                span{margin-left: 70px!important;}
            }
        }
         li:nth-child(4){
            .top_r{
                span{margin-left: 70px!important;}
            }
        }
    }
     .c2_left{
         ul{
             li{font-size: 15px!important;}
         }
     }  
	}
	@media screen and (min-width: 961px){
		
	}






.mylabel{
      overflow-x: hidden;
        overflow-y: scroll;
    //         .back-ball {
    //     background-color: tomato;
    //     color: #fff;
    //     width: 48px;
    //     height: 33px;
    //     border-radius: 50%;
    //     padding: 10px;
    //     line-height: 10px;
    //    i{
    //         font-weight: bold;
    //         font-size: 35px;
    //    }
    // }
        }
.mylabel{
    

    background-color: #143553;
    width: 100%;
     height: 100%;
    .mytop{
        width: 100%;
        height: 380px;
        background: url(../assets/img/anthor.jpg) no-repeat top center;
		background-size: cover;
      
       
    }
    .mybody{

        .card1{
            width: 80%;
            text-align: center;
        //    margin-top: -70px;
           margin-left: 11%;
           margin-top: 50px;
           border-radius: 0;
           border: 0;
          
           background-color: #a1aeba;

           .top{
             .top_left{
                   /* 过度写到本身上，谁做动画给谁加 */
                transition: all 0.3s ease;  

                 float: left;
                 width: 200px;
                 height: 200px;
                 border: 1px solid #63717c;
                 border-radius: 50%;
                 img{
                      width: 200px;
                 height: 200px;
                 }
             }
              .top_left:hover{
                   /* 顺时针旋转360度 */
    transform: rotate(360deg);
              }
             .top_right{
                  width:80%;
                 float: right;
                 ul{
                 margin-left: 50px;
                    li:nth-child(1){
                        font-size: 25px;
                        font-weight: bold;
                       i{float: left;   font-size: 25px;}
                       div{float: left}
                    }
                     li{
                          width:100%;
                          height: 50px;
                          border-bottom: 1px solid #94a2af;
                     line-height: 50px;
                          float: right;
                          font-weight: bold;
                         
                          span{
                              float: left;
                              margin-right: 100px;
                              i{
                                  margin-right: 10px;
                              }
                          }
                     }
                 }
                 .top_r{
                     width: 50%;
                     float: right;
                 }
             }
           } 
        }
          .card2{
               width: 80%;
            text-align: center;
        //    margin-top: -70px;
           margin-left: 11%;
           margin-top: 50px;
           border-radius: 0;
           border: 0;
          
           background-color: #a1aeba;


            margin-top: 2px;
            .c2_left{
                float: left;
                width: 50%;
               

                 ul{
                        border: 1px solid #94a1ad;
                        border-radius: 5px;
                        margin-left: -21px;
                        margin-top: 10px;
                        margin-bottom: 10px;
                       font-size: 15px;
                       font-weight: bold;
                        li:nth-child(1){
                             border-top:0;
                        }
                    li{
                        display: flex; 
                        align-items: center;
                        justify-content:left;
                        margin-left: 10px;
                       height: 40px;
                       line-height: 40px;
                       border-top: 1px solid #94a1ad;
                        font-size: 17px;
                       i{
                           font-size: 30px;
                       }
                       span{
                        
                       }
                    }
                }
            }
            .c2_right{
                float: right;
                 width: 50%;
                h3{
                    text-align: center;
                }

                 .jn_body_jdt{
                width: 90%;
                float: left;
                margin-top: 10px;
                margin-bottom: 10px;
                margin-left: 30px;
                
               
               
                position: relative;
                span{
                    position: absolute;
                    top: 2px;
                    left: 20px;
                    color: white;
                }
                 transition: all 0.3s ease;
            }
            .jn_body_jdt:hover{
                transform: scale(1.1);
            }
            }
        }

        .card3{
               width: 80%;
            text-align: center;
           margin-left: 11%;
           margin-top: 50px;
           border-radius: 0;
           border: 0;
           background-color: #a1aeba;
           margin-top: 2px;
           height: 200px;
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