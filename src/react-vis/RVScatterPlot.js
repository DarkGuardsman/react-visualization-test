import React from 'react';
import {HorizontalGridLines, MarkSeries, VerticalGridLines, XAxis, XYPlot, YAxis} from "react-vis";
import ExamplePlot from "../prefabs/ExamplePlot";

//Generate random data
const data = new Array(200).fill(0).reduce((prev, curr) => [...prev, {
    x: Math.random() * 20 - Math.random() * 20,
    y: Math.random() * 20 - Math.random() * 20,
}], []);

/** Scatter plot example using a MarkSeries in React-Vis */
export default class RVScatterPlot extends React.Component {
    render() {
        return (
            <ExamplePlot
                exampleId={'react-vis-scatter-plot'}
                exampleName={'Scatter Plot'}
                exampleDocs={'https://uber.github.io/react-vis/documentation/series-reference/mark-series'}
            >
                <XYPlot
                    width={800}
                    height={800}
                    xDomain={[-20, 20]}
                    yDomain={[-20, 20]}
                >
                    <XAxis/>
                    <YAxis/>
                    <VerticalGridLines/>
                    <HorizontalGridLines/>
                    <MarkSeries
                        data={data}
                        stroke="white"
                        opacityType="category"
                        opacity="1"
                    />
                </XYPlot>
            </ExamplePlot>
        );
    }
}
