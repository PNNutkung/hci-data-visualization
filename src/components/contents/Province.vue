<template lang="html">
  <div id="province-visualize">
    <span><h1>{{ message }}</h1></span>
    <span><h2>Bangkok</h2></span>
    <div id="bangkok"></div>
    <span><h2>Chiangmai</h2></span>
    <div id="chiangmai"></div>
    <span><h2>Surat Thani</h2></span>
    <div id="surat"></div>
    <span><h2>Khon kaen</h2></span>
    <div id="khonkaen"></div>
    <span><h2>Compare 4 Provinces</h2></span>
    <div id="compare-4"></div>
  </div>
</template>

<script>
import c3 from 'c3'

export default {
  data () {
    return {
      message: 'Average income per household.'
    }
  },
  mounted () {
    this.axios.get('https://hci-data-visualization.firebaseio.com/average_income_per_household.json').then((res) => {
      const yAxisTitle = 'Income (Baht)'
      const key = Object.keys(res.data[0].data)
      const bkkValues = Object.values(res.data[0].data)
      c3.generate({
        bindto: '#bangkok',
        data: {
          x: 'x',
          columns: [
            ['x'].concat(key),
            ['Income'].concat(bkkValues)
          ],
          type: 'bar'
        },
        bar: {
          width: {
            ratio: 0.25
          }
        },
        axis: {
          x: {
            type: 'category',
            label: {
              text: 'Year'
            }
          },
          y: {
            label: {
              text: yAxisTitle,
              position: 'outer-middle'
            }
          }
        }
      })
      const chmValues = Object.values(res.data[26].data)
      c3.generate({
        bindto: '#chiangmai',
        data: {
          x: 'x',
          columns: [
            ['x'].concat(key),
            ['Income'].concat(chmValues)
          ],
          type: 'bar'
        },
        bar: {
          width: {
            ratio: 0.25
          }
        },
        axis: {
          x: {
            type: 'category',
            label: {
              text: 'Year'
            }
          },
          y: {
            label: {
              text: yAxisTitle,
              position: 'outer-middle'
            }
          }
        }
      })
      const suValues = Object.values(res.data[66].data)
      c3.generate({
        bindto: '#surat',
        data: {
          x: 'x',
          columns: [
            ['x'].concat(key),
            ['Income'].concat(suValues)
          ],
          type: 'bar'
        },
        bar: {
          width: {
            ratio: 0.25
          }
        },
        axis: {
          x: {
            type: 'category',
            label: {
              text: 'Year'
            }
          },
          y: {
            label: {
              text: yAxisTitle,
              position: 'outer-middle'
            }
          }
        }
      })
      const kkValues = Object.values(res.data[52].data)
      c3.generate({
        bindto: '#khonkaen',
        data: {
          x: 'x',
          columns: [
            ['x'].concat(key),
            ['Income'].concat(kkValues)
          ],
          type: 'bar'
        },
        bar: {
          width: {
            ratio: 0.25
          }
        },
        axis: {
          x: {
            type: 'category',
            label: {
              text: 'Year'
            }
          },
          y: {
            label: {
              text: yAxisTitle,
              position: 'outer-middle'
            }
          }
        }
      })
      c3.generate({
        bindto: '#compare-4',
        data: {
          x: 'x',
          columns: [
            ['x'].concat(key),
            ['Bangkok'].concat(bkkValues),
            ['Chiang Mai'].concat(chmValues),
            ['Surat Thani'].concat(suValues),
            ['Khon Kaen'].concat(kkValues)
          ],
          type: 'bar'
        },
        bar: {
          width: {
            ratio: 0.25
          }
        },
        axis: {
          x: {
            type: 'category',
            label: {
              text: 'Year'
            }
          },
          y: {
            label: {
              text: yAxisTitle,
              position: 'outer-middle'
            }
          }
        }
      })
    })
  }
}
</script>

<style lang="css">
#province-visualize {
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 30px;
}
</style>
