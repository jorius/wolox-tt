// @packages
import { createMuiTheme } from '@material-ui/core/styles';

const color = {
    background: '#101430',
    black: '#000000',
    blue: '#3B86FF',
    onBackground: '#FFFFFF',
    primary: 'rgba(18, 30, 118, 0.05)',
    secondary: '#B46CEA',
    surface: '#F6F7FD',
    textDisabled: 'rgba(255, 255, 255, 0.12)',
    textHighEmphasis: 'rgba(0, 0, 0, 1)',
    textHint: 'rgba(0, 0, 0, 0.38)',
    textMediumEmphasis: 'rgba(0, 0, 0, 0.6)',
    white: '#FFFFFF'
};

export const theme = createMuiTheme({
    palette: {
        common: {
            black: color.black,
            blue: color.blue,
            white: color.white
        },
        text: {
            primary: color.textHighEmphasis,
            secondary: color.textMediumEmphasis,
            disabled: color.textDisabled,
            hint: color.textHint
        },
        background: {
            default: color.background,
            paper: color.surface
        }
    }
});
