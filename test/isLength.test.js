import chai from 'chai';
import il from '../src/isLength.js';
const expect = chai.expect;

describe('IsLength', () => {
    it('Test with numerical value between 0 and MAX_SAFE_INTEGER', () => {
        expect(il('joku teksti')).to.be.true;
        expect(il([1, 2, 3])).to.be.true;
        expect(il(['sana', 2])).to.be.true;
    });

    it('Test with numerical value below 0', () => {
        expect(il('sana')).to.be.false;
    });

    it('Test with numerical value above MAX_SAFE_INTEGER0', () => {
        expect(il('sana')).to.be.false;
    });

    it('Test with numerical value 0', () => {
        expect(il('sana')).to.be.false;
    });
});
