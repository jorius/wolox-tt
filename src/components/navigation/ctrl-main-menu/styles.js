import globals, { dimensions, zIndex } from '../../../styles/globals';

export default (theme) => ({
    ...globals(theme),
    logoContainer: {
        padding: '17px 0px 0px 17px'
    },
    mainMenu: {
    },
    menuPaper: {
        backgroundColor: theme.palette.background.default,
        transition: theme.transitions.create(['margin', 'width'], {
            duration: theme.transitions.duration.enteringScreen,
            easing: theme.transitions.easing.easeOut
        }),
        width: dimensions.MAIN_MENU_WIDTH,
        zIndex: zIndex.PROFILE_MENU
    },
    menuItemDirection: {
        display: 'flex'
    },
    menuPaperCollapsed: {
        backgroundSize: 'cover',
        marginTop: 65,
        transition: theme.transitions.create(['margin', 'width'], {
            duration: theme.transitions.duration.leavingScreen,
            easing: theme.transitions.easing.sharp
        }),
        width: dimensions.MAIN_MENU_WIDTH_COLLAPSED
    },
    menuIcon: {
        color: theme.palette.common.white,
        marginLeft: 5
    },
    menuIconSelected: {
        height: 60,
        textDecoration: 'underline',
        textDecorationColor: theme.palette.common.blue,
        '&:hover': {
            textDecoration: 'underline',
            textDecorationColor: theme.palette.common.blue
        }
    },
    menuIconUnselected: {
        height: 60
    },
    submenuItem: {
        height: 35,
        paddingLeft: theme.spacing(4)
    }
});
