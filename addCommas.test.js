const addCommas = require('./addCommas');

describe('#addCommas', () => {
	test('it is a function', () => {
		expect(typeof addCommas).toBe('function');
	});
	test('it adds commas', () => {
		expect(addCommas(1)).toEqual('1');
		expect(addCommas(1000000)).toEqual('1,000,000');
		expect(addCommas(9876543210)).toEqual('9,876,543,210');
		expect(addCommas(6)).toEqual('6');
		expect(addCommas(-10)).toEqual('-10');
		expect(addCommas(-5678)).toEqual('-5,678');
		expect(addCommas(12345.678)).toEqual('12,345.678');
		expect(addCommas(-3141592.65)).toEqual('-3,141,592.65');
	});
});
