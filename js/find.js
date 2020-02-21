var Color = {
  Green: '#1EE11E',
  Yellow: '#FFBC2B',
  Red: '#E72639',
  Black: '#000000',
  Blue: 'rgba(0, 115, 198, 1)'
}
var ColorFill = {
  Black: 'rgba(0, 0, 0, 0.5)',
  Blue: 'rgba(0, 115, 198, 0.5)',
  Green: 'rgba(30, 225, 30, 0.5)',
  Yellow: 'rgba(255, 188, 43, 0.5)',
  Red: 'rgba(231, 38, 57, 0.5)'
}

var ColorFills = [
  Color.Black,
  Color.Yellow,
  Color.Red,
  Color.Blue,
  Color.Green
]

function getColor(value) {
  if (value < 60) {
    return Color.Red
  } else if (value < 90) {
    return Color.Yellow
  }

  return Color.Green
}
// new Chart(document.getElementById('chartjs-5'), {
//   'type':'polarArea',
//   'data': {
//     'labels': ['Search Word Ranking','Green','Yellow','Grey','Blue'],
//     'datasets': [
//       {
//         'label':'My First Dataset',
//         'data': [11,16,7,3,14],
//         'backgroundColor':['rgb(255, 99, 132)','rgb(75, 192, 192)','rgb(255, 205, 86)','rgb(201, 203, 207)','rgb(54, 162, 235)']
//       }
//     ]
//   }
// });

function solidGauge() {
  am4core.ready(() => {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    var chart = am4core.create('solid-gauge', am4charts.RadarChart);

    // Add data
    chart.data = [{
      'category': 'Search Word - Rankings',
      'value': 60,
      'full': 100
    }, {
      'category': 'Search Word - SoS',
      'value': 67,
      'full': 100
    }, {
      'category': 'Category - SoS',
      'value': 30,
      'full': 100
    }, {
      'category': 'Listing Score',
      'value': 100,
      'full': 100
    }];

    // Make chart not full circle
    chart.startAngle = -90;
    chart.endAngle = 180;
    chart.innerRadius = am4core.percent(20);

    // Set number format
    chart.numberFormatter.numberFormat = '#.#\'%\'';

    // Create axes
    var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'category';
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.grid.template.strokeOpacity = 0;
    categoryAxis.renderer.labels.template.horizontalCenter = 'right';
    categoryAxis.renderer.labels.template.fontWeight = 500;
    categoryAxis.renderer.labels.template.adapter.add('fill', function (fill, target) {
      return (target.dataItem.index >= 0) ? am4core.color(getColor(chart.data[target.dataItem.index].value)) : fill;
    });
    categoryAxis.renderer.minGridDistance = 10;

    var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.grid.template.strokeOpacity = 0;
    valueAxis.min = 0;
    valueAxis.max = 100;
    valueAxis.strictMinMax = true;

    // Create series
    var series1 = chart.series.push(new am4charts.RadarColumnSeries());
    series1.dataFields.valueX = 'full';
    series1.dataFields.categoryY = 'category';
    series1.clustered = false;
    series1.columns.template.fill = new am4core.InterfaceColorSet().getFor('alternativeBackground');
    series1.columns.template.fillOpacity = 0.08;
    series1.columns.template.cornerRadiusTopLeft = 20;
    series1.columns.template.strokeWidth = 0;
    series1.columns.template.radarColumn.cornerRadius = 20;

    var series2 = chart.series.push(new am4charts.RadarColumnSeries());
    series2.dataFields.valueX = 'value';
    series2.dataFields.categoryY = 'category';
    series2.clustered = false;
    series2.columns.template.strokeWidth = 0;
    series2.columns.template.tooltipText = '{category}: [bold]{value}[/]';
    series2.columns.template.radarColumn.cornerRadius = 20;

    series2.columns.template.adapter.add('fill', (fill, target) => {
      return (target.dataItem.index >= 0) ? am4core.color(getColor(chart.data[target.dataItem.index].value)) : fill;
    });

    // Add cursor
    chart.cursor = new am4charts.RadarCursor()
  })
}

function gauge() {
  var chart = c3.generate({
    bindto: '#gauge',
    data: {
      columns: [
        ['Search Word - Rankings', 60],
        ['Search Word - SoS', 67],
        ['Category - SoS ', 30],
        ['Listing Score', 100]
      ],
      type: 'gauge',
      onclick: function (d, i) { console.log('onclick', d, i); },
      onmouseover: function (d, i) { console.log('onmouseover', d, i); },
      onmouseout: function (d, i) { console.log('onmouseout', d, i); }
    },
    gauge: {
    },
    color: {
      // the three color levels for the percentage values.
      pattern: [Color.Red, Color.Yellow, Color.Green],

      threshold: {
        // unit: 'value', // percentage is default
        // max: 200, // 100 is default
        values: [50, 90, 90]
      }
    },
    size: {
      height: 300
    }
  });



}

function polarArea() {
  var config = {
    type: 'polarArea',
    data: {
      labels: ['Search Word - Ranking', 'Search Word - SoS', 'Category - SoS', 'Listing Score'],
      datasets: [
        {
          backgroundColor: [
            ColorFill.Red,
            ColorFill.Yellow,
            ColorFill.Green,
            ColorFill.Blue
          ],
          data: [
            60,
            67,
            30,
            100
          ]
        }
      ]
    },
    options: {
      startAngle: Math.PI * 1.25,
      responsive: true,
      title: {
        display: true,
        text: ''
      },
      tooltips: {
        mode: 'index',
        intersect: false,
      },
      hover: {
        mode: 'nearest',
        intersect: true
      },
      yAxes: [
        {
          display: true,
          ticks: {
            max: 100
          }
        }
      ]
    }
  }

  // get line chart canvas
  var canvas = document.getElementById('polarArea').getContext('2d');
  // draw line chart
  new Chart(canvas, config);
}

function doughnut() {
  var config = {
    type: 'doughnut',
    data: {
      labels: ['Search Word - Ranking', 'Search Word - SoS', 'Category - SoS', 'Listing Score'],
      datasets: [
        {
          backgroundColor: [
            ColorFill.Red
          ],
          data: [
            12
          ]
        },
        {
          backgroundColor: [
            ColorFill.Red
          ],
          data: [
            3
          ]
        },
        {
          backgroundColor: [
            ColorFill.Red
          ],
          data: [
            8
          ]
        },
        {
          backgroundColor: [
            ColorFill.Red
          ],
          data: [
            9
          ]
        }
      ]
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: ''
      },
      tooltips: {
        mode: 'index',
        intersect: false,
      },
      hover: {
        mode: 'nearest',
        intersect: true
      },
      yAxes: [
        {
          display: true,
          ticks: {
            max: 100
          }
        }
      ]
    }
  }

  // get line chart canvas
  var canvas = document.getElementById('doughnut').getContext('2d');
  // draw line chart
  new Chart(canvas, config);
}

function pie() {
  var config = {
    type: 'pie',
    data: {
      labels: ['Search Word - Ranking', 'Search Word - SoS', 'Category - SoS', 'Listing Score'],
      datasets: [
        {
          backgroundColor: [
            ColorFill.Red,
            ColorFill.Yellow,
            ColorFill.Green,
            ColorFill.Black
          ],
          data: [
            12,
            3,
            8,
            9
          ]
        }
      ]
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: ''
      },
      tooltips: {
        mode: 'index',
        intersect: false,
      },
      hover: {
        mode: 'nearest',
        intersect: true
      },
      yAxes: [
        {
          display: true,
          ticks: {
            max: 100
          }
        }
      ]
    }
  }

  // get line chart canvas
  var canvas = document.getElementById('pie').getContext('2d');
  // draw line chart
  new Chart(canvas, config);
}

solidGauge()
gauge()
polarArea()
doughnut()
pie()
