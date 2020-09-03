// @packages
import axios from 'axios';

// @scripts
import { config } from '../../config';

// @constants
export const FILTER_TECH_COLLECTION = 'FILTER_TECH_COLLECTION';
export const GET_TECH_COLLECTION = 'GET_TECH_COLLECTION';
export const SORT_TECH_COLLECTION = 'SORT_TECH_COLLECTION';

/**
 * @param {{
 *   keywords?: string
 * }}
 */
export const filterTechCollection = ({ keywords }) => ({
    type: FILTER_TECH_COLLECTION,
    payload: { keywords }
});

export const getTechCollection = () => (dispatch) => axios
    .get(config.services.tech.collection)
    .then((response) => {
        dispatch({
            type: GET_TECH_COLLECTION,
            payload: response
        });
    })
    .catch((error) => Promise.reject(error));

/**
 * @param {string} sortDirection
 */
export const sortTechCollection = (sortDirection) =>
    ({
        type: SORT_TECH_COLLECTION,
        payload: sortDirection
    });
