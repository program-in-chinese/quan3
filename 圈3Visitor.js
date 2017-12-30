// Generated from 圈3.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by 圈3Parser.

function 圈3Visitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

圈3Visitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
圈3Visitor.prototype.constructor = 圈3Visitor;

// Visit a parse tree produced by 圈3Parser#程序.
圈3Visitor.prototype.visit程序 = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by 圈3Parser#声明.
圈3Visitor.prototype.visit声明 = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by 圈3Parser#循环.
圈3Visitor.prototype.visit循环 = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by 圈3Parser#前进.
圈3Visitor.prototype.visit前进 = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by 圈3Parser#转向.
圈3Visitor.prototype.visit转向 = function(ctx) {
  return this.visitChildren(ctx);
};



exports.圈3Visitor = 圈3Visitor;