function draw(data) {
      /*
        D3.js setup code
      */

          "use strict"; /* Throw out an error - all or nothing */
          
          /* These two variables define position of our chart */
          
          var margin = 75,
              width = 1400 - margin,
              height = 650 - margin;
          
          /*
          var margin = 100, width = 1000 - margin, height = 400 - margin;
          */
          
    /*debugger; */
    /*
          d3.select('body')
          .append('h2')
          .text("World Cup Attendance");
          */
          var svg = d3.select("body")
            .append("svg")
              .attr("width", width + margin)
              .attr("height", height + margin)
            .append('g')
                .attr('class','chart');

      /*
        Dimple.js Chart construction code
      */
          
          /* 'svg' defined above, 'data' passed as argument */
          /* REPLACED dimple js script: 
          var myChart = new dimple.chart(svg, data); */
          d3.select('svg')
          	.selectAll("circle")
          	.data(data)
          	.enter()
          	.append("circle")
          
          //Using d3.extent to return max, min values for scales
          var time_extent = d3.extent(data, function(d) {
          									return d['date'];
          									});
          	
          var count_extent = d3.extent(data, function(d) {
          										return d['attendance'];
          										});
          //Map above extent values to pixels
          var time_scale = d3.time.scale()
          					.range([margin, width]) //left & right most part of chart
          					.domain(time_extent);
          var count_scale = d3.scale.linear()
          					.range([height, margin]) //inverted coordinated plane of SVG
          					.domain(count_extent);
          
          
          
          /* Axes */
          //var x = myChart.addTimeAxis("x", "year");
          /* Formatting x-axis */
          x.dateParseFormat = "%Y";
          x.tickFormat = "%Y";
          x.timeInterval = 4;
          myChart.addMeasureAxis("y", "attendance");
          /* Series */
          /* dimple.plot.bar/scatter/line */
          /* "null" tells Dimple not to facet or group the bars in any way*/
          myChart.addSeries("stage", dimple.plot.scatter);
          /* myChart.addSeries("stage", dimple.plot.line); */
          myChart.addSeries(null, dimple.plot.bar);
          var myLegend = myChart.addLegend(1350, 100, 60, 300, "Right");
          myChart.draw();
          
          svg.selectAll("title_text")
          .data(["Legend"])
          .enter()
          .append("text")
            .attr("x", 1310)
            .attr("y", function (d, i) { return 90 + i * 14; })
            .style("font-family", "sans-serif")
            .style("font-size", "10px")
            .style("color", "Black")
            .text(function (d) { return d; });
          
          // This is a critical step.  By doing this we orphan the legend. This
          // means it will not respond to graph updates.  Without this the legend
          // will redraw when the chart refreshes removing the unchecked item and
          // also dropping the events we define below.
          myChart.legends = [];
          
          // This block simply adds the legend title. I put it into a d3 data
          // object to split it onto 2 lines.  This technique works with any
          // number of lines, it isn't dimple specific.
          svg.selectAll("title_text")
          .data(["Click legend to","show/hide owners:"])
          .enter()
          .append("text")
            .attr("x", 1310)
            .attr("y", function (d, i) { return 90 + i * 14; })
            .style("font-family", "sans-serif")
            .style("font-size", "10px")
            .style("color", "Black")
            .text(function (d) { return d; });
            
            
