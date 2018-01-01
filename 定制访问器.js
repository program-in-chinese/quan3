var antlr4 = require('antlr4/index');
const 圈3Visitor = require('./圈3Visitor.js').圈3Visitor

function 定制访问器 () {
	圈3Visitor.call(this);
	return this;
}

定制访问器.prototype = Object.create(圈3Visitor.prototype);
定制访问器.prototype.constructor = 定制访问器;

var 语法树 = {子节点: []};
var 转向 = [];

定制访问器.prototype.visit程序 = function(上下文) {
  var 子节点 = this.visit(上下文.声明());
  语法树.子节点 = 子节点;
  document.getElementById("调试输出").innerHTML += JSON.stringify(语法树);
  return 子节点;
};

定制访问器.prototype.visit循环 = function(上下文) {
  var 循环节点 = {类型: '循环', 次数: 上下文.T数().getText(), 子节点: this.visit(上下文.声明())};
  // document.getElementById("调试输出").innerHTML += '循环';
  return 循环节点;
};

定制访问器.prototype.visit声明 = function(上下文) {
  //语法树.子节点.push({类型: '声明'});
  //document.getElementById("调试输出").innerHTML += '声明';
  return this.visit(上下文.getChild(0));
};

定制访问器.prototype.visit转向 = function(上下文) {
  return {类型: '转向', 参数: 上下文.T数().getText()};
};

定制访问器.prototype.visit前进 = function(上下文) {
  return {类型: '前进', 参数: 上下文.T数().getText()};
};

定制监听器.prototype.返回语法树 = function() {
  return 语法树;
};

/*function 返回语法树() {
  return 语法树;
}*/

exports.定制访问器 = 定制访问器;
//exports.返回语法树 = 返回语法树;