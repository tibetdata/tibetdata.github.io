$(function () {
    $('#popn_column').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Tibetan Population in Diaspora'
        },
        subtitle: {
            text: 'Source: Multiple'
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Population'
            }
        },
        series: [{
            name: 'India',
            data: [94203]

        }, {
            name: 'Nepal',
            data: [13514]
        }, {
            name: 'USA',
            data: [11265]
        }, {
            name: 'Canada',
            data: [4640]
        }, {
            name: 'Switzerland',
            data: [1540]
        }, {
            name: 'Bhutan',
            data: [1298]
        }, {
            name: 'United Kingdom',
            data: [650]
        }, {
            name: 'Rest of Europe',
            data: [640]
        }, {
            name: 'Australia',
            data: [533]
        }, {
            name: 'Taiwan',
            data: [485]
        }, {
            name: 'Scandanavia',
            data: [110]
        }, {
            name: 'New Zealand',
            data: [66]
        }, {
            name: 'Japan',
            data: [60]
        }],
        credits: {
            enabled: false
        },
    });
});