function draw(data) {
      /*
        D3.js setup code
      */

          "use strict"; /* Throw out an error - all or nothing */
          var margin = 75,
              width = 1400 - margin,
              height = 600 - margin;

          // d3.select("body")
          //   .append("h2")
          //   .text("World Cup Attendance")

          var svg = d3.select("body")
            .append("svg")
              .attr("width", width + margin)
              .attr("height", height + margin)
            .append('g')
                .attr('class','chart');

          d3.select('svg')
          	.selectAll("circle")
          	.data(data)
          	.enter()
          	.append("circle")
          
          //Find range of date column
          //Using d3.extent to return max, min values for scales
          var time_extent = d3.extent(data, function(d) {
          									return d['date'];
          									});
          
          //Find range of attendance column
          var count_extent = d3.extent(data, function(d) {
          										return d['attendance'];
          										});
          										
          //Create x-axis scale mapping dates -> pixels
          //Map above extent values to pixels
          var time_scale = d3.time.scale()
          					.range([margin, width]) //left & right most part of chart
          					.domain(time_extent);
          
          //Create y-axis scale mapping attendance -> pixels
          var count_scale = d3.scale.linear()
          					.range([height, margin]) //inverted coordinated plane of SVG
          					.domain(count_extent);

          
          // Creating x-axis using .axis() function
          var time_axis = d3.svg.axis()
          					.scale(time_scale)
          					.tick(d3.time.years, 2); 
          					//ticks every two yrs
          					//ticks every day .tick(d3.time.days
          					
          var count_axis = d3.svg.axis()
          					.scale(count_scale)
          					.orient("left");
          
          d3.select("svg")
          	.append('g')
          	.attr('class', 'x axis')
          	.attr('transform', "translate(0," + height + ")") //(0,'axis')
          	.call(time_axis);
          
          d3.select("svg")
          	.append('g')
          	.attr('class', 'y axis')
          	.attr('transform', "translate(" + margin + ",0)")
          	.call(count_axis);
          	//notice inverted coordinates again
          
          d3.selectAll('circle')
          	.attr('cx', function(d) {
          				return time_scale(d['date']);
          	})
          	.attr('cy', function(d) {
          				return count_scale(d['attendance']);
          	})
          	.attr('r', radius)
          	.attr('fill', color);

        };