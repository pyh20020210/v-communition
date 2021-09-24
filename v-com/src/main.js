import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
// router.beforeEach((to, from, next) => {
//   if (to.meta.logined) {
//     if (localStorage.login == 1) {
//       next()
//     } else {
//       next({
//         path: '/home/login'
//       })
//     }
//   } else {
//     next()
//   }
// })
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
