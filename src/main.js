import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import Main from './components/Main.vue'
import List from './components/List.vue'
import Post from './components/Post.vue'


Vue.config.productionTip = false
Vue.use(VueRouter)
// main routes
const routes = [
	{ 
		path: '/', 
		component: Main
	},
	{ 
    name: "list",
    path: '/:list',
    component: List
  },
  { 
		name: "post",
		path: '/:section/:post',
		component: Post
	},
]

// set up router
const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if(savedPosition){
          resolve(savedPosition)
        }else{
          resolve({ x: 0, y: 0 })
        }
      }, 500)
    })
  }
})



new Vue({
  router,
  render: h => h(App, {})
}).$mount('#app')