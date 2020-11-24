import chai from 'chai';
import isArrayLikeObject from '../src/isArrayLikeObject.js';
const expect = chai.expect;

describe('Is Array Like', () => {
    it('checks with known array-like object', () => {
        const user = { name: 'fred', children: [] };
        expect(isArrayLikeObject(user.children)).to.be.true;
    });

    it('checks with known not-array-like object', () => {
        expect(
            isArrayLikeObject(
                (function () {
                    return arguments;
                })(),
            ),
        ).to.be.false;
    });

    it('checks with known array-like non-object', () => {
        expect(isArrayLikeObject([1, 2, 3])).to.be.true;
        expect(isArrayLikeObject('abc')).to.be.true;
    });
});
