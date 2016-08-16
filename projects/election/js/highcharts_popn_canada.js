$(function () {
    $('#popn_column_canada').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Tibetan Population in Canada'
        },
        subtitle: {
            text: 'Source: 2011 Canada Census'
        },
        xAxis: {
            categories: [
                'Province'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Population'
            }
        },
        series: [{
            name: 'Ontario',
            data: [3965]

        }, {
            name: 'British Columbia',
            data: [200]
        }, {
            name: 'Alberta',
            data: [335]
        }, {
            name: 'Quebec',
            data: [110]
        }],
        /*series: [{
            name: 'Ontario',
            data: [3965]

        }, {
            name: 'Toronto',
            data: [3865]
        }, {
            name: 'British Columbia',
            data: [200]
        }, {
            name: 'Vancouver',
            data: [45]
        }, {
            name: 'Alberta',
            data: [335]
        }, {
            name: 'Calgary',
            data: [325]
        }, {
            name: 'Quebec',
            data: [110]
        }, {
            name: 'Montreal',
            data: [35]
        }],
        */
        credits: {
            enabled: false
        },
    });
});