# oModel

oModel is a work in progress, with no public release yet.

## Goal  
Build a super simple js model that allows for onChange call backs.  

### Insperation
- [Backbone.Model](http://backbonejs.org) (Jeremy Ashkenas you're brilliant!)
- [Mettle](https://github.com/jmoyers/mettle)

## Installation
*TBD bower and npm dependency*  
- compatible as client or node dependancy


## API Docs

**Create a new model** (without any attributes)
```javascript
var person = new Model();

```
**or with attributes / properties** 
```javascript
var person = new Model({
    name: 'oscar'
});
```

**Set / Update attributes**
```javascript
person.set('age', 25);
```
**...or multiple at once**  
```javascript
person.update({
    name: 'george',
    age: 20
});
```
*update is an alias for set*  

**Listen to models**  
```javascript
var callback = function(attributes) {
    console.log(attributes);
}
person.onChange(callback);
```

**OnChange**
```javascript
person.update('name', 'edward');

// callback log
// {name: 'edward', age: 20}

```

**Stop listening to models for callback**
```javascript
person.off(callback)
```

**Stop listening to models all**
```javascript
person.off()
```


