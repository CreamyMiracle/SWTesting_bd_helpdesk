import chai from 'chai';
import divide from '../src/divide.js';
const expect = chai.expect;

describe('Divide', () => {
    it('Divide', () => {
        expect(divide(10, 5)).to.equal(2);
        expect(divide(-10, 5)).to.equal(-2);
        expect(divide(5, 10)).to.equal(0.5);
        expect(divide(4, 0)).to.throw(new Error());
        expect(divide('moi', 0)).to.throw(new Error());
    });
});
