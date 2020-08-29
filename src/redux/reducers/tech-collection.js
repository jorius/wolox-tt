// @packages
import { combineReducers } from 'redux';

// @scripts
import { GET_TECH_COLLECTION } from '../actions';
import { config } from '../../config';

/**
 * @returns {string[]}
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
 * @returns {boolean}
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
