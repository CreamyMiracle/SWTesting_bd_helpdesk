import chai from 'chai';
import ial from '../src/isArrayLike.js';
const expect = chai.expect;

describe('IsArrayLike', () => {
    it('Test with known array-like values', () => {
        expect(ial('joku teksti')).to.be.true;
        expect(ial([1, 2, 3])).to.be.true;
        expect(ial(['sana', 2])).to.be.true;
    });

    it('Test with known not-array-like values', () => {
        expect(ial(() => 1)).to.be.false;
    });
});
