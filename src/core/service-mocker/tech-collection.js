// @scripts
import { config } from '../../config';
import { createMockResponse } from '../../util';

export const mockGetTechCollectionSvc = (mockAdapter) => {
    const url = config.services.tech.collection;
    mockAdapter.onGet(url).reply(() => createMockResponse({
        data: config.mockData.techCollectionSvcResponse,
        message: null,
        messageType: null,
        success: true
    }));
};
