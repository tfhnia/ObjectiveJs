var Class = function(parent){
	var klass = function(){
		this.init.apply(this, arguments);
	};
	klass.prototype.init = function(){};

	if (parent) {
		var subclass = function() {};
		subclass.prototype = parent.prototype;
		klass.prototype = new subclass;
	}

	// 定义 prototype 的别名
	klass.fn = klass.prototype;

	// 定义别名
	klass.fn.parent = klass;
	klass.__super = klass.__proto__;

	// 给类添加属性
	klass.extend = function(obj) {
		var extended = obj.extended;
		for(var i in obj){
			klass[i] = obj[i];
		}
		if (extended) extended(klass);
	}

	// 给实例添加属性
	klass.include = function(obj) {
		var included = obj.included;
		for(var i in obj) {
			klass.fn[i] = obj[i];
		}
		if (included) included(klass)
	};

	return klass;
};

var Animal = new Class;

Animal.include({
	breath: function(){
		console.log("breath~");
	}
});


var Cat = new Class(Animal);

var tommy = new Cat;
tommy.breath();