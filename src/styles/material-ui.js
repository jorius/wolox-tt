// @packages
import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    overrides: {
        MuiButton: {
            root: {
                textTransform: 'none'
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
