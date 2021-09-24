import userImg from '@/assets/img/contact.jpg'
// 用户初始化
const USER_INIT = 'USER_INIT'
// 用户的添加
const USER_ADD = 'USER_ADD'
// 用户修改
const USER_CHANGE = 'USER_CHANGE'
// 用户删除
const USER_DELETE = 'USER_DELETE'
// 登录用户修改
const OWN_CHANGE = 'OWN_CHANGE'
var contactId = 0
export default {
  state: {
    items: [], //待会展示通讯录的列表
    own: {} // 用户信息的
  },
  mutations: {
    [USER_INIT] (state, user) {
      state.items = user.items
      state.own = user.own
    },
    [USER_ADD] (state, user) {
      user.id = contactId++
      user.imgSrc = userImg
      state.items.push(user)
      localStorage.items = JSON.stringify(state.items)
    },
    [USER_CHANGE] (state, user) {
      for (var key in state.items) {
        if (state.items[key].id == user.id) {
          state.items[key].name = user.name
          state.items[key].tel = user.tel
        }
      }
    },
    [USER_DELETE] (state, userId) {
      state.items = state.items.filter(item => item.id !== userId)

      // state.items = state.items.filter(function(item){
      //   return item.id !== userId
      // })
    },
    [OWN_CHANGE] (state, user) {
      state.own = user
      sessionStorage.setItem('user', JSON.stringify(user))
      localStorage.setItem(sessionStorage.userId, JSON.stringify(user))
    }



  },
  actions: {
    userInit ({ commit }) {
      if (sessionStorage.login && sessionStorage.login == 1) {
        // 这里面的数据 我是直接写死的 
        // axios去掉接口实现的 mockjs去模拟
        var items = [
          { name: 'kobe', tel: 1234555656, status: "亲人" },
          { name: 'nic', tel: 1234555656, status: "朋友" },
          { name: 'james', tel: 1234555656, status: "亲人" },
          { name: 'wind', tel: 1234555656, status: "朋友" },
          { name: 'lily', tel: 1234555656, status: "同学" },
          { name: 'paul', tel: 1234555656, status: "亲人" },
          { name: 'tom', tel: 1234555656, status: "同学" },
          { name: 'tom', tel: 1234555656, status: "同学" },
          { name: 'tom', tel: 1234555656, status: "同学" },
          { name: 'tom', tel: 1234555656, status: "同学" },
          { name: 'chris', tel: 1234555656, status: "亲人" },
          { name: 'tom', tel: 1234555656, status: "同学" },
          { name: 'tom', tel: 1234555656, status: "同学" },
          { name: 'tom', tel: 1234555656, status: "同学" },
          { name: 'kevin', tel: 1234555656, status: "亲人" },
        ];

        items = items.filter((item) => {
          item.id = contactId++
          item.imgSrc = userImg
          return item
        })


        if (!localStorage.items) {
          localStorage.items = JSON.stringify(items)
        }

        var own = JSON.parse(sessionStorage.user)
        // console.log(own);
        commit(USER_INIT, {
          items: JSON.parse(localStorage.items),
          own
        })

      }
    },
    userAdd ({ commit }, user) {
      commit(USER_ADD, user)
    },
    userChange ({ commit }, user) {
      commit(USER_CHANGE, user)
    },
    userDelete ({ commit }, userId) {
      commit(USER_DELETE, userId)
    },
    ownChange ({ commit }, user) {
      commit(OWN_CHANGE, user)
    }

  }
}



// [
//   {id:1},
//   {id:2}
// ]