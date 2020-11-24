import chai from 'chai';
import capitalize from '../src/capitalize.js';
const expect = chai.expect;

describe('Capitalize', () => {
    it('Capitalizes word', () => {
        const result = 'Sana';
        expect(capitalize('sana')).to.equal(result);
        expect(capitalize('SANA')).to.equal(result);
        expect(capitalize('sANA')).to.equal(result);
        expect(capitalize('')).to.equal('');
    });
});
