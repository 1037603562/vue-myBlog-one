<template>
    <div class="mylabel">
        <!-- 头部 -->
        <div class="mytop">
            <myNav></myNav>
        </div>
        <!-- 身体 -->
        <div class="mybody">
            <el-card class="card1" shadow="hover">
                <div class="c_top">
                    <i class="el-icon-link"></i>
                    <p>文章标签</p>
                </div>                
                <div class="c_body">
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
            </el-card>

             <el-card class="card2" shadow="hover">
                 <ul>
                     <li class="li_first"><a href="#" style="color:#039be5;position:absolute;left:350px;top:150px;">nodejs module</a></li>
                     <li style="position:absolute;left:230px;top:80px;"><a href="#">本站相关知识</a></li>
                     <li style="position:absolute;left:460px;top:70px;"><a href="#">js基础知识</a></li>
                     <li style="position:absolute;left:350px;top:330px;"><a href="#">vue相关知识</a></li>
                     <li style="position:absolute;left:710px;top:100px;"><a href="#">css基础知识</a></li>
                     <li style="position:absolute;left:200px;top:270px;"><a href="#">css3基础知识</a></li>
                     <li style="position:absolute;left:660px;top:280px;"><a href="#">jquery相关知识</a></li>
                     <li style="position:absolute;left:420px;top:20px;"><a href="#">感言</a></li>
                 </ul>
            </el-card>

             <!-- <el-card class="card2" shadow="hover">
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
import  fetchJsonp  from 'fetch-jsonp'
    export default {
        data() {
            return {
                targets: '.mylabel'
            }
        },
        created(){
            this.getMsg()
        },
        methods:{
            getMsg(){
                fetch("https://m.maoyan.com/ajax/movieOnInfoList")
                .then(response => response.json() )
                .then(data => console.log(data))
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
    .el-button{
        margin-bottom: 30px!important;
    }
        .li_first{
            a{
                left:70px!important;
            }
        }
        li:nth-child(3){
           a{
               position: absolute;
                left:-380px!important;
           }
        }
         li:nth-child(4){
           a{
               position: absolute;
                left:-270px!important;
           }
        }
          li:nth-child(5){
           a{
               position: absolute;
                left:-520px!important;
                top: -70px;
           }
        }
         li:nth-child(7){
           a{
               position: absolute;
                left:-650px!important;
                top: -70px;
           }
        }
         li:nth-child(8){
           a{
               position: absolute;
                left:-60px!important;
                top: 200px;

           }
        }


	}
	@media (min-width: 541px) and (max-width: 960px){
		.c_top{
            margin-left: 240px!important;
        }
        .li_first{
            a{
                left:170px!important;
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
            width: 80%;
           margin-top: -70px;
           margin-left: 10%;
           border-radius: 10px;
           margin-bottom: 20px;
            .c_top{
                 width: 100%;   
                display: flex;
                align-items: center;
               margin-left: 450px;
               font-size: 20px;
               font-weight: bold;
               i{
                   font-size: 25px;
                   margin-right: 15px;
                 
               }
                }
                .c_body{
                    .c_body_f{
                         margin-bottom: 20px;
                         text-align: center;
                    }
                   
                }
        }
          .card2{
            width: 80%;
            height: 400px;
            text-align: center;
            margin-left: 10%;
            border-radius: 10px;
            margin-bottom: 20px;
            position: relative;
            ul{
                .li_first{
                    font-size: 50px;
                    font-weight: bold;
                    color:#039be5;
                
                }
                li{
                    
                    a:hover{
                        color: #039be5;
                    }
                }
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