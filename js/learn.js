var Color = {
  Green: '#1EE11E',
  Yellow: '#FFBC2B',
  Red: '#E72639',
  Black: '#000000',
  Blue: '#0073C6'
}

function barChart() {
  let myConfig = {
    type: 'mixed',
    // title: {
    //   text: '',
    //   fontSize: 24,
    // },
    legend: {
      draggable: true,
    },
    scaleX: {
      // Set scale label
      label: { text: 'Months' },
      // Convert text on scale indices
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
    },
    scaleY: {
      // Scale label with unicode character
      label: { text: 'Score' }
    },
    plot: {
      // Animation docs here:
      // https://www.zingchart.com/docs/tutorials/styling/animation#effect
      animation: {
        effect: 'ANIMATION_EXPAND_BOTTOM',
        method: 'ANIMATION_LINEAR',
        sequence: 'ANIMATION_NO_SEQUENCE',
        speed: 500,
      }
    },
    series: [
      {
        text: 'Find',
        type: 'bar',
        'background-color': Color.Red,
        alpha: 0.2,
        // plot 1 values, linear data
        values: [
          100,
          100,
          97.86,
          100,
          96.9,
          99.68,
          100,
          100,
          99.88,
          100,
          98.57,
          100
        ]
      },
      {
        // plot 2 values, linear data
        text: 'Learn',
        type: 'bar',
        'background-color': Color.Yellow,
        alpha: 0.2,
        values: [
          25,
          75,
          81.22,
          69.12,
          62.28,
          31.65,
          75.75,
          59.72,
          34.62,
          51.29,
          87.96,
          99.78
        ]
      },
      {
        // plot 2 values, linear data
        text: 'Buy',
        type: 'bar',
        'background-color': Color.Green,
        alpha: 0.2,
        values: [
          95,
          94.35,
          70.29,
          95.74,
          91.54,
          93.09,
          91.07,
          91.99,
          86.9,
          94.52,
          89.65,
          98.21
        ]
      },
      {
        text: 'Overall Score',
        type: 'line',
        'line-color': Color.Blue,
        // alpha: 0.2,
        values: [
          73.33,
          89.78,
          83.12,
          88.29,
          83.57,
          74.81,
          88.94,
          83.90,
          73.80,
          81.94,
          92.06,
          99.33
        ]
      }
    ]
  };

  // Render Method[3]
  zingchart.render({
    id: 'barChart',
    data: myConfig,
  });
}

function mapChart() {
  zingchart.loadModules('maps, maps-usa', function (e) {
    zingchart.render({
      id: 'mapChart',
      data: {
        shapes: [
          {
            type: 'zingchart.maps',
            options: {
              name: 'usa',
              style: {
                items: {

                  //Northeast:
                  CT: {
                    group: 1,
                    backgroundColor: '#FFCDD2',
                    hoverState: {
                      backgroundColor: '#EF9A9A'
                    }
                  },
                  ME: {
                    group: 1,
                    backgroundColor: '#FFCDD2',
                    hoverState: {
                      backgroundColor: '#EF9A9A'
                    }
                  },
                  MA: {
                    group: 1,
                    backgroundColor: '#FFCDD2',
                    hoverState: {
                      backgroundColor: '#EF9A9A'
                    }
                  },
                  NH: {
                    group: 1,
                    backgroundColor: '#FFCDD2',
                    hoverState: {
                      backgroundColor: '#EF9A9A'
                    }
                  },
                  RI: {
                    group: 1,
                    backgroundColor: '#FFCDD2',
                    hoverState: {
                      backgroundColor: '#EF9A9A'
                    }
                  },
                  VT: {
                    group: 1,
                    backgroundColor: '#FFCDD2',
                    hoverState: {
                      backgroundColor: '#EF9A9A'
                    }
                  },
                  DE: {
                    group: 1,
                    backgroundColor: '#FFCDD2',
                    hoverState: {
                      backgroundColor: '#EF9A9A'
                    }
                  },
                  NJ: {
                    group: 1,
                    backgroundColor: '#FFCDD2',
                    hoverState: {
                      backgroundColor: '#EF9A9A'
                    }
                  },
                  NY: {
                    group: 1,
                    backgroundColor: '#FFCDD2',
                    hoverState: {
                      backgroundColor: '#EF9A9A'
                    }
                  },
                  PA: {
                    group: 1,
                    backgroundColor: '#FFCDD2',
                    hoverState: {
                      backgroundColor: '#EF9A9A'
                    }
                  },

                  //Midwest:
                  IL: {
                    group: 2,
                    backgroundColor: '#FFE0B2',
                    hoverState: {
                      backgroundColor: '#FFB74D'
                    }
                  },
                  IN: {
                    group: 2,
                    backgroundColor: '#FFE0B2',
                    hoverState: {
                      backgroundColor: '#FFB74D'
                    }
                  },
                  MI: {
                    group: 2,
                    backgroundColor: '#FFE0B2',
                    hoverState: {
                      backgroundColor: '#FFB74D'
                    }
                  },
                  OH: {
                    group: 2,
                    backgroundColor: '#FFE0B2',
                    hoverState: {
                      backgroundColor: '#FFB74D'
                    }
                  },
                  WI: {
                    group: 2,
                    backgroundColor: '#FFE0B2',
                    hoverState: {
                      backgroundColor: '#FFB74D'
                    }
                  },
                  IA: {
                    group: 2,
                    backgroundColor: '#FFE0B2',
                    hoverState: {
                      backgroundColor: '#FFB74D'
                    }
                  },
                  KS: {
                    group: 2,
                    backgroundColor: '#FFE0B2',
                    hoverState: {
                      backgroundColor: '#FFB74D'
                    }
                  },
                  MN: {
                    group: 2,
                    backgroundColor: '#FFE0B2',
                    hoverState: {
                      backgroundColor: '#FFB74D'
                    }
                  },
                  MO: {
                    group: 2,
                    backgroundColor: '#FFE0B2',
                    hoverState: {
                      backgroundColor: '#FFB74D'
                    }
                  },
                  NE: {
                    group: 2,
                    backgroundColor: '#FFE0B2',
                    hoverState: {
                      backgroundColor: '#FFB74D'
                    }
                  },
                  ND: {
                    group: 2,
                    backgroundColor: '#FFE0B2',
                    hoverState: {
                      backgroundColor: '#FFB74D'
                    }
                  },
                  SD: {
                    group: 2,
                    backgroundColor: '#FFE0B2',
                    hoverState: {
                      backgroundColor: '#FFB74D'
                    }
                  },

                  //South:
                  FL: {
                    group: 3,
                    backgroundColor: '#C8E6C9',
                    hoverState: {
                      backgroundColor: '#81C784'
                    }
                  },
                  GA: {
                    group: 3,
                    backgroundColor: '#C8E6C9',
                    hoverState: {
                      backgroundColor: '#81C784'
                    }
                  },
                  MD: {
                    group: 3,
                    backgroundColor: '#C8E6C9',
                    hoverState: {
                      backgroundColor: '#81C784'
                    }
                  },
                  NC: {
                    group: 3,
                    backgroundColor: '#C8E6C9',
                    hoverState: {
                      backgroundColor: '#81C784'
                    }
                  },
                  SC: {
                    group: 3,
                    backgroundColor: '#C8E6C9',
                    hoverState: {
                      backgroundColor: '#81C784'
                    }
                  },
                  VA: {
                    group: 3,
                    backgroundColor: '#C8E6C9',
                    hoverState: {
                      backgroundColor: '#81C784'
                    }
                  },
                  DC: {
                    group: 3,
                    backgroundColor: '#C8E6C9',
                    hoverState: {
                      backgroundColor: '#81C784'
                    }
                  },
                  WV: {
                    group: 3,
                    backgroundColor: '#C8E6C9',
                    hoverState: {
                      backgroundColor: '#81C784'
                    }
                  },
                  AL: {
                    group: 3,
                    backgroundColor: '#C8E6C9',
                    hoverState: {
                      backgroundColor: '#81C784'
                    }
                  },
                  KY: {
                    group: 3,
                    backgroundColor: '#C8E6C9',
                    hoverState: {
                      backgroundColor: '#81C784'
                    }
                  },
                  MS: {
                    group: 3,
                    backgroundColor: '#C8E6C9',
                    hoverState: {
                      backgroundColor: '#81C784'
                    }
                  },
                  TN: {
                    group: 3,
                    backgroundColor: '#C8E6C9',
                    hoverState: {
                      backgroundColor: '#81C784'
                    }
                  },
                  AR: {
                    group: 3,
                    backgroundColor: '#C8E6C9',
                    hoverState: {
                      backgroundColor: '#81C784'
                    }
                  },
                  LA: {
                    group: 3,
                    backgroundColor: '#C8E6C9',
                    hoverState: {
                      backgroundColor: '#81C784'
                    }
                  },
                  OK: {
                    group: 3,
                    backgroundColor: '#C8E6C9',
                    hoverState: {
                      backgroundColor: '#81C784'
                    }
                  },
                  TX: {
                    group: 3,
                    backgroundColor: '#C8E6C9',
                    hoverState: {
                      backgroundColor: '#81C784'
                    }
                  },

                  //West:
                  AZ: {
                    group: 4,
                    backgroundColor: '#BBDEFB',
                    hoverState: {
                      backgroundColor: '#64B5F6'
                    }
                  },
                  CO: {
                    group: 4,
                    backgroundColor: '#BBDEFB',
                    hoverState: {
                      backgroundColor: '#64B5F6'
                    }
                  },
                  ID: {
                    group: 4,
                    backgroundColor: '#BBDEFB',
                    hoverState: {
                      backgroundColor: '#64B5F6'
                    }
                  },
                  MT: {
                    group: 4,
                    backgroundColor: '#BBDEFB',
                    hoverState: {
                      backgroundColor: '#64B5F6'
                    }
                  },
                  NV: {
                    group: 4,
                    backgroundColor: '#BBDEFB',
                    hoverState: {
                      backgroundColor: '#64B5F6'
                    }
                  },
                  NM: {
                    group: 4,
                    backgroundColor: '#BBDEFB',
                    hoverState: {
                      backgroundColor: '#64B5F6'
                    }
                  },
                  UT: {
                    group: 4,
                    backgroundColor: '#BBDEFB',
                    hoverState: {
                      backgroundColor: '#64B5F6'
                    }
                  },
                  WY: {
                    group: 4,
                    backgroundColor: '#BBDEFB',
                    hoverState: {
                      backgroundColor: '#64B5F6'
                    }
                  },
                  AK: {
                    group: 4,
                    backgroundColor: '#BBDEFB',
                    hoverState: {
                      backgroundColor: '#64B5F6'
                    }
                  },
                  CA: {
                    group: 4,
                    backgroundColor: '#BBDEFB',
                    hoverState: {
                      backgroundColor: '#64B5F6'
                    }
                  },
                  HI: {
                    group: 4,
                    backgroundColor: '#BBDEFB',
                    hoverState: {
                      backgroundColor: '#64B5F6'
                    }
                  },
                  OR: {
                    group: 4,
                    backgroundColor: '#BBDEFB',
                    hoverState: {
                      backgroundColor: '#64B5F6'
                    }
                  },
                  WA: {
                    group: 4,
                    backgroundColor: '#BBDEFB',
                    hoverState: {
                      backgroundColor: '#64B5F6'
                    }
                  }
                },
                tooltip: {
                  alpha: 0.5,
                  backgroundColor: 'white',
                  borderColor: 'white',
                  borderRadius: 3,
                  fontColor: 'black',
                  fontFamily: 'Georgia',
                  fontSize: 12,
                  textAlpha: 1
                }
              }
            }
          }
        ]
      },
      height: 400,
      width: '100%'
    });
  });
}

function rankFlow() {
  var myConfig = {
    "type": "rankflow",
    "plotarea": {
      "margin": 20
    },
    "scale-x": {
      "labels": ["ON-TIME", "BAGGAGE", "PASSENGERS"],
      "values": ["ON-TIME", "BAGGAGE", "PASSENGERS"]
    },
    "series": [
      {
        "text": "Air West",
        "ranks": [3, 4, 1],
        "rank": 3
      },
      {
        "text": "Braniff",
        "ranks": [1, 1, 5],
        "rank": 1
      },
      {
        "text": "Capital",
        "ranks": [5, 2, 4],
        "rank": 4
      },
      {
        "text": "Eastern",
        "ranks": [2, 3, 2],
        "rank": 2
      },
      {
        "text": "Galaxy",
        "ranks": [4, 5, 3],
        "rank": 5
      }
    ]
  };

  zingchart.render({
    id: 'rankFlow',
    data: myConfig,
    height: "100%",
    width: "100%"
  });
}

barChart();
mapChart();
rankFlow();