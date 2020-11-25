import chai from 'chai';
import id from '../src/isDate.js';
const expect = chai.expect;

describe('IsDate', () => {
    it('Test with values known to be dates', () => {
        expect(id(new Date())).to.be.true;
    });

    it('Test with values known not to be dates', () => {
        expect(id('sana')).to.be.false;
    });
});
