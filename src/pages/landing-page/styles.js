// @scripts
import { globalUI } from '../../core';

// @styles
import globals from '../../styles/globals';

export default (theme) => ({
    ...globals(theme),
    benefits: {
        textAlign: 'center',
        whiteSpace: 'pre-line'
    },
    benefitsLegend: {
        paddingTop: 25
    },
    blue: {
        color: '#1D90C4'
    },
    bold: {
        fontWeight: 'bold'
    },
    bullet: {
        marginRight: 20
    },
    cleanLink: {
        color: theme.palette.common.black,
        textDecoration: 'none'
    },
    divider: {
        margin: '50px 0 50px 0'
    },
    footer: {
        marginTop: 80
    },
    footerLogo: {
        marginTop: 100
    },
    followUsButton: {
        border: '2px solid #1D90C4',
        borderRadius: 25,
        color: theme.palette.common.white,
        fontSize: '22px',
        margin: 20,
        width: 280,
        '&:hover': {
            backgroundColor: '#1D90C4'
        }
    },
    green: {
        color: '#97CF00'
    },
    icIlustraHeroImage: {
        textAlign: 'center',
        transform: 'scaleX(-1)'
    },
    landingPage: {
        background: `url("${globalUI.getImage('./Bg_Header.png')}") no-repeat ${theme.palette.common.white}`,
        padding: '0 345px 40px 345px'
    },
    learnMoreButton: {
        backgroundColor: '#2AA7DF',
        borderRadius: 25,
        color: theme.palette.common.white,
        fontSize: '22px',
        fontWeight: 'bold',
        margin: 35,
        width: 280,
        '&:hover': {
            backgroundColor: '#1D90C4'
        }
    },
    loginButton: {
        borderRadius: 25,
        color: '#1D90C4',
        fontSize: '20px',
        fontWeight: 'bold',
        '&:hover': {
            color: theme.palette.common.white,
            backgroundColor: '#1D90C4'
        }
    },
    mainText: {
        textAlign: 'left'
    },
    menu: {
        paddingTop: 45
    },
    menuItem: {
        borderBottom: '2px solid transparent',
        color: theme.palette.common.black,
        cursor: 'pointer',
        fontSize: '22px',
        fontWeight: 'bold',
        padding: 25,
        '&:hover': {
            borderBottom: `2px solid ${theme.palette.common.black}`
        }
    },
    remoteWeek: {
        paddingTop: 30
    },
    requirementItem: {
        display: 'flex',
        padding: 20,
        whiteSpace: 'pre-line'
    },
    secondContent: {
        marginBottom: 80,
        marginTop: 80
    },
    subText: {
        fontWeight: 'bold',
        textAlign: 'left',
        whiteSpace: 'pre-line'
    },
    twitter: {
        color: theme.palette.common.white
    },
    twitterLink: {
        fontSize: '20px'
    },
    verticalAlign: {
        verticalAlign: 'middle'
    },
    woloxerLeft: {
        background: `url("${globalUI.getImage('./img_woloxer.png')}") no-repeat`,
        height: 400,
        textAlign: 'center',
        width: '50%'
    },
    woloxerRight: {
        backgroundColor: '#F2F5FA',
        height: 400,
        textAlign: 'center',
        whiteSpace: 'pre-line',
        width: '50%'
    }
});
