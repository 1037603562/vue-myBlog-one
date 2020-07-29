<template>
    <div class="mylabel">
        <!-- 头部 -->
        <div class="mytop">
            <myNav></myNav>
        </div>
        <!-- 身体 -->
        <div class="mybody">
            <el-card class="card1" shadow="hover">
                <div v-for="o in 10" :key="o" class="text item">
                    {{'列表内容 ' + o }}
                </div>
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
import myNav from '../../components/mynav.vue'
import myBottom from '../../components/myBottom.vue'
import backtop from '../../components/Backtop.vue'

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
        background: url(../../assets/img/bgc/darksky.jpg) no-repeat top center;
		background-size: cover;
      
       
    }
    .mybody{

        .card1{
            width: 80%;
            text-align: center;
           margin-top: -70px;
           margin-left: 10%;
           border-radius: 10px;
           margin-bottom: 20px;
            
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