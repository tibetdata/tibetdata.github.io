function draw(geo_data) {
        "use strict";
        var margin = 5,
        	container_width= (1170 * .91),
            width = container_width - margin,
            height = 600 - margin;
        /*  
        d3.select("body")
          .append("h2")
          .text("World Cup");
		*/
		
        var svg = d3.select("#map")
            .append("svg")
            .attr("width", width + margin)
            .attr("height", height + margin)
            .append('g')
            .attr('class', 'map');
        
          
          var years = [];
          
          for (var i =1930; i <2015; i +=4) {
              if (i !== 1942 && i !== 1946) {
                  years.push(i);
              };
          }
        
        var projection = d3.geo.mercator()
                               .scale(150)
                               .translate( [width / 2.3, height / 1.4]);

        var path = d3.geo.path().projection(projection);

        var map = svg.selectAll('path')
                     .data(geo_data.features)
                     .enter()
                     .append('path')
                     .attr('d', path)
                     .style('fill', 'green')
                     .style('stroke', 'black')
                     .style('stroke-width', 0.5)
                     .attr('opacity', 0.5);

        
          function plot_points(data) {
              
              function agg_year(leaves) {
                  var total = d3.sum(leaves, function(d) {
                                     return d['attendance'];
                                     });
                  
                  var coords = leaves.map(function(d) {
                                          return projection([+d.long, +d.lat]);
                                          });
                  
                  var center_x = d3.mean(coords, function(d) {
                                         return d[0];
                                         });
                  
                  var center_y = d3.mean(coords, function(d) {
                                         return d[1];
                                         });
                  
                  var teams = d3.set();
                  
                  leaves.forEach(function(d) {
                                 teams.add(d['team1']);
                                 teams.add(d['team2']);
                                 });
                  
                  return {
                      'attendance' : total,
                      'x' : center_x,
                      'y' : center_y,
                      'teams' : teams.values()
                  };
              }
              
              //draw circles logic
              var nested = d3.nest()
                            .key(function(d) {
                                    return d['date'].getUTCFullYear();
                                    })
                            .rollup(agg_year)
                            .entries(data);
    
              //circles need to be scaled with caution
              var attendance_max = d3.max(nested, function(d) {
                                          return d.values['attendance'];
                                          });
              var radius = d3.scale.sqrt()
                                .domain([0, attendance_max])
                                .range([0, 15]);
              
              
              function key_func(d) {
                  return d['key'];
              }
              
              svg.append('g')
                .attr("class", "bubble")
                .selectAll("circle")
                .data(nested.sort(function(a, b) {
                            return b.values['attendance'] - a.values['attendance'];
                                  }), key_func)
                .enter()
                .append("circle")
                .attr('cx', function(d) { return d.values['x']; })
                .attr('cy', function(d) { return d.values['y']; })
                .attr('r', function(d) {
                    //return d.values['attendance'];
                    return radius(d.values['attendance']);
                      })
               
              /* defined in css
                //aesthetics
                .attr('fill', 'rgb(247, 148, 32)')
                .attr('stroke', 'black')
                .attr('stroke-width', 0.7)
                .attr('opacity', 0.7);
               */
              
              function update(year) {
                  var filtered = nested.filter(function(d) {
                        return new Date(d['key']).getUTCFullYear() === year;
                    });
                  
                  d3.select('#yearTitle')
                  .text("World Cup " + year);
                  
                  var circles = svg.selectAll('circle')
                    .data(filtered, key_func);
              
                  //removing any circle except for 'update'
                  circles.exit().remove();
                
                  //append any new circle
                  circles.enter()
                    .append("circle")
                    .transition()
                    .duration(500)
                    .attr('cx', function(d) { return d.values['x']; })
                    .attr('cy', function(d) { return d.values['y']; })
                    .attr('r', function(d) { 
                  		return radius(d.values['attendance']);
                  		});
                  //all aesthetics value stored in css
                
                  var countries = filtered[0].values['teams'];
                  
                  function update_countries(d) {
                      if(countries.indexOf(d.properties.name) !== -1) {
                          return 'green';
                      } else {
                          return "lightBlue";
                      }
                  }
                  
                svg.selectAll('path')
                  .transition()
                  .duration(500)
                  .style('fill', update_countries)
                  .style('stroke', update_countries);
              };
			  
              var year_idx = 0;
              
              var year_interval = setInterval(function() {
                    update(years[year_idx]);
                                              
                    year_idx++;
                        
                    if(year_idx >= years.length) {
                            clearInterval(year_interval);
                            
                          /*
                           * .append("div") -> We've created/appended this div element to contain
                           * all my buttons
                           * .selectAll("div") -> simply selecting all the divs in that parent div
                           * .data(years) -> binding data corresponding to all the years, making an
                           * enter selection which will grab me all the elements that are currently
                           * not yet on the page, which in this case is going to be all of them since
                           * we are near the top of our file, and
                           * .append("div") -> append div that has text equal to data itself
                           *
                           *
                           */
                          
                          //user-driven buttons - pick year
                          var buttons = d3.select(".years_buttons")
                                      //.append("div")
                                      //.transition
                                      //.duration(10000)
                                      //.attr("class", "years_buttons")
                                      .selectAll("div") //select divs
                                      .data(years)      //bind data
                                      .enter()          //enter selection
                                      .append("div")    //append divs
                                      .text(function(d) {
                                            return d;
                                    });
                            //set text labels
                            //click - event name
                          buttons.on("click", function(d) {
                                     //event handler
                                d3.select(".years_buttons")
                                 .selectAll("div")
                                 .transition()
                                 .duration(100)
                                 .style("color", "black")
                                 .style("background", "lightBlue");
                                 
                                d3.select(this)
                                 .transition()
                                 .duration(300)
                                 .style("background", "green")
                                 .style("color", "white");
                        
                                //call update() to update map
                                update(d)
                                     
                                     })
                    }
                }, 1000);                            
              }
          
          var format = d3.time.format("%d-%m-%Y (%H:%M h)");
          
          d3.tsv("world_cup_geo.tsv", function(d) {
                 d['attendance'] = +d['attendance'];
                 d['date'] = format.parse(d['date']);
                 return d;
                 }, plot_points);
};
