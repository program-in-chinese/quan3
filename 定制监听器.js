var antlr4 = require('antlr4/index');
const 圈3Listener = require('./圈3Listener.js').圈3Listener
const print = console.log

// include directly the implementation of the compiler

JSListener = function () {
	圈3Listener.call(this);
	return this;
}

JSListener.prototype = Object.create(圈3Listener.prototype);
JSListener.prototype.constructor = JSListener;

JSListener.prototype.enter程序 = function(ctx) {

};

JSListener.prototype.exit程序 = function(ctx) {

};

JSListener.prototype.enter前进 = function(ctx) {
};

JSListener.prototype.exit前进 = function(ctx) {
    // get the variable
    var t1 = ctx.getChild(0).getText()
    var t2 = ctx.getChild(1).getText()
    document.getElementById("spanId").innerHTML = t1 + ": " + t2;
};

exports.JSListener = JSListener;