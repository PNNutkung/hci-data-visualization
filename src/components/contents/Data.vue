<template lang="html">
  <div>
    <span><h1>{{ message }}</h1></span>
    <span>{{ avgIncomByRegion }}</span>
  </div>
</template>

<script>
import firebaseDatabase from './../../config/firebaseConfig'

export default {
  data () {
    return {
      message: 'Hello data page'
    }
  },
  firebase: {
    avgIncomByRegion: firebaseDatabase.ref('/average_income_by_region/'),
    avgIncomePerHousehold: firebaseDatabase.ref('/average_income_per_household/')
  }
}
</script>

<style lang="css">
</style>
