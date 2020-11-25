import chai from 'chai';
import every from '../src/every.js';
const expect = chai.expect;

describe('Every', () => {
    it('Check with elements known to match the predicate', () => {
        expect(every([true, 1, 0], Boolean)).to.be.true;
        expect(every(['aasi', 'kana', 'kissa'], String)).to.be.true;
    });

    it('Check with element known to not match the predicate', () => {
        expect(every([true, 'kana', false], Boolean)).to.be.false;
        expect(every(['aasi', 'kana', 'kissa'], String)).to.be.false;
    });

    it('Check with empty array', () => {
        expect(every([], Boolean)).to.be.true;
    });
});
