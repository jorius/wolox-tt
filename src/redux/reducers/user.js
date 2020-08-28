// @packages
import { combineReducers } from 'redux';

// @scripts
import { LOGIN, REMEMBER_ME, UPDATE_LANGUAGE } from '../actions';
import { config } from '../../config';

/**
 * @returns {{email: string, name: string, permissions: string[]}}
 */
const accountReducer = (
    state = config.initialState.user.account, action
) => {
    switch (action.type) {
        case LOGIN:
            const { email, name, permissions } = action.payload;
            return {
                email,
                name,
                permissions
            };
        default:
            return state;
    }
};

/**
 * @returns {string}
 */
const languageCodeReducer = (
    state = config.initialState.user.languageCode, action
) => {
    switch (action.type) {
        case LOGIN:
            return action.payload.languageCode;
        case UPDATE_LANGUAGE:
            return action.payload;
        default:
            return state;
    }
};

/**
 * @returns {boolean}
 */
const rememberMeReducer = (
    state = config.initialState.user.rememberMe, action
) => {
    switch (action.type) {
        case REMEMBER_ME:
            return action.payload;
        default:
            return state;
    }
};

export const userReducer = combineReducers({
    account: accountReducer,
    languageCode: languageCodeReducer,
    rememberMe: rememberMeReducer
});
