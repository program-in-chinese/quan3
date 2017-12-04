const antlr4 = require("antlr4/index")
const fs = require("fs")
const 圈3Lexer = require("./圈3Lexer.js")
const 圈3Parser = require("./圈3Parser.js")
const 定制监听器 = require("./定制监听器.js").定制监听器

运行();

// TODO: 需改进-现为全局, 由于browserify
function 运行() {
  var 代码 = document.getElementById('输入代码').value;
  var 输入流 = new antlr4.InputStream(代码)
  var 词法分析器 = new 圈3Lexer.圈3Lexer(输入流)
  var 词  = new antlr4.CommonTokenStream(词法分析器)
  var 语法分析器 = new 圈3Parser.圈3Parser(词)
  语法分析器.buildParseTrees = true

  antlr4.tree.ParseTreeWalker.DEFAULT.walk(new 定制监听器(), 语法分析器.程序())
}

window.运行 = 运行;