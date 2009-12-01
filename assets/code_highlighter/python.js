var LOOKBEHIND = "[ ]"; // could include \)\( but then it would also match the operator
var LOOKAHEAD = "(?![A-Za-z0-9])";

var BUILTIN = new RegExp(
	              LOOKBEHIND +
	              "(__import__|abs|apply|basestring|bool|buffer|" +
                "callable|chr|classmethod|cmp|coerce|compile|complex|" +
                "delattr|dict|dir|divmod|" +
                "enumerate|eval|execfile|file|filter|float|" +
                "getattr|globals|hasattr|hash|help|hex|" +
                "id|input|int|intern|isinstance|issubclass|iter|" +
                "len|list|locals|long|" +
                "map|max|min|" +
                "object|oct|open|ord|pow|property|" +
                "range|raw_input|reduce|reload|repr|round|" +
                "setattr|slice|staticmethod|sum|super|str|tuple|type|" +
                "unichr|unicode|vars|" +
                "xrange|" +
                "zip)" + LOOKAHEAD 
                );

var RESERVED =  new RegExp(
               LOOKBEHIND +
                "(ArithmeticError|AssertionError|AttributeError|" +
                "DeprecationWarning|" +
                "EOFError|Ellipsis|EnvironmentError|Exception|False|" +
                "FloatingPointError|FutureWarning|" +
                "IOError|ImportError|IndentationError|IndexError|" +
                "KeyError|KeyboardInterrupt|LookupError|" +
                "MemoryError|NameError|None|NotImplemented|" +
                "NotImplementedError|" +
                "OSError|OverflowError|OverflowWarning|" +
                "PendingDeprecationWarning|" +
                "ReferenceError|RuntimeError|RuntimeWarning|" +
                "StandardError|StopIteration|SyntaxError|SyntaxWarning|" +
                "SystemError|SystemExit|TabError|True|TypeError|" +
                "UnboundLocalError|UnicodeDecodeError|UnicodeEncodeError|" +
                "UnicodeError|UnicodeTranslateError|UserWarning|ValueError|" +
                "Warning|WindowsError|" +
                "ZeroDivisionError|" +
                "and|assert|break|" +
                "class|continue|def|del|" +
                "elif|else|except|exec|finally|for|from|" +
                "global|" +
                "if|import|in|is|" +
                "lambda|" +
                "not|" +
                "or|pass|print|" +
                "raise|return|" +
                "try|" +
                "while|" +
                "yield)" + LOOKAHEAD 
                );

var MULTILINE_COMMENT = new RegExp(
    '"{3}'                  +   // opening triplet
    '('                     +   // open paren for main optional expression
    '([^"]*)'               +   // match not-" 0-inf times
    '("{1,2}[^"]+"{1,2})*'  +   // match "x1 followed by one or more not-"
                                // followed by "x1, all 0-inf times
    '([^"]*)'               +   // match not-" 0-inf times
    ')*'                    +   // close paren, make main expression optional
    '"{3}'                  +   // closing triplet
'');

var MULTILINE_SINGLEQUOTE_COMMENT = new RegExp(
    "'{3}"                  +   // opening triplet
    '('                     +   // open paren for main optional expression
    "([^']*)"               +   // match not-" 0-inf times
    "('{1,2}[^']+'{1,2})*"  +   // match "x1 followed by one or more not-"
                                // followed by "x1, all 0-inf times
    "([^']*)"               +   // match not-" 0-inf times
    ')*'                    +   // close paren, make main expression optional
    "'{3}"                  +   // closing triplet
'');
    

            
CodeHighlighter.addStyle("python",{
	/*
	  multiline : { exp  : MULTILINE_COMMENT },
 	  multiline_singlequote : { exp  : MULTILINE_SINGLEQUOTE_COMMENT },
 	 */
	comment : {
		exp  : /#[^\n]+/
	},
	operators : {
		exp  : /(-|\*|\+|=|\.|:|\(|\)|\{|\})/
	},
	reserved : {
		exp  :  RESERVED
	},
	builtin : {
	  exp : BUILTIN
	},
	decorator: {
		exp: /(\@[a-z_A-Z0-9]+)\b/ 
	},
	string : {
		exp  : /('[^']*'|"[^"]*")/ //(?![>])
	}

});

