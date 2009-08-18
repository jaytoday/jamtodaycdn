CodeHighlighter.addStyle("python",{
	comment : {
		exp  : /#[^\n]+/
	},
	operators : {
		exp  : /(-|\*|\+|=|\.|:|\(|\)|\{|\})/
	},
	string : {
		exp  : /'[^']*'|"[^"]*"/
	},
	keywords : {
		exp  : /\b(do|end|if|module|yield|then|else|for|until|unless|while|elsif|case|when|break|retry|redo|rescue|require|raise)\b/
	},
	constants : {
	  exp : /\b(self|class|def)\b/
	}
});
