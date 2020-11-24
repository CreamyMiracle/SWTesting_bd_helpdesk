import chai from 'chai';
import isEmpty from '../src/isEmpty.js';
const expect = chai.expect;

describe('Is Empty', () => {
    it('checks with known empty object, collection, map and set', () => {
        const obj = {};
        const coll = [];
        const map = new Map();
        const set = new Set();

        expect(isEmpty(obj)).to.be.true;
        expect(isEmpty(coll)).to.be.true;
        expect(isEmpty(map)).to.be.true;
        expect(isEmpty(set)).to.be.true;
    });

    it('checks with known not empty object, collection, map and set', () => {
        const obj = { name: 'test' };
        const coll = [1, 2, 3];
        const map = new Map();
        map['bla'] = 'blaa';
        const set = new Set();
        set.add('blaa');

        expect(isEmpty(obj)).to.be.false;
        expect(isEmpty(coll)).to.be.false;
        expect(isEmpty(map)).to.be.false;
        expect(isEmpty(set)).to.be.false;
    });

    it('checks with input values other than object, collection, map and set', () => {
        expect(isEmpty(1)).to.be.true;
        expect(isEmpty(null)).to.be.true;
        expect(isEmpty(undefined)).to.be.true;
    });
});
