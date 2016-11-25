import Vue from 'vue'
import Router from 'vue-router'
import About from '../components/contents/About.vue'
import Data from '../components/contents/Data.vue'

Vue.use(Router)

export const routes = [
  { path: '/data', component: Data },
  {path: '/', component: About},
  {path: '*', redirect: '/'}
]

export const router = new Router({
  mode: 'history',
  routes
})
