/**
 * Grid-light theme for Highcharts JS
 * @author Torstein Honsi
 */

// Load the fonts
Highcharts.createElement('link', {
   href: '//fonts.googleapis.com/css?family=Dosis:400,600',
   rel: 'stylesheet',
   type: 'text/css'
}, null, document.getElementsByTagName('head')[0]);

Highcharts.theme = {
   colors: ["#7cb5ec", "#f7a35c", "#90ee7e", "#7798BF", "#aaeeee", "#ff0066", "#eeaaee",
      "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],
   chart: {
      backgroundColor: null,
      style: {
         fontFamily: "Dosis, sans-serif"
      }
   },
   title: {
      style: {
         fontSize: '16px',
         fontWeight: 'bold',
         textTransform: 'uppercase'
      }
   },
   tooltip: {
      borderWidth: 0,
      backgroundColor: 'rgba(219,219,216,0.8)',
      shadow: false
   },
   legend: {
      itemStyle: {
         fontWeight: 'bold',
         fontSize: '13px'
      }
   },
   xAxis: {
      gridLineWidth: 1,
      labels: {
         style: {
            fontSize: '12px'
         }
      }
   },
   yAxis: {
      minorTickInterval: 'auto',
      title: {
         style: {
            textTransform: 'uppercase'
         }
      },
      labels: {
         style: {
            fontSize: '12px'
         }
      }
   },
   plotOptions: {
      candlestick: {
         lineColor: '#404048'
      }
   },


   // General
   background2: '#F0F0EA'
   
};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);


$(function () {
    var categories = ['0-4', '5-9', '10-14', '15-19',
            '20-24', '25-29', '30-34', '35-39', '40-44',
            '45-49', '50-54', '55-59', '60-64', '65-69',
            '70-74', '75-79', '80-84', '85-89', '90-94',
            '95-99', '100 + '];
    $(document).ready(function () {
        $('#population_pyramid').highcharts({
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Population pyramid for Tibetans in Tibet and China'
            },
            subtitle: {
                text: 'Source: 2010 China Census'
            },
            xAxis: [{
                categories: categories,
                reversed: false,
                labels: {
                    step: 1
                }
            }, { // mirror axis on right side
                opposite: true,
                reversed: false,
                categories: categories,
                linkedTo: 0,
                labels: {
                    step: 1
                }
            }],
            yAxis: {
                title: {
                    text: null
                },
                labels: {
                    formatter: function () {
                        return (Math.abs(this.value) / 1000) + ',000';
                    }
                },
                min: -350000,
                max: 350000
            },

            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },

            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + ', age ' + this.point.category + '</b><br/>' +
                        'Population: ' + Highcharts.numberFormat(Math.abs(this.point.y), 0);
                }
            },

            series: [{
                name: 'Male',
                data: [-268538, -269719, -283851,-306887,-320161,-292943,-269111,-264268,-233012,-179099,-113913,-104210,-88477,-69170,-46552,-26511,-12807,-4653,-1215,-455,-73]
            }, {
                name: 'Female',
                data: [255535,259459,273375,298526,316306,290117,259593,251972,224747,172570,113525,106406,94470,78273,58880,37963,21751,9535,2687,756,116]
            }],
            credits: {
                enabled: false
            },
        });
    });

});