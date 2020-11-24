import chai from 'chai';
import isSymbol from '../src/isSymbol.js';
const expect = chai.expect;

describe('Is Symbol', () => {
    it('checks with known symbol values', () => {
        expect(isSymbol(Symbol.iterator)).to.be.true;
    });

    it('checks with known non-symbol values', () => {
        expect(isSymbol(null)).to.be.false;
        expect(isSymbol('abc')).to.be.false;
        expect(isSymbol(undefined)).to.be.false;
    });
});
