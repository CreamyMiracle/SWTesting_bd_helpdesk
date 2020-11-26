import chai from 'chai';
import reduce from '../src/reduce.js';
const expect = chai.expect;

describe('Reduce', () => {
    it('test with known array and its reduced value', () => {
        expect(
            reduce([
                [0, 1],
                [2, 3],
                [4, 5],
            ])
                .sort((a, b) => a - b)
                .to.equal([0, 1, 2, 3, 4, 5]),
        );
    });

    it('test with known object and its reduced value', () => {
        expect(
            reduce(
                { a: 1, b: 2, c: 1 },
                function (result, value, key) {
                    (result[value] || (result[value] = [])).push(key);
                    return result;
                },
                {},
            ),
        ).to.equal({ 1: ['a', 'c'], 2: ['b'] });
    });
});
