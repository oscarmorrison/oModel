var Utils = require('../src/Utils.js');

test('it returns a unique array', () => {
	const array = ['one', 'one', 'two'];
	expect(Utils.uniqueArray(array)).toEqual(['one', 'two']);
});
