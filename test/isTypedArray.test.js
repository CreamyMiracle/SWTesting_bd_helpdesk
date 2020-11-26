import chai from 'chai';
import ita from '../src/isTypedArray.js';
const expect = chai.expect;

describe('IsTypedArray', () => {
    it('checks with known to be typed arrays', () => {
        expect(ita(new Uint8Array())).to.be.true;
        expect(ita(new Float64Array())).to.be.true;
    });

    it('checks with known to be non typed arrays', () => {
        expect(ita([])).to.be.false;
    });
});
