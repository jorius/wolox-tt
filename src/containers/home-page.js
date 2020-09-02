// @packages
import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// @scripts
import HomePage from '../pages/home-page';
import { config } from '../config';
import { getTechCollection } from '../redux';

const HomePageContainer = ({
    onGetTechCollection,
    techCollectionItems,
    totalTechCollection
}) => (
    <HomePage
        content={config.text.homePage.content}
        onGetTechCollection={onGetTechCollection}
        techCollectionItems={techCollectionItems}
        totalTechCollection={totalTechCollection}
    />
);

HomePageContainer.propTypes = {
    onGetTechCollection: PropTypes.func.isRequired,
    techCollectionItems: PropTypes.arrayOf(PropTypes.shape({
        author: PropTypes.string.isRequired,
        language: PropTypes.string.isRequired,
        license: PropTypes.string.isRequired,
        logo: PropTypes.string.isRequired,
        tech: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        year: PropTypes.string.isRequired
    })),
    totalTechCollection: PropTypes.number
};

HomePageContainer.defaultProps = {
    techCollectionItems: null,
    totalTechCollection: null
};

const mapStateToProps = ({ techCollection }) => ({
    techCollectionItems: techCollection.items,
    totalTechCollection: techCollection.totalCount
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    onGetTechCollection: getTechCollection
}, dispatch);

export default connect(
    mapStateToProps, mapDispatchToProps
)(HomePageContainer);
