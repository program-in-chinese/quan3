// Generated from 圈3.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var 圈3Listener = require('./圈3Listener').圈3Listener;
var grammarFileName = "圈3.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0007\u0016\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0003\u0002\u0003\u0002\u0006\u0002\u000b\n\u0002\r\u0002\u000e",
    "\u0002\f\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0002\u0002\u0005\u0002\u0004\u0006",
    "\u0002\u0002\u0002\u0013\u0002\b\u0003\u0002\u0002\u0002\u0004\u0010",
    "\u0003\u0002\u0002\u0002\u0006\u0012\u0003\u0002\u0002\u0002\b\n\u0007",
    "\u0003\u0002\u0002\t\u000b\u0005\u0004\u0003\u0002\n\t\u0003\u0002\u0002",
    "\u0002\u000b\f\u0003\u0002\u0002\u0002\f\n\u0003\u0002\u0002\u0002\f",
    "\r\u0003\u0002\u0002\u0002\r\u000e\u0003\u0002\u0002\u0002\u000e\u000f",
    "\u0007\u0004\u0002\u0002\u000f\u0003\u0003\u0002\u0002\u0002\u0010\u0011",
    "\u0005\u0006\u0004\u0002\u0011\u0005\u0003\u0002\u0002\u0002\u0012\u0013",
    "\u0007\u0005\u0002\u0002\u0013\u0014\u0007\u0006\u0002\u0002\u0014\u0007",
    "\u0003\u0002\u0002\u0002\u0003\f"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'\u5F00\u59CB'", "'\u7ED3\u675F'", "'\u524D\u8FDB'" ];

var symbolicNames = [ null, null, null, null, "T\u0001", "T\u0001\u0002" ];

var ruleNames =  [ "程序", "声明", "前进" ];

function 圈3Parser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

圈3Parser.prototype = Object.create(antlr4.Parser.prototype);
圈3Parser.prototype.constructor = 圈3Parser;

Object.defineProperty(圈3Parser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

圈3Parser.EOF = antlr4.Token.EOF;
圈3Parser.T__0 = 1;
圈3Parser.T__1 = 2;
圈3Parser.T__2 = 3;
圈3Parser.T数 = 4;
圈3Parser.T空白 = 5;

圈3Parser.RULE_程序 = 0;
圈3Parser.RULE_声明 = 1;
圈3Parser.RULE_前进 = 2;

function 程序Context(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = 圈3Parser.RULE_程序;
    return this;
}

程序Context.prototype = Object.create(antlr4.ParserRuleContext.prototype);
程序Context.prototype.constructor = 程序Context;

程序Context.prototype.声明 = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(声明Context);
    } else {
        return this.getTypedRuleContext(声明Context,i);
    }
};

程序Context.prototype.enterRule = function(listener) {
    if(listener instanceof 圈3Listener ) {
        listener.enter程序(this);
	}
};

程序Context.prototype.exitRule = function(listener) {
    if(listener instanceof 圈3Listener ) {
        listener.exit程序(this);
	}
};




圈3Parser.程序Context = 程序Context;

圈3Parser.prototype.程序 = function() {

    var localctx = new 程序Context(this, this._ctx, this.state);
    this.enterRule(localctx, 0, 圈3Parser.RULE_程序);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 6;
        this.match(圈3Parser.T__0);
        this.state = 8; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 7;
            this.声明();
            this.state = 10; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===圈3Parser.T__2);
        this.state = 12;
        this.match(圈3Parser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function 声明Context(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = 圈3Parser.RULE_声明;
    return this;
}

声明Context.prototype = Object.create(antlr4.ParserRuleContext.prototype);
声明Context.prototype.constructor = 声明Context;

声明Context.prototype.前进 = function() {
    return this.getTypedRuleContext(前进Context,0);
};

声明Context.prototype.enterRule = function(listener) {
    if(listener instanceof 圈3Listener ) {
        listener.enter声明(this);
	}
};

声明Context.prototype.exitRule = function(listener) {
    if(listener instanceof 圈3Listener ) {
        listener.exit声明(this);
	}
};




圈3Parser.声明Context = 声明Context;

圈3Parser.prototype.声明 = function() {

    var localctx = new 声明Context(this, this._ctx, this.state);
    this.enterRule(localctx, 2, 圈3Parser.RULE_声明);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 14;
        this.前进();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function 前进Context(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = 圈3Parser.RULE_前进;
    return this;
}

前进Context.prototype = Object.create(antlr4.ParserRuleContext.prototype);
前进Context.prototype.constructor = 前进Context;

前进Context.prototype.T数 = function() {
    return this.getToken(圈3Parser.T数, 0);
};

前进Context.prototype.enterRule = function(listener) {
    if(listener instanceof 圈3Listener ) {
        listener.enter前进(this);
	}
};

前进Context.prototype.exitRule = function(listener) {
    if(listener instanceof 圈3Listener ) {
        listener.exit前进(this);
	}
};




圈3Parser.前进Context = 前进Context;

圈3Parser.prototype.前进 = function() {

    var localctx = new 前进Context(this, this._ctx, this.state);
    this.enterRule(localctx, 4, 圈3Parser.RULE_前进);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 16;
        this.match(圈3Parser.T__2);
        this.state = 17;
        this.match(圈3Parser.T数);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.圈3Parser = 圈3Parser;
