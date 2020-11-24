import chai from 'chai';
import defaultTo from '../src/defaultTo.js';
const expect = chai.expect;

describe('Default to', () => {
    it('checks if non-NaN and non-null default value is returned', () => {
        expect(defaultTo(1, 10)).to.equal(1);
    });

    it('checks if NaN and null default value is returned', () => {
        expect(defaultTo(NaN, 10)).to.equal(10);
        expect(defaultTo(null, 10)).to.equal(10);
    });

    it('checks if NaN and null default value is returned', () => {
        expect(defaultTo(NaN, Nan)).to.equal(NaN);
        expect(defaultTo(null, null)).to.equal(null);
        expect(defaultTo(1, Nan)).to.equal(1);
        expect(defaultTo(1, null)).to.equal(1);
    });
});
