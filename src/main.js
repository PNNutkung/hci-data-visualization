import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

Vue.use(VueResource, VueRouter)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
