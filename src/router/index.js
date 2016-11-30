import Vue from 'vue'
import Router from 'vue-router'
import Region from '../components/contents/Region'
import Province from '../components/contents/Province'
import About from '../components/contents/About'
import Data from '../components/contents/Data'

Vue.use(Router)

export const routes = [
  { path: '/', component: Region },
  { path: '/province', component: Province },
  { path: '/data', component: Data },
  { path: '/about', component: About },
  { path: '*', redirect: '/' }
]

export const router = new Router({
  mode: 'history',
  routes
})
