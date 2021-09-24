import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import register from '@/views/register.vue'
import login from '@/views/login.vue'
import mailList from '@/views/mailList.vue'
import notes from '@/views/notes.vue'
import addCon from '@/views/addCon.vue'
import own from '@/views/own.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home/register'
  },
  {
    path: '/home',
    component: Home,
    children: [
      { path: 'register', component: register },
      { path: 'login', component: login },
    ]
  },
  {
    path: '/contacts',
    component: mailList,
    children: [
      {
        path: 'index',
        component: notes,
        // 这一个路由我要做守卫
        meta: { logined: true }
      },
      { path: 'add', component: addCon, meta: { logined: true } },
      { path: 'own', component: own },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
