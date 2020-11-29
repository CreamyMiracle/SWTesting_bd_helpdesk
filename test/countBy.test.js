import chai from 'chai';
import countBy from '../src/countBy.js';
const expect = chai.expect;

describe('CountBy', () => {
    it('Test if the iteratee function transforms the keys', () => {
        expect(
            countBy(
                [
                    { user: 'barney', active: true },
                    { user: 'betty', active: true },
                    { user: 'fred', active: false },
                ],
                value => value.active,
            ),
        ).to.equal({ true: 2, false: 1 });
    });

    it('Test with different kind of iteratee values, like numbers, object, etc', () => {
        expect(
            countBy(
                [
                    { user: 'barney', age: 12 },
                    { user: 'betty', age: 34 },
                    { user: 'fred', age: 65 },
                ],
                value => value.age < 30,
            ),
        ).to.equal({ true: 1, false: 2 });
    });

    it('Test with empty collection', () => {
        expect(countBy([], value => value.active)).to.equal({});
    });
});
