import chai from 'chai';
import isArguments from '../src/isArguments.js';
const expect = chai.expect;

describe('Is Arguments', () => {
    it('checks with known argument object', () => {
        expect(
            isArguments(
                (function () {
                    return arguments;
                })(),
            ),
        ).to.be.true;
    });

    it('checks with known not-argument object', () => {
        expect(isArguments([1, 2, 3])).to.be.false;
    });
});
