// @packages
import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// @scripts
import HomePage from '../pages/home-page';
import { config } from '../config';
import { filterTechCollection, getTechCollection } from '../redux';

const HomePageContainer = ({
    onFilterTechCollection,
    onGetTechCollection,
    techCollectionItems,
    totalTechCollection
}) => (
    <HomePage
        content={config.text.homePage.content}
        onFilterTechCollection={onFilterTechCollection}
        onGetTechCollection={onGetTechCollection}
        techCollectionItems={techCollectionItems}
        totalTechCollection={totalTechCollection}
    />
);

HomePageContainer.propTypes = {
    onFilterTechCollection: PropTypes.func.isRequired,
    onGetTechCollection: PropTypes.func.isRequired,
    techCollectionItems: PropTypes.arrayOf(PropTypes.shape({
        author: PropTypes.string.isRequired,
        flagged: PropTypes.bool,
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
    totalTechCollection: 0
};

const mapStateToProps = ({ techCollection }) => ({
    techCollectionItems: techCollection.items,
    totalTechCollection: techCollection.totalCount
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    onFilterTechCollection: filterTechCollection,
    onGetTechCollection: getTechCollection
}, dispatch);

export default connect(
    mapStateToProps, mapDispatchToProps
)(HomePageContainer);
