// @packages
import { combineReducers } from 'redux';

// @scripts
import { appVersionReducer } from './app-version';
import { loadingPageReducer } from './loading-page';
import { mainMenuReducer } from './main-menu';
import { modalDialogReducer } from './modal-dialog';
import { techCollectionReducer } from './tech-collection';
import { toastNotificationReducer } from './toast-notification';
import { userReducer } from './user';

const appReducer = combineReducers({
    appVersion: appVersionReducer,
    loadingPage: loadingPageReducer,
    mainMenu: mainMenuReducer,
    modalDialog: modalDialogReducer,
    techCollection: techCollectionReducer,
    toastNotification: toastNotificationReducer,
    user: userReducer
});

/**
 * We wrap the appReducer into this rootReducer in order to easily
 * handle the LOGOUT event, on which we should reset the state back
 * to the to initial state.
 * @param {Object} state - Current application state.
 * @param {Object} action - Current dispatched action.
 * @returns {Object}
 */
export const rootReducer = (state, action) => {
    const currentState = (action.type === 'LOGOUT')
        ? undefined
        : state;
    return appReducer(currentState, action);
};
