import chai from 'chai';
import ceil from '../src/ceil.js';
const expect = chai.expect;

describe('Ceil', () => {
    it('Test with valid double number and positive precision', () => {
        expect(ceil(4.006)).to.equal(5);
    });
    it('Test with valid double number and zero precision', () => {
        expect(ceil(6.004, 2)).to.equal(6.01);
    });
    it('Test with valid number and negative precision', () => {
        expect(ceil(6040, -2)).to.equal(6100);
    });
});
