<template>
    <div class="myvue">
        <!-- 头部 -->
        <div class="mytop">
            <myNav></myNav>
        </div>
        <!-- 身体 -->
        <div class="mybody">
                <div class="my_card">
                    <el-card>
                         <h3>父组件向子组件传值1：</h3><br>
                        <img src="../../assets/parent.jpg" alt="">
                        <img src="../../assets/son.jpg" alt="">
                        <h3>子组件项父组件传值：</h3><br><br><br>
                        <img src="../../assets/zichuanfu.jpg" alt=""><br><br>
                            <h3>父子组件之间传值的第二种方法：</h3><br
                            <img src="../../assets/chuanzhi2.jpg" alt="">
                            <img src="../../assets/chuanzhi3.jpg" alt=""><br><br>

                            <h3>父子组件之间传值的第三种方法：</h3><br
                            <img src="../../assets/chuanzhi5.jpg" alt="">
                            <img src="../../assets/chuanzhi4.jpg" alt=""><br><br>

                            <h3>非父子组件间的传值1</h3>
                            <img src="../../assets/nops0.jpg" alt="">
                            <img src="../../assets/noPS1.jpg" alt=""><br><br>

                            <h3>非父子组件间的传值2(祖孙间传值)</h3>
                            <img src="../../assets/attrs0.jpg" alt="">
                            <img src="../../assets/attrs.jpg" alt=""><br><br>
                    </el-card>
                </div>
                <!-- <div class="mulu" :class="this.num >100 ? 'moveMulu' : ''">
                    <div class="mulu_m">
                             <div class="ml-top">
                                <i class="el-icon-tickets"></i>
                                <label>目录</label>
                            </div>
                            <div class="ml-body">
                                <ul>
                                    <li><a href="#nr-1" style="color:#425669">1.怎么将自己的项目上传至github</a></li>
                                    
                                </ul>
                                
                            </div>
                    </div>
                </div> -->

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
                targets: '.myvue',
                num:null,
            }
        },
        methods:{
             getScroll(e) {//获取鼠标滚动后的数值
               
                this.num =e.target.scrollTop
                // console.log(this.num)
            },

             
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


.myvue{
      overflow-x: hidden;
        overflow-y: scroll;
    
        }
.myvue{
    

    background-color: #e9e9e9;
    width: 100%;
     height: 100%;
    .mytop{
        width: 100%;
        height: 380px;
       background: url(../../assets/img/bgc4.jpg) no-repeat top center;
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