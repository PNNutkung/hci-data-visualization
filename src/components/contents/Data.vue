<template lang="html">
  <div id="show-data">
    <div class="mdl-cell mdl-cell--8-col">
      <span><h1>{{ message }}</h1></span>
      <table class="mdl-data-table mdl-js-data-table mdl-data-table mdl-shadow--2dp">
        <thead>
          <tr>
            <th class="mdl-data-table__cell--non-numeric">
              Region \ Year
            </th>
            <th v-for="(value, key) in avgIncomByRegion[0].data" class="mdl-data-table__cell--non-numeric">
              {{ key }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="region in avgIncomByRegion">
            <td>
              {{ region.region }}
            </td>
            <td v-for="year in region.data">
              {{ year }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import firebaseDatabase from './../../config/firebaseConfig'

export default {
  name: 'showData',
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
