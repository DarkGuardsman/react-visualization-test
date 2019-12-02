import React from 'react';
import {HorizontalGridLines, MarkSeries, VerticalGridLines, XAxis, XYPlot, YAxis} from "react-vis";
import ExamplePlot from "../prefabs/ExamplePlot";
import {generateDots} from "../helpers/generate_data";


/** Bubble plot example using a MarkSeries in React-Vis */
export default class RVBubblePlot extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: generateDots(200, 20, true)
        }

        this.refreshData = this.refreshData.bind(this);
    }

    refreshData(colored) {
        console.debug('Refreshing data');
        this.setState({data: generateDots(200, 20, true)});
    }

    render() {
        const {data} = this.state;
        return (
            <ExamplePlot
                exampleId={'react-vis-bubble-plot'}
                exampleName={'Bubble Plot'}
                exampleDocs={'https://uber.github.io/react-vis/documentation/series-reference/mark-series'}
                refreshData={this.refreshData}
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
                        colorType="literal"
                        data={data}
                    />
                </XYPlot>
            </ExamplePlot>
        );
    }
}
