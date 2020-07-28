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
                         <!-- 内容 -->
                   <h3 id="nr-1">1.nav部分鼠标滚动下拉 保持在顶部</h3>
                   <img src="../assets/img/benzhan/scroll.jpg" alt="" srcset=""  class="img_one">
                   <span> 配合 :class="this.num >100 ? 'navAfterStyle' : '' 使用</span>
                   <p> scrollTop 值是这个元素的顶部到它的最顶部可见内容(的顶部)的距离的度量，当一个元素的内容没有产生垂直方向的滚动条，那么它的 scrollTop 值为0。</p>
                   <p>所以如果出现scrollTop的值是undefined，请检查最外层的包裹元素是否设置了高度</p>

                    <h3 id="nr-2">2.如何调用第三方icon图标（阿里的icon）</h3>
                     <img src="../assets/img/benzhan/aliicon.png" alt="" srcset="" class="icon_style img_two">
                    
                    <h3 id="nr-3">3.vue a标签锚点跳转不改变路由的方式</h3>
                     <img src="../assets/img/benzhan/aChangeRouter.png" alt="" srcset="" class="icon_style img_three">

                      <h3 id="nr-4">4.本页面的页脚还有问题没有解决</h3>
                      <p>暂时使用.offsetHeight获取到卡片的高度 然后将底部margin-top=卡片高度</p>

                      <h3 id="nr-5">5.A标签在新的页面中打开，而不是就地打开</h3>
                      <div >
                         &lt; a &gt; href="http://www.baidu.com" target="_Blank">百度 &lt;/a &gt;</br></br>
                        _Blank是新窗口</br>
                        _Self是自身</br>
                        _Parent是父窗口</br>
                        _Top是顶层窗口</br>
                        当然也可以是自己定义的一个frame 的名字</br>
                        比如</br>
                        &lt; a &gt;href="http://www.baidu.com" target="frame1">百度 &lt;/a &gt;
                      </div></br>
                      <h3 id="nr-6">6.如何在html显示标签上的尖括号</h3>
                       <img src="../assets/img/benzhan/dayuxiaoyu.jpg" alt=""> 
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
                                    <li><a href="#nr-1" style="color:#425669">1.nav部分鼠标滚动下拉 保持在顶部</a></li>
                                    <li><a href="#nr-2" style="color:#425669">2.如何调用第三方icon图标（阿里的icon）</a></li>
                                    <li><a href="#nr-3" style="color:#425669">3.vue a标签锚点跳转不改变路由的方式</a></li>
                                    <li><a href="#nr-4" style="color:#425669">4.本页面的页脚还有问题没有解决</a></li>
                                    <li><a href="#nr-4" style="color:#425669">5.A标签在新的页面中打开，而不是就地打开</a></li>
                                    <li><a href="#nr-4" style="color:#425669">6.如何在html显示标签上的尖括号</a></li>
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
            margin-left: 100px;
            margin-top: -100px;
            img{width: 100%}
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