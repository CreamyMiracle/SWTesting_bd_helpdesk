import chai from 'chai';
import toNumber from '../src/toNumber.js';
const expect = chai.expect;

describe('ToNumber', () => {
    it('converts positive value to integer', () => {
        expect(toNumber(1.1)).to.equal(1.1);
        expect(toNumber(1.6)).to.equal(1.6);
        expect(toNumber(4)).to.equal(4);
    });

    it('converts negative value to integer', () => {
        expect(toNumber(-1.1)).to.equal(-1.1);
        expect(toNumber(-1.6)).to.equal(-1.6);
        expect(toNumber('-4')).to.equal(-4);
    });

    it('converts zero value to integer', () => {
        expect(toNumber(0.0)).to.equal(0);
        expect(toNumber(0)).to.equal(0);
        expect(toNumber(-0)).to.equal(0);
    });

    it('converts NaN and null to integer', () => {
        expect(toNumber(null)).to.equal(0);
        expect(toNumber(NaN)).to.equal(0);
    });

    it('converts integer higher than MAX_INTEGER or lower than -MAX_INTEGER to integer', () => {
        expect(toNumber(Number.MAX_VALUE + Number.MAX_VALUE)).to.equal(Number.MAX_VALUE);
        expect(toNumber(-Number.MAX_VALUE - Number.MAX_VALUE)).to.equal(-Number.MAX_VALUE);
    });
});
