import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import Main from './components/Main.vue'
import Demos from './components/Demos.vue'


Vue.config.productionTip = false
Vue.use(VueRouter)
// main routes
const routes = [
	{ 
		path: '/', 
		component: Main
	},
	{ 
		name: "demos",
		path: '/:demos',
		component: Demos
	}
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