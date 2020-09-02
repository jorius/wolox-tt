// @scripts
import { globalUI } from '../../core';

// @styles
import globals from '../../styles/globals';

export default (theme) => ({
    ...globals(theme),
    loginBackground: {
        background: `url("${globalUI.getImage('./Ic_ilustra_Hero@3x.png')}")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        margin: '50px -50px 0 50px',
        height: 'calc(100vh - 50px)'
    },
    loginButton: {
        marginTop: 50,
        width: 150
    },
    loginPage: {
        backgroundColor: '#F6F7FD',
        height: '100vh'
    },
    form: {
        maxWidth: 500,
        minWidth: 300,
        position: 'relative',
        top: '50%',
        transform: 'translate(50%, -50%)'
    },
    formContainer: {
        background: `url("${globalUI.getImage('./Bg_Header.png')}") repeat center`
    },
    formItem: {
        marginBottom: 20
    },
    formTitle: {
        marginBottom: 25
    }
});
