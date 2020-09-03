// @scripts
import { removeAccents } from './string';

/**
 * Sorts an array by a property.
 *  - The sort is case insensitive
 *  - The sort is accent insensitive.
 * @param {?string} sortDirection - 'asc' or 'desc'.
 * @param {string} sortKey - Property name to sort the array.
 * @param {Object[]} source - The array to be sorted.
 * @returns {Object[]}
 */
export const sortArray = ({
    sortDirection = 'asc',
    sortKey,
    source
}) => {
    if (!source || source.length <= 1) {
        return source;
    }

    const sortedArray = [...source];

    sortedArray.sort((i1, i2) => {
        const item1Val = i1 && typeof i1 === 'object'
            ? String(i1[sortKey])
            : '';
        const unaccentItem1Val = removeAccents(item1Val);
        const lowerCaseItem1Val = unaccentItem1Val.toLowerCase();

        const item2Val = i2 && typeof i2 === 'object'
            ? String(i2[sortKey])
            : '';
        const unaccentItem2Val = removeAccents(item2Val);
        const lowerCaseItem2Val = unaccentItem2Val.toLowerCase();

        if (lowerCaseItem1Val > lowerCaseItem2Val) {
            return sortDirection === 'asc' ? 1 : -1;
        } if (lowerCaseItem1Val < lowerCaseItem2Val) {
            return sortDirection === 'asc' ? -1 : 1;
        }
        return 0;
    });

    return sortedArray;
};
