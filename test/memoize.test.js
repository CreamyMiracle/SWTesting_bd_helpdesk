import chai from 'chai';
import memoize from '../src/memoize.js';
const expect = chai.expect;

describe('Memoize', () => {
    it('checks against known values', () => {
        let memoized = memoize(function (a, b) {
            return a + b;
        });

        expect(memoized(1, 2)).to.equal(3);
    });

    it('change values and checks memoized values', () => {
        let memoized = memoize(function (a, b) {
            return a + b;
        });

        expect(memoized(1, 2)).to.equal(3);
        expect(memoized(100, 200)).to.equal(3);
    });
});
