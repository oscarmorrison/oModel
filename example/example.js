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

person.onChange(function(){
	console.log('--- callback second');
});

person.update({
	some: 'new',
	stuff: 'awesome'
})

person.off(callbackHello)

person.update('coffee', 'house')

console.log(person.get())