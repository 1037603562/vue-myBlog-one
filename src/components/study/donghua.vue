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
                      <h3>2d转换</h3>
        <img src="../../assets/donghua/2d-1.jpg" alt="">
         <img src="../../assets/donghua/2d-2.jpg" alt="">
          <img src="../../assets/donghua/transform.jpg" alt="">
         <h3>盒子水平垂直居中</h3>
          <img src="../../assets/donghua/水平居中.jpg" alt="">
          <img src="../../assets/donghua/水平居中2.jpg" alt=""><br><br>
          <h3>2d转换之旋转 rotate</h3>
          <p>2d旋转是指让元素在在2维平面内顺时针或者逆时针旋转</p>
          <p>过度写到本身上，谁做动画给谁加</p>
          <img src="../../assets/donghua/rotate1.jpg" alt="" class="xz"><br><br>

        <h3>2d转换中心点</h3>
        <div class="twodzx"></div>
         <img src="../../assets/donghua/2d转换中心点代码.jpg" alt=""  >
            <img src="../../assets/donghua/2d转换中心点代码2.jpg" alt=""  >
        <img src="../../assets/donghua/2d转换中心点.jpg" alt=""  >
        <h3>2d缩放</h3>
         <img src="../../assets/donghua/缩放.jpg" alt=""  >
         <img src="../../assets/donghua/缩放2.jpg" alt="" class="sf" >
         <h3>2d转换综合写法及顺序问题</h3>
         <img src="../../assets/donghua/顺序.jpg" alt=""  class="sx">
         <br><br><br>
         <h1>c3动画</h1>
         <img src="../../assets/donghua/动画1.jpg" alt=""  >
        <img src="../../assets/donghua/动画基本使用.jpg" alt=""  >
         <img src="../../assets/donghua/动画序列.jpg" alt=""  >
        <img src="../../assets/donghua/使用动画.jpg" alt=""  >
        <img src="../../assets/donghua/动画代码.jpg" alt=""  class="dhdm">
        <br>
        <h3>动画常见属性</h3>
        <img src="../../assets/donghua/动画常见属性.jpg" alt=""  class="seeShuxing">
        <h3>动画简写</h3>
        <img src="../../assets/donghua/动画简写.jpg" alt=""  >
        <h3>地图案例</h3>
        <div class="map">
            <div class="city">
                <div class="dotted"></div>
                <div class="pulse1"></div>
                <div class="pulse2"></div>
                <div class="pulse3"></div>
            </div>
        </div>
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
/**********动画*****/

/* 2d转换旋转 */
.xz{
    /* 过度写到本身上，谁做动画给谁加 */
    transition: all 0.3s ease;
}
.xz:hover{
    /* 顺时针旋转45度 */
    transform: rotate(360deg);
}

/* 2d转换中心点 */
.twodzx{
    width: 100px;
    height: 100px;
    background-color: pink;
     /* 过度写到本身上，谁做动画给谁加 */
    transition: all 0.3s ease;
    /* transform-origin: left bottom; */
     transform-origin: 10px 10px;
}
.twodzx:hover{
    transform: rotate(360deg)
}
/* s缩放 */
.sf{
     transition: all 0.3s ease;
}
.sf:hover{
     
    transform: scale(1.1)
}
/* zo综合写法 顺序 */
.sx{
 transition: all 0.3s ease;
}
.sx:hover{
    transform: translate(150px,150px) rotate(180deg) scale(1.2)
}
/* 动画 */
@keyframes move {
    0%{
        transform: translateX(0)
    }
    25%{
        transform: translateX(1000px)
    }
     50%{
        transform: translate(1000px,500px)
    }
     75%{
        transform: translate(0px,500px)
    }
    100%{
        transform: translateX(0)
    }
}

.dhdm{
    animation-name: move;
    animation-duration: 2s;
}

/* 动画常见属性 */
@keyframes move1 {
    0%{
        transform: translateX(0)
    } 
    100%{
        transform: translateX(1000px)
    }
}
.seeShuxing{
    /* 动画名称 */
animation-name: move1;
/* 持续时间 */
animation-duration: 2s;
/* 运动曲线 */
animation-timing-function: ease;
/* 何时开始 */
animation-delay: 1s;
/* 播放次数 infinite（无数次）*/
animation-iteration-count:4;
/* s是否反方向播放 */
animation-direction: alternate;/*normal*/
/*  */
}
/* ditditd地图案例*/
.map{
    width: 200px;
    height: 200px;
    background-color: darkolivegreen;
    margin: 0 auto;
    position: relative;
}
.city{
    position: absolute;
    top: 10px;
    right: 10px;
    color: red;
}
.dotted{
    width: 8px;
    height: 8px ;
    background-color: #09f;
    border-radius: 50%;
}
.city div[class^="pulse"]{
    width: 8px;
    height: 8px;
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
    box-shadow: 0 0 12px #009dfd;
    border-radius: 50%;
    animation: pulse 1.2s linear infinite;
}
.city div.pulse2{
    animation-delay: 0.4s
}
.city div.pulse3{
    animation-delay: 0.8s
}
@keyframes pulse{
    0%{

    }
    70%{
     width: 40px;
     height: 40px;
     opacity: 1;   

    }
    100%{
        width: 70px;
        height: 70px;
        opacity: 0;
    }
}
</style>