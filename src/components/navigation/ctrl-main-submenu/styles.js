import globals, { dimensions } from '../../../styles/globals';

export default (theme) => ({
    ...globals(theme),
    collapseButton: {
        borderRadius: '50px',
        '&:hover': {
            backgroundColor: 'transparent'
        },
        marginRight: 9
    },
    paper: {
        backgroundColor: theme.palette.common.white,
        borderRight: `1px solid ${theme.palette.common.black}33`,
        boxShadow: `1px 1px ${theme.palette.common.black}1A`,
        marginLeft: dimensions.MAIN_MENU_WIDTH,
        width: dimensions.MAIN_SUBMENU_WIDTH
    },
    subMenuItem: {
        margin: 17
    },
    subMenuItemDetails: {
        padding: 0
    },
    subMenuItemList: {
        width: 300
    },
    subMenuItemPanel: {
        boxShadow: 'none',
        position: 'inherit'
    },
    subMenuItemSummary: {
        backgroundColor: theme.palette.background.paper,
        padding: '0 10px 0 14px'
    },
    subMenuItemText: {
        color: `${theme.palette.common.black}80`
    },
    subMenuItemTextExpanded: {
        color: theme.palette.common.black,
        fontWeight: 500
    },
    subMenuItemListText: {
        color: `${theme.palette.common.black}80`
    },
    toolbarContainer: {
        background: theme.palette.common.white,
        color: theme.palette.common.black,
        paddingRight: 0
    },
    toolbarTypography: {
        color: theme.palette.common.black,
        marginBottom: 0,
        marginLeft: 6,
        width: '100%'
    }
});
