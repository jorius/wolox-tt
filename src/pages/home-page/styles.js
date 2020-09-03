// @styles
import globals from '../../styles/globals';

export default (theme) => ({
    ...globals(theme),
    homePage: {
        paddingBottom: 25,
        paddingRight: 25
    },
    filtersCount: {
        marginBottom: 20
    },
    filtersTitle: {
        marginBottom: 25
    },
    techFilters: {
        padding: '45px 25px 25px 25px'
    },
    techItem: {
        padding: 25
    },
    techItemUnflagged: {
        opacity: 0.2
    },
    techTag: {
        cursor: 'pointer',
        marginLeft: -5,
        marginRight: 15
    },
    techTags: {
        paddingTop: 35
    },
    techTitle: {
        padding: 15
    },
    textField: {
        paddingBottom: 27,
        width: '100%'
    },
    totalCount: {
        marginLeft: '8%',
        marginRight: 90
    }
});
