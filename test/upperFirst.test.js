import chai from 'chai';
import upperFirst from '../src/upperFirst.js';
const expect = chai.expect;

const INFINITY = 1 / 0;
const MAX_INTEGER = 1.7976931348623157e308;

describe('UpperFirst', () => {
    it('Test with all lower case string', () => {
        expect(upperFirst('mau')).to.equal('Mau');
        expect(upperFirst('vähän pidempi mau')).to.equal('Vähän pidempi mau');
    });

    it('Test with all upper case string', () => {
        expect(upperFirst('HALOOTA')).to.equal('HALOOTA');
    });

    it('Test with all but first lower case string', () => {
        expect(upperFirst('Haloota')).to.equal('Haloota');
    });

    it('Test with all but first upper case string', () => {
        expect(upperFirst('hALOOTA')).to.equal('HALOOTA');
    });
});
