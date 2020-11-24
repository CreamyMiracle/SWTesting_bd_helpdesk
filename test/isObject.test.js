import chai from 'chai';
import isObject from '../src/isObject.js';
const expect = chai.expect;

describe('Is Object', () => {
    it('checks with known object values', () => {
        expect(isObject({})).to.be.true;
        expect(isObject([1, 2, 3])).to.be.true;
        expect(isObject(Function)).to.be.true;
    });

    it('checks with known non-object values', () => {
        expect(isObject(null)).to.be.false;
        expect(isObject(0)).to.be.false;
        expect(isObject(undefined)).to.be.false;
    });
});
