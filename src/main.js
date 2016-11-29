import Vue from 'vue'
import App from './App'
import { router } from './router'
import VueFire from 'vuefire'
import VueMaterial from 'vue-material'

Vue.use(VueFire)
Vue.use(VueMaterial)

Vue.material.theme.register('default', {
  primary: 'cyan',
  accent: 'white'
})
/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
})
