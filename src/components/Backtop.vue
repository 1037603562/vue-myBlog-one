<template>
    <el-backtop :target="this.tags">
                    <div class="back-ball">
                                <i class="el-icon-top"></i>
                                </div>
      </el-backtop>
</template>

<script>
    export default {
        mounted () {
            //  console.log(this.tags);;
        },
        props: {
            tags: {
                type: String,
                default:'' 
            },
        },
    }
</script>

<style lang="scss" scoped>
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
</style>