// @packages
import { combineReducers } from 'redux';

// @scripts
import {
    COLLAPSE_MENU_ITEM,
    COLLAPSE_MAIN_MENU,
    EXPAND_MENU_ITEM,
    EXPAND_MAIN_MENU
} from '../actions';

import { config } from '../../config';

/**
 * @returns {string[]}
 */
export const expandedItemsReducer = (
    state = config.initialState.mainMenu.expandedItems, action
) => {
    switch (action.type) {
        case EXPAND_MENU_ITEM:
            return [...state, action.payload];
        case COLLAPSE_MENU_ITEM:
            return state.filter((item) => item !== action.payload);
        default:
            return state;
    }
};

/**
 * @returns {boolean}
 */
const isExpandedReducer = (
    state = config.initialState.mainMenu.isExpanded, action
) => {
    switch (action.type) {
        case EXPAND_MAIN_MENU:
            return true;
        case COLLAPSE_MAIN_MENU:
            return false;
        default:
            return state;
    }
};

export const mainMenuReducer = combineReducers({
    expandedItems: expandedItemsReducer,
    isExpanded: isExpandedReducer
});
