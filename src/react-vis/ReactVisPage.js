import React from 'react';
import RVScatterPlot from "./RVScatterPlot";

export default class ReactVisPage extends React.Component {
    render() {
        return (
            <div id={'react-vis-page'}>
                <RVScatterPlot/>
            </div>
        );
    }
}
