import React from 'react';
import RVScatterPlot from "./RVScatterPlot";
import ExampleSection from "../prefabs/ExampleSection";
import RVBubblePlot from "./RVBubblePlot";
import '../../node_modules/react-vis/dist/style.css';

/** All example plots for React-Vis */
export default class ReactVisPage extends React.Component {
    render() {
        return (
            <ExampleSection
                sectionId={'react-vis-page'}
                sectionName={'React-Vis Module'}
                sectionDocs={'https://uber.github.io/react-vis/'}
            >
                <RVScatterPlot/>
                <RVBubblePlot/>
            </ExampleSection>
        );
    }
}
