<template lang="html">
  <div id="show-data">
    <md-card md-with-hover>
      <md-card-header>
        <span><h2>{{ avgIncomeByRegionTitle }}</h2></span>
      </md-card-header>
      <md-table v-if="regionValidation">
        <md-table-header>
          <md-table-row>
            <md-table-head>
              Region \ Year
            </md-table-head>
            <md-table-head v-for="year in years">
              {{ year }}
            </md-table-head>
          </md-table-row>
        </md-table-header>
        <md-table-body>
          <md-table-row v-for="region in avgIncomeByRegion">
            <md-table-cell>
              {{ region.region }}
            </md-table-cell>
            <md-table-cell v-for="income in region.data">
              {{ income }}
            </md-table-cell>
          </md-table-row>
        </md-table-body>
      </table>
    </md-card>

    <div id="household">
      <md-card md-with-hover>
        <md-card-header>
          <span><h2>{{ avgIncomePerHouseholdTitle }}</h2></span>
        </md-card-header>
        <md-table v-if="regionValidation">
          <md-table-header>
            <md-table-row>
              <md-table-head>
                Region \ Year
              </md-table-head>
              <md-table-head v-for="year in years">
                {{ year }}
              </md-table-head>
            </md-table-row>
          </md-table-header>
          <md-table-body>
            <md-table-row v-for="household in avgIncomePerHousehold">
              <md-table-cell>
                {{ household.region }}
              </md-table-cell>
              <md-table-cell v-for="income in household.data">
                {{ income }}
              </md-table-cell>
            </md-table-row>
          </md-table-body>
        </table>
      </md-card>
    </div>
  </div>
</template>

<script>
import firebaseDatabase from './../../config/firebaseConfig'

export default {
  name: 'showData',
  data () {
    return {
      avgIncomeByRegionTitle: 'Average income by region (in Baht)',
      avgIncomePerHouseholdTitle: 'Average income per household (in Baht)',
      years: [
        1998,
        2000,
        2002,
        2004,
        2006,
        2007,
        2009,
        2011,
        2013,
        2015
      ]
    }
  },
  firebase: {
    avgIncomeByRegion: firebaseDatabase.ref('/average_income_by_region/'),
    avgIncomePerHousehold: firebaseDatabase.ref('/average_income_per_household/')
  },
  computed: {
    regionValidation: function () {
      return this.avgIncomeByRegion !== []
    }
  }
}
</script>

<style lang="css">
#show-data {
  padding-left: 30px;
  padding-right: 30px;
}
#household {
  padding-top: 30px;
  padding-bottom: 30px;
}
</style>
