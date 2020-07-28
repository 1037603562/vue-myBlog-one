<template>
    <div class="aboutme">
        <!-- 头部 -->
        <div class="mytop">
            <myNav></myNav>
        </div>
        <!-- 身体 -->
        <div class="mybody">
            <el-card class="card1" shadow="hover">
                <!-- toubu -->
                <div class="about_hd">
                    <div class="hd_left">
                        <div class="hd_left_z">
                            <a href="#">11</a>
                            <div>文章</div>
                        </div>

                         <div class="hd_left_z">
                            <a href="#">13</a>
                            <div>分类</div>
                        </div>

                         <div class="hd_left_z">
                            <a href="#">151</a>
                            <div>标签</div>
                        </div>
                        
                    </div>
                    <div class="hd_middle">
                        <img src="../assets/img/123.png" alt="">
                    </div>
                    <div class="hd_right">
                        <div class="lianxi">
                            <div class="csdn">
                                <el-tooltip class="item" effect="dark" content="访问我的csdn" placement="top">
                                    <a href="#">
                                    <i class="iconfont icon-csdn"></i>
                                </a>
                                </el-tooltip>
                            </div>
                            <div class="csdn">
                            <el-tooltip class="item" effect="dark" content="访问我的qq" placement="top">
                                <a href="#">
                                    <i class="iconfont icon-qq"></i>
                                </a>
                            </el-tooltip>
                            </div>
                            <div class="csdn">
                            <el-tooltip class="item" effect="dark" content="访问我的微信" placement="top">
                                <a href="#">
                                    <i class="iconfont icon-weixin1"></i>
                                </a>
                            </el-tooltip>
                            </div>
                            <div class="csdn">
                            <el-tooltip class="item" effect="dark" content="访问我的github" placement="top">
                                <a href="#">
                                    <i class="iconfont icon-huaban88"></i>
                                </a>
                            </el-tooltip>
                            </div>
                        </div> 
                    </div>
                </div>
                <div class="jieshao">
                    <h3>iJun</h3>
                    <p>Software Engineer</p>
                    <label>If you wish to succeed, you should use persistence as your</br>
                     good friend, experience as your reference, prudence as your brother and hope as your sentry.</label>
                </div>
                 <div class="about_xiangmu">
                     <div class="xm_hd">
                         <i class="el-icon-s-cooperation"></i>
                         <p>我的项目</p>
                   </div>
                   <div class="xm_body">
                         <div class="xm_b">
                          <a href="https://github.com/1037603562/vue-dianshang-heima" target="_Blank">
                               <div class="xm_b_b">
                                <i class="el-icon-coin"></i>
                            </div>
                            <p>vue后台管理系统1</p></br>
                            <span>这是b站教程里面的后台系统，不同用户的登录权限控制在后台代码中</span>
                          </a>
                       </div>

                        <div class="xm_b">
                          <a href="https://github.com/1037603562/xiaodihoutai" target="_Blank">
                               <div class="xm_b_b">
                                <i class="el-icon-coin"></i>
                            </div>
                            <p>vue后台管理系统2</p></br>
                            <span>这是小滴后台管理系统，调用addroutes进行权限管理控制</span>
                          </a>
                       </div>

                       <div class="xm_b">
                          <a href="https://github.com/1037603562/myvue" target="_Blank">
                               <div class="xm_b_b">
                                <i class="el-icon-coin"></i>
                            </div>
                            <p>纯手工无框架后台管理系统</p></br>
                            <span>这是在最初的时候用vue写的后台系统，各方面都不成熟，做纪念---（即myvue，上传失败，后续解决）</span>
                          </a>
                       </div>
                         

                         

                   </div>
                 </div>
                <div class="about_jineng">
                     <div class="xm_hd">
                         <i class="iconfont icon-banshou"></i>
                         <p>我的技能</p>
                   </div>
                   <div class="jn_body">
                      <div class="jn_body_jdt">
                           <el-progress :text-inside="true" :stroke-width="26" :percentage="70"></el-progress>
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
                        <!-- <el-progress :text-inside="true" :stroke-width="24" :percentage="100" status="success"></el-progress>
                        <el-progress :text-inside="true" :stroke-width="22" :percentage="80" status="warning"></el-progress>
                        <el-progress :text-inside="true" :stroke-width="20" :percentage="50" status="exception"></el-progress> -->
                   </div>

                </div>
                <div class="about_otherjn">
                    <div class="xm_hd">
                         <i class="iconfont icon-shu"></i>
                         <p>其他技能</p>
                   </div>
                   <div class="oth">
                    <div class="c_body_f">
                        <el-button type="primary">主要按钮</el-button>
                        <el-button type="success" >成功按钮</el-button>
                        <el-button type="info" >信息按钮</el-button>
                        <el-button type="warning">警告按钮</el-button>
                        <el-button type="danger">危险按钮</el-button></br>
                   </div>

                    <div class="c_body_f">
                        <el-button type="primary">主要按钮</el-button>
                        <el-button type="primary">主要按钮</el-button>
                        <el-button type="success" >成功按钮</el-button>
                        <el-button type="info" >信息按钮</el-button>
                        <el-button type="warning">警告按钮</el-button>
                        <el-button type="danger">危险按钮</el-button></br>
                   </div>

                      <div class="c_body_f">
                        <el-button type="primary">主要按钮</el-button>
                        <el-button type="primary">主要按钮</el-button>
                        <el-button type="success" >成功按钮</el-button>
                        <el-button type="info" >信息按钮</el-button>
                        <el-button type="warning">警告按钮</el-button>
                        <el-button type="danger">危险按钮</el-button></br>
                   </div>

                      <div class="c_body_f">
                        <el-button type="success" >成功按钮</el-button>
                        <el-button type="info" >信息按钮</el-button>
                        <el-button type="warning">警告按钮</el-button>
                        <el-button type="danger">危险按钮</el-button></br>
                   </div>
                   </div>
                </div>
                <div class="about_photo">
                     <div class="xm_hd">
                         <i class="el-icon-picture"></i>
                         <p>相册</p>
                   </div>
                    <div class="ph">
                        <img src="../assets/img/2.jpg" alt="">
                    </div>
                     <div class="ph">
                        <img src="../assets/img/3.jpg" alt="">
                    </div>
                     <div class="ph">
                        <img src="../assets/img/5.jpg" alt="">
                    </div>
                </div>
            </el-card>

             <el-card class="card2" shadow="hover">
                <div class="about_study">
                    <div class="xm_hd">
                         <i class="iconfont icon-jianli"></i>
                         <p>个人简历</p>
                   </div>
                   <div class="jianli"></div>
                </div>
            </el-card>
    <!--
             <el-card class="card2" shadow="hover">
                <div v-for="o in 10" :key="o" class="text item">
                    {{'列表内容 ' + o }}
                </div>
            </el-card> -->

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
                targets: '.aboutme'
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
    .ph{
        margin: 0!important;
    }
    .xm_hd{
        margin-top: 150px!important;
    }
    .oth{
        .el-button{
            margin-bottom: 10px!important;
        }
    }
     .hd_middle{
        left:37%!important;
        width: 150px!important;
        height: 150px!important;
        top: -100px!important;
        img{
            width: 150px!important;
            height: 150px!important;
        }
    }

    .hd_left{
        margin-left: -10px!important;
        font-size: 10px!important;
    }
    .hd_right{
        font-size: 10px!important;
        margin-right: -26px!important;
        .lianxi{
            div{
                width: 30px!important;
                height: 30px!important;
                margin-right: 10px!important;
               
            }
        }
    }  
    .xm_b{
        width: 100%!important;
         p{
            margin-left: 70px!important;
        }
    }
    .jn_body_jdt{
        width: 100%!important;
        margin-left: 10px!important;
    }
    .ph{
        width: 100%!important;
    }
    .xm_b_b{
        margin-left: 100px!important;
    }
	}

	@media (min-width: 541px) and (max-width: 960px){
	.hd_middle{
        left:43%!important;
    }
    .xm_b_b{
        margin-left: 60px!important;
        
    }
    .xm_b{
        p{
            margin-left: 20px!important;
        }  
        .xm_b_b{
            margin-left: 100px;
        }
    }
     .ph{
         margin-left:130px!important;
         width: 15%!important;
         img{
             width: 230px!important;
         }
     }
       
	}
	@media screen and (min-width: 961px){
		
	}













.aboutme{
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
.aboutme{
    

    background-color: #e9e9e9;
    width: 100%;
     height: 100%;
    .mytop{
        width: 100%;
        height: 380px;
        background: url(../assets/img/bgc4.jpg) no-repeat top center;
		background-size: cover;
      
       
    }
    .mybody{
position: relative;
        .card1{
            width: 80%;
            text-align: center;
           margin-top: -70px;
           margin-left: 10%;
           border-radius: 10px;
           margin-bottom: 20px;
    
         .about_hd{
             display: flex;
             justify-content: space-between;
    
             .hd_left{
                 display: flex;
                 justify-content: space-between;
                 margin-left: 70px;
                 .hd_left_z{
                     margin-right: 15px;
                 }
                 a{
                     color: #42b983;
                     font-weight: 700;
                     font-size: 20px;
                     text-decoration: underline;
                 }
                 div{
                     color: #777;
                     font-size: 15px;
                     margin-top: 10px;
                 }
             }

             .hd_middle{
                 background-color: #fdf6fe;
                width: 180px;
                height: 190px;
                border-radius: 48%;
                position: absolute;
                top:-120px;
                left: 45%;
                img{
                    width: 180px;
                    height: 180px;
                }
             }
             .hd_right{
                .lianxi{
                    margin-top: 15px;
                    .csdn{
                        
                        width: 35px;
                        height: 35px;
                        line-height: 35px;
                        border-radius: 50%;
                        background-color: #2cad45;
                        float: left;
                        margin-right: 20px;
                       .el-tooltip{
                           
                           i{
                               font-size: 15px;
                               color: white;
                           }
                       }
                    }
                }
    }
             }
           
    //ihao
    .jieshao{
        color: #3c4858;
        h3{
            font-size: 30px;
        }
        p{
            font-size: 10px;
        }
        label{
            color: #ccc;
        }
    }
        }
       
        .about_xiangmu{
            margin-top: 100px;
            margin-bottom: 200px;
            .xm_hd{
                margin-bottom: 20px;
               p{
                  display: inline-block;
                  font-size: 25px;
                   margin-left: 20px;
                   
               }
                i{
                   
                    font-size: 30px;
                    
                }
            }
            .xm_body{
                width: 100%;
                .xm_b{
                  padding: 10px;
                    width: 30%;
                      float: left;
                    p{
                        display: inline-block;
                        float: left;
                        margin: 0;
                        margin-left: 110px;
                        color: #34495e;
                        font-weight: bold;
                       margin-bottom: 10px;
                       margin-top: 10px;
                    }
                    span{
                        float: left;
                        font-size: 10px;
                        color: #999;
                    }
                     .xm_b_b{ 
                    width: 80px;
                    height: 80px;
                    background-color: #73c176;
                    border-radius: 50%;
                    margin-left: 150px;
                 
                    i{
                        font-size: 30px;
                        line-height: 80px;
                        color: white;
                    }
                }
            }
               
            }
        }

        //我的技能
        .about_jineng{
            padding-top: 30px;
                   .xm_hd{   
                margin-bottom: 20px;
               p{
                  display: inline-block;
                  font-size: 25px;
                   margin-left: 20px;
                   
               }
                i{
                   
                    font-size: 30px;
                    
                }
            }

        .jn_body{
            .jn_body_jdt{
                width: 24%;
                float: left;
                margin-top: 10px;
                margin-bottom: 10px;
                margin-left: 90px;
                
               
               
                position: relative;
                span{
                    position: absolute;
                    top: 2px;
                    left: 20px;
                    color: white;
                }
            }
        }



        }

        //其他技能
        .about_otherjn{
            padding-top: 250px;
             .xm_hd{   
                margin-bottom: 20px;
               p{
                  display: inline-block;
                  font-size: 25px;
                   margin-left: 20px;
                   
               }
                i{
                   
                    font-size: 30px;
                    
                }
            }

            .oth{
                width: 100%;
                height: 450px;
                 .c_body_f{
                         margin-bottom: 20px;
                         text-align: center;
                    }
            }
        }

        //相册
        .about_photo{
            .xm_hd{   
                margin-bottom: 20px;
               p{
                  display: inline-block;
                  font-size: 25px;
                   margin-left: 40px;
                   
               }
                i{
                   
                    font-size: 30px;
                    
                }
            }
            div:nth-child(2){
                 margin-left: 40px;
            }
            .ph{
                margin-left: 43px;
                padding-right: 15px;
                width: 27%;
                height: 210px;
                float: left;
               
                img{
                    background-image: cover;
                    width: 300px;
                    height: 200px;
                    border-radius: 15px;

                }
            } 
        }
        //简历
           .card2{
            width: 80%;
            text-align: center;
          
           margin-left: 10%;
           border-radius: 10px;
           margin-bottom: 20px;
            
        }
        .about_study{
                  .xm_hd{   
                margin-bottom: 20px;
               p{
                  display: inline-block;
                  font-size: 25px;
                   margin-left: 20px;
                   
               }
                i{
                   
                    font-size: 30px;
                    
                }
            }

            .jianli{
                width: 100%;
                height: 50px;
            }
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