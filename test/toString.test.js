import chai from 'chai';
import toString from '../src/toString.js';
const expect = chai.expect;

describe('To String', () => {
    it('converts string to string', () => {
        expect(toString('abc')).to.equal('abc');
        expect(toString('')).to.be.a('string').that.is.empty;
    });

    it('converts null or undefined to string', () => {
        expect(toString(null)).to.be.a('string').that.is.empty;
        expect(toString(undefined)).to.be.a('string').that.is.empty;
    });

    it('converts positive and negative numerical values to string', () => {
        expect(toString(10)).to.equal('10');
        expect(toString(0)).to.equal('0');
        expect(toString(-10)).to.equal('-10');
    });
});
