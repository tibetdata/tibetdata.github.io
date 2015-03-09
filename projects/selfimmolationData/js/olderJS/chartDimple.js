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
          var myChart = new dimple.chart(svg, data);
          /* Axes */
          var x = myChart.addTimeAxis("x", "year");
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
          /*
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
            
            
          // Get a unique list of Owner values to use when filtering
        var filterValues = dimple.getUniqueValues(data, "Stage");
        // Get all the rectangles from our now orphaned legend
        myLegend.shapes.selectAll("rect")
          // Add a click event to each rectangle
          .on("click", function (e) {
            // This indicates whether the item is already visible or not
            var hide = false;
            var newFilters = [];
            // If the filters contain the clicked shape hide it
            filterValues.forEach(function (f) {
              if (f === e.aggField.slice(-1)[0]) {
                hide = true;
              } else {
                newFilters.push(f);
              }
            });
            // Hide the shape or show it
            if (hide) {
              d3.select(this).style("opacity", 0.2);
            } else {
              newFilters.push(e.aggField.slice(-1)[0]);
              d3.select(this).style("opacity", 0.8);
            }
            // Update the filters
            filterValues = newFilters;
            // Filter the data
            myChart.data = dimple.filterData(data, "Stage", filterValues);
            // Passing a duration parameter makes the chart animate. Without
            // it there is no transition
            myChart.draw(800);
          });
          */
        };