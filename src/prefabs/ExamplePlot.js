import React from 'react';
import PropTypes from 'prop-types';
import './ExamplePlot.css'

/**
 * Single example of a plot with title, id, and documentation link
 */
class ExamplePlot extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            colored: true
        };
    }

    render() {
        const {colored} = this.state;
        const {exampleId, exampleName, exampleDocs, children, refreshData} = this.props;
        return (
            <div id={exampleId} className={'box example-plot'}>
                <h2 className={'example-plot-title box-title'}>{exampleName}</h2>
                <p> Documentation: <a href={exampleDocs}>Link</a></p>
                <div className={'example-plot-graph'}>
                    <div className={'example-plot-controls box'}>
                        Controls:
                        <input type={'checkbox'} checked={colored} onChange={() => {
                            this.setState({colored: !colored})
                        }}/>
                        <button onClick={() => refreshData(colored)}>Refresh Data</button>
                    </div>
                    {children}
                </div>
            </div>
        );
    }
}


ExamplePlot.propTypes = {
    exampleId: PropTypes.string.isRequired,
    exampleName: PropTypes.string.isRequired,
    exampleDocs: PropTypes.string.isRequired,
    refreshData: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
};

export default ExamplePlot;
