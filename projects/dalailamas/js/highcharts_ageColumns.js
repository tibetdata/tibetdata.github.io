$(function () {
    $('#ageColumns').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Ages of 14 Dalai Lamas'
        },
        xAxis: {
            categories: ['Gendun Drup', 'Gendun Gyatso', 'Sonam Gyatso', 'Yonten Gyatso', 'Ngawang Lobsang Gyatso', 'Tsangyang Gyatso', 'Kelzang Gyatso', 'Jamphel Gyatso', 'Lungtok Gyatso', 'Tsultrim Gyatso', 'Khendrup Gyatso', 'Trinley Gyatso', 'Thubten Gyatso', 'Tenzin Gyatso']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Age (years)'
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                }
            }
        },
        legend: {
            align: 'center',
            verticalAlign: 'bottom',
            floating: false,
            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
            borderColor: '#CCC',
            borderWidth: 1,
            shadow: false
        },
        tooltip: {
            headerFormat: '<b>{point.x}: </b>{point.y} yrs<br/>',
            pointFormat: '{series.name}<br/>'
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                
            }
        },
        credits: {
            enabled: false
        },
        
        series: [{
            name: 'U-Tsang',
            data: [82, 67, 44, 0, 64, 0, 0, 46, 0, 0,0,18, 57,0]

        }, {
            name: 'Kham',
            data: [0, 0, 0, 0, 0, 0, 49, 0, 9, 20,17,0, 0,0]

        }, {
            name: 'Amdo',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0, 0,80]

        }, {
            name: 'Arunachal Pradesh',
            data: [0, 0, 0, 0, 0, 23, 0, 0, 0,0,0,0, 0,0]

        }, {
            name: 'Mongolia',
            data: [0, 0, 0, 28, 0, 0, 0, 0, 0,0,0,0, 0,0]

        }]
    });
});