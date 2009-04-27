/*       Source:  Local Cache                                                                 */
/*     Location:  rsrc@72674@/html/js/canvas.js                                               */
/*      Machine:  10.1.0.48                                                                   */
/*    Generated:  February 15th 2008 9:04:40 PM PST                                           */


var smartIframes=[];function smartSizingFrameAdded(){window.onresize=resizeSmartFrames;smartIframes=[];var allIframes=document.getElementsByTagName('iframe');for(var i=0;i<allIframes.length;i++){var frame=allIframes[i];if(frame.className=='smart_sizing_iframe'){smartIframes.push(frame);frame.style.width=frame.parentNode.scrollWidth-2+"px";}}
resizeSmartFrames();}
if(window.innerHeight){var windowHeight=function(){return window.innerHeight;};}else if(document.documentElement&&document.documentElement.clientHeight){var windowHeight=function(){return document.documentElement.clientHeight;};}else{var windowHeight=function(){return document.body.clientHeight;};}
function resizeSmartFrames(){var height=windowHeight();for(var i=0;i<smartIframes.length;i++){var frame=smartIframes[i];var spaceLeft=height-elementY(frame)-61;frame.style.height=spaceLeft/(smartIframes.length-i)+'px';}}
function report_public_canvas_page_dialog(app_id){var dialog=new pop_dialog();var report_func=function(){var handler=function(response){dialog.show_message(tx('can03'),tx('can04'));};new AsyncRequest().setURI('/ajax/canvas_report.php?confirm=1&app_id='+app_id).setReadOnly(true).setHandler(handler).send();};dialog.show_choice_ajax('Report Application','/ajax/canvas_report.php?app_id='+app_id,tx('can01'),report_func,tx('sh:cancel-button'),function(){dialog.hide();},'',null,null,true);}
if(typeof(ScriptInventory)!='undefined'){ScriptInventory.addScript("\/var\/releases\/thefacebook-r77778-01152008\/www\/html\/js\/canvas.js", "72674", 1200708673);}