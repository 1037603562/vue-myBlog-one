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
                          
                        <div>
                      // 入口文件
              import Vue from 'vue'</br>
              // 配置vuex的步骤</br>
              // 1. 运行 cnpm i vuex -S</br>
              // 2. 导入包</br>
              import Vuex from 'vuex'</br>
              // 3. 注册vuex到vue中</br>
              Vue.use(Vuex)</br>
              // 4. new Vuex.Store() 实例，得到一个 数据仓储对象</br>
              var store = new Vuex.Store({</br></br></br></br>
                state: {</br>
                  // 大家可以把 state 想象成 组件中的 data ,专门用来存储数据的</br>
                  // 如果在 组件中，想要访问，store 中的数据，只能通过 this.$store.state.*** 来访问</br>
                  count: 0</br>
                },</br>
              </br></br></br>
                mutations: {</br>
                  //mutations相对于组件中的methods,但是他不能使用异步方法（定时器，axios)</br>
                  // 注意： 如果要操作 store 中的 state 值，只能通过 调用 mutations 提供的方法，才能操作对应的数据，不推荐直接操作 state 中的数据，因为 万一导致了数据的紊乱，不能快速定位到错误的原因，因为，每个组件都可能有操作数据的方法；</br>
                  increment(state) {</br>
                    state.count++</br>
                  },</br>
                  // 注意： 如果组件想要调用 mutations 中的方法，只能使用 this.$store.commit('方法名')</br>
                  // 这种 调用 mutations 方法的格式，和 this.$emit('父组件中方法名')</br>
                  subtract(state, obj) {</br>
                    // 注意： mutations 的 函数参数列表中，最多支持两个参数，其中，参数1： 是 state 状态； 参数2： 通过 commit 提交过来的参数；</br>
                    console.log(obj)</br>
                    state.count -= (obj.c + obj.d)</br>
                  }</br>
                },</br></br></br></br>
                getters: {</br>
                  // 注意：这里的 getters， 只负责 对外提供数据，不负责 修改数据，如果想要修改 state 中的数据，请 去找 mutations</br>
                  optCount: function (state) {</br>
                    return '当前最新的count值是：' + state.count</br>
                  }</br>
                  // 经过咱们回顾对比，发现 getters 中的方法， 和组件中的过滤器比较类似，因为 过滤器和 getters 都没有修改原数据， 都是把原数据做了一层包装，提供给了 调用者；</br>
                  // 其次， getters 也和 computed 比较像， 只要 state 中的数据发生变化了，那么，如果 getters 正好也引用了这个数据，那么 就会立即触发 getters 的重新求值；</br>
                }</br>
              })</br></br></br></br>
              //actions专门用来处理异步 实际修改状态值得依然是mutation--即异步的事情写在这里，然后在调用一下mutation</br>
              actions:{</br>
                  jianAsync(context){</br>
                    //放慢一秒之后再去减一</br>
                    context.commit('subtract')</br>
                    // 注意： 如果组件想要调用 actions 中的方法，只能使用 this.$store.dispatch('方法名')</br>
                  }</br>
              }</br></br></br></br></br></br>
              modules:{//该方法见下图</br>
              <img src="/src/assets/111.png" alt="">
              }</br></br></br>

              // 总结：</br>
              // 1. state中的数据，不能直接修改，如果想要修改，必须通过 mutations</br>
              // 2. 如果组件想要直接 从 state 上获取数据： 需要 this.$store.state.***</br>
              // 3. 如果 组件，想要修改数据，必须使用 mutations 提供的方法，需要通过 this.$store.commit('方法的名称'， 唯一的一个参数)</br>
              // 4. 如果 store 中 state 上的数据， 在对外提供的时候，需要做一层包装，那么 ，推荐使用 getters, 如果需要使用 getters ,则用 this.$store.getters.***</br>


              import App from './App.vue'</br>

              const vm = new Vue({</br>
                el: '#app',</br>
                render: c => c(App),</br>
                store // 5. 将 vuex 创建的 store 挂载到 VM 实例上， 只要挂载到了 vm 上，任何组件都能使用 store 来存取数据</br>
              })</br>

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
</style>