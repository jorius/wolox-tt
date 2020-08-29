// @packages
import axios from 'axios';

// @scripts
import { config } from '../../config';

// @constants
export const GET_TECH_COLLECTION = 'GET_TECH_COLLECTION';

export const getTechCollection = () => (dispatch) => axios
    .get(config.services.tech.collection)
    .then((response) => {
        dispatch({
            type: GET_TECH_COLLECTION,
            payload: response
        });
    })
    .catch((error) => Promise.reject(error));
