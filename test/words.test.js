import chai from 'chai';
import words from '../src/words.js';
const expect = chai.expect;

describe('Words', () => {
    it('splits unicode string into an array of its words', () => {
        expect(words('apples, bananas, & pears')).to.deep.equal(['apples', 'bananas', 'pears']);
    });

    it('splits string into an array of its words with regex patterns', () => {
        expect(words('apples, bananas, & pears', /[^, ]+/g)).to.deep.equal(['apples', 'bananas', '&', 'pears']);
    });
});
