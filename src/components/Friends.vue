<template>
    <div class="mylabel">
        <!-- 头部 -->
        <div class="mytop">
            <myNav></myNav>
        </div>
        <!-- 身体 -->
        <div class="mybody">
            <el-card class="card1" shadow="hover">
                <div class="ly">
                  <i class="iconfont icon-contact"></i>
                  <div>友情链接</div>
              </div>
                    <el-card class="box-card cd1">
                        <div class="cd1_left">
                            <img src="../assets/img/friends/1.jpg" alt="">
                        </div>
                        <div class="cd1_right">
                            <h3>悟尘记</h3>
                            <p>人生就是一场修行，上善若水，厚德载物。</p>
                        </div>
                       <a href="https://www.lixl.cn/" target="_Blank"> <el-button type="danger" round style="width:140px;">前去参观</el-button></a>
                    </el-card>


                     <el-card class="box-card cd1 cd2">
                        <div class="cd1_left">
                            <img src="../assets/img/friends/2.svg" alt="">
                        </div>
                        <div class="cd1_right">
                            <h3>BootCDN</h3>
                            <p>稳定、快速、免费的前端开源项目 CDN 加速服务。</p>
                        </div>
                        <a href="https://www.bootcdn.cn/" target="_Blank"><el-button type="danger" round style="width:140px;">前去参观</el-button></a>
                    </el-card>


                     <el-card class="box-card cd1 cd3">
                        <div class="cd1_left">
                            <img src="../assets/img/friends/1.jpg" alt="">
                        </div>
                        <div class="cd1_right">
                            <h3>iHao</h3>
                            <p>欢迎来到iHao's Blog的个人网站</p>
                        </div>
                        <a href="http://www.vipihao.com/" target="_Blank"><el-button type="danger" round style="width:140px;">前去参观</el-button></a>
                    </el-card>
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
   

      .cd1{
          width: 100%!important;
          height: 250px!important;;
          margin-bottom: 40px!important;
          .el-button{
              position: absolute;
                top: 110px !important;
                left: 119px !important;
          }
      }

 .cd2{
          .el-button{
              position: absolute;
                 top: 410px !important;
                left: 119px !important;
          } 
      }
      .cd3{
            .el-button{
                        position: absolute;
                        top: 700px !important;
                         left: 119px !important;
                    }
      }

      .cd1_right{
          padding-top: 20px!important;
            margin-left: 0px!important;
      }
      .ly{
          padding-left: 21%!important;
      }
	}

	@media (min-width: 541px) and (max-width: 960px){
	  .cd1{
          width: 100%!important;
          margin-bottom: 40px!important;
          .el-button{
              position: absolute;
                top: 210px!important;
                left: 464px!important;
          }
      }
      .cd2{
          .el-button{
              position: absolute;
                top: 450px!important;
                left: 464px!important;
          } 
      }
      .cd3{
            .el-button{
                        position: absolute;
                        top: 700px!important;
                left: 464px!important;
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

        .card1{
            padding-left: 30px;
             .ly{
                 width: 100%;
                 height: 100px;
               padding-left: 41%;
               color: #34495e;
               margin-top: 10px;
               
                i{
                    float: left;
                    font-size: 30px;
                     line-height: 70px;
                }
                div{
                    float: left;
                    font-size: 25px;
                    line-height: 70px;
                    margin-left: 10px;
                }
            }
            width: 80%;
            -height: 450px;
            text-align: center;
           margin-top: -70px;
           margin-left: 10%;
           padding-bottom: 40px;
           border-radius: 10px;
           margin-bottom: 20px;
           position: relative;
            -padding: 30px;
                .el-card{
                    margin-right: 30px;
                }
            //小卡片
            .cd1{
    
                width: 29%;
                height: 300px;
                float: left;
                background-image: linear-gradient(to right,#4facfe 0,#00f2fe 100%);
            
                .cd1_left{
                    float: left;
                    img{
                        width: 100px;
                        height: 100px;
                        border-radius: 50%;
                        margin-top: 30px;
                        
                    }
                }
                .cd1_right{
                    float: left;
                    padding-top: 50px;
                    margin-left: 10px;
                    h3{
                        font-size: 30px;
                        width: 103%;
                        color: white;
                        margin-top: -20px;
                        text-align: left;
                        border-bottom: 2px solid white;
                    }
                    p{
                        width:160px;
                        text-align: left;
                        margin-top: 8px;
                        color: white;
                    }
                }
                .el-button{
                    position: absolute;
                    top: 410px;
                    left: 120px;
                }
            }
            .cd2{
                background-image: linear-gradient(to right,#b8cbb8 0,#b8cbb8 0,#b465da 0,#cf6cc9 33%,#ee609c 66%,#ee609c 100%);
               .el-button{
                   position: absolute;
                    top: 410px;
                    left: 428px;
               } 
            }
            .cd3{
                background-image: linear-gradient(135deg,#667eea 0,#764ba2 100%);

                .el-button{
                    position: absolute;
                     top: 410px;
                    left: 727px;
                }
            }
            a{
                color: white;
            }

        }
          .card2{
            width: 80%;
            text-align: center;
          
           margin-left: 10%;
           border-radius: 10px;
           margin-bottom: 20px;
            
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