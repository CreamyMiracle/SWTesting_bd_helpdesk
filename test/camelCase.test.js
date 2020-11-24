import chai from 'chai';
import camelCase from '../src/camelCase.js';
const expect = chai.expect;

describe('Camel case', () => {
    it('converts lowercase word to camel case', () => {
        expect(camelCase('test word')).to.equal('testWord');
    });

    it('converts camel case word to camel case', () => {
        expect(camelCase('testWord')).to.equal('testWord');
    });

    it('converts word containing upper case to camel case', () => {
        expect(camelCase('test WORD')).to.equal('testWord');
    });
});
