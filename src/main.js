import Vue from 'vue'
import App from './App'
import { router } from './router'
import VueFire from 'vuefire'

Vue.use(VueFire)
/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
})
