var Model = require('../src/Model.js');

var person = new Model({
	name: 'oscar',
	age: 25
})

person.set('location', 'boston')

function callbackHello() {
	console.log('--- callback hello world ---');
}

person.onChange(callbackHello);

person.update({
	some: 'new',
	stuff: 'awesome'
})

person.update('coffee', 'house')