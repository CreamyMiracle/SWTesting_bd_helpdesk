import chai from 'chai';
import slice from '../src/slice.js';
const expect = chai.expect;

describe('Slice', () => {
    it('slices array into smaller array with valid slices', () => {
        expect(slice([1, 2, 3, 4])).to.deep.equal([1, 2, 3, 4]);
        expect(slice([1, 2, 3, 4], 2)).to.deep.equal([3, 4]);
        expect(slice([1, 2, 3, 4], 2, 3)).to.deep.equal([3]);
    });

    it('slices array into smaller array with negative start position', () => {
        expect(slice([1, 2, 3, 4])).to.deep.equal([1, 2, 3, 4]);
        expect(slice([1, 2, 3, 4], 2)).to.deep.equal([3, 4]);
        expect(slice([1, 2, 3, 4], 2, 3)).to.deep.equal([3]);
    });

    it('slices array into smaller array with negative end position', () => {
        expect(slice([1, 2, 3, 4], 0, -2)).to.deep.equal([1, 2]);
    });

    it('slices array into smaller array with zero start and end position', () => {
        expect(slice([1, 2, 3, 4], 0, 0)).to.be.an('array').that.is.empty;
    });

    it('slices array into smaller array with higher start than end position', () => {
        expect(slice([1, 2, 3, 4], 3, 2)).to.be.an('array').that.is.empty;
    });
});
