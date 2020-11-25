import chai from 'chai';
import ew from '../src/endsWith.js';
const expect = chai.expect;

describe('EndsWith', () => {
    it('Compare known strings', () => {
        expect(ew('joku teksti', 'sti')).to.be.true;
        expect(ew('joku teksti', 't')).to.be.false;
    });

    it('Check substring positions', () => {
        expect(ew('joku teksti', 'o', 2)).to.be.true;
        expect(ew('joku teksti', 'o', 4)).to.be.false;
    });

    it('Check substring negative positions', () => {
        expect(ew('joku teksti', 'j', -2)).to.be.true;
        expect(ew('joku teksti', 'o', 0)).to.be.false;
    });

    it('Check position larger than word', () => {
        expect(ew('joku teksti', 'i', 1000)).to.be.true;
        expect(ew('joku teksti', 'teksti', 25)).to.be.false;
    });
});
