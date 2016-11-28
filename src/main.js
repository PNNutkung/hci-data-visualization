import Vue from 'vue'
import App from './App'
import { router } from './router'
import * as firebase from 'firebase'

const config = JSON.parse('./config.json')
/* eslint-disable no-new */
firebase.initializeApp(config)
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
})
