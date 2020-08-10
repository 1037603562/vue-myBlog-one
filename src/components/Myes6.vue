<template>
    <div class="jsbase">
        <!-- 头部 -->
        <div class="mytop">
            <myNav></myNav>
        </div>
        <!-- 身体 -->
        <div class="mybody">
                <div class="my_card">
                    <el-card>
                        <h3 id="nr-1">1.es6展开运算符“...”</h3>
                            <p style="margin-left:50px;"> var o1={name:'zs'}</p>
                            <p style="margin-left:50px;"> var o2={</p>
                                    <p style="margin-left:100px;">age:22,</p>
                                    <p style="margin-left:100px;"> address:'中国北京',</p>
                                    <p style="margin-left:100px;">phone:13522222222</p>
                            <p style="margin-left:100px;">}</p>

                            <p>(1)现有需求：将o2身上所有属性都传递给o1</p>
                            <p style="margin-left:50px;"> var o1={</p>
                                <p style="margin-left:100px;">name:'zs',</p>
                                <p style="margin-left:100px;">...o2//3个点代表展开，即展开o2,o2身上有几个属性就展开并交给o1去使用</p>
                            <p style="margin-left:100px;">}</p>


                            <h3 id="nr-2">2.es6新特性关键字Class</h3>
                            <img src="../assets/img/es6/es6Class关键字.png" alt="">
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
                                    <li><a href="#nr-1" style="color:#425669">1.es6展开运算符“...”</a></li>
                                    <li><a href="#nr-2" style="color:#425669">2.es6新特性关键字Class</a></li>
                                      <!--<li><a href="#nr-3" style="color:#425669">3.上传至GitHub所需语句</a></li>
                                    <li><a href="#nr-4" style="color:#425669">4.更新代码到github</a></li> -->

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
                targets: '.jsbase',
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



.jsbase{
      overflow-x: hidden;
        overflow-y: scroll;
    
        }
.jsbase{
    

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
                min-height: 500px;
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