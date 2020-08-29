// @scripts
import { globalUI } from '../../core';

// @styles
import globals, { dimensions } from '../../styles/globals';

export default (theme) => ({
    ...globals(theme),
    loginBackground: {
        background: `url("${globalUI.getImage('./bg.png')}") no-repeat 95% 95%`,
        height: '100vh',
        padding: 25
    },
    loginButton: {
        marginTop: 50,
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
        maxWidth: 500,
        minWidth: 300,
        position: 'relative',
        top: '50%',
        transform: 'translate(50%, -50%)'
    },
    formContainer: {
        background: `url("${globalUI.getImage('./bg2.png')}") repeat center`
    },
    formItem: {
        marginBottom: 20
    },
    formTitle: {
        marginBottom: 25
    }
});
