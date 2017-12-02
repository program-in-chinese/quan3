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

var 序号 = 0;

JSListener.prototype.enter程序 = function(ctx) {
  序号 = 0;
  // TODO: 不会被再次调用(应只需调用一次)
  // https://p5js.org/reference/#/p5/setup
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

    // TODO: 应该在exit程序时重新声明'绘制'方法.
    绘制 = function() {
      background(255, 255, 255);
      var 前进距离 = parseInt(t2);
      if (前进距离 > 150) {
        return;
      }

      var 原点x = 200;
      var 原点y = 300;
      line(原点x, 原点y,
        原点x, 序号 < 前进距离 ? 原点y - 序号 : 原点y - 前进距离);
      序号 ++;
    }
};

exports.JSListener = JSListener;