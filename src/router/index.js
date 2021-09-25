import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // name: 'index',
    component: () => import('../views/index'),
    children: [
      {
        path: "",
        redirect: "/home"
      }, {
        path: '/me',
        name: 'me',
        component: () => import("../views/Me.vue")
      }, {
        path: '/home',
        name: 'home',
        component: () => import("../views/Home.vue")
      }, {
        path: '/order',
        name: 'order',
        component: () => import("../views/Order.vue")
      }
    ]
  }, {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   const isLogin = localStorage.ele_login ? true : false;
//   if (to.path == '/login') {
//     next()
//   } else {
//     isLogin ? next() : next('/login');
//   }
// })

export default router