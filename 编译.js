const antlr4 = require("antlr4/index")
const fs = require("fs")
const 圈3Lexer = require("./圈3Lexer.js")
const 圈3Parser = require("./圈3Parser.js")
const JSListener = require("./定制监听器.js").JSListener

运行();

// TODO: 改进-现为全局
function 运行() {
  var 代码 = document.getElementById('输入代码').value;
var chars = new antlr4.InputStream(代码)
var lexer = new 圈3Lexer.圈3Lexer(chars)
var tokens  = new antlr4.CommonTokenStream(lexer)
var parser = new 圈3Parser.圈3Parser(tokens)
parser.buildParseTrees = true
var tree = parser.程序()

var extractor = new JSListener()
antlr4.tree.ParseTreeWalker.DEFAULT.walk(extractor, tree)
}

window.运行 = 运行;