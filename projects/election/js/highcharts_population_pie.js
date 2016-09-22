$(function () {

    // Radialize the colors
    Highcharts.getOptions().colors = Highcharts.map(Highcharts.getOptions().colors, function (color) {
        return {
            radialGradient: { cx: 0.5, cy: 0.3, r: 0.7 },
            stops: [
                [0, color],
                [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
            ]
        };
    });

    // Build the chart
    $('#population_pie').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: 'Snapshot of Tibetan Population in 2010'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.3f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    },
                    connectorColor: 'silver'
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Population',
            data: [
                ['Tibet',   97.98],
                ['India',       1.47],
                ['Nepal',    0.211],
                ['USA',     0.176],
                {
                    name: 'Canada',
                    y: 0.072,
                    sliced: true,
                    selected: true
                },
                ['Switzerland',   0.024],
                ['Bhutan', 0.020],
                ['United Kingdom', 0.010],
                ['Rest of Europe', 0.010],
                ['Australia', 0.008],
                ['Taiwan', 0.008],
                ['Scandanavia', 0.002],
                ['New Zealand', 0.001],
                ['Japan', 0.001]
            ]
        }],
        credits: {
            enabled: false
        },
    });
});

