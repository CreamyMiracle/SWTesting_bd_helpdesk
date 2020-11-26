import chai from 'chai';
import iol from '../src/isObjectLike.js';
const expect = chai.expect;

describe('IsObjectLike', () => {
    it('checks with values known to be object like', () => {
        expect(iol({})).to.be.true;
        expect(iol([1, 2, 3])).to.be.true;
        expect(iol(Function)).to.be.true;
    });

    it('checks with values known not to be object like', () => {
        expect(iol(null)).to.be.false;
        expect(iol(0)).to.be.false;
        expect(iol(undefined)).to.be.false;
    });
});
