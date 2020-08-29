// @scripts
import globals, { dimensions } from '../../styles/globals';

export default (theme) => ({
    ...globals(theme),
    masterPage: {
        backgroundColor: theme.palette.background.paper,
        height: '100vh',
        width: '100%'
    },
    loggedInPage: {
        backgroundColor: theme.palette.background.paper,
        paddingTop: dimensions.TOP_BAR_HEIGHT + 16
    }
});
