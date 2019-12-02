import React from 'react';
import PropTypes from 'prop-types';

/**
 * Section of examples with included title, id, and documentation link
 */
class ExampleSection extends React.Component {
    render() {
        const {sectionId, sectionName, sectionDocs, children} = this.props;
        return (
            <div id={sectionId} className={'box'}>
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

ExampleSection.propTypes = {
    sectionId: PropTypes.string.isRequired,
    sectionName: PropTypes.string.isRequired,
    sectionDocs: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

export default ExampleSection;
