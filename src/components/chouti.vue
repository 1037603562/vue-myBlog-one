<template>
  <div class="chouti">
        <i class="el-icon-s-unfold" @click="drawer = true" type="primary" style="margin-left: 16px;" ></i>
            <el-drawer
            class="dw"
            direction="ltr"
            title="我是标题"
            :visible.sync="drawer"
            :with-header="false">
                <div class="dr_top">
                    <img src="../assets/img/123.png" alt="">
                    <h3>iJun's Blog</h3>
                    <p>专注于Web,分享生活,分享知识</p>
                </div>
                <div class="dr_body">
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
                                <li>
                                <a href="#">
                                    <i class="el-icon-s-shop"></i>
                                    <span>分类</span>
                                </a>
                            </li>
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
                                    <!-- <i class="el-icon-postcard"></i>
                                
                                        
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
                                    </el-dropdown> -->
                        <el-menu>
                            <el-submenu index="1">
                                <template slot="title">
                                <i class="el-icon-postcard"></i>
                                <span>关于</span>
                                </template>
                                <router-link to="/aboutme">
                                         <el-menu-item index="1-1" style="padding-left: 100px;">
                                         <i class="el-icon-plus"></i>
                                        关于我
                                    </el-menu-item>
                                </router-link>
                                <router-link to="/another">   
                                    <el-menu-item index="1-2"  style="padding-left: 100px;">
                                        <i class="el-icon-circle-plus"></i>
                                        Another
                                    </el-menu-item>
                                </router-link>
                            </el-submenu>
                        </el-menu>
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
        </el-drawer>
  </div>
</template>
<script>
export default {
  data(){
      return{
            drawer: false,
      }
  }
}
</script>
<style lang="scss" scoped>
@media screen and (max-width: 540px){
    // .el-drawer{
    //     width: 40%!important;
    // }
     .dw{
        width: 180%!important;
    }
}
.chouti{
    i{
        font-size: 25px;
    }
    .dr_top{
        height: 180px;
        background-image: linear-gradient(to right,#d3d1d5 0,#0f9d58 100%);
         opacity: 1;
        padding-left: 30px;
        padding-top: 10px;
        color: white;
        img{
            width: 100px;
            height: 100px;
        }
        h3{
                font-size: 20px;
                width: 150px;
                height: 10px;
                
        }
        p{
            font-size: 10px;
            margin-top: 25px;
        }
    }


    .dr_body{
        ul{
            // li:hover{
            //     background-color: #ccc;;
            // }
            li{
                font-size: 15px;
                padding-left: 20px;
                line-height: 60px;
                i{
                    font-size: 20px;
                    color:#2d3d50;
                }
                span{
                    margin-left: 70px;
                     color:#2d3d50;
                }
            }
        }

        .el-menu{
            margin-left: -43px;
            .el-submenu{
                span{
                    margin-left: 64px;
                    font-size: 15px;
                }
            }
        }
        .el-menu-item{
            
        }
    }
}
</style>


