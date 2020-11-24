import chai from 'chai';
import isBuffer from '../src/isBuffer.js';
const expect = chai.expect;

describe('Is Buffer', () => {
    it('checks with known buffer', () => {
        const buf1 = Buffer.from('abc');
        expect(isBuffer(buf1)).to.be.true;

        const buf2 = Buffer.alloc(15);
        expect(isBuffer(buf2)).to.be.true;
    });

    it('checks with known not buffer', () => {
        expect(isBuffer(1)).to.be.false;
        expect(isBuffer(null)).to.be.false;
        expect(isBuffer(undefined)).to.be.false;
    });
});
