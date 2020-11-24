import chai from 'chai';
import clamp from '../src/clamp.js';
const expect = chai.expect;

describe('Clamp', () => {
    it('Clamps `number` within the inclusive `lower` and `upper` bounds', () => {
        expect(clamp(-4000, -1000, 500)).to.equal(-1000);
        expect(clamp(400, -1000, 500)).to.equal(400);
        expect(clamp(-4000, -1000, NaN)).to.equal(-1000);
    });
});
