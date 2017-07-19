var Class = function(){
	var klass = function(){
		this.init.apply(this, arguments);
		this.say.apply(this, arguments);
	};
	klass.prototype.init = function(){};
	klass.prototype.say = function(){};

	// 定义 prototype 的别名
	klass.fn = klass.prototype;

	// 定义类的别名
	klass.fn.parent = klass;

	// 给类添加属性
	klass.extend = function(obj) {
		var extended = obj.extended;
		for(var i in obj){
			klass[i] = obj[i];
		}
		if (extended) extended(klass);
	}

	// 给市里添加属性
	klass.include = function(obj) {
		var included = obj.included;
		for(var i in obj) {
			klass.fn[i] = obj[i];
		}
		if (included) included(klass)
	};

	return klass;
};

var Person= new Class;

Person.extend({
	find: function(id){alert("find"+id)},
})


Person.prototype.init = function(){
	alert("init");
}

var person = new Person;

