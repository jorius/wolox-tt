// @styles
import globals from '../../styles/globals';

export default (theme) => ({
    ...globals(theme),
    homePage: {
        paddingBottom: 25,
        paddingRight: 25
    },
    techFilters: {
        padding: 25
    },
    techItem: {
        padding: 25
    },
    techLogo: {
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
        width: '100%'
    }
});
