import chai from 'chai';
import eq from '../src/eq.js';
const expect = chai.expect;

describe('Eq', () => {
    it('compares two same values', () => {
        expect(eq(1, 1)).to.be.true;
        expect(eq(0, 0)).to.be.true;
        expect(eq(-1, -1)).to.be.true;
    });

    it('compares two different values', () => {
        expect(eq(1, 3)).to.be.false;
        expect(eq(-1, -3)).to.be.false;
        expect(eq(-1, 3)).to.be.false;
    });

    it('compares non numerical values', () => {
        expect(eq(NaN, NaN)).to.be.true;
        const object = { a: 1 };
        const other = { a: 1 };
        expect(eq(object, other)).to.be.true;
        expect(eq(NaN, other)).to.be.false;
    });
});
