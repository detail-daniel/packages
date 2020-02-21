var Color = {
  Green: '#1EE11E',
  Yellow: '#FFBC2B',
  Red: '#E72639',
  Black: '#000000',
  Blue: 'rgba(0, 115, 198, 1)'
}
var ColorFill = {
  Green: 'rgba(30, 225, 30, 0.2)',
  Yellow: 'rgba(255, 188, 43, .2)',
  Red: 'rgba(231, 38, 57, 0.2)'
}

var ColorFills = [
  'rgba(0, 0, 0, 0.5)',
  'rgba(0, 115, 198, 0.5)',
  'rgba(30, 225, 30, 0.5)',
  'rgba(255, 188, 43, 0.5)',
  'rgba(231, 38, 57, 0.5)'
]

function buyerGraph() {
  var config = {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'Find',
          backgroundColor: ColorFill.Red,
          borderColor: Color.Red,
          borderWidth: 1,
          data: [
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
          label: 'Learn',
          backgroundColor: ColorFill.Yellow,
          borderColor: Color.Yellow,
          borderWidth: 1,
          data: [
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
          label: 'Buy',
          backgroundColor: ColorFill.Green,
          borderColor: Color.Green,
          borderWidth: 1,
          data: [
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
          label: 'Overall Score',
          backgroundColor: Color.Blue,
          borderColor: Color.Blue,
          data: [
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
          ],
          fill: false,
          type: 'line',
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
      scales: {
        xAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Month'
          }
        }],
        yAxes: [{
          display: true,
          ticks: {
            min: 0
          },
          scaleLabel: {
            display: true,
            labelString: 'Score'
          }
        }]
      }
    }
  }

  // get line chart canvas
  var canvas = document.getElementById('buyers').getContext('2d');
  // draw line chart
  new Chart(canvas, config);
}

function lineGraph() {
  var config = {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'Find',
          fill: false,
          backgroundColor: Color.Red,
          borderColor: ColorFill.Red,
          data: [
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
          label: 'Learn',
          fill: false,
          backgroundColor: Color.Yellow,
          borderColor: ColorFill.Yellow,
          data: [
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
          label: 'Buy',
          fill: false,
          backgroundColor: Color.Green,
          borderColor: ColorFill.Green,
          data: [
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
          label: 'Overall Score',
          fill: false,
          backgroundColor: Color.Blue,
          borderColor: Color.Blue,
          data: [
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
      scales: {
        xAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Month'
          }
        }],
        yAxes: [{
          display: true,
          // ticks: {
          //   min: 0
          // },
          scaleLabel: {
            display: true,
            labelString: 'Score'
          }
        }]
      }
    }
  }

  // get line chart canvas
  var canvas = document.getElementById('line').getContext('2d');
  // draw line chart
  new Chart(canvas, config);
}

function worldMap() {
  am4core.ready(function () {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    var chart = am4core.create('world-map', am4maps.MapChart);

    try {
      chart.geodata = am4geodata_worldHigh;
    }
    catch (e) {
      chart.raiseCriticalError(new Error('Map geodata could not be loaded. Please download the latest <a href=\'https://www.amcharts.com/download/download-v4/\'>amcharts geodata</a> and extract its contents into the same directory as your amCharts files.'));
    }

    chart.projection = new am4maps.projections.Mercator();

    // zoomout on background click
    chart.chartContainer.background.events.on('hit', function () { zoomOut() });

    var colorSet = new am4core.ColorSet();
    var morphedPolygon;

    // map polygon series (countries)
    var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.useGeodata = true;
    // specify which countries to include
    polygonSeries.include = [
      'BE',
      'CA',
      'CN',
      'FR',
      'DE',
      'ME',
      'NL',
      'DK',
      'NO',
      'SE',
      'RU',
      'UK',
      'US'
      // 'IT',
      // 'CH',
      // 'SE',
      // 'FR',
      // 'DE',
      // 'GB',
      // 'ES',
      // 'PT',
      // 'IE',
      // 'NL',
      // 'LU',
      // 'BE',
      // 'AT',
      // 'DK'
    ]

    // country area look and behavior
    var polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.strokeOpacity = 1;
    polygonTemplate.stroke = am4core.color('#ffffff');
    polygonTemplate.fillOpacity = 1;
    polygonTemplate.tooltipText = '{name}';

    // desaturate filter for countries
    var desaturateFilter = new am4core.DesaturateFilter();
    desaturateFilter.saturation = 0.25;
    polygonTemplate.filters.push(desaturateFilter);

    // take a color from color set
    polygonTemplate.adapter.add('fill', (fill, target) => {

      if (ColorFills[target.dataItem.index]) {
        return am4core.color(ColorFills[target.dataItem.index])
      }

      return colorSet.getIndex(target.dataItem.index + 1);
    })

    // set fillOpacity to 1 when hovered
    // var hoverState = polygonTemplate.states.create('hover');
    // hoverState.properties.fillOpacity = 1;

    // what to do when country is clicked
    polygonTemplate.events.on('hit', function (event) {
      event.target.zIndex = 1000000;
      selectPolygon(event.target);
    })

    // Pie chart
    var pieChart = chart.seriesContainer.createChild(am4charts.PieChart);
    // Set width/heigh of a pie chart for easier positioning only
    pieChart.width = 100;
    pieChart.height = 100;
    pieChart.hidden = true; // can't use visible = false!

    // because defauls are 50, and it's not good with small countries
    pieChart.chartContainer.minHeight = 1;
    pieChart.chartContainer.minWidth = 1;

    var pieSeries = pieChart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = 'value';
    pieSeries.dataFields.category = 'category';
    pieSeries.data = [
      { value: 20, category: 'Find' },
      { value: 100, category: 'Learn' },
      { value: 10, category: 'Buy' }
    ];

    // Pie chart
    // var radarChart = chart.seriesContainer.createChild(am4charts.RadarChart);

    // var categoryAxis = radarChart.xAxes.push(new am4charts.CategoryAxis());
    // categoryAxis.renderer.grid.template.location = 0;
    // categoryAxis.dataFields.category = "country";
    // categoryAxis.renderer.minGridDistance = 60;
    // categoryAxis.renderer.inversed = true;
    // categoryAxis.renderer.labels.template.location = 0.5;
    // categoryAxis.renderer.grid.template.strokeOpacity = 0.08;

    // var valueAxis = radarChart.yAxes.push(new am4charts.ValueAxis());
    // valueAxis.min = 0;
    // valueAxis.extraMax = 0.1;
    // valueAxis.renderer.grid.template.strokeOpacity = 0.08;

    // radarChart.seriesContainer.zIndex = -10;

    // // Set width/heigh of a pie chart for easier positioning only
    // radarChart.width = 100;
    // radarChart.height = 100;
    // radarChart.hidden = true; // can't use visible = false!

    // // because defauls are 50, and it's not good with small countries
    // radarChart.chartContainer.minHeight = 1;
    // radarChart.chartContainer.minWidth = 1;

    // var radarSeries = chart.series.push(new am4charts.RadarColumnSeries());
    // radarSeries.dataFields.categoryX = "category";
    // radarSeries.dataFields.valueY = "value";
    // radarSeries.tooltipText = "{valueY.value}"
    // radarSeries.columns.template.strokeOpacity = 0;
    // radarSeries.columns.template.radarColumn.cornerRadius = 5;
    // radarSeries.columns.template.radarColumn.innerCornerRadius = 0;
    // radarSeries.data = [
    //   { value: 20, category: 'Find' },
    //   { value: 100, category: 'Learn' },
    //   { value: 10, category: 'Buy' }
    // ];

    var dropShadowFilter = new am4core.DropShadowFilter();
    dropShadowFilter.blur = 4;
    pieSeries.filters.push(dropShadowFilter);
    // radarSeries.filters.pus(dropShadowFilter);

    var sliceTemplate = pieSeries.slices.template;
    sliceTemplate.fillOpacity = 1;
    sliceTemplate.strokeOpacity = 0;

    var activeState = sliceTemplate.states.getKey('active');
    activeState.properties.shiftRadius = 0; // no need to pull on click, as country circle under the pie won't make it good

    var sliceHoverState = sliceTemplate.states.getKey('hover');
    sliceHoverState.properties.shiftRadius = 0; // no need to pull on click, as country circle under the pie won't make it good

    // we don't need default pie chart animation, so change defaults
    var hiddenState = pieSeries.hiddenState;
    hiddenState.properties.startAngle = pieSeries.startAngle;
    hiddenState.properties.endAngle = pieSeries.endAngle;
    hiddenState.properties.opacity = 0;
    hiddenState.properties.visible = false;

    // series labels
    var labelTemplate = pieSeries.labels.template;
    labelTemplate.nonScaling = true;
    labelTemplate.fill = am4core.color('#FFFFFF');
    labelTemplate.fontSize = 10;
    labelTemplate.background = new am4core.RoundedRectangle();
    labelTemplate.background.fillOpacity = 0.9;
    labelTemplate.padding(4, 9, 4, 9);
    labelTemplate.background.fill = am4core.color('#7678a0');

    // we need pie series to hide faster to avoid strange pause after country is clicked
    pieSeries.hiddenState.transitionDuration = 200;

    // country label
    var countryLabel = chart.chartContainer.createChild(am4core.Label);
    countryLabel.text = 'Select a country';
    countryLabel.fill = am4core.color('#7678a0');
    countryLabel.fontSize = 40;

    countryLabel.hiddenState.properties.dy = 1000;
    countryLabel.defaultState.properties.dy = 0;
    countryLabel.valign = 'middle';
    countryLabel.align = 'right';
    countryLabel.paddingRight = 50;
    countryLabel.hide(0);
    countryLabel.show();

    // select polygon
    function selectPolygon(polygon) {
      if (morphedPolygon != polygon) {
        var animation = pieSeries.hide();
        if (animation) {
          animation.events.on('animationended', function () {
            morphToCircle(polygon);
          })
        }
        else {
          morphToCircle(polygon);
        }
      }
    }

    // fade out all countries except selected
    function fadeOut(exceptPolygon) {
      for (var i = 0; i < polygonSeries.mapPolygons.length; i++) {
        var polygon = polygonSeries.mapPolygons.getIndex(i);
        if (polygon != exceptPolygon) {
          polygon.defaultState.properties.fillOpacity = 0.5;
          polygon.animate([{ property: 'fillOpacity', to: 0.5 }, { property: 'strokeOpacity', to: 1 }], polygon.polygon.morpher.morphDuration);
        }
      }
    }

    function zoomOut() {
      if (morphedPolygon) {
        pieSeries.hide();
        morphBack();
        fadeOut();
        countryLabel.hide();
        morphedPolygon = undefined;
      }
    }

    function morphBack() {
      if (morphedPolygon) {
        morphedPolygon.polygon.morpher.morphBack();
        var dsf = morphedPolygon.filters.getIndex(0);
        dsf.animate({ property: 'saturation', to: 0.25 }, morphedPolygon.polygon.morpher.morphDuration);
      }
    }

    function morphToCircle(polygon) {


      var animationDuration = polygon.polygon.morpher.morphDuration;
      // if there is a country already morphed to circle, morph it back
      morphBack();
      // morph polygon to circle
      polygon.toFront();
      polygon.polygon.morpher.morphToSingle = true;
      var morphAnimation = polygon.polygon.morpher.morphToCircle();

      polygon.strokeOpacity = 0; // hide stroke for lines not to cross countries

      polygon.defaultState.properties.fillOpacity = 1;
      polygon.animate({ property: 'fillOpacity', to: 1 }, animationDuration);

      // animate desaturate filter
      var filter = polygon.filters.getIndex(0);
      filter.animate({ property: 'saturation', to: 1 }, animationDuration);

      // save currently morphed polygon
      morphedPolygon = polygon;

      // fade out all other
      fadeOut(polygon);

      // hide country label
      countryLabel.hide();

      if (morphAnimation) {
        morphAnimation.events.on('animationended', function () {
          zoomToCountry(polygon);
        })
      } else {
        zoomToCountry(polygon);
      }
    }

    function zoomToCountry(polygon) {
      var zoomAnimation = chart.zoomToMapObject(polygon, 1.5, true);
      if (zoomAnimation) {
        zoomAnimation.events.on('animationended', function () {
          showPieChart(polygon);
          // showRadarChart(polygon);
        })
      }
      else {
        showPieChart(polygon);
        // showRadarChart(polygon);
      }
    }


    function showPieChart(polygon) {
      polygon.polygon.measure();
      var radius = polygon.polygon.measuredWidth / 2 * polygon.globalScale / chart.seriesContainer.scale;
      pieChart.width = radius * 2;
      pieChart.height = radius * 2;
      pieChart.radius = radius;

      var centerPoint = am4core.utils.spritePointToSvg(polygon.polygon.centerPoint, polygon.polygon);
      centerPoint = am4core.utils.svgPointToSprite(centerPoint, chart.seriesContainer);

      pieChart.x = centerPoint.x - radius;
      pieChart.y = centerPoint.y - radius;

      var fill = polygon.fill;
      var desaturated = fill.saturate(0.3);

      for (var i = 0; i < pieSeries.dataItems.length; i++) {
        var dataItem = pieSeries.dataItems.getIndex(i);
        dataItem.value = Math.round(Math.random() * 100);
        dataItem.slice.fill = am4core.color(am4core.colors.interpolate(
          fill.rgb,
          am4core.color('#ffffff').rgb,
          0.2 * i
        ));

        dataItem.label.background.fill = desaturated;
        dataItem.tick.stroke = fill;
      }

      pieSeries.show();
      pieChart.show();

      countryLabel.text = '{name}';
      countryLabel.dataItem = polygon.dataItem;
      countryLabel.fill = desaturated;
      countryLabel.show();
    }

    function showRadarChart(polygon) {
      polygon.polygon.measure();
      var radius = polygon.polygon.measuredWidth / 2 * polygon.globalScale / chart.seriesContainer.scale;
      radarChart.width = radius * 2;
      radarChart.height = radius * 2;
      radarChart.radius = radius;

      var centerPoint = am4core.utils.spritePointToSvg(polygon.polygon.centerPoint, polygon.polygon);
      centerPoint = am4core.utils.svgPointToSprite(centerPoint, chart.seriesContainer);

      radarChart.x = centerPoint.x - radius;
      radarChart.y = centerPoint.y - radius;

      var fill = polygon.fill;
      var desaturated = fill.saturate(0.3);

      for (var i = 0; i < radarSeries.dataItems.length; i++) {
        var dataItem = radarSeries.dataItems.getIndex(i);
        dataItem.value = Math.round(Math.random() * 100);
        dataItem.slice.fill = am4core.color(am4core.colors.interpolate(
          fill.rgb,
          am4core.color('#ffffff').rgb,
          0.2 * i
        ));

        dataItem.label.background.fill = desaturated;
        dataItem.tick.stroke = fill;
      }

      radarSeries.show();
      radarChart.show();

      countryLabel.text = '{name}';
      countryLabel.dataItem = polygon.dataItem;
      countryLabel.fill = desaturated;
      countryLabel.show();
    }

  });
}

function fishBone() {
  am4core.ready(function () {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    var chart = am4core.create("fish-bone", am4plugins_timeline.CurveChart);
    chart.curveContainer.padding(0, 100, 0, 120);
    chart.maskBullets = false;

    var colorSet = new am4core.ColorSet();

    chart.data = [{
      "category": "",
      "year": "2019-01-01",
      "size": 73.33,
      "text": "Lorem ipsum dolor"
    }, {
      "category": "",
      "year": "2019-02-01",
      "size": 89.78,
      "text": "Sit amet"
    }, {
      "category": "",
      "year": "2019-03-01",
      "size": 83.12,
      "text": "Consectetur adipiscing elit"
    }, {
      "category": "",
      "year": "2019-04-01",
      "size": 88.29,
      "text": "Sed do eiusmod"
    }, {
      "category": "",
      "year": "2019-05-01",
      "size": 83.57,
      "text": "Tempor incididunt"
    }, {
      "category": "",
      "year": "2019-06-01",
      "size": 74.81,
      "text": "Ut labore et dolore"
    }, {
      "category": "",
      "year": "2019-07-01",
      "size": 88.94,
      "text": "Magna aliqua"
    }, {
      "category": "",
      "year": "2019-08-01",
      "size": 83.90,
      "text": "Ut enim ad minim veniam"
    }, {
      "category": "",
      "year": "2019-09-01",
      "size": 73.80,
      "text": "Quis nostrud exercitation"
    }
    ];

    chart.dateFormatter.inputDateFormat = "yyyy";

    chart.fontSize = 11;
    chart.tooltipContainer.fontSize = 11;

    var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.grid.template.disabled = true;

    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    // dateAxis.renderer.points = [{ x: -400, y: 0 }, { x: 0, y: 50 }, { x: 400, y: 0 }]
    dateAxis.renderer.polyspline.tensionX = 0.8;
    dateAxis.renderer.grid.template.disabled = true;
    dateAxis.renderer.line.strokeDasharray = "1,4";
    dateAxis.baseInterval = { period: "month", count: 1 }; // otherwise initial animation will be not smooth

    dateAxis.renderer.labels.template.disabled = true;

    var series = chart.series.push(new am4plugins_timeline.CurveLineSeries());
    series.strokeOpacity = 0;
    series.dataFields.dateX = "year";
    series.dataFields.categoryY = "category";
    series.dataFields.value = "size";
    series.baseAxis = categoryAxis;

    var interfaceColors = new am4core.InterfaceColorSet();

    series.tooltip.pointerOrientation = "down";

    var distance = 100;
    var angle = 60;

    var bullet = series.bullets.push(new am4charts.Bullet());

    var line = bullet.createChild(am4core.Line);
    line.adapter.add("stroke", function (fill, target) {
      if (target.dataItem) {
        return chart.colors.getIndex(target.dataItem.index)
      }
    });

    line.x1 = 0;
    line.y1 = 0;
    line.y2 = 0;
    line.x2 = distance - 10;
    line.strokeDasharray = "1,3";

    var circle = bullet.createChild(am4core.Circle);
    circle.radius = 30;
    circle.fillOpacity = 1;
    circle.strokeOpacity = 0;

    var circleHoverState = circle.states.create("hover");
    circleHoverState.properties.scale = 1.3;

    series.heatRules.push({ target: circle, min: 0, max: 100, property: "radius" });
    circle.adapter.add("fill", function (fill, target) {
      if (target.dataItem) {
        return chart.colors.getIndex(target.dataItem.index)
      }
    });
    circle.tooltipText = "{text}: {value}";
    circle.adapter.add("tooltipY", function (tooltipY, target) {
      return -target.pixelRadius - 4;
    });

    var yearLabel = bullet.createChild(am4core.Label);
    yearLabel.text = "{year}";
    yearLabel.strokeOpacity = 0;
    yearLabel.fill = am4core.color("#fff");
    yearLabel.horizontalCenter = "middle";
    yearLabel.verticalCenter = "middle";
    yearLabel.interactionsEnabled = false;

    var label = bullet.createChild(am4core.Label);
    label.propertyFields.text = "text";
    label.strokeOpacity = 0;
    label.horizontalCenter = "right";
    label.verticalCenter = "middle";

    label.adapter.add("opacity", function (opacity, target) {
      if (target.dataItem) {
        var index = target.dataItem.index;
        var line = target.parent.children.getIndex(0);

        if (index % 2 == 0) {
          target.y = -distance * am4core.math.sin(-angle);
          target.x = -distance * am4core.math.cos(-angle);
          line.rotation = -angle - 180;
          target.rotation = -angle;
        }
        else {
          target.y = -distance * am4core.math.sin(angle);
          target.x = -distance * am4core.math.cos(angle);
          line.rotation = angle - 180;
          target.rotation = angle;
        }
      }
      return 1;
    });

    var outerCircle = bullet.createChild(am4core.Circle);
    outerCircle.radius = 30;
    outerCircle.fillOpacity = 0;
    outerCircle.strokeOpacity = 0;
    outerCircle.strokeDasharray = "1,3";

    var hoverState = outerCircle.states.create("hover");
    hoverState.properties.strokeOpacity = 0.8;
    hoverState.properties.scale = 1.5;

    outerCircle.events.on("over", function (event) {
      var circle = event.target.parent.children.getIndex(1);
      circle.isHover = true;
      event.target.stroke = circle.fill;
      event.target.radius = circle.pixelRadius;
      event.target.animate({ property: "rotation", from: 0, to: 360 }, 4000, am4core.ease.sinInOut);
    });

    outerCircle.events.on("out", function (event) {
      var circle = event.target.parent.children.getIndex(1);
      circle.isHover = false;
    });

    chart.scrollbarX = new am4core.Scrollbar();
    chart.scrollbarX.opacity = 0.5;
    chart.scrollbarX.width = am4core.percent(50);
    chart.scrollbarX.align = "center";

  });
}

worldMap()
// fishBone()
buyerGraph()
lineGraph()

