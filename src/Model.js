(function(){

    var Model = function(attributes) {
        this.attributes = attributes;
        this._events = [];
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

        this._events.forEach(function(callback) {
            callback();
        });
    }

    Model.prototype.update = Model.prototype.set;

    Model.prototype.onChange = function(callback) {
        if(this._events.indexOf(callback)<0){
            this._events.push(callback);
        }
    }

    if(typeof module == 'undefined'){
        this['Model'] = Model;
    } else {
        module.exports = Model;
    }

}).bind(this)();
