var dataset = [1, 10, 13, 19, 21, 25, 22, 18, 15, 13, 11, 12, 15];

// d3
//   .select('body')
//   .selectAll('div') // chained selectAll calls the children
//   .data(dataset)
//   .enter()
//   .append('div')
//   .attr('class', 'horizontal-bar')
//   .style('width', function(d) {
//     var barHeight = d * 5;
//     return barHeight + 'px';
//   })
//   .text(function(d) {
//     return d + ' feet';
//   }); // have one for "foot"

var w = 500,
  h = 300;

var svg = d3
  .select('body')
  .append('svg')
  .attrs({
    width: w,
    height: h,
  });

var color = d3
  .scaleLinear()
  .domain(dataset)
  .range(['red', 'blue']);

svg
  .selectAll('rect')
  .data(dataset)
  .enter()
  .append('rect')
  .attr('class', 'vertical-bar')
  .attr('x', function(d, i) {
    return i * (w / dataset.length);
  })
  .attr('y', function(d) {
    return h - d * 4;
  })
  .attr('width', 20)
  .attr('height', function(d) {
    return d * 5;
  })
  // .attr("fill", "teal")
  // .attr("fill", function(d, i) {
  // 	return 'rgb(256, ' + i * 20 + ', ' + i + ')'
  // })
  .attr('fill', function(d, i) {
    return color(i);
  });
