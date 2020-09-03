// @scripts
import { config } from '../../config';
import { sortArray } from '../../util';
import { techCollectionReducer } from '../../redux/reducers/tech-collection';
import {
    FILTER_TECH_COLLECTION,
    GET_TECH_COLLECTION,
    SORT_TECH_COLLECTION
} from '../../redux';

test('techCollectionReducer: FILTER_TECH_COLLECTION (keywords available)', () => {
    const action = {
        type: FILTER_TECH_COLLECTION,
        payload: { keywords: 'angular' }
    };

    const initialState = {
        ...config.initialState.techCollection,
        items: config.mockData.techCollectionSvcResponse
    };

    const newState = techCollectionReducer(initialState, action);

    const filteredItems = initialState.items.map((item) => {
        const checkIfKeyWordExistsInItem = (itemKey, itemObj) =>
            itemObj[itemKey].toLowerCase().includes(action.payload.keywords.toLowerCase());

        const rules = [
            checkIfKeyWordExistsInItem('author', item),
            checkIfKeyWordExistsInItem('language', item),
            checkIfKeyWordExistsInItem('license', item),
            checkIfKeyWordExistsInItem('tech', item),
            checkIfKeyWordExistsInItem('type', item),
            checkIfKeyWordExistsInItem('year', item)
        ];

        const rulesPassed = rules.some((rule) => rule);

        if (rulesPassed) {
            return { ...item, flagged: true };
        }

        return { ...item, flagged: false };
    });

    const expectedState = {
        ...config.initialState.techCollection,
        items: sortArray({
            sortDirection: 'desc',
            sortKey: 'flagged',
            source: filteredItems
        })
    };
    expect(newState).toEqual(expectedState);
});

test('techCollectionReducer: FILTER_TECH_COLLECTION (keywords unavailable)', () => {
    const action = {
        type: FILTER_TECH_COLLECTION,
        payload: {}
    };
    const initialState = {
        ...config.initialState.techCollection,
        items: config.mockData.techCollectionSvcResponse
    };
    const newState = techCollectionReducer(initialState, action);
    expect(newState).toEqual(initialState);
});

test('techCollectionReducer: GET_TECH_COLLECTION', () => {
    const action = {
        type: GET_TECH_COLLECTION,
        payload: config.mockData.techCollectionSvcResponse
    };
    const initialState = {
        ...config.initialState.techCollection,
        items: config.mockData.techCollectionSvcResponse.map((item, index) => ({ ...item, index })),
        totalCount: config.mockData.techCollectionSvcResponse.length
    };
    const newState = techCollectionReducer(config.initialState.techCollection, action);
    expect(newState).toEqual(initialState);
});

test('techCollectionReducer: SORT_TECH_COLLECTION (asc)', () => {
    const action = {
        type: SORT_TECH_COLLECTION,
        payload: 'asc'
    };
    const initialState = {
        ...config.initialState.techCollection,
        items: sortArray({
            sortDirection: action.payload,
            sortKey: 'tech',
            source: config.mockData.techCollectionSvcResponse
        }),
        sortDirection: action.payload
    };
    const newState = techCollectionReducer({
        ...config.initialState.techCollection,
        items: config.mockData.techCollectionSvcResponse,
        sortDirection: 'default'
    }, action);
    expect(newState).toEqual(initialState);
});

test('techCollectionReducer: SORT_TECH_COLLECTION (desc)', () => {
    const action = {
        type: SORT_TECH_COLLECTION,
        payload: 'desc'
    };
    const initialState = {
        ...config.initialState.techCollection,
        items: sortArray({
            sortDirection: action.payload,
            sortKey: 'tech',
            source: config.mockData.techCollectionSvcResponse
        }),
        sortDirection: action.payload
    };
    const newState = techCollectionReducer({
        ...config.initialState.techCollection,
        items: config.mockData.techCollectionSvcResponse,
        sortDirection: 'default'
    }, action);
    expect(newState).toEqual(initialState);
});

test('techCollectionReducer: SORT_TECH_COLLECTION (default)', () => {
    const action = {
        type: SORT_TECH_COLLECTION,
        payload: 'default'
    };
    const initialState = {
        ...config.initialState.techCollection,
        items: config.mockData.techCollectionSvcResponse.map((item, index) =>
            ({ ...item, index })).sort((a, b) => a.index - b.index),
        sortDirection: action.payload
    };
    const newState = techCollectionReducer({
        ...config.initialState.techCollection,
        items: config.mockData.techCollectionSvcResponse.map((item, index) => ({ ...item, index })),
        sortDirection: 'default'
    }, action);

    expect(newState).toEqual(initialState);
});
