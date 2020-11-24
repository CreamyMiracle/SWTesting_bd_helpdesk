import chai from 'chai';
import difference from '../src/difference.js';
const expect = chai.expect;

describe('Difference', () => {
    it('checks if two arrays have known differences', () => {
        expect(difference([1, 2, 3], [1, 2, 3])).to.be.an('array').that.is.empty;
        expect(difference([1, 2, 3], [1])).to.deep.equal([2, 3]);
        expect(difference([1, 2, 3], [2, 3])).to.deep.equal([1]);
    });

    it('checks if array and non array have differences', () => {
        expect(difference([1, 2, 3], 1)).to.deep.equal([1, 2, 3]);
        expect(difference([1, 2, 3], null)).to.deep.equal([1, 2, 3]);
        expect(difference([1, 2, 3], [null])).to.deep.equal([1, 2, 3]);
    });

    it('checks if multiple arrays have known differences', () => {
        expect(difference([1, 2, 3], [3], [2], [1])).to.be.an('array').that.is.empty;
        expect(difference([1, 2, 3], [2], [3])).to.deep.equal([1]);
    });
});
