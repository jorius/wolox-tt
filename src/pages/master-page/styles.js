// @scripts
import globals, { dimensions } from '../../styles/globals';

export default (theme) => ({
    ...globals(theme),
    masterPage: {
        backgroundColor: theme.palette.background.paper,
        height: '100vh',
        padding: 25,
        width: '100%'
    },
    loggedInPage: {
        backgroundColor: theme.palette.background.paper,
        paddingRight: 15,
        paddingTop: dimensions.TOP_BAR_HEIGHT + 16
    }
});
