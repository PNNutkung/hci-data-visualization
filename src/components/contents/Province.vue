<template lang="html">
  <div id="province-visualize">
    <span><h1>{{ message }}</h1></span>
    <div id="bangkok"></div>
    <div id="chiangmai"></div>
    <div id="surat"></div>
    <div id="khonkaen"></div>
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
      const bkkKeys = Object.keys(res.data[0].data)
      const bkkValues = Object.values(res.data[0].data)
      c3.generate({
        bindto: '#bangkok',
        data: {
          x: 'x',
          columns: [
            ['x'].concat(bkkKeys),
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
            show: true
          },
          y: {
            label: {
              text: res.data[0].region,
              position: 'outer-middle'
            }
          }
        }
      })
      const chmKeys = Object.keys(res.data[26].data)
      const chmValues = Object.values(res.data[26].data)
      c3.generate({
        bindto: '#chiangmai',
        data: {
          x: 'x',
          columns: [
            ['x'].concat(chmKeys),
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
            show: true
          },
          y: {
            label: {
              text: res.data[26].region,
              position: 'outer-middle'
            }
          }
        }
      })
      const suKeys = Object.keys(res.data[66].data)
      const suValues = Object.values(res.data[66].data)
      c3.generate({
        bindto: '#surat',
        data: {
          x: 'x',
          columns: [
            ['x'].concat(suKeys),
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
            show: true
          },
          y: {
            label: {
              text: res.data[66].region,
              position: 'outer-middle'
            }
          }
        }
      })
      const kkKeys = Object.keys(res.data[52].data)
      const kkValues = Object.values(res.data[52].data)
      c3.generate({
        bindto: '#khonkaen',
        data: {
          x: 'x',
          columns: [
            ['x'].concat(kkKeys),
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
            show: true
          },
          y: {
            label: {
              text: res.data[52].region,
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
            ['x'].concat(kkKeys),
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
            show: true
          },
          y: {
            label: {
              text: 'Compare 4 provinces',
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
