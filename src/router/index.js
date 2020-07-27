import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [
    {
      path:'/',
      component: () => import('../views/Home.vue')
    },
    {
      path:'/benzhan',
      component: () => import('../components/BenZhan.vue')
    },
    {
      path:'/mylabel',
      component: () => import('../components/Mylabel.vue')
    },
    {
      path:'/archives',
      component: () => import('../components/Archives.vue')
    },
    {
      path:'/aboutme',
      component: () => import('../components/Aboutme.vue')
    },
    {
      path:'/mygithub',
      component: () => import('../components/Mygithub.vue')
    },
    {
      path:'/another',
      component: () => import('../components/Another.vue')
    },
    {
      path:'/comment',
      component: () => import('../components/Comment.vue')
    },
    {
      path:'/jsbase',
      component: () => import('../components/Jsbase.vue')
    },
    {
      path:'/friends',
      component: () => import('../components/Friends.vue')
    },
 
]

const router = new VueRouter({
  // mode:"history",
  routes
})

export default router
