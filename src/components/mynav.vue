<template>
    <div class="navsBoss" :class="this.num >100 ? 'navAfterStyle' : ''">
       <div class="navs" ref="navsRef" >
           <!-- 抽屉 -->
            <chouti class="cd"></chouti>

           <div class="nv-left">
               <a href="/">
                    <img src="../assets/img/123.png" alt="">
                    <span>iJun's Blog</span>
               </a>
            
              
           </div>
           <div class="nv-right">
               <ul>
                 <router-link to='/'>
                        <li>
                            <a href="#">
                                    <i class="el-icon-s-home"></i>
                                <span>首页</span>
                            </a>
                        </li> 
                </router-link>
                 <router-link to="/mylabel">
                    <li>
                       <a href="#">
                                <i class="el-icon-s-order"></i>
                           <span>标签</span>
                       </a>
                   </li>
                </router-link>
                <router-link to="/reacthome">
                     <li>
                       <a href="#">
                           <i class="el-icon-s-shop"></i>
                           <span>前端框架</span>
                       </a>
                   </li>
                </router-link>
             <router-link to="/archives">
                    <li>
                       <a href="#">
                                <i class="el-icon-s-claim"></i>
                                <span>归档</span>
                       </a>
                   </li>
            </router-link>
                    <li>
                       <a href="#">
                           <i class="el-icon-postcard"></i>
                           <!-- <span>关于</span> -->
                            
                        <el-dropdown>
                        <span class="el-dropdown-link">
                            关于<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                           <router-link to="/aboutme">
                                 <el-dropdown-item icon="el-icon-plus">关于我</el-dropdown-item>
                           </router-link>
                            <router-link to="/another">
                                <el-dropdown-item icon="el-icon-circle-plus">Another</el-dropdown-item>
                            </router-link>
                        </el-dropdown-menu>
                        </el-dropdown>
            
                       </a>
                   </li>
                    <li>
                      <router-link to="/comment">
                             <a href="#">
                           <i class="el-icon-chat-dot-round"></i>
                          <span>留言板</span>
                       </a>
                      </router-link>
                   </li>
                   <li>
                       <router-link to="/friends">
                             <a href="#">
                           <i class="el-icon-search search"></i>
                           <span>友情链接</span>
                       </a>
                       </router-link>
                      
                   </li>
               </ul>
           </div>
       </div>
    </div>
</template>

<script>
import chouti from '../components/chouti.vue'
    export default {
         data() {
            return {
                num:null,
               
            }
        },
        methods: {
            getScroll(e) {//获取鼠标滚动后的数值
                // var a=this.$refs.navsRef.scrollTop
                // console.log(this.$refs.navsRef.scrollTop)
            //    console.log(e.target.scrollTop)
                this.num =e.target.scrollTop
            }
        },
        mounted () {
            window.addEventListener('scroll', this.getScroll, true);
        },
        components: {
            chouti,
        },
    }
</script>

<style lang="scss" scoped>

	@media screen and (max-width: 540px){
       
         .cd{
                display: block;
                color: #d3d1d5;
                margin: 20px 0 0 50px;
                
            }
             .nv-right{
                 display: none;
             }
              .nv-left{
                 margin-left: 200px;
                 margin-top: 10px;
                 a{
                         width: 300px!important;
                         margin-left: -120px!important;
                 }
             }
             .navAfterStyle{//nav头部鼠标滚动后样式
            opacity:1;
            background-image: linear-gradient(to right,#bf30ac 0,#0f9d58 100%);
        }
	}
	@media (min-width: 541px) and (max-width: 960px){
		.navs{
           .cd{
                display: block;
                
                color: #d3d1d5;
                margin: 20px 0 0 50px;
            }
             .nv-right{
                 display: none;
             }
             .nv-left{
                 margin-left: 420px;
                 margin-top: 20px;
             }
        }
       
        .navAfterStyle{//nav头部鼠标滚动后样式
            opacity:1;
            background-image: linear-gradient(to right,#bf30ac 0,#0f9d58 100%);
        } 
	}
	@media screen and (min-width: 961px){
		.navs{
            margin: 0 40px;
            .cd{
                display: none;
            }
            .nv-right{
                width: 700px;
                ul{
                    li{
                        width: 95px;
                    }
                }
            }
        }
        .navAfterStyle{//nav头部鼠标滚动后样式
    background-image: linear-gradient(to right,#bf30ac 0,#0f9d58 100%);
    opacity: .8;
}
	}






// .navAfterStyle{//nav头部鼠标滚动后样式
//     background-image: linear-gradient(to right,#bf30ac 0,#0f9d58 100%);
//     opacity: .8;
// }
.navsBoss{
    width: 100%;
    -min-width: 1400px;
    height: 50px;
    position: fixed;
    z-index: 999;
}
.navs{
    -margin: 0 100px;
    height: 64px;
    --background-color: pink;
    display: flex;
    justify-content: space-between;
    
    
}
.nv-left{
    width: 200px;
   --background-color: green;
     display: flex;
    justify-content: space-between;
    
    a{
       
        text-decoration: none;
       img{
           width: 40px;;
           height: 40px;
           -background-color: #ccc;
          vertical-align: middle;

            // background-repeat:round;   
       }
       span{
           font-size: 25px;
               vertical-align: middle;
           font-weight: bold;
           color: #cdcace;
           margin-left: 10px;
           
           }
    }
}
.nv-right{
    -width: 650px;
    -background-color: darkcyan;
    -margin-top: 15px;
    -padding:10px 0;
    -margin-right: 120px;
    ul{ 
        li{cursor: pointer;
            float: left;
            -width: 100px;
            height:50px;
            font-size: 16px;
            text-align: center;
            line-height: 50px;
            .el-dropdown{
                color: #cdcace;
            }
           a{
               span{
                   margin-left: 5px;
               }
           }
        }
        li:hover{
            background-color:#232925;
            opacity: .9;
            
        }
    }
}
</style>