const assert = require('chai').assert;
const program = require('./program');

describe('When calling findGreater', () => {
    it('should return 10 when input: 5, 10', () => {
        assert.equal(10, program.findGreater(5, 10));
    });
    it('should return 10 when input: 10, 5', () => {
        assert.equal(10, program.findGreater(10, 5));
    });
});