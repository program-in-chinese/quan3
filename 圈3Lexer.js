// Generated from 圈3.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\n.\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b",
    "\u0006\b$\n\b\r\b\u000e\b%\u0003\t\u0006\t)\n\t\r\t\u000e\t*\u0003\t",
    "\u0003\t\u0002\u0002\n\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b",
    "\u0007\r\b\u000f\t\u0011\n\u0003\u0002\u0005\u0004\u0002\u53f5\u53f5",
    "\u5de8\u5de8\u0003\u00022;\u0004\u0002\u000b\f\"\"\u0002/\u0002\u0003",
    "\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007",
    "\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b",
    "\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f",
    "\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0003\u0013",
    "\u0003\u0002\u0002\u0002\u0005\u0016\u0003\u0002\u0002\u0002\u0007\u0019",
    "\u0003\u0002\u0002\u0002\t\u001c\u0003\u0002\u0002\u0002\u000b\u001e",
    "\u0003\u0002\u0002\u0002\r \u0003\u0002\u0002\u0002\u000f#\u0003\u0002",
    "\u0002\u0002\u0011(\u0003\u0002\u0002\u0002\u0013\u0014\u0007\u5f02",
    "\u0002\u0002\u0014\u0015\u0007\u59cd\u0002\u0002\u0015\u0004\u0003\u0002",
    "\u0002\u0002\u0016\u0017\u0007\u7ed5\u0002\u0002\u0017\u0018\u0007\u6761",
    "\u0002\u0002\u0018\u0006\u0003\u0002\u0002\u0002\u0019\u001a\u0007\u524f",
    "\u0002\u0002\u001a\u001b\u0007\u8fdd\u0002\u0002\u001b\b\u0003\u0002",
    "\u0002\u0002\u001c\u001d\u0007\u8f6e\u0002\u0002\u001d\n\u0003\u0002",
    "\u0002\u0002\u001e\u001f\u0007\u5ea8\u0002\u0002\u001f\f\u0003\u0002",
    "\u0002\u0002 !\t\u0002\u0002\u0002!\u000e\u0003\u0002\u0002\u0002\"",
    "$\t\u0003\u0002\u0002#\"\u0003\u0002\u0002\u0002$%\u0003\u0002\u0002",
    "\u0002%#\u0003\u0002\u0002\u0002%&\u0003\u0002\u0002\u0002&\u0010\u0003",
    "\u0002\u0002\u0002\')\t\u0004\u0002\u0002(\'\u0003\u0002\u0002\u0002",
    ")*\u0003\u0002\u0002\u0002*(\u0003\u0002\u0002\u0002*+\u0003\u0002\u0002",
    "\u0002+,\u0003\u0002\u0002\u0002,-\b\t\u0002\u0002-\u0012\u0003\u0002",
    "\u0002\u0002\u0005\u0002%*\u0003\b\u0002\u0002"].join("");


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
圈3Lexer.T__3 = 4;
圈3Lexer.T__4 = 5;
圈3Lexer.T转向 = 6;
圈3Lexer.T数 = 7;
圈3Lexer.T空白 = 8;

圈3Lexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

圈3Lexer.prototype.modeNames = [ "DEFAULT_MODE" ];

圈3Lexer.prototype.literalNames = [ null, "'\u5F00\u59CB'", "'\u7ED3\u675F'", 
                                   "'\u524D\u8FDB'", "'\u8F6C'", "'\u5EA6'" ];

圈3Lexer.prototype.symbolicNames = [ null, null, null, null, null, null, 
                                    "T\u0001\u0002", "T\u0001", "T\u0001\u0002" ];

圈3Lexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", 
                                "T转向", "T数", "T空白" ];

圈3Lexer.prototype.grammarFileName = "圈3.g4";



exports.圈3Lexer = 圈3Lexer;

