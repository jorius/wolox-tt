import globals, { dimensions } from '../../styles/globals';

export default (theme) => ({
    ...globals(theme),
    loginAppBar: {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.common.white
    },
    loginButton: {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.common.white,
        '&:hover': {
            backgroundColor: '#3a3e54'
        }
    },
    loginPage: {
        backgroundColor: '#F6F7FD',
        height: '100vh',
        marginLeft: `-${dimensions.MAIN_MENU_WIDTH + 15}px`
    },
    form: {
        left: '50%',
        maxWidth: 400,
        position: 'relative',
        top: '50%',
        transform: 'translate(-50%, -50%)'
    },
    formPaper: {
        padding: 20,
        paddingTop: 90
    },
    formTitle: {
        marginBottom: 20,
        textAlign: 'center'
    },
    formButtons: {
        textAlign: 'right'
    }
});
