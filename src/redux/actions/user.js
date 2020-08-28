// @packages
import axios from 'axios';

// @scripts
import { config } from '../../config';

// @constants
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const REMEMBER_ME = 'REMEMBER_ME';
export const UPDATE_LANGUAGE = 'UPDATE_LANGUAGE';

/**
 * @param {boolean} rememberMe
 */
export const rememberMe = (rememberMe) =>
    ({
        type: REMEMBER_ME,
        payload: rememberMe
    });

/**
 * @param {string} user
 * @param {string} password
 */
export const login = ({ user, password }) =>
    (dispatch) => axios
        .post(config.services.user.login, {
            params: {
                user,
                password
            }
        })
        .then((response) => {
            dispatch({
                type: LOGIN,
                payload: response
            });
        })
        .catch((error) => Promise.reject(error));

export const logout = () =>
    ({
        type: LOGOUT
    });

/**
 * @param {string} languageCode - E.g: 'en', 'es'.
 */
export const updateLanguage = (languageCode) =>
    (dispatch) => axios
        .post(config.services.user.updateLanguage, {
            params: { languageCode }
        })
        .then((response) => {
            dispatch({
                type: UPDATE_LANGUAGE,
                payload: response
            });
        })
        .catch((error) => Promise.reject(error));
