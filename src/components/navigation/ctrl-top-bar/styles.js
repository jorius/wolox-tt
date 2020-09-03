/* eslint-disable max-len */

// @scripts
import globals, { zIndex } from '../../../styles/globals';

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
    searchTextField: {
        marginBottom: -5,
        marginLeft: 40,
        paddingRight: 55,
        marginTop: 15,
        '& input.MuiInputBase-input, label.Mui-focused, label.MuiInputLabel-root, label.MuiInputLabel-formControl, .MuiInput-underline:after, span.MuiIcon-root': {
            color: theme.palette.common.white
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: theme.palette.common.white
            },
            '&:hover fieldset': {
                borderColor: theme.palette.common.white
            },
            '&.Mui-focused fieldset': {
                borderColor: theme.palette.common.white
            }
        }
    },
    sortIcon: {
        color: theme.palette.common.white
    },
    sortIconSelected: {
        backgroundColor: '#175091'
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
