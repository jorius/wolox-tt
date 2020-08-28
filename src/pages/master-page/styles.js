// @scripts
import globals, { dimensions } from '../../styles/globals';

export default (theme) => ({
    ...globals(theme),
    masterPage: {
    },
    loggedInPage: {
        backgroundColor: theme.palette.background.paper,
        paddingRight: 15,
        paddingTop: dimensions.TOP_BAR_HEIGHT + 16
    }
});
