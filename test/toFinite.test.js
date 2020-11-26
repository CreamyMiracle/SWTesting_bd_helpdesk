import chai from 'chai';
import toFinite from '../src/toFinite.js';
const expect = chai.expect;

const INFINITY = 1 / 0;
const MAX_INTEGER = 1.7976931348623157e308;

describe('ToFinite', () => {
    it('test with values more than max integer', () => {
        expect(toFinite(MAX_INTEGER * MAX_INTEGER)).to.equal(MAX_INTEGER);
        expect(toFinite(MAX_INTEGER + 1)).to.equal(MAX_INTEGER);
        expect(toFinite(INFINITY)).to.equal(MAX_INTEGER);
    });

    it('test with values less than max integer', () => {
        expect(toFinite(354)).to.equal(354);
        expect(toFinite(MAX_INTEGER - 1)).to.equal(MAX_INTEGER - 1);
    });

    it('test with null and zero', () => {
        expect(toFinite(null)).to.equal(0);
        expect(toFinite(0)).to.equal(0);
    });
});
