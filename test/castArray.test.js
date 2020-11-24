import chai from 'chai';
import castArray from '../src/castArray.js';
const expect = chai.expect;

describe('Cast array', () => {
    it('casts any characters to array', () => {
        expect(castArray('a')).to.be.an('array');
        expect(castArray('a')).to.have.property('length', 1);
    });

    it('casts array to array', () => {
        expect(castArray(['a', 'b', 'c'])).to.deep.equal(['a', 'b', 'c']);
        expect(castArray(['a', 'b', 'c'])).to.have.property('length', 3);
        expect(castArray(['a', 'b', 'c'])).to.not.be.empty;
    });

    it('casts empty array to array', () => {
        expect(castArray([])).to.be.an('array').that.is.empty;
    });
});
