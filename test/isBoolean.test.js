import chai from 'chai';
import ib from '../src/isBoolean.js';
const expect = chai.expect;

describe('IsBoolean', () => {
    it('Test with values known to be booleans', () => {
        expect(ib(false)).to.be.true;
        expect(ib(true)).to.be.true;
        expect(ib(1)).to.be.true;
        expect(ib(0)).to.be.true;
    });

    it('Test with values known not to be booleans', () => {
        expect(ib(() => 'moi')).to.be.false;
        expect(ib('sana')).to.be.false;
    });

    it('Test with Null', () => {
        expect(ib(null)).to.be.false;
    });
});
