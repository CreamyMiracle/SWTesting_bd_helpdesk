import chai from 'chai';
import at from '../src/at.js';
const expect = chai.expect;

describe('At', () => {
    it('Test with correct index', () => {
        expect(at({ a: [{ b: { c: 3 } }, 4] }, ['a[0].b.c', 'a[1]'])).to.equal([3, 4]);
    });

    it('Test with negative (incorrect index)', () => {
        expect(at({ a: [{ b: { c: 3 } }, 4] }, ['a[-1].b.c', 'a[3]'])).to.not.equal([3, 4]);
    });

    it('Test with index that exceeds max element count', () => {
        expect(at({ a: [{ b: { c: 3 } }, 4] }, ['a[1].b.c', 'a[2]'])).to.equal([]);
    });
});
