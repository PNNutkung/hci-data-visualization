<template lang="html">
  <div>
    <span><h1>{{ message }}</h1></span>
  </div>
</template>

<script>
import { Converter } from 'csvtojson'
import fs from 'fs'

export default {
  data () {
    return {
      message: 'Hello data page'
    }
  },
  computed: {
    parseCSVfile: function () {
      Converter.fromFile(fs.readFileSync('./../../rawData/average_income_per_household.csv', 'utf-8'), (err, result) => {
        return result
      })
    }
  }
}
</script>

<style lang="css">
</style>
