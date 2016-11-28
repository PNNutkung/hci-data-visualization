<template lang="html">
  <div>
    <span><h1>{{ message }}</h1></span>
    <span>{{ avgIncomByRegion }}</span>
  </div>
</template>

<script>
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp(require('./../../config/config.json'))
const db = firebaseApp.database()

export default {
  data () {
    return {
      message: 'Hello data page'
    }
  },
  firebase: {
    avgIncomByRegion: db.ref('/average_income_by_region/')
  }
}
</script>

<style lang="css">
</style>
