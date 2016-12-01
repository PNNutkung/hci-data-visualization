<template lang="html">
  <div id="visualize">
    <span><h1>{{ message }}</h1></span>
    <div id="whole-kingdom"></div>
    <div id="greater-bangkok"></div>
    <div id="central-region"></div>
    <div id="north-region"></div>
    <div id="northeast-region"></div>
    <div id="south-region"></div>
    <div id="compare-pie"></div>
    <div id="compare-bar"></div>
  </div>
</template>

<script>
import c3 from 'c3'

export default {
  data () {
    return {
      message: 'Average income by region.'
    }
  },
  mounted () {
    this.axios.get('https://hci-data-visualization.firebaseio.com/average_income_by_region.json').then((res) => {
      const wkKeys = Object.keys(res.data[0].data)
      const wkValues = Object.values(res.data[0].data)
      c3.generate({
        bindto: '#whole-kingdom',
        data: {
          x: 'x',
          columns: [
            ['x'].concat(wkKeys),
            ['Income'].concat(wkValues)
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
      const gbKeys = Object.keys(res.data[1].data)
      const gbValues = Object.values(res.data[1].data)
      c3.generate({
        bindto: '#greater-bangkok',
        data: {
          x: 'x',
          columns: [
            ['x'].concat(gbKeys),
            ['Income'].concat(gbValues)
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
              text: res.data[1].region,
              position: 'outer-middle'
            }
          }
        }
      })
      const crKeys = Object.keys(res.data[2].data)
      const crValues = Object.values(res.data[2].data)
      c3.generate({
        bindto: '#central-region',
        data: {
          x: 'x',
          columns: [
            ['x'].concat(crKeys),
            ['Income'].concat(crValues)
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
              text: res.data[2].region,
              position: 'outer-middle'
            }
          }
        }
      })
      const nrKeys = Object.keys(res.data[3].data)
      const nrValues = Object.values(res.data[3].data)
      c3.generate({
        bindto: '#north-region',
        data: {
          x: 'x',
          columns: [
            ['x'].concat(nrKeys),
            ['Income'].concat(nrValues)
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
              text: res.data[3].region,
              position: 'outer-middle'
            }
          }
        }
      })
      const nerKeys = Object.keys(res.data[4].data)
      const nerValues = Object.values(res.data[4].data)
      c3.generate({
        bindto: '#northeast-region',
        data: {
          x: 'x',
          columns: [
            ['x'].concat(nerKeys),
            ['Income'].concat(nerValues)
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
              text: res.data[4].region,
              position: 'outer-middle'
            }
          }
        }
      })
      const srKeys = Object.keys(res.data[5].data)
      const srValues = Object.values(res.data[5].data)
      c3.generate({
        bindto: '#south-region',
        data: {
          x: 'x',
          columns: [
            ['x'].concat(srKeys),
            ['Income'].concat(srValues)
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
              text: res.data[5].region,
              position: 'outer-middle'
            }
          }
        }
      })
      c3.generate({
        bindto: '#compare-pie',
        data: {
          columns: [
            ['North'].concat(nrValues),
            ['Central'].concat(crValues),
            ['Northeast'].concat(nerValues),
            ['Greater Bangkok'].concat(gbValues),
            ['South'].concat(srValues)
          ],
          type: 'pie'
        }
      })
      c3.generate({
        bindto: '#compare-bar',
        data: {
          x: 'x',
          columns: [
            ['x'].concat(srKeys),
            ['North'].concat(nrValues),
            ['Central'].concat(crValues),
            ['Northeast'].concat(nerValues),
            ['Greater Bangkok'].concat(gbValues),
            ['South'].concat(srValues)
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
              text: 'Compare 5 Regions',
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
#visualize {
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 30px;
}
.axis {
  font: 10px sans-serif;
}
.axis path,
.axis line {
  fill: none;
  stroke: #000;
  shape-rendering: crispEdges;
}
</style>
