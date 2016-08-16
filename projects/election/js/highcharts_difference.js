$(function () {
    $('#percentage_column').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Age difference Percentage'
        },
        subtitle: {
            text: 'Source: 2010 China Census'
        },
        xAxis: {
            categories: [
                'Age 19 & under',
                'Age 29 & under',
                'Difference'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Population Percentage (%)'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Tibet',
            data: [35.27,54.69]

        }, {
            name: 'China',
            data: [24.10, 41.24]
        }, {
            name: 'Difference %',
            data: [46, 33]
        }],
        credits: {
            enabled: false
        },
    });
});