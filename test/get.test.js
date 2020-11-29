import chai from 'chai';
import get from '../src/get.js';
const expect = chai.expect;

describe('Get', () => {
    it('Test with surely existing value', () => {
        expect(get({ a: [{ b: { c: 3 } }] }, 'a[0].b.c')).to.equal(3);
        expect(get({ a: [{ b: { c: 3 } }] }, ['a', '0', 'b', 'c'])).to.equal(3);
    });

    it('Test with non existing value', () => {
        expect(get({ a: [{ b: { c: 3 } }] }, 'a[0].e.d')).to.equal(undefined);
        expect(get({ a: [{ b: { c: 3 } }] }, ['a', '1', 'b', 'd'])).to.equal(undefined);
    });

    it('Test with different defaultValues', () => {
        expect(get({ a: [{ b: { c: 3 } }] }, 'a[1].b.c', 'moi')).to.equal('moi');
        expect(get({ a: [{ b: { c: 3 } }] }, ['a', '0', 'b', 'c'], 6)).to.equal(6);
    });
});
