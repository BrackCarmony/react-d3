import React, { Component } from 'react'
import './../App.css'
import { scaleLinear } from 'd3-scale'
import { max } from 'd3-array'
import { select } from 'd3-selection'
import { trandition } from 'd3-transition'

class BarChart extends Component {
   constructor(props){
      super(props)
      this.createBarChart = this.createBarChart.bind(this)
   }
   componentDidMount() {
      this.createBarChart()
   }
   componentDidUpdate() {
      this.createBarChart()
   }
   createBarChart() {
     console.log(this.node);
      const node = this.node
      const dataMax = max(this.props.data)
      const width = this.props.size[0] / (this.props? this.props.data.length : 1);
      const yScale = scaleLinear()
         .domain([0, dataMax])
         .range([0, this.props.size[1]])

   select(node)
      .selectAll('rect')
      .data(this.props.data)
      .enter()
      .append('rect')
      .style('fill', d=>(Math.random()>.5?'red':'blue'))
      .attr('x', (d,i) => i * width)
      .attr('y', d => this.props.size[1])
      .attr('height', 0)
      .attr('width', width-1)

   select(node)
      .selectAll('rect')
      .data(this.props.data)
      .exit()
      .remove()

   select(node)
      .selectAll('rect')
      .data(this.props.data)
      .transition()
      .attr('x', (d,i) => i * width)
      .attr('y', d => this.props.size[1] - yScale(d))
      .attr('height', d => yScale(d))
      .attr('width', width-1)
   }
render() {
      return <svg ref={node => this.node = node}
      width={this.props.size[0]} height={this.props.size[1]}>
      </svg>
   }
}
export default BarChart
