// @packages
import { createMuiTheme } from '@material-ui/core/styles';

// @scripts
import { colors } from './globals';

export const theme = createMuiTheme({
    overrides: {
        MuiAppBar: {
            colorPrimary: {
                backgroundColor: colors.blue.primary
            }
        },
        MuiChip: {
            outlinedPrimary: {
                border: `1px solid ${colors.blue.primary}`,
                color: colors.blue.primary,
                '&:hover': {
                    backgroundColor: '#afdef3',
                    border: '1px solid #afdef3',
                    color: colors.blue.secondary,
                    fontWeight: 600
                }
            }
        },
        MuiButton: {
            containedPrimary: {
                backgroundColor: colors.blue.primary,
                borderRadius: 25,
                '&:hover': {
                    backgroundColor: colors.blue.secondary
                }
            },
            root: {
                textTransform: 'none'
            }
        },
        MuiFormLabel: {
            root: {
                '&$focused': {
                    color: colors.blue.primary
                }
            }
        },
        MuiInput: {
            underline: {
                '&:after': {
                    borderBottom: `2px solid ${colors.blue.primary}`
                }
            }
        }
    },
    palette: {
        common: {
            blue: {
                primary: colors.blue.primary,
                secondary: colors.blue.secondary
            },
            green: {
                primary: colors.green.primary
            }
        }
    },
    typography: {
        fontFamily: [
            '"Montserrat"',
            '"Fira Sans"',
            'sans-serif'
        ].join(',')
    }
});
