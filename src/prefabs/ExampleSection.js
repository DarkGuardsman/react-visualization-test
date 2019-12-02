import React from 'react';

/**
 * Section of examples with included title, id, and documentation link
 */
export default class ExampleSection extends React.Component {
    render() {
        const {sectionID, sectionName, sectionDocs, children} = this.props;
        return (
            <div id={sectionID} className={'box'}>
                <div className={'box-title section-title'}>
                    <h1>{sectionName}</h1>
                    <p>Documentation: <a href={sectionDocs}>link</a></p>
                </div>
                <div className={'examples'}>
                  {children}
                </div>
            </div>
        );
    }
}
