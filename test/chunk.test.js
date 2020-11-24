import chai from 'chai';
import chunk from '../src/chunk.js';
const expect = chai.expect;

describe('Chunk', () => {
    it('creates an array of even length', () => {
        expect(chunk(['a', 'b', 'c', 'd'], 2)).to.be.an('array');
        expect(chunk(['a', 'b', 'c', 'd'], 2)).to.have.property('length', 2);
        expect(chunk(['a', 'b', 'c', 'd'], 2)).to.deep.equal([
            ['a', 'b'],
            ['c', 'd'],
        ]);
    });

    it('creates an array of odd length', () => {
        expect(chunk(['a', 'b', 'c', 'd', 'e'], 2)).to.be.an('array');
        expect(chunk(['a', 'b', 'c', 'd', 'e'], 2)).to.have.property('length', 3);
        expect(chunk(['a', 'b', 'c', 'd', 'e'], 2)).to.deep.equal([['a', 'b'], ['c', 'd'], ['e']]);
    });

    it('creates an empty array', () => {
        expect(chunk([])).to.be.an('array').that.is.empty;
    });
});
