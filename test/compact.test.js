import chai from 'chai';
import compact from '../src/chunk.js';
const expect = chai.expect;

describe('Chunk', () => {
    it('creates an array of even length', () => {
        expect(compact([])).to.be.an('array').that.is.empty;
    });
});
