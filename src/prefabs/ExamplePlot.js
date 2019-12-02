import React from 'react';
import PropTypes from 'prop-types';

/**
 * Single example of a plot with title, id, and documentation link
 */
class ExamplePlot extends React.Component {
    render() {
        const {exampleId, exampleName, exampleDocs, children} = this.props;
        return (
            <div id={exampleId} className={'box example'}>
                <h2 className={'example-title box-title'}>{exampleName}</h2>
                <p> Documentation: <a href={exampleDocs}>Link</a></p>
                <div className={'example-plot'}>
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
    children: PropTypes.node.isRequired
};

export default ExamplePlot;
