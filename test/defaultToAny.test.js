import chai from 'chai';
import defaultToAny from '../src/defaultToAny.js';
const expect = chai.expect;

describe('defaultToAny', () => {
    it('Default to first value', () => {
        expect(defaultToAny(5, 10, 20)).to.equal(5);
        expect(defaultToAny(undefined, undefined, 20)).to.equal(20);
        expect(defaultToAny(undefined, 10, 20)).to.equal(10);
        expect(defaultToAny(40, null, undefined)).to.equal(40);
    });
});
