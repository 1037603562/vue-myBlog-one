<template>
     <div class="bts themecolor">
         <div class="bts_a">
                 <div style="margin-top:20px;">Copyright © 2020 iJun | Powered by Vue | Theme Matery</div>
                <!-- <div>|  总访问量: 12070 次 |  总访问人数: 2612 人</div> -->
                <div>本站于2020年7月上线试用</div>
         </div>
         
             <div class="lianxi2">
                 <el-tooltip class="item" effect="dark" content="访问我的csdn" placement="top">
                 <a href="#">
                   <i class="iconfont icon-csdn"></i>
                </a>
             </el-tooltip>
              <el-tooltip class="item" effect="dark" content="访问我的qq" placement="top">
                  <a href="#">
                    <i class="iconfont icon-qq"></i>
                   </a>
             </el-tooltip>
               <el-tooltip class="item" effect="dark" content="访问我的微信" placement="top">
                   <a href="#">
                    <i class="iconfont icon-weixin1"></i>
                   </a>
             </el-tooltip>
               <el-tooltip class="item" effect="dark" content="访问我的github" placement="top">
                   <a href="#">
                    <i class="iconfont icon-huaban88"></i>
                   </a>
             </el-tooltip>
             </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
	@media screen and (max-width: 540px){
        .bts{
            .bts_a{
                div{
                    font-size: 5px!important;
                }

            }
            .lianxi2{
                margin-top: 40px;
                a{
                    padding-left: 60px!important;
                    margin-right: -40px;
                }
            }
        }
    }
//底部
.bts{
    height: 120px;
    background-color: pink;
    margin-top: 0px;

    // background-image: linear-gradient(to right, #0342f4e0 0, #c3554afa 100%);
    // opacity: .8;
    position: relative;
    div{
        color: #fff;
        font-size: 15px;
        text-align: center;
       
        padding-top: 10px;
           
    }
    
    .lianxi2{
      float: right;
      position: absolute;
       
      top: 45px;
      right: 180px;
      .el-tooltip{
          padding-left: 40px;
        
      }
    }
     
}
</style>