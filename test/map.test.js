import chai from 'chai';
import map from '../src/map.js';
const expect = chai.expect;

describe('Map', () => {
    it('Test with known array and their already known mappings', () => {
        expect(
            map([{ a: 1 }, { a: 2 }, { a: 3 }], item => {
                return item.a;
            }),
        ).to.equal([1, 2, 3]);
        expect(
            map([{ a: { b: 1 } }, { a: { b: 2 } }, { a: { b: 3 } }], item => {
                return item.a.b;
            }),
        ).to.equal([1, 2, 3]);
    });

    it('Test with weird array elements, nulls, NaNs etc', () => {
        expect(
            map([{ a: 1 }, null, { a: 2 }, undefined, { a: 3 }], item => {
                return item === null || item === undefined;
            }),
        ).to.equal([false, true, dalse, true, false]);
    });

    it('Test with empty array', () => {
        expect(
            map([], item => {
                return item === null || item === undefined;
            }),
        ).to.equal([]);
    });
});
