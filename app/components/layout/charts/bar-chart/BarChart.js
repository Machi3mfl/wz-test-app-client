import React, { useEffect } from 'react';
import * as d3 from 'd3';

const BarChart = (props) => {

    const { id } = props

    const data = [13, 5, 24, 6, 10, 50];

    const colorScale = d3     
        .scaleSequential()      
        .interpolator(d3.interpolateCool)      
        .domain([0, data.length]);

    useEffect(() => {
        drawChart();
    }, []);

    const drawChart = () => {
        
        const w = 600;
        const h = 300;
        
        const svg = d3.select("#bar-container")
        .append("svg")
        .attr("width", w)
        .attr("height", h)
        .style("margin-left", 120);

                      
        svg.selectAll("rect")
          .data(data)
          .enter()
          .append("rect")
          .attr("x", (d, i) => i * 55)
          .attr("y", (d, i) => h - 10 * d)
          .attr("width", 45)
          .attr("height", (d, i) => d * 10)
          .style('fill', (_, i) => colorScale(i))
          .style('stroke', '#ffffff')
          .style('stroke-width', 0);

        
    }
            
    return (  
        <div id="bar-container"></div>
    );
}
 
export default BarChart;