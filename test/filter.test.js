import chai from 'chai';
import filter from '../src/filter.js';
const expect = chai.expect;

describe('Filter', () => {
    it('filters with all elements matching the predicate', () => {
        const users = [
            { user: 'barney', active: true },
            { user: 'fred', active: true },
        ];

        expect(filter(users, ({ active }) => active)).to.deep.equal(users);
    });

    it('filters with some elements matching the predicate', () => {
        const users = [
            { user: 'barney', active: true },
            { user: 'fred', active: false },
        ];

        expect(filter(users, ({ active }) => active)).to.deep.equal([{ user: 'barney', active: true }]);
    });

    it('filters empty array', () => {
        const users = [];

        expect(filter(users, ({ active }) => active)).to.be.an('array').that.is.empty;
    });
});
