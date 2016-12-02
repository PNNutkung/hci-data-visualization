<template lang="html">
  <div id="visualize">
    <span><h1>{{ message }}</h1></span>
    <span><h2>Whole Country</h2></span>
    <div id="whole-kingdom"></div>
    <span><h2>Greater Bangkok</h2></span>
    <div id="greater-bangkok"></div>
    <span><h2>Central Region</h2></span>
    <div id="central-region"></div>
    <span><h2>North Region</h2></span>
    <div id="north-region"></div>
    <span><h2>Northeast Region</h2></span>
    <div id="northeast-region"></div>
    <span><h2>South Region</h2></span>
    <div id="south-region"></div>
    <span><h2>Compare 5 regions</h2></span>
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
      const yAxisTitle = 'Income (Baht)'
      const key = Object.keys(res.data[0].data)
      const wkValues = Object.values(res.data[0].data)
      c3.generate({
        bindto: '#whole-kingdom',
        data: {
          x: 'x',
          columns: [
            ['x'].concat(key),
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
      const gbValues = Object.values(res.data[1].data)
      c3.generate({
        bindto: '#greater-bangkok',
        data: {
          x: 'x',
          columns: [
            ['x'].concat(key),
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
      const crValues = Object.values(res.data[2].data)
      c3.generate({
        bindto: '#central-region',
        data: {
          x: 'x',
          columns: [
            ['x'].concat(key),
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
      const nrValues = Object.values(res.data[3].data)
      c3.generate({
        bindto: '#north-region',
        data: {
          x: 'x',
          columns: [
            ['x'].concat(key),
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
      const nerValues = Object.values(res.data[4].data)
      c3.generate({
        bindto: '#northeast-region',
        data: {
          x: 'x',
          columns: [
            ['x'].concat(key),
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
      const srValues = Object.values(res.data[5].data)
      c3.generate({
        bindto: '#south-region',
        data: {
          x: 'x',
          columns: [
            ['x'].concat(key),
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
            ['x'].concat(key),
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
