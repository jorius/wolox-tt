// @scripts
import { config } from '../../config';
import {
    FILTER_TECH_COLLECTION,
    GET_TECH_COLLECTION,
    SORT_TECH_COLLECTION,
    filterTechCollection,
    getTechCollection,
    sortTechCollection
} from '../../redux';

test('filterTechCollection', () => {
    const keywords = 'node';
    const actionCreator = filterTechCollection({ keywords });

    const expectedActions = [{
        type: FILTER_TECH_COLLECTION,
        payload: { keywords }
    }];
    return global.testDispatch(actionCreator, expectedActions);
});

test('getTechCollection, (http request success)', () => {
    const actionCreator = getTechCollection();
    const expectedActions = [{
        type: GET_TECH_COLLECTION,
        payload: config.mockData.techCollectionSvcResponse
    }];
    return global.testDispatch(actionCreator, expectedActions);
});

test('getTechCollection (http request fails)', () => {
    const actionCreator = getTechCollection();
    const expectedActions = [];
    return global.testDispatchWithNetworkError(actionCreator, expectedActions);
});

test('sortTechCollection', () => {
    const sortDirection = 'asc';
    const actionCreator = sortTechCollection(sortDirection);

    const expectedActions = [{
        type: SORT_TECH_COLLECTION,
        payload: sortDirection
    }];
    return global.testDispatch(actionCreator, expectedActions);
});
