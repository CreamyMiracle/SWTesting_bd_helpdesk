import chai from 'chai';
import drop from '../src/drop.js';
const expect = chai.expect;

describe('Drop', () => {
    it('drops elements from beginning of array without telling how many', () => {
        expect(drop([1, 2, 3])).to.deep.equal([2, 3]);
        expect(drop([1])).to.be.an('array').that.is.empty;
    });

    it('drops n-1 elements from beginning of array of length n', () => {
        expect(drop([1, 2, 3, 4], 3)).to.deep.equal([4]);
        expect(drop([1], 0)).to.deep.equal([1]);
    });

    it('drops more elements from beginning than array has', () => {
        expect(drop([1, 2, 3, 4], 10)).to.be.an('array').that.is.empty;
    });

    it('drops negative number of elements from beginning', () => {
        expect(drop([1, 2, 3, 4], -1)).to.deep.equal([1, 2, 3, 4]);
    });
});
