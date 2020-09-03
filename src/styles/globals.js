/**
 * Allowed field variants:
 *  - outlined
 *  - filled
 *  - standard
 */
export const DEFAULT_FIELD_VARIANT = 'standard';

/**
 * Common colors.
 */
export const colors = {
    blue: {
        primary: '#2AA7DF',
        secondary: '#1D90C4'
    },
    green: {
        primary: '#97CF00'
    }
};

/**
 * Common z-indexes.
 */
export const zIndex = {
    AUTO_COMPLETE: 3000,
    FOOTER: 1000,
    LOADING_PAGE: 4000,
    PROFILE_MENU: 1000,
    TOP_BAR: 1000
};

/**
 * Global classes.
 */
export default (theme) => ({
    blueText: {
        color: theme.palette.common.blue.primary
    },
    boldText: {
        fontWeight: 'bold'
    },
    greenText: {
        color: theme.palette.common.green.primary
    },
    whiteText: {
        color: theme.palette.common.white
    }
});

/**
 * Common dimensions
 */
export const dimensions = {
    TOP_BAR_HEIGHT: 88
};
