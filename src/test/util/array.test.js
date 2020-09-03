// @scripts
import { sortArray } from '../../util';

describe('sortArray', () => {
    const source = [
        { name: 'Andrés' },
        { name: 'León' },
        { name: 'Ana' },
        { name: 'Ámeno' }
    ];

    test('sortArray (null source)', () => {
        const result = sortArray({
            source: null
        });
        const expected = null;
        expect(result).toEqual(expected);
    });

    test('sortArray (default ascending)', () => {
        const result = sortArray({
            sortKey: 'name',
            source
        });
        const expected = [source[3], source[2], source[0], source[1]];
        expect(result).toEqual(expected);
    });

    test('sortArray (descending)', () => {
        const result = sortArray({
            sortDirection: 'desc',
            sortKey: 'name',
            source
        });
        const expected = [source[1], source[0], source[2], source[3]];
        expect(result).toEqual(expected);
    });

    test('sortArray (with a null element)', () => {
        const result = sortArray({
            sortDirection: 'desc',
            sortKey: 'name',
            source: [null, ...source]
        });
        const expected = [source[1], source[0], source[2], source[3], null];
        expect(result).toEqual(expected);
    });

    test('sortArray (with two null elements)', () => {
        const result = sortArray({
            sortDirection: 'desc',
            sortKey: 'name',
            source: [null, ...source, null]
        });
        const expected = [source[1], source[0], source[2], source[3], null, null];
        expect(result).toEqual(expected);
    });
});
