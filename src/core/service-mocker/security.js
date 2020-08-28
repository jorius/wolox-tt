// @scripts
import { config } from '../../config';
import { constants } from '../constants';

import {
    createMockResponse,
    decodeBase64String,
    getMockParams
} from '../../util';

export const mockUserLoginSvc = (mockAdapter) => {
    const url = config.services.user.login;
    mockAdapter.onPost(url).reply((call) => {
        const { user, password } = getMockParams(call);
        const { loginEmail, loginPassword } = config.settings.serviceMocker;

        const success = (user === loginEmail)
        && (password === decodeBase64String(loginPassword));

        return createMockResponse({
            data: success ? config.mockData.userLoginSvcResponse : null,
            message: success ? null : config.text.loginPage.invalidCredentials,
            messageType: success ? null : constants.notificationType.ERROR,
            success
        });
    });
};

export const mockUserUpdateLanguageSvc = (mockAdapter) => {
    const url = config.services.user.updateLanguage;

    mockAdapter.onPost(url).reply((call) => {
        const { languageCode } = getMockParams(call);

        return createMockResponse({ data: languageCode });
    });
};
