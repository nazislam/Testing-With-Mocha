const assert = require('chai').assert;
const program = require('./program');

describe('When calling findGreater', () => {
    it('should return 10 when input: 5, 10', () => {
        assert.equal(10, program.findGreater(5, 10));
    });
});

describe('When calling findGreaterSmarter', () => {
    it('should return 20 when input: 10, 20', () => {
        assert.equal(20, program.findGreaterSmarter(10, 20));
    });
    it('should return 20 when input: 10, 20', () => {
        assert.equal(20, program.findGreaterSmarter(20, 10));
    });
});