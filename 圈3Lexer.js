// Generated from 圈3.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0007\"\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0005\u0006\u0005\u0018\n\u0005\r\u0005\u000e",
    "\u0005\u0019\u0003\u0006\u0006\u0006\u001d\n\u0006\r\u0006\u000e\u0006",
    "\u001e\u0003\u0006\u0003\u0006\u0002\u0002\u0007\u0003\u0003\u0005\u0004",
    "\u0007\u0005\t\u0006\u000b\u0007\u0003\u0002\u0004\u0003\u00022;\u0004",
    "\u0002\u000b\f\"\"\u0002#\u0002\u0003\u0003\u0002\u0002\u0002\u0002",
    "\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002",
    "\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0003",
    "\r\u0003\u0002\u0002\u0002\u0005\u0010\u0003\u0002\u0002\u0002\u0007",
    "\u0013\u0003\u0002\u0002\u0002\t\u0017\u0003\u0002\u0002\u0002\u000b",
    "\u001c\u0003\u0002\u0002\u0002\r\u000e\u0007\u5f02\u0002\u0002\u000e",
    "\u000f\u0007\u59cd\u0002\u0002\u000f\u0004\u0003\u0002\u0002\u0002\u0010",
    "\u0011\u0007\u7ed5\u0002\u0002\u0011\u0012\u0007\u6761\u0002\u0002\u0012",
    "\u0006\u0003\u0002\u0002\u0002\u0013\u0014\u0007\u524f\u0002\u0002\u0014",
    "\u0015\u0007\u8fdd\u0002\u0002\u0015\b\u0003\u0002\u0002\u0002\u0016",
    "\u0018\t\u0002\u0002\u0002\u0017\u0016\u0003\u0002\u0002\u0002\u0018",
    "\u0019\u0003\u0002\u0002\u0002\u0019\u0017\u0003\u0002\u0002\u0002\u0019",
    "\u001a\u0003\u0002\u0002\u0002\u001a\n\u0003\u0002\u0002\u0002\u001b",
    "\u001d\t\u0003\u0002\u0002\u001c\u001b\u0003\u0002\u0002\u0002\u001d",
    "\u001e\u0003\u0002\u0002\u0002\u001e\u001c\u0003\u0002\u0002\u0002\u001e",
    "\u001f\u0003\u0002\u0002\u0002\u001f \u0003\u0002\u0002\u0002 !\b\u0006",
    "\u0002\u0002!\f\u0003\u0002\u0002\u0002\u0005\u0002\u0019\u001e\u0003",
    "\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function 圈3Lexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

圈3Lexer.prototype = Object.create(antlr4.Lexer.prototype);
圈3Lexer.prototype.constructor = 圈3Lexer;

圈3Lexer.EOF = antlr4.Token.EOF;
圈3Lexer.T__0 = 1;
圈3Lexer.T__1 = 2;
圈3Lexer.T__2 = 3;
圈3Lexer.T数 = 4;
圈3Lexer.T空白 = 5;

圈3Lexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

圈3Lexer.prototype.modeNames = [ "DEFAULT_MODE" ];

圈3Lexer.prototype.literalNames = [ null, "'\u5F00\u59CB'", "'\u7ED3\u675F'", 
                                   "'\u524D\u8FDB'" ];

圈3Lexer.prototype.symbolicNames = [ null, null, null, null, "T\u0001", "T\u0001\u0002" ];

圈3Lexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T数", "T空白" ];

圈3Lexer.prototype.grammarFileName = "圈3.g4";



exports.圈3Lexer = 圈3Lexer;

