import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/contents/Home'
import About from '../components/contents/About'
import Data from '../components/contents/Data'

Vue.use(Router)

export const routes = [
  { path: '/', component: Home },
  { path: '/data', component: Data },
  { path: '/about', component: About },
  { path: '*', redirect: '/' }
]

export const router = new Router({
  mode: 'history',
  routes
})
