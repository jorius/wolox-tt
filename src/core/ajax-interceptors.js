// @packages
import axios from 'axios';

// @scripts
import { config } from '../config';
import { printError } from '../util';
import { constants } from './constants';

/**
 * @param {Object} environment - Environment settings.
 * @returns {boolean}
 */
const shouldDisplayLoadingPage = (environment) =>
    !environment.isUnitTest && config.settings.ajaxInterceptors.showLoadingPage;

/**
 * @param {Object} environment - Environment settings.
 * @returns {boolean}
 */
const shouldDisplayNotifications = (environment) =>
    !environment.isUnitTest && config.settings.ajaxInterceptors.showNotifications;

/**
 * @param {Object} error - Error object received from axios instance.
 * @returns {Promise}
 */
const handleError = (error, environment, globalUI) => {
    globalUI.hideLoadingPage();

    if (shouldDisplayNotifications(environment)) {
        // globalUI.showToastNotificationError(
        //     error.message || error
        // );
        globalUI.showToastNotificationError(
            config.text.common.unexpectedError
        );
    }

    if (!environment.isUnitTest) {
        printError(error);
        printError(JSON.stringify(error));
    }

    return Promise.reject(error);
};

const addRequestInterceptors = (environment, globalUI, store) => {
    axios.interceptors.request.use(
        (request) => {
            globalUI.hideToastNotification();

            const { account: { accessToken } } = store.getState().user;

            if (accessToken) {
                request.headers.Authorization = `Bearer ${accessToken}`;
            }

            if (shouldDisplayLoadingPage(environment)) {
                globalUI.showLoadingPage();
            }

            return request;
        },
        (error) => handleError(error, environment, globalUI)
    );
};

const addResponseInterceptors = (environment, globalUI) => {
    axios.interceptors.response.use(
        (response) => {
            globalUI.hideLoadingPage();

            const responseSuccess = response.data.success;
            const responseError = response.data.error;
            const responseData = response.data.result || response.data.data;
            const responseMessage = responseError
                ? response.data.error.message
                : null;
            const responseMessageType = responseSuccess && !responseError
                ? constants.notificationType.SUCCESS
                : constants.notificationType.ERROR;

            const displayNotification = shouldDisplayNotifications(environment) && Boolean(responseMessage);

            if (displayNotification) {
                globalUI.showToastNotification({
                    msg: responseMessage,
                    type: responseMessageType
                });
            }

            if (!responseSuccess) {
                return Promise.reject(responseMessage);
            }

            return responseData;
        },
        (error) => handleError(error, environment, globalUI)
    );
};

export const addAjaxInterceptors = ({ environment, globalUI, store }) => {
    addRequestInterceptors(environment, globalUI, store);
    addResponseInterceptors(environment, globalUI);
};
