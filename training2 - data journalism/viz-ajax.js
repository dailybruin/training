var svg = d3.select('#viz-ajax'),
  margin = { top: 30, bottom: 30, left: 40, right: 40 },
  w = svg.attr('width') - margin.left - margin.right;
h = svg.attr('height') - margin.top - margin.bottom;

var x = d3
    .scaleBand()
    .rangeRound([0, w])
    .padding(0.4),
  y = d3.scaleLinear().rangeRound([h, 0]);

var g = svg
  .append('g')
  .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

d3.json('assets/data.json', function(error, data) {
  if (error) return;

  x.domain(data.map(d => d.food));
  y.domain([
    0,
    d3.max(data, function(d) {
      return d.price;
    }),
  ]);

  var color = d3.scaleOrdinal(d3.schemeCategory20);

  // var color = d3.scaleBand()
  // 	.domain(data.map(d => d.food))
  // 	// .domain([0, data.length])
  // 	.range(["red", "blue"])

  g
    .append('g')
    .attr('class', 'axis axis--x')
    .attr('transform', 'translate(0,' + h + ')')
    .call(d3.axisBottom(x));

  g
    .append('g')
    .attr('class', 'axis axis--y')
    .call(d3.axisLeft(y));

  g
    .selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', function(d) {
      return x(d.food);
    })
    .attr('y', function(d) {
      return y(d.price);
    })
    .attr('width', x.bandwidth())
    .attr('height', function(d) {
      return h - y(d.price);
    })
    .attr('fill', function(d, i) {
      console.log(color(i));
      return color(i);
    });
  // .on("hover", function(){
  //     this.style.fill = "teal";
  //   })

  // .attr("fill", "teal")
});
