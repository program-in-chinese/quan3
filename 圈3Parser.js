// Generated from 圈3.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var 圈3Listener = require('./圈3Listener').圈3Listener;
var grammarFileName = "圈3.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\r,\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
    "\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0003\u0002\u0003\u0002\u0006",
    "\u0002\u000f\n\u0002\r\u0002\u000e\u0002\u0010\u0003\u0002\u0003\u0002",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003\u0018\n\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0006\u0004\u001e\n\u0004",
    "\r\u0004\u000e\u0004\u001f\u0003\u0004\u0003\u0004\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0002\u0002\u0007\u0002\u0004\u0006\b\n\u0002\u0002",
    "\u0002*\u0002\f\u0003\u0002\u0002\u0002\u0004\u0017\u0003\u0002\u0002",
    "\u0002\u0006\u0019\u0003\u0002\u0002\u0002\b#\u0003\u0002\u0002\u0002",
    "\n&\u0003\u0002\u0002\u0002\f\u000e\u0007\u0003\u0002\u0002\r\u000f",
    "\u0005\u0004\u0003\u0002\u000e\r\u0003\u0002\u0002\u0002\u000f\u0010",
    "\u0003\u0002\u0002\u0002\u0010\u000e\u0003\u0002\u0002\u0002\u0010\u0011",
    "\u0003\u0002\u0002\u0002\u0011\u0012\u0003\u0002\u0002\u0002\u0012\u0013",
    "\u0007\u0004\u0002\u0002\u0013\u0003\u0003\u0002\u0002\u0002\u0014\u0018",
    "\u0005\b\u0005\u0002\u0015\u0018\u0005\n\u0006\u0002\u0016\u0018\u0005",
    "\u0006\u0004\u0002\u0017\u0014\u0003\u0002\u0002\u0002\u0017\u0015\u0003",
    "\u0002\u0002\u0002\u0017\u0016\u0003\u0002\u0002\u0002\u0018\u0005\u0003",
    "\u0002\u0002\u0002\u0019\u001a\u0007\u0005\u0002\u0002\u001a\u001b\u0007",
    "\f\u0002\u0002\u001b\u001d\u0007\u0006\u0002\u0002\u001c\u001e\u0005",
    "\u0004\u0003\u0002\u001d\u001c\u0003\u0002\u0002\u0002\u001e\u001f\u0003",
    "\u0002\u0002\u0002\u001f\u001d\u0003\u0002\u0002\u0002\u001f \u0003",
    "\u0002\u0002\u0002 !\u0003\u0002\u0002\u0002!\"\u0007\u0007\u0002\u0002",
    "\"\u0007\u0003\u0002\u0002\u0002#$\u0007\b\u0002\u0002$%\u0007\f\u0002",
    "\u0002%\t\u0003\u0002\u0002\u0002&\'\u0007\u000b\u0002\u0002\'(\u0007",
    "\t\u0002\u0002()\u0007\f\u0002\u0002)*\u0007\n\u0002\u0002*\u000b\u0003",
    "\u0002\u0002\u0002\u0005\u0010\u0017\u001f"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'\u5F00\u59CB'", "'\u7ED3\u675F'", "'\u5FAA\u73AF'", 
                     "'\u6B21'", "'\u5230\u6B64\u4E3A\u6B62'", "'\u524D\u8FDB'", 
                     "'\u8F6C'", "'\u5EA6'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      "T\u0001\u0002", "T\u0001", "T\u0001\u0002" ];

var ruleNames =  [ "程序", "声明", "循环", "前进", "转向" ];

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
圈3Parser.T__3 = 4;
圈3Parser.T__4 = 5;
圈3Parser.T__5 = 6;
圈3Parser.T__6 = 7;
圈3Parser.T__7 = 8;
圈3Parser.T转向 = 9;
圈3Parser.T数 = 10;
圈3Parser.T空白 = 11;

圈3Parser.RULE_程序 = 0;
圈3Parser.RULE_声明 = 1;
圈3Parser.RULE_循环 = 2;
圈3Parser.RULE_前进 = 3;
圈3Parser.RULE_转向 = 4;

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
        this.state = 10;
        this.match(圈3Parser.T__0);
        this.state = 12; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 11;
            this.声明();
            this.state = 14; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << 圈3Parser.T__2) | (1 << 圈3Parser.T__5) | (1 << 圈3Parser.T转向))) !== 0));
        this.state = 16;
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

声明Context.prototype.转向 = function() {
    return this.getTypedRuleContext(转向Context,0);
};

声明Context.prototype.循环 = function() {
    return this.getTypedRuleContext(循环Context,0);
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
        this.state = 21;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case 圈3Parser.T__5:
            this.enterOuterAlt(localctx, 1);
            this.state = 18;
            this.前进();
            break;
        case 圈3Parser.T转向:
            this.enterOuterAlt(localctx, 2);
            this.state = 19;
            this.转向();
            break;
        case 圈3Parser.T__2:
            this.enterOuterAlt(localctx, 3);
            this.state = 20;
            this.循环();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
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

function 循环Context(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = 圈3Parser.RULE_循环;
    return this;
}

循环Context.prototype = Object.create(antlr4.ParserRuleContext.prototype);
循环Context.prototype.constructor = 循环Context;

循环Context.prototype.T数 = function() {
    return this.getToken(圈3Parser.T数, 0);
};

循环Context.prototype.声明 = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(声明Context);
    } else {
        return this.getTypedRuleContext(声明Context,i);
    }
};

循环Context.prototype.enterRule = function(listener) {
    if(listener instanceof 圈3Listener ) {
        listener.enter循环(this);
	}
};

循环Context.prototype.exitRule = function(listener) {
    if(listener instanceof 圈3Listener ) {
        listener.exit循环(this);
	}
};




圈3Parser.循环Context = 循环Context;

圈3Parser.prototype.循环 = function() {

    var localctx = new 循环Context(this, this._ctx, this.state);
    this.enterRule(localctx, 4, 圈3Parser.RULE_循环);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 23;
        this.match(圈3Parser.T__2);
        this.state = 24;
        this.match(圈3Parser.T数);
        this.state = 25;
        this.match(圈3Parser.T__3);
        this.state = 27; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 26;
            this.声明();
            this.state = 29; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << 圈3Parser.T__2) | (1 << 圈3Parser.T__5) | (1 << 圈3Parser.T转向))) !== 0));
        this.state = 31;
        this.match(圈3Parser.T__4);
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
    this.enterRule(localctx, 6, 圈3Parser.RULE_前进);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 33;
        this.match(圈3Parser.T__5);
        this.state = 34;
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

function 转向Context(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = 圈3Parser.RULE_转向;
    return this;
}

转向Context.prototype = Object.create(antlr4.ParserRuleContext.prototype);
转向Context.prototype.constructor = 转向Context;

转向Context.prototype.T转向 = function() {
    return this.getToken(圈3Parser.T转向, 0);
};

转向Context.prototype.T数 = function() {
    return this.getToken(圈3Parser.T数, 0);
};

转向Context.prototype.enterRule = function(listener) {
    if(listener instanceof 圈3Listener ) {
        listener.enter转向(this);
	}
};

转向Context.prototype.exitRule = function(listener) {
    if(listener instanceof 圈3Listener ) {
        listener.exit转向(this);
	}
};




圈3Parser.转向Context = 转向Context;

圈3Parser.prototype.转向 = function() {

    var localctx = new 转向Context(this, this._ctx, this.state);
    this.enterRule(localctx, 8, 圈3Parser.RULE_转向);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 36;
        this.match(圈3Parser.T转向);
        this.state = 37;
        this.match(圈3Parser.T__6);
        this.state = 38;
        this.match(圈3Parser.T数);
        this.state = 39;
        this.match(圈3Parser.T__7);
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
