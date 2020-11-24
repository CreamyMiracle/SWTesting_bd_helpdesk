import chai from 'chai';
import compact from '../src/compact.js';
const expect = chai.expect;

describe('Compact', () => {
    it('removes falsey values from fully falsey array', () => {
        expect(compact([false, null, 0, '', undefined, NaN])).to.be.an('array').that.is.empty;
    });

    it('removes falsey values from fully truely array', () => {
        expect(compact([true, 1])).to.be.an('array');
        expect(compact([true, 1])).to.have.property('length', 2);
    });

    it('removes falsey values from array with mixed falsey and truely values', () => {
        expect(compact([true, 1, false, null, 0, '', undefined, NaN])).to.be.an('array');
        expect(compact([true, 1, false, null, 0, '', undefined, NaN])).to.have.property('length', 2);
    });
});
