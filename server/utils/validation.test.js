const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
	it('should reject non-string values', () => {
		var name = isRealString(1234);
		expect(name).toBe(false);
	});
	it('should reject strings with only spaces', () => {
		var name=isRealString('   ');
		expect(name).toBe(false);
	});
	it('should allow strings with non-space characters', () => {
		var room = isRealString('  Test room  ');
		expect(room).toBe(true);
	});
});