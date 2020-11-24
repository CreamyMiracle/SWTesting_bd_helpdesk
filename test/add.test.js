import chai from 'chai';
import add from '../src/add.js';
const expect = chai.expect;

describe('Add', () => {
    it('adds positive number to positive number', () => {
        expect(add(3, 6)).to.equal(9);
    });

    it('adds negative number to negative number', () => {
        expect(add(-3, -6)).to.equal(-9);
    });

    it('adds positive number to negative number', () => {
        expect(add(3, -6)).to.equal(-3);
    });

    it('adds numerical value to non number', () => {
        let a = [1, 2, 3];
        let b = true;
        expect(add(3, a)).to.throw();
        expect(add(3, b)).to.throw();
    });
});
