<template>
    <div class="mylabel">
        <!-- 头部 -->
        <div class="mytop">
            <myNav></myNav>
        </div>
        <!-- 身体 -->
        <div class="mybody">
            <h3>留 言 板</h3>
            <el-card class="card1" shadow="hover">
              <div class="ly">
                  <i class="iconfont icon-liuyanban"></i>
                  <div>留言板</div>
              </div>
            </el-card>

             <el-card class="card2" shadow="hover">
                <h3></h3>
                <div class="pinlun">
                    <el-input v-model="user.name" placeholder="昵称" size="small"></el-input>
                    <el-input v-model="user.email" placeholder="邮箱" size="small"></el-input>
                    <el-input v-model="user.ip" placeholder="网址" size="small"></el-input>
                    <el-input
                        type="textarea"
                        :rows="6"
                        placeholder="请输入内容"
                        v-model="user.content"
                        class="content">
                    </el-input>
                    <el-button @click="addContent">评论</el-button></br>
                    <p style="color:#ccc;font-size:15px;float:left;margin-left:40px;">由于没有后台 所以此处的评论都保存在本地的localStorage当中，也就是说本留言板板块实际上并没有交互功能</p>
                    <div class="show">
                        <ul>
                            <li v-for="item in user" :key="item.ip">
                                <div class="c_top" >
                                    <i class="el-icon-s-custom"></i>
                                    <div>
                                        <span>{{item.name}}</span>
                                        <p>{{item.time | dateFormat}}</p>
                                    </div></br> </br> 
                                   <div class="ct">{{item.content}}</div>
                                   <div class="hf">回复</div>
                                </div>
                            </li>
                             </ul>
                    </div>
                </div>
            </el-card>

            <!--  <el-card class="card2" shadow="hover">
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
                targets: '.mylabel',
                user:[]
                    
                     //[
                    // {
                    //      name:'张三',
                    //     email:'123@qq.com',
                    //        ip:'baidu1',
                    //  content:'锄禾日党务',
                    // },
                    //  {
                    //      name:'李四',
                    //     email:'123@qq.com',
                    //        ip:'baidu2',
                    //  content:'旱地和下入',
                    // },
                    //  {
                    //      name:'王五',
                    //     email:'123@qq.com',
                    //        ip:'baidu3',
                    //  content:'谁知盘中餐',
                    // }
                // ]
            }
        },
        created () {
                this.refesMsg()
               
        },
        methods: {
            addContent() {
                
                
                //1.先判断localStorage里面是否存在改数据
                var str = JSON.parse(localStorage.getItem('userMsg'))
                console.log(str)
                if(str === null){
                     //里面没数据
                    //则需要加
                    var userMsg = []
                    console.log(JSON.stringify(userMsg))
                    localStorage.setItem('userMsg',JSON.stringify(userMsg))
                }
                
               var times = new Date();
                      //里面有数据
                    var userMsgson = {
                                    name:this.user.name,
                                    email:this.user.email,
                                    ip:this.user.ip,
                                    content:this.user.content,
                                    time:times
                                }
                      if(userMsgson.name ===undefined || 
                        userMsgson.email ===undefined || 
                        userMsgson.ip ===undefined || 
                        userMsgson.content ===undefined) return
                      
                      
                    //获取localStorage里面的数据
                    var userMsg = JSON.parse(localStorage.getItem('userMsg'))
                    
                    userMsg.push(userMsgson)
                    console.log(userMsg)
                    //将数据保存到获取localStorage里面的数据
                    this.user=userMsg
                    localStorage.setItem('userMsg',JSON.stringify(userMsg))
               
            },

            refesMsg(){
                //先判断localStorage中有没有数据
                  var str3 = JSON.parse(localStorage.getItem('userMsg'))
                  if(str3 === null){//如果localStorage没有数据则 添加一个userMsg在里面
                  var userMsg = []
                      this.user =localStorage.setItem('userMsg',JSON.stringify(userMsg))
                  }
                  //fou否则就是有数据 则直接获取过来
                  this.user =JSON.parse(localStorage.getItem('userMsg'))
            }
        },
        filters: {
            dateFormat: function(datetime) {
                 var d = new Date(datetime)
               var year=d.getFullYear();
               var month=(d.getMonth()+1) >9 ?(d.getMonth()+1) : '0'+(d.getMonth()+1);
               var day=d.getDate() >9?d.getDate() : '0'+d.getDate();
               var hour= d.getHours() >9?d.getHours() : '0'+d.getHours();
               var min=d.getMinutes() >9?d.getMinutes() : '0'+d.getMinutes();
               var sec=d.getSeconds() >9?d.getSeconds() : '0'+d.getSeconds();
               var time=year+'-'+month+'-'+day+' '+hour+':'+min+':'+sec
                return time;
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

      .el-input{
        width: 29%!important;
      }
     .ct{
            //  margin-left: -179px!important;
            //  margin-top: 70px!important;
               margin-left: -28px!important;    
     }
       .pinlun{
            .el-button{
                        position: absolute;
                        top: 147px!important;
                        left: 175px!important;
            }
        }
	}

	@media (min-width: 541px) and (max-width: 960px){
        .pinlun{
            .el-button{
                    position: absolute;
                    top: 225px!important;
                    left: 480px!important;
            }
        }
	  .ct{
          margin-top: 20px!important;
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
        position: relative;
        h3{
            width: 215px;
            height: 55px;
            position: absolute;
            top: -150px;
            left: 591px;
            font-size: 50px;
            color: white;
        }
        .card1{opacity: 0.7;
            width: 80%;
            text-align: center;
           margin-top: -50px;
           margin-left: 10%;
           border-radius: 10px;
           margin-bottom: 20px;
           height: 90px;
            .ly{
               padding-left: 45%;
               color: #34495e;
               margin-top: 10px;
                i{
                    float: left;
                    font-size: 30px;
                }
                div{
                    float: left;
                    font-size: 25px;
                    line-height: 30px;
                    margin-left: 10px;
                }
            }
        }
          .card2{ opacity: 0.7;
            width: 80%;
            text-align: center;
           margin-left: 10%;
           border-radius: 10px;
           margin-bottom: 20px;
            .pinlun{
                position: relative;
                .el-input{
                    width: 30%;
                    margin-right: 10px;
                }
                .content{
                    width: 92%;
                    margin-top: 20px;
                    margin-left: -6px;
                
                }
                .el-button{
                    position: absolute;
                    top: 207px;
                    left: 925px;
                }
                .show{
                    margin-top: 50px;
                    margin-left: 37px;
                    
                    ul{
                        li{
                        border-bottom: 1px solid #f5f5f5;
                           margin-bottom: 30px;
                            height: 100px;
                            .c_top{
                                height: 100%;
                               i{
                                    float: left;
                                    font-size: 35px;
                                    color: #ccc;
                                    border: 2px solid #ccc;
                                    padding: 2px;
                                    border-radius: 50%;
                                    margin-top: 4px;
                               }
                               div{
                                    float: left;
                                    font-size: 15px;
                                    line-height: 35px;
                                    margin-left: 45px;
                                    
                                       p{
                                        font-size: 7px;
                                        margin: 0;
                                        margin-top: -13px;
                                        color: #ccc;
                                        margin-left: -35px;
                                     }
                                     span{
                                             margin-left: -121px;
                                             color: #26bfa1;
                                     }
                                     label{
                                         padding-left: 10px;
                                     }
                                     
                               }
                               .ct{
                                   margin-left: -118px;
                                   margin-top: 10px;
                                   
                               }
                               .hf{
                                   float: right;
                                   color: red;
                                   font-size: 13px;
                               }
                            }
                           
                        }
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