import React from 'react';

/**
 * Single example of a plot with title, id, and documentation link
 */
export default class ExamplePlot extends React.Component {
    render() {
        const {exampleID, exampleName, exampleDocs, children} = this.props;
        return (
            <div id={exampleID} className={'box example'}>
                <h2 className={'example-title box-title'}>{exampleName}</h2>
                <p> Documentation: <a href={exampleDocs}>Link</a></p>
                <div className={'example-plot'}>
                    {children}
                </div>
            </div>
        );
    }
}
