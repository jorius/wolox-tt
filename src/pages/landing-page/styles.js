// @scripts
import { globalUI } from '../../core';

// @styles
import globals from '../../styles/globals';

export default (theme) => ({
    ...globals(theme),
    icIlustraHeroImage: {
        textAlign: 'center',
        transform: 'scaleX(-1)'
    },
    landingPage: {
        background: `url("${globalUI.getImage('./Bg_Header.png')}") repeat`,
        height: '100vh'
    },
    loginButton: {
        fontSize: '24px',
        fontWeight: 'bold',
        width: 100
    },
    mainText: {
        textAlign: 'left'
    },
    menu: {
    },
    menuItem: {
        borderBottom: '2px solid transparent',
        color: theme.palette.common.black,
        cursor: 'pointer',
        fontSize: '24px',
        fontWeight: 'bold',
        padding: 25,
        '&:hover': {
            borderBottom: `2px solid ${theme.palette.common.black}`
        }
    },
    welcomeSentenceContainer: {
        width: '100%'
    },
    welcomeSentence: {
        margin: '0 auto',
        width: '55%'
    }
});
