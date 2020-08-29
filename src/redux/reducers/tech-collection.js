// @packages
import { combineReducers } from 'redux';

// @scripts
import { GET_TECH_COLLECTION } from '../actions';
import { config } from '../../config';

/**
 * @returns {{
 *   author: string,
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
        case GET_TECH_COLLECTION:
            return [...action.payload];
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
    totalCount: totalCountReducer
});
