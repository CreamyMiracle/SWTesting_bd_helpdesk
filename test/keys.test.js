import chai from 'chai';
import keys from '../src/keys.js';
const expect = chai.expect;

describe('Keys', () => {
    it('checks with known object', () => {
        function Foo() {
            this.a = 1;
            this.b = 2;
        }
        expect(keys(new Foo())).to.have.members(['a', 'b']); // iteration order is not guaranteed
    });

    it('checks with known non-object', () => {
        expect(keys('hi')).to.have.members(['0', '1']);
    });
});
