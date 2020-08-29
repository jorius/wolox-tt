import globals, { zIndex, dimensions } from '../../../styles/globals';

export default (theme) => ({
    ...globals(theme),
    avatar: {
        backgroundColor: '#EE0273',
        color: theme.palette.common.white
    },
    avatarAdorment: {
        border: `1px solid ${theme.palette.common.black}66`,
        borderRadius: '50%',
        padding: 2
    },
    divider: {
        borderLeft: `1px solid ${theme.palette.common.black}33`,
        bottom: '10%',
        height: 30,
        left: '36%',
        marginTop: 10,
        position: 'absolute',
        top: '10%'
    },
    leftIcon: {
        marginRight: 25
    },
    topBar: {
        backgroundColor: theme.palette.common.background,
        width: `calc(100% - ${dimensions.MAIN_MENU_WIDTH}px)`
    },
    topBarPadding: {
        alignSelf: 'flex-end',
        justifyContent: 'flex-end',
        width: 300
    },
    topBarRoot: {
        flexGrow: 1,
        zIndex: zIndex.TOP_BAR
    },
    topBarIcon: {
        marginLeft: 0
    },
    topBarTitle: {
        flexGrow: 1,
        marginLeft: 20
    },
    userNameTypography: {
        color: theme.palette.common.black,
        textTransform: 'capitalize'
    },
    userProfileButton: {
        color: theme.palette.common.black
    }
});
