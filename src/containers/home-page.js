// @packages
import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// @scripts
import HomePage from '../pages/home-page';
import { config } from '../config';
import { filterTechCollection, getTechCollection, sortTechCollection } from '../redux';

const HomePageContainer = ({
    onFilterTechCollection,
    onGetTechCollection,
    onSortTechCollection,
    techCollectionItems,
    techCollectionSortDirection,
    totalTechCollection
}) => (
    <HomePage
        content={config.text.homePage.content}
        onFilterTechCollection={onFilterTechCollection}
        onGetTechCollection={onGetTechCollection}
        onSortTechCollection={onSortTechCollection}
        techCollectionItems={techCollectionItems}
        techCollectionSortDirection={techCollectionSortDirection}
        totalTechCollection={totalTechCollection}
    />
);

HomePageContainer.propTypes = {
    onFilterTechCollection: PropTypes.func.isRequired,
    onGetTechCollection: PropTypes.func.isRequired,
    onSortTechCollection: PropTypes.func.isRequired,
    techCollectionSortDirection: PropTypes.string.isRequired,
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
    techCollectionSortDirection: techCollection.sortDirection,
    totalTechCollection: techCollection.totalCount
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    onFilterTechCollection: filterTechCollection,
    onGetTechCollection: getTechCollection,
    onSortTechCollection: sortTechCollection
}, dispatch);

export default connect(
    mapStateToProps, mapDispatchToProps
)(HomePageContainer);
