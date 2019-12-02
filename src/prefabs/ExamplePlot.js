import React from 'react';
import './RVScatterPlot.css';
import {HorizontalGridLines, MarkSeries, VerticalGridLines, XAxis, XYPlot, YAxis} from "react-vis";

//Generate random data
const data = new Array(200).fill(0).reduce((prev, curr) => [...prev, {
    x: Math.random() * 20 - Math.random() * 20,
    y: Math.random() * 20 - Math.random() * 20,
}], []);

export default class RVScatterPlot extends React.Component {
    render() {
        return (
            <div id={'react-vis-scatter-plot'} className={'box example'}>
                <h2 className={'example-title box-title'}>Scatter Plot</h2>
                <div className={'example-plot'}>
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
                </div>
            </div>
        );
    }
}
