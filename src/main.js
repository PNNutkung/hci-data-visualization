import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Home from './components/contents/Home'
import Data from './components/contents/Data'
import About from './components/contents/About'

Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: ContentSection,
      children: [
        {path: '/', component: Home},
        {path: '/data', component: Data},
        {path: '/about', component: About},
        {path: '*', redirect: '/'}
      ]
    }
  ]
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
})
