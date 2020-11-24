import chai from 'chai';
import toInteger from '../src/toInteger.js';
const expect = chai.expect;

describe('To Integer', () => {
    it('converts positive value to integer', () => {
        expect(toInteger(1.1)).to.equal(1);
        expect(toInteger(1.6)).to.equal(1);
        expect(toInteger(4)).to.equal(4);
    });

    it('converts negative value to integer', () => {
        expect(toInteger(-1.1)).to.equal(-1);
        expect(toInteger(-1.6)).to.equal(-1);
        expect(toInteger(-4)).to.equal(-4);
    });

    it('converts zero value to integer', () => {
        expect(toInteger(0.0)).to.equal(0);
        expect(toInteger(0)).to.equal(0);
        expect(toInteger(-0)).to.equal(0);
    });

    it('converts NaN and null to integer', () => {
        expect(toInteger(null)).to.equal(0);
        expect(toInteger(NaN)).to.equal(0);
    });

    it('converts integer higher than MAX_INTEGER or lower than -MAX_INTEGER to integer', () => {
        expect(toInteger(Number.MAX_VALUE + Number.MAX_VALUE)).to.equal(Number.MAX_VALUE);
        expect(toInteger(-Number.MAX_VALUE - Number.MAX_VALUE)).to.equal(-Number.MAX_VALUE);
    });
});
