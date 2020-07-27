<template>
    <div class="archives">
        <!-- 头部 -->
        <div class="mytop">
            <myNav></myNav>
        </div>
        <!-- 身体 -->
        <div class="mybody block">
          <el-timeline class="mytimeline">
                <el-timeline-item  placement="top" 
                v-for="(activity, index) in activities"
                :key="index"
                :icon="activity.icon"
                :type="activity.type"
                :color="activity.color"
                :size="activity.size"
                :timestamp="activity.timestamp"
                >
                 <el-card :body-style="{ padding: '0px' }" 
                 :class="index % 2 !=0 ? 'timecard_left' : 'timecard_right'" id="mycards">
                    <img :src="activity.img" class="image">
                     <router-link :to="activity.path+''"><h4 class="mycards_h"> {{activity.title}}</h4></router-link>
                    <div style="padding: 14px;">
                         <h4> {{activity.content}}</h4>
                    <p> {{activity.timestamp}}</p>
                    </div>
                </el-card>
                <!-- <el-card :class="index % 2 !=0 ? 'timecard_left' : 'timecard_right'">
                    <h4> {{activity.content}}</h4>
                    <p> {{activity.timestamp}}</p>
                </el-card> -->
                </el-timeline-item>
                <!-- <el-timeline-item timestamp="2018/4/3" placement="top">
                <el-card  class="timecard_right">
                    <h4>更新 Github 模板</h4>
                    <p>王小虎 提交于 2018/4/3 20:46</p>
                </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2018/4/2" placement="top">
                <el-card class="timecard_left">
                    <h4>更新 Github 模板</h4>
                    <p>王小虎 提交于 2018/4/2 20:46</p>
                </el-card>
                </el-timeline-item> -->
  </el-timeline>

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
                targets: '.archives',
                 activities: [
                     {
          title:'本站相关知识',
          content: '1.nav部分鼠标滚动下拉 保持在顶部',
          timestamp: '2020-07-06',
           icon: 'el-icon-more',
          color: '#0bbd87',
          path:'/benzhan',
          img:require('../assets/img/2.jpg')
        },
          {
          title:'js基础知识',
          content: '1.nav部分鼠标滚动下拉 保持在顶部',
          timestamp: '2020-07-07',
           icon: 'el-icon-more',
          color: '#0bbd87',
          path:'/benzhan',
          img:require('../assets/img/3.jpg')
        },
         {
          title:'jquery基础知识',
          content: '1.nav部分鼠标滚动下拉 保持在顶部',
          timestamp: '2020-07-08',
           icon: 'el-icon-more',
          color: '#0bbd87',
          path:'/benzhan',
          img:require('../assets/img/4.jpg')
        },
         {
          title:'vue基础知识',
          content: '1.nav部分鼠标滚动下拉 保持在顶部',
          timestamp: '2020-07-09',
           icon: 'el-icon-more',
          color: '#0bbd87',
          path:'/benzhan',
          img:require('../assets/img/5.jpg')
        },
         {
          title:'html相关知识',
          content: '1.nav部分鼠标滚动下拉 保持在顶部',
          timestamp: '2020-07-10',
           icon: 'el-icon-more',
          color: '#0bbd87',
          path:'/benzhan',
          img:require('../assets/img/6.jpg')
        },
        ]
                 
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
.archives{
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
.archives{
    
background-image:url(../assets/img/b/bgc1.jpg);
   background-size: cover;
    background-color: #dcb;
    width: 100%;
     height: 100%;
    .mytop{
        width: 100%;
        height: 60px;
        background: url(../assets/img/bgc3.jpg) no-repeat top center;
		background-size:cover;
      
       
    }
    .mybody{

      padding: 10px;
    //   margin: auto 45%;
     
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

/*时间线样式调整*/
.mytimeline{
margin-left: 50%;
}
.timecard_left{
    left: -347px;
    position: relative;
    -padding-left: 28px;
    top: -3px;
    width: 300px;
    height: 300px;
}
.timecard_right{
    left: 0px;
    position: relative;
    padding-left: 28px;
    top: -3px;
    width: 300px;
    height: 300px;
}
/*********卡片样式测试**/
 .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    height: 200px;
    background-size: cover;
    display: block;
  }
.timecard_right[data-v-770810be]{
    padding-left: 0;
}
  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }

  #mycards{
      position: relative;
      .mycards_h{
          position: absolute;
          top: 59px;
          left: 80px;
          color: #fff;
          font-size: 25px;
      }
  }
</style>