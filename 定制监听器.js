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
  构图 = function() {
    新画布(720, 400);
  }
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

    绘制 = function() {
      var 前进距离 = parseInt(t2);

      var 原点x = 200;
      var 原点y = 300;
      line(原点x, 原点y, 原点x, 帧序号() < 前进距离 ? 原点y - 帧序号() : 原点y - 前进距离);
    }
};

exports.JSListener = JSListener;