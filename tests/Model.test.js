var Model = require('../src/Model.js');

describe('person model', () => {

    var person;

    beforeEach( () => {
        person = new Model({});
    });

    test('does exist', () => {
        expect(person).toBeTruthy();
    });

    test('has a name', () => {
        person.set('name', 'oscar');
        expect(person.get('name')).toBe('oscar');
    });

    test('has multiple values', () => {
        person.set({
            name: 'oscar',
            age: 25
        });
        expect(person.get()).toEqual({
            name: 'oscar',
            age: 25
        });
    });

    test('onChange event is called', () => {
        var mock = jest.fn();
        person.onChange(mock);
        person.set('name', 'oscar');
        expect(mock).toBeCalled();
    });


});
