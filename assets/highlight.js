(function(){

jQuery.fn.syntaxHighlight = function(settings) {
  // define defaults and override with options, if available
  // by extending the default settings, we don't modify the argument
  settings = jQuery.extend({
     showGutter: null, 
	 showControls: null, 
	 collapseAll: null, 
	 firstLine: null, 
	 showColumns: null
  }, settings);

  dp.sh.HighlightElms(this.get(), settings.showGutter, settings.showControls, settings.collapseAll, settings.firstLine, settings.showColumns);
}                                                                                                                     

})();