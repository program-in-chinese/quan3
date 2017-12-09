const antlr4 = require("antlr4/index")
const fs = require("fs")
const 圈3Lexer = require("./圈3Lexer.js")
const 圈3Parser = require("./圈3Parser.js")
const 定制监听器 = require("./定制监听器.js").定制监听器

/*运行();

// TODO: 需改进-现为全局, 由于browserify
function 运行() {
  var 代码 = ;
  分析(代码);
}*/

分析 = function(代码) {
  var 输入流 = new antlr4.InputStream(代码)
  var 词法分析器 = new 圈3Lexer.圈3Lexer(输入流)
  var 词  = new antlr4.CommonTokenStream(词法分析器)
  var 语法分析器 = new 圈3Parser.圈3Parser(词)
  语法分析器.buildParseTrees = true

  var 监听器 = new 定制监听器();
  antlr4.tree.ParseTreeWalker.DEFAULT.walk(监听器, 语法分析器.程序())
  return 监听器;
}

//window.分析 = 分析;

exports.分析 = 分析;