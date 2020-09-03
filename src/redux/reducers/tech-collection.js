// @packages
import { combineReducers } from 'redux';

// @scripts
import { config } from '../../config';
import { sortArray } from '../../util';

import {
    FILTER_TECH_COLLECTION,
    GET_TECH_COLLECTION,
    SORT_TECH_COLLECTION
} from '../actions';

/**
 * @returns {{
 *   author: string,
 *   flagged: boolean,
 *   language: string,
 *   license: string,
 *   logo: string,
 *   tech: string,
 *   type: string,
 *   year: string
 * }[]}
 */
export const itemsReducer = (
    state = config.initialState.techCollection.items, action
) => {
    switch (action.type) {
        case FILTER_TECH_COLLECTION:
            const { keywords } = action.payload;
            if (keywords) {
                const filteredTechCollection = state.map((item) => {
                    const checkIfKeyWordExistsInItem = (itemKey, itemObj) =>
                        itemObj[itemKey].toLowerCase().includes(keywords.toLowerCase());

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

                const sortedTechCollection = sortArray({
                    sortDirection: 'desc',
                    sortKey: 'flagged',
                    source: filteredTechCollection
                });

                return sortedTechCollection;
            }

            return state.map((item) => {
                delete item.flagged;
                return item;
            });
        case GET_TECH_COLLECTION:
            return [...action.payload.map((item, index) => ({ ...item, index }))];
        case SORT_TECH_COLLECTION:
            const sortDirection = action.payload;

            if (sortDirection === 'default') {
                return state.map((item) => item).sort((a, b) => a.index - b.index);
            }

            return sortArray({
                sortDirection: action.payload,
                sortKey: 'tech',
                source: state
            });
        default:
            return state;
    }
};

const sortDirectionReducer = (
    state = config.initialState.techCollection.sortDirection, action
) => {
    switch (action.type) {
        case SORT_TECH_COLLECTION:
            return action.payload;
        default:
            return state;
    }
};

/**
 * @returns {number}
 */
const totalCountReducer = (
    state = config.initialState.techCollection.totalCount, action
) => {
    switch (action.type) {
        case GET_TECH_COLLECTION:
            return action.payload.length;
        default:
            return state;
    }
};

export const techCollectionReducer = combineReducers({
    items: itemsReducer,
    sortDirection: sortDirectionReducer,
    totalCount: totalCountReducer
});
