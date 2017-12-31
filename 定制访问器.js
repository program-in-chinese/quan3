var antlr4 = require('antlr4/index');
const 圈3Visitor = require('./圈3Visitor.js').圈3Visitor

定制访问器 = function () {
	圈3Visitor.call(this);
	return this;
}

定制访问器.prototype = Object.create(圈3Visitor.prototype);
定制访问器.prototype.constructor = 定制访问器;

var 转向 = [];

定制访问器.prototype.visit转向 = function(上下文) {
  转向.push(上下文.T数().getText());
  document.getElementById("调试输出").innerHTML = 转向;
}

exports.定制访问器 = 定制访问器;