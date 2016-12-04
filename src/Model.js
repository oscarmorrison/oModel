var Model = function(attributes) {
	this.attributes = attributes;
	this.callbacks = [];
}

Model.prototype.toJSON = function() {
	return this.attributes;	
}

Model.prototype.set = function(key, value) {
	if(typeof key == 'object') {
		var object = key;
		var attributes = this.attributes;
		Object.keys(object).forEach(function (key) {
			attributes[key] = object[key];
		})
	} else {
		this.attributes[key] = value;
	}

	this.callbacks.forEach(function(callback) {
		callback();
	});
}

Model.prototype.update = Model.prototype.set;

Model.prototype.onChange = function(callback) {
	if(this.callbacks.indexOf(callback)<0){
		this.callbacks.push(callback);		
	}
}

module.exports = Model;
