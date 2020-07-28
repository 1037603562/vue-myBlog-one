<template>
    <div class="mygithub">
        <!-- 头部 -->
        <div class="mytop">
            <myNav></myNav>
        </div>
        <!-- 身体 -->
        <div class="mybody">
                <div class="my_card">
                    <el-card>
                        <h3 id="nr-1">1.怎么将自己的项目上传至github</h3>
                        <img src="../assets/img/mygithub/怎么将自己的项目上传至github - 简书.png" alt="" srcset="">

                         <h3 id="nr-2">2.github秘钥相关</h3>
                        <img src="../assets/img/mygithub/michi.png" alt="" srcset=""></br>

                        <h3 id="nr-3">3.上传至GitHub所需语句</h3>
                        <div>
                            git init</br>
                            git add .</br>
                            git commit -m"此处为提交说明"</br>
                            git remote add origin 此处跟仓库的ssh地址</br> <!-- git remote add origin git@github.com:1037603562/myvue.git -->
                            git push -u origin master</br></br></br>

                            <p>可能会出现邮箱和用户名验证，用一下账号</p>
                            git config --global user.email "你的注册邮箱"</br>   <!--git config --global user.email "1037603562@qq.com"  -->
                            git config --global user.name "你的用户名"</br>   <!--  git config --global user.name "1037603562" -->
                        </div>
                        
                          <h3 id="nr-4">4.更新代码到github</h3>
                              <img src="../assets/img/mygithub/updateCode.png" alt="" srcset=""></br>
                         <h3 id="nr-5">5.利用githubPages将项目的静态页面部署到github上</h3>
                              <img src="../assets/img/mygithub/githubpages.png" alt="" srcset=""></br>
                           <h3 id="nr-6">6.vue项目打包后index页面访问为空白页面的解决方法</h3>
                             <img src="../assets/img/mygithub/bulid.png" alt="" srcset=""></br>
                    </el-card>
                </div>
                <div class="mulu" :class="this.num >100 ? 'moveMulu' : ''">
                    <div class="mulu_m">
                             <div class="ml-top">
                                <i class="el-icon-tickets"></i>
                                <label>目录</label>
                            </div>
                            <div class="ml-body">
                                <ul>
                                    <li><a href="#nr-1" style="color:#425669">1.怎么将自己的项目上传至github</a></li>
                                    <li><a href="#nr-2" style="color:#425669">2.github秘钥相关</a></li>
                                    <li><a href="#nr-3" style="color:#425669">3.上传至GitHub所需语句</a></li>
                                    <li><a href="#nr-4" style="color:#425669">4.更新代码到github</a></li>
                                     <li><a href="#nr-5" style="color:#425669">5.利用githubPages将项目的静态页面部署到github上</a></li>
                                    <li><a href="#nr-6" style="color:#425669">6.vue项目打包后index页面访问为空白页面的解决方法</a></li>
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
import myNav from '../components/mynav.vue'
import myBottom from '../components/myBottom.vue'
import backtop from '../components/Backtop.vue'

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
                console.log(this.num)
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
      margin-left: -50px!important;
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
        background: url(../assets/img/bgc4.jpg) no-repeat top center;
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