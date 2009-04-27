/*       Source:  Global Cache                                                                */
/*     Location:  js/common.js.pkg.php r83249                                                 */
/*      Machine:  10.1.0.68                                                                   */
/*    Generated:  February 15th 2008 9:04:40 PM PST                                           */

var deadmanSafety = false;
function debug_rlog(str,isexception) {
  if (typeof(Env) == 'undefined' || !Env.rlog) {
    return;
  }

  if (isexception) {
    var nam = str['name']||'?';
    var msg = str['message']||'?';
    var url = '?';
    var num = '?';

    try {
      var url = str['sourceURL']||str['fileName']||'?';
      var num = str['line']||str['lineNumber']||'?';
    } catch (ex) { }

    str = name+' - '+msg+' (line '+num+'; '+url+')';
  }

  if (typeof(str) == 'undefined' || typeof(str['toString']) != 'function') {
    str = 'rlog attempt for non-string value: ' + typeof(str);
  }

  str = str + '\n(release: DEVELOPMENT)';

  var esrc = encodeURIComponent(window.location.href);
  var estr = encodeURIComponent(str);

  (new Image()).src =
    'http://errors.facebook.com/common/rlog_endpoint.php?'+
    'msg='+estr+'&src='+esrc+'&'+Math.random();

  
}

function deadmanSwitch( ) {
  if ( deadmanSafety ) {
    return;
  }

  debug_rlog('Execution exceeded time limit for `/html/js/common.js.pkg.php`.');

  
if (typeof(window['Env']) != 'undefined' && Env.method == 'GET') {
  var loc = window.location + '';
  if ( loc.indexOf( '?' ) !== -1 ) {
    window.location=window.location+'&UNPACKAGE=true';
  } else {
    window.location=window.location+'?UNPACKAGE=true';
  }
}

if ( document.cookie.indexOf( 'UNPACKAGE' ) == -1 ) {
  document.cookie += 'UNPACKAGE=true; path=/; domain=.facebook.com';
}


}


setTimeout( deadmanSwitch, 2000 );

try {


function intl_translation_init(){addEventBase(document.body,'mousedown',intl_translation_onmousedown);addEventBase(document.body,'mouseout',intl_translation_onmouseout);}
function intl_get_translatable_parent(obj){while(obj.parentNode){if(obj.className=='intl-translatable'||obj.className=='intl-authored'||obj.className=='intl-translated'||obj.className=='intl-approved'||obj.className=='intl-approvable'){return obj;}
obj=obj.parentNode;}
return null;}
var intl_translation_last_mousedown=null;function intl_translation_onclick(e){var target=event_get_target(e);if(target.intl_ignore_click){target.intl_ignore_click=false;return event_abort(e)||event_prevent(e);}
target=intl_get_translatable_parent(target);if(!target){return;}
var modes={'intl-authored':0,'intl-translated':1,'intl-translatable':2,'intl-approved':3,'intl-approvable':4};var hash=null,mode=null,locale=null;var data=target.getAttribute('id').split(':');mode=modes[target.className];hash=data[1];locale=data[2];intl_show_dialog(target,mode,hash,locale);target.intl_click_delay=false;return event_abort(e)||event_prevent(e);}
function intl_translation_onmousedown(e){intl_translation_last_mousedown=event_get_target(e);var target=intl_get_translatable_parent(intl_translation_last_mousedown);if(!target){return;}
if(!target.intl_bootstrapped){target.intl_bootstrapped=true;addEventBase(target,'click',intl_translation_onclick);}
target.intl_click_delay=true;setTimeout(function(){if(target.intl_click_delay){intl_translation_last_mousedown.intl_ignore_click=true;while(intl_translation_last_mousedown.parentNode){if(intl_translation_last_mousedown!=target){if(intl_translation_last_mousedown.onclick&&intl_translation_last_mousedown.onclick()===false){break;}
if(intl_translation_last_mousedown.tagName=='A'){goURI(intl_translation_last_mousedown.href);}}
intl_translation_last_mousedown=intl_translation_last_mousedown.parentNode;}}},400);}
function intl_translation_onmouseout(e){var target=event_get_target(e);target.intl_click_delay=false;}
function intl_show_dialog(clickedElement,c,h,l){var dialog=new contextual_dialog('intl_inline_translation_dialog');dialog.set_context(clickedElement);var u=document.location;dialog.show_ajax_dialog('/ajax/intl/inline_translation_dialog.php'
+'?u='+u
+'&c='+c
+'&h='+h
+'&l='+l);window.intl_inline_translation_dialog=dialog;}
function intl_submit_translation_dialog(clickedElement,h,l,v){var location=new String(document.location);var strings=location.split('&p=');var p=0;if(strings[1]){p=strings[1];}
var s=null;var i=null;var id1=location.search(/&id=/);var id2=null;if((id2=location.search(/&popular/))!=-1){s='popular';}else if((id2=location.search(/&disputed/))!=-1){s='disputed';}else if((id2=location.search(/&recent/))!=-1){s='recent';}
if(id1&&id2){i=location.substr(id1+4,id2-(id1+4));}
var dialog=new contextual_dialog('intl_submit_translation_dialog');dialog.set_context(clickedElement);dialog.show_ajax_dialog('/ajax/intl/submit_translation_dialog.php'
+'?h='+h
+'&l='+l
+'&i='+i
+'&s='+s
+'&p='+p
+'&v='+v);}
function intl_delete_translation_dialog(clickedElement,h,l,v){var dialog=new contextual_dialog('intl/delete_translation_dialog');dialog.set_context(clickedElement);dialog.show_ajax_dialog('/ajax/intl/delete_translation_dialog.php'
+'?h='+h
+'&l='+l
+'&v='+v);}
function intl_report_translation_dialog(clickedElement,h,t,l){onResponse=function(asyncResponse){var report_dialog=asyncResponse.getPayload();var dialog=new contextual_dialog();function onSubmit(){var c=$('report_dialog_code').value;new AsyncRequest().setURI('/ajax/intl/do_report.php').setData({'hash':h,'translation_id':t,'locale':l,'report_code':c}).setHandler(function(){dialog.hide();}).setErrorHandler(function(){dialog.hide();}).send();}
dialog.set_context(clickedElement);dialog.show_choice(report_dialog['title'],report_dialog['markup'],'Report',onSubmit,'Cancel',function(){dialog.hide();return false;});}
onError=function(asyncResponse){}
new AsyncRequest().setURI('/ajax/intl/report_translation_dialog.php').setData({'hash':h,'translation_id':t,'locale':l}).setHandler(bind(this,onResponse)).setErrorHandler(bind(this,'onError')).send();}
function intl_vote_translation_dialog(clickedElement,t,l){var dialog=new contextual_dialog('intl/vote_translation_dialog');dialog.set_context(clickedElement);dialog.show_ajax_dialog('/ajax/intl/vote_translation_dialog.php'
+'?t='+t
+'&l='+l);}
function intl_reload_page_locale(obj){var locale=obj.options[obj.selectedIndex].value;var location=new String(document.location);var prefix=location.split('&locale=');var redirect=prefix[0]+'&locale='+locale;document.location=redirect;}
function intl_show_highlight_schemes(){show(ge('highlight_schemes'));}
function intl_hide_highlight_schemes(){hide(ge('highlight_schemes'));}
function intl_set_locale(obj){var locale=obj.options[obj.selectedIndex].value;(new AsyncRequest()).setURI('/ajax/intl/save_locale.php').setData({locale:locale}).setHandler(function(){document.location.reload();}).send();}
function intl_set_sortby(obj){var sortby=obj.options[obj.selectedIndex].value;var location=new String(document.location);location=location.replace(/&recent/g,"");location=location.replace(/&disputed/g,"");location=location.replace(/&popular/g,"");var parts=location.split('&p=');if(parts.length==2){document.location=parts[0]+'&'+sortby+'&p='+parts[1];}else{document.location=location+'&'+sortby;}}
function intl_set_xmode(xmode){(new AsyncRequest()).setURI('/ajax/intl/save_xmode.php').setData({xmode:xmode}).setHandler(function(){document.location.reload();}).send();}
function intl_set_tpmode(tpmode){(new AsyncRequest()).setURI('/ajax/intl/save_xmode.php').setData({tpmode:tpmode}).setHandler(function(){if(tpmode==1){show($('xtrmode'));hide($('xtrmode_off'));}else{hide($('xtrmode'));show($('xtrmode_off'));}}).send();}
function intl_set_amode(amode){(new AsyncRequest()).setURI('/ajax/intl/save_xmode.php').setData({amode:amode}).setHandler(function(){document.location.reload();}).send();}
function votes_noun(val){if(((val)==1)||((val)==-1)){var nouns='vote';}else{var nouns='votes'}
return nouns;}
function intl_do_vote(native_hash,locale,translation_id,vote){ajax=new Ajax();ajax.onDone=function(ajaxObj,response){eval(response);var total=data_votes;var ups=data_up;var downs=Math.abs(data_down);$('total_'+native_hash+'_'+translation_id).innerHTML=(total);$('vtext_'+native_hash+'_'+translation_id).innerHTML=votes_noun(total);show($('total_'+native_hash+'_'+translation_id));show($('vtext_'+native_hash+'_'+translation_id));$('ups_'+native_hash+'_'+translation_id).innerHTML=(ups)+' '+' up,';$('downs_'+native_hash+'_'+translation_id).innerHTML=(downs)+' '+' down';if(vote==1){var ids=tr_ids[native_hash];for(i=0;i<ids.length;i++){c_name=$('voteup_'+native_hash+'_'+ids[i]).className;if(c_name=='upselect'&&ids[i]!=translation_id){$('voteup_'+native_hash+'_'+ids[i]).className='upover';cur_vote=($('ups_'+native_hash+'_'+ids[i]).innerHTML.split(' up,'))[0];$('ups_'+native_hash+'_'+ids[i]).innerHTML=(cur_vote-1)+' '+' up,';}}
$('voteup_'+native_hash+'_'+translation_id).className='upselect';$('votedown_'+native_hash+'_'+translation_id).className='downover';}
if(vote==-1){$('votedown_'+native_hash+'_'+translation_id).className='downselect';$('voteup_'+native_hash+'_'+translation_id).className='upover';}}
ajax.onFail=function(ajaxObj){}
var params="hash="+native_hash
+"&vote="+vote
+"&locale="+locale
+"&translation_id="+translation_id;ajax.post('/ajax/intl/do_vote.php',params);}
function intl_do_approve(tr_id,native_hash,locale){var approve_onResponse=function(asyncResponse){var result=asyncResponse.getPayload();var tr_id=result['tr_id'];var ids=tr_ids[native_hash];for(i=0;i<ids.length;i++){c_name=$('voteup_'+ids[i]).className;if(c_name=='upselect'&&ids[i]!=tr_id){$('voteup_'+ids[i]).className='upover';$('voteup_'+ids[i]).title='Approve this';}}
$('voteup_'+tr_id).className='upselect';$('voteup_'+tr_id).title='Un-approve this';}
var unapprove_onResponse=function(asyncResponse){$('voteup_'+tr_id).className='upover';$('voteup_'+tr_id).title='Approve this';}
if($('voteup_'+tr_id).className=='upselect'){new AsyncRequest().setURI('/ajax/intl/do_unapprove.php').setData({'hash':native_hash,'locale':locale}).setHandler(unapprove_onResponse).setOption('asynchronous',false).send();}else{new AsyncRequest().setURI('/ajax/intl/do_approve.php').setData({'tr_id':tr_id}).setHandler(approve_onResponse).setOption('asynchronous',false).send();}}
function tx(str,args){str=_string_table[str];return _tx(str,args);}
function _tx(str,args){if(args){if(typeof args!='object'){Util.error('intl.js: the 2nd argument must be a keyed array (not a string) for tx('+str+', ...)');}else{for(var key in args){var regexp=new RegExp('\{'+key+'\}',"g");str=str.replace(regexp,args[key]);}}}
return str;}
function intl_translation_dialog(native_str,form,anchors,tokens,glossary,rules){this.form=form;this.textarea=form.getElementsByTagName('textarea')[0];this.anchors=[];this.anchor_states=[];this.tokens=tokens;this.glossary=glossary;this.rules=rules;this.native_str=native_str;this.approved_trs=document.getElementsByName('approved_trs');if(anchors){anchors=anchors.getElementsByTagName('a');for(var i=0;i<anchors.length;i++){this.anchors.push(anchors[i]);anchors[i].onclick=this.insert_token.bind(null,this);this.anchor_states.push(false);}}
this.textarea.onkeypress=this.refresh_tokens.bind(this);this.textarea.onkeyup=this.refresh_tokens.bind(this);for(var i=0;i<this.approved_trs.length;i++){this.approved_trs[i].onchange=this.handle_approver_checkbox.bind(this,this.approved_trs[i]);}
this.form.intl_submit.onclick=this.submit_click.bind(this);if(this.form.intl_unfinalize){this.form.intl_unfinalize.onclick=this.submit_unfinalize.bind(this);}
this.refresh_tokens();}
intl_translation_dialog.prototype.insert_token=function(that){var index=that.get_anchor_index(this),textarea=that.textarea,pos=get_caret_position(that.textarea).end;textarea.value=textarea.value.substring(0,pos)+that.tokens[index]+textarea.value.substring(pos);textarea.focus();that.anchor_states[index]=true;hide(this);return false;}
intl_translation_dialog.prototype.get_anchor_index=function(anchor){for(var i=0;i<this.anchors.length;i++){if(this.anchors[i]==anchor){return i;}}
return-1;}
intl_translation_dialog.prototype.refresh_tokens=function(){var active_tokens=/\{[^}]+\}/g,token=null,tokens={};for(var i=0;i<this.tokens.length;i++){tokens[this.tokens[i]]=false;}
while(token=active_tokens.exec(this.textarea.value)){tokens[token[0]]=true;}
for(var i=0;i<this.anchors.length;i++){if(tokens[this.tokens[i]]!=this.anchor_states[i]){this.anchor_states[i]=!this.anchor_states[i];(this.anchor_states[i]?hide:show)(this.anchors[i]);}}}
intl_translation_dialog.prototype.check_tokens=function(){for(var i=0;i<this.anchor_states.length;i++){if(!this.anchor_states[i]){return false;}}
return true;}
intl_translation_dialog.prototype.rule_canon=function(native_str,translated){var words=translated.toLowerCase().split(/\b([^\s]+?)\b/);if(this.glossary){for(var i=0;i<this.glossary.length;i++){if(words.indexOf(this.glossary[i])==-1){return'Recommended glossary translations not used.';}}}}
intl_translation_dialog.prototype.rule_punctuation=function(native_str,translated){var punctuation=[',','.','?','!',';',':'];for(var i=0;i<punctuation.length;i++){if(substr_count(native_str,punctuation[i])!=substr_count(translated,punctuation[i])){return'Punctuation mismatch. Did you forget a period or other punctuation?';}}}
intl_translation_dialog.prototype.rule_punctuation_asian=function(native_str,translated){var punct_map={'?':"\uFF1F",'.':"\u3002",'!':"\uFF01",':':"\uFF1A"};var last_native_char=native_str.substr(native_str.length-1);var mapped=punct_map[last_native_char];if(mapped&&translated.substr(translated.length-1)!=last_native_char&&translated.substr(translated.length-1)!=mapped){return'Punctuation mismatch. Did you forget a period or other punctuation?';}}
intl_translation_dialog.prototype.rule_punctuation_tr=function(native_str,translated){var generic_punctuation=['?','!',';',':'];for(var i=0;i<generic_punctuation.length;i++){if(substr_count(native_str,generic_punctuation[i])!=substr_count(translated,generic_punctuation[i])){return'Punctuation mismatch. Did you forget a period or other punctuation?';}}
if(substr_count(native_str,'.')+substr_count(native_str,',')!=substr_count(translated,'.')+substr_count(translated,',')){return'Punctuation mismatch. Did you forget a period or comma?';}}
intl_translation_dialog.prototype.rule_punctuation_ar=function(native_str,translated){var generic_punctuation=[',','.','!',';',':'];for(var i=0;i<generic_punctuation.length;i++){if(substr_count(native_str,generic_punctuation[i])!=substr_count(translated,generic_punctuation[i])){return'Punctuation mismatch. Did you forget a period or other punctuation?';}}
var arabic_question_mark="\u061F";if(substr_count(native_str,'?')!=substr_count(translated,'?')+
substr_count(translated,arabic_question_mark)){return'Punctuation mismatch. Did you forget a question mark?';}}
intl_translation_dialog.prototype.rule_capitalization=function(native_str,translated){if(((native_str.substring(0,1).toLowerCase()!=native_str.substring(0,1))!=(translated.substring(0,1).toLowerCase()!=translated.substring(0,1)))&&(native_str.substring(0,1)+translated.substring(0,1)).indexOf('{')==-1){return'Capitalization mismatch. Make sure the casing of your translation is accurate.';}}
intl_translation_dialog.prototype.rule_token_spacing=function(native_str,translated){var tokens=/(?: |\b|^)\{[^}]+\}(?: |\b|$)/g,token;while(token=tokens.exec(native_str)){if(translated.indexOf(token[0])==-1){return'Spacing mismatch. Please make sure the spacing around tokens in {}\'s matches.';}}}
intl_translation_dialog.prototype.check_warnings=function(native_str,translated){var warnings=[];for(var i=0;i<this.rules.length;i++){var warning=this['rule_'+this.rules[i]](native_str,translated);if(warning){warnings.push(warning);}}
return warnings.length?warnings:null;}
intl_translation_dialog.prototype.translation_submit=function(){var form=ge('intl_ajax');var hash=form.hash.value;var status;var approve_mode=null;var approved_id=null;var onResponse=function(asyncResponse){var result=asyncResponse.getPayload();status=result['status'];}
var loc=new String(document.location);if(loc.search(/&approve_mode/)!=-1){approve_mode='1';}
if(form['approved_tr_id']){approved_id=form.approved_tr_id.value;}
new AsyncRequest().setURI('/ajax/intl/do_translation.php').setData({'hash':hash,'translation':form.translation.value,'loc':form.loc.value,'charset_test':form.charset_test.value,'approve_mode':approve_mode,'post_form_id':'1','approved_tr_id':approved_id}).setHandler(onResponse).setErrorHandler(function(){dialog.hide();}).setOption('asynchronous',false).send();if(status=='exists'||status=='exists-self'){var person_str=(status=='exists-self')?'You have':'Someone has';var dialog=(new pop_dialog()).show_choice('Duplicate Translation','Sorry! '+person_str+' already submited the same translation.','Edit Translation',function(){dialog.hide();}.bind(this),'Review Translations',function(){var form=ge('intl_ajax');document.location='/translations/?vote&hash='+hash;});}else if(status=='not-utf8'){var dialog=(new pop_dialog()).show_message('Unsupported Encoding',"Your web browser appears to be set to send data to Facebook in "+"a format our servers don't understand. Please set your browser to "+"use UTF-8 (Unicode). In most browsers this is in a menu item called "+'"Encoding" or "Character Encoding" or "Text Encoding", most often '+'under the "View" menu.');}else if(status=='empty'){var dialog=(new pop_dialog()).show_message('No Translation',"Oops! Looks like you didn't type in a translation.");}else if(status!='ok'){Util.error('Bad status = "'+status+'" for hash "'+hash+'" trans "'+form.translation.value+'"');setTimeout(function(){var form=ge('intl_ajax');document.location.reload();},250);}else{for(var i=1;i<1000;i++){var id=hash+':'+form.loc.value+':'+i;var elt=ge('trans:'+id);if(!elt){break;}
elt.innerHTML=_tx(form.translation.value,window.intl_token_set[id]);elt.className='intl-authored';}
if(window.intl_inline_translation_dialog){intl_inline_translation_dialog.hide();}else{document.location.reload();}}
return status;}
intl_translation_dialog.prototype.submit_unfinalize=function(){var form=ge('intl_ajax');var approve_mode=null;var loc=new String(document.location);if(loc.search(/&approve_mode/)!=-1){approve_mode='1';}
new AsyncRequest().setURI('/ajax/intl/do_unfinalize.php').setData({'hash':form.hash.value,'post_form_id':'1','approve_mode':approve_mode,'loc':form.loc.value}).setHandler(function(){document.location.reload();}).send();}
intl_translation_dialog.prototype.submit_click=function(){var person,warnings;var status;if(!this.check_tokens()){var dialog=(new pop_dialog()).show_message('Unused Tokens','You did not use all the tokens while translating this string. '+'Please make sure you maintain all text in curly braces ( <b>{example}</b> ) in the translation.');}else if(warnings=this.check_warnings(this.native_str,this.textarea.value)){var dialog=(new pop_dialog()).show_choice('Translation Warning','There may be a problem with your translation! '+'The translation you provided failed the following style check'+(warnings.length==1?'':'s')+': <br />'+'<ul><li>'+warnings.join('</li><li>')+'</li></ul><br />'+'It\'s ok to ignore '+(warnings.length==1?'this warning':'these warnings')+' if it makes sense given the context of the phrase, but please make sure that this is the case.','Submit Translation',function(){dialog.hide();this.translation_submit();generic_dialog.get_dialog(this.form).hide();}.bind(this),'Review Translation',function(){dialog.hide();});}else{this.translation_submit();}}
intl_translation_dialog.prototype.handle_approver_checkbox=function(cb){var cbs=this.approved_trs;for(i=0;i<cbs.length;i++){if(cbs[i]!=cb){cbs[i].checked=false;}}
var translation=ge('tr_id_'+cb.value).innerHTML;if(cb.checked==false){$('intl-translation').value='';}else{$('intl-translation').value=translation;}
if(ge('intl_ajax')['approved_tr_id']){ge('intl_ajax').approved_tr_id.value=cb.value;}
this.refresh_tokens();}
function intl_show_legal_dialog(){var dialog=new pop_dialog();dialog.show_choice('Terms Applicable to Translate Facebook'
+'<br/><small>Date of Last Revision: December 13, 2007</small>','The Translate Facebook application collects translations, comments, suggestions, ideas, feedback and other information ("Submissions") from you and other users in connection with Facebook\'s language translation project to provide Facebook access in multiple languages (the "Project").'
+'<br/><br/>You understand that your participation in the Project is for the benefit of the Facebook user community as it will allow users whose participation is currently limited by language to more fully participate.  You acknowledge that your participation in the Project is entirely voluntary, and you understand that no monetary or other compensation will be given to persons, including you, for Submissions.  You may provide as much or as little input into the Project as you wish and can cease contributing to the Project at any time.'
+'<br/><br/>In consideration of Facebook\'s permitting you to participate in the Project and the benefits to the Facebook user community of which you are a member, you acknowledge and agree that any Submissions that you provide to Facebook will be owned by Facebook.  Accordingly, you irrevocably assign to Facebook all right, title and interest, including all intellectual property rights, in and to all Submissions, and Facebook is entitled to the unrestricted use and dissemination of these Submissions for any purpose, commercial or otherwise, without acknowledgment, consent or monetary or other tangible compensation to you.  To the extent that the foregoing assignment is or becomes invalid or unenforceable to any degree or for any reason, you grant Facebook an irrevocable, perpetual, exclusive, fully-paid-up, royalty-free, worldwide right and license, with the right to sublicense, to use, reproduce, display, perform, create derivative works of, distribute and otherwise exploit the Submissions in any manner.'
+'<br/><br/>Please note: Translate Facebook is subject to and governed by these Additional Terms Applicable to Translate Facebook (the "Additional Terms") as well as the <a href="/terms.php">Facebook Terms of Use</a>. In the event of any conflict between these Additional Terms and the Facebook Terms of Use, these Additional Terms control. Capitalized terms that are not defined in these Additional Terms will have the definitions provided them in the Terms of Use.  Facebook reserves the right, in our sole discretion, to change, modify, add, or delete portions of these Additional Terms at any time without further notice. If we do this, we will post the changes to these Additional Terms on this page and will indicate at the top of this page the date these terms were last revised. You agree to waive any specific notice of such changes, and your continued use and operation of Translate Facebook after any such changes constitutes your acceptance of the new Additional Terms. It is your responsibility to regularly check the Site to determine if there have been changes to these Additional Terms.','Close',function(){generic_dialog.get_dialog(this).hide()});}
function intl_disable_rooster_save(obj){var save=document.getElementById('install_translation_app');save.disabled=!obj.checked;var container=document.getElementById('install_container');if(obj.checked){container.style.display='block';}else{container.style.display='none';}}
function intl_confirm_rooster_and_install_app(uid,divid){document.location='add.php?api_key=efa7a7045708fcadede8d705e39b1642';}
function substr_count(haystack,needle){var count=0,pos=haystack.indexOf(needle);while(pos!=-1){count++;pos=haystack.indexOf(needle,pos+1);}
return count;}
function reset_tr_checkbox(){var cbs=document.getElementsByName('approved_trs');if(cbs.length){for(i=0;i<cbs.length;i++){cbs[i].checked=false;}}
if(ge('intl_ajax')['approved_tr_id']){ge('intl_ajax').approved_tr_id.value=null;}}
function intl_help_preview(obj){var dialog=new contextual_dialog();dialog.set_context(obj);dialog.show_message('Preview Mode','Check this box to see Facebook using the '+'translations that are currently most highly voted. '+'Some messages may still be in English if Facebook '+'has not been fully translated into your language yet.'+'<br/><br/>'+'If you see a translation that looks wrong, you can '+'click the "Translate While Browsing" box that is '+'available when you are in preview mode; that will '+'allow you to vote on any of the existing translations '+'you see, or suggest new ones of your own.','Okay',function(){dialog.hide();});}
function intl_help_translate(obj){var dialog=new contextual_dialog();dialog.set_context(obj);dialog.show_message('Translate While Browsing','Check this box to vote on translations or suggest '+'new ones of your own while you use Facebook. '+'<br/><br/>'+'With this box checked, clicking on any underlined '+'phrase will give you a small translation control '+'panel. If you want to click on a link to go to '+'another page, rather than to see the control '+'panel, just hold down the mouse button for '+'at least 1 second.'+'<br/><br/>'+'Red underlined phrases have not been translated yet. '+'Yellow underlined phrases were translated by you. '+'Green underlined phrases were translated by someone '+'else.','Okay',function(){dialog.hide();});}
function intl_set_cookie_locale(obj){var locale=obj.options[obj.selectedIndex].value;clearCookie('locale');setCookie('locale',locale,7);document.location.reload();}
if(typeof(ScriptInventory)!='undefined'){ScriptInventory.addScript&&ScriptInventory.addScript("\/var\/releases\/thefacebook-r82587-02122008\/www\/html\/js\/intl.js","82469",1203052591);}

try{if(window.fbJavascriptLibrariesHaveLoaded){Util.error('You have double-included base.js and possibly other Javascript files; '+'it may be in a package. This will cause you great unhappiness. Each '+'file should be included at most once.');}
window.fbJavascriptLibrariesHaveLoaded=true;}catch(ignored){}
function gen_unique(){return++gen_unique._counter;}
gen_unique._counter=0;function ge(id){if(typeof(id)=='undefined'){Util.error('Tried to get an undefined element!');return null;}
var obj;if(typeof(id)=='string'){obj=document.getElementById(id);if(!(ua.ie()>=7)){return obj;}
if(!obj){return null;}else if(typeof(obj.id)=='string'&&obj.id==id){return obj;}else{var candidates=document.getElementsByName(id);if(!candidates||!candidates.length){return null;}
var maybe=[];for(var ii=0;ii<candidates.length;ii++){var c=candidates[ii];if(!c.id&&id){continue;}
if(typeof(c.id)=='string'&&c.id!=id){continue;}
maybe.push(candidates[ii]);}
if(!maybe.length){return null;}
return maybe[0];}}else{return id;}
return null;}
function $(){var el=ge.apply(null,arguments);if(!el){Util.warn('Tried to get element %q, but it is not present in the page. (Use ge() '+'to test for the presence of an element.)',arguments[0]);}
return el;}
function show(){for(var i=0;i<arguments.length;i++){var element=ge(arguments[i]);if(element&&element.style)element.style.display='';}
return false;}
function hide(){for(var i=0;i<arguments.length;i++){var element=ge(arguments[i]);if(element&&element.style)element.style.display='none';}
return false;}
function shown(el){el=ge(el);return(el.style.display!='none'&&!(el.style.display==''&&el.offsetWidth==0));}
function toggle(){for(var i=0;i<arguments.length;i++){var element=$(arguments[i]);element.style.display=get_style(element,"display")=='block'?'none':'block';}
return false;}
function is_descendent(base_obj,target_id){var target_obj=ge(target_id);if(base_obj==null)return;while(base_obj!=target_obj){if(base_obj.parentNode){base_obj=base_obj.parentNode;}else{return false;}}
return true;}
function get_style(object,prop){function hyphenate(prop){return prop.replace(/[A-Z]/g,function(match){return'-'+match.toLowerCase();});}
if(window.getComputedStyle){return window.getComputedStyle(object,null).getPropertyValue(hyphenate(prop));}
if(document.defaultView&&document.defaultView.getComputedStyle){var computedStyle=document.defaultView.getComputedStyle(object,null);if(computedStyle)
return computedStyle.getPropertyValue(hyphenate(prop));if(prop=="display")
return"none";Util.error("Can't retrieve requested style %q due to a bug in Safari",prop);}
if(object.currentStyle){return object.currentStyle[prop];}
return object.style[prop];}
function close_more_list(){var list_expander=ge('expandable_more');if(list_expander){list_expander.style.display='none';removeEventBase(document,'click',list_expander.offclick,list_expander.id);}
var sponsor=ge('ssponsor');if(sponsor){sponsor.style.position='';}
var link_obj=ge('more_link');if(link_obj){link_obj.innerHTML=tx('base01');link_obj.className='expand_link more_apps';}}
function expand_more_list(){var list_expander=ge('expandable_more');var more_link=ge('more_section');if(more_link){remove_css_class_name(more_link,'highlight_more_link');}
if(list_expander){list_expander.style.display='block';list_expander.offclick=function(e){if(!is_descendent(event_get_target(e),'sidebar_content')){close_more_list();}}.bind(list_expander);addEventBase(document,'click',list_expander.offclick,list_expander.id);}
var sponsor=ge('ssponsor');if(sponsor){sponsor.style.position='static';}
var link_obj=ge('more_link');if(link_obj){link_obj.innerHTML=tx('base02');link_obj.className='expand_link less_apps';}}
function toggle_more_list(){var list_expander=ge('expandable_more');if(!list_expander){return false;}
if(list_expander.style.display=='none'){expand_more_list();}else{close_more_list();}}
function remove_node(node){if(node.removeNode){node.removeNode(true);}else{for(var ii=node.childNodes.length-1;ii>=0;ii--){remove_node(node.childNodes[ii]);}
node.parentNode.removeChild(node);}
return null;}
function create_hidden_input(name,value){var new_input=document.createElement('input');new_input.name=name;new_input.id=name;new_input.value=value;new_input.type='hidden';return new_input;}
function has_css_class_name(elem,cname){return(elem&&cname)?new RegExp('\\b'+trim(cname)+'\\b').test(elem.className):false;}
function swap_css_class_name(elements,class1,class2){for(var i=0;i<elements.length;i++){var element=ge(elements[i]);if(element.className.indexOf(class1)!=-1){element.className=element.className.replace(class1,class2);}else{element.className=element.className.replace(class2,class1);}}}
function add_css_class_name(elem,cname){if(elem&&cname){if(elem.className){if(has_css_class_name(elem,cname)){return false;}else{elem.className+=' '+trim(cname);return true;}}else{elem.className=cname;return true;}}else{return false;}}
function remove_css_class_name(elem,cname){if(elem&&cname&&elem.className){cname=trim(cname);var old=elem.className;elem.className=elem.className.replace(new RegExp('\\b'+cname+'\\b'),'');return elem.className!=old;}else{return false;}}
function toggle_css_class_name(elem,cname){if(has_css_class_name(elem,cname)){remove_css_class_name(elem,cname);}else{add_css_class_name(elem,cname);}}
function set_inner_html(obj,html){var dummy='<span style="display:none">&nbsp</span>';html=html.replace('<style',dummy+'<style');html=html.replace('<STYLE',dummy+'<STYLE');html=html.replace('<script',dummy+'<script');html=html.replace('<SCRIPT',dummy+'<SCRIPT');obj.innerHTML=html;eval_inner_js(obj);addSafariLabelSupport(obj);}
function eval_inner_js(obj){var scripts=obj.getElementsByTagName('script');for(var i=0;i<scripts.length;i++){if(scripts[i].src){var script=document.createElement('script');script.type='text/javascript';script.src=scripts[i].src;document.body.appendChild(script);}else{try{eval_global(scripts[i].innerHTML);}catch(e){if(typeof console!='undefined'){console.error(e);}}}}}
function eval_global(js){var obj=document.createElement('script');obj.type='text/javascript';try{obj.innerHTML=js;}catch(e){obj.text=js;}
document.body.appendChild(obj);}
var KEYS={BACKSPACE:8,TAB:9,RETURN:13,ESC:27,SPACE:32,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46};var KeyCodes={Up:63232,Down:63233,Left:63234,Right:63235};function mouseX(event)
{return event.pageX||(event.clientX+
(document.documentElement.scrollLeft||document.body.scrollLeft));}
function mouseY(event)
{return event.pageY||(event.clientY+
(document.documentElement.scrollTop||document.body.scrollTop));}
function pageScrollX()
{return document.body.scrollLeft||document.documentElement.scrollLeft;}
function pageScrollY()
{return document.body.scrollTop||document.documentElement.scrollTop;}
function elementX(obj){if(ua.safari()<500&&obj.tagName=='TR'){obj=obj.firstChild;}
var left=obj.offsetLeft;var op=obj.offsetParent;while(obj.parentNode&&document.body!=obj.parentNode){obj=obj.parentNode;left-=obj.scrollLeft;if(op==obj){if(ua.safari()<500&&obj.tagName=='TR'){left+=obj.firstChild.offsetLeft;}else{left+=obj.offsetLeft;}
op=obj.offsetParent;}}
return left;}
function elementY(obj){if(ua.safari()<500&&obj.tagName=='TR'){obj=obj.firstChild;}
var top=obj.offsetTop;var op=obj.offsetParent;while(obj.parentNode&&document.body!=obj.parentNode){obj=obj.parentNode;if(!isNaN(obj.scrollTop)){top-=obj.scrollTop;}
if(op==obj){if(ua.safari()<500&&obj.tagName=='TR'){top+=obj.firstChild.offsetTop;}else{top+=obj.offsetTop;}
op=obj.offsetParent;}}
return top;}
function getElementsByTagNames(list,obj){if(!obj)var obj=document;var tagNames=list.split(',');var resultArray=new Array();for(var i=0;i<tagNames.length;i++){var tags=obj.getElementsByTagName(tagNames[i]);for(var j=0;j<tags.length;j++){resultArray.push(tags[j]);}}
var testNode=resultArray[0];if(!testNode)return[];if(testNode.sourceIndex){resultArray.sort(function(a,b){return a.sourceIndex-b.sourceIndex;});}
else if(testNode.compareDocumentPosition){resultArray.sort(function(a,b){return 3-(a.compareDocumentPosition(b)&6);});}
return resultArray;}
function get_all_form_inputs(root_element){if(!root_element){root_element=document;}
return getElementsByTagNames('input,select,textarea,button',root_element);}
function get_form_select_value(select){return select.options[select.selectedIndex].value;}
function set_form_select_value(select,value){for(var i=0;i<select.options.length;++i){if(select.options[i].value==value){select.selectedIndex=i;break;}}}
function get_form_attr(form,attr){var val=form[attr];if(typeof val=='object'&&val.tagName=='INPUT'){var pn=val.parentNode,ns=val.nextSibling,node=val;pn.removeChild(node);val=form[attr];ns?pn.insertBefore(node,ns):pn.appendChild(node);}
return val;}
function serialize_form_helper(data,name,value){var match=/([^\]]+)\[([^\]]*)\](.*)/.exec(name);if(match){data[match[1]]=data[match[1]]||{};if(match[2]==''){var i=0;while(data[match[1]][i]!=undefined){i++;}}else{i=match[2];}
if(match[3]==''){data[match[1]][i]=value;}else{serialize_form_helper(data[match[1]],i.concat(match[3]),value);}}else{data[name]=value;}}
function serialize_form(obj){var data={};var elements=obj.tagName=='FORM'?obj.elements:get_all_form_inputs(obj);for(var i=elements.length-1;i>=0;i--){if(elements[i].name&&!elements[i].disabled){if(!(elements[i].type=='radio'||elements[i].type=='checkbox')||elements[i].checked||(!elements[i].type||elements[i].type=='text'||elements[i].type=='password'||elements[i].type=='hidden'||elements[i].tagName=='TEXTAREA'||elements[i].tagName=='SELECT')){serialize_form_helper(data,elements[i].name,elements[i].value);}}}
return data;}
function is_button(element){var tagName=element.tagName.toUpperCase();if(tagName=='BUTTON'){return true;}
if(tagName=='INPUT'&&element.type){var type=element.type.toUpperCase();return type=='BUTTON'||type=='SUBMIT';}
return false;}
function autogrow_textarea(obj){var padding=15;var shadow_div_id='shadow_'+obj.id;var shadow_div;if(!(shadow_div=ge(shadow_div_id))){shadow_div=document.createElement('div');shadow_div.id=shadow_div_id;shadow_div.style.position="absolute";shadow_div.style.left="-10000px";shadow_div.style.top="-10000px";shadow_div.style.fontSize=parseInt(get_style(obj,'fontSize'))+'px';shadow_div.style.fontFamily=get_style(obj,'fontFamily');shadow_div.style.width=parseInt(obj.clientWidth-8)+'px';obj.setAttribute('startHeight',obj.clientHeight);obj.parentNode.appendChild(shadow_div);}
var clientHeight=obj.clientHeight;shadow_div.innerHTML=htmlspecialchars(obj.value).replace(/[\n]/g,'<br />&nbsp;');var shadowHeight=shadow_div.clientHeight;var to_height;var startHeight=obj.getAttribute('startHeight');if(shadowHeight<startHeight){to_height=startHeight;}else{to_height=shadowHeight+padding;}
if(to_height&&to_height!=clientHeight){obj.style.height=to_height+'px';}}
function textarea_maxlength(obj,length){if(obj.maxlength||!length){return;}
obj.maxlength=length;var callback=textarea_maxlength_truncate.bind(null,obj,length);addEventBase(obj,'keydown',callback);addEventBase(obj,'keypress',callback);addEventBase(obj,'keyup',callback);setInterval(callback,150);}
function textarea_maxlength_truncate(obj,length,event){if(obj.value.length>length){obj.value=obj.value.substring(0,length);}else if(obj.value.length==length){var key=event_get_keypress_keycode(event);var ok_keys=[KEYS.LEFT,KEYS.RIGHT,KEYS.UP,KEYS.DOWN,KEYS.BACKSPACE,KEYS.DELETE,KEYS.ESC]
if(ok_keys.indexOf(key)==-1){event_prevent(event);}}}
function addEventBase(obj,type,fn,name_hash)
{if(obj.addEventListener){obj.addEventListener(type,fn,false);}
else if(obj.attachEvent)
{var fn_name=type+fn+name_hash;obj["e"+fn_name]=fn;obj[fn_name]=function(){obj["e"+fn_name](window.event);}
obj.attachEvent("on"+type,obj[fn_name]);}
return fn;}
function removeEventBase(obj,type,fn,name_hash)
{if(obj.removeEventListener){obj.removeEventListener(type,fn,false);}
else if(obj.detachEvent)
{var fn_name=type+fn+name_hash;if(obj[fn_name]){obj.detachEvent("on"+type,obj[fn_name]);obj[fn_name]=null;obj["e"+fn_name]=null;}}}
function placeholderSetup(id){var el=ge(id);if(!el)return;if(el.type=='search')return;var ph=el.getAttribute("placeholder");if(!ph||ph=="")
return;if(el.value==ph)
el.value="";el.is_focused=(el.value!="");if(!el.is_focused){el.value=ph;el.style.color='#777';el.is_focused=0;}
addEventBase(el,'focus',placeholderFocus);addEventBase(el,'blur',placeholderBlur);}
function placeholderFocus(){if(!this.is_focused){this.is_focused=1;this.value='';this.style.color='#000';var rs=this.getAttribute("radioselect");if(rs&&rs!=""){var re=document.getElementById(rs);if(!re){return;}
if(re.type!='radio')return;re.checked=true;}}}
function placeholderBlur(){var ph=this.getAttribute("placeholder")
if(this.is_focused&&ph&&this.value==""){this.is_focused=0;this.value=ph;this.style.color='#777';}}
function placeholderGetValue(id){var el=ge(id);if(!el){return;}
return el.getAttribute("placeholder");}
function setFlashFallback(id,required_version){var fallback=ge(id);var version=deconcept.SWFObjectUtil.getPlayerVersion();if(fallback&&version['major']>0){var current_version=version['major']+'.'+version['minor']+'.'+version['rev'];fallback.innerHTML=tx('flash:upgrade-explanation',{'required-version':required_version,'current-version':current_version});}}
function getFlashPlayer(){goURI('http://adobe.com/go/getflashplayer');return false;}
function optional_drop_down_menu(arrow,link,menu,event,arrow_class,arrow_old_class,on_click_callback,off_click_callback)
{if(menu.style.display=='none'){menu.style.display='block';var old_arrow_classname=arrow_old_class?arrow_old_class:arrow.className;if(link){link.className='active';}
arrow.className=arrow_class?arrow_class:'global_menu_arrow_active';var justChanged=true;var shim=ge(menu.id+'_iframe');if(shim){shim.style.top=menu.style.top;shim.style.right=menu.style.right;shim.style.display='block';shim.style.width=(menu.offsetWidth+2)+'px';shim.style.height=(menu.offsetHeight+2)+'px';}
menu.offclick=function(e){if(!justChanged){hide(this);if(link){link.className='';}
arrow.className=old_arrow_classname;var shim=ge(menu.id+'_iframe');if(shim){shim.style.display='none';shim.style.width=menu.offsetWidth+'px';shim.style.height=menu.offsetHeight+'px';}
if(off_click_callback){off_click_callback(e);}
removeEventBase(document,'click',this.offclick,menu.id);}else{justChanged=false;}}.bind(menu);if(on_click_callback){on_click_callback();}
addEventBase(document,'click',menu.offclick,menu.id);}
return false;}
function position_app_switcher(){var switcher=ge('app_switcher');var menu=ge('app_switcher_menu');menu.style.top=(switcher.offsetHeight-1)+'px';menu.style.right='0px';}
function hover_tooltip(object,hover_link,hover_class,offsetX,offsetY){if(object.tooltip){var tooltip=object.previousSibling;tooltip.style.display='block';return;}else{object.parentNode.style.position="relative";var tooltip=document.createElement('div');tooltip.className="tooltip_pro "+hover_class;tooltip.style.left=-9999+'px';tooltip.style.display='block';tooltip.innerHTML='<div class="tooltip_text"><span>'+hover_link+'</span></div>'+'<div class="tooltip_pointer"></div>';object.parentNode.insertBefore(tooltip,object);while(tooltip.firstChild.firstChild.offsetWidth<=0){1;}
var TOOLTIP_PADDING=16;var offsetWidth=tooltip.firstChild.firstChild.offsetWidth+TOOLTIP_PADDING;tooltip.style.width=offsetWidth+'px';tooltip.style.display='none';tooltip.style.left=offsetX+object.offsetLeft-((offsetWidth-6-object.offsetWidth)/2)+'px';tooltip.style.top=offsetY+'px';tooltip.style.display='block';object.tooltip=true;object.onmouseout=function(e){hover_clear_tooltip(object)};}}
function hover_clear_tooltip(object){var tooltip=object.previousSibling;tooltip.style.display='none';}
function addSafariLabelSupport(base){if(ua.safari()<500){var labels=(base||document.body).getElementsByTagName("label");for(i=0;i<labels.length;i++){labels[i].addEventListener('click',addLabelAction,true);}}}
function addLabelAction(event){var id=this.getAttribute('for');var item=null;if(id){item=document.getElementById(id);}else{item=this.getElementsByTagName('input')[0];}
if(!item||event.srcElement==item){return;}
if(item.type=='checkbox'){item.checked=!item.checked;}else if(item.type=='radio'){var radios=document.getElementsByTagName('input');for(i=0;i<radios.length;i++){if(radios[i].name==item.name&&radios[i].form==item.form){radios.checked=false;}}
item.checked=true;}else{item.focus();}
if(item.onclick){item.onclick(event);}}
function escapeURI(u)
{if(encodeURIComponent){return encodeURIComponent(u);}
if(escape){return escape(u);}}
function goURI(href){window.location.href=href;}
function is_email(email){return/^([\w!.%+\-])+@([\w\-])+(?:\.[\w\-]+)+$/.test(email);}
function getViewportWidth(){var width=0;if(document.documentElement&&document.documentElement.clientWidth){width=document.documentElement.clientWidth;}
else if(document.body&&document.body.clientWidth){width=document.body.clientWidth;}
else if(window.innerWidth){width=window.innerWidth-18;}
return width;};function getViewportHeight(){var height=0;if(window.innerHeight){height=window.innerHeight-18;}
else if(document.documentElement&&document.documentElement.clientHeight){height=document.documentElement.clientHeight;}
else if(document.body&&document.body.clientHeight){height=document.body.clientHeight;}
return height;};function getPageScrollHeight(){var height;if(typeof(window.pageYOffset)=='number'){height=window.pageYOffset;}else if(document.body&&document.body.scrollTop){height=document.body.scrollTop;}else if(document.documentElement&&document.documentElement.scrollTop){height=document.documentElement.scrollTop;}
if(isNaN(height))return 0;return height;};function getRadioFormValue(obj){for(i=0;i<obj.length;i++){if(obj[i].checked){return obj[i].value;}}
return null;}
function getTableRowShownDisplayProperty(){if(ua.ie()){return'inline';}else{return'table-row';}}
function showTableRow()
{for(var i=0;i<arguments.length;i++){var element=ge(arguments[i]);if(element&&element.style)element.style.display=getTableRowShownDisplayProperty();}
return false;}
function getParentRow(el){el=ge(el);while(el.tagName&&el.tagName!="TR"){el=el.parentNode;}
return el;}
function stopPropagation(e){if(!e)var e=window.event;e.cancelBubble=true;if(e.stopPropagation){e.stopPropagation();}}
function show_standard_status(status){s=ge('standard_status');if(s){var header=s.firstChild;header.innerHTML=status;show('standard_status');}}
function hide_standard_status(){s=ge('standard_status');if(s){hide('standard_status');}}
function adjustImage(obj,stop_word,max){var block=obj.parentNode;while(get_style(block,'display')!='block'&&block.parentNode){block=block.parentNode;}
var width=block.offsetWidth;if(obj.offsetWidth>width){try{if(ua.ie()){var img_div=document.createElement('div');img_div.style.filter='progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+obj.src.replace('"','%22')+'", sizingMethod="scale")';img_div.style.width=width+'px';img_div.style.height=Math.floor(((width/obj.offsetWidth)*obj.offsetHeight))+'px';if(obj.parentNode.tagName=='A'){img_div.style.cursor='pointer';}
obj.parentNode.insertBefore(img_div,obj);obj.parentNode.removeChild(obj);}else{throw 1;}}catch(e){obj.style.width=width+'px';}}
remove_css_class_name(obj,'img_loading');}
function imageConstrainSize(src,maxX,maxY,placeholderid){var image=new Image();image.onload=function(){if(image.width>0&&image.height>0){var width=image.width;var height=image.height;if(width>maxX||height>maxY){var desired_ratio=maxY/maxX;var actual_ratio=height/width;if(actual_ratio>desired_ratio){width=width*(maxY/height);height=maxY;}else{height=height*(maxX/width);width=maxX;}}
var placeholder=ge(placeholderid);var newimage=document.createElement('img');newimage.src=src;newimage.width=width;newimage.height=height;placeholder.parentNode.insertBefore(newimage,placeholder);placeholder.parentNode.removeChild(placeholder);}}
image.src=src;}
function set_opacity(obj,opacity){try{obj.style.opacity=(opacity==1?'':opacity);obj.style.filter=(opacity==1?'':'alpha(opacity='+opacity*100+')');}
catch(e){}}
function get_opacity(obj){var opacity=get_style(obj,'filter');var val=null;if(opacity&&(val=/(\d+(?:\.\d+)?)/.exec(opacity))){return parseFloat(val.pop())/100;}else if(opacity=get_style(obj,'opacity')){return parseFloat(opacity);}else{return 1;}}
function get_caret_position(obj){obj.focus();if(document.selection){if(obj.tagName=='INPUT'){var range=document.selection.createRange();return{start:-range.moveStart('character',-obj.value.length),end:-range.moveEnd('character',-obj.value.length)};}else if(obj.tagName=='TEXTAREA'){var range=document.selection.createRange();var range2=range.duplicate();range2.moveToElementText(obj);range2.setEndPoint('StartToEnd',range);var end=obj.value.length-range2.text.length;range2.setEndPoint('StartToStart',range);return{start:obj.value.length-range2.text.length,end:end};}else{return{start:undefined,end:undefined};}}else{return{start:obj.selectionStart,end:obj.selectionEnd};}}
function set_caret_position(obj,start,end){if(document.selection){if(obj.tagName=='TEXTAREA'){var i=obj.value.indexOf("\r",0);while(i!=-1&&i<end){end--;if(i<start){start--;}
i=obj.value.indexOf("\r",i+1);}}
var range=obj.createTextRange();range.collapse(true);range.moveStart('character',start);if(end!=undefined){range.moveEnd('character',end-start);}
range.select();}else{obj.selectionStart=start;var sel_end=end==undefined?start:end;obj.selectionEnd=Math.min(sel_end,obj.value.length);obj.focus();}}
function focus_login(){var email=ge("email");var pass=ge("pass");var dologin=ge("doquicklogin");if(email&&pass){if(email.value!=""&&pass.value==""){pass.focus();}else if(email.value==""){email.focus();}else if(email.value!=""&&pass.value!=""){dologin.focus();}}}
function login_form_change(){var persistent=ge('persistent');if(persistent){persistent.checked=false;}}
function require_password_confirmation(onsuccess,oncancel){if((!getCookie('sid')||getCookie('sid')=='0')||getCookie('pk')){onsuccess();return;}
require_password_confirmation.onsuccess=onsuccess;require_password_confirmation.oncancel=oncancel;(new pop_dialog()).show_ajax_dialog('/ajax/password_check_dialog.php');}
function search_onsubmit(form){form.submit();}
function search_submit(){var search_form=ge('qsearchform');var search_input=ge('q');if(search_input.value!=""){search_form.submit();}else{search_input.focus();}
return;}
var ua={ie:function(){return this._ie;},firefox:function(){return this._firefox;},opera:function(){return this._opera;},safari:function(){return this._safari;},windows:function(){return this._windows;},osx:function(){return this._osx;},populate:function(){var agent=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera.(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))/.exec(navigator.userAgent);var os=/(Mac OS X;)|(Windows;)/.exec(navigator.userAgent);if(agent){ua._ie=agent[1]?parseFloat(agent[1]):NaN;ua._firefox=agent[2]?parseFloat(agent[2]):NaN;ua._opera=agent[3]?parseFloat(agent[3]):NaN;ua._safari=agent[4]?parseFloat(agent[4]):NaN;}else{ua._ie=ua._firefox=ua._opera=ua._safari=NaN;}
if(os){ua._osx=!!os[1];ua._windows=!!os[2];}else{ua._osx=ua._windows=false;}},adjustBehaviors:function(){onloadRegister(addSafariLabelSupport);if(ua.ie()<7){try{document.execCommand('BackgroundImageCache',false,true);}catch(ignored){}}}};function is_scalar(v){switch(typeof(v)){case'string':case'number':case'null':case'boolean':return true;}
return false;}
function is_empty(obj){for(var i in obj){return false;}
return true;}
function is_node(o,of_type){if(typeof(Node)=='undefined'){Node=null;}
try{if(!o||!((Node!=undefined&&o instanceof Node)||o.nodeName)){return false;}}catch(ignored){return false;}
if(typeof(of_type)!=="undefined"){if(!(of_type instanceof Array)){of_type=[of_type];}
var name;try{name=new String(o.nodeName).toUpperCase();}catch(ignored){return false;}
for(var ii=0;ii<of_type.length;ii++){try{if(name==of_type[ii].toUpperCase()){return true;}}catch(ignored){}}
return false;}
return true;}
var DOM={setText:function(el,text){if(ua.firefox()){el.textContent=text;}else{el.innerText=text;}},getText:function(el){if(ua.firefox()){return el.textContent;}else{return el.innerText;}},setContent:function(el,content){if(ua.ie()){for(var ii=el.childNodes.length-1;ii>=0;--ii){DOM.remove(el.childNodes[ii]);}}else{el.innerHTML='';}
if(content instanceof HTML){set_inner_html(el,content.toString());}else if(is_scalar(content)){content=document.createTextNode(content);el.appendChild(content);}else if(is_node(content)){el.appendChild(content);}else if(content instanceof Array){for(var ii=0;ii<content.length;ii++){var node=content[ii];if(!is_node(node)){node=document.createTextNode(node);}
el.appendChild(node);}}else{Util.error('No way to set content %q.',content);}},remove:function(el){return remove_node(el);},create:function(element,attributes,children){element=document.createElement(element);if(attributes){attributes=copy_properties({},attributes);if(attributes.style){copy_properties(element.style,attributes.style);delete attributes.style;}
copy_properties(element,attributes);}
if(children!=undefined){DOM.setContent(element,children);}
return element;},scry:function(element,pattern){pattern=pattern.split('.');var tag=pattern[0]||null;if(!tag){return[];}
var cls=pattern[1]||null;var candidates=element.getElementsByTagName(tag);if(cls!==null){var satisfy=[];for(var ii=0;ii<candidates.length;ii++){if(CSS.hasClass(candidates[ii],cls)){satisfy.push(candidates[ii]);}}
candidates=satisfy;}
return candidates;}};$N=DOM.create;var CSS={removeClass:function(element,className){return remove_css_class_name(element,className);},hasClass:function(element,className){return has_css_class_name(element,className);},addClass:function(element,className){return add_css_class_name(element,className);},setClass:function(element,className){element.className=className;return CSS;},Cursor:{kGrabbable:'grabbable',kGrabbing:'grabbing',kEditable:'editable',set:function(element,name){element=element||document.body;switch(name){case CSS.Cursor.kEditable:name='text';break;case CSS.Cursor.kGrabbable:if(ua.firefox()){name='-moz-grab';}else{name='move';}
break;case CSS.Cursor.kGrabbing:if(ua.firefox()){name='-moz-grabbing';}else{name='move';}
break;}
element.style.cursor=name;}}};if(Object.prototype.eval){window.eval=Object.prototype.eval;}
delete Object.prototype.eval;delete Object.prototype.valueOf;Array.prototype.forEach=null;Array.prototype.every=null;Array.prototype.map=null;Array.prototype.some=null;Array.prototype.reduce=null;Array.prototype.reduceRight=null;Array.prototype.filter=null;Array.prototype.sort=(function(sort){return function(callback){return(this==window)?null:(callback?sort.call(this,function(a,b){return callback(a,b)}):sort.call(this));}})(Array.prototype.sort);Array.prototype.reverse=(function(reverse){return function(){return(this==window)?null:reverse.call(this);}})(Array.prototype.reverse);Array.prototype.concat=(function(concat){return function(){return(this==window)?null:concat.apply(this,arguments);}})(Array.prototype.concat);Array.prototype.slice=(function(slice){return function(){return(this==window)?null:slice.apply(this,arguments);}})(Array.prototype.slice);if(!Array.prototype.indexOf){Array.prototype.indexOf=function(val,index){if(!index||index<0){index=0;}
for(var i=index;i<this.length;i++){if(this[i]==val){return i;}}
return-1;};}
Array.prototype.each=function(callback){if(this==window){return;}
for(var i=0;i<this.length;i++){callback.call(this,this[i],i);}}
Array.prototype.clone=Array.prototype.slice;Function.prototype.extend=function(superclass){var superprototype=__metaprototype(superclass,0);var subprototype=__metaprototype(this,superprototype.prototype.__level+1);subprototype.parent=superprototype;}
function __metaprototype(obj,level){if(obj.__metaprototype){return obj.__metaprototype;}
var metaprototype=new Function();metaprototype.construct=__metaprototype_construct;metaprototype.prototype.construct=__metaprototype_wrap(obj,level,true);metaprototype.prototype.__level=level;metaprototype.base=obj;obj.prototype.parent=metaprototype;obj.__metaprototype=metaprototype;return metaprototype;}
function __metaprototype_construct(instance){__metaprototype_init(instance.parent);var parents=[];var obj=instance;while(obj.parent){parents.push(new_obj=new obj.parent());new_obj.__instance=instance;obj=obj.parent;}
instance.parent=parents[1];parents.reverse();parents.pop();instance.__parents=parents;instance.__instance=instance;return instance.parent.construct.apply(instance.parent,arguments);}
window.aiert=(function(a){var aiert=function _aiert(m){a(m);}
return aiert;})(window.alert);window.alert=function _alert(m){if(m!==undefined){(new Image()).src='/ajax/typeahead_callback.php?l='+escapeURI(document.location)+'&m='+
escapeURI(m)+(typeof Env!='undefined'?'&t='+Math.round(((new Date()).getTime()-Env.start)/100):'')+'&d='+escapeURI((typeof fbpd!='undefined')?fbpd:'')+'&s='+escapeURI(typeof Util!='undefined'?Util.stack():'');return window.aiert(m);}}
function __metaprototype_init(metaprototype){if(metaprototype.initialized)return;var base=metaprototype.base.prototype;if(metaprototype.parent){__metaprototype_init(metaprototype.parent);var parent_prototype=metaprototype.parent.prototype;for(i in parent_prototype){if(i!='__level'&&i!='construct'&&base[i]===undefined){base[i]=metaprototype.prototype[i]=parent_prototype[i]}}}
metaprototype.initialized=true;var level=metaprototype.prototype.__level;for(i in base){if(i!='parent'){base[i]=metaprototype.prototype[i]=__metaprototype_wrap(base[i],level);}}}
function __metaprototype_wrap(method,level,shift){if(typeof method!='function'||method.__prototyped){return method;}
var func=function(){var instance=this.__instance;if(instance){var old_parent=instance.parent;instance.parent=level?instance.__parents[level-1]:null;if(shift){var args=[];for(var i=1;i<arguments.length;i++){args.push(arguments[i]);}
var ret=method.apply(instance,args);}else{var ret=method.apply(instance,arguments);}
instance.parent=old_parent;return ret;}else{return method.apply(this,arguments);}}
func.__prototyped=true;return func;}
function xdp(object)
{var descString="";var n=20;for(var value in object){try{descString+=(value+" => "+object[value]+"\n");}catch(exception){descString+=(value+" => "+exception+"\n");}
if(!n--){aiert(descString);descString='';n=20;}}
if(descString!="")
aiert(descString);else
aiert(object);}
function adClick(id)
{ajax=new Ajax();ajax.get('/ajax/redirect.php',{'id':id},true);return true;}
function abTest(data,inline)
{AsyncRequest.pingURI('/ajax/abtest.php',{data:data,"post_form_id":null},true);if(!inline){return true;}}
function ac(metadata)
{AsyncRequest.pingURI('/ajax/ac.php',{'meta':metadata},true);return true;}
function bagofholding(){return undefined;};function id(input){return input;}
function setCookie(cookieName,cookieValue,nDays){if(nDays){var today=new Date();var expire=new Date();expire.setTime(today.getTime()+3600000*24*nDays);}
document.cookie=cookieName+"="+escape(cookieValue)+"; "+
(nDays?"expires="+expire.toGMTString()+"; ":"")+"path=/; domain=.facebook.com";}
function clearCookie(cookieName){document.cookie=cookieName+"=; expires=Mon, 26 Jul 1997 05:00:00 GMT; path=/; domain=.facebook.com";}
function getCookie(name){var nameEQ=name+"=";var ca=document.cookie.split(';');for(i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' ')c=c.substring(1,c.length);if(c.indexOf(nameEQ)==0){return unescape(c.substring(nameEQ.length,c.length));}}
return null;}
function do_post(url){var pieces=/(^([^?])+)\??(.*)$/.exec(url);var form=document.createElement('form');form.action=pieces[1];form.method='post';form.style.display='none';var sparam=/([\w]+)(?:=([^&]+)|&|$)/g;var param=null;if(ge('post_form_id'))
pieces[3]+='&post_form_id='+$('post_form_id').value;while(param=sparam.exec(pieces[3])){var input=document.createElement('input');input.type='hidden';input.name=param[1];input.value=param[2];form.appendChild(input);}
document.body.appendChild(form);form.submit();return false;}
function dynamic_post(url,params){var form=document.createElement('form');form.action=url;form.method='POST';form.style.display='none';if(ge('post_form_id')){params['post_form_id']=$('post_form_id').value;}
for(var param in params){var input=document.createElement('input');input.type='hidden';input.name=param;input.value=params[param];form.appendChild(input);}
document.body.appendChild(form);form.submit();return false;}
function rand32(){return Math.floor(Math.random()*4294967295);}
function play_sound(path,loop){loop=loop||false;var s;document.body.appendChild(s=document.createElement('span'));s.innerHTML='<embed src="'+path+'" autostart="true" hidden="true" '+'loop="'+(loop?"true":"false")+'" />';}
function image_has_loaded(obj){if((obj.mimeType!=null&&obj.complete&&obj.mimeType!='')||(obj.naturalHeight!=null&&obj.complete&&obj.naturalHeight!=0)){return true;}else if(ua.safari()<3){var new_image=new Image();new_image.src=obj.src;if(new_image.complete==true){return true;}
delete new_image;}}
function image_has_failed(obj){if((obj.complete==null&&obj.width==20&&obj.height==20)||(obj.mimeType!=null&&obj.complete&&obj.mimeType=='')||(obj.naturalHeight!=null&&obj.complete&&obj.naturalHeight==0)){return true;}}
function anchor_set(anchor){window.location=window.location.href.split('#')[0]+'#'+anchor;}
function anchor_get(){return window.location.href.split('#')[1]||null;}
function event_get(e){return e||window.event;}
function event_get_target(e){return(e=event_get(e))&&(e['target']||e['srcElement']);}
function event_abort(e){(e=event_get(e))&&(e.cancelBubble=true)&&e.stopPropagation&&e.stopPropagation();return false;}
function event_prevent(e){(e=event_get(e))&&!(e.returnValue=false)&&e.preventDefault&&e.preventDefault();return false;}
function event_get_keypress_keycode(event){event=event_get(event);if(!event){return false;}
switch(event.keyCode){case 63232:return 38;case 63233:return 40;case 63234:return 37;case 63235:return 39;case 63272:case 63273:case 63275:return null;case 63276:return 33;case 63277:return 34;}
if(event.shiftKey){switch(event.keyCode){case 33:case 34:case 37:case 38:case 39:case 40:return null;}}else{return event.keyCode;}}
function env_get(k){return typeof(window['Env'])!='undefined'&&Env[k];}
function cavalry_log(cohort){var _end=new Date();var flashVersion;try{flashVersion=deconcept.SWFObjectUtil.getPlayerVersion();}catch(x){flashVersion={major:0,minor:0,rev:666};}
(new Image()).src="/common/instrument_endpoint.php?g="+cohort
+"&uri="+encodeURIComponent(window.location)
+"&d="+(_end.getTime()-Env.start)
+"&c="+Env.cache
+"&p="+Env.pkgv
+"&k="+(document.cookie.length)
+"&fmj="+flashVersion.major
+"&fmn="+flashVersion.minor
+"&frv="+flashVersion.rev
+"&"+Math.random();}
function ScriptInventory(){}
ScriptInventory._inventory=[];ScriptInventory.addScript=function(name,version,time){ScriptInventory._inventory.push([name,version,time].join(':'));}
ScriptInventory.getInventory=function(){return ScriptInventory._inventory.join(';');}
function chain(u,v){var calls=[];for(var ii=0;ii<arguments.length;ii++){calls.push(arguments[ii]);}
return function(){for(var ii=0;ii<calls.length;ii++){if(calls[ii]&&calls[ii].apply(null,arguments)===false){return false;}}
return true;}}
function onloadRegister(handler){window.loaded?_runHook(handler):_addHook('onloadhooks',handler);}
function onafterloadRegister(handler){window.loaded?_runHook(handler):_addHook('onafterloadhooks',handler);}
function onbeforeunloadRegister(handler){_addHook('onbeforeunloadhooks',handler);}
function onunloadRegister(handler){_addHook('onunloadhooks',handler);}
function _onloadHook(){_runHooks('onloadhooks');window.loaded=true;}
function _runHook(handler){try{handler();}catch(ex){Util.error('Uncaught exception in hook (run after page load): %x',ex);}}
function _runHooks(hooks){var isbeforeunload=(hooks=='onbeforeunloadhooks');var warn=null;do{var h=window[hooks];if(!isbeforeunload){window[hooks]=null;}
if(!h){break;}
for(var ii=0;ii<h.length;ii++){if(isbeforeunload){warn=warn||h[ii]();}else{h[ii]();}}
if(isbeforeunload){break;}}while(window[hooks]);if(isbeforeunload){if(warn){return warn;}else{window.loaded=false;}}}
function _addHook(hooks,handler){(window[hooks]?window[hooks]:(window[hooks]=[])).push(handler);}
function _bootstrapEventHandlers(){if(document.addEventListener){if(ua.safari()){var timeout=setInterval(function(){if(/loaded|complete/.test(document.readyState)){_onloadHook();clearTimeout(timeout);}},10);}else{document.addEventListener("DOMContentLoaded",_onloadHook,true);}}else{var src='javascript:void(0)';if(window.location.protocol=='https:'){src='//:';}
document.write('<script onreadystatechange="if (this.readyState==\'complete\') {'+'this.parentNode.removeChild(this);_onloadHook();}" defer="defer" '+'src="'+src+'"><\/script\>');}
window.onload=chain(window.onload,function(){_onloadHook();_runHooks('onafterloadhooks');});window.onbeforeunload=function(){return _runHooks('onbeforeunloadhooks');};window.onunload=chain(window.onunload,function(){_runHooks('onunloadhooks');});}
function iterTraverseDom(root,visitCb){var c=root,n=null;var it=0;do{n=c.firstChild;if(!n){if(visitCb(c)==false)
return;n=c.nextSibling;}
if(!n){var tmp=c;do{n=tmp.parentNode;if(n==root)
break;if(visitCb(n)==false)
return;tmp=n;n=n.nextSibling;}
while(!n);}
c=n;}
while(c!=root);}
function prependChild(parent,elem){if(parent.firstChild){parent.insertBefore(elem,parent.firstChild);}else{parent.appendChild(elem);}}
function insertAfter(parent,child,elem){if(parent!=child.parentNode){Util.error('child is not really a child of parent - wtf, seriously.');}
if(child.nextSibling){var ret=parent.insertBefore(elem,child.nextSibling);}else{var ret=parent.appendChild(elem);}
if(!ret){return null;}
return elem;}
ua.populate();_bootstrapEventHandlers();ua.adjustBehaviors();if(navigator&&navigator.userAgent&&!(parseInt((/Gecko\/([0-9]+)/.exec(navigator.userAgent)||[]).pop())<=20060508)){document.domain='facebook.com';}
if(typeof(ScriptInventory)!='undefined'){ScriptInventory.addScript&&ScriptInventory.addScript("\/var\/releases\/thefacebook-r82587-02122008\/www\/html\/js\/base.js","82827",1203052585);}

function bind(obj,method){var args=[];for(var ii=2;ii<arguments.length;ii++){args.push(arguments[ii]);}
return function(){var _obj=obj||this;var _args=args.slice();for(var jj=0;jj<arguments.length;jj++){_args.push(arguments[jj]);}
if(typeof(method)=="string"){if(_obj[method]){return _obj[method].apply(_obj,_args);}}else{return method.apply(_obj,_args);}}}
Function.prototype.bind=function(context){var argv=[arguments[0],this]
var argc=arguments.length;for(var ii=1;ii<argc;ii++){argv.push(arguments[ii]);}
return bind.apply(null,argv);}
function copy_properties(u,v){for(var k in v){u[k]=v[k];}
if(ua.ie()&&(v.toString!==undefined)&&(u.toString!==v.toString)){u.toString=v.toString;}
return u;}
function HTML(content){if(this===window){return new HTML(content);}
this.content=content;return this;}
copy_properties(HTML.prototype,{toString:function(){return this.content;}});var Try={these:function(){var len=arguments.length;var res;for(var ii=0;ii<len;ii++){try{res=arguments[ii]();return res;}catch(anIgnoredException){}}
return res;}};var Util={fallbackErrorHandler:function(msg){aiert(msg);},isDevelopmentEnvironment:function(){return env_get('dev');},warn:function(){Util.log(sprintf.apply(null,arguments),'warn');},error:function(){Util.log(sprintf.apply(null,arguments),'error');},log:function(msg,type){if(Util.isDevelopmentEnvironment()){var written=false;if(typeof(window['TabConsole'])!='undefined'){var con=TabConsole.getInstance();if(con){con.log(msg,type);written=true;}}
if(typeof(console)!="undefined"&&console.error){console.error(msg);written=true;}
if(!written&&type!='deprecated'&&Util.fallbackErrorHandler){Util.fallbackErrorHandler(msg);}}else{if(type=='error'){msg+='\n\n'+Util.stack();(typeof(window['debug_rlog'])=='function')&&debug_rlog(msg);}}},deprecated:function(what){if(!Util._deprecatedThings[what]){Util._deprecatedThings[what]=true;var msg=sprintf('Deprecated: %q is deprecated.\n\n%s',what,Util.whyIsThisDeprecated(what));Util.log(msg,'deprecated');}},stack:function(){try{try{({}).llama();}catch(e){if(e.stack){var stack=[];var trace=[];var regex=/^([^@]+)@(.+)$/mg;var line=regex.exec(e.stack);do{stack.push([line[1],line[2]]);}while(line=regex.exec());for(var i=0;i<stack.length;i++){trace.push('#'+i+' '+stack[i][0]+' @ '+(stack[i+1]?stack[i+1][1]:'?'));}
return trace.join('\n');}else{var trace=[];var pos=arguments.callee;var stale=[];while(pos){for(var i=0;i<stale.length;i++){if(stale[i]==pos){trace.push('#'+trace.length+' ** recursion ** @ ?');return trace.join('\n');}}
stale.push(pos);var args=[];for(var i=0;i<pos.arguments.length;i++){if(pos.arguments[i]instanceof Function){var func=/function ?([^(]*)/.exec(pos.arguments[i].toString()).pop();args.push(func?func:'anonymous');}else if(pos.arguments[i]instanceof Array){args.push('Array');}else if(pos.arguments[i]instanceof Object){args.push('Object');}else if(typeof pos.arguments[i]=='string'){args.push('"'+pos.arguments[i].replace(/("|\\)/g,'\\$1')+'"');}else{args.push(pos.arguments[i]);}}
trace.push('#'+trace.length+' '+/function?([^(]*)/.exec(pos).pop()+'('+args.join(', ')+') @ ?');if(trace.length>100)break;pos=pos.caller;}
return trace.join('\n');}}}catch(e){return'No stack trace available';}},whyIsThisDeprecated:function(what){return Util._deprecatedBecause[what.toLowerCase()]||'No additional information is available about this deprecation.';},_deprecatedBecause:{},_deprecatedThings:{}};var Configurable={getOption:function(opt){if(typeof(this.option[opt])=='undefined'){Util.warn('Failed to get option %q; it does not exist.',opt);return null;}
return this.option[opt];},setOption:function(opt,v){if(typeof(this.option[opt])=='undefined'){Util.warn('Failed to set option %q; it does not exist.',opt);}else{this.option[opt]=v;}
return this;},getOptions:function(){return this.option;}};function Ad(){}
copy_properties(Ad,{refreshRate:10000,lastRefreshTime:new Date(),refresh:function(){var delta=(new Date().getTime()-Ad.lastRefreshTime.getTime());if(delta>Ad.refreshRate){var f=Ad.getFrame();if(f){if(!f.osrc){f.osrc=f.src;}
f.src=f.osrc+'?'+Math.random();Ad.lastRefreshTime=new Date();}}},getFrame:function(){return ge('ssponsor')&&$('ssponsor').getElementsByTagName('iframe')[0];}});function URI(uri){if(uri===window){Util.error('what the hell are you doing');return;}
if(this===window){return new URI(uri||window.location.href);}
this.parse(uri||'');}
copy_properties(URI,{expression:/(((\w+):\/\/)([^\/:]*)(:(\d+))?)?([^#?]*)(\?([^#]*))?(#(.*))?/,explodeQuery:function(q){if(!q){return{};}
var ii,t,r={};q=q.split('&');for(ii=0,l=q.length;ii<l;ii++){t=q[ii].split('=');r[decodeURIComponent(t[0])]=(typeof(t[1])=='undefined')?'':decodeURIComponent(t[1]);}
return r;},implodeQuery:function(obj,name){name=name||'';var r=[];if(obj instanceof Array){for(var ii=0;ii<obj.length;ii++){try{r.push(URI.implodeQuery(obj[ii],name?name+'['+ii+']':ii));}catch(ignored){}}}else if(typeof(obj)=='object'){if(is_node(obj)){r.push('{node}');}else{for(var k in obj){try{r.push(URI.implodeQuery(obj[k],name?name+'['+k+']':k));}catch(ignored){}}}}else if(name&&name.length){r.push(encodeURIComponent(name)+'='+encodeURIComponent(obj));}else{r.push(encodeURIComponent(obj));}
return r.join('&');}});copy_properties(URI.prototype,{parse:function(uri){var m=uri.toString().match(URI.expression);copy_properties(this,{protocol:m[3]||'',domain:m[4]||'',port:m[6]||'',path:m[7]||'',query:URI.explodeQuery(m[9]||''),fragment:m[11]||''});return this;},setProtocol:function(p){this.protocol=p;return this;},getProtocol:function(){return this.protocol;},setQueryData:function(o){this.query=o;return this;},addQueryData:function(o){return this.setQueryData(copy_properties(this.query,o));},getQueryData:function(){return this.query;},setFragment:function(f){this.fragment=f;return this;},getFragment:function(){return this.fragment;},setDomain:function(d){this.domain=d;return this;},getDomain:function(){return this.domain;},setPort:function(p){this.port=p;return this;},getPort:function(){return this.port;},setPath:function(p){this.path=p;return this;},getPath:function(){return this.path;},toStringValue:function(){var r='';var q=URI.implodeQuery(this.query);this.protocol&&(r+=this.protocol+'://');this.domain&&(r+=this.domain);this.port&&(r+=':'+this.port);if(this.domain&&!this.path){r+='/';}
this.path&&(r+=this.path);q&&(r+='?'+q);this.fragment&&(r+='#'+this.fragment);return r;},toString:function(){return this.toStringValue();},isSameOrigin:function(asThisURI){var uri=asThisURI||window.location.href;if(!(uri instanceof URI)){uri=new URI(uri.toString());}
if(this.getProtocol()&&this.getProtocol()!=uri.getProtocol()){return false;}
if(this.getDomain()&&this.getDomain()!=uri.getDomain()){return false;}
return true;},coerceToSameOrigin:function(targetURI){var uri=targetURI||window.location.href;if(!(uri instanceof URI)){uri=new URI(uri.toString());}
if(this.isSameOrigin(uri)){return true;}
if(this.getProtocol()!=uri.getProtocol()){return false;}
var dst=uri.getDomain().split('.');var src=this.getDomain().split('.');if(dst.pop()=='com'&&src.pop()=='com'){if(dst.pop()=='facebook'&&src.pop()=='facebook'){this.setDomain(uri.getDomain());return true;}}
return false;}});function EventController(eventResponderObject){copy_properties(this,{queue:[],ready:false,responder:eventResponderObject});};copy_properties(EventController.prototype,{startQueue:function(){this.ready=true;this.dispatchEvents();return this;},pauseQueue:function(){this.ready=false;return this;},addEvent:function(event){if(event.toLowerCase()!==event){Util.warn('Event name %q contains uppercase letters; events should be lowercase.',event);}
var args=[];for(var ii=1;ii<arguments.length;ii++){args.push(arguments[ii]);}
this.queue.push({type:event,args:args});if(this.ready){this.dispatchEvents();}
return false;},dispatchEvents:function(){if(!this.responder){Util.error('Event controller attempting to dispatch events with no responder! '+'Provide a responder when constructing the controller.');}
for(var ii=0;ii<this.queue.length;ii++){var evtName='on'+this.queue[ii].type;if(typeof(this.responder[evtName])!='function'&&typeof(this.responder[evtName])!='null'){Util.warn('Event responder is unable to respond to %q event! Implement a %q '+'method. Note that method names are case sensitive; use lower case '+'when defining events and event handlers.',this.queue[ii].type,evtName);}else{if(this.responder[evtName]){this.responder[evtName].apply(this.responder,this.queue[ii].args);}}}
this.queue=[];}});
if(typeof(ScriptInventory)!='undefined'){ScriptInventory.addScript&&ScriptInventory.addScript("\/var\/releases\/thefacebook-r82587-02122008\/www\/html\/js\/extended.js","78843",1203052589);}

function htmlspecialchars(text){if(typeof(text)=='undefined'||!text.toString){return'';}
if(text===false){return'0';}else if(text===true){return'1';}
return text.toString().replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/'/g,'&#039;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
var htmlize=htmlspecialchars;function html_wordwrap(str,wrap_limit,txt_fn){if(typeof wrap_limit=='undefined'){wrap_limit=60;}
if(typeof txt_fn!='function'){txt_fn=htmlize;}
var regex=new RegExp("\\S{"+(wrap_limit+1)+"}",'g');var start=0;var str_remaining=str;var ret_arr=[];var matches=str.match(regex);if(matches){for(var i=0;i<matches.length;i++){var match=matches[i];var match_index=start+str_remaining.indexOf(match);var chunk=str.substring(start,match_index);if(chunk){ret_arr.push(txt_fn(chunk));}
ret_arr.push(txt_fn(match)+'<wbr/>');start=match_index+match.length;str_remaining=str.substring(start);}}
if(str_remaining){ret_arr.push(txt_fn(str_remaining));}
return ret_arr.join('');}
function text_get_hyperlinks(str){if(typeof(str)!='string'){return[];}
return str.match(/(?:(?:ht|f)tps?):\/\/[^\s<]*[^\s<\.)]/ig);}
function html_hyperlink(str,txt_fn,url_fn){var accepted_delims={'<':'>','*':'*','{':'}','[':']',"'":"'",'"':'"','#':'#','+':'+','-':'-','(':')'};if(typeof(str)=='undefined'||!str.toString){return'';}
if(typeof txt_fn!='function'){txt_fn=htmlize;}
if(typeof url_fn!='function'){url_fn=htmlize;}
var str=str.toString();var http_matches=text_get_hyperlinks(str);var start=0;var str_remaining=str;var ret_arr=[];var str_remaining=str;if(http_matches){for(var i=0;i<http_matches.length;i++){var http_url=http_matches[i];var http_index=start+str_remaining.indexOf(http_url);var str_len=http_url.length;var non_url=str.substring(start,http_index);if(non_url){ret_arr.push(txt_fn(non_url));}
var trailing='';if(http_index>0){var delim=str[http_index-1];if(typeof accepted_delims[delim]!='undefined'){var end_delim=accepted_delims[delim];var end_delim_index=http_url.indexOf(end_delim);if(end_delim_index!=-1){trailing=txt_fn(http_url.substring(end_delim_index));http_url=http_url.substring(0,end_delim_index);}}}
http_str=url_fn(http_url);http_url_quote_escape=http_url.replace(/"/g,'%22');ret_arr.push('<a href="'+http_url_quote_escape+'" target="_blank" rel="nofollow">'+
http_str+'</a>'+trailing);start=http_index+str_len;str_remaining=str.substring(start);}}
if(str_remaining){ret_arr.push(txt_fn(str_remaining));}
return ret_arr.join('');}
function escape_js_quotes(text){if(typeof(text)=='undefined'||!text.toString){return'';}
return text.toString().replace(/\\/g,'\\\\').replace(/\n/g,'\\n').replace(/\r/g,'\\r').replace(/"/g,'\\x22').replace(/'/g,'\\\'').replace(/</g,'\\x3c').replace(/>/g,'\\x3e').replace(/&/g,'\\x26');}
function trim(text){if(typeof(text)=='undefined'||!text.toString){return'';}
return text.toString().replace(/^\s*|\s*$/g,'');}
function nl2br(text){if(typeof(text)=='undefined'||!text.toString){return'';}
return text.toString().replace(/\n/g,'<br />');}
function sprintf(){if(arguments.length==0){Util.warn('sprintf() was called with no arguments; it should be called with at '+'least one argument.');return'';}
var args=['This is an argument vector.'];for(var ii=arguments.length-1;ii>0;ii--){if(typeof(arguments[ii])=="undefined"){Util.log('You passed an undefined argument (argument '+ii+' to sprintf(). '+'Pattern was: `'+(arguments[0])+'\'.','error');args.push('');}else if(arguments[ii]===null){args.push('');}else if(arguments[ii]===true){args.push('true');}else if(arguments[ii]===false){args.push('false');}else{if(!arguments[ii].toString){Util.log('Argument '+(ii+1)+' to sprintf() does not have a toString() '+'method. The pattern was: `'+(arguments[0])+'\'.','error');return'';}
args.push(arguments[ii]);}}
var pattern=arguments[0];pattern=pattern.toString().split('%');var patlen=pattern.length;var result=pattern[0];for(var ii=1;ii<patlen;ii++){if(args.length==0){Util.log('Not enough arguments were provide to sprintf(). The pattern was: '+'`'+(arguments[0])+'\'.','error');return'';}
if(!pattern[ii].length){result+="%";continue;}
var p=0;var m=0;var r='';var padChar=' ';var padSize=null;var maxSize=null;var rawPad='';var pos=0;if(m=pattern[ii].match(/^('.)?(?:(-?\d+\.)?(-?\d+)?)/)){if(m[2]!==undefined&&m[2].length){padSize=parseInt(rawPad=m[2]);}
if(m[3]!==undefined&&m[3].length){if(padSize!==null){maxSize=parseInt(m[3]);}else{padSize=parseInt(rawPad=m[3]);}}
pos=m[0].length;if(m[1]!==undefined&&m[1].length){padChar=m[1].charAt(1);}else{if(rawPad.charAt(0)==0){padChar='0';}}}
switch(pattern[ii].charAt(pos)){case's':raw=htmlspecialchars(args.pop().toString());break;case'h':raw=args.pop().toString();break;case'd':raw=parseInt(args.pop()).toString();break;case'f':raw=parseFloat(args.pop()).toString();break;case'q':raw="`"+htmlspecialchars(args.pop().toString())+"'";break;case'e':raw="'"+escape_js_quotes(args.pop().toString())+"'";break;case'L':var list=args.pop();for(var ii=0;ii<list.length;ii++){list[ii]="`"+htmlspecialchars(args.pop().toString())+"'";}
if(list.length>1){list[list.length-1]='and '+list[list.length-1];}
raw=list.join(', ');break;case'x':x=args.pop();var line='?';var src='?';try{if(typeof(x['line'])!='undefined'){line=x.line;}else if(typeof(x['lineNumber'])!='undefined'){line=x.lineNumber;}
if(typeof(x['sourceURL'])!='undefined'){src=x['sourceURL'];}else if(typeof(x['fileName'])!='undefined'){src=s['fileName'];}}catch(exception){}
var s='[An Exception]';try{s=x.message||x.toString();}catch(exception){}
raw=s+' [at line '+line+' in '+src+']';break;default:raw="%"+pattern[ii].charAt(pos+1);break;}
if(padSize!==null){if(raw.length<Math.abs(padSize)){var padding='';var padlen=(Math.abs(padSize)-raw.length);for(var ll=0;ll<padlen;ll++){padding+=padChar;}
if(padSize<0){raw+=padding;}else{raw=padding+raw;}}}
if(maxSize!==null){if(raw.length>maxSize){raw=raw.substr(0,maxSize);}}
result+=raw+pattern[ii].substring(pos+1);}
if(args.length>1){Util.log('Too many arguments ('+(args.length-1)+' extras) were passed to '+'sprintf(). Pattern was: `'+(arguments[0])+'\'.','error');}
return result;}
String.prototype.startsWith=function(substr){if(this==window){return null;}
return this.substring(0,substr.length)==substr;};String.prototype.split=(function(split){return function(separator,limit){var flags="";if(separator===null||limit===null){return[];}else if(typeof separator=='string'){return split.call(this,separator,limit);}else if(separator===undefined){return[this.toString()];}else if(separator instanceof RegExp){if(!separator._2||!separator._1){flags=separator.toString().replace(/^[\S\s]+\//,"");if(!separator._1){if(!separator.global){separator._1=new RegExp(separator.source,"g"+flags);}else{separator._1=1;}}}
separator1=separator._1==1?separator:separator._1;var separator2=(separator._2?separator._2:separator._2=new RegExp("^"+separator1.source+"$",flags));if(limit===undefined||limit<0){limit=false;}else{limit=Math.floor(limit);if(!limit)return[];}
var match,output=[],lastLastIndex=0,i=0;while((limit?i++<=limit:true)&&(match=separator1.exec(this))){if((match[0].length===0)&&(separator1.lastIndex>match.index)){separator1.lastIndex--;}
if(separator1.lastIndex>lastLastIndex){if(match.length>1){match[0].replace(separator2,function(){for(var j=1;j<arguments.length-2;j++){if(arguments[j]===undefined)match[j]=undefined;}});}
output=output.concat(this.substring(lastLastIndex,match.index),(match.index===this.length?[]:match.slice(1)));lastLastIndex=separator1.lastIndex;}
if(match[0].length===0){separator1.lastIndex++;}}
return(lastLastIndex===this.length)?(separator1.test("")?output:output.concat("")):(limit?output:output.concat(this.substring(lastLastIndex)));}else{return split.call(this,separator,limit);}}})(String.prototype.split);
if(typeof(ScriptInventory)!='undefined'){ScriptInventory.addScript&&ScriptInventory.addScript("\/var\/releases\/thefacebook-r82587-02122008\/www\/html\/js\/string.js","76744",1203052597);}

function AsyncRequest(){var dispatchResponse=bind(this,function(asyncResponse){try{this.clearStatusIndicator();this.handler(asyncResponse);}catch(exception){Util.error('The user supplied handler function for an AsyncRequest to URI %q '+'threw an exception: %x. (This is not a problem with AsyncRequest, it '+'is a problem with the callback, which failed to catch the exception.)',this.uri,exception);}});var dispatchErrorResponse=bind(this,function(asyncResponse,isTransport){try{this.clearStatusIndicator();if(isTransport){this.transportErrorHandler(asyncResponse);}else{this.errorHandler(asyncResponse);}}catch(exception){Util.error('Async error handler threw an exception for URI %q, when processing a '+'%d error: %x.',this.uri,asyncResponse.getError(),exception);}});var invokeResponseHandler=bind(this,function(){var isResponseGarbled=true;var desc='Something went wrong. We\'re working on getting this '+'fixed as soon as we can. You may be able to try again.';var dev=Util.isDevelopmentEnvironment();var r=new AsyncResponse();if(this.handler){try{var shield="for (;;);";var shieldlen=shield.length;if(this.transport.responseText.length<=shieldlen){if(!this.getOption('suppressErrorAlerts')){Util.error('AsyncResponse returned with shorter length than required.');}
throw"AsyncResponse too short.";}
var text=this.transport.responseText;var offset=0;while(text.charAt(offset)==" "||text.charAt(offset)=="\n"){offset++;}
if(offset&&text.substring(offset,offset+shieldlen)==shield){Util.error('Response for request to endpoint %q seems to be valid, but was '+'preceeded by whitespace. (This probably means that someone '+'committed whitespace in a header file.)',this.uri);}
var safeResponse=text.substring(offset+shieldlen);if(!this.getOption('suppressEvaluation')){var response;try{eval('response = ('+safeResponse+')');isResponseGarbled=false;}catch(exception){if(dev){desc=sprintf('Evaluation failed for <a href="javascript:aiert(%e);">'+'response from %q</a>: %x.',this.transport.responseText,this.uri,exception);}
copy_properties(r,{error:1003,errorSummary:dev?'Evaluation Error':'Oops',errorDescription:desc});}
if(!isResponseGarbled){if(typeof(response.payload)=='undefined'||typeof(response.error)=='undefined'||typeof(response.errorDescription)=='undefined'||typeof(response.errorSummary)=='undefined'){Util.warn('AsyncRequest to endpoint %q returned a JSON response, but it '+'is not properly formatted. The endpoint needs to provide a '+'response including both error and payload information; use '+'the AsyncResponse PHP class to do this easily.',this.uri);r.payload=response;}else{copy_properties(r,response);}}}else{r.payload=this.transport;}
if(r.getError()){dispatchErrorResponse(r);}else{dispatchResponse(r);}}catch(exception){if(dev){if(this.transport.responseText==''){desc=sprintf('An error occurred when making an AsyncRequest to %q. '+'The server returned an empty response.',this.uri);}else if(isResponseGarbled){desc=sprintf('An error occurred when decoding the JSON payload of the '+'AsyncResponse associated with an AsyncRequest to %q. The '+'server returned <a href="javascript:aiert(%e);">a garbled '+'response</a>, then Javascript threw an exception: %x.',this.uri,this.transport.responseText,exception);}else{desc=sprintf('An error occurred when decoding the JSON payload of the '+'AsyncResponse associated with an AsyncRequest to %q. '+'Javascript threw an exception: %x.',this.uri,exception);}}
copy_properties(r,{error:1000,errorSummary:dev?'Data Error':'Oops',errorDescription:desc});if(this.transportErrorHandler){dispatchErrorResponse(r,true);}else{Util.error('Something bad happened; provide a transport error handler for '+'complete details.');}}}});var invokeErrorHandler=bind(this,function(explicitError){try{if(!window.loaded){return;}}catch(ex){return;}
var r=new AsyncResponse();var err;try{err=explicitError||this.transport.status||1001;}catch(ex){err=1001;}
try{if(this.responseText==''){err=1002;}}catch(ignore){}
if(this.transportErrorHandler){var desc=sprintf('Transport error (#%d) while retrieving data from endpoint %q: %s',err,this.uri,AsyncRequest.getHTTPErrorDescription(err));if(!this.getOption('suppressErrorAlerts')){Util.error(desc);}
copy_properties(r,{error:err,errorSummary:AsyncRequest.getHTTPErrorSummary(err),errorDescription:desc});dispatchErrorResponse(r,true);}else{Util.error('Async request to %q failed with a %d error, but there was no error '+'handler available to deal with it.',this.uri,err);}});var onStateChange=function(){try{if(this.transport.readyState==4){if(this.transport.status>=200&&this.transport.status<300){invokeResponseHandler();}else{if(ua.safari()&&(typeof(this.transport.status)=='undefined')){invokeErrorHandler(1002);}else{invokeErrorHandler();}}
delete this.transport;}}catch(exception){try{if(!window.loaded){return;}}catch(ex){return;}
delete this.transport;if(this.remainingRetries){--this.remainingRetries;this.send(true);}else{if(!this.getOption('suppressErrorAlerts')){Util.error('AsyncRequest exception when attempting to handle a state change: %x.',exception);}
invokeErrorHandler(1001);}}};copy_properties(this,{onstatechange:onStateChange,dispatchResponse:dispatchResponse,transport:null,method:'POST',uri:'',handler:null,errorHandler:null,transportErrorHandler:null,statusElement:null,data:{},readOnly:false,writeRequiredParams:['post_form_id'],remainingRetries:0,option:{asynchronous:true,suppressErrorHandlerWarning:false,suppressEvaluation:false,suppressErrorAlerts:false,retries:1,jsonp:false}});if(typeof ErrorDialog!="undefined"){this.errorHandler=ErrorDialog.showAsyncError;this.transportErrorHandler=ErrorDialog.showAsyncError;}
return this;}
copy_properties(AsyncRequest,{getHTTPErrorSummary:function(errCode){return AsyncRequest._getHTTPError(errCode).summary;},getHTTPErrorDescription:function(errCode){return AsyncRequest._getHTTPError(errCode).description;},pingURI:function(uri,data,synchronous){return new AsyncRequest().setURI(uri).setData(data).setOption('asynchronous',!synchronous).setOption('suppressErrorHandlerWarning',true).send();},receiveJSONPResponse:function(path,data){if(this._JSONPReceivers[path]){var response=new AsyncResponse();copy_properties(response,data);for(var ii=0;ii<this._JSONPReceivers[path].length;ii++){this._JSONPReceivers[path][ii].dispatchResponse(response);}
delete this._JSONPReceivers[path];}},_getHTTPError:function(errCode){var e=AsyncRequest._HTTPErrors[errCode]||AsyncRequest._HTTPErrors[errCode-(errCode%100)]||{summary:'HTTP Error',description:'Unknown HTTP error #'+errCode};return e;},_HTTPErrors:{400:{summary:'Bad Request',description:'Bad HTTP request.'},401:{summary:'Unauthorized',description:'Not authorized.'},403:{summary:'Forbidden',description:'Access forbidden.'},404:{summary:'Not Found',description:'Web address does not exist.'},1000:{summary:'Bad Response',description:'Invalid response.'},1001:{summary:'No Network',description:'A network error occurred. Check that you are connected to the '+'internet.'},1002:{summary:'No Data',description:'The server did not return a response.'},1003:{summary:'Eval Error',description:'Exception thrown during JSON evaluation.'}},_JSONPReceivers:[]});copy_properties(AsyncRequest.prototype,{setMethod:function(m){this.method=m.toString().toUpperCase();return this;},getMethod:function(){return this.method;},setData:function(obj){this.data=obj;return this;},getData:function(){return this.data;},setURI:function(uri){if(!this.getOption('jsonp')&&!(new URI(uri)).isSameOrigin()){Util.error('Asynchronous requests must specify relative URIs (like %q); this '+'ensures they conform to the Same Origin Policy (see %q). The '+'provided absolute URI (%q) is invalid, use a relative URI instead. '+'If you need to dispatch cross-domain requests, you can use JSONP, '+'but consider this decision carefully because there are tradeoffs and '+'JSONP is completely insecure.','/path/to/endpoint.php','http://www.mozilla.org/projects/security/components/same-origin.html',uri);return this;}
this.uri=uri;return this;},getURI:function(){return this.uri;},setHandler:function(fn){if(typeof(fn)!='function'){Util.error('AsyncRequest response handlers must be functions. Pass a function, '+'or use bind() to build one.');}else{this.handler=fn;}
return this;},getHandler:function(){return this.handler;},setErrorHandler:function(fn){if(typeof(fn)!='function'){Util.error('AsyncRequest error handlers must be functions. Pass a function, or '+'use bind() to build one.');}else{this.errorHandler=fn;}
return this;},setTransportErrorHandler:function(fn){this.transportErrorHandler=fn;return this;},getErrorHandler:function(){return this.handler;},setReadOnly:function(readOnly){if(typeof(readOnly)!='boolean'){Util.error('AsyncRequest readOnly value must be a boolean.');}else{this.readOnly=readOnly;}
return this;},getReadOnly:function(){return this.readOnly;},setStatusElement:function(element){this.statusElement=element;return this;},getStatusElement:function(){return this.statusElement;},clearStatusIndicator:function(){if(this.getStatusElement()){remove_css_class_name($(this.getStatusElement()),'async_saving');}},addStatusIndicator:function(){if(this.getStatusElement()){add_css_class_name($(this.getStatusElement()),'async_saving');}},specifiesWriteRequiredParams:function(){var specifiesWriteRequiredParams=true;for(var i=0;i<this.writeRequiredParams.length;i++){var param=this.writeRequiredParams[i];if(typeof(this.data[param])=='undefined'){var e=ge(param);if(e&&typeof(e.value)!='undefined'){this.data[param]=e.value;}else{specifiesWriteRequiredParams=false;break;}}}
return specifiesWriteRequiredParams;},setOption:function(opt,v){if(typeof(this.option[opt])!='undefined'){this.option[opt]=v;}else{Util.warn('AsyncRequest option %q does not exist; request to set it was ignored.',opt);}
return this;},getOption:function(opt){if(typeof(this.option[opt])=='undefined'){Util.warn('AsyncRequest option %q does not exist, get request failed.',opt);}
return this.option[opt];},send:function(isRetry){isRetry=isRetry||false;if(!this.uri){Util.error('Attempt to dispatch an AsyncRequest without an endpoint URI! This is '+'all sorts of silly and impossible, so the request failed.');return false;}
if(!this.errorHandler&&!this.getOption('suppressErrorHandlerWarning')){Util.warn('Dispatching an AsyncRequest that does not have an error handler. '+'You SHOULD supply one, or use AsyncRequest.pingURI(). If this '+'omission is intentional and well-considered, set the %q option to '+'suppress this warning.','suppressErrorHandlerWarning');}
if(this.getOption('jsonp')&&this.method!='GET'){this.setMethod('GET');}
if(!this.getReadOnly()){if(!this.specifiesWriteRequiredParams()){Util.error('You are making a POST request without one or more of the required '+'parameters: %s. Requests which modify data and do not verify the '+'request origin through parameter validation are vulnerable to CSRF '+'attacks. You should either specify values for these parameters '+'explicitly by using setData(), put them in the page as inputs, or '+'mark this request as safe and idempotent by using setReadOnly(). '+'Consult the setReadOnly() documentation for more information.',this.writeRequiredParams.join(','));return false;}
if(this.method!='POST'){Util.error('You are making a GET request which modifies data; this violates '+'the HTTP spec and is generally a bad idea. Either change this '+'request to use POST or use setReadOnly() to mark the request as '+'idempotent and appropriate for HTTP GET. Consult the setReadOnly() '+'documentation for more information.');return false;}}
if(this.getOption('jsonp')){var path=URI(this.uri).getPath();if(!AsyncRequest._JSONPReceivers[path]){AsyncRequest._JSONPReceivers[path]=[];}
AsyncRequest._JSONPReceivers[path].push(this);setTimeout(function(uri){document.body.appendChild($N('script',{src:this.uri,type:"text/javascript"}))}.bind(this),0);return true;}
if(this.transport){Util.error('You must wait for an AsyncRequest to complete before sending another '+'request with the same object. To send two simultaneous requests, '+'create a second AsyncRequest object.');return false;}
var uri;var query=URI.implodeQuery(this.data);if(this.method=='GET'){uri=this.uri+(query?'?'+query:'');query='';}else{uri=this.uri;}
var transport=Try.these(function(){return new XMLHttpRequest();},function(){return new ActiveXObject("Msxml2.XMLHTTP");},function(){return new ActiveXObject("Microsoft.XMLHTTP");})||null;if(!transport){Util.error('Unable to build XMLHTTPRequest transport.');return false;}
transport.onreadystatechange=bind(this,'onstatechange');if(!isRetry){this.remainingRetries=0;if(this.getReadOnly()){this.remainingRetries=this.getOption('retries');}}
this.transport=transport;try{this.transport.open(this.method,uri,this.getOption('asynchronous'));}catch(ex){Util.error(sprintf('Exception when opening Async transport to %q: %x',uri,ex));return false;}
if(this.method=='POST'&&!this.setHeader){this.setHeader=true;this.transport.setRequestHeader('Content-Type','application/x-www-form-urlencoded');}
this.addStatusIndicator();this.transport.send(query);return true;}});function AsyncResponse(payload){copy_properties(this,{error:0,errorSummary:null,errorDescription:null,payload:payload||null});return this;}
copy_properties(AsyncResponse.prototype,{getPayload:function(){return this.payload;},getError:function(){return this.error;},getErrorSummary:function(){return this.errorSummary;},getErrorDescription:function(){return this.errorDescription;}});
if(typeof(ScriptInventory)!='undefined'){ScriptInventory.addScript&&ScriptInventory.addScript("\/var\/releases\/thefacebook-r82587-02122008\/www\/html\/js\/async.js","79035",1203052585);}

Util._deprecatedBecause={extend:'extend() has been renamed copy_properties() to avoid confusion with '+'Function.extend(). Use Function.extend() or subclass() to establish class'+'inheritence, and copy_properties() to copy properties between objects.',ajaxrequest:'AjaxRequest has been renamed AsyncRequest. The interface has not '+'changed.',ajaxresponse:'AjaxResponse has been renamed AsyncResponse. The interface has not '+'changed.',ajax:'The `Ajax\' class has been deprecated for sucking. Use AsyncRequest '+'and AsyncResponse to make remote HTTP requests. Prefer JSON to XML as '+'a transport encoding, but never say "AJAJ". AND WRITE ERROR HANDLERS! ',toggleinlineflyer:'This function is not used anywhere.',checkagree:'This function is marked as deprecated and not used anywhere.',dynamicdialog:'Dynamicdialog is deprecated in favor of dialogpro.'}
function extend(u,v){Util.deprecated('extend');return copy_properties(u,v);}
function checkAgree(){Util.deprecated('checkagree');if(document.frm.pic.value){if(document.frm.agree.checked){document.frm.submit();}else{show("error");}}}
function Ajax(doneHandler,failHandler)
{if(location.href.indexOf('/intern/')==-1){Util.deprecated('ajax');}
newAjax=this;this.onDone=doneHandler;this.onFail=failHandler;this.transport=this.getTransport();this.transport.onreadystatechange=ajaxTrampoline(this);}
Ajax.prototype.get=function(uri,query,force_sync)
{force_sync=force_sync||false;if(query&&(typeof query!='string')){query=URI.implodeQuery(query);}
fullURI=uri+(query?('?'+query):'');this.transport.open('GET',fullURI,!force_sync);this.transport.send('');}
Ajax.prototype.post=function(uri,data,force_sync,no_post_form_id)
{force_sync=force_sync||false;no_post_form_id=no_post_form_id||false;if(data&&(typeof data!='string')){data=URI.implodeQuery(data);}
if(!no_post_form_id){var post_form_id=ge('post_form_id');if(post_form_id){data+='&post_form_id='+post_form_id.value;}}
this.transport.open('POST',uri,!force_sync);this.transport.setRequestHeader("Content-Type","application/x-www-form-urlencoded");this.transport.send(data);}
Ajax.prototype.stateDispatch=function()
{try{if(this.transport.readyState==4){if(this.transport.status>=200&&this.transport.status<300&&this.transport.responseText.length>0){try{if(this.onDone)this.onDone(this,this.transport.responseText);}catch(tempError){console?console.error(tempError):false;}}else{try{if(this.onFail)this.onFail(this);}catch(tempError){console?console.error(tempError):false;}}}}catch(error){if(this.onFail)this.onFail(this);}}
Ajax.prototype.getTransport=function()
{var ajax=null;try{ajax=new XMLHttpRequest();}
catch(e){ajax=null;}
try{if(!ajax)ajax=new ActiveXObject("Msxml2.XMLHTTP");}
catch(e){ajax=null;}
try{if(!ajax)ajax=new ActiveXObject("Microsoft.XMLHTTP");}
catch(e){ajax=null;}
return ajax;}
function ajaxTrampoline(ajaxObject)
{return function(){ajaxObject.stateDispatch();};}
function toggle_dynamic_dialog_custom(rootEl,innerHTML){Util.deprecated('dynamicdialog');var ieHTML;ieHTML='<div id="ie_iframe_holder"></div>';ieHTML+='<div style="position: absolute; z-index: 100;">';innerHTML=ieHTML+innerHTML+'</div>';var dynamic_dialog=ge('dynamic_dialog');if(dynamic_dialog){if(shown(dynamic_dialog)&&same_place(rootEl,dynamic_dialog)){hide(dynamic_dialog);}else{move_here(rootEl,dynamic_dialog);dynamic_dialog.innerHTML=innerHTML;show('dynamic_dialog');}}else{var dynamic_dialog=document.createElement("div");dynamic_dialog.id='dynamic_dialog';dynamic_dialog.innerHTML=innerHTML;move_here(rootEl,dynamic_dialog);$('content').appendChild(dynamic_dialog);}
var height,width,ieIframeHTML;height=$('dialog').offsetHeight;width=$('dialog').offsetWidth;ieIframeHTML='<iframe width="'+width+' "height='+height+'" ';ieIframeHTML+='style="position: absolute; z-index: 99; border: none;"></iframe>';$('ie_iframe_holder').innerHTML=ieIframeHTML;return false;}
function same_place(rootEl,dynamic_dialog){Util.deprecated('dynamicdialog');if(rootEl=ge(rootEl)){if(elementY(rootEl)+20==elementY(dynamic_dialog))
return true;}
return false;}
function move_here(rootEl,el){Util.deprecated('dynamicdialog');var x=getViewportWidth()/2-120;var y=elementY(rootEl)+20;el.style.left=x+"px";el.style.top=y+"px";}
function toggle_dynamic_dialog_post(rootEl,headingText,contentText,confirmText,confirmLocation,confirmParams){Util.deprecated('dynamicdialog');var form_check_string=(ge('post_form_id')?('<input type="hidden" name="post_form_id" value="'+$('post_form_id').value+'"/>'):'');var formParams='';for(var param in confirmParams){formParams+='<input type="hidden" name="'+param+'" value="'+
confirmParams[param]+'"/>'}
var innerHTML='<table id="dialog" border="0" cellspacing="0" width="360">'+'<tr>'+'<td class="dialog">'+'<h4>'+headingText+'</h4>'+'<p>'+contentText+'</p>'+'<div class="buttons">'+'<form action="'+confirmLocation+'" method="post">'+
form_check_string+
formParams+'<input type="hidden" name="next" value="'+window.location+'"/>'+'<input type="submit" id="confirm" name="confirm" class="inputsubmit" '+'value="'+confirmText+'"/>&nbsp;<input type="button" id="cancel" '+'name="cancel" onclick="hide(\'dynamic_dialog\');" class="inputbutton" '+'value="'+tx('sh:cancel-button')+'" />'+'</form>'+'</div>'+'</td>'+'</tr>'+'</table>';return toggle_dynamic_dialog_custom(rootEl,innerHTML);}
function toggle_dynamic_dialog(rootEl,headingText,contentText,confirmText,confirmLocation){Util.deprecated('dynamicdialog');var form_check_string=(ge('post_form_id')?('<input type="hidden" name="post_form_id" value="'+$('post_form_id').value+'"/>'):'');var innerHTML="<form action=\""+confirmLocation+"\" method=\"post\">\n"+"<table id=\"dialog\" border=\"0\" cellspacing=\"0\" width=\"360\">"+"<tr>\n"+"<td class=\"dialog\">\n"+"<h4>"+headingText+"</h4>\n"+"<p>"+contentText+"</p>"+"<div class=\"buttons\">\n"+
form_check_string+"<input type=\"hidden\" name=\"next\" value=\""+window.location+"\"/>\n"+"<input type=\"submit\" id=\"confirm\" name=\"confirm\" class=\"inputsubmit\" value=\""+confirmText+"\"/>&nbsp;<input type=\"button\" id=\"cancel\" name=\"cancel\" onclick=\"hide('dynamic_dialog');\" class=\"inputbutton\" value=\""+tx('sh:cancel-button')+"\" />\n"+"</div>\n"+"</td>\n"+"</tr>\n"+"</table>\n"+"</form>\n";return toggle_dynamic_dialog_custom(rootEl,innerHTML);}
function toggle_dynamic_dialog_js(rootEl,headingText,contentText,confirmText,confirmJS){Util.deprecated('dynamicdialog');var innerHTML="<table id=\"dialog\" border=\"0\" cellspacing=\"0\" width=\"360\">"+"<tr>\n"+"<td class=\"dialog\">\n"+"<h4>"+headingText+"</h4>\n"+"<p>"+contentText+"</p>"+"<div class=\"buttons\">\n"+"<input type=\"button\" id=\"confirm\" name=\"confirm\" class=\"inputsubmit\"  value=\""+confirmText+"\" onclick=\""+confirmJS+"\"/>&nbsp;";innerHTML+="<input type=\"button\" id=\"cancel\" name=\"cancel\" onclick=\"hide('dynamic_dialog');\" class=\"inputbutton\" value=\""+tx('sh:cancel-button')+"\" />\n";innerHTML+="</div>\n"+"</td>\n"+"</tr>\n"+"</table>\n";return toggle_dynamic_dialog_custom(rootEl,innerHTML);}
if(typeof(ScriptInventory)!='undefined'){ScriptInventory.addScript&&ScriptInventory.addScript("\/var\/releases\/thefacebook-r82587-02122008\/www\/html\/js\/deprecated.js","83249",1203052587);}

var MAX_APP_LIST_END=275;var MAX_SIDENAV_LINKS=7;var MOVING_THRESHOLD=10;var saved_message=null;function track_moveable(container_obj,link_obj,app_id){link_obj.ondrag=function(e){event.cancelBubble=true;return false;}.bind(this);;this.listContainer=container_obj;this.link=link_obj;this.listContainer.onmousedown=function(e){return this._onclick(e?e:window.event);}.bind(this);this.app_id=app_id;this.moved=false;}
track_moveable.prototype._onclick=function(e){this.clickMouseY=mouseY(e);document.onselectstart=function(e){return false;};document.onmousemove=function(e){return this._track_move(e?e:window.event)}.bind(this);document.onmouseup=function(e){this._track_drop(e?e:window.event)}.bind(this);return false;}
track_moveable.prototype._track_move=function(e){if(Math.abs(mouseY(e)-this.clickMouseY)>MOVING_THRESHOLD){this.moved=true;var moveable=new moveable_app(this.listContainer,this.link);moveable._onclick(null,this.clickMouseY);}}
track_moveable.prototype._track_drop=function(e){document.onmouseout=document.onmouseup=document.onmousemove=document.onclick=null;this.link.onclick=function(e){return true;};if(!this.moved){log_navbar_click(this.app_id);this.moved=false;}}
function log_navbar_click(app_id){var asyncRequestPost=new AsyncRequest().setURI('/ajax/navt.php').setData({'app_id':app_id}).setHandler(function(response){}).setTransportErrorHandler(function(response){}).setErrorHandler(function(response){}).send();return true;}
function moveable_app(container_obj,link_obj){this.listContainer=container_obj;this.link=link_obj;this.listContainer.onmousedown=function(e){return this._onclick(e?e:window.event);}.bind(this);}
moveable_app.prototype._onclick=function(e,mouseYCoord){add_css_class_name(this.listContainer,'floating_container');var app_list_node=ge('app_list');this.listContainer.lowerBoundY=elementY(app_list_node.firstChild?app_list_node.firstChild:app_list_node);this.oldListID=this.listContainer.parentNode.parentNode.id;this.justOpened=false;var app_non_nav_list_node=ge('app_non_nav_list');this.listContainer.upperBoundY=elementY(app_non_nav_list_node.lastChild?app_non_nav_list_node.lastChild:app_non_nav_list_node);var listContainerHeight=(ua.ie()||ua.safari())?this.listContainer.offsetHeight:this.listContainer.offsetHeight-1;this.listContainer.parentNode.style.height=(listContainerHeight)+'px';this.listContainer.top=elementY(this.listContainer);mouseYCoord=mouseYCoord?mouseYCoord:mouseY(e);this.mouseOffset=mouseYCoord-this.listContainer.top;this.listContainer.style.top=this.listContainer.top+'px';document.onmousemove=function(e){return this._move(e?e:window.event)}.bind(this);document.onmouseup=function(e){this._drop(e?e:window.event)}.bind(this);this._calculateBoundaries();return false;}
moveable_app.prototype._calculateBoundaries=function(){var list=this.listContainer.parentNode.parentNode;var previousListItem=this.listContainer.parentNode.previousSibling;this.listContainer.prevList=null;this.listContainer.previousNodeY=null;if(previousListItem){this.listContainer.previousNodeY=elementY(previousListItem)+7;this.newList=false;}else if(list.id=='app_non_nav_list'){this.listContainer.prevList=ge('app_list');var elementPos=null;if(this.listContainer.prevList.lastChild){elementPos=this.listContainer.prevList.lastChild;}else{elementPos=this.listContainer.prevList;}
this.newList=true;this.listContainer.previousNodeY=elementY(elementPos)+20;}
var nextListItem=this.listContainer.parentNode.nextSibling;this.listContainer.nextList=null;this.listContainer.nextNodeY=null;if(nextListItem){this.listContainer.nextNodeY=elementY(nextListItem)-7;this.newList=false;}else if(list.id=='app_list'){this.listContainer.nextList=ge('app_non_nav_list');var elementPos=null;this.newList=true;if(this.listContainer.nextList.parentNode.style.display=='none'){this.justOpened=true;this.listContainer.nextNodeY=elementY(ge('more_link'))-18;}else{if(this.listContainer.nextList.firstChild){elementPos=this.listContainer.nextList.firstChild;}else{elementPos=this.listContainer.nextList;}
this.listContainer.nextNodeY=elementY(elementPos)-20;}}}
moveable_app.prototype._move=function(e){this.listContainer.top=mouseY(e)-this.mouseOffset;var oldParent=this.listContainer.parentNode;if(this.listContainer.nextNodeY&&this.listContainer.top>this.listContainer.nextNodeY){if(this.listContainer.nextList==null){var newParent=oldParent.nextSibling;newParent.appendChild(this.listContainer);oldParent.style.height=null;oldParent.appendChild(newParent.firstChild);}else{if(this.newList){expand_more_list();var newParent=document.createElement('div');newParent.className='list_item';this.listContainer.nextList.insertBefore(newParent,this.listContainer.nextList.firstChild);newParent.appendChild(this.listContainer);oldParent.parentNode.removeChild(oldParent);}}}
else if(this.listContainer.previousNodeY&&this.listContainer.top<this.listContainer.previousNodeY){if(this.listContainer.prevList==null){var newParent=oldParent.previousSibling;newParent.appendChild(this.listContainer);oldParent.style.height=null;oldParent.appendChild(newParent.firstChild);}else{var newParent=document.createElement('div');newParent.className='list_item';this.listContainer.prevList.appendChild(newParent);newParent.appendChild(this.listContainer);oldParent.parentNode.removeChild(oldParent);}}
if(this.listContainer.parentNode!=oldParent){oldParent.style.height=null;this.listContainer.parentNode.style.height=(this.listContainer.offsetHeight-1)+'px';this._calculateBoundaries();}
if((is_first_child(this.listContainer.parentNode,'app_list')&&this.listContainer.top<elementY(this.listContainer.parentNode))||(is_last_child(this.listContainer.parentNode,'app_non_nav_list')&&this.listContainer.top>elementY(this.listContainer.parentNode))){this.listContainer.style.top=(elementY(this.listContainer.parentNode)+1)+'px';}else{this.listContainer.style.top=this.listContainer.top+'px';}
return false;}
function is_first_child(elem,parent){return(elem.parentNode.id==parent)&&(elem.parentNode.firstChild==elem);}
function is_last_child(elem,parent){return(elem.parentNode.id==parent)&&(elem.parentNode.lastChild==elem);}
function onload_side_nav_check(){enforce_app_list_limits_and_save(false,'onload_side_nav');}
function enforce_app_list_limits_and_save(force_save,context){var display_list='';var app_list_node=ge('app_list');var more_apps_node=ge('app_non_nav_list');var more_list='';var max_reached=false;var extra_pixel_amount=0;var rearrange_message=ge('rearrange_message');if(rearrange_message){extra_pixel_amount=rearrange_message.offsetHeight+6;}
var threshold=MAX_APP_LIST_END+elementY(ge('sidebar'))+extra_pixel_amount;while(elementY(app_list_node)+app_list_node.offsetHeight>threshold||app_list_node.childNodes.length>MAX_SIDENAV_LINKS){if(more_apps_node.firstChild){more_apps_node.insertBefore(app_list_node.lastChild,more_apps_node.firstChild);}else{more_apps_node.appendChild(app_list_node.lastChild);}
max_reached=true;}
if(max_reached||force_save){for(var i=0;i<app_list_node.childNodes.length;i++){if(i!=0){display_list+=':';}
display_list+=app_list_node.childNodes[i].firstChild.id;}
for(var i=0;i<more_apps_node.childNodes.length;i++){if(i!=0){more_list+=':';}
more_list+=more_apps_node.childNodes[i].firstChild.id;}
var ajax=new Ajax(function(obj,text){eval(text);});var post_vars={'display_list':display_list,'more_list':more_list,'context':context};ajax.post('/ajax/apps_menu.php',post_vars);}}
moveable_app.prototype._drop=function(e){remove_css_class_name(this.listContainer,'floating_container');this.listContainer.style.top=null;this.listContainer.parentNode.style.height=null;enforce_app_list_limits_and_save(true,'rearrange_order');if(this.listContainer.parentNode.parentNode.id!='app_non_nav_list'&&this.justOpened){window.setTimeout('close_more_list()',500);}
document.onmouseout=document.onmouseup=document.onmousemove=document.onclick=null;if(this.link){this.link.onclick=function(e){return false;};}
return false;}
function change_status_message(className,messageContent){var message=ge('rearrange_message');message.className=className;message.innerHTML=messageContent;}
function move_lists(obj,to_list_id,changeFunction,front_of_list){to_list_obj=ge(to_list_id);if(changeFunction){changeFunction(obj);}
if(front_of_list){to_list_obj.insertBefore(obj,to_list_obj.firstChild);}else{to_list_obj.appendChild(obj);}}
var apps_menu_timout_id;function try_expand(obj){if(has_css_class_name(obj,'more_apps')){apps_menu_timout_id=window.setTimeout('expand_more_list()',500);}else{}}
function untry_expand(){window.clearTimeout(apps_menu_timout_id);}
if(typeof(ScriptInventory)!='undefined'){ScriptInventory.addScript&&ScriptInventory.addScript("\/var\/releases\/thefacebook-r82587-02122008\/www\/html\/js\/apps_menu.js","81787",1203052585);}

function socialads_popup(){(new pop_dialog()).show_choice(tx('sa02'),{summary:tx('sa03'),body:tx('sa01',{'FAQ':'<a href="/help.php?page=59">'+tx('sa04')+'</a>'})},tx('sh:ok-button'),function(){generic_dialog.get_dialog(this).hide()});}
if(typeof(ScriptInventory)!='undefined'){ScriptInventory.addScript&&ScriptInventory.addScript("\/var\/releases\/thefacebook-r82587-02122008\/www\/html\/js\/socialads.js","72979",1203052596);}

if(typeof(ScriptInventory)!='undefined'){ScriptInventory.addScript&&ScriptInventory.addScript("\/var\/releases\/thefacebook-r82587-02122008\/www\/html\/js\/dynamic_dialog.js","77307",1203052588);}

function editor_two_level_change(selector,subtypes_array,sublabels_array)
{selector=ge(selector);if(selector.getAttribute("typefor"))
subselector=ge(selector.getAttribute("typefor"));if(selector&&subselector){subselector.options.length=1;type_value=selector.options[selector.selectedIndex].value;if(type_value==""){type_value=-1;}
index=1;suboptions=subtypes_array[type_value];if(typeof(suboptions)!="undefined"){for(var key=0;key<suboptions.length;key++){if(typeof(suboptions[key])!="undefined"){subselector.options[index++]=new Option(suboptions[key],key);}}}
if(sublabels_array){if(sublabels_array[type_value]){subselector.options[0]=new Option(sublabels_array[type_value],"");subselector.options[0].selected=true;}else{subselector.options[0]=new Option("---","");subselector.options[0].selected=true;}}
subselector.disabled=subselector.options.length<=1;}}
function editor_two_level_set_subselector(subselector,value)
{subselector=ge(subselector);if(subselector){opts=subselector.options;for(var index=0;index<opts.length;index++){if((opts[index].value==value)||(value===null&&opts[index].value=='')){subselector.selectedIndex=index;}}}}
function editor_network_change(selector,prefix,orig_value){selector=ge(selector);if(selector&&selector.value>0){show('display_network_message');}else{hide('display_network_message');}}
function editor_rel_change(selector,prefix,orig_value)
{selector=ge(selector);for(var rel_type=2;rel_type<=6;rel_type++){if(rel_type==selector.value){show(prefix+'_new_partner_'+rel_type);}else{hide(prefix+'_new_partner_'+rel_type);}}
if(selector&&ge(prefix+'_new_partner')){if(selector.value>1){show(prefix+'_new_partner');}else{hide(prefix+'_new_partner');}}
if(selector&&ge(prefix+'_rel_uncancel')){if(selector.value>1)
editor_rel_uncancel(selector,prefix,selector.value);else
editor_rel_cancel(selector,prefix);}
editor_rel_toggle_awaiting(selector,prefix,orig_value);}
function rel_typeahead_onsubmit(){return false;}
function rel_typeahead_onselect(friend){if(!friend)
return;$('new_partner').value=friend.i;}
function editor_rel_toggle_awaiting(selector,prefix,orig_value)
{selector=ge(selector);if(selector&&ge(prefix+'_rel_required')){if(selector.value==orig_value){hide(prefix+'_rel_required');show(prefix+'_rel_awaiting');}
else{show(prefix+'_rel_required');hide(prefix+'_rel_awaiting');}}}
function editor_rel_cancel(selector,prefix)
{if(ge(prefix+'_rel_uncancel'))
show(prefix+'_rel_uncancel');if(ge(prefix+'_rel_cancel'))
hide(prefix+'_rel_cancel');selector=ge(selector);if(ge(selector)&&$(selector).selectedIndex>1)
editor_rel_set_value(selector,1);}
function editor_rel_uncancel(selector,prefix,rel_value)
{if(ge(prefix+'_rel_uncancel'))
hide(prefix+'_rel_uncancel');if(ge(prefix+'_rel_cancel'))
show(prefix+'_rel_cancel');if(rel_value==4||rel_value==5){hide(prefix+'_rel_with');show(prefix+'_rel_to');}else if(rel_value>1){show(prefix+'_rel_with');hide(prefix+'_rel_to');}
if(ge(selector)&&$(selector).selectedIndex<=1)
editor_rel_set_value(selector,rel_value);editor_rel_toggle_awaiting(selector,prefix,rel_value);}
function editor_autocomplete_onselect(result){var hidden=ge(/(.*)_/.exec(this.obj.name)[1]+'_id');if(result){hidden.value=result.i==null?result.t:result.i;}
else{hidden.value=-1;}}
function editor_rel_set_value(selector,value)
{selector=ge(selector);if(selector){opts=selector.options;opts_length=opts.length;for(var index=0;index<opts_length;index++){if((opts[index].value==value)||(value===null&&opts[index].value=='')){selector.selectedIndex=index;}}}}
function enableDisable(gainFocus,loseFocus){loseFocus=ge(loseFocus);if(loseFocus){if(loseFocus.value)loseFocus.value="";if(loseFocus.selectedIndex)loseFocus.selectedIndex=0;}}
function show_editor_error(error_text,exp_text)
{$('editor_error_text').innerHTML=error_text;$('editor_error_explanation').innerHTML=exp_text;show('error');}
function make_explanation_list(list,num,type){var exp='';if(type=='missing'){if(num==1){exp=tx('el01',{'thing-1':list[0]});}else if(num==2){exp=tx('el02',{'thing-1':list[0],'thing-2':list[1]});}else if(num==3){exp=tx('el03',{'thing-1':list[0],'thing-2':list[1],'thing-3':list[2]});}else if(num==4){exp=tx('el04',{'thing-1':list[0],'thing-2':list[1],'thing-3':list[2],'thing-4':list[3]});}else if(num>4){exp=tx('el05',{'thing-1':list[0],'thing-2':list[1],'thing-3':list[2],'num':num-3});}}else if(type=='bad'){if(num==1){exp=tx('el06',{'thing-1':list[0]});}else if(num==2){exp=tx('el07',{'thing-1':list[0],'thing-2':list[1]});}else if(num==3){exp=tx('el08',{'thing-1':list[0],'thing-2':list[1],'thing-3':list[2]});}else if(num==4){exp=tx('el09',{'thing-1':list[0],'thing-2':list[1],'thing-3':list[2],'thing-4':list[3]});}else if(num>4){exp=tx('el10',{'thing-1':list[0],'thing-2':list[1],'thing-3':list[2],'num':num-3});}}
return exp;}
function TimeSpan(start_prefix,end_prefix,span,auto){this.get_start_ts=function(){return _get_date_time_ts(_start_month,_start_day,_start_year,_start_hour,_start_min,_start_ampm);}
this.get_end_ts=function(){var start_ts=_get_date_time_ts(_start_month,_start_day,_start_year,_start_hour,_start_min,_start_ampm);var end_ts=_get_date_time_ts(_end_month,_end_day,_end_year,_end_hour,_end_min,_end_ampm);if(start_ts>end_ts&&!(_start_year&&_end_year)){var future_date=new Date();future_date.setTime(end_ts);future_date.setFullYear(future_date.getFullYear()+1);return future_date.getTime();}else{return end_ts;}}
var _start_month=ge(start_prefix+'_month');var _start_day=ge(start_prefix+'_day');var _start_hour=ge(start_prefix+'_hour');var _start_year=ge(start_prefix+'_year');var _start_min=ge(start_prefix+'_min');var _start_ampm=ge(start_prefix+'_ampm');var _end_month=ge(end_prefix+'_month');var _end_day=ge(end_prefix+'_day');var _end_year=ge(end_prefix+'_year');var _end_hour=ge(end_prefix+'_hour');var _end_min=ge(end_prefix+'_min');var _end_ampm=ge(end_prefix+'_ampm');var _bottom_touched;if(auto){_bottom_touched=false;}else{_bottom_touched=true;}
var _start_touched=function(){if(!_bottom_touched){_propogate_time_span(_start_month,_start_day,_start_year,_start_hour,_start_min,_start_ampm);}}
var _end_touched=function(){_bottom_touched=true;}
var _propogate_time_span=function(){var start_ts=_get_date_time_ts(_start_month,_start_day,_start_year,_start_hour,_start_min,_start_ampm);var end_ts=start_ts+span*60000;_set_date_time_from_ts(end_ts,_end_month,_end_day,_end_year,_end_hour,_end_min,_end_ampm);}
var _get_date_time_ts=function(m,d,y,h,min,ampm){var this_date=new Date();var date_this_day=this_date.getDate();var date_this_month=this_date.getMonth();var date_this_year=this_date.getFullYear();var month=m.value-1;var date=d.value;var hour;var minutes=min.value;var year;hour=parseInt(h.value);if(hour==12)hour=0;if(ampm.value=='pm'){hour=hour+12;}
if(!y){if(month<date_this_month){year=date_this_year+1;}else{if(month==date_this_month&&date<date_this_day){year=date_this_year+1;}else{year=date_this_year;}}}else{year=y.value;}
var new_date=new Date(year,month,date,hour,minutes,0,0);var ts=new_date.getTime();return ts;}
var _set_date_time_from_ts=function(ts,m,d,y,h,min,ampm){var new_date=new Date();new_date.setTime(ts);var old_month=m.value;var new_month=new_date.getMonth()+1;var new_day=new_date.getDate();var new_hour=new_date.getHours();var new_minutes=new_date.getMinutes();var new_year=new_date.getFullYear();var new_ampm;if(new_hour>11){new_ampm='pm';if(new_hour>12){new_hour=new_hour-12;}}else{if(new_hour==0)new_hour=12;new_ampm='am';}
if(new_minutes<10){new_minutes="0"+new_minutes;}
m.value=new_month;d.value=new_day;if(y){y.value=new_year;}
h.value=new_hour;min.value=new_minutes;ampm.value=new_ampm;if(old_month!=new_month){editor_date_month_change(m,d,y?y:false);}}
var _start_month_touched=function(){_start_touched();editor_date_month_change(_start_month,_start_day,_start_year?_start_year:false);}
var _end_month_touched=function(){_end_touched();editor_date_month_change(_end_month,_end_day,_end_year?_end_year:false);}
_start_month.onchange=_start_month_touched;_start_day.onchange=_start_touched;if(_start_year){_start_year.onchange=_start_touched;}
_start_hour.onchange=_start_touched;_start_min.onchange=_start_touched;_start_ampm.onchange=_start_touched;_end_month.onchange=_end_month_touched;_end_day.onchange=_end_touched;if(_end_year){_end_year.onchange=_end_touched;}
_end_hour.onchange=_end_touched;_end_min.onchange=_end_touched;_end_ampm.onchange=_end_touched;}
function editor_date_month_change(month_el,day_el,year_el){var month_el=ge(month_el);var day_el=ge(day_el);var year_el=year_el?ge(year_el):false;var new_num_days=month_get_num_days(month_el.value,year_el.value&&year_el.value!=-1?year_el.value:false);var b=day_el.options[0].value==-1?1:0;for(var i=day_el.options.length;i>new_num_days+b;i--){remove_node(day_el.options[i-1]);}
for(var i=day_el.options.length;i<new_num_days+b;i++){day_el.options[i]=new Option(i+(b?0:1));}}
function editor_date_year_change(month,day,year){editor_date_month_change(month,day,year);}
function month_get_num_days(month,year){var temp_date;if(month==-1){return 31;}
temp_date=new Date(year?year:1912,month,0);return temp_date.getDate();}
function toggleEndWorkSpan(prefix){if(shown(prefix+'_endspan')){hide(prefix+'_endspan');show(prefix+'_present');}else{show(prefix+'_endspan');hide(prefix+'_present');}}
function regionCountryChange(label_id,country_id,region_id,label_prefix){switch(country_id){case'326':show(region_id);$(label_id).innerHTML=label_prefix+tx('el13');break;case'398':show(region_id);$(label_id).innerHTML=label_prefix+tx('el12');break;default:$(label_id).innerHTML=label_prefix+tx('el11');hide(region_id);break;}}
function regionCountryChange_twoLabels(country_label_id,region_label_id,country_id,region_id,label_prefix){show(country_label_id);$(country_label_id).innerHTML=label_prefix+tx('el11');switch(country_id){case'326':show(region_id);show(region_label_id);$(region_label_id).innerHTML=label_prefix+tx('el13');break;case'':case'398':show(region_id);show(region_label_id);$(region_label_id).innerHTML=label_prefix+tx('el12');break;default:$(region_label_id).innerHTML=label_prefix+tx('el12');$(region_id).disabled=true;break;}}
function regionCountyChange_setUSifStateChosen(country_select_id,region_select_id){region_select=ge(region_select_id);country_select=ge(country_select_id);if(region_select.value!=''&&country_select.value==''){country_select.value=398;}}
function regionCountryChange_restrictions(country_select_id,region_select_id){country_select=ge(country_select_id);if(country_select.value==398){country_select.value='';}else if(country_select.value==326){region_select=ge(region_select_id);if(region_select.value){country_select.value='';}}}
function textLimit(ta,count){var text=ge(ta);if(text.value.length>count){text.value=text.value.substring(0,count);if(arguments.length>2){$(arguments[2]).style.display='block';}}}
function textLimitStrict(text_id,limit,message_id,count_id,submit_id){var text=ge(text_id);var len=text.value.length;var diff=len-limit;if(diff>0){if(diff>25000){text.value=text.value.substring(0,limit+25000);diff=25000;}
$(message_id).style.display='block';$(count_id).innerHTML=diff;$(submit_id).disabled=true;}else if(len==0){$(message_id).style.display='none';$(submit_id).disabled=true;$(count_id).innerHTML=1;}else{if($(count_id).innerHTML!=0){$(count_id).innerHTML=0;$(message_id).style.display='none';$(submit_id).disabled=false;}}}
function calcAge(month_el,day_el,year_el){bYear=parseInt($(year_el).value);bMonth=parseInt($(month_el).value);bDay=parseInt($(day_el).value);theDate=new Date();year=theDate.getFullYear();month=theDate.getMonth()+1;day=theDate.getDate();age=year-bYear;if((bMonth>month)||(bMonth==month&&day<bDay))age--;return age;}
function mobile_phone_nag(words,obj,anchor){var nagged=false;var callback=function(){if(nagged){return;}
for(var i=0;i<words.length;i++){if((new RegExp('\\b'+words[i]+'\\b','i')).test(obj.value)){nagged=true;(new AsyncRequest()).setURI('/ajax/mobile_phone_nag.php').setHandler(function(async){var html=async.getPayload();if(html){var div=document.createElement('div');div.innerHTML=html;div.className='mobile_nag';div.style.display='none';anchor.parentNode.insertBefore(div,anchor);animation(div).blind().show().from('height',0).to('height','auto').go();}}).setReadOnly(true).setOption('suppressErrorHandlerWarning',true).send();break;}}}
addEventBase(obj,'keyup',callback);addEventBase(obj,'change',callback);}
function mobile_phone_nag_hide(obj){while(obj.parentNode&&obj.className!='mobile_nag'){obj=obj.parentNode;}
obj.parentNode.removeChild(obj);}
if(typeof(ScriptInventory)!='undefined'){ScriptInventory.addScript&&ScriptInventory.addScript("\/var\/releases\/thefacebook-r82587-02122008\/www\/html\/js\/editor.js","76419",1203052588);}

function tz_calculate(timestamp){var d=new Date();var raw_offset=d.getTimezoneOffset()/30;var time_sec=d.getTime()/1000;var time_diff=Math.round((timestamp-time_sec)/1800);var rounded_offset=Math.round(raw_offset+time_diff)%48;if(rounded_offset==0){return 0;}else if(rounded_offset>24){rounded_offset-=Math.ceil(rounded_offset/48)*48;}else if(rounded_offset<-28){rounded_offset+=Math.ceil(rounded_offset/-48)*48;}
return rounded_offset*30;}
function ajax_tz_set(tzForm){var timestamp=tzForm.time.value;var gmt_off=-tz_calculate(timestamp);var cur_gmt_off=tzForm.tz_gmt_off.value;if(gmt_off!=cur_gmt_off){var ajaxUrl='ajax/autoset_timezone_ajax.php';var ajax=new Ajax();params='user='+tzForm.user.value
+'&post_form_id='+tzForm.post_form_id.value
+'&gmt_off='+gmt_off;ajax.post(ajaxUrl,params);}}
function tz_autoset(){var tz_form=ge('tz_autoset_form');if(tz_form)
ajax_tz_set(tz_form);}
if(typeof(ScriptInventory)!='undefined'){ScriptInventory.addScript&&ScriptInventory.addScript("\/var\/releases\/thefacebook-r82587-02122008\/www\/html\/js\/timezone.js","68239",1203052597);}

function typeaheadpro(obj,source,properties){if(!typeaheadpro.hacks){typeaheadpro.should_check_missing_events=ua.safari()<500;typeaheadpro.should_use_iframe=typeaheadpro.should_simulate_keypress=ua.ie()||(ua.safari()>500&&ua.safari()<523);typeaheadpro.should_use_overflow=ua.opera()<9.5||ua.safari()<500;typeaheadpro.hacks=true;}
typeaheadpro.instances=(typeaheadpro.instances||[]);typeaheadpro.instances.push(this);this.instance=typeaheadpro.instances.length-1;copy_properties(this,properties||{});this.obj=obj;this.obj.typeahead=this;this.obj.onfocus=this._onfocus.bind(this);this.obj.onblur=chain(this.obj.onblur,this._onblur.bind(this));this.obj.onchange=this._onchange.bind(this);this.obj.onkeyup=function(event){return this._onkeyup(event||window.event);}.bind(this);this.obj.onkeydown=function(event){return this._onkeydown(event||window.event);}.bind(this);this.obj.onkeypress=function(event){return this._onkeypress(event||window.event);}.bind(this);this.focused=this.obj.offsetWidth?true:false;this.anchor=this.setup_anchor();this.dropdown=document.createElement('div');this.dropdown.className='typeahead_list';if(!this.focused){this.dropdown.style.display='none';}
this.anchor_block=this.anchor_block||this.anchor.tagName.toLowerCase()=='div';if(this.should_use_absolute){document.body.appendChild(this.dropdown);this.dropdown.className+=' typeahead_list_absolute';}else{if(this.anchor.nextSibling){this.anchor.parentNode.insertBefore(this.dropdown,this.anchor.nextSibling);}else{this.anchor.parentNode.appendChild(this.dropdown);}
if(!this.anchor_block){this.anchor.parentNode.insertBefore(document.createElement('br'),this.dropdown);}}
this.dropdown.appendChild(this.list=document.createElement('div'));this.dropdown.onmousedown=function(event){return this.dropdown_onmousedown(event||window.event);}.bind(this);if(typeaheadpro.should_use_iframe&&!typeaheadpro.iframe){typeaheadpro.iframe=document.createElement('iframe');typeaheadpro.iframe.src="/common/blank.html";typeaheadpro.iframe.className='typeahead_iframe';typeaheadpro.iframe.style.display='none';typeaheadpro.iframe.frameBorder=0;document.body.appendChild(typeaheadpro.iframe);}
this.results_text='';this.last_key_suggestion=0;this.status=typeaheadpro.STATUS_BLOCK_ON_SOURCE_BOOTSTRAP;this.clear_placeholder();if(source){this.set_source(source);}
if(this.source){this.selectedindex=-1;if(this.focused){this.show();this._onkeyup();this.set_class('');this.capture_submit();}}else{this.hide();}}
typeaheadpro.prototype.enumerate=false;typeaheadpro.prototype.interactive=false;typeaheadpro.prototype.changed=false;typeaheadpro.prototype.render_block_size=50;typeaheadpro.STATUS_IDLE=0;typeaheadpro.STATUS_WAITING_ON_SOURCE=1;typeaheadpro.STATUS_BLOCK_ON_SOURCE_BOOTSTRAP=2;typeaheadpro.prototype.should_use_absolute=false;typeaheadpro.prototype.max_results=0;typeaheadpro.prototype.max_display=10;typeaheadpro.prototype.allow_placeholders=true;typeaheadpro.prototype.auto_select=true;typeaheadpro.prototype.set_source=function(source){this.source=source;this.source.set_owner(this);this.status=typeaheadpro.STATUS_IDLE;this.cache={};this.last_search=0;this.suggestions=[];}
typeaheadpro.prototype.setup_anchor=function(){return this.obj;}
typeaheadpro.prototype.destroy=function(){this.clear_render_timeouts();if(!this.anchor_block&&this.anchor.nextSibling.tagName.toLowerCase()=='br'){this.anchor.parentNode.removeChild(this.anchor.nextSibling);}
if(this.dropdown){this.dropdown.parentNode.removeChild(this.dropdown);}
this.obj.onfocus=this.obj.onblur=this.obj.onkeyup=this.obj.onkeydown=this.obj.onkeypress=null;this.obj.parentNode.removeChild(this.obj);this.anchor=this.obj=this.obj.typeahead=this.dropdown=null;delete typeaheadpro.instances[this.instance];}
typeaheadpro.prototype._onkeyup=function(e){this.last_key=e?e.keyCode:-1;if(this.key_down==this.last_key){this.key_down=0;}
switch(this.last_key){case 27:this.selectedindex=-1;this._onselect(false);this.hide();break;case undefined:case 0:case 13:case 37:case 38:case 39:case 40:break;default:this.dirty_results();if(typeaheadpro.should_check_missing_events){setTimeout(function(){this.dirty_results()}.bind(this),50);}
break;}}
typeaheadpro.prototype._onkeydown=function(e){this.key_down=this.last_key=e?e.keyCode:-1;this.interactive=true;switch(this.last_key){case 33:case 34:case 38:case 40:if(typeaheadpro.should_simulate_keypress){this._onkeypress({keyCode:this.last_key});}
return false;case 9:this.select_suggestion(this.selectedindex);this.advance_focus();break;case 13:if(this.select_suggestion(this.selectedindex)){this.hide();}
if(typeof(this.submit_keydown_return)!='undefined'){this.submit_keydown_return=this._onsubmit(this.get_current_selection());}
return this.submit_keydown_return;}}
typeaheadpro.prototype._onkeypress=function(e){var multiplier=1;this.last_key=e?event_get_keypress_keycode(e):-1;this.interactive=true;switch(this.last_key){case 33:multiplier=this.max_display;case 38:this.set_suggestion(multiplier>1&&this.selectedindex>0&&this.selectedindex<multiplier?0:this.selectedindex-multiplier);this.last_key_suggestion=(new Date()).getTime();return false;case 34:multiplier=this.max_display;case 40:if(trim(this.get_value())==''&&!this.enumerate){this.enumerate=true;this.results_text=null;this.dirty_results();}else{this.set_suggestion(this.suggestions.length<=this.selectedindex+multiplier?this.suggestions.length-1:this.selectedindex+multiplier);this.last_key_suggestion=(new Date()).getTime();}
return false;case 13:var ret=null;if(typeof(this.submit_keydown_return)=='undefined'){ret=this.submit_keydown_return=this._onsubmit(this.get_current_selection());}else{ret=this.submit_keydown_return;delete this.submit_keydown_return;}
return ret;}
return true;}
typeaheadpro.prototype._onchange=function(){this.changed=true;}
typeaheadpro.prototype._onfound=function(obj){return this.onfound?this.onfound.call(this,obj):true;}
typeaheadpro.prototype._onsubmit=function(obj){if(this.onsubmit){var ret=this.onsubmit.call(this,obj);if(ret&&this.obj.form){if(!this.obj.form.onsubmit||this.obj.form.onsubmit()){this.obj.form.submit();}
return false;}
return ret;}else{this.advance_focus();return false;}}
typeaheadpro.prototype._onselect=function(obj){if(this.onselect){this.onselect.call(this,obj);}}
typeaheadpro.prototype._onfocus=function(){if(this.last_dropdown_mouse>(new Date()).getTime()-10||this.focused){return;}
this.focused=true;this.changed=false;this.clear_placeholder();this.results_text='';this.set_class('');this.dirty_results();this.show();this.capture_submit();}
typeaheadpro.prototype._onblur=function(event){if(this.last_dropdown_mouse&&this.last_dropdown_mouse>(new Date()).getTime()-10){event_prevent(event);setTimeout(function(){this.focus()}.bind(this.obj),0);return false;}
this.focused=false;if(this.changed&&!this.interactive){this.dirty_results();this.changed=false;return;}
if(!this.suggestions){this._onselect(false);}else if(this.selectedindex>=0){this.select_suggestion(this.selectedindex);}
this.hide();this.update_class();if(!this.get_value()){var noinput=this.allow_placeholders?'':this.source.gen_noinput();this.set_value(noinput?noinput:'');this.set_class('typeahead_placeholder')}}
typeaheadpro.prototype.dropdown_onmousedown=function(event){this.last_dropdown_mouse=(new Date()).getTime();}
typeaheadpro.prototype.mouse_set_suggestion=function(index){if(!this.visible){return;}
if((new Date()).getTime()-this.last_key_suggestion>50){this.set_suggestion(index);}}
typeaheadpro.prototype.capture_submit=function(){if(!typeaheadpro.should_check_missing_events)return;if((!this.captured_form||this.captured_substitute!=this.captured_form.onsubmit)&&this.obj.form){this.captured_form=this.obj.form;this.captured_event=this.obj.form.onsubmit;this.captured_substitute=this.obj.form.onsubmit=function(){return((this.key_down&&this.key_down!=13&&this.key_down!=9)?this.submit_keydown_return:(this.captured_event?this.captured_event.apply(arguments,this.captured_form):true))?true:false;}.bind(this);}}
typeaheadpro.prototype.set_suggestion=function(index){if(!this.suggestions||this.suggestions.length<=index){return}
var old_node=this.get_suggestion_node(this.selectedindex);this.selectedindex=(index<=-1)?-1:index;var cur_node=this.get_suggestion_node(this.selectedindex);if(old_node){old_node.className=old_node.className.replace(/\btypeahead_selected\b/,'typeahead_not_selected');}
if(cur_node){cur_node.className=cur_node.className.replace(/\btypeahead_not_selected\b/,'typeahead_selected');}
this.recalc_scroll();this._onfound(this.get_current_selection());}
typeaheadpro.prototype.get_suggestion_node=function(index){var nodes=this.list.childNodes;return index==-1?null:nodes[Math.floor(index/this.render_block_size)].childNodes[index%this.render_block_size];}
typeaheadpro.prototype.get_current_selection=function(){return this.selectedindex==-1?false:this.suggestions[this.selectedindex];}
typeaheadpro.prototype.update_class=function(){if(this.suggestions&&this.selectedindex!=-1&&typeahead_source.flatten_string(this.get_current_selection().t)==typeahead_source.flatten_string(this.get_value())){this.set_class('typeahead_found');}else{this.set_class('');}}
typeaheadpro.prototype.select_suggestion=function(index){if(!this.suggestions||index==undefined||index===false||this.suggestions.length<=index||index<0){this._onfound(false);this._onselect(false);this.selectedindex=-1;this.set_class('');}else{this.selectedindex=index;this.set_value(this.suggestions[index].t);this.set_class('typeahead_found');this._onfound(this.suggestions[this.selectedindex]);this._onselect(this.suggestions[this.selectedindex]);}
if(!this.interactive){this.hide();this.obj.blur();}
return true;}
typeaheadpro.prototype.set_value=function(value){this.obj.value=value;}
typeaheadpro.prototype.get_value=function(){return this.obj.value;}
typeaheadpro.prototype.found_suggestions=function(suggestions,text,fake_data){if(!fake_data){this.status=typeaheadpro.STATUS_IDLE;this.add_cache(text,suggestions);}
this.clear_render_timeouts();if(this.get_value()==this.results_text){return;}else if(!fake_data){this.results_text=typeahead_source.flatten_string(text);if(this.enumerate&&trim(this.results_text)!=''){this.enumerate=false;}}
var current_selection=-1;if(this.selectedindex!=-1){var selected_id=this.suggestions[this.selectedindex].i;for(var i=0,l=suggestions.length;i<l;i++){if(suggestions[i].i==selected_id){current_selection=i;break;}}}
if(current_selection==-1&&this.auto_select&&suggestions.length){current_selection=0;this._onfound(suggestions[0]);}
this.selectedindex=current_selection;this.suggestions=suggestions;if(!fake_data){this.real_suggestions=suggestions;}
if(suggestions.length){var html=[],blocks=Math.ceil(suggestions.length/this.render_block_size),must_render={},firstblock,samplenode=null;this.list.innerHTML='';for(var i=0;i<blocks;i++){this.list.appendChild(document.createElement('div'));}
if(current_selection>-1){firstblock=Math.floor(current_selection/this.render_block_size);must_render[firstblock]=true;if(current_selection%this.render_block_size>this.render_block_size/2){must_render[firstblock+1]=true;}else if(firstblock!=0){must_render[firstblock-1]=true;}}else{must_render[0]=true;}
for(var node in must_render){this.render_block(node);sample=this.list.childNodes[node].firstChild;}
this.show();if(blocks){var suggestion_height=sample.offsetHeight;this.render_timeouts=[];for(var i=1;i<blocks;i++){if(!must_render[i]){this.list.childNodes[i].style.height=suggestion_height*Math.min(this.render_block_size,suggestions.length-i*this.render_block_size)+'px';this.list.childNodes[i].style.width='1px';this.render_timeouts.push(setTimeout(this.render_block.bind(this,i),700+i*50));}}}}else{this.selectedindex=-1;this.set_message(this.status==typeaheadpro.STATUS_IDLE?this.source.gen_nomatch():this.source.gen_loading());this._onfound(false);}
this.recalc_scroll();if(!fake_data&&this.results_text!=typeahead_source.flatten_string(this.get_value())){this.dirty_results();}}
typeaheadpro.prototype.render_block=function(block,stack){var suggestions=this.suggestions,selectedindex=this.selectedindex,text=this.get_value(),instance=this.instance,html=[],node=this.list.childNodes[block];for(var i=block*this.render_block_size,l=Math.min(suggestions.length,(block+1)*this.render_block_size);i<l;i++){html.push('<div class="');if(selectedindex==i){html.push('typeahead_suggestion typeahead_selected');}else{html.push('typeahead_suggestion typeahead_not_selected');}
html.push('" onmouseout="typeaheadpro.instances[',instance,'].mouse_set_suggestion(-1)" ','onmouseover="typeaheadpro.instances[',instance,'].mouse_set_suggestion(',i,')" ','onmousedown="typeaheadpro.instances[',instance,'].select_suggestion(',i,'); event_abort(event);">',this.source.gen_html(suggestions[i],text),'</div>');}
node.innerHTML=html.join('');node.style.height='auto';node.style.width='auto';}
typeaheadpro.prototype.clear_render_timeouts=function(){if(this.render_timeouts){for(var i=0;i<this.render_timeouts.length;i++){clearTimeout(this.render_timeouts[i]);}
this.render_timeouts=null;}}
typeaheadpro.prototype.recalc_scroll=function(){var cn=this.list.firstChild;if(!cn){return;}
if(cn.childNodes.length>this.max_display){var last_child=cn.childNodes[this.max_display-1];var height=last_child.offsetTop+last_child.offsetHeight;this.dropdown.style.height=height+'px';var selected=this.get_suggestion_node(this.selectedindex);if(selected){var scrollTop=this.dropdown.scrollTop;if(selected.offsetTop<scrollTop){this.dropdown.scrollTop=selected.offsetTop;}else if(selected.offsetTop+selected.offsetHeight>height+scrollTop){this.dropdown.scrollTop=selected.offsetTop+selected.offsetHeight-height;}}
if(!typeaheadpro.should_use_overflow){this.dropdown.style.overflowY='scroll';this.dropdown.style.overflowX='hidden';}}else{this.dropdown.style.height='auto';if(!typeaheadpro.should_use_overflow){this.dropdown.style.overflowY='hidden';}}}
typeaheadpro.prototype.search_cache=function(text){return this.cache[typeahead_source.flatten_string(text)];}
typeaheadpro.prototype.add_cache=function(text,results){if(this.source.cache_results){this.cache[typeahead_source.flatten_string(text)]=results;}}
typeaheadpro.prototype.update_status=function(status){this.status=status;this.dirty_results();}
typeaheadpro.prototype.set_class=function(name){this.obj.className=(this.obj.className.replace(/typeahead_[^\s]+/g,'')+' '+name).replace(/ {2,}/g,' ');}
typeaheadpro.prototype.dirty_results=function(){if(!this.enumerate&&trim(this.get_value())==''){this.results_text='';this.set_message(this.source.gen_placeholder());this.suggestions=[];this.selectedindex=-1;return;}else if(this.results_text==typeahead_source.flatten_string(this.get_value())){return;}else if(this.status==typeaheadpro.STATUS_BLOCK_ON_SOURCE_BOOTSTRAP){this.set_message(this.source.gen_loading());return;}
var time=(new Date).getTime();var updated=false;if(this.last_search<=(time-this.source.search_limit)&&this.status==typeaheadpro.STATUS_IDLE){updated=this.perform_search();}else{if(this.status==typeaheadpro.STATUS_IDLE){if(!this.search_timeout){this.search_timeout=setTimeout(function(){this.search_timeout=false;if(this.status==typeaheadpro.STATUS_IDLE){this.dirty_results();}}.bind(this),this.source.search_limit-(time-this.last_search));}}}
if(this.source.allow_fake_results&&this.real_suggestions&&!updated){var ttext=typeahead_source.tokenize(this.get_value()).sort(typeahead_source._sort);var fake_results=[];for(var i=0;i<this.real_suggestions.length;i++){if(typeahead_source.check_match(ttext,this.real_suggestions[i].t+' '+this.real_suggestions[i].n)){fake_results.push(this.real_suggestions[i]);}}
if(fake_results.length){this.found_suggestions(fake_results,this.get_value(),true);}else{this.selectedindex=-1;this.set_message(this.source.gen_loading());}}}
typeaheadpro.prototype.perform_search=function(){if(this.get_value()==this.results_text){return true;}
var results;if((results=this.search_cache(this.get_value()))===undefined&&!(results=this.source.search_value(this.get_value()))){this.status=typeaheadpro.STATUS_WAITING_ON_SOURCE;this.last_search=(new Date).getTime();return false;}
this.found_suggestions(results,this.get_value(),false);return true;}
typeaheadpro.prototype.set_message=function(text){this.clear_render_timeouts();if(text){this.list.innerHTML='<div class="typeahead_message">'+text+'</div>';this.reset_iframe();}else{this.hide();}
this.recalc_scroll();}
typeaheadpro.prototype.reset_iframe=function(){if(!typeaheadpro.should_use_iframe){return}
if(this.should_use_absolute){typeaheadpro.iframe.style.top=this.dropdown.style.top;typeaheadpro.iframe.style.left=this.dropdown.style.left;}else{typeaheadpro.iframe.style.top=elementY(this.dropdown)+'px';typeaheadpro.iframe.style.left=elementX(this.dropdown)+'px';}
typeaheadpro.iframe.style.width=this.dropdown.offsetWidth+'px';typeaheadpro.iframe.style.height=this.dropdown.offsetHeight+'px';typeaheadpro.iframe.style.display='';}
typeaheadpro.prototype.advance_focus=function(){var inputs=this.obj.form?get_all_form_inputs(this.obj.form):get_all_form_inputs();var next_inputs=false;for(var i=0;i<inputs.length;i++){if(next_inputs){if(inputs[i].type!='hidden'&&inputs[i].tabIndex!=-1&&inputs[i].offsetParent){next_inputs.push(inputs[i]);}}else if(inputs[i]==this.obj){next_inputs=[];}}
setTimeout(function(){for(var i=0;i<this.length;i++){try{if(this[i].offsetParent){this[i].focus();setTimeout(function(){try{this.focus();}catch(e){}}.bind(this[i]),0);return;}}catch(e){}}}.bind(next_inputs?next_inputs:[]),0);}
typeaheadpro.prototype.clear_placeholder=function(){if(this.obj.className.indexOf('typeahead_placeholder')!=-1){this.set_value('');this.set_class('');}}
typeaheadpro.prototype.clear=function(){this.set_value('');this.set_class('');this.selectedindex=-1;this.enumerate=false;this.dirty_results();}
typeaheadpro.prototype.hide=function(){this.visible=false;if(this.should_use_absolute){this.dropdown.style.display='none';}else{this.dropdown.style.visibility='hidden';}
this.clear_render_timeouts();if(typeaheadpro.should_use_iframe){typeaheadpro.iframe.style.display='none';}}
typeaheadpro.prototype.show=function(){this.visible=true;if(this.focused){if(this.should_use_absolute){this.dropdown.style.top=elementY(this.anchor)+this.anchor.offsetHeight+'px';this.dropdown.style.left=elementX(this.anchor)+'px';}
this.dropdown.style.width=(this.anchor.offsetWidth-2)+'px';this.dropdown.style[this.should_use_absolute?'display':'visibility']='';if(typeaheadpro.should_use_iframe){typeaheadpro.iframe.style.display='';this.reset_iframe();}}}
typeaheadpro.prototype.focus=function(){this.obj.focus();}
typeaheadpro.kill_typeahead=function(obj){if(obj.typeahead){if(!this.should_use_absolute&&!this.anchor_block){obj.parentNode.removeChild(obj.nextSibling);}
obj.parentNode.removeChild(obj.nextSibling);if(obj.typeahead.source){obj.typeahead.source=obj.typeahead.source.owner=null;}
obj.onfocus=obj.onblur=obj.onkeypress=obj.onkeyup=obj.onkeydown=obj.typeahead=null;}}
function tokenizer(obj,typeahead_source,nofocus,max_selections,properties){if(ua.safari()<500){tokenizer.valid_arrow_count=0;tokenizer.valid_arrow_event=function(){return tokenizer.valid_arrow_count++%2==0};}else{tokenizer.valid_arrow_event=function(){return true};}
this.obj=obj;this.obj.tokenizer=this;this.typeahead_source=typeahead_source;while(!/\btokenizer\b/.test(this.obj.className)){this.obj=this.obj.parentNode;}
this.tab_stop=this.obj.getElementsByTagName('input')[0];this.inputs=[];this.obj.onmousedown=function(event){return this._onmousedown(event?event:window.event)}.bind(this);this.tab_stop.onfocus=function(event){return this._onfocus(event?event:window.event)}.bind(this);this.tab_stop.onblur=function(event){return this.tab_stop_onblur(event?event:window.event)}.bind(this);this.tab_stop.onkeydown=function(event){return this.tab_stop_onkeydown(event?event:window.event)}.bind(this);if(!nofocus&&elementY(this.obj)>0&&this.obj.offsetWidth){this._onfocus();}
this.max_selections=max_selections;copy_properties(this,properties||{});}
tokenizer.is_empty=function(obj){if(has_css_class_name(obj,'tokenizer_locked')){return obj.getElementsByTagName('input').length==0;}else{return(!obj.tokenizer||obj.tokenizer.count_names()==0);}}
tokenizer.prototype.get_token_values=function(){var r=[];var inputs=this.obj.getElementsByTagName('input');for(var i=0;i<inputs.length;++i){if(inputs[i].value){r.push(inputs[i].value);}}
return r;}
tokenizer.prototype.get_token_strings=function(){var r=[];var tokens=this.obj.getElementsByTagName('a');for(var i=0;i<tokens.length;++i){if(typeof tokens[i].token!='undefined'){r.push(tokens[i].token.text);}}
return r;}
tokenizer.prototype.clear=function(){var tokens=this.obj.getElementsByTagName('a');for(var i=tokens.length-1;i>=0;--i){if(typeof tokens[i].token!='undefined'){tokens[i].token.remove();}}}
tokenizer.prototype._onmousedown=function(event){setTimeout(function(){if(!this.inputs.length){if(this.max_selections>this.count_names()){new tokenizer_input(this);}else{var tokens=this.obj.getElementsByTagName('a');for(var i=tokens.length-1;i>=0;i--){if(typeof tokens[i].token!='undefined'){tokens[i].token.select();break;}}}}else{this.inputs[0].focus();}}.bind(this),0);event?event.cancelBubble=true:false;return false;}
tokenizer.prototype._onfocus=function(event){if(this.tab_stop_ignore_focus){this.tab_stop_ignore_focus=false;return;}
this._onmousedown();}
tokenizer.prototype.tab_stop_onblur=function(event){this.selected_token?this.selected_token.deselect():false;}
tokenizer.prototype.tab_stop_onkeydown=function(event){if(!event.keyCode||!this.selected_token){return;}
switch(event.keyCode){case 8:case 46:var tok=this.selected_token;var prev=tok.element.previousSibling;if(prev&&prev.input){prev.input.element.focus();}else{new tokenizer_input(this,tok.element);}
tok.remove();return false;case 37:if(!tokenizer.valid_arrow_event()){break;}
var tok=this.selected_token;var prev=tok.element.previousSibling;if(prev&&prev.input){prev.input.element.focus();}else if(this.max_selections>this.count_names()){new tokenizer_input(this,tok.element);}else{return false;}
tok.deselect();return false;case 39:if(!tokenizer.valid_arrow_event()){break;}
var tok=this.selected_token;var next=tok.element.nextSibling;if(next&&next.input){next.input.focus();}else if(this.max_selections>this.count_names()){new tokenizer_input(this,tok.element.nextSibling);}else{return false;}
tok.deselect();return false;}}
tokenizer.prototype.count_names=function(plus){var inputs=this.obj.getElementsByTagName('input');var uniq={};var count=0;for(var i=0;i<inputs.length;i++){if(inputs[i].type=='hidden'&&!uniq[inputs[i].value]){uniq[inputs[i].value]=true;++count;}}
if(plus){for(var j=0;j<plus.length;j++){if(!uniq[plus[j]]){uniq[plus[j]]=true;++count;}}}
return count;}
tokenizer.prototype.disable=function(){this.tab_stop.parentNode.removeChild(this.tab_stop);this.obj.className+=' tokenizer_locked';}
function tokenizer_input(tokenizer,caret){if(!tokenizer_input.hacks){tokenizer_input.should_use_borderless_hack=ua.safari();tokenizer_input.should_use_shadow_hack=ua.ie()||ua.opera();tokenizer_input.hacks=true;}
this.tokenizer=tokenizer;this.obj=document.createElement('input');this.obj.input=this;this.obj.tabIndex=-1;this.obj.size=1;this.obj.onmousedown=function(event){(event?event:window.event).cancelBubble=true}.bind(this);this.shadow=document.createElement('span');this.shadow.className='tokenizer_input_shadow';this.element=document.createElement('div');this.element.className='tokenizer_input'+(tokenizer_input.should_use_borderless_hack?' tokenizer_input_borderless':'');this.element.appendChild(document.createElement('div'));this.element.firstChild.appendChild(this.obj);(tokenizer_input.should_use_shadow_hack?document.body:this.element.firstChild).appendChild(this.shadow);caret?tokenizer.obj.insertBefore(this.element,caret):tokenizer.obj.appendChild(this.element);this.tokenizer.tab_stop.disabled=true;this.update_shadow();this.update_shadow=this.update_shadow.bind(this);this.tokenizer.inputs.push(this);this.parent.construct(this,this.obj,this.tokenizer.typeahead_source);if(this.focused){this.focus();this.obj.select();}
setInterval(this.update_shadow.bind(this),100);}
tokenizer_input.extend(typeaheadpro);tokenizer_input.prototype.gen_nomatch=tokenizer_input.prototype.gen_loading=tokenizer_input.prototype.gen_placeholder=tokenizer_input.prototype.gen_noinput='';tokenizer_input.prototype.max_display=8;tokenizer_input.prototype.setup_anchor=function(){return this.tokenizer.obj;}
tokenizer_input.prototype.update_shadow=function(){try{var val=this.obj.value;}catch(e){return};if(this.shadow_input!=val){this.shadow.innerHTML=htmlspecialchars((this.shadow_input=val)+'^_^');if(tokenizer_input.should_use_shadow_hack){this.obj.style.width=this.shadow.offsetWidth+'px';this.obj.value=val;}}}
tokenizer_input.prototype._onblur=function(){if(this.parent._onblur()===false){return false;}
if(this.changed&&!this.interactive){this.dirty_results();this.changed=false;return;}
if(this.changed||this.interactive){this.select_suggestion(this.selectedindex);}
setTimeout(function(){this.disabled=false}.bind(this.tokenizer.tab_stop),1000);this.destroy();}
tokenizer_input.prototype._onfocus=function(){this.tokenizer.tab_stop.disabled=true;this.parent._onfocus();return true;}
tokenizer_input.prototype._onkeydown=function(event){switch(event.keyCode){case 13:break;case 37:case 8:if(this.get_selection_start()!=0||this.obj.value!=''){break;}
var prev=this.element.previousSibling;if(prev&&prev.token){setTimeout(prev.token.select.bind(prev.token),0);}
break;case 39:case 46:if(this.get_selection_start()!=this.obj.value.length){break;}
var next=this.element.nextSibling;if(next&&next.token){setTimeout(next.token.select.bind(next.token),0);}
break;case 188:this._onkeydown({keyCode:13});return false;case 9:if(this.obj.value){this.advance_focus();this._onkeydown({keyCode:13});return false;}else if(!event.shiftKey){this.advance_focus();this.parent._onkeydown(event);return false;}
break;}
return this.parent._onkeydown(event);}
tokenizer_input.prototype._onkeypress=function(event){switch(event.keyCode){case 9:return false;}
setTimeout(this.update_shadow,0);return this.parent._onkeypress(event);}
tokenizer_input.prototype.select_suggestion=function(index){if(this.suggestions&&index>=0&&this.suggestions.length>index){var inputs=this.tokenizer.obj.getElementsByTagName('input');var id=this.suggestions[index].i;for(i=0;i<inputs.length;i++){if(inputs[i].name=='ids[]'&&inputs[i].value==id){return false;}}}
return this.parent.select_suggestion(index);}
tokenizer_input.prototype.get_selection_start=function(){if(this.obj.selectionStart!=undefined){return this.obj.selectionStart;}else{return Math.abs(document.selection.createRange().moveStart('character',-1024));}}
tokenizer_input.prototype.onselect=function(obj){if(obj){var inputs=this.tokenizer.obj.getElementsByTagName('input');for(i=0;i<inputs.length;i++){if(inputs[i].name=='ids[]'&&inputs[i].value==obj.i){return false;}}
new token(obj,this.tokenizer,this.element);if(this.tokenizer.max_selections>this.tokenizer.count_names()){this.clear();}else{this.destroy();this.hide=function(){};return false;}}
if(obj){this.tokenizer._ontokenadded(obj);}
this.tokenizer.typeahead_source.onselect_not_found.call(this);return false;}
tokenizer.prototype._ontokenadded=function(obj){if(this.ontokenadded){this.ontokenadded.call(this,obj);}}
tokenizer.prototype._ontokenremoved=function(obj){if(this.ontokenremoved){this.ontokenremoved.call(this,obj);}}
tokenizer.prototype._ontokennotfound=function(text){if(this.ontokennotfound){this.ontokennotfound.call(this,text);}}
tokenizer_input.prototype._onsubmit=function(){return false;}
tokenizer_input.prototype.capture_submit=function(){return false;}
tokenizer_input.prototype.clear=function(){this.parent.clear();this.update_shadow();}
tokenizer_input.prototype.destroy=function(){if(tokenizer_input.should_use_shadow_hack){this.shadow.parentNode.removeChild(this.shadow);}
this.element.parentNode.removeChild(this.element);this.element=null;var index=this.tokenizer.inputs.indexOf(this);if(index!=-1){this.tokenizer.inputs.splice(index,1);}
this.tokenizer=this.element=this.shadow=null;this.parent.destroy();return null;}
function token(obj,tokenizer,caret){if(obj.is&&(tokenizer.count_names(obj.is)>tokenizer.max_selections)){(new contextual_dialog).set_context(tokenizer.obj).show_prompt(tx('ta12'),tx('ta13')).fade_out(500,1500);return null;}
this.tokenizer=tokenizer;this.element=document.createElement('a');this.element.className='token';this.element.href='#';this.element.tabIndex=-1;this.element.onclick=function(event){return this._onclick(event?event:window.event)}.bind(this);this.element.onmousedown=function(event){(event?event:window.event).cancelBubble=true;return false};this.render_obj(obj);this.obj=obj;this.element.token=this;caret?this.tokenizer.obj.insertBefore(this.element,caret):this.tokenizer.obj.appendChild(this.element);}
token.prototype.render_obj=function(obj){var inputs='';if(obj.np){var fb_protected='';}else{var fb_protected='fb_protected="true" ';}
if(obj.e){inputs=['<input type="hidden" ',fb_protected,'name="emails[]" value="',obj.e,'" />'].join('');}else if(obj.i){inputs=['<input type="hidden" ',fb_protected,'name="',this.tokenizer.obj.id,'[]" value="',obj.i,'" />'].join('');}else if(obj.is){for(var i=0,il=obj.is.length;i<il;i++){inputs+=['<input type="hidden" ',fb_protected,'name="',this.tokenizer.obj.id,'[]" value="',obj.is[i],'" />'].join('');}
this.explodable=true;this.n=obj.n;}
this.text=obj.t;this.element.innerHTML=['<span><span><span><span>',inputs,htmlspecialchars(obj.t),'<span onclick="this.parentNode.parentNode.parentNode.parentNode.parentNode.token.remove(true); event.cancelBubble=true; return false;" ','onmouseover="this.className=\'x_hover\'" onmouseout="this.className=\'x\'" class="x">&nbsp;</span>','</span></span></span></span>'].join('');}
token.prototype._onclick=function(event){var this_select_time=(new Date()).getTime();if(this.explodable&&this.tokenizer.last_select_time&&(this_select_time-this.tokenizer.last_select_time<1400)){var to_add=this.n;this.remove();var inputs=this.tokenizer.obj.getElementsByTagName('input');var already_ids={};for(var i=0;i<inputs.length;++i){if(inputs[i].name=='ids[]'){already_ids[inputs[i].value]=true;}}
for(var id in to_add){if(!already_ids[id]){new token({'t':to_add[id],'i':id},this.tokenizer);}}}else{this.select();}
this.tokenizer.last_select_time=this_select_time;event.cancelBubble=true;return false;}
token.prototype.select=function(again){if(this.tokenizer.selected_token&&!again){this.tokenizer.selected_token.deselect();}
this.element.className=trim(this.element.className.replace('token_selected',''))+' token_selected';this.tokenizer.tab_stop_ignore_focus=true;if(this.tokenizer.tab_stop.disabled){this.tokenizer.tab_stop.disabled=false;}
this.tokenizer.tab_stop.focus();this.tokenizer.selected_token=this;if(again!==true){setTimeout(function(){this.select(true)}.bind(this),0);}else{setTimeout(function(){this.tab_stop_ignore_focus=false}.bind(this.tokenizer),0);}}
token.prototype.remove=function(focus){this.element.parentNode.removeChild(this.element);this.element.token=null;this.tokenizer.selected_token=null;if(focus){this.tokenizer._onmousedown();}
if(this.obj){this.tokenizer._ontokenremoved(this.obj);}}
token.prototype.deselect=function(){this.element.className=trim(this.element.className.replace('token_selected',''));this.tokenizer.selected_token=null;}
function typeahead_source(){}
typeahead_source.prototype.cache_results=false;typeahead_source.prototype.enumerable=false;typeahead_source.prototype.allow_fake_results=false;typeahead_source.prototype.search_limit=10;typeahead_source.check_match=function(search,value){value=typeahead_source.tokenize(value);for(var i=0,il=search.length;i<il;i++){if(search[i].length){var found=false;for(var j=0,jl=value.length;j<jl;j++){if(value[j].length>=search[i].length&&value[j].substring(0,search[i].length)==search[i]){found=true;value[j]='';break;}}
if(!found){return false;}}}
return true;}
typeahead_source.tokenize=function(text,capture,noflatten){return(noflatten?text:typeahead_source.flatten_string(text)).split(capture?typeahead_source.normalizer_regex_capture:typeahead_source.normalizer_regex);}
typeahead_source.normalizer_regex_str='(?:(?:^| +)["\'.\\-]+ *)|(?: *[\'".\\-]+(?: +|$)|@| +)';typeahead_source.normalizer_regex=new RegExp(typeahead_source.normalizer_regex_str,'g');typeahead_source.normalizer_regex_capture=new RegExp('('+typeahead_source.normalizer_regex_str+')','g');typeahead_source.flatten_string=function(text){if(!typeahead_source.accents){typeahead_source.accents={a:/à|á|â|ã|ä|å/g,c:/ç/g,d:/ð/g,e:/è|é|ê|ë/g,i:/ì|í|î|ï/g,n:/ñ/g,o:/ø|ö|õ|ô|ó|ò/g,u:/ü|û|ú|ù/g,y:/ÿ|ý/g,ae:/æ/g,oe:/œ/g}}
text=text.toLowerCase();for(var i in typeahead_source.accents){text=text.replace(typeahead_source.accents[i],i);}
return text;}
typeahead_source.prototype.set_owner=function(obj){this.owner=obj;if(this.is_ready){this.owner.update_status(typeaheadpro.STATUS_IDLE);}}
typeahead_source.prototype.ready=function(){if(this.owner&&!this.is_ready){this.is_ready=true;this.owner.update_status(typeaheadpro.STATUS_IDLE);}else{this.is_ready=true;}}
typeahead_source.highlight_found=function(result,search){var html=[];resultv=typeahead_source.tokenize(result,true,true);result=typeahead_source.tokenize(result,true);search=typeahead_source.tokenize(search);search.sort(typeahead_source._sort);for(var i=0,il=resultv.length;i<il;i++){var found=false;for(var j=0,jl=search.length;j<jl;j++){if(search[j]&&result[i].lastIndexOf(search[j],0)!=-1){html.push('<em>',htmlspecialchars(resultv[i].substring(0,search[j].length)),'</em>',htmlspecialchars(resultv[i].substring(search[j].length,resultv[i].length)));found=true;break;}}
if(!found){html.push(htmlspecialchars(resultv[i]));}}
return html.join('');}
typeahead_source._sort=function(a,b){return b.length-a.length;}
typeahead_source.prototype.gen_nomatch=function(){return this.text_nomatch!=null?this.text_nomatch:tx('ta01');}
typeahead_source.prototype.gen_loading=function(){return this.text_loading!=null?this.text_loading:tx('ta02');}
typeahead_source.prototype.gen_placeholder=function(){return this.text_placeholder!=null?this.text_placeholder:tx('ta03');}
typeahead_source.prototype.gen_noinput=function(){return this.text_noinput!=null?this.text_noinput:tx('ta03');}
typeahead_source.prototype.onselect_not_found=function(){if(typeof this.tokenizer._ontokennotfound!='undefined'){this.tokenizer._ontokennotfound(this.obj.value);}
if(typeof this.tokenizer.onselect!='undefined'){return this.tokenizer.onselect();}}
function static_source(){this.values=null;this.index=null;this.exclude_ids={};this.parent.construct(this);}
static_source.extend(typeahead_source);static_source.prototype.enumerable=true;static_source.prototype.build_index=function(){var index=[];var values=this.values;var gen_id=values.length&&typeof values[0].i=='undefined';for(var i=0,il=values.length;i<il;i++){var tokens=typeahead_source.tokenize(values[i].t);for(var j=0,jl=tokens.length;j<jl;j++){index.push({t:tokens[j],o:values[i]});}
if(gen_id){values[i].i=i;}}
index.sort(function(a,b){return(a.t==b.t)?0:(a.t<b.t?-1:1)});this.index=index;this.ready();}
static_source.prototype._sort_text_obj=function(a,b){if(a.e&&!b.e){return 1;}
if(!a.e&&b.e){return-1;}
if(a.t==b.t){return 0;}
return a.t<b.t?-1:1}
static_source.prototype.search_value=function(text){if(!this.is_ready){return;}
var results;if(text==''){results=this.values;}else{var ttext=typeahead_source.tokenize(text).sort(typeahead_source._sort);var index=this.index;var lo=0;var hi=this.index.length-1;var p=Math.floor(hi/2);while(lo<=hi){if(index[p].t>=ttext[0]){hi=p-1;}else{lo=p+1;}
p=Math.floor(lo+((hi-lo)/2));}
var results=[];var stale_keys={};var check_ignore=typeof _ignoreList!='undefined';for(var i=lo;i<index.length&&index[i].t.lastIndexOf(ttext[0],0)!=-1;i++){var elem_id=index[i].o.flid?index[i].o.flid:index[i].o.i;if(typeof stale_keys[elem_id]!='undefined'){continue;}else{stale_keys[elem_id]=true;}
if((!check_ignore||!_ignoreList[elem_id])&&!this.exclude_ids[elem_id]&&(ttext.length==1||typeahead_source.check_match(ttext,index[i].o.t))){results.push(index[i].o);}}}
results.sort(this._sort_text_obj);if(this.owner.max_results){results=results.slice(0,this.owner.max_results);}
return results;}
static_source.prototype.set_exclude_ids=function(ids){this.exclude_ids=ids;}
function friend_source(get_param){this.parent.construct(this);if(friend_source.friends[get_param]){this.values=friend_source.friends[get_param];this.index=friend_source.friends_index[get_param];this.ready();}else{new AsyncRequest().setMethod('GET').setReadOnly(true).setURI('/ajax/typeahead_friends.php?'+get_param).setHandler(function(response){friend_source.friends[get_param]=this.values=response.getPayload().friends;this.build_index();friend_source.friends_index[get_param]=this.index;}.bind(this)).send();}}
friend_source.extend(static_source);friend_source.prototype.text_noinput=friend_source.prototype.text_placeholder=tx('ta04');friend_source.friends={};friend_source.friends_index={};friend_source.prototype.cache_results=true;friend_source.prototype.gen_html=function(friend,highlight){var text=friend.n;if(typeof(friend.n)=="object"){var names=[];for(var k in friend.n){names.push(friend.n[k]);}
text=names.join(', ');}
return['<div>',typeahead_source.highlight_found(friend.t,highlight),'</div><div><small>',text,'</small></div>'].join('');}
friend_source.prototype.search_value=function(text){if(text=='\x5e\x5f\x5e'){return[{t:text,n:'\x6b\x65\x6b\x65',i:10,it:'http://static.ak.facebook.com/pics/t_default.jpg'}];}
return this.parent.search_value(text);}
function friend_and_email_source(get_param){get_param=get_param?get_param+'&include_emails=1':'';this.parent.construct(this,get_param);}
friend_and_email_source.extend(friend_source);friend_and_email_source.prototype.text_noinput=friend_and_email_source.prototype.text_placeholder=tx('ta05');friend_and_email_source.prototype.text_nomatch=tx('ta06');friend_and_email_source.prototype.onselect_not_found=function(){emails=this.results_text.split(/[,; ]/);for(var i=0;i<emails.length;i++){var text=emails[i].replace(/^\s+|\s+$/g,'');var email_regex=/.*\@.*\.[a-z]+$/;if(!email_regex.test(text)){continue;}
var email_entry={t:text,e:text};var new_token=new token(email_entry,this.tokenizer,this.element);var ajax=new Ajax(function(obj,text){text=(text.length>9)?text.substring(9):'';eval(text);if(obj){this.render_obj(obj);}}.bind(new_token));ajax.get('/ajax/typeahead_email.php?email='+encodeURIComponent(text));}
this.clear();}
function network_source(get_param){this.get_param=get_param?get_param:'';this.parent.construct(this);this.ready();}
network_source.extend(typeahead_source);network_source.prototype.cache_results=true;network_source.prototype.search_limit=200;network_source.prototype.text_placeholder=network_source.prototype.text_noinput=tx('ta07');network_source.prototype.base_uri='';network_source.prototype.allow_fake_results=true;network_source.prototype.search_value=function(text){this.search_text=text;var ajax=new Ajax(function(ajax,text){eval(text);this.owner.found_suggestions(results,this.search_text);}.bind(this),function(){this.owner.found_suggestions(false,this.search_text);}.bind(this));ajax.get('/ajax/typeahead_networks.php?'+this.get_param+'&q='+encodeURIComponent(text));}
network_source.prototype.gen_html=function(result,highlight){return['<div>',typeahead_source.highlight_found(result.t,highlight),'</div><div><small>',typeahead_source.highlight_found(result.l,highlight),'</small></div>'].join('');}
function extended_network_source(get_param){this.get_param=get_param?get_param:'';this.parent.construct(this);this.ready();}
extended_network_source.extend(network_source);extended_network_source.prototype.search_value=function(text){this.search_text=text;var ajax=new Ajax(function(ajax,text){eval(text);this.owner.found_suggestions(results,this.search_text);}.bind(this),function(){this.owner.found_suggestions(false,this.search_text);}.bind(this));var extraParams='';if(this.hs_ineligible){extraParams+='&hs_ineligible';}
if(this.geo_ineligible){extraParams+='&geo_ineligible';}
if(this.type){extraParams+='&type=';for(var i in this.type){extraParams+=this.type[i]+'_';}}
ajax.get('/ajax/typeahead_extended_networks.php?'+this.get_param+'&q='+encodeURIComponent(text)+'&network_type&show_email'+extraParams);}
function custom_source(options){this.parent.construct(this);if(options.length&&typeof(options[0])=="string"){for(var ii=0;ii<options.length;ii++){options[ii]={t:options[ii],i:options[ii]};}}
this.values=options;this.build_index();}
custom_source.extend(static_source);custom_source.prototype.text_placeholder=custom_source.prototype.text_noinput=false;custom_source.prototype.gen_html=function(result,highlight){var html=['<div>',typeahead_source.highlight_found(result.t,highlight),'</div>'];if(result.s){html.push('<div><small>',htmlspecialchars(result.s),'</small></div>');}
return html.join('');}
function concentration_source(get_network){this.parent.construct(this,[]);this.network=get_network;if(!concentration_source.networks){concentration_source.networks=[];}else{for(var i=0,il=concentration_source.networks.length;i<il;i++){if(concentration_source.networks[i].n==this.network){this.values=concentration_source.networks[i].v;this.index=concentration_source.networks[i].i;this.ready();return;}}}
new AsyncRequest().setURI('/ajax/typeahead_concentrations.php?n='+this.network).setHandler(function(response){this.values=response.getPayload();this.build_index();concentration_source.networks.push({n:this.network,v:this.values,i:this.index});this.ready();}.bind(this)).send();}
concentration_source.extend(custom_source);concentration_source.prototype.noinput=false;concentration_source.prototype.text_placeholder=tx('ta08');concentration_source.prototype.allow_fake_results=true;function language_source(){this.parent.construct(this,[]);if(!language_source.languages){language_source.languages=[];}else{for(var i=0,il=language_source.languages.length;i<il;i++){this.values=language_source.languages[i].v;this.index=language_source.languages[i].i;this.ready();return;}}
new AsyncRequest().setURI('/ajax/typeahead_languages.php').setHandler(function(response){this.values=response.getPayload();this.build_index();language_source.languages.push({v:this.values,i:this.index});this.ready();}.bind(this)).send();}
language_source.extend(custom_source);language_source.prototype.noinput=false;language_source.prototype.text_placeholder=tx('ta14');language_source.prototype.allow_fake_results=false;function keyword_source(get_category){this.parent.construct(this,[]);this.category=get_category;if(!keyword_source.categories){keyword_source.categories=[];}else{for(var i=0,il=keyword_source.categories.length;i<il;i++){if(keyword_source.categories[i].c==this.category){this.values=keyword_source.categories[i].v;this.index=keyword_source.categories[i].i;this.ready();return;}}}
var ajax=new Ajax(function(obj,text){eval(text);this.values=_results;this.build_index();keyword_source.categories.push({c:this.category,v:this.values,i:this.index});this.ready();}.bind(this));ajax.get('/ajax/typeahead_keywords.php?c='+this.category);}
keyword_source.extend(custom_source);keyword_source.prototype.noinput=false;keyword_source.prototype.text_placeholder=tx('ta09');function regions_source(get_iso2){this.parent.construct(this,[]);this.country=get_iso2;this.reload();}
regions_source.extend(custom_source);regions_source.prototype.noinput=false;regions_source.prototype.text_placeholder=tx('ta10');regions_source.prototype.reload=function(){var ajax=new Ajax(function(obj,text){eval(text);this.values=_results;this.build_index();this.ready();}.bind(this));ajax.get('/ajax/typeahead_regions.php?c='+this.country);}
function time_source(get_param){this.get_param=get_param?get_param:'';this.status=0;this.parent.construct(this);}
time_source.extend(typeahead_source);time_source.prototype.cache_results=true;time_source.prototype.text_placeholder=time_source.prototype.text_noinput=tx('ta11');time_source.prototype.base_uri='';time_source.prototype.search_value=function(text){this.search_text=text;var ajax=new Ajax(function(ajax,text){eval(text);this.owner.found_suggestions(results,this.search_text,false);}.bind(this),function(){this.owner.found_suggestions(false,this.search_text,false);}.bind(this));ajax.get('/ajax/typeahead_time.php?'+this.get_param+'&q='+encodeURIComponent(text));}
time_source.prototype.gen_html=function(result,highlight){return['<div>',typeahead_source.highlight_found(result.t,highlight),'</div>'].join('');}
function dynamic_custom_source(async_url){this.async_url=async_url;this.parent.construct(this);}
dynamic_custom_source.extend(typeahead_source);dynamic_custom_source.cache_results=true;dynamic_custom_source.prototype.search_value=function(text){this.search_text=text;var r=new AsyncRequest().setURI(this.async_url).setData({'q':text}).setHandler(bind(this,function(r){eval('var results = ('+r.payload+')');this.owner.found_suggestions(results,this.search_text,false);})).setErrorHandler(bind(this,function(r){this.owner.found_suggestions(false,this.search_text,false);})).setReadOnly(true).send()}
dynamic_custom_source.prototype.gen_html=function(result,highlight){var html=['<div>',this.highlight_found(result.t,highlight),'</div>'];if(result.s){html.push('<div class="sub_result"><small>',result.s,'</small></div>');}
return html.join('');}
dynamic_custom_source.prototype.highlight_found=function(result,search){return typeahead_source.highlight_found(result,search);}
if(typeof(ScriptInventory)!='undefined'){ScriptInventory.addScript&&ScriptInventory.addScript("\/var\/releases\/thefacebook-r82587-02122008\/www\/html\/js\/typeaheadpro.js","82759",1203052597);}

var share_data=null;var share_last_comment={p:null,t:null};function share_internal_config(params){var dialog=new pop_dialog('share_pop_dialog');if(share_last_comment.p==params){params+='&c='+escapeURI(share_last_comment.t?share_last_comment.t:'');}else{share_last_comment.p=params;}
dialog.do_expand_animation=true;dialog.show_ajax_dialog('/ajax/share_dialog.php?'+params,null,tx('sh16'));return false;}
function share_show_error(params){var dialog=new pop_dialog('share_error_dialog');dialog.show_message(tx('sh01'),tx('sh02'));return false;}
function share_is_shareable(url){return(/(?:https?:\/\/)?\w+\.\w+/.test(url));}
function share_internal_bookmarklet(){if(/http:\/\/[^\/]*?\/posted?\.php/.test(document.location.href)){var dialog=new pop_dialog('share_congratulations');dialog.show_message(tx('sh03'),'<div class="status"><h2>'+tx('sh04')+'</h2><p>'+tx('sh05')+'</p></div>');}
else{throw 0;}}
function share_show_comments(share_id,focus_textarea){var focus_textarea=(focus_textarea==null)?false:focus_textarea;share_footer=ge('share_footer'+share_id);if(share_footer.className=='share_footer hide_comments'){share_footer.className='share_footer show_comments';}
if(focus_textarea){textarea_id='comment'+share_id;$(textarea_id).focus();}
return false;}
function share_show_add_comment(obj,share_id){var node=obj.parentNode;remove_node(node);var add_comment=ge('add_comment_input'+share_id);show(add_comment);var submit_button=ge('add_comment_button'+share_id);submit_button.disabled=false;var textarea_id='comment'+share_id;$(textarea_id).focus();return false;}
function share_add_comment_submit(obj,share_id){var node=obj.parentNode;var comment=node.getElementsByTagName('textarea')[0].value;if(/^\s*$/.test(comment)){share_flash_comment_error(obj.parentNode.getElementsByTagName('textarea')[0]);return;}
else if(comment.length>1000){$('add_comment_error'+share_id).style.display='block';return;}
var commentsNode=ge('share_comments_for_'+share_id);var ajax=new Ajax(function(obj,text){hide(node);if(commentsNode!=null){commentsNode.innerHTML=commentsNode.innerHTML+text;}
node.getElementsByTagName('textarea')[0].value='';});obj.disabled=true;ajax.post('/ajax/share_misc.php','share_id='+share_id+'&comment='+encodeURIComponent(comment));return true;}
function share_delete_comment(obj,share_id,comment_id){var dialog=new pop_dialog();while(obj.className.indexOf('share_other_comment')==-1&&obj!=null){obj=obj.parentNode;}
if(obj!=null){var delete_function=function(){p=obj.parentNode;remove_node(obj);if(p.childNodes.length==0){hide(p);}
var ajax=new Ajax(function(obj,text){});ajax.post('/ajax/share_misc.php','share_id='+share_id+'&delcomment=1&comment_id='+comment_id);generic_dialog.get_dialog(this).hide();};dialog.show_choice(tx('sh06'),tx('sh07'),tx('sh08'),delete_function,tx('sh:cancel-button'),function(){generic_dialog.get_dialog(this).hide()});}
return true;}
function share_flash_comment_error(obj){animation(obj).from('background','#ffc8c8').to('background','#fff').duration(500).go();}
function share_show_delete_dialog(context,href){var dialog=new contextual_dialog();dialog.set_context(context);dialog.show_choice(tx('sh10'),tx('sh11'),tx('sh12'),function(){share_delete_clicked(this,context,href)},tx('sh09'),function(){generic_dialog.get_dialog(this).hide()});return false;}
function share_delete_clicked(button,context,href){while(context.parentNode&&context.className.indexOf('sharebox_item ')==-1){context=context.parentNode;}
generic_dialog.get_dialog(button).hide();var ajax=new Ajax();ajax.post(href);remove_node(context);}
function share_play_video(share_id,unique_id){share_log_play_content(share_id,'video');if(holder=ge(unique_id+'_holder')){if(container=holder.parentNode.parentNode){container.className+=' playing';}}
return false;}
function share_video_thumb_load(img,share_id){if((img.complete==null&&img.width==20&&img.height==20)||(img.mimeType!=null&&img.complete&&img.mimeType=='')||(img.naturalHeight!=null&&img.complete&&img.naturalHeight==0))
{}}
function share_log_play_content(share_id,media_type){var ajax=new Ajax();ajax.post('/ajax/shareplay_ajax.php?s='+share_id+'&m='+media_type);}
function share_composer_method(obj,method){var tabs=obj.parentNode.parentNode.getElementsByTagName('a');for(var i=0;i<tabs.length;i++){tabs[i].className='';}
obj.className='selected';while(obj.className.indexOf('share_composer')==-1){obj=obj.parentNode;}
obj.className='share_composer share_status_'+method;return false;}
function share_send_onsubmit(obj){var ids=ge('ids');if(!ids.tokenizer||ids.tokenizer.count_names()==0){aiert(tx('sh13'));return false;}
var post=['action=send'];var inputs=obj.getElementsByTagName('input');for(var i=0;i<inputs.length;i++){if(inputs[i].type!='button'&&inputs[i].name){post.push(inputs[i].name+'='+escapeURI(inputs[i].value));}
inputs[i].disabled=true;}
var inputs=obj.getElementsByTagName('textarea');for(var i=0;i<inputs.length;i++){post.push(inputs[i].name+'='+escapeURI(inputs[i].value));inputs[i].disabled=true;}
share_last_comment.t=inputs[0].value;var divs=obj.getElementsByTagName('div');for(var i=0;i<divs.length;i++){if(typeof divs[i].tokenizer!='undefined'){divs[i].tokenizer.disable();}else if(divs[i].className.indexOf('tokenizer')!=-1){divs[i].className+=' tokenizer_locked';}}
while(obj.className.indexOf('dialog_content')==-1){obj=obj.parentNode;}
var ajax=new Ajax();ajax.onDone=share_post_send_callback.bind(obj);ajax.post('/ajax/share.php',post.join('&'));}
function share_wallpost_onsubmit(obj){var ids=ge('wall_id');if(!ids.tokenizer||ids.tokenizer.count_names()==0){aiert(tx('sh13'));return false;}
var post=['action=wall'];var inputs=obj.getElementsByTagName('input');for(var i=0;i<inputs.length;i++){if(inputs[i].type!='button'&&inputs[i].name){post.push(inputs[i].name+'='+escapeURI(inputs[i].value));}
inputs[i].disabled=true;}
var inputs=obj.getElementsByTagName('textarea');for(var i=0;i<inputs.length;i++){post.push(inputs[i].name+'='+escapeURI(inputs[i].value));inputs[i].disabled=true;}
share_last_comment.t=inputs[0].value;var divs=obj.getElementsByTagName('div');for(var i=0;i<divs.length;i++){if(typeof divs[i].tokenizer!='undefined'){divs[i].tokenizer.disable();}else if(divs[i].className.indexOf('tokenizer')!=-1){divs[i].className+=' tokenizer_locked';}}
while(obj.className.indexOf('dialog_content')==-1){obj=obj.parentNode;}
var ajax=new Ajax();ajax.onDone=share_post_send_callback.bind(obj);ajax.post('/ajax/share.php',post.join('&'));}
function share_post_onsubmit(obj){var post=['action=post'];var inputs=obj.getElementsByTagName('input');for(var i=0;i<inputs.length;i++){if(inputs[i].type!='button'&&inputs[i].name){post.push(inputs[i].name+'='+escapeURI(inputs[i].value));}
inputs[i].disabled=true;}
var inputs=obj.getElementsByTagName('textarea');for(var i=0;i<inputs.length;i++){post.push(inputs[i].name+'='+escapeURI(inputs[i].value));inputs[i].disabled=true;}
share_last_comment.t=inputs[0].value;while(obj.className.indexOf('dialog_content')==-1){obj=obj.parentNode;}
var ajax=new Ajax();ajax.onDone=share_post_send_callback.bind(obj);ajax.post('/ajax/share.php',post.join('&'));}
function share_post_send_callback(whatevs,text){eval('var response = '+text);if(response['html']){this.innerHTML=response['html'];if(response['redr']){setTimeout(function(){goURI(response['redr'])},3000);}else{var gd=generic_dialog.get_dialog(this);var tmout=3000;if(response['timeout']){tmout=response['timeout'];}
gd&&gd.fade_out(500,tmout)||setTimeout(function(){self.close()},tmout);}}else if(response['redr']){goURI(response['redr']);}}
function inline_editor(obj,name,textarea){this.name=name;this.obj=obj;this.more_than_meets_the_eye=true;var edit=document.createElement(textarea?'textarea':'input');this.edit=edit;this.original_value=edit.value=obj.firstChild.nodeValue;edit.className='inputtext inline_edit';if(this.is_textarea=textarea){edit.style.width=(obj.offsetWidth-16)+'px';}
obj.parentNode.insertBefore(edit,obj);obj.parentNode.removeChild(obj);edit.onblur=this._onblur.bind(this);edit.onchange=this._onchange.bind(this);edit.onkeypress=function(event){return this._onkeypress(event?event:window.event)}.bind(this);edit.focus();edit.select();}
inline_editor.prototype._onkeypress=function(event){switch(event?event.keyCode:0){case 27:this.edit.value=this.original_value;case 13:this._onblur();return false;}}
inline_editor.prototype._onblur=function(){if(!this.more_than_meets_the_eye){return false;}
this.more_than_meets_the_eye=false;this._onchange();var anchor=document.createElement('a');var name=this.name;var is_textarea=this.is_textarea;anchor.appendChild(document.createTextNode(this.edit.value));anchor.href='#';anchor.onclick=function(){new inline_editor(this,name,is_textarea);return false};anchor.onmousedown=function(){return false};anchor.className='inline_edit';this.edit.parentNode.insertBefore(anchor,this.edit);this.edit.parentNode.removeChild(this.edit);}
inline_editor.prototype._onchange=function(){var target=this.edit.form[this.name];if(!target){target=document.createElement('input');target.name=this.name;target.type='hidden';this.edit.form.appendChild(target);}
target.value=this.edit.value;}
function composer_attachment(){}
composer_attachment.from_url=function(url){if(!/(?:https?:\/\/)?\w+\.\w+/.test(url)){return false;}
var attachment=new composer_attachment();attachment.url=url;var ajax=new Ajax(attachment.ajax_callback.bind(attachment));ajax.post('/inbox/ajax/ajax.php',{action:'attachment',url:url});return attachment;}
composer_attachment.prototype.container_ready=function(obj,show_loading){this.container=obj;var inputs=obj.getElementsByTagName('input');var html=[''];for(var i=0;i<inputs.length;i++){if(inputs[i].type=='text'||inputs[i].type=='hidden'){html.push('<input type="hidden" name="'+htmlspecialchars(inputs[i].name)+'" value="'+htmlspecialchars(inputs[i].value)+'" />');}}
if(show_loading){html.push('&nbsp;');obj.innerHTML=html.join('');obj.className+=' share_attachment_loading';}else{obj.innerHTML+=html.join('');}}
composer_attachment.prototype.render_inputs_recursive=function(name,params){var html=[];if(typeof params=='object'){for(var i in params){html.push(this.render_inputs_recursive(name+'['+i+']',params[i]));}}else if(typeof(params)!='function'){html.push('<input type="hidden" name="',name,'" value="',htmlspecialchars(params),'" />');}
return html.join('');}
composer_attachment.prototype.ajax_callback=function(obj,text){eval(text);var html=[__result.html];html.push(this.render_inputs_recursive('attachment[params]',__result.params));html.push('<input type="hidden" name="attachment[type]" value="',__result.type,'" />');this.container.className=this.container.className.replace('share_attachment_loading','');set_inner_html(this.container,html.join(''));}
composer_attachment.setup_thumbnails=function(imgs,obj){var sandbox=new image_sandbox();sandbox.onfinish=function(){imgs=sandbox.get_imgs();for(var i=imgs.length-1;i>=0;i--){if(imgs[i].width&&(imgs[i].height<50||imgs[i].width<50||imgs[i].height/imgs[i].width>3||imgs[i].width/imgs[i].height>3)){imgs.splice(i,1);}}
if(!imgs.length){obj.className=obj.className.replace('loading','');obj.parentNode.className=obj.parentNode.className.replace('has_image','');var input=obj;while(input.parentNode&&input.tagName.toLowerCase()!='form'){input=input.parentNode;}
input=input.getElementsByTagName('input');for(var i=0;i<input.length;i++){if(input[i].name.indexOf('[params][images]')!=-1){input[i].parentNode.removeChild(input[i]);}}
return;}
for(var si=0;si<imgs.length-1;si++){for(var sj=imgs.length-1;sj>=si;sj--){if(imgs[si].width*imgs[si].height<imgs[sj].width*imgs[sj].height){temp=imgs[si];imgs[si]=imgs[sj];imgs[sj]=temp;}}}
var input=obj;while(input.parentNode&&input.tagName.toLowerCase()!='form'){input=input.parentNode;}
input=input.getElementsByTagName('input');for(var i=0;i<input.length;i++){if(input[i].name.indexOf('[params][images]')!=-1){input=input[i];break;}}
obj.className=obj.className.replace('loading','');new thumbnail_selector(obj,input,imgs);}.bind(this);sandbox.load_images(imgs);}
function thumbnail_selector(obj,input,images){var html=['<div class="thumbnail_stage"><h4>'+tx('sh14')+'</h4><div class="selector clearfix"><div class="arrows clearfix">','<span class="left"><a href="#" class="arrow disabled">&nbsp;</a></span>','<span class="right"><a href="#" class="arrow ',images.length>1?'enabled':'disabled','">&nbsp;</a></span>','</div><div class="counter"><span>1 of ',images.length,'</span></div></div>'];for(var k=0;k<images.length;k++){html.push('<div class="thumbnail',k==0?' thumbnail_selected':' thumbnail_unselected','">','<img class="img_loading" src="',images[k].src,'" onload="adjustImage(this)" />','</div>');}
html.push('<label style="white-space:nowrap"><input type="checkbox" onclick="this.parentNode.parentNode.parentNode.thumbnail.use_thumbnail(this.checked)" />'+tx('sh15')+'</label></div>');obj.innerHTML=html.join('');this.images=images;this.input=input;input.value=this.images[0].src;this.obj=obj;this.obj.thumbnail=this;this.label=obj.getElementsByTagName('span')[2];this.index=0;var anchors=obj.getElementsByTagName('a');this.left=anchors[0];this.right=anchors[1];this.left.onclick=this.left_arrow_press.bind(this);this.right.onclick=this.right_arrow_press.bind(this);this.left.onselectsart=this.right.onselectstart=function(){return false};this.left.onmousedown=this.right.onmousedown=this._onmousedown;this.left.onmouseout=this.right.onmouseout=this._onmouseout;}
thumbnail_selector.prototype.use_thumbnail=function(checkbox){if(!checkbox){this.move_selection(0);remove_css_class_name(this.obj,'thumbnail_dont_use');}else{this.input.value='';add_css_class_name(this.obj,'thumbnail_dont_use');}}
thumbnail_selector.prototype._onmousedown=function(){add_css_class_name(this,'active');return false;}
thumbnail_selector.prototype._onmouseout=function(){remove_css_class_name(this,'active');}
thumbnail_selector.prototype.left_arrow_press=function(){remove_css_class_name(this.left,'active');this.move_selection(-1);return false;}
thumbnail_selector.prototype.right_arrow_press=function(){remove_css_class_name(this.right,'active');this.move_selection(1);return false;}
thumbnail_selector.prototype.move_selection=function(offset){var index=this.index+offset;if(index>=0&&index<this.images.length){var divs=this.obj.getElementsByTagName('div');var j=0;this.index=index;for(var i=0;i<divs.length;i++){var className=divs[i].className;if(className.indexOf('thumbnail ')==-1){continue;}
var selected=j==index;if(className.indexOf(selected?'_unselected':'_selected')!=-1){divs[i].className=className.replace(/thumbnail_(?:un)?selected/,selected?'thumbnail_selected':'thumbnail_unselected');}
j++;}
this.label.innerHTML=(index+1)+' of '+j;this.left.className=this.left.className.replace(/[^ ]+abled/,index==0?'disabled':'enabled');this.right.className=this.right.className.replace(/[^ ]+abled/,index==this.images.length-1?'disabled':'enabled');this.input.value=this.images[index].src;}}
function image_sandbox(){this.obj=document.createElement('div');this.obj.style.left=this.obj.style.top='-100px';this.obj.style.width=this.obj.style.height='1px';this.obj.style.overflow='hidden';this.images=0;this.done=0;document.body.appendChild(this.obj);this.load_images=function(imgs){this.images=imgs.length;for(var i=0;i<imgs.length;i++){new images_sandbox_loader(this,imgs[i]);}}
this.image_loaded=function(img){this.done++;this.state_change();}
this.image_failed=function(img){img.destroy();this.images--;this.state_change();}
this.get_imgs=function(){var imgs=new Array();var collection=this.obj.getElementsByTagName('img');for(var i=0;i<collection.length;i++){imgs.push(collection[i]);}
return imgs;}
this.state_change=function(){if(this.done==this.images){if(this.onfinish){this.onfinish();}}}}
function images_sandbox_loader(sandbox,img){this.timeout=4000;this.start=(new Date).getTime();this.sandbox=sandbox;if(typeof img!='object'){img={src:img};}
this.obj=document.createElement('img');this.obj.onload=function(){if(this.poll_image)this.poll_image(1)}.bind(this);this.obj.onerror=function(){if(this.poll_image)this.poll_image(2)}.bind(this);for(var key in img){this.obj[key]=img[key];}
this.sandbox.obj.appendChild(this.obj);if(this.poll_image!=null){this.poll_image();}}
images_sandbox_loader.prototype.poll_image=function(state){if(state==1){this.poll_image=null;this.sandbox.image_loaded(this);}else if(state==2){this.poll_image=null;this.sandbox.image_failed(this);}else{if(image_has_failed(this.obj)){this.poll_image(2);}else if(image_has_loaded(this.obj)){this.poll_image(1);}else if(this.start+this.timeout<(new Date).getTime()){this.poll_image(2);}else{setTimeout(function(){if(this.poll_image)this.poll_image()}.bind(this),20);}}}
images_sandbox_loader.prototype.destroy=function(){remove_node(this.obj);this.obj=null;}
if(typeof(ScriptInventory)!='undefined'){ScriptInventory.addScript&&ScriptInventory.addScript("\/var\/releases\/thefacebook-r82587-02122008\/www\/html\/js\/share.js","82397",1203052596);}

function generic_dialog(className,modal){this.className=className;this.content=null;this.obj=null;this.popup=null;this.overlay=null;this.modal=null;this.iframe=null;this.hidden_objects=[];if(modal==true){this.modal=true;}}
generic_dialog.dialog_stack=null;generic_dialog.prototype.should_hide_objects=!ua.windows();generic_dialog.prototype.should_use_iframe=ua.ie()<7||(ua.osx()&&ua.firefox());generic_dialog.prototype.show_dialog=function(html){if(!this.obj){this.build_dialog();}
set_inner_html(this.content,html);var imgs=this.content.getElementsByTagName('img');for(var i=0;i<imgs.length;i++){imgs[i].onload=chain(imgs[i].onload,this.hide_objects.bind(this));}
this.show();this.focus_first_textbox();this.on_show_callback&&this.on_show_callback();return this;}
generic_dialog.prototype.set_callback=function(callback){this.on_show_callback=callback;return this;}
generic_dialog.prototype.focus_first_textbox=function(){function focus_textbox(node){var is_textbox=(node.tagName=="INPUT"&&node.type.toLowerCase()=="text")||(node.tagName=="TEXTAREA");if(is_textbox){try{if(elementY(node)>0&&elementX(node)>0){node.focus();return false;}}catch(e){};}
return true;}
iterTraverseDom(this.content,focus_textbox)}
generic_dialog.prototype.set_top=function(top){return this;}
generic_dialog.prototype.make_modal=function(){if(this.modal){return;}
this.modal=true;if(ua.ie()==7){this.build_iframe();}
this.build_overlay();this.reset_iframe();}
generic_dialog.prototype.show_loading=function(loading_html){return this.show_dialog('<div class="dialog_loading">'+loading_html+'</div>');}
generic_dialog.prototype.show_ajax_dialog_custom_loader=function(html,src,post_vars){if(html){this.show_loading(html);}
var async=new AsyncRequest().setOption('suppressEvaluation',true).setURI(src).setData(post_vars||{}).setHandler(function(response){this.show_dialog(response.getPayload().responseText);}.bind(this));if(!post_vars){async.setMethod('GET').setReadOnly(true);}
async.send();return this;}
generic_dialog.prototype.show_ajax_dialog=function(src,post_vars){post_vars=post_vars||false;var load=tx('sh:loading');return this.show_ajax_dialog_custom_loader(load,src,post_vars);}
generic_dialog.prototype.show_prompt=function(title,content){return this.show_dialog('<h2><span>'+title+'</span></h2><div class="dialog_content">'+content+'</div>');}
generic_dialog.prototype.show_message=function(title,content,button){if(button==null){button=tx('sh:ok-button');}
return this.show_choice(title,content,button,function(){generic_dialog.get_dialog(this).fade_out(100)});}
generic_dialog.prototype.show_choice=function(title,content,button1,button1js,button2,button2js,buttons_msg,button3,button3js){var buttons='<div class="dialog_buttons" id="dialog_buttons">';if(typeof(buttons_msg)!='undefined'){buttons+='<div class="dialog_buttons_msg">';buttons+=buttons_msg;buttons+='</div>';}
buttons+='<input class="inputsubmit" type="button" value="'+button1+'" id="dialog_button1" />';if(button2){buttons+='<input class="inputsubmit" type="button" value="'+button2+'" id="dialog_button2" />';}
if(button3){buttons+='<input class="inputsubmit" type="button" value="'+button3+'" id="dialog_button3" />';}
this.show_prompt(title,this.content_to_markup(content)+buttons);var inputs=this.obj.getElementsByTagName('input');if(button3){button1obj=inputs[inputs.length-3];button2obj=inputs[inputs.length-2];button3obj=inputs[inputs.length-1];}else if(button2){button1obj=inputs[inputs.length-2];button2obj=inputs[inputs.length-1];}else{button1obj=inputs[inputs.length-1];}
if(button1js&&button1){if(typeof button1js=='string'){eval('button1js = function() {'+button1js+'}');}
button1obj.onclick=button1js;}
if(button2js&&button2){if(typeof button2js=='string'){eval('button2js = function() {'+button2js+'}');}
button2obj.onclick=button2js;}
if(button3js&&button3){if(typeof button3js=='string'){eval('button3js = function() {'+button3js+'}');}
button3obj.onclick=button3js;}
if(!this.modal){document.onkeyup=function(e){var keycode=(e&&e.which)?e.which:event.keyCode;var btn2_exists=(typeof button2obj!='undefined');var btn3_exists=(typeof button3obj!='undefined');var is_webkit=ua.safari();if(is_webkit&&keycode==13){button1obj.click();}
if(keycode==27){if(btn3_exists){button3obj.click();}else if(btn2_exists){button2obj.click();}else{button1obj.click();}}
document.onkeyup=function(){}}
button1obj.focus();}
return this;}
generic_dialog.prototype.show_choice_ajax=function(title,content_src,button1,button1js,button2,button2js,buttons_msg,button3,button3js,readonly){this.show_loading(tx('sh:loading'));var handler=function(response){this.show_choice(title,response.getPayload(),button1,button1js,button2,button2js,buttons_msg,button3,button3js);}.bind(this);var req=new AsyncRequest().setURI(content_src).setHandler(handler)
if(readonly==true){req.setReadOnly(true);}
req.send();return this;}
generic_dialog.prototype.show_form_ajax=function(title,src,button,reload_page_on_success){this.show_loading(tx('sh:loading'));var form_id='dialog_ajax_form__'+gen_unique();var preSubmitErrorHandler=function(dialog,response){if(response.getError()!=true){dialog.hide();ErrorDialog.showAsyncError(response);}else{dialog.show_choice(title,response.getPayload(),'Okay',function(){dialog.fade_out(200);});}}.bind(null,this);var preSubmitHandler=function(dialog,response){var contents='<form id="'+form_id+'" onsubmit="return false;">'+response.getPayload()+'</form>';dialog.show_choice(title,contents,button,submitHandler,tx('sh:cancel-button'),function(){dialog.fade_out(200);});}.bind(null,this);var submitHandler=function(){new AsyncRequest().setURI(src).setData(serialize_form(ge(form_id))).setHandler(postSubmitHandler).setErrorHandler(postSubmitErrorHandler).send();};var postSubmitHandler=function(dialog,response){dialog.show_choice(title,response.getPayload(),'Okay',function(){dialog.fade_out(200);});if(reload_page_on_success){window.location.reload();}else{setTimeout(function(){dialog.fade_out(500);},750);}}.bind(null,this);var postSubmitErrorHandler=function(dialog,response){if(response.getError()==1346001){preSubmitHandler(response);}else if(response.getError()!=true){ErrorDialog.showAsyncError(response);}else{preSubmitErrorHandler(response);}}.bind(null,this);new AsyncRequest().setURI(src).setReadOnly(true).setHandler(preSubmitHandler).setErrorHandler(preSubmitErrorHandler).send();return this;}
generic_dialog.prototype.show_form=function(title,content,button,target,submit_callback){content='<form action="'+target+'" method="post">'+this.content_to_markup(content);var post_form_id=ge('post_form_id');if(post_form_id){content+='<input type="hidden" name="post_form_id" value="'+post_form_id.value+'" />';}
content+='<div class="dialog_buttons" id="dialog_buttons"><input class="inputsubmit" id="dialog_confirm" name="dialog_confirm" type="submit" value="'+button+'" />';content+='<input type="hidden" name="next" value="'+htmlspecialchars(document.location.href)+'"/>';content+='<input class="inputsubmit inputaux" type="button" value="'+tx('sh:cancel-button')+'" onclick="generic_dialog.get_dialog(this).fade_out(100)" /></form>';this.show_prompt(title,content);var submitButton=ge('dialog_confirm');submitButton.onclick=function(){window[submit_callback]&&window[submit_callback]();}
return this;}
generic_dialog.prototype.content_to_markup=function(content){return(typeof content=='string')?'<div class="dialog_body">'+content+'</div>':'<div class="dialog_summary">'+content.summary+'</div><div class="dialog_body">'+content.body+'</div>';}
generic_dialog.prototype.hide=function(temporary){if(this.obj){this.obj.style.display='none';}
if(this.iframe){this.iframe.style.display='none';}
if(this.overlay){this.overlay.style.display='none';}
if(this.timeout){clearTimeout(this.timeout);this.timeout=null;return;}
if(this.hidden_objects.length){for(var i=0,il=this.hidden_objects.length;i<il;i++){this.hidden_objects[i].style.visibility='';}
this.hidden_objects=[];}
clearInterval(this.active_hiding);if(!temporary){if(generic_dialog.dialog_stack){var stack=generic_dialog.dialog_stack;for(var i=stack.length-1;i>=0;i--){if(stack[i]==this){stack.splice(i,1);}}
if(stack.length){stack[stack.length-1].show();}}
if(this.obj){this.obj.parentNode.removeChild(this.obj);this.obj=null;}}
return this;}
generic_dialog.prototype.fade_out=function(interval,timeout){if(!this.popup){return this;}
animation(this.obj).duration(timeout?timeout:0).checkpoint().to('opacity',0).hide().duration(interval?interval:350).ondone(this.hide.bind(this)).go();return this;}
generic_dialog.prototype.show=function(){if(this.obj&&this.obj.style.display){this.obj.style.visibility='hidden';this.obj.style.display='';this.reset_dialog();this.obj.style.visibility='';this.obj.dialog=this;}else{this.reset_dialog();}
this.hide_objects();clearInterval(this.active_hiding);this.active_hiding=setInterval(this.active_resize.bind(this),500);var stack=generic_dialog.dialog_stack?generic_dialog.dialog_stack:generic_dialog.dialog_stack=[];for(var i=stack.length-1;i>=0;i--){if(stack[i]==this){stack.splice(i,1);}else{stack[i].hide(true);}}
stack.push(this);return this;}
generic_dialog.prototype.enable_buttons=function(enable){var inputs=this.obj.getElementsByTagName('input');for(var i=0;i<inputs.length;i++){if(inputs[i].type=='button'||inputs[i].type=='submit'){inputs[i].disabled=!enable;}}}
generic_dialog.prototype.active_resize=function(){if(this.last_offset_height!=this.content.offsetHeight){this.hide_objects();this.last_offset_height=this.content.offsetHeight;}}
generic_dialog.prototype.hide_objects=function(){var hide=[],objects=[];var ad_locs=['',0,1,2,4,5,9,3];for(var i=0;i<ad_locs.length;i++){var ad_div=ge('ad_'+ad_locs[i]);if(ad_div!=null){hide.push(ad_div);}}
var rect={x:elementX(this.content),y:elementY(this.content),w:this.content.offsetWidth,h:this.content.offsetHeight};if(this.should_hide_objects){var iframes=document.getElementsByTagName('iframe');for(var i=0;i<iframes.length;i++){if(iframes[i].className.indexOf('share_hide_on_dialog')!=-1){objects.push(iframes[i]);}}}
var swfs=getElementsByTagNames('embed,object');for(var i=0;i<swfs.length;i++){if((swfs[i].getAttribute('wmode')||'').toLowerCase()!='transparent'||this.should_hide_objects){objects.push(swfs[i]);}}
for(var i=0;i<objects.length;i++){var node=objects[i].offsetHeight?objects[i]:objects[i].parentNode;swf_rect={x:elementX(node),y:elementY(node),w:node.offsetWidth,h:node.offsetHeight};if(!is_descendent(objects[i],this.content)&&rect.y+rect.h>swf_rect.y&&swf_rect.y+swf_rect.h>rect.y&&rect.x+rect.w>swf_rect.x&&swf_rect.x+swf_rect.w>rect.w&&this.hidden_objects.indexOf(node)==-1){hide.push(node);}}
for(var i=0;i<hide.length;i++){this.hidden_objects.push(hide[i]);hide[i].style.visibility='hidden';}}
generic_dialog.prototype.build_dialog=function(){if(!this.obj){this.obj=document.createElement('div');}
this.obj.className='generic_dialog'+(this.className?' '+this.className:'');this.obj.style.display='none';onloadRegister(function(){document.body.appendChild(this.obj);}.bind(this));if(this.should_use_iframe||(this.modal&&ua.ie()==7)){this.build_iframe();}
if(!this.popup){this.popup=document.createElement('div');this.popup.className='generic_dialog_popup';}
this.popup.style.left=this.popup.style.top='';this.obj.appendChild(this.popup);if(this.modal){this.build_overlay();}}
generic_dialog.prototype.build_iframe=function(){if(!this.iframe&&!(this.iframe=ge('generic_dialog_iframe'))){this.iframe=document.createElement('iframe');this.iframe.id='generic_dialog_iframe';}
this.iframe.frameBorder='0';onloadRegister(function(){document.body.appendChild(this.iframe);}.bind(this));}
generic_dialog.prototype.build_overlay=function(){this.overlay=document.createElement('div');this.overlay.id='generic_dialog_overlay';if(document.body.clientHeight>document.documentElement.clientHeight){this.overlay.style.height=document.body.clientHeight+'px';}else{this.overlay.style.height=document.documentElement.clientHeight+'px';}
onloadRegister(function(){document.body.appendChild(this.overlay);}.bind(this));}
generic_dialog.prototype.reset_dialog=function(){if(!this.popup){return;}
onloadRegister(function(){this.reset_dialog_obj();this.reset_iframe();}.bind(this));}
generic_dialog.prototype.reset_iframe=function(){if(!this.should_use_iframe&&!(this.modal&&ua.ie()==7)){return;}
if(this.modal){this.iframe.style.left='0px';this.iframe.style.top='0px';this.iframe.style.width='100%';if((document.body.clientHeight>document.documentElement.clientHeight)&&(document.body.clientHeight<10000)){this.iframe.style.height=document.body.clientHeight+'px';}else if((document.body.clientHeight<document.documentElement.clientHeight)&&(document.documentElement.clientHeight<10000)){this.iframe.style.height=document.documentElement.clientHeight+'px';}else{this.iframe.style.height='10000px';}}else{this.iframe.style.left=elementX(this.frame)+'px';this.iframe.style.top=elementY(this.frame)+'px';this.iframe.style.width=this.frame.offsetWidth+'px';this.iframe.style.height=this.frame.offsetHeight+'px';}
this.iframe.style.display='';}
generic_dialog.prototype.reset_dialog_obj=function(){}
generic_dialog.get_dialog=function(obj){while(!obj.dialog&&obj.parentNode){obj=obj.parentNode;}
return obj.dialog?obj.dialog:false;}
function pop_dialog(className,callback_function,modal){this.top=125;this.parent.construct(this,className,modal);this.on_show_callback=callback_function;}
pop_dialog.extend(generic_dialog);pop_dialog.prototype.do_expand_animation=false;pop_dialog.prototype.show_ajax_dialog=function(src,post_vars,title){post_vars=post_vars||false;if(this.do_expand_animation){var load=null;this.show_loading_title(title);}else{var load=tx('sh:loading');}
return this.show_ajax_dialog_custom_loader(load,src,post_vars);}
pop_dialog.prototype.show_dialog=function(html){this.parent.show_dialog(html);if(this.do_expand_animation){function check_for_complete_images(content,callback,attempt){var complete_images=0;var images=content.getElementsByTagName('img');var safari2=ua.safari()<3;for(var i=0;i<images.length;i++){var imageobj=images[i];if(image_has_loaded(imageobj)){complete_images++;}}
if(complete_images!=images.length){if(attempt<10){attempt++;setTimeout(function(){check_for_complete_images(content,callback,attempt);},300);}else{callback();}}else{callback();}}
var divs=this.content.getElementsByTagName('div');for(var i=0;i<divs.length;i++){if(divs[i].className=='dialog_content'){expand_animation_div=divs[i];break;}}
check_for_complete_images(expand_animation_div,function(){this.content.getElementsByTagName('h2')[0].className='';animation(expand_animation_div).to('height','auto').from(0).from('opacity',0).to(1).ease(animation.ease.both).show().duration(200).ondone(function(){var inputs=this.obj.getElementsByTagName('input');for(var i=0;i<inputs.length;i++){if(inputs[i].type=='button'&&inputs[i].id=='dialog_button1'){setTimeout(function(){inputs[i].focus();}.bind(null,{inputs:inputs,i:i}),50);break;}}
this.do_expand_animation=false;}.bind(this,{expand_animation_div:expand_animation_div})).go();}.bind(this,{expand_animation_div:expand_animation_div}),0);}}
pop_dialog.prototype.build_dialog=function(){this.parent.build_dialog();this.obj.className+=' pop_dialog';this.popup.innerHTML='<table id="pop_dialog_table" class="pop_dialog_table">'+'<tr><td class="pop_topleft"></td><td class="pop_border"></td><td class="pop_topright"></td></tr>'+'<tr><td class="pop_border"></td><td class="pop_content" id="pop_content"></td><td class="pop_border"></td></tr>'+'<tr><td class="pop_bottomleft"></td><td class="pop_border"></td><td class="pop_bottomright"></td></tr>'+'</table>';this.frame=this.popup.getElementsByTagName('tbody')[0];this.content=this.popup.getElementsByTagName('td')[4];}
pop_dialog.prototype.reset_dialog_obj=function(){this.popup.style.top=(document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop)+this.top+'px';}
pop_dialog.prototype.set_top=function(top){this.top=top;}
pop_dialog.prototype.show_prompt=function(title,content){if(!this.do_expand_animation){return this.show_dialog('<h2><span>'+title+'</span></h2><div class="dialog_content">'+content+'</div>');}
return this.show_dialog('<h2 class="dialog_loading"><span>'+title+'</span></h2><div class="dialog_content" style="display:none;">'+content+'</div>');}
pop_dialog.prototype.show_loading_title=function(title){this.do_expand_animation=false;this.show_dialog('<h2 class="dialog_loading"><span>'+title+'</span></h2>');this.do_expand_animation=true;}
function contextual_dialog(className){this.parent.construct(this,className);}
contextual_dialog.extend(generic_dialog);contextual_dialog.prototype.set_context=function(obj){this.context=obj;return this;}
contextual_dialog.prototype.build_dialog=function(){this.parent.build_dialog();this.obj.className+=' contextual_dialog';this.popup.innerHTML='<div class="contextual_arrow"><span>^_^keke1</span></div><div class="contextual_dialog_content"></div>';this.arrow=this.popup.getElementsByTagName('div')[0];this.content=this.frame=this.popup.getElementsByTagName('div')[1];}
contextual_dialog.prototype.reset_dialog_obj=function(){var x=elementX(this.context);var center=(document.body.offsetWidth-this.popup.offsetWidth)/2;if(x<document.body.offsetWidth/2){this.arrow.className='contextual_arrow_rev';var left=Math.min(center,x+this.context.offsetWidth-this.arrow_padding_x);var arrow=x-left+this.context.offsetWidth+this.arrow_padding_x;}else{this.arrow.className='contextual_arrow';var left=Math.max(center,x-this.popup.offsetWidth+this.arrow_padding_x);var arrow=x-left-this.arrow_padding_x-this.arrow_width;}
if(isNaN(left)){left=0;}
if(isNaN(arrow)){arrow=0;}
this.popup.style.top=(elementY(this.context)+this.context.offsetHeight-this.arrow.offsetHeight+this.arrow_padding_y)+'px';this.popup.style.left=left+'px';this.arrow.style.backgroundPosition=arrow+'px';}
contextual_dialog.prototype._remove_resize_events=function(){if(this._scroll_events){for(var i=0;i<this._scroll_events.length;i++){removeEventBase(this._scroll_events[i].obj,this._scroll_events[i].event,this._scroll_events[i].func);}}
this._scroll_events=[];}
contextual_dialog.prototype.show=function(){this._remove_resize_events();var obj=this.context;while(obj){if(obj.id!='content'&&(obj.scrollHeight&&obj.offsetHeight&&obj.scrollHeight!=obj.offsetHeight)||(obj.scrollWidth&&obj.offsetWidth&&obj.scrollWidth!=obj.offsetWidth)){var evt={obj:obj,event:'scroll',func:this.reset_dialog_obj.bind(this)};addEventBase(evt.obj,evt.event,evt.func);}
obj=obj.parentNode;}
var evt={obj:window,event:'resize',func:this.reset_dialog_obj.bind(this)};addEventBase(evt.obj,evt.event,evt.func);this.parent.show();}
contextual_dialog.prototype.hide=function(temp){this._remove_resize_events();this.parent.hide(temp);}
contextual_dialog.prototype.arrow_padding_x=5;contextual_dialog.prototype.arrow_padding_y=10;contextual_dialog.prototype.arrow_width=13;function ErrorDialog(){this.parent.construct(this,'errorDialog',null,true);return this;};ErrorDialog.extend(pop_dialog);copy_properties(ErrorDialog.prototype,{showError:function(title,message){return this.show_message(title,message);}});copy_properties(ErrorDialog,{showAsyncError:function(response){try{return(new ErrorDialog()).showError(response.getErrorSummary(),response.getErrorDescription());}catch(ex){aiert(response);}}});
if(typeof(ScriptInventory)!='undefined'){ScriptInventory.addScript&&ScriptInventory.addScript("\/var\/releases\/thefacebook-r82587-02122008\/www\/html\/js\/dialogpro.js","82567",1203052588);}

function ft(metadata,hash,type,undo){undo=undo?1:0;var asyncRequestPost=new AsyncRequest().setURI('/ajax/f.php').setData({'meta':metadata,'h':hash,'type':type,'undo':undo}).setHandler(function(response){}).setTransportErrorHandler(function(response){}).setErrorHandler(function(response){}).send();return true;}
function hide_poke(poke){AsyncRequest.pingURI('ajax/poke.php',{'p':poke},false);return false;}
function clear_demotion_classes(story_div){remove_css_class_name(story_div,'demote_on');remove_css_class_name(story_div,'promote_on');remove_css_class_name(story_div,'demote_off');remove_css_class_name(story_div,'promote_off');remove_css_class_name(story_div,'demote_rollover');remove_css_class_name(story_div,'promote_rollover');remove_css_class_name(story_div,'demote_toggle');remove_css_class_name(story_div,'promote_toggle');}
function change_story_state(story_id,state){var story_div=ge('div_story_'+story_id);if(story_div){if(state=='rollover'){remove_css_class_name(story_div,'story_feedback_hidden');}else if(state=='rollout'){add_css_class_name(story_div,'story_feedback_hidden');}}}
function change_feedback_state(story_id,type,new_state){var story_div=ge('div_story_'+story_id);var other_type=type=='demote'?'promote':'demote';var type_was_on=false;if(has_css_class_name(story_div,type+'_on')){type_was_on=true;}
var other_type_was_on=false;if(has_css_class_name(story_div,other_type+'_on')||has_css_class_name(story_div,other_type+'_toggle')){other_type_was_on=true;}
clear_demotion_classes(story_div);if(new_state=='rollover'){if(type_was_on){add_css_class_name(story_div,type+'_on');}else{add_css_class_name(story_div,type+'_rollover');}
if(other_type_was_on){add_css_class_name(story_div,other_type+'_toggle');}else{add_css_class_name(story_div,other_type+'_off');}}else if(new_state=='on'){add_css_class_name(story_div,type+'_on');add_css_class_name(story_div,other_type+'_off');}else if(new_state=='rollout'){if(type_was_on){add_css_class_name(story_div,type+'_on');}else{add_css_class_name(story_div,type+'_off');}
if(other_type_was_on){add_css_class_name(story_div,other_type+'_on');remove_css_class_name(story_div,other_type+'_toggle');}else{add_css_class_name(story_div,other_type+'_off');}}else if(new_state=='off'){add_css_class_name(story_div,type+'_off');add_css_class_name(story_div,other_type+'_off');}}
function feedback_click(story_id,type,metadata,hash,hide_this_message){var hide_message=hide_this_message||hide_all_feedback_messages();var story_div=ge('div_story_'+story_id);if(story_div){var body_div=ge('div_body_'+story_id);var title_div=ge('div_title_'+story_id);var participants_div=ge('nfp'+story_id);var promote_button=ge('button_promote_'+story_id);var demote_button=ge('button_demote_'+story_id);var other_type=type=='demote'?'promote':'demote';var new_state;if(has_css_class_name(story_div,type+'_on')){new_state='off';}else{new_state='on';}
var other_type_toggle=false;if(has_css_class_name(story_div,other_type+'_toggle')){other_type_toggle=true;}
demote_message=tx('hm01');promote_message=tx('hm02');demote_undo_message=tx('hm03');promote_undo_message=tx('hm03');var set_classes=bind(null,change_feedback_state,story_id,type,new_state);if(new_state=='on'){if(type=='demote'){if(demote_button){demote_button.title=demote_undo_message;promote_button.title=promote_message;}}else{if(promote_button){promote_button.title=promote_undo_message;demote_button.title=demote_message;}}
if(body_div){if(type=='demote'){slide_collapse_element(body_div,participants_div,set_classes);}else{slide_expand_element(body_div,participants_div,set_classes);}}else{change_feedback_state(story_id,type,new_state);}
if(title_div&&type=='promote'){temporarily_highlight_title(title_div);}
if(!hide_message){show_feedback_message(story_id,type,metadata,hash,hide_this_message);}
ft(metadata,hash,type=='demote'?'dem':'prmt',other_type_toggle);}else{demote_button.title=demote_message;promote_button.title=promote_message;if(body_div){slide_expand_element(body_div,participants_div,set_classes);}else{change_feedback_state(story_id,type,new_state);}
ft(metadata,hash,type=='demote'?'undem':'unprmt');}}}
var hide_feedback_messages=0;function turn_off_feedback_messages(){hide_feedback_messages=1;}
function hide_all_feedback_messages(){return hide_feedback_messages;}
function show_feedback_message(story_id,type,metadata,hash,hide_this_message){var message_title;var message_text;if(type=='demote'){message_text=tx('hm04',{'News Feed':tx('fb:newsfeed'),'icon':tx('hm10')});message_title=tx('hm01');}else{message_text=tx('hm04',{'News Feed':tx('fb:newsfeed'),'icon':tx('hm07')});message_title=tx('hm02');}
var button=ge('button_'+type+'_'+story_id);button.dialog=(new contextual_dialog(null,true)).set_context(button)
var okay=function(){generic_dialog.get_dialog(this).fade_out(100);};var cancel=function(){generic_dialog.get_dialog(this).fade_out(100);feedback_click(story_id,type,metadata,hash,1);};var asyncRequestPost=new AsyncRequest().setURI('/ajax/feedback_message_status.php').setData({'hide_demote_message':1,'hide_promote_message':1}).setHandler(function(response){}).setErrorHandler(function(response){}).send();turn_off_feedback_messages();var message_dialog_handle=new contextual_dialog();message_dialog_handle.set_context(button);message_dialog_handle.show_choice(message_title,message_text,tx('sh:ok-button'),okay,tx('sh:cancel-button'),cancel);}
function slide_collapse_element(body_div,participants_div,update_css_classes){var do_animation=shown(body_div)&&(!participants_div||shown(participants_div));if(do_animation){animation(body_div).to('height',0).by('height',10).duration(500).ondone(update_css_classes).hide().go();}else{update_css_classes();}}
function slide_expand_element(body_div,participants_div,update_css_classes){var do_animation=!shown(body_div)&&(!participants_div||shown(participants_div));if(do_animation){animation(body_div).to('height','auto').by('height',10).duration(500).show().go();}
update_css_classes();}
function temporarily_highlight_title(title_div){var time1=500;var time2=750;var time3=1500;var news_feed_color='#FFFFFF';var highlight_color='#E6FFDE';animation(title_div).to('background',highlight_color).blind().duration(time1).checkpoint().to('background',highlight_color).blind().duration(time2).checkpoint().to('background',news_feed_color).duration(time3).go();}
function hide_poke_obj(obj,rem_class,parent_class){if(obj&&parent_class){pobj=obj;while(pobj.className!=parent_class&&pobj.parentNode){pobj=pobj.parentNode;}}
if(obj&&rem_class){while(obj.className!=rem_class&&obj.parentNode){obj=obj.parentNode;}
if(obj){if(obj.parentNode.getElementsByTagName('div').length==3){remove_node(pobj);}
else{remove_node(obj);}}}
return false;}
function clearFriendFinder(){AsyncRequest.pingURI('ajax/hide_prefs_ajax.php',{'e':'home_friend_finder','h':1},false);hide('findfriends');return false;}
function showNewStuff(){AsyncRequest.pingURI('ajax/hide_prefs_ajax.php',{'e':'home_monetization','h':0},false);hide('new_stuff_non_content');show('new_stuff_content');return false;}
function hideNewStuff(){AsyncRequest.pingURI('ajax/hide_prefs_ajax.php',{'e':'home_monetization','h':1},false);hide('new_stuff_content');show('new_stuff_non_content');return false;}
function clearIntroMessage(val){hide('overlay','announcement');AsyncRequest.pingURI('ajax/hide_intro_ajax.php',{'intro':val},false);}
function calendar_create_item(){var create_success=function(response){$('calendar_instant_create').reset();$('q_place').value='';set_inner_html($('calendar_item_box'),response.getPayload());hide('calendar_indicator');};var create_error=function(response){ErrorDialog.showAsyncError(response);hide('calendar_indicator');};var name_box=$('q_place');var hilight_duration=2000;if(name_box.value==name_box.getAttribute('placeholder')||trim(name_box.value)==''){animation(name_box).from('backgroundColor','#fff7cd').to('backgroundColor','#fff').duration(hilight_duration).go();return;}
show('calendar_indicator');new AsyncRequest().setURI('/ajax/calendar/create.php').setData({'source':'home','name':$('q_place').value,'fuzzy_string':$('q_fuzzy').value}).setHandler(create_success).setErrorHandler(create_error).send();return false;}
function calender_focus_timeblock(){var timeblock=$('cal_timeblock')
if(shown(timeblock)){return;}
timeblock.style.height='0px';animation(timeblock).from('height',0).to('height',25).duration(200).show().blind().go();document.body.onclick=chain(calendar_body_click,document.body.onclick);}
function calendar_body_click(event){target=event_get_target(event);if(shown($('cal_timeblock'))&&trim($('q_place').value)==''&&!is_descendent(target,'calendar_instant_create')){animation($('cal_timeblock')).from('height',25).to('height',0).duration(200).hide().blind().go();}
return true;}
function calendar_fuzzy_time_change(){if(this.value=='more'){goURI('/calendar/');}}
if(typeof(ScriptInventory)!='undefined'){ScriptInventory.addScript&&ScriptInventory.addScript("\/var\/releases\/thefacebook-r82587-02122008\/www\/html\/js\/home.js","80292",1203052590);}

function poll_make_ajax_request(poll_id,answer_id){var questions_name="questions_"+poll_id;hide(ge(questions_name));var status_name="status_"+poll_id;var status_obj=ge(status_name);show(status_obj);status_obj.innerHTML='<div class="waiting"><div class="spin"><p>'+tx('pls01')+'</p></div></div>';var ajaxObj=new Ajax(poll_ajax_vote_success_handler.bind(status_obj),poll_ajax_vote_failure_handler.bind(status_obj));var msg="poll_id="+poll_id+"&vote="+answer_id;ajaxObj.post("ajax/polls/poll_vote.php?",msg);}
function poll_ajax_vote_success_handler(ajaxObj,response_text){if(response_text=='Error'){this.innerHTML=poll_ajax_error_message();draw_poll_vote_error();}else{var poll_data=eval("("+response_text+")");var poll_id=poll_data.poll_id;var see_more_name="Poll_"+poll_id+"_see_more_div";if(ge(see_more_name)){show(ge(see_more_name));}
draw_poll_chart_js(poll_data,1);}}
function poll_ajax_error_message(){return'<div class="waiting"><p>'+tx('pls02')+'</p></div>';}
function poll_ajax_vote_failure_handler(response_text){this.innerHTML=poll_ajax_error_message();}
function get_checked_value(radio){var len=radio.length;for(var i=0;i<len;i++){if(radio[i].checked){return radio[i].value;}}
return null;}
function submit_poll_form(poll_id,vote_id){if(poll_id&&vote_id){return poll_make_ajax_request(poll_id,vote_id);}
return false;}
function draw_poll_chart_js(poll_data,animate){var poll_id=poll_data.poll_id;var status_name="status_"+poll_id;hide(ge(status_name));var answers_name="answers_"+poll_id;var answers_name_elt=ge(answers_name);show(answers_name_elt);var max_width=180;var max_pct=poll_data.max_pct;var width_per_pct;if(max_pct>0){width_per_pct=max_width/max_pct;}else{width_per_pct=0;}
var user_vote=poll_data.user_vote;var bars=new Array();start_offset=0;for(var key in poll_data.answers){var pct_votes=poll_data.answers[key].pct_votes;var width=Math.round(pct_votes*width_per_pct);var modifier=1.8;var bar_name="a"+key;var bar_obj=ge(bar_name);if(user_vote==key){bar_obj.className="scaled myvote";}else{bar_obj.className="scaled";}
if(pct_votes>0){poll_slide_anim(ge(bar_name),width,modifier,start_offset);start_offset+=100;}
var pct_name="p"+key;$(pct_name).innerHTML=poll_data.answers[key].pct_votes+"%";}}
function poll_slide_anim(elem,barwidth,modifier,start_offset){elem.style.width='0px';show(elem);barwidth=1*barwidth;for(var i=1;i<=100;i+=1){mod=modifier/_poll_slide_anim_velocity(i);(function(){var pos=i;setTimeout(function(){elem.style.width=((pos/100)*barwidth)+"px";},pos*mod+start_offset);})();}
start_offset=start_offset+100*mod;for(var i=1;i<=100;i+=1){mod=modifier;(function(){var pos=i;setTimeout(function(){elem.style.width=(barwidth+_poll_bounce_factor(pos)*0.1*barwidth)+"px";},pos*mod+start_offset);})();}}
function _poll_slide_anim_velocity(i){return 1;}
function _poll_bounce_factor(i){return Math.sin(Math.PI*2*i/100);}
function poll_update_results_chart(poll_id,chart_id){var ajaxObj=new Ajax(poll_update_results_success_handler,poll_update_results_failure_handler);var msg="poll_id="+poll_id+"&animate="+"0";ajaxObj.post("ajax/polls/poll_results.php?",msg);}
function poll_update_results_success_handler(ajaxObj,response_text){var chart_obj=getChartFromId("overalldiv");var poll_data=eval("("+response_text+")");if(poll_data.completed){window.location.reload();}
if(window.total_votes<poll_data.total_votes){window.total_votes=poll_data.total_votes;$("cost").innerHTML=poll_data.cost;$("responses").innerHTML=poll_data.total_votes;poll_render_recent_responses(poll_data.recent_responses);chart_obj.setDataXML(poll_data.results_xml);}}
function poll_render_recent_responses(recent_responses){var len=recent_responses.length;if(len>0){hide(ge("streamrows_noresponses"));}
for(var i=0;i<len;i++){var vote_name=recent_responses[i].vote_name;var vote_time_str=recent_responses[i].time_absolute_str;$("answernameblock_"+i).innerHTML=vote_name;$("timeblock_"+i).innerHTML=vote_time_str;show(ge("streamrow_"+i));}
return;}
function poll_update_results_failure_handler(){}
if(typeof(ScriptInventory)!='undefined'){ScriptInventory.addScript&&ScriptInventory.addScript("\/var\/releases\/thefacebook-r82587-02122008\/www\/html\/js\/polls\/polls.js","72200",1203052594);}

var Registry=[];var _registryIndex=0;var _lastKeyCode=-1;var _names;var _ids;var _images;var _networks;var TypeAhead=function(rootEl,formEl,textBoxEl,idEl,defaultOptions,instructions,useFilter,onSuccessHandler,onInputChangeHandler,onUpHandler,onDownHandler,onListElMouseDownHandler,placeholderText,showNoMatches,override_resize)
{this.resize=!override_resize;this.getMatchSingleTerm=function(term,document)
{var str="";var len=term.length;if(!document)return'';var curDocument=document;var index=0;index=curDocument.toUpperCase().indexOf(term.toUpperCase());if(index==-1)
{return str;}
var match=curDocument.substring(0,len);str+='<span class="suggest">'+match+'</span>';var moreMatches=0;curDocument=curDocument.substring(index+len);while((index=curDocument.toUpperCase().indexOf(term.toUpperCase()))!=-1)
{var pre=curDocument.substring(0,index);if(pre)
{str+=pre;}
var match=curDocument.substring(index,index+len);if(match)
{str+='<span class="suggest">'+match+'</span>';}
curDocument=curDocument.substring(index+len);moreMatches=1;}
if(moreMatches)
{str+=curDocument;}}
this.getMatchMultipleTerms=function(terms,document)
{if(!document)return'';var termsArr=terms.split(/\s+/);var docArr=document.split(/\s+/);var str="";for(var docIdx=0;docIdx<docArr.length;docIdx++)
{var matchFound=0;var doc=docArr[docIdx];for(var termIdx=0;termIdx<termsArr.length;termIdx++)
{var term=termsArr[termIdx];if(doc.toUpperCase().indexOf(term.toUpperCase())==0)
{matchFound=1;break;}}
if(docIdx>0)
{str+=' ';}
if(matchFound)
{var len=term.length;var pre=doc.substring(0,len);var suf=doc.substring(len);str+='<span class="suggest">'+pre+'</span>'+suf;}
else
{str+=doc;}}
return str;}
this.onListChange=function()
{this.selectedIndex=-1;if(!this.pEvent)
{this.idEl.value=0;}
var dropDownEl=this.dropDownEl;if(dropDownEl&&dropDownEl.childNodes)
{this.dropDownCount=dropDownEl.childNodes.length;}
this.lastTypedValue=this.currentInputValue;if(this.currentInputValue==""||this.dropDownCount==0||this.pEvent)
{this.dropDownEl.hide();}
else
{this.dropDownEl.show();this.defaultDropDownEl.show();}
var matchFound=false;if(this.currentInputValue.length>0)
{for(var i=0;i<this.dropDownCount;i++)
{if(!matchFound)
{matchFound=true;this.selectedIndex=i;this.selectedEl=this.dropDownEl.childNodes[i];}
var str=this.getMatchSingleTerm(this.currentInputValue,this.dropDownEl.childNodes[i]._value);if(!str)
{str=this.getMatchMultipleTerms(this.currentInputValue,this.dropDownEl.childNodes[i]._value);}
this.dropDownEl.childNodes[i].setName(str);str=this.getMatchSingleTerm(this.currentInputValue,this.dropDownEl.childNodes[i]._loc);if(!str)
{str=this.getMatchMultipleTerms(this.currentInputValue,this.dropDownEl.childNodes[i]._loc);}
this.dropDownEl.childNodes[i].setLoc(str);}
if(!matchFound)
{for(var i=0;i<this.defaultDropDownCount;i++)
{if(this.defaultDropDownEl.childNodes[i]._value.toUpperCase().indexOf(this.currentInputValue.toUpperCase())==0)
{matchFound=true;this.selectedIndex=i;this.selectedEl=this.defaultDropDownEl.childNodes[i];break;}}}}
var value=this.currentInputValue;var keyIgnore=false;switch(this.lastKeyCode)
{case 8:case 33:case 34:case 35:case 35:case 36:case 37:case 39:case 45:case 46:keyIgnore=true;break;case 27:keyIgnore=true;break;default:break;}
if(!keyIgnore&&matchFound&&!this.pEvent)
{this.selectedEl.select();}
else
{}
this._noMatches=false;if(this.dropDownCount==0)
{if(this.textBoxEl.value!=""&&this.textBoxEl.value!=this.textBoxEl.ph)
{this._noMatches=true;if(this.showNoMatches)
{this.defaultTextEl.setText(tx('typeahead_ns:no-matches'));}}
else
{this.defaultTextEl.setDefault();}
this.defaultDropDownEl.show();if(this.showNoMatches)
{this.defaultTextEl.show();}}
else
{this.defaultTextEl.hide();}
if(this.dropDownCount>=1&&this.selectedEl&&this.getUnselectedLength()==this.selectedEl._value.length)
{this.idEl.value=this.selectedEl._id;if(this.dropDownCount==1){this.onTypeAheadSuccess();}else{this.textBoxEl.style.background="#e1e9f6";}}
else
{this.onTypeAheadFailure();}
if(this.lastKeyCode==27)
{this.textBoxEl.blur();}
this.setFrame();this.pEvent=0;}
this.setFrame=function()
{if(this.goodFrame)
{this.goodFrame.style.height=(this.containerEl.offsetHeight)+"px";this.goodFrame.style.width=(this.textBoxEl.offsetWidth)+"px";}}
this.onTypeAheadSuccess=function()
{this.dropDownEl.hide();this.textBoxEl.style.background="#e1e9f6";if(this.onSuccess&&!this.pEvent)
{this.onSuccess(this);}}
this.onTypeAheadFailure=function()
{this.textBoxEl.style.background="#FFFFFF";}
this.refocus=function()
{this.reFocused=true;this.textBoxEl.blur();setTimeout("Registry["+this.registryIndex+"].focus();",10);}
this.focus=function()
{this.textBoxEl.focus();}
this.handleKeyUp=function(event)
{if(!event&&window.event)
{event=window.event;}
if(event.keyCode==40||event.keyCode==38)
{if(this.isSafari&&(this.fireCount++%2==1))
{}}
var value=this.textBoxEl.value;var sLen=this.getSelectedLength();var uLen=this.getUnselectedLength();if(sLen>0&&uLen!=-1)
{value=value.substring(0,uLen);}
this.currentInputValue=value;var keyIgnore=false;switch(this.lastKeyCode)
{case 13:case 9:keyIgnore=true;break;case 38:keyIgnore=true;if(this.onUp)
{this.onUp(this);}
break;case 40:keyIgnore=true;if(this.onDown)
{this.onDown(this);}
break;}
this.pEvent=0;if(event.pEvent)
{this.pEvent=event.pEvent;}
if(!keyIgnore&&this.onInputChange)
{this.onInputChange(this);}
if(this.lastKeyCode==13)
{this.lastKeyCode=-1;_lastKeyCode=-1;}
this.lastInputValue=this.currentInputValue;}
this.getSelectedLength=function()
{var el=this.textBoxEl;var len=-1;if(el.createTextRange)
{var selection=document.selection.createRange().duplicate();len=selection.text.length;}
else if(el.setSelectionRange)
{len=el.selectionEnd-el.selectionStart;}
return len;}
this.getUnselectedLength=function()
{var el=this.textBoxEl;var len=0;if(el.createTextRange)
{var selection=document.selection.createRange().duplicate();selection.moveEnd("textedit",1);len=el.value.length-selection.text.length;}
else if(el.setSelectionRange)
{len=el.selectionStart;}
else
{len=-1;}
return len;}
this.handleKeyDown=function(event)
{if(!event&&window.event)
{event=window.event;}
if(event)
{this.lastKeyCode=event.keyCode;_lastKeyCode=event.keyCode;}
switch(this.lastKeyCode)
{case 38:break;case 40:break;case 27:this.textBoxEl.value="";break;case 13:case 9:if(this.selectedIndex!=-1)
{this.textBoxEl.value=this.selectedEl._value;this.defaultTextEl.hide();this.onTypeAheadSuccess();}
this.dropDownEl.hide();this.defaultDropDownEl.hide();this.setFrame();break;case 3:this.dropDownEl.hide();this.defaultDropDownEl.hide();this.setFrame();break;}
switch(this.lastKeyCode)
{case 38:this.selectPrevDropDown();if(this.onUp)
{this.onUp(this);}
break;case 40:this.selectNextDropDown();if(this.onDown)
{this.onDown(this);}
break;}
if(event&&(event.keyCode==13||event.keyCode==38||event.keyCode==40))
{event.cancelBubble=true;event.returnValue=false;}}
this.selectPrevDropDown=function()
{this.selectDropDown(this.selectedIndex-1);}
this.selectNextDropDown=function()
{this.selectDropDown(this.selectedIndex+1);}
this.selectDropDown=function(index)
{this.textBoxEl.value=this.lastTypedValue;if((this.dropDownCount+this.defaultDropDownCount)<=0)
{return;}
if(this.dropDownCount>0)
{this.dropDownEl.show();this.defaultDropDownEl.show();}
else
{this.dropDownEl.hide();}
this.setFrame();var usingDefaultDropDown=false;if(index>=this.dropDownCount&&this.defaultDropDownCount>0)
{usingDefaultDropDown=true;}
if(index>=this.dropDownCount+this.defaultDropDownCount)
{index=this.dropDownCount+this.defaultDropDownCount-1;}
if(this.selectedIndex!=-1&&index!=this.selectedIndex)
{this.selectedIndex=-1;this.selectedEl.unselect();}
if(index<0)
{this.selectedIndex=-1;return;}
this.selectedIndex=index;if(usingDefaultDropDown)
{this.selectedEl=this.defaultDropDownEl.childNodes[index-this.dropDownCount];}
else
{this.selectedEl=this.dropDownEl.childNodes[index];}
this.selectedEl.select();this.textBoxEl.value=this.selectedEl._value;}
this.displaySuggestList=function(names,ids,locs)
{if(names.length!=ids.length)
{return false;}
var dropDownEl=this.dropDownEl;while(dropDownEl.childNodes.length>0)
{dropDownEl.removeChild(dropDownEl.childNodes[0]);}
if(this.selectedEl)
{this.selectedEl.unselect();}
var match_i=0;var termsArr;var term;var matchFound;var name;var match_id;var filter=this.currentInputValue.toUpperCase();filter=filter.replace(/^\s+|\s+$/,'');for(var i=0;i<names.length&&match_i<10;i++)
{name=names[i];if(this.useFilter)
{if(!filter)
{continue;}
match_id=ids[i];if(window._ignoreList&&_ignoreList[match_id]&&_ignoreList[match_id]==1)
{continue;}
matchFound=0;if(name.toUpperCase().indexOf(filter)==0)
{matchFound=1;}
if(!matchFound)
{termsArr=name.split(/\s+/);for(var termIdx=0;termIdx<termsArr.length;termIdx++)
{term=termsArr[termIdx];if(term.toUpperCase().indexOf(filter)==0)
{matchFound=1;break;}}}
if(!matchFound)
{continue;}
match_i++;}
var listEl=this.createListElement(name,ids[i],locs[i],i);dropDownEl.appendChild(listEl);}
for(var i=0;i<this.defaultDropDownEl.childNodes.length;i++)
{var listEl=this.defaultDropDownEl.childNodes[i];listEl._index=i+this.dropDownEl.childNodes.length;}
return true;}
this.createListElement=function(name,id,loc,index)
{var listEl=document.createElement("div");listEl._value=name;listEl._loc=loc;listEl._id=id;listEl._index=index;listEl.setName=function(name)
{this.nameEl.innerHTML=name;}
listEl.setLoc=function(loc)
{if(this.locEl)
this.locEl.innerHTML=loc;}
listEl.select=function()
{this.className="list_element_container_selected";this.nameEl.className="list_element_name_selected";if(this.locEl)
{this.locEl.className="list_element_loc_selected";}
if(oThis.idEl)
{oThis.idEl.value=this._id;}}
listEl.unselect=function()
{this.className="list_element_container";this.nameEl.className="list_element_name";if(this.locEl)
{this.locEl.className="list_element_loc";}
if(oThis.idEl)
{}
oThis.selectedIndex=-1;}
listEl.onmousedown=function()
{oThis.textBoxEl.value=this._value;if(oThis.idEl)
{oThis.idEl.value=this._id;}
oThis.onTypeAheadSuccess();if(oThis.formEl)
{}
if(oThis.onListElMouseDown)
{oThis.onListElMouseDown(oThis,this);}
oThis.setFrame();}
listEl.onmouseover=function()
{if(oThis.selectedEl)
{oThis.selectedEl.unselect();}
oThis.selectedEl=this;oThis.selectedIndex=this._index;this.select();}
listEl.onmouseout=function()
{this.unselect();}
listEl.style.zIndex="101";var dividerEl;if(index==-1)
{dividerEl=this.createDivider();listEl.appendChild(dividerEl);}
var nameEl=document.createElement("div");nameEl.className="list_element_name";nameEl.innerHTML=name;listEl.appendChild(nameEl);listEl.nameEl=nameEl;listEl.locEl=locEl;if(loc)
{var locEl=document.createElement("div");locEl.className="list_element_loc";locEl.innerHTML=loc;listEl.appendChild(locEl);listEl.locEl=locEl;}
dividerEl=this.createDivider();listEl.appendChild(dividerEl);listEl.unselect();return listEl;}
this.createDivider=function()
{var dividerEl=document.createElement("div");dividerEl.className="list_element_divider";return dividerEl;}
this.createDropDownContainer=function()
{var containerEl=document.createElement("div");containerEl.className="dropdown-container";this.containerEl=containerEl;this.positionDropDown();}
this.createDropDown=function()
{var dropDownEl=document.createElement("div");dropDownEl.className="dropdown";dropDownEl.style.display="none";dropDownEl.style.zIndex="101";dropDownEl.hide=function()
{this.style.display="none";}
dropDownEl.show=function()
{this.style.display="";oThis.positionDropDown();}
this.containerEl.appendChild(dropDownEl);this.dropDownEl=dropDownEl;}
this.createDefaultDropDown=function()
{var defaultDropDownHeaderEl=document.createElement("div");defaultDropDownHeaderEl.className="typeahead_header";defaultDropDownHeaderEl.style.display="none";defaultDropDownHeaderEl.innerHTML=tx('typeahead_ns:search-elsewhere');this.containerEl.appendChild(defaultDropDownHeaderEl);this.defaultDropDownHeaderEl=defaultDropDownHeaderEl;var defaultDropDownEl=document.createElement("div");defaultDropDownEl.style.display="none";defaultDropDownEl.show=function()
{if(oThis.defaultDropDownCount>0)
{this.style.display="";oThis.defaultDropDownHeaderEl.style.display="";}
else
{oThis.dropDownEl.style.borderBottom="1px solid #777";}}
defaultDropDownEl.hide=function()
{this.style.display="none";oThis.defaultDropDownHeaderEl.style.display="none";}
var index=0;for(var option in this.defaultOptions)
{var listEl=this.createListElement(option,this.defaultOptions[option],"",index);index++;defaultDropDownEl.appendChild(listEl);}
defaultDropDownEl.className="default-dropdown";defaultDropDownEl.hide();this.containerEl.appendChild(defaultDropDownEl);this.defaultDropDownEl=defaultDropDownEl;this.defaultDropDownCount=defaultDropDownEl.childNodes.length;}
this.createDefaultText=function()
{var defaultTextEl=document.createElement("div");defaultTextEl.className="default-text";defaultTextEl.style.display="none";defaultTextEl.hide=function()
{this.style.display="none";}
defaultTextEl.show=function()
{this.style.display="";if(oThis.defaultDropDownCount==0)
{this.style.borderBottom="1px solid #777";}}
defaultTextEl.setDefault=function()
{this.innerHTML=instructions;}
defaultTextEl.setText=function(text)
{this.innerHTML=text;}
defaultTextEl.setDefault();if(!this.defaultOptions)
{defaultTextEl.style.borderBottom="0px solid";}
this.containerEl.appendChild(defaultTextEl);this.defaultTextEl=defaultTextEl;}
this.positionDropDown=function()
{var containerEl=this.containerEl;if(containerEl)
{if(this.customOffsetElement){containerEl.style.left=elementX(this.textBoxEl)-elementX(this.customOffsetElement)+"px";containerEl.style.top=elementY(this.textBoxEl)-elementY(this.customOffsetElement)+this.textBoxEl.offsetHeight+"px";}
else if(this.resize){containerEl.style.left=elementX(this.textBoxEl)+"px";containerEl.style.top=elementY(this.textBoxEl)+this.textBoxEl.offsetHeight+"px";}
if(!this.isIE)
{containerEl.style.width=this.textBoxEl.offsetWidth+"px";}
else
{containerEl.style.width=this.textBoxEl.offsetWidth+"px";}}}
this.getText=function()
{return this.textBoxEl.value;}
this.getSelectedText=function()
{return this.selectedEl?this.selectedEl._value:'';}
this.noMatches=function()
{return this._noMatches;}
this.getID=function()
{return this.selectedEl?this.selectedEl._id:0;}
this.setText=function(q,reset)
{this.textBoxEl.setText(q,reset);}
this.init=function()
{this._noMatches=false;this.registryIndex=_registryIndex;Registry[_registryIndex++]=this;this.lastKeyCode=-1;this.currentInputValue=textBoxEl.value;this.lastTypedValue="";this.lastInputValue="";this.dropDownCount=0;this.defaultDropDownCount=0;this.customOffsetElement=null;this.selectedIndex=-1;this.selectedEl=null;this.reFocused=false;textBoxEl.setAttribute("placeholder",placeholderText);textBoxEl.style.color='#777';textBoxEl.ph=placeholderText;textBoxEl.oThis=this;textBoxEl.onblur=function()
{if(!oThis.reFocused)
{oThis.dropDownEl.hide();oThis.defaultTextEl.hide();oThis.defaultDropDownEl.hide();}
if(oThis.selectedIndex==-1)
{oThis.idEl.value=0;}
oThis.reFocused=false;var ph=this.getAttribute("placeholder");if(this.isFocused&&ph&&(this.value==""||this.value==ph))
{this.isFocused=0;this.value=ph;this.style.color='#777';}
oThis.setFrame();}
textBoxEl.onfocus=function()
{var oThis=this.oThis;if(!this.isFocused)
{this.isFocused=1;if(oThis.selectedIndex==-1&&this.value==this.getAttribute("placeholder"))
{this.value='';}}
if(oThis.dropDownCount>0||oThis.defaultTextEl.innerHTML!='')
{if(oThis.dropDownCount==0){oThis.defaultTextEl.show();}
if(this.createTextRange)
{var t=this.createTextRange();t.moveStart("character",0);t.select();}
else if(this.setSelectionRange)
{this.setSelectionRange(0,this.value.length);}
oThis.dropDownEl.show();oThis.defaultDropDownEl.show();oThis.positionDropDown();oThis.setFrame();}
this.style.color='#000';}
textBoxEl.onkeyup=function(event)
{oThis.handleKeyUp(event);}
textBoxEl.setText=function(q,reset)
{var ph=this.getAttribute("placeholder");this.isFocused=0;if(q)
{this.style.color='#000';this.value=q;var ev=new Object();ev.keyCode=0;ev.pEvent=1;oThis.handleKeyUp(ev);}
else if(ph&&ph!="")
{if(reset)
{this.value="";this.style.color='#000';}
else
{this.value=ph;this.style.color='#777';}
this.isFocused=0;oThis.textBoxEl.style.background="#FFFFFF";}
else
{this.value="";oThis.textBoxEl.style.background="#FFFFFF";}}
if(!formEl){formEl=textBoxEl.form;}
if(formEl)
{formEl.onsubmit=function()
{oThis.setFrame();if(_lastKeyCode==13)
{_lastKeyCode=-1;return false;}
if(oThis.selectedIndex!=-1&&oThis.selectedEl)
{oThis.idEl.value=oThis.selectedEl._id;}
return true;}}
this.formEl=formEl;this.textBoxEl=textBoxEl;this.idEl=idEl;this.onInputChange=onInputChangeHandler;this.onSuccess=onSuccessHandler;this.defaultOptions=defaultOptions;this.useFilter=useFilter;this.onUp=onUpHandler;this.onDown=onDownHandler;this.onListElMouseDown=onListElMouseDownHandler;this.showNoMatches=showNoMatches;this.fireCount=0;this.isIE=0;this.isSafari=0;if(navigator)
{this.browser=navigator.userAgent.toLowerCase();if(this.browser.indexOf("safari")!=-1)
{this.isSafari=1;}
if(this.browser.indexOf("msie")!=-1)
{this.isIE=1;}}
var blank_spot=rootEl;this.createDropDownContainer();this.createDropDown();this.createDefaultText();this.createDefaultDropDown();this.positionDropDown();var savior=document.createElement("div");savior.id="savior";this.containerEl.id="dropdown";this.goodFrame=null;if(rootEl)
{if(blank_spot&&this.isIE)
{rootEl.appendChild(savior);}
rootEl.appendChild(this.containerEl);}
if(blank_spot==rootEl&&this.isIE)
{var goodFrame=document.createElement('iframe');goodFrame.id="goodFrame";goodFrame.src="/common/blank.html";goodFrame.style.width="0px";goodFrame.style.height="0px";goodFrame.style.zIndex="98";blank_spot.insertBefore(goodFrame,blank_spot.firstChild);blank_spot.style.zIndex="99";this.goodFrame=goodFrame;}}
this.setCustomOffsetElement=function(el){this.customOffsetElement=el;}
var oThis=this;this.init();if(!window.onresize)
{window.onresize=function(event)
{for(var idx=0;idx<Registry.length;idx++)
{Registry[idx].positionDropDown();}}}
textBoxEl.onkeydown=function(event)
{oThis.handleKeyDown(event);}}
function debug(str)
{document.getElementById("debug").innerHTML+=str+"<BR>";}
function city_selector_onfound(input,obj){input.value=obj?obj.i:-1;}
function city_selector_onselect(success){if(window[success]){window[success]();}}
if(typeof(ScriptInventory)!='undefined'){ScriptInventory.addScript&&ScriptInventory.addScript("\/var\/releases\/thefacebook-r82587-02122008\/www\/html\/js\/typeahead_ns.js","72123",1203052597);}

var geo_ajax_getter_uri='/ajax/geo_selector_ajax.php';var geo_countries_populated=false;var geo_country_name='';function select_geo_by_city_aa()
{show('city_selector_table');hide('country_selector_table');clear_values();hide('geo_selector_table');}
function select_geo_by_country_aa(){if(!geo_countries_populated){get_country_geos();}
show('country_selector_table');hide('city_selector_table');clear_values();hide('geo_selector_table');}
function on_city_selected_aa(){get_geos_by_city($('n').value);show('geo_selector_table');}
function select_geo_by_city(){showTableRow(getParentRow(ge('city_selector')));hide(getParentRow(ge('country')));if(ge('city_i8n')){hide(getParentRow(ge('city_i8n')));}
clear_values();if(ge('geo_selector')){hide(getParentRow(ge('geo_selector')));}}
function select_geo_by_country(){init_geo_by_country();showTableRow(getParentRow(ge('country')));if(ge('city_i8n')){showTableRow(getParentRow(ge('city_i8n')));}
hide(getParentRow(ge('city_selector')));clear_values();if(ge('geo_selector')){hide(getParentRow(ge('geo_selector')));}}
function init_geo_by_country(){if(!geo_countries_populated){get_country_geos();}}
function set_geo_by_country(index){init_geo_by_country();country_select=ge('country');for(i=0;i<country_select.length;i++){if(country_select.options[i].value==index){country_select.options[i].selected=true;break;}}}
function set_geo_by_country_name(name){country_select=ge('country');for(i=0;i<country_select.length;i++){if(country_select.options[i].innerHTML==name){country_select.options[i].selected=true;break;}}}
function clear_values(){$('zipcode_id').value='';if(ge('city_i8n')){$('city_i8n').value='';}
$('n').value='';$('country').value='';$('sq').value='';}
function on_city_selected(){selected_index=$('n').value;if(selected_index<=0){return;}
get_geos_by_city(selected_index);if(ge('geo_selector')){showTableRow(getParentRow(ge('geo_selector')));}}
function get_geos(param_name,param_value,success_fn){var ajax=new Ajax();var params=param_name+"="+param_value;ajax.onDone=success_fn;ajax.onFail=get_geos_failure;ajax.get(geo_ajax_getter_uri+"?"+params);}
function get_geos_by_city(city_id){get_geos('network_key',city_id,populate_div_with_geos);}
function get_country_geos(){get_geos('country_geos',true,populate_select_with_geos);}
function populate_div_with_geos(ajaxObj,responseText){eval(responseText);$('zipcode_id').value=zipcode_id;if(ge('geo_selector')){var str='<table class="geo_options" border="0" cellpadding="0" cellspacing="0">';var checked='checked';var num_suggestions=0;for(var i in geo_array){str+='<tr><td><input type="radio" name="geo" value="'+i+'" '+checked+' id="'+i+'"></td><td> <label for="'+i+'">'+geo_array[i]+'</label></td></tr>';checked='';num_suggestions++;}
str+='</table>';if(num_suggestions==0){str='<div style="margin: 4px;">'+tx('gs:no-suggestions')+'</div>';}
$('geo_selector').innerHTML=str;}}
function populate_select_with_geos(ajaxObj,responseText){eval(responseText);country_select=ge('country');var select_i=1;for(var i=0,il=geo_array.length;i<il;i++){country_select.options[select_i]=new Option(geo_array[i]['name'],geo_array[i]['id']);if(typeof(geo_event)!="undefined"&&geo_event==true){if(country_select.options[select_i].value==geo_country){country_select.options[select_i].selected=true;}}
select_i++;}
if(select_i==1){country_select.options[select_i]=new Option(tx('gs:please-login'),0);}
geo_countries_populated=true;if(geo_country_name!=''){set_geo_by_country_name(geo_country_name);}}
function get_geos_failure(ajaxObj){}
if(typeof(ScriptInventory)!='undefined'){ScriptInventory.addScript&&ScriptInventory.addScript("\/var\/releases\/thefacebook-r82587-02122008\/www\/html\/js\/editregion.js","78068",1203052589);}

var Suggest=function(rootEl,q,formEl,textBoxEl,idEl,uri,param,successHandler,instructions,networkType,placeholderText,defaultOptions,showNoMatches,override_resize)
{this.onInputChange=function()
{var currentInputValue=oThis.typeAheadObj.currentInputValue;var cache=oThis.getCache(currentInputValue);if(cache)
{oThis.onSuggestRequestDone(currentInputValue,cache[0],cache[1],cache[2]);}
else
{var typeStr="";if(oThis.networkType)
{typeStr="&t="+oThis.networkType;}
var q=escapeURI(currentInputValue);var ajax=new Ajax(oThis.onAjaxDone,oThis.onAjaxFail);ajax.key=currentInputValue;ajax.pEvent=oThis.typeAheadObj.pEvent;ajax.get(oThis.suggestURI,oThis.suggestParam+"="+q+typeStr);}}
this.onAjaxFail=function()
{}
this.onAjaxDone=function(ajaxObj,responseText)
{var suggestNames=[];var suggestIDs=[];var suggestLocs=[];eval(responseText);oThis.onSuggestRequestDone(ajaxObj.key,suggestNames,suggestIDs,suggestLocs,ajaxObj.pEvent);}
this.onSuggestRequestDone=function(key,names,ids,locs,pEvent)
{this.setCache(key,names,ids,locs);if(this.typeAheadObj.displaySuggestList(names,ids,locs))
{this.typeAheadObj.pEvent=pEvent;this.typeAheadObj.onListChange();}}
this.getCache=function(key)
{return this.suggestCache[key.toUpperCase()];}
this.setCache=function(key,names,ids,locs)
{this.suggestCache[key.toUpperCase()]=new Array(names,ids,locs);}
this.init=function()
{this.suggestURI=uri;this.suggestParam=param;this.suggestCache=[];this.networkType=networkType;if(!instructions)
{instructions="Type to select a network";}
if(!defaultOptions)
{}
else
{}
textBoxEl.value=q;this.typeAheadObj=new TypeAhead(rootEl,formEl,textBoxEl,idEl,defaultOptions,instructions,0,successHandler,this.onInputChange,null,null,null,placeholderText,showNoMatches,override_resize);}
var oThis=this;this.init();}
function debug(str)
{document.getElementById("debug").innerHTML+=str+"<BR>";}
if(typeof(ScriptInventory)!='undefined'){ScriptInventory.addScript&&ScriptInventory.addScript("\/var\/releases\/thefacebook-r82587-02122008\/www\/html\/js\/suggest.js","68239",1203052597);}

if(typeof deconcept=="undefined")var deconcept={};if(typeof deconcept.util=="undefined")deconcept.util={};if(typeof deconcept.SWFObjectUtil=="undefined")deconcept.SWFObjectUtil={};deconcept.SWFObject=function(swf,id,w,h,ver,c,quality,xiRedirectUrl,redirectUrl,detectKey){if(!document.getElementById){return;}
this.DETECT_KEY=detectKey?detectKey:'detectflash';this.skipDetect=deconcept.util.getRequestParameter(this.DETECT_KEY);this.params={};this.variables={};this.attributes=[];this.fallback_html='';this.fallback_js_fcn=function(){};if(swf){this.setAttribute('swf',swf);}
if(id){this.setAttribute('id',id);}
if(w){this.setAttribute('width',w);}
if(h){this.setAttribute('height',h);}
if(ver){this.setAttribute('version',new deconcept.PlayerVersion(ver.toString().split(".")));}
this.installedVer=deconcept.SWFObjectUtil.getPlayerVersion();if(!window.opera&&document.all&&this.installedVer.major>7){if(!deconcept.unloadSet){deconcept.SWFObjectUtil.prepUnload=function(){__flash_unloadHandler=function(){};__flash_savedUnloadHandler=function(){};window.attachEvent("onunload",deconcept.SWFObjectUtil.cleanupSWFs);}
window.attachEvent("onbeforeunload",deconcept.SWFObjectUtil.prepUnload);deconcept.unloadSet=true;}}
if(c){this.addParam('bgcolor',c);}
var q=quality?quality:'high';this.addParam('quality',q);this.setAttribute('useExpressInstall',false);this.setAttribute('doExpressInstall',false);var xir=(xiRedirectUrl)?xiRedirectUrl:window.location;this.setAttribute('xiRedirectUrl',xir);this.setAttribute('redirectUrl','');if(redirectUrl){this.setAttribute('redirectUrl',redirectUrl);}}
deconcept.SWFObject.prototype={useExpressInstall:function(path){this.xiSWFPath=!path?"/swf/expressinstall.swf":path;this.setAttribute('useExpressInstall',true);},setAttribute:function(name,value){this.attributes[name]=value;},getAttribute:function(name){return this.attributes[name]||"";},addParam:function(name,value){this.params[name]=value;},getParams:function(){return this.params;},addVariable:function(name,value){this.variables[name]=value;},getVariable:function(name){return this.variables[name]||"";},getVariables:function(){return this.variables;},getVariablePairs:function(){var variablePairs=[];var key;var variables=this.getVariables();for(key in variables){variablePairs[variablePairs.length]=key+"="+variables[key];}
return variablePairs;},getSWFHTML:function(){var swfNode="";if(navigator.plugins&&navigator.mimeTypes&&navigator.mimeTypes.length){if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","PlugIn");this.setAttribute('swf',this.xiSWFPath);}
swfNode='<embed type="application/x-shockwave-flash" src="'+this.getAttribute('swf')+'" width="'+this.getAttribute('width')+'" height="'+this.getAttribute('height')+'" style="'+(this.getAttribute('style')||"")+'"';swfNode+=' id="'+this.getAttribute('id')+'" name="'+this.getAttribute('id')+'" ';var params=this.getParams();for(var key in params){swfNode+=htmlspecialchars(key)+'="'+htmlspecialchars(params[key])+'" ';}
var pairs=this.getVariablePairs().join("&");if(pairs.length>0){swfNode+='flashvars="'+pairs+'"';}
swfNode+='/>';}else{if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","ActiveX");this.setAttribute('swf',this.xiSWFPath);}
swfNode='<object id="'+this.getAttribute('id')+'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+this.getAttribute('width')+'" height="'+this.getAttribute('height')+'" style="'+(this.getAttribute('style')||"")+'">';swfNode+='<param name="movie" value="'+this.getAttribute('swf')+'" />';var params=this.getParams();for(var key in params){swfNode+='<param name="'+key+'" value="'+params[key]+'" />';}
var pairs=this.getVariablePairs().join("&");if(pairs.length>0){swfNode+='<param name="flashvars" value="'+pairs+'" />';}
swfNode+="</object>";}
return swfNode;},write:function(elementId){if(this.getAttribute('useExpressInstall')){var expressInstallReqVer=new deconcept.PlayerVersion([6,0,65]);if(this.installedVer.versionIsValid(expressInstallReqVer)&&!this.installedVer.versionIsValid(this.getAttribute('version'))){this.setAttribute('doExpressInstall',true);this.addVariable("MMredirectURL",escape(this.getAttribute('xiRedirectUrl')));document.title=document.title.slice(0,47)+" - Flash Player Installation";this.addVariable("MMdoctitle",document.title);}}
var n=(typeof elementId=='string')?document.getElementById(elementId):elementId;if(this.skipDetect||this.getAttribute('doExpressInstall')||this.installedVer.versionIsValid(this.getAttribute('version'))){n.innerHTML=this.getSWFHTML();return true;}else{if(this.getAttribute('redirectUrl')!=""){document.location.replace(this.getAttribute('redirectUrl'));}
need_version=this.getAttribute('version').major+'.'+this.getAttribute('version').minor+'.'+this.getAttribute('version').rev;have_version=this.installedVer.major+'.'+this.installedVer.minor+'.'+this.installedVer.rev;this.fallback_js_fcn(have_version,need_version);n.innerHTML=this.fallback_html;}
return false;}}
deconcept.SWFObjectUtil.getPlayerVersion=function(){var PlayerVersion=new deconcept.PlayerVersion([0,0,0]);if(navigator.plugins&&navigator.mimeTypes.length){for(k=0;k<navigator.plugins.length;k++){try{x=navigator.plugins[k];if(x.name=='Shockwave Flash'){PlayerVersion_tmp=new deconcept.PlayerVersion(x.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,".").split("."));if(typeof PlayerVersion=='undefined'||PlayerVersion_tmp.major>PlayerVersion.major||(PlayerVersion_tmp.major==PlayerVersion.major&&(PlayerVersion_tmp.minor>PlayerVersion.minor||(PlayerVersion_tmp.minor==PlayerVersion.minor&&PlayerVersion_tmp.rev>PlayerVersion.rev)))){PlayerVersion=PlayerVersion_tmp;}}}catch(honk){}}}else if(navigator.userAgent&&navigator.userAgent.indexOf("Windows CE")>=0){var axo=1;var counter=3;while(axo){try{counter++;axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+counter);PlayerVersion=new deconcept.PlayerVersion([counter,0,0]);}catch(e){axo=null;}}}else{try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");}catch(e){try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");PlayerVersion=new deconcept.PlayerVersion([6,0,21]);axo.AllowScriptAccess="always";}catch(e){if(PlayerVersion.major==6){return PlayerVersion;}}
try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");}catch(e){}}
if(axo!=null){PlayerVersion=new deconcept.PlayerVersion(axo.GetVariable("$version").split(" ")[1].split(","));}}
return PlayerVersion;}
deconcept.PlayerVersion=function(arrVersion){this.major=arrVersion[0]!=null?parseInt(arrVersion[0]):0;this.minor=arrVersion[1]!=null?parseInt(arrVersion[1]):0;this.rev=arrVersion[2]!=null?parseInt(arrVersion[2]):0;}
deconcept.PlayerVersion.prototype.versionIsValid=function(fv){if(this.major<fv.major)return false;if(this.major>fv.major)return true;if(this.minor<fv.minor)return false;if(this.minor>fv.minor)return true;if(this.rev<fv.rev)return false;return true;}
deconcept.util={getRequestParameter:function(param){var q=document.location.search||document.location.hash;if(param==null){return q;}
if(q){var pairs=q.substring(1).split("&");for(var i=0;i<pairs.length;i++){if(pairs[i].substring(0,pairs[i].indexOf("="))==param){return pairs[i].substring((pairs[i].indexOf("=")+1));}}}
return"";}}
deconcept.SWFObjectUtil.cleanupSWFs=function(){var objects=document.getElementsByTagName("OBJECT");for(var i=objects.length-1;i>=0;i--){objects[i].style.display='none';for(var x in objects[i]){if(typeof objects[i][x]=='function'){objects[i][x]=function(){};}}}}
if(!document.getElementById&&document.all){document.getElementById=function(id){return document.all[id];}}
var getQueryParamValue=deconcept.util.getRequestParameter;var FlashObject=deconcept.SWFObject;var SWFObject=deconcept.SWFObject;var flash_update_dialog_shown=false;function spawn_flash_update_dialog(have_version,need_version){if(flash_update_dialog_shown)return;flash_update_dialog_shown=true;dialog=new pop_dialog('errorDialog');new AsyncRequest().setURI('/ajax/flash_update_dialog.php').setData({have_version:have_version,need_version:need_version}).setHandler(function(response){message_data=response.getPayload();dialog.show_message(message_data.title,message_data.body,'Close');}).send();}
if(typeof(ScriptInventory)!='undefined'){ScriptInventory.addScript&&ScriptInventory.addScript("\/var\/releases\/thefacebook-r82587-02122008\/www\/html\/js\/swfobject.js","83132",1203052597);}

status_editor={active:false,menu_active:false,status_text:'',status_blur:false,status_reblur:false,setup:function(initial_status){this.status_text=initial_status;},reset:function(){$('edit_status_text').value='';return false;},show:function(){if(!this.active){hide('profile_status');hide('profile_empty_status');this.hide_menu();show('status_editor');if($('status_text').firstChild){this.status_text=$('status_text').firstChild.nodeValue;}
var prefix=$('edit_status_text').getAttribute('statusprefix');$('edit_status_text').value=this.status_text;if($('edit_status_text').value==''&&prefix){$('edit_status_text').value=prefix;}
if(prefix&&$('edit_status_text').value.substring(0,prefix.length)==prefix){set_caret_position($('edit_status_text'),prefix.length,$('edit_status_text').value.length);}else{$('edit_status_text').select();}
this.status_blur=true;this.active=true;}else{$('edit_status_text').focus();}
return false;},hide:function(){if(!this.active){return;}
this.active=false;this.status_blur=false;hide('status_editor');show((this.status_text!='')?'profile_status':'profile_empty_status');return false;},toggle_menu:function(event){if(ua.safari()||ua.ie()){this.status_reblur=true;}
if(this.menu_active){return this.hide_menu();}else{return this.show_menu();}},show_menu:function(event){this.menu_active=true;$('edit_status_toggle').style.backgroundImage='url(/images/status_on.gif)';$('edit_status_toggle').style.backgroundColor='#fff';$('edit_status_select').style.display='block';return false;},hide_menu:function(){this.menu_active=false;$('edit_status_toggle').style.backgroundImage='url(/images/status_off.gif)';$('edit_status_toggle').style.backgroundColor='#D8DFEA';hide('edit_status_select');return false;},status_select:function(text){if(ua.safari()||ua.ie()){this.status_reblur=true;}
this.hide_menu();$('edit_status_text').value=text;$('edit_status_text').focus();$('edit_status_text').select();},blur:function(){if(this.status_reblur){$('edit_status_text').focus();this.status_reblur=false;return false;}
if(this.status_blur){var obj=$('edit_status_text');if(obj.value!=this.status_text&&obj.getAttribute('statusprefix')!=obj.value){this.submit_status_set($('edit_status_text').value);}else{this.hide();}}
return true;},onfocus:function(obj){var prefix=obj.getAttribute('statusprefix')||'';if(obj.value==prefix||obj.value==''){obj.value=prefix;set_caret_position(obj,prefix.length);}},status_set:function(status,markup){this.status_text=status||'';this.reset();this.hide();if(status!=null&&status!=''){$('status_text').innerHTML=markup;$('status_time').innerHTML=tx('sp01');}else{$('status_text').innerHTML=tx('sp02');}},submit_status_set:function(status){if(status==null||status==''){return;}
new AsyncRequest().setURI('/updatestatus.php').setMethod('POST').setData({'status':status}).setHandler(function(response){var payload=response.getPayload();this.status_set(payload.status,payload.markup);}.bind(this)).setErrorHandler(function(response){this.status_set(null);ErrorDialog.showAsyncError(response);}.bind(this)).send();return false;},status_cleared:function(){this.status_text='';$('status_text').innerHTML='';this.hide();$('status_blank_nag').innerHTML=tx('sp03');setTimeout(function(){$('status_blank_nag').innerHTML=tx('sp04');}.bind(this),2500);},submit_status_clear:function(){this.status_blur=false;new AsyncRequest().setHandler(function(response){this.status_cleared();}.bind(this)).setErrorHandler(function(response){this.status_cleared();this.status_set(null);ErrorDialog.showAsyncError(response);}.bind(this)).setURI('/updatestatus.php').setData({'clear':'1'}).send();return false;},handle_key_press:function(event){event=event||window.event;key_code=event.keyCode||event.which;if(key_code==KEYS.RETURN){if($('edit_status_text').value!='')
this.submit_status_set($('edit_status_text').value);return false;}
if(key_code==KEYS.ESC){this.hide();return false;}
return true;}}
function click_trampoline(){return status_editor.hide_menu();}
var status_page_editor=copy_properties({},status_editor);copy_properties(status_page_editor,{parent:status_editor,setup:function(initial_text){this.parent.setup.bind(this)(initial_text);if(this.status_text==''&&$('friendspro_user_status')){add_css_class_name($('friendspro_user_status'),'user_status_editing');}},hide:function(){this.parent.hide.bind(this)();if((this.status_text!='')&&$('friendspro_user_status')){remove_css_class_name($('friendspro_user_status'),'user_status_editing');}
$('friendspro_user_status').onclick=function(){status_page_editor.show();return false;};},show:function(){if(this.mouse_down==true){this.mouse_down=false;return false;}
this.parent.show.bind(this)();if(this.active){if($('friendspro_user_status')){add_css_class_name($('friendspro_user_status'),'user_status_editing');$('friendspro_user_status').onclick=null;}}
return false;},status_set:function(status,markup){this.parent.status_set.bind(this)(status,markup);remove_css_class_name($('friendspro_user_status'),'mobile_status');},blur:function(event){this.mouse_down=true;this.parent.blur.bind(this)();setTimeout(function(){this.mouse_down=false;}.bind(this),500);}})
var edit_status_visible=false;var edit_select_visible=false;var status_set=true;var status_cleared=true;var status_blur=false;var status_reblur=false;var status_init=false;var status_keepopen=false;var status_text='';var status_id_prefix='';function editStatus(prefix){status_id_prefix=prefix?prefix:'';if(!edit_status_visible){var obj=$(status_id_prefix+'edit_status_text');obj.value=status_text;hideEditStatusSelect();show(status_id_prefix+'status_editor');obj.focus();var prefix=obj.getAttribute('statusprefix')||'';if(prefix&&obj.value.substring(0,prefix.length)==prefix){set_caret_position(obj,prefix.length,obj.value.length);}else{obj.select();}
status_blur=true;edit_status_visible=true;}else{$(status_id_prefix+'edit_status_text').focus();}}
function hideEditStatus(){edit_status_visible=false;status_blur=false;status_init=false;status_keepopen=false;hideEditStatusSelect();hide(status_id_prefix+'status_editor');}
function editStatusBlur(){if(status_reblur){$(status_id_prefix+'edit_status_text').focus();status_reblur=false;return false;}
if(status_blur){if($(status_id_prefix+'edit_status_text').value&&$(status_id_prefix+'edit_status_text').value!=status_text&&$(status_id_prefix+'edit_status_text').value!=$(status_id_prefix+'edit_status_text').getAttribute('statusprefix')&&$(status_id_prefix+'edit_status_text').value!=status_text.replace(/^is /,'')){submitStatus($(status_id_prefix+'edit_status_text').value);}else{if(status_keepopen){status_init=true;$(status_id_prefix+'edit_status_text').value='';hideEditStatusSelect();}else{hideEditStatus();}}}
return true;}
function toggleEditStatusSelect(){if(status_init){if(ua.safari()){status_reblur=true;}
status_init=false;$(status_id_prefix+'edit_status_text').focus()}else if(ua.safari()||ua.ie()){status_reblur=true;}
edit_select_visible=!edit_select_visible;if(edit_select_visible){showEditStatusSelect();}else{hideEditStatusSelect();}}
function showEditStatusSelect(){edit_select_visible=true;$(status_id_prefix+'edit_status_select').style.display='block';$(status_id_prefix+'edit_status_toggle').style.backgroundImage='url(/images/status_on.gif)';$(status_id_prefix+'edit_status_toggle').style.backgroundColor='#fff';}
function hideEditStatusSelect(){edit_select_visible=false;hide(status_id_prefix+'edit_status_select');$(status_id_prefix+'edit_status_toggle').style.backgroundImage='url(/images/status_off.gif)';$(status_id_prefix+'edit_status_toggle').style.backgroundColor='#D8DFEA';}
function statusSelect(element){toggleEditStatusSelect();$(status_id_prefix+'edit_status_text').value=element.innerHTML;$(status_id_prefix+'edit_status_text').focus();$(status_id_prefix+'edit_status_text').select();}
function clearStatus(){status_cleared=false;status_keepopen=false;window.setTimeout('showClearingMessage()',200);hideEditStatus();new AsyncRequest().setHandler(function(response){statusCleared();}).setErrorHandler(function(response){statusCleared();statusUpdated(null,'');ErrorDialog.showAsyncError(response);}).setURI('/updatestatus.php').setData({'clear':'1'}).send();}
function showClearingMessage(){if(!status_cleared){hide(status_id_prefix+'su_name');$(status_id_prefix+'su_text').innerHTML='<span style="color:gray;">'+tx('sp05')+'</span>';}}
function statusCleared(){status_cleared=true;status_text='';hide(status_id_prefix+'su_name');$(status_id_prefix+'su_placeholder').innerHTML=tx('sp06');show(status_id_prefix+'su_placeholder');hide(status_id_prefix+'su_edit');$(status_id_prefix+'su_text').innerHTML='';$(status_id_prefix+'su_time').innerHTML='';}
function submitStatus(status){if(status==null||status==''){return;}
status_keepopen=false;status_set=false;window.setTimeout('showUpdatingMessage()',200);hideEditStatus();new AsyncRequest().setHandler(function(response){var payload=response.getPayload();statusUpdated(payload.status,payload.markup);}).setErrorHandler(function(response){statusUpdated(null,'');ErrorDialog.showAsyncError(response);}).setURI('/updatestatus.php').setData({'status':status}).send();}
function showUpdatingMessage(){if(!status_set){hide(status_id_prefix+'su_name');hide(status_id_prefix+'su_placeholder');$(status_id_prefix+'su_text').innerHTML='<span style="color:gray;">'+tx('sp07')+'</span>';}}
function statusUpdated(status,markup){status_set=true;if(status!=null&&status!=''){status_text=status;show(status_id_prefix+'su_name');show(status_id_prefix+'su_edit');hide(status_id_prefix+'su_placeholder');$(status_id_prefix+'su_text').innerHTML=markup;$(status_id_prefix+'su_time').innerHTML=tx('sp08');$(status_id_prefix+'edit_status_text').value='';}else if(status==null){status_text='';hide(status_id_prefix+'su_name');$(status_id_prefix+'su_placeholder').innerHTML=tx('sp09');show(status_id_prefix+'su_placeholder');hide(status_id_prefix+'su_edit');$(status_id_prefix+'su_text').innerHTML='';$(status_id_prefix+'su_time').innerHTML='';}}
function statusTextKeyPress(event){if(!event){event=window.event;}
if(event.keyCode){keyPressed=event.keyCode;}else if(event.which){keyPressed=event.which;}
if(keyPressed==9){return false;}
if(keyPressed==13){submitStatus($(status_id_prefix+'edit_status_text').value);return false;}
if(keyPressed==27){hideEditStatus();return false;}
return true;}
function home_statusupdates_show(user){show('home_statusupdates');hide('home_statusupdates_show_link');new AsyncRequest().setURI('/ajax/statusupdates.php').setData({'home_show':1}).setHandler(bind(this,function(){})).setErrorHandler(bind(this,function(){})).send();return false;}
function home_statusupdates_hide(user){hide('home_statusupdates');show('home_statusupdates_show_link');new AsyncRequest().setURI('/ajax/statusupdates.php').setData({'home_hide':1}).setHandler(bind(this,function(){})).setErrorHandler(bind(this,function(){})).send();return false;}
function preferences_statusupdates_onsubmit(person){if(person&&person.i){preferences_statusupdates_subscribe(person.i,person.t);}
this.clear();return false;}
function preferences_statusupdates_subscribe(id,name){preferences_subscribe(id,name,'statusupdates');}
function preferences_statusupdates_unsubscribe(id){preferences_unsubscribe(id,'statusupdates');}
function preferences_mobileuploads_onsubmit(person){if(person&&person.i){preferences_mobileuploads_subscribe(person.i,person.t);}
this.clear();return false;}
function preferences_mobileuploads_subscribe(id,name){preferences_subscribe(id,name,'mobileuploads');}
function preferences_mobileuploads_unsubscribe(id){preferences_unsubscribe(id,'mobileuploads');}
function preferences_unsubscribe(id,type){function onResponsePost(response){hide(type+'_subscription_'+id);}
if(type=='mobileuploads'){url='/ajax/mobileuploads.php';}else{url='/ajax/statusupdates.php';}
new AsyncRequest().setURI(url).setData({'unsubscribe':id}).setHandler(bind(this,onResponsePost)).setErrorHandler(bind(this,function(){})).send();return false;}
function preferences_subscribe(id,name,type){function onResponsePost(response){var elem=ge(type+'_subscription_'+id);if(elem){show(elem);}else{var elem=document.createElement('div');elem.id=type+'_subscription_'+id;elem.className='subscription';elem.innerHTML=name+' <small><a href="#" onclick="preferences_'+type+'_unsubscribe('+id+');return false">'+tx('sp10')+'</a></small>';$(type+'_subscriptions').appendChild(elem);}}
if(type=='mobileuploads'){url='/ajax/mobileuploads.php';}else{url='/ajax/statusupdates.php';}
var asyncRequestPost=new AsyncRequest().setURI(url).setData({'subscribe':id}).setHandler(bind(this,onResponsePost)).setErrorHandler(bind(this,function(){})).send();return false;}
if(typeof(ScriptInventory)!='undefined'){ScriptInventory.addScript&&ScriptInventory.addScript("\/var\/releases\/thefacebook-r82587-02122008\/www\/html\/js\/statuspro.js","79814",1203052597);}

var REMOVE_BOX_ONLY=1;var REMOVE_ENTIRE_APP=2;var REMOVE_LINK_ONLY=3;function removeActionLink(obj,application_name,app_id){var dialog=new contextual_dialog();dialog.set_context(obj);buttons='<div class="dialog_buttons">'+'<input class="inputsubmit" type="button" value="'+tx('prf:remove-applink')+'"/>'+'<input class="inputsubmit" type="button" value="'+tx('prf:remove-app')+'"/>'+'<input class="inputsubmit" type="button" value="'+tx('sh:cancel-button')+'" />'+'</div>';var prompt=tx('prf03');add_css_class_name(obj,'box_remove_selected');dialog.show_prompt(tx('prf04',{'application-name':application_name}),prompt+buttons);dialog_options=dialog.obj.getElementsByTagName('input');dialog_options[0].onclick=function(){remove_app(REMOVE_LINK_ONLY,app_id,'pra');dialog.hide();}
dialog_options[1].onclick=function(){remove_app(REMOVE_ENTIRE_APP,app_id,'pra');dialog.hide();}
dialog_options[2].onclick=function(){dialog.hide();remove_css_class_name(obj,'box_remove_selected');}
return false;}
function remove_app(remove_type,app_id,ref){var error_message;if(remove_type==REMOVE_BOX_ONLY){error_message=tx('prf:error-box');remove_app_box_from_page(app_id);remove_app_icon_from_page_profile(app_id);}else if(remove_type==REMOVE_LINK_ONLY){error_message=tx('prf:error-applink');remove_app_link_from_page_profile(app_id);}else{error_message=tx('prf:error-app');remove_app_box_from_page(app_id);remove_app_icon_from_page_profile(app_id);remove_app_link_from_side_nav(app_id);remove_app_link_from_page_profile(app_id);}
ajax_remove_application(app_id,PROFILE_FBID,remove_type,ref,error_message);}
function ajax_remove_application(app_id,profile_fbid,remove_type,ref,error_message){if(!error_message){error_message=tx('prf:error-app');}
var ajax=new Ajax(function(obj,text){eval(text);if(!success){Util.error(error_message+'for app %d.',app_id);aiert(error_message);}});ajax.onFail=function(){Util.error(error_message+'for app %d.',app_id);aiert(error_message);}
var post={'profile_fbid':profile_fbid,'app_id':app_id,'remove_type':remove_type,'ref':ref};ajax.post('/ajax/profile_boxes.php',post,true);}
function remove_app_box_from_page(app_id){var box=ge('box_app_'+app_id);if(box){box.parentNode.removeChild(box);}}
function remove_app_link_from_side_nav(app_id){app_id=String(app_id);if(ge(app_id)){$(''+app_id).style.display='none';}}
function remove_app_icon_from_page_profile(app_id){var app_icon_id='icon_app'+app_id;if(ge(app_icon_id)){$(app_icon_id).style.display='none';}}
function remove_app_link_from_page_profile(app_id){if(ge('action_app_'+app_id)){$('action_app_'+app_id).style.display='none';}}
function removeBox(obj,application_name,app_id){var dialog=new contextual_dialog();dialog.set_context(obj);buttons='<div class="dialog_buttons">'+'<input class="inputsubmit" type="button" value="'+tx('prf:remove-app')+'" />'+'<input class="inputsubmit" type="button" value="'+tx('prf:remove-box')+'" />'+'<input class="inputsubmit" type="button" value="'+tx('sh:cancel-button')+'" />'+'</div>';var remove_prompt=tx('prf05');dialog.show_prompt(tx('prf06',{'application-name':application_name}),dialog.content_to_markup(remove_prompt)+buttons);add_css_class_name(obj,'box_remove_selected');dialog_options=dialog.obj.getElementsByTagName('input');dialog_options[0].onclick=function(){remove_app(REMOVE_ENTIRE_APP,app_id,'prb');dialog.hide();}
dialog_options[1].onclick=function(){remove_app(REMOVE_BOX_ONLY,app_id,'prb');dialog.hide();}
dialog_options[2].onclick=function(){dialog.hide();remove_css_class_name(obj,'box_remove_selected');}
return false;}
function flexToggle(el){if(el.className=='flex_open'){el.className='flex_shut';profileFlexAjax(el.id,1);}else{el.className='flex_open';profileFlexAjax(el.id,0);}}
function boxFlexSet(el,open){if(open==true&&has_css_class_name(el,'flex_shut')){remove_css_class_name(el,'flex_shut');add_css_class_name(el,'flex_open');}else if(open==false&&has_css_class_name(el,'flex_open')){remove_css_class_name(el,'flex_open');add_css_class_name(el,'flex_shut');}}
function boxFlexToggle(el){var userprofile=ge('userprofile');if(has_css_class_name(userprofile,'collapsed_mode')){remove_css_class_name(userprofile,'collapsed_mode');remove_css_class_name(el,'flex_shut');add_css_class_name(el,'flex_open');animate_scroll_to_id(el.id,5);profileBoxFlexAjax(el.id,0);return;}
if(has_css_class_name(el,'flex_open')){remove_css_class_name(el,'flex_open');add_css_class_name(el,'flex_shut');profileBoxFlexAjax(el.id,1);}else{remove_css_class_name(el,'flex_shut');add_css_class_name(el,'flex_open');profileBoxFlexAjax(el.id,0);}
el.blur();return false;}
function profileFlexAjax(elId,val){var ajax=new Ajax();ajax.onDone=function(){};ajax.onFail=function(){};ajax.post('/ajax/profile_flex_ajax.php',elId+'='+val);}
function profileBoxFlexAjax(elId,val){var ajax=new Ajax();ajax.onDone=function(){};ajax.onFail=function(){}
ajax.post('/ajax/profile_box_flex_ajax.php',{'app_id':elId,'value':val});}
var mf_uninstalled_apps={};function minifeed_hide(clicked_element,story_id,who,app_id,installed,hash,story_type,source_id,template_id){var minifeed_dialog_handle=new contextual_dialog();minifeed_dialog_handle.set_context(clicked_element);var title=tx('prf07');var message=tx('prf08',{'whose':who});var hide_story=function(){if(source_id){minifeed_hide_click(story_id,source_id,false,false);}else{minifeed_hide_click(story_id,null,false,false,story_type,app_id,template_id,hash);}
generic_dialog.get_dialog(this).fade_out(100);};var hide_inaccurate_app_story=function(){if(source_id){minifeed_hide_click(story_id,source_id,false,true);}else{minifeed_hide_click(story_id,null,null,true,story_type,app_id,template_id,hash);}
generic_dialog.get_dialog(this).fade_out(100);};var hide_story_and_remove_app=function(){if(source_id){minifeed_hide_click(story_id,source_id,true,true);mf_uninstalled_apps[source_id]=true;}else{minifeed_hide_click(story_id,null,null,true,story_type,app_id,template_id,hash);remove_app(REMOVE_ENTIRE_APP,app_id,'mf');mf_uninstalled_apps[app_id]=true;}
generic_dialog.get_dialog(this).fade_out(100);};var cancel=function(){generic_dialog.get_dialog(this).fade_out(100);};var inaccurate_installed_app=function(){var uninstall_title=source_id?tx('ua03'):tx('prf09');var uninstall_message=source_id?tx('ua04'):tx('prf10');var remove_button_text=source_id?tx('ua:block-source'):tx('prf:remove-app');minifeed_dialog_handle.show_choice(uninstall_title,uninstall_message,tx('prf:just-hide-story'),hide_inaccurate_app_story,remove_button_text,hide_story_and_remove_app,'',tx('sh:cancel-button'),cancel);var dialog_popup=minifeed_dialog_handle.obj.firstChild;dialog_popup.className='remove_app_dialog_popup '+dialog_popup.className;};if(app_id||source_id){message+=' '+tx('prf11');var inaccurate_function;if(installed&&(source_id&&!mf_uninstalled_apps[source_id])||(app_id&&!mf_uninstalled_apps[app_id])){inaccurate_function=inaccurate_installed_app;}else{inaccurate_function=hide_inaccurate_app_story;}
minifeed_dialog_handle.show_choice(title,message,tx('prf:hide-story'),hide_story,tx('prf:didnt-do'),inaccurate_function,'',tx('sh:cancel-button'),cancel);}else{minifeed_dialog_handle.show_choice(title,message,tx('prf:hide-story'),hide_story,tx('sh:cancel-button'),cancel);}
return false;}
function minifeed_hide_click(hide_id,source_id,block_source,inaccurate,story_type,app_id,template_id,hash){ajax=new Ajax();ajax.onDone=function(){};ajax.onFail=function(){aiert(tx('prf:error-hide-mf'));};story=ge('story_'+hide_id);if(story.previousSibling.className=='date_divider'&&story.nextSibling.className.indexOf('story')==-1){remove_node(story.previousSibling);}else if(story.previousSibling.className=='date_divider'){story.nextSibling.className+=' no_border';}
remove_node(story);minifeed_decrement_story_count();var post={'hide_ministory_key':hide_id,'profile_fbid':PROFILE_FBID};if(app_id){post['app_id']=app_id;post['hash']=hash;if(template_id){post['template_id']=template_id;}}
if(inaccurate){post['inaccurate']=1;post['story_type']=story_type;}
if(source_id){post['source_id']=source_id;if(block_source){post['block_source']=true;}}
ajax.post('/ajax/minifeed.php',post,true);}
function minifeed_decrement_story_count(){var text;var mf_story_count_string_array=new Array();var count_el=ge('mf_story_count_string');if(!count_el)return;var count=parseInt(count_el.innerHTML.split(' ')[0]);count=count-1;if(count==1){text=tx('prf12');}else{text=tx('prf13',{'count':count});}
count_el.innerHTML=text;}
function show_profile_layout_dialog(){var dialog=new pop_dialog();dialog.show_message(tx('prf14'),tx('prf15'));}
function show_public_profile_dialog(url){var dialog=new pop_dialog();dialog.show_message(tx('prf17'),tx('prf18')
+'<br/><br/>'
+'<span style="color: #3b5998; border: 1px solid #ccc; padding: 5px; margin: 5px;">'
+url
+'</span>'
+'<br/><br/>'
+tx('prf20',{'search-privacy-link':'<a href="/privacy.php?view=search">'+tx('prf21')+'</a>'}));}
function is_left_click(e){if(e.which==null){if(e.button<2)return true;}else{if(e.which<2)return true;}
return false;}
function isMouseLeaveOrEnter(e,handler){if(e.type!='mouseout'&&e.type!='mouseover')return false;var reltg=e.relatedTarget?e.relatedTarget:e.type=='mouseout'?e.toElement:e.fromElement;while(reltg&&reltg!=handler)
reltg=reltg.parentNode;return(reltg!=handler);}
function profile_icon_hover(icon_link){var tooltip=icon_link.previousSibling;tooltip.style.display='block';tooltip.style.zindex=1;if(has_css_class_name(tooltip,'loaded_tooltip')){visible_tooltip=tooltip;return;}
var offsetWidth=tooltip.childNodes[0].offsetWidth;tooltip.style.width=offsetWidth+'px';tooltip.style.left=-((offsetWidth-22)/2)+'px';tooltip.style.top=-24+'px';add_css_class_name(tooltip,'loaded_tooltip');visible_tooltip=tooltip;}
function clear_tooltip(icon_link){var tooltip=icon_link.previousSibling;tooltip.style.display='none';}
function profile_app_switcher_select(scroll_element_id,app_id){boxFlexSet(app_container,1);var box_head=$('box_head_'+app_id);if(box_head){var app_container=box_head.parentNode;if(app_container.parentNode.id.indexOf('moveable')==-1){toggle_profile_apps_link(true);}
make_header_blue(app_id);animate_scroll_to_id(scroll_element_id,app_id);}else{ProfileHiddenBoxes.singleton.ensureHiddenContents(function(){box_head=$('box_head_'+app_id);if(box_head){profile_app_switcher_select(scroll_element_id,app_id);}});}
return false;}
var ANI_SCROLL_STEP_AMOUNT=250;var ANI_SCROLL_SLOWING_WINDOW=750;var ANI_SCROLL_STOP_WINDOW=13;var ANI_MAX_SLOWDOWN_AMOUNT=120;var ANI_CALLBACK_PAUSE_TIME=200;function animate_scroll_to_id(scroll_element_id,app_id){var element=(typeof app_id!='undefined')?ge('box_app_'+app_id):ge(scroll_element_id);var target_height=elementY(element);var target_bottom=target_height+element.offsetHeight;if(target_height>getPageScrollHeight()&&target_bottom<getPageScrollHeight()+getViewportHeight()){setTimeout("fade_header("+app_id+")",ANI_CALLBACK_PAUSE_TIME+400);}else{animate_scroll_to_id_helper(scroll_element_id,20,app_id,getPageScrollHeight(),'fade_header');}}
function animate_scroll_to_id_helper(scroll_element_id,scroll_speed,app_id,scroll_height,scroll_complete_callback){var element=ge(scroll_element_id);var target_height=elementY(element);var page_scroll_height=getPageScrollHeight();var scroll_dir=1;if(target_height<page_scroll_height){scroll_dir=-1;}
var scroll_amount=0;if(scroll_height!=page_scroll_height){if(scroll_complete_callback){setTimeout(scroll_complete_callback+"("+app_id+")",ANI_CALLBACK_PAUSE_TIME);}
return;}
if(!(page_scroll_height>target_height-ANI_SCROLL_SLOWING_WINDOW&&page_scroll_height<target_height+ANI_SCROLL_SLOWING_WINDOW)){scroll_amount=ANI_SCROLL_STEP_AMOUNT;}else if(!(page_scroll_height>target_height-ANI_SCROLL_STOP_WINDOW&&page_scroll_height<target_height+ANI_SCROLL_STOP_WINDOW)){scroll_amount=parseInt(Math.abs(page_scroll_height-target_height)/ANI_SCROLL_SLOWING_WINDOW*ANI_MAX_SLOWDOWN_AMOUNT);}
if(scroll_amount!=0){var expected_page_scroll_height=getPageScrollHeight()+scroll_dir*scroll_amount;window.scrollBy(0,scroll_dir*scroll_amount);setTimeout("animate_scroll_to_id_helper('"+
scroll_element_id+"',"+
scroll_speed+","+
app_id+","+
expected_page_scroll_height+",'"+
scroll_complete_callback+"')",scroll_speed);}else{window.scrollTo(0,target_height-ANI_SCROLL_STOP_WINDOW);if(scroll_complete_callback){setTimeout(scroll_complete_callback+"("+app_id+")",ANI_CALLBACK_PAUSE_TIME);}}}
function fade_header(id){var box_header=ge('box_head_'+id);remove_css_class_name(box_header,'box_head_highlight');var box=ge('box_head_'+id);if(!box){return;}
remove_css_class_name(box.parentNode,'box_outline');var old_border=ge('scroll_highlight_border');old_border.parentNode.removeChild(old_border);if(id==2719290516){$('wall_text').focus();}}
function make_header_blue(id){var newBorder=document.createElement('div');newBorder.id='scroll_highlight_border';newBorder.className="box_highlight_outline";var box=$('box_head_'+id).parentNode;newBorder.style.top=elementY(ge('box_head_'+id))-10+'px';newBorder.style.left=elementX(ge('box_head_'+id))-10+'px';newBorder.style.width=box.offsetWidth+15+'px';newBorder.style.height=box.offsetHeight+5+'px';document.body.appendChild(newBorder);var box_header=ge('box_head_'+id);}
function show_tour(tour_div){hide((tour_div=='search_tour')?'edit_profile_tour':'search_tour');var default_offset_search_tour=25;var default_offset_edit_profile_tour=8;var edit_profile_tour=ge('edit_profile_tour');var search_tour=ge('search_tour');if(search_tour){search_tour.style.top=elementY(ge('qsearch'))+default_offset_search_tour+'px';}
if(edit_profile_tour){edit_profile_tour.style.top=elementY(ge('navigator'))+default_offset_edit_profile_tour+'px';}
if(!shown(tour_div)){animate_scroll_to_id('book');}
setTimeout("show('"+tour_div+"')",2000);animation(ge(tour_div)).duration(7000).checkpoint().to('opacity',0).hide().go();}
function show_wall_tour(){toggle_css_class_name(ge('wall_tour'),'extended');$('wall_tour_link').innerHTML=(shown('wall_tour_extended')?tx('prf23'):tx('prf24'));toggle('wall_tour_extended');}
function write_on_your_own_wall(){toggle_css_class_name(ge('wall_tour'),'borderless_attachment');toggle('inline_wall_post');if(shown('inline_wall_post')){animate_scroll_to_id('inline_wall_post')}}
function profile_log_friend_click(friend_ids,position){var ajax=new Ajax();var params={'friend_ids':friend_ids,'position':position};ajax.get('ajax/log_friends.php',params,true);return true;}
var COLS_INDEX=['wide','narrow'];function toggle_profile_apps_link(force_more,force_less){for(var i=0;i<COLS_INDEX.length;i++){var toggle_boxes_link=ge('toggle_boxes_link_content_'+COLS_INDEX[i]);if(!force_less&&(toggle_boxes_link.className=='see_more_arrow'||force_more)){ProfileHiddenBoxes.singleton.ensureHiddenContents(null);toggle_boxes_link.className='see_less_arrow';toggle_boxes_link.innerHTML=tx('prf02');var hidden_portion=ge('hidden_apps_'+COLS_INDEX[i]);if(hidden_portion.childNodes.length){hidden_portion.style.display='block';if(PROFILE_FBID==PROFILE_OWNER_ID){show('more_apps_divider_'+COLS_INDEX[i]);}}}else{toggle_boxes_link.className='see_more_arrow';toggle_boxes_link.innerHTML=tx('prf01');hide('hidden_apps_narrow');hide('hidden_apps_wide');hide('more_apps_divider_'+COLS_INDEX[i]);}}}
function remove_profile_app_rooster(rooster_obj,moved_boxes){if(!rooster_obj){rooster_obj=ge('profile_rooster_notice');}
if(rooster_obj){if(moved_boxes){rooster_obj.className='profile_top_status';rooster_obj.innerHTML='<h2>'+tx('prf28')+'</h2><br>'+tx('prf29',{'edit_extended_profile_link':'<a href="#" onclick="edit_profile_expand_section_dialog(); return false">'+
tx('prf25')+'</a>'});}else{hide(rooster_obj);}}
save_box_orders();return false;}
function move_to_hidden(options_obj){var i;var boxes_to_hide=[];var boxes_to_show=[];for(i=0;i<options_obj.childNodes.length;i++){var child_option=options_obj.childNodes[i];var inputs=child_option.getElementsByTagName('input');var j;for(j=0;j<inputs.length;j++){if(inputs[j].checked){boxes_to_hide.push(inputs[j].value);}else{boxes_to_show.push(inputs[j].value);}}}
var more_apps=Array();if(boxes_to_hide.length>0){for(j=boxes_to_hide.length-1;j>=0;j--){var app=ge('box_app_'+boxes_to_hide[j]);if(app.parentNode.id.indexOf('moveable')!=-1){var col=app.parentNode.id.replace('moveable_','');more_apps[col]=true;move_app_to_more_section(app,col);}}}else{more_apps={'wide':false,'narrow':false};}
if(boxes_to_show.length>0){for(j=boxes_to_show.length-1;j>=0;j--){var app=ge('box_app_'+boxes_to_show[j]);if(app.parentNode.id.indexOf('hidden_apps_')!=-1){var col=app.parentNode.id.replace('hidden_apps_','');move_app_to_display_section(app,col);}}}
for(col in more_apps){if(more_apps[col]==true){show('toggle_profile_apps_link_'+col);}else{hide('toggle_profile_apps_link_'+col);}}
remove_profile_app_rooster(null,true);save_box_orders();return false;}
function move_app_to_more_section(app,col_str){var section=ge('hidden_apps_'+col_str);if(section.childNodes.length>0){section.insertBefore(app,section.firstChild);}else{section.appendChild(app);}}
function move_app_to_display_section(app,col_str){var section=ge('moveable_'+col_str);section.appendChild(app);}
var MAX_APPS_PER_COL=5;var SPECIAL_APPS={2719290516:1,2297529396:1,2327158227:1};function edit_profile_expand_section_dialog(){ProfileHiddenBoxes.singleton.ensureHiddenContents(function(){var dialog=new pop_dialog('app_expander_dialog');var options={'display':Array(),'hidden':Array()};var sections=[ge('moveable_wide'),ge('moveable_narrow'),ge('hidden_apps_wide'),ge('hidden_apps_narrow')];var section,list,app_id,i,j;var count_apps=0;for(i=0;i<sections.length;i++){section=sections[i];for(j=0;j<section.childNodes.length;j++){app_id=section.childNodes[j].id.replace('box_app_','');if(SPECIAL_APPS[app_id])continue;if(section.id.indexOf('moveable_')==0){options['display'][app_id]=$('title_app_'+app_id).innerHTML;}else{options['hidden'][app_id]=$('title_app_'+app_id).innerHTML;}}
count_apps+=j;}
var cols=1;if(count_apps>=MAX_APPS_PER_COL&&count_apps<=MAX_APPS_PER_COL*2){cols=2;}else if(count_apps>MAX_APPS_PER_COL*2){cols=3;}
var per_col=count_apps/cols;var edit_profile_expander=tx('prf27',{'count':count_apps})+'<br/><br/>';edit_profile_expander+='<div class="collapse_options clearfix" id="hide_expand_app_list">';edit_profile_expander+='<div class="column_'+cols+'">';j=0;for(option_type in options){var checked='';if(option_type=='hidden')checked=' checked="true"';for(app_id in options[option_type]){if(j>=per_col){edit_profile_expander+='</div><div class="column_'+cols+'">';j=0;}
if(parseInt(app_id)){edit_profile_expander+='<input type="checkbox" id="checkbox_app_id_'+app_id+'" class="inputcheckbox" value="'+app_id+'"'+checked+'/>'+'<label for="checkbox_app_id_'+app_id+'">'+options[option_type][app_id]+'</label><br/>';j++;}}}
edit_profile_expander+='</div></div>';dialog.show_choice(tx('prf25'),edit_profile_expander,tx('prf26'),function(){move_to_hidden(ge('hide_expand_app_list'));dialog.fade_out(100);},tx('sh:cancel-button'),function(){dialog.fade_out(100);});});}
function ProfileHiddenBoxes(){}
ProfileHiddenBoxes.prototype={ensureHiddenContents:function(onCompletedCallback){if(this.delayedBoxes&&!this.areContentFetched){var boxesToFetch=[];for(var i=0;i<this.delayedBoxes.length;i++){var delayed_box=this.delayedBoxes[i];if(delayed_box.section_html===undefined){boxesToFetch.push(delayed_box);}
else{var hidden_box_id='hidden_box_'+delayed_box.app_id;var hidden_box=ge(hidden_box_id);if(hidden_box){delayed_box.section_html=hidden_box.innerHTML;}}}
var hidden_box_container=ge('profile_hidden_htmls');if(hidden_box_container){hidden_box_container.parentNode.removeChild(hidden_box_container);}
if(boxesToFetch.length>0){var request=new AsyncRequest()
request.setURI('/ajax/profile_boxes_fetch.php')
request.setData({owner_id:PROFILE_OWNER_ID,profile_boxes:JSON.encode(boxesToFetch)})
request.setHandler(bind(this,function(asyncResponse){var payload=asyncResponse.payload;var style=payload.style;if(style){var style_container=ge('style_container_for_hidden_boxes');style_container.innerHTML='<span style="display:none">&nbsp</span><style>'+style+'</style>';}
var htmls=payload.htmls;var length=this.delayedBoxes.length;for(var i=0;i<length;i++){var delayedBox=this.delayedBoxes[i];var appId=delayedBox.app_id;var section_html=htmls[appId];if(section_html!==undefined){delayedBox.section_html=section_html;}}
this.render(onCompletedCallback);}));request.setErrorHandler(bind(this,'onError'))
request.send();}
else{this.render(onCompletedCallback);}
this.areContentFetched=true;}
else{if(onCompletedCallback){onCompletedCallback();}}},onError:function(){Util.error('Sorry, profile box could not be loaded at this time. Please refresh');},render:function(onCompletedCallback){var length=this.delayedBoxes.length;var narrow_html='';var wide_html='';for(var i=0;i<length;i++){var delayedBox=this.delayedBoxes[i];if(delayedBox.section_html){if(delayedBox.profile_box_column==1){narrow_html+=delayedBox.section_html;}else{wide_html+=delayedBox.section_html;}}}
var hidden_apps_narrow=ge('hidden_apps_narrow');if(hidden_apps_narrow){hidden_apps_narrow.innerHTML=narrow_html;}
var hidden_apps_wide=ge('hidden_apps_wide');if(hidden_apps_wide){hidden_apps_wide.innerHTML=wide_html;}
var profile_loading_narrow=ge('profile_loading_narrow');if(profile_loading_narrow){profile_loading_narrow.parentNode.removeChild(profile_loading_narrow);}
var profile_loading_wide=ge('profile_loading_wide');if(profile_loading_wide){profile_loading_wide.parentNode.removeChild(profile_loading_wide);}
if(onCompletedCallback){window.setTimeout(function(){onCompletedCallback();},0);}},init:function(delayedBoxes){this.delayedBoxes=delayedBoxes;},areContentFetched:false,delayedBoxes:null}
ProfileHiddenBoxes.singleton=new ProfileHiddenBoxes();
if(typeof(ScriptInventory)!='undefined'){ScriptInventory.addScript&&ScriptInventory.addScript("\/var\/releases\/thefacebook-r82587-02122008\/www\/html\/js\/profile.js","83056",1203052595);}

var rooster_uri='/ajax/rooster_ajax.php';function urlencode(str){return encodeURIComponent(str);}
function ajaxEncodeForm(form)
{var codedString='';var ampersand='';var formLength=form.elements.length;for(index=0;index<formLength;index++){var element=form.elements[index];var placeholderValue=element.getAttribute('placeholder');if(placeholderValue!==null&&placeholderValue==element.value)
continue;if(!element.name||element.name==''||element.name=='undefined'||!element.value||element.value==''){continue;}
switch(element.type){case'text':case'hidden':case'password':case'textarea':case'select-one':codedString+=ampersand+element.name+'='+urlencode(element.value);break;case'radio':case'checkbox':if(element.checked)
codedString+=ampersand+element.name+'='+urlencode(element.value);break;}
ampersand='&';}
return codedString;}
function hideRooster(divid,constructForm){$(divid).style.display='none';if(constructForm!=null){var formIdStr='temp_rooster_form';var form=document.createElement('form');form.action='/ajax/rooster_ajax.php';form.method='post';form.style.display='none';form.id=formIdStr;var input=document.createElement('input');input.type='hidden';input.name='post_form_id';input.value=$('post_form_id').value;form.appendChild(input);var input=document.createElement('input');input.type='hidden';input.name='storytype';input.value=$('storytype').value;form.appendChild(input);var input=document.createElement('input');input.type='hidden';input.name='storyid';input.value=$('storyid').value;form.appendChild(input);document.body.appendChild(form);ajaxSubmitForm(formIdStr,'');}else{ajaxSubmitForm(divid,'');}
return false;}
function submitTOS(divid){form=document.forms[divid];if(form){ackElement=form.elements['ack'];if(ackElement){if(ackElement.checked){$(divid).style.display='none';ajaxSubmitForm(divid,'');}}}
return false;}
function submitSecurity(divid){form=document.forms[divid];if(form){ansElement=form.elements['seca'];if(ansElement&&ansElement.value!=''){$(divid).style.display='none';ajaxSubmitForm(divid,'');}}
return false;}
function submitBday(divid){form=document.forms[divid];if(form){month=form.elements['birthday_month'];day=form.elements['birthday_day'];year=form.elements['birthday_year'];if((month&&month.value>0)&&(day&&day.value>0)&&(year&&year.value>0)){$(divid).style.display='none';ajaxSubmitForm(divid,'');}}
return false;}
function submitEmail(divid,emailid){form=document.forms[divid];if(form){email=form.elements[emailid];if(email&&email.value!=''&&is_email(email.value)){$(divid).style.display='none';ajaxSubmitForm(divid,'');}}
return false;}
function showEmailEntry(divid){form=document.forms[divid];if(form){if(form.style.display=='none'){form.style.display='block';form.elements['newemail'].focus();}else{form.elements['newemail'].value='';form.style.display='none';}}
return false;}
function resendEmail(divid,type,id){if(divid!=''&&type!=''){form=document.forms[divid];if(form){if(form.elements['newemail']){form.elements['newemail'].value='';}
$(divid).style.display='none';ajaxSubmitForm(divid,'&resend=1');}}
return false;}
function cancelEmail(divid,type,id){if(divid!=''&&type!=''){form=document.forms[divid];if(form){if(form.elements['newemail']){form.elements['newemail'].value='';}
$(divid).style.display='none';ajaxSubmitForm(divid,'&cancel=1');}}
return false;}
function toggleHelp(spanid){ele=ge(spanid);ele.style.display=(ele.style.display=='none')?'block':'none';}
function ajaxSubmitForm(formid,extra)
{var codedForm=ajaxEncodeForm(document.forms[formid]);var query=(codedForm+extra);var ajax=new Ajax();ajax.onDone=function(ajaxObj,responseText){}
ajax.onFail=function(ajaxObj){}
ajax.post(rooster_uri,query,false,true);return false;}
if(typeof(ScriptInventory)!='undefined'){ScriptInventory.addScript&&ScriptInventory.addScript("\/var\/releases\/thefacebook-r82587-02122008\/www\/html\/js\/rooster.js","68239",1203052596);}

function wizard_initialize_onclick_logging(){var hrefs=document.getElementsByTagName('a');for(var ii=hrefs.length-1;ii>=0;ii--){var elem=hrefs[ii];addEventBase(elem,'click',wizard_log_onclick.bind(elem),'wizard');}
var search_form=ge('qsearchform');if(search_form){addEventBase(search_form,'submit',function(){var textbox=ge('q');if(textbox){wizard_log_string('search:'+textbox.value);}},'wizard');}}
function wizard_log_onclick(){if(this.getAttribute('href')=='#'||wizard_log_onclick.already_logged==true){return;}
var script=this.href&&URI(this.href).getPath();if(script&&script.search(/^javascript:/)!=0){wizard_log_onclick.already_logged=true;wizard_log_string(DOM.getText(this)+','+script);}}
wizard_log_onclick.already_logged=false;function wizard_log_string(str){str=str.replace(/ /g,'_');AsyncRequest.pingURI('/ajax/wizard.php',{log:str},true);}
if(typeof(ScriptInventory)!='undefined'){ScriptInventory.addScript&&ScriptInventory.addScript("\/var\/releases\/thefacebook-r82587-02122008\/www\/html\/js\/wizard_log.js","77026",1203052598);}

function show_poke_dialog(to_uid,pokeback_obj,failed_captcha,poke_parent,refresh_display_obj,first_name){var dialog=new pop_dialog();if(first_name){dialog.show_loading_title(tx('pk06',{user_first_name:first_name}));dialog.do_expand_animation=true;}else{dialog.show_dialog('<div class="dialog_loading">'+tx('sh:loading')+'</div>');}
ajax=new Ajax();ajax.onDone=function(ajax_obj,response_text){eval(response_text);if(typeof poke_init=='undefined'){return false;}
if(!poke_init.status||poke_init.warned){dialog.make_modal();}
if(poke_init.status){dialog.show_choice(poke_init.dialog_title,poke_init.dialog_contents,tx('pk01'),function(){ajax_post=new Ajax();ajax_post.onDone=function(ajax_post_obj,post_response_text){eval(post_response_text);if(typeof got_an_f!='undefined'){dialog.fade_out(100);show_poke_dialog(to_uid,null,true);return false;}
if(typeof poke_return=='undefined'){return false;}
if(pokeback_obj){var poke_parent_str=poke_parent||'sidebar_item pokes';hide_poke_obj(pokeback_obj,'ind_poke',poke_parent_str);if(refresh_display_obj){update_poke_summary(refresh_display_obj,'poke_start_index','poke_end_index','poke_total');}}
dialog.show_message(poke_init.dialog_title,poke_return.dialog_contents);if(poke_return.status){dialog.fade_out(500,1100);}};ajax_post.onFail=function(){}
var post_vars={'uid':to_uid,'pokeback':(pokeback_obj?'1':'0')};var captcha_form=ge('captcha_form');if(captcha_form){var captcha_elements=captcha_form.getElementsByTagName('input');for(var i=0;i<captcha_elements.length;i++){post_vars[captcha_elements[i].name]=captcha_elements[i].value;}}
dialog.enable_buttons(false);ajax_post.post('/ajax/poke.php',post_vars);},tx('sh:cancel-button'),function(){dialog.enable_buttons(false);generic_dialog.get_dialog(this).fade_out(100)});}else{dialog.show_message(poke_init.dialog_title,poke_init.dialog_contents);}}
ajax.onFail=function(){}
ajax.post('/ajax/poke.php',{'can_poke':to_uid,'pokeback':((typeof pokeback_obj!='undefined')?1:0),'failed_captcha':(failed_captcha?'1':'0')});return false;}
function update_poke_summary(display_obj,start,end,total){var start_count=$(start).innerHTML;var end_count=$(end).innerHTML-1;var total_count=$(total).innerHTML-1;$(end).innerHTML=end_count;$(total).innerHTML=total_count;$(display_obj).innerHTML=gen_poke_summary_text(start_count,end_count,total_count);}
function gen_poke_summary_text(start,end,total){if(total==1){return tx('pk02');}else if(total==0||end<start){return tx('pk03');}else if(end==total){return tx('pk04',{'number':total});}else{return tx('pk05',{'start':start,'end':end,'total':total});}}
if(typeof(ScriptInventory)!='undefined'){ScriptInventory.addScript&&ScriptInventory.addScript("\/var\/releases\/thefacebook-r82587-02122008\/www\/html\/js\/poke.js","82397",1203052594);}

var outside_search_first_toggle=true;function privacy_toggle_network_selector(obj,name,id,match){var value=obj.options[obj.selectedIndex].value;if(value==match){show(id);}else{hide(id);}
privacy_update_sparkline(name,value);if(name=="search_privacy"){privacy_toggle_outside_your_networks(name,value,5);}}
function privacy_toggle_outside_your_networks(name,value,match){if(value==match){privacy_toggle_form_state(ge("restrict_"+name),false);privacy_toggle_all_checkboxes(ge("restrict_"+name),true);outside_search_first_toggle=true;$('search_filter_public').checked=true;privacy_toggle_form_state(ge("public_profile_on"),true);show(ge('public_profile_on'));show(ge('search_indexing_on'));}else{privacy_toggle_form_state(ge("restrict_"+name),true);if(outside_search_first_toggle){privacy_toggle_all_checkboxes(ge("restrict_"+name),false);outside_search_first_toggle=false;$('search_filter_public').checked=false;privacy_toggle_form_state(ge("public_profile_on"),false);hide(ge('public_profile_on'));hide(ge('search_indexing_on'));}}}
function privacy_toggle_external_search_indexing(obj){if(obj.checked==true){$('search_filter_indexed').checked=true;privacy_toggle_form_state(ge("search_indexing_on"),true);}else{$('search_filter_indexed').checked=false;privacy_toggle_form_state(ge("search_indexing_on"),false);}}
function privacy_update_sparkline(name,value){id=name+'_sparkline';img=ge(id);if(!img){return false;}
src='/images/privacy/sparkline_'+value+'.jpg';img.src=src;}
function privacy_show_public_listing_preview_dialog(){var dialog=new pop_dialog('privacy_pop_public_listing_prrview_dialog');dialog.show_ajax_dialog('/ajax/privacy_public_listing_dialog.php');}
function privacy_show_dialog(field,url){var dialog=new pop_dialog('privacy_pop_dialog');dialog.show_ajax_dialog('/ajax/privacy_dialog.php?f='+field+'&u='+url);}
function editapps_show_privacy_dialog(app_id,url,locale){var dialog=new pop_dialog('privacy_pop_dialog');var url='/ajax/editapps_privacy.php?id='+app_id+'&u='+url;if(locale!=null){url+='&locale='+locale;}
dialog.show_ajax_dialog(url);}
function privacy_toggle_albums(count){for(i=0;i<count;i++){var album_id="album_limited_"+i;$(album_id).checked=true;}}
function privacy_check_all_networks(album_id){var networksCount=networks.length;for(i=0;i<networksCount;i++){checkbox_id="album_"+album_id+"_network_"+networks[i];$(checkbox_id).checked=true;}}
function privacy_limited_profile_pop_message(){var dialog=new pop_dialog();dialog.show_choice(tx('prv:lp-title'),tx('prv:lp-text'),tx('prv:lp-edit'),function(){document.location='privacy.php?view=limited'},tx('sh:close-button'),function(){generic_dialog.get_dialog(this).hide()});}
function privacy_view_public_listing_pop_message(){var dialog=new pop_dialog();dialog.show_choice(tx('prv:pl-title'),tx('prv:pl-text-1')+'<br/><br/>'+
tx('prv:pl-text-2')+'<br/><br/>'+
tx('prv:pl-text-3',{'=Facebook Privacy Policy':'<a href="/policy.php">'+
tx('prv:policy')+'</a>'}),tx('sh:close-button'),function(){generic_dialog.get_dialog(this).hide()});}
function privacy_pop_message(title,message){var dialog=new pop_dialog();dialog.show_choice(title,message,tx('sh:close-button'),function(){generic_dialog.get_dialog(this).hide()});}
function privacy_turn_off_select(c,field,index,networks){if(c){if(c.checked==true){privacy_set_select_state(field,networks,4);}else{privacy_set_select_state(field,networks,3);}}
return true;}
function privacy_set_select_state(field,networks,option){for(i=0;i<networks.length;i++){var element=field+"_"+networks[i];var p=ge(element);if(p){p.options[option].selected=true;}}}
function privacy_turn_off_checkbox(field,index,networks){var box="contact_nobody_"+index;var c=ge(box);var other_networks=Array();if(c){var count_off=0;for(i=0;i<networks.length;i++){var element=field+"_"+networks[i];var p=ge(element);if(p){if(p.selectedIndex==4){other_networks[count_off]=networks[i];count_off++;}}}}
if(count_off==1){c.checked=true;privacy_set_select_state(field,networks,4);}else if(count_off==2){c.checked=false;privacy_set_select_state(field,other_networks,3);}}
function show_privacy_dialog(field){var edit='privacy_edit_'+field;var panel='privacy_panel_'+field;show(edit);if(ua.ie()){var dialog=ge(panel);var goodFrame=ge('goodFrame_'+panel);goodFrame.style.width=(dialog.offsetWidth+120)+"px";goodFrame.style.height=(dialog.offsetHeight)+"px";}}
function hide_privacy_dialog(field){var edit='privacy_edit_'+field;var panel='privacy_panel_'+field;hide(edit);if(ua.ie()){var goodFrame=ge('goodFrame_'+panel);goodFrame.style.width="0px";goodFrame.style.height="0px";}}
function privacy_toggle_form_state(obj,state){old_class=state?'disabled':'enabled';new_class=state?'enabled':'disabled';obj.className=obj.className.indexOf(old_class)==-1?(obj.className.indexOf(new_class)==-1?obj.className+' '+new_class:obj.className):obj.className.replace(old_class,new_class);var inputs=obj.getElementsByTagName('input');var selects=obj.getElementsByTagName('select');var options=obj.getElementsByTagName('option');for(var i=0;i<inputs.length;i++){inputs[i].disabled=!state;}
for(var i=0;i<selects.length;i++){selects[i].disabled=!state;}
for(var i=0;i<options.length;i++){options[i].disabled=!state;}}
function privacy_toggle_all_checkboxes(obj,state){var checkbox=obj.getElementsByTagName('input');for(var i=0;i<checkbox.length;i++){checkbox[i].checked=state;}}
function create_goodFrame(parent){if(ua.ie()){var dialog=ge(parent);var goodFrame=document.createElement('iframe');goodFrame.id="goodFrame_"+parent;goodFrame.className='coupatroopa';goodFrame.style.width="0px";goodFrame.style.height="0px";goodFrame.style.zIndex='50';goodFrame.style.top='0px';goodFrame.style.left='0px';dialog.insertBefore(goodFrame,dialog.firstChild);}}
function privacy_limit_onfound(obj){var f=this.obj.form;f.k.disabled=f.n.disabled=f.q.disabled=f.a.disabled=obj?true:false;f.view.disabled=f.limit_user.disabled=f.id.disabled=f.version.disabled=obj?false:true;if(obj){f.action='privacy.php';f.method='post';f.limit_submit.value='Add';f.limit_submit.onclick=null;f.limit_submit.disabled=false;f.id.value=obj.i;}
else{f.action='s.php';f.method='get';f.q.value=this.obj.value;f.limit_submit.value=this.obj.value==''?'Add':'Search';f.limit_submit.disabled=(this.obj.value=='');}}
function privacy_limit_onsubmit(){return!this.obj.form.limit_submit.disabled;}
function privacy_toggle_limited_preview(obj,name){if(obj.checked==true){show(name);}else{hide(name);}
contact_checked=$('limit_contact').checked;personal_checked=$('limit_personal').checked;if(contact_checked==false&&personal_checked==false){hide('preview_information');}
if(contact_checked==true||personal_checked==true){info_is_displayed=$('preview_information').style.display;if(info_is_displayed!='block'){show('preview_information');}}
work_checked=$('limit_professional').checked;education_checked=$('limit_education').checked;if(work_checked==false&&education_checked==false){hide('preview_educationandworktitle');hide('preview_educationtitle');hide('preview_worktitle');}
if(work_checked==true&&education_checked==true){show('preview_educationandworktitle');hide('preview_educationtitle');hide('preview_worktitle');}
if(work_checked==true&&education_checked==false){hide('preview_educationandworktitle');hide('preview_educationtitle');show('preview_worktitle');}
if(work_checked==false&&education_checked==true){hide('preview_educationandworktitle');show('preview_educationtitle');hide('preview_worktitle');}}
function privacy_platform_disable_all_cb(){var platform_options_list=ge('platform_options_list1');for(var i=0;i<platform_options_list.childNodes.length;i++){platform_options_list.childNodes[i].childNodes[0].disabled=true;}
platform_options_list.style.color='gray';platform_options_list=ge('platform_options_list2');for(i=0;i<platform_options_list.childNodes.length;i++){platform_options_list.childNodes[i].childNodes[0].disabled=true;}
platform_options_list.style.color='gray';}
function privacy_platform_enable_all_cb(){var platform_options_list=ge('platform_options_list1');for(var i=0;i<platform_options_list.childNodes.length;i++){platform_options_list.childNodes[i].childNodes[0].disabled=false;}
platform_options_list.style.color='black';platform_options_list=ge('platform_options_list2');for(i=0;i<platform_options_list.childNodes.length;i++){platform_options_list.childNodes[i].childNodes[0].disabled=false;}
platform_options_list.style.color='black';}
function privacy_platform_logout_app(app_id){var logout_hidden=ge(app_id+'_logout');if(logout_hidden!=null){logout_hidden.value=1;hide(app_id+'_logged_in_div');show(app_id+'_logged_out_div');}}
function privacy_platform_undo_logout_app(app_id){var logout_hidden=ge(app_id+'_logout');if(logout_hidden!=null){logout_hidden.value=0;hide(app_id+'_logged_out_div');show(app_id+'_logged_in_div');}}
function privacy_platform_revoke_app(app_id){var used_hidden=ge(app_id+'_app_used');if(used_hidden!=null){used_hidden.value=0;hide(app_id+'_used_div');show(app_id+'_revoked_div');privacy_platform_logout_app(app_id);hide(app_id+'_logged_out_div');}}
function privacy_platform_undo_revoke_app(app_id){var used_hidden=ge(app_id+'_app_used');if(used_hidden!=null){used_hidden.value=1;hide(app_id+'_revoked_div');show(app_id+'_used_div');privacy_platform_undo_logout_app(app_id);}}
function privacy_platform_unblock_app(app_id){var blocked_hidden=ge(app_id+'_app_blocked');if(blocked_hidden!=null){blocked_hidden.value=0;hide(app_id+'_blocked_div');show(app_id+'_unblocked_div');}}
function privacy_platform_undo_unblock_app(app_id){var blocked_hidden=ge(app_id+'_app_blocked');if(blocked_hidden!=null){blocked_hidden.value=1;hide(app_id+'_unblocked_div');show(app_id+'_blocked_div');}}
function privacy_platform_remove_app(app_id){var removed_hidden=ge(app_id+'_app_removed');if(removed_hidden!=null){removed_hidden.value=1;hide(app_id+'_remove_div');show(app_id+'_undo_remove_div');$(app_id+'_div').className="platform_removed_app";}}
function privacy_platform_undo_remove_app(app_id){var removed_hidden=ge(app_id+'_app_removed');if(removed_hidden!=null){removed_hidden.value=0;hide(app_id+'_undo_remove_div');show(app_id+'_remove_div');$(app_id+'_div').className="platform_added_app";}}
function privacy_platform_show_explain_dialog(){var dialog=new pop_dialog();var title=ge('explain_dialog_title');var content=ge('explain_dialog_text');dialog.show_message(title.innerHTML,content.innerHTML);}
function privacy_platform_show_basic_info_dialog(){var dialog=new pop_dialog();var title=ge('basic_info_dialog_title');var content=ge('basic_info_dialog_text');dialog.show_message(title.innerHTML,content.innerHTML);}
function privacy_platform_select_share_radio(){privacy_platform_enable_all_cb();var base_hidden=ge('base_permission');if(base_hidden!=null){base_hidden.value=1;}}
function privacy_platform_select_noshare_radio(){privacy_platform_disable_all_cb();var base_hidden=ge('base_permission');if(base_hidden!=null){base_hidden.value=0;}}
function privacy_platform_show_disabled_noshare_dialog(){var dialog=new pop_dialog();var title=ge('noshare_dialog_title');var content=ge('noshare_dialog_text');dialog.show_message(title.innerHTML,content.innerHTML);}
if(typeof(ScriptInventory)!='undefined'){ScriptInventory.addScript&&ScriptInventory.addScript("\/var\/releases\/thefacebook-r82587-02122008\/www\/html\/js\/privacy.js","81008",1203052595);}

function show_addfriend_dialog(to_uid,link_object,source,first_name){if(source===undefined){source='';}
return _show_addfriend_dialog(to_uid,link_object,source,undefined,undefined,first_name);}
function _show_addfriend_dialog(to_uid,link_object,source,failed_captcha,message,first_name){if(message===undefined){message='';}
var dialog=new pop_dialog();if(first_name){dialog.show_loading_title(tx('af09',{user_first_name:first_name}));dialog.do_expand_animation=true;}else{dialog.show_dialog('<div class="dialog_loading">'+tx('sh:loading')+'</div>');}
ajax=new Ajax();ajax.onDone=function(ajax_obj,response_text){eval(response_text);if(typeof addfriend_init=='undefined'){return false;}
if(addfriend_init.karmablocked||addfriend_init.karma_warned){dialog.make_modal();}
if(addfriend_init.karmablocked){dialog.show_choice(addfriend_init.dialog_title,addfriend_init.dialog_contents,tx('sh:close-button'),function(){generic_dialog.get_dialog(this).fade_out(100)});}else if(addfriend_init.status){dialog.show_choice(addfriend_init.dialog_title,addfriend_init.dialog_contents,tx('af03'),function(){ajax_post=new Ajax();ajax_post.onDone=function(ajax_post_obj,post_response_text){eval(post_response_text);if(typeof got_an_f!='undefined'){dialog.fade_out(100);_show_addfriend_dialog(to_uid,link_object,source,true,$('message').value);return false;}
if(typeof addfriend_return=='undefined'){return false;}
dialog.show_message(addfriend_init.dialog_title,addfriend_return.dialog_contents);if(addfriend_return.status){disableAddFriendLink(link_object);dialog.fade_out(500,1100);}else{dialog.show_choice(addfriend_init.dialog_title,addfriend_return.dialog_contents,tx('sh:confirm-button'),function(){ajax_confirmhs=new Ajax();ajax_confirmhs.onDone=function(ajax_confirmhs_obj,post_response_text){disableAddFriendLink(link_object);dialog.fade_out(100);};ajax_confirmhs.onFail=function(){}
var post_vars={'confirm_hs_pending':to_uid};ajax_confirmhs.post('/ajax/addfriend.php',post_vars);},tx('af05'),function(){ajax_rejecths=new Ajax();ajax_rejecths.onDone=function(ajax_rejecths_obj,post_response_text){disableAddFriendLink(link_object);dialog.fade_out(100);};ajax_rejecths.onFail=function(){}
var post_vars={'hs_confirm_reject':to_uid};ajax_rejecths.post('/ajax/addfriend.php',post_vars);},'',tx('af06'),function(){generic_dialog.get_dialog(this).fade_out(100)});}};ajax_post.onFail=function(){}
var post_vars={'uid':to_uid,'source':source,'message':$('message').value,'failed_captcha':(failed_captcha?'1':'0')};var captcha_form=ge('captcha_form');if(captcha_form){var captcha_elements=captcha_form.getElementsByTagName('input');for(var i=0;i<captcha_elements.length;i++){post_vars[captcha_elements[i].name]=captcha_elements[i].value;}}
ajax_post.post('/ajax/addfriend.php',post_vars);},tx('sh:cancel-button'),function(){generic_dialog.get_dialog(this).fade_out(100)});}else{dialog.show_message(addfriend_init.dialog_title,addfriend_init.dialog_contents);}}
ajax.onFail=function(){}
ajax.post('/ajax/addfriend.php',{'can_friend':to_uid,'message':message,'failed_captcha':(failed_captcha?'1':'0')});return false;}
function disableAddFriendLink(link_object){if(!link_object){return;}
var newNode=document.createElement("span");newNode.innerHTML=tx('af08');newNode.className="holder inactive";link_object.parentNode.replaceChild(newNode,link_object);}
if(typeof(ScriptInventory)!='undefined'){ScriptInventory.addScript&&ScriptInventory.addScript("\/var\/releases\/thefacebook-r82587-02122008\/www\/html\/js\/addfriend.js","82397",1203052584);}

function fbpage_fan_settings_show_dialog(fbpage_id,title){var dialog=new pop_dialog();var src='/ajax/pages/fan_settings.php?id='+fbpage_id;dialog.show_form_ajax(title,src,tx("pg01"));}
function fbpage_become_fan_show_dialog(fbpage_id,title,ref_id,button_text){var dialog=new pop_dialog();var src='/ajax/pages/fan_settings.php?id='+fbpage_id+'&become_fan=1&ref_id='+ref_id;dialog.show_form_ajax(title,src,button_text,true);}
function fbpage_become_not_fan_js(fbpage_id){new AsyncRequest().setURI('/pages/remove_fan.php').setData({'id':fbpage_id}).setHandler(bind(this,onResponse)).setErrorHandler(bind(this,onError)).send();function onResponse(response){if(window.location.reload){window.location.reload();}}
function onError(response){}}
function fbpage_verification_reason_dialog(){var dialog=new pop_dialog();dialog.show_message(tx('pg03'),tx('pg04'));return false;}
if(typeof(ScriptInventory)!='undefined'){ScriptInventory.addScript&&ScriptInventory.addScript("\/var\/releases\/thefacebook-r82587-02122008\/www\/html\/js\/pages.js","77526",1203052593);}

var MobileService={form:null,mode:'register',mobileError:function(r){if(!this.form){return;}
var error=r.getPayload()&&r.getPayload().mob_error?r.getPayload().mob_error:(r.errorDescription?r.errorDescription:tx('mob:error'));this.form.firstChild.innerHTML='<div class="mobile_error">'+error+'</div>';this.form.ajax_button.disabled=false;},activate:function(form){this.form=form;var cell=form.cell.value;var carrier=form.carrier.value;var r=form.roosterid?form.roosterid.value:'';this.form.firstChild.innerHTML='';new AsyncRequest().setURI('/mobile/ajax.php').setData({'activate':'1','cell':cell,'carrier':carrier,'mode':this.mode,'r':r}).setHandler(bind(this,'activateHandler')).setErrorHandler(bind(this,'mobileError')).send();},activateHandler:function(r){this.form.parentNode.innerHTML=r.getPayload().html;},confirm:function(form){this.form=form;var code=form.code.value;new AsyncRequest().setURI('/mobile/ajax.php').setData({'confirm':'1','code':code,'mode':this.mode}).setHandler(bind(this,'confirmHandler')).setErrorHandler(bind(this,'mobileError')).send();},confirmHandler:function(r){if(r.getPayload().sms){if(this.mode=='authorize'){hide('authorize_mobile');show('authorize_main');}else{goURI(r.getPayload().confirmed);}}else{this.form.parentNode.innerHTML='<div class="mobile_conf">'+tx('mob:confirmed')+'</div>';}},refresh:function(s,max){var loading=ge('mobile_loading');if(loading){loading.style.display='inline';}
new AsyncRequest().setURI('/mobile/content.php').setData({'s':s,'max':max}).setHandler(bind(this,'_refreshHandler')).setErrorHandler(bind(this,'_refreshError')).send();},_refreshHandler:function(r){$('mobile_content').innerHTML=r.getPayload().html;},_refreshError:function(){goURI('/mobile/');}};
if(typeof(ScriptInventory)!='undefined'){ScriptInventory.addScript&&ScriptInventory.addScript("\/var\/releases\/thefacebook-r82587-02122008\/www\/html\/js\/mobile.js","71066",1203052592);}

function InlineParticipants(targetId,asyncUri){this.asyncUri=asyncUri;this.target=$(targetId);this.targetId=targetId;if((!this.target)||this.target.pending){return;}
if(this.target.cached){toggle(this.targetId);}else{this.initializeFromTarget();this.fetchParticipants();}}
copy_properties(InlineParticipants.prototype,{fetchParticipants:function(){this.target.pending=true;new AsyncRequest().setURI(this.asyncUri).setMethod('POST').setReadOnly(true).setData(this.getFetchData()).setHandler(bind(this,'fetchedActorsResponse')).setErrorHandler(bind(this,'fetchedActorsError')).send();},fetchedActorsResponse:function(asyncResponse){var payload=asyncResponse.getPayload();var show_more=payload["has_more"];var actors=payload["actors"];var nameContainers=[];if(!actors){return this.fetchedActorsError();}
for(var i=0;i<actors.length;i++){var container=this.createNameContainer(actors[i]);this.target.appendChild(container);}
if(show_more){var search_href=this.target.getAttribute("search_href");if(search_href){var search_link=document.createElement("a");search_link.className="see_all";search_link.href=search_href;search_link.appendChild(document.createTextNode(tx('ip01')));this.target.appendChild(search_link);}}
this.target.pending=false;this.target.cached=true;this.target.style.display='block';},fetchedActorsError:function(asyncResponse){this.target.pending=false;var search_href=this.target.getAttribute("search_href");if(search_href){location.href=this.target.search_href;}},createNameContainer:function(spec){var container=document.createElement("div");container.className="name_container";container.title=spec.name;var pic_link=document.createElement("a");pic_link.className="pic_container";pic_link.href=spec.profile_href;if(spec.profile_onclick){pic_link.setAttribute('onClick',spec.profile_onclick);}
var pic=document.createElement("img");pic.alt=spec.name;pic.src=spec.img_src;pic_link.appendChild(pic);container.appendChild(pic_link);var name_span=document.createElement("span");name_span.className="name";var name_link=document.createElement("a");name_link.href=spec.profile_href;if(spec.profile_onclick){name_link.setAttribute('onClick',spec.profile_onclick);}
name_link.appendChild(document.createTextNode(spec.first_name));name_span.appendChild(name_link);container.appendChild(name_span);return container;}});function StoryParticipants(targetId,linkData,hash){var asyncUri='/ajax/feed_participants_ajax.php';this.parent.construct(this,targetId,asyncUri);this.linkData=linkData;this.hash=hash;}
copy_properties(StoryParticipants.prototype,{initializeFromTarget:function(){this.storyKey=this.target.getAttribute("story_key");this.storyUser=this.target.getAttribute("user");},getFetchData:function(){if(this.linkData){return{sid:this.storyKey,uid:this.storyUser,link_data:this.linkData,hash:this.hash};}else{return{sid:this.storyKey,uid:this.storyUser};}}});StoryParticipants.extend(InlineParticipants);
if(typeof(ScriptInventory)!='undefined'){ScriptInventory.addScript&&ScriptInventory.addScript("\/var\/releases\/thefacebook-r82587-02122008\/www\/html\/js\/inline_participants.js","75790",1203052590);}

var _unconfirmed_actions_were_rejected=false;function unconfirmed_actions_hide_rooster(){hide(ge('rooster_container'));}
function unconfirmed_actions_ok(action_ids){var auto_accept=$('ua_auto_accept').checked&&!_unconfirmed_actions_were_rejected;unconfirmed_actions_confirm(action_ids,auto_accept);unconfirmed_actions_hide_rooster();}
function unconfirmed_actions_confirm(action_ids,auto_accept){if(action_ids.length==0){return;}
var post_vars={'action_ids':action_ids,'confirm':true,'ref':'rooster','auto_accept':auto_accept};new AsyncRequest().setURI('/ajax/unconfirmed_actions.php').setOption('asynchronous',false).setData(post_vars).send();}
var rooster_blocked_sources={};function unconfirmed_actions_reject(action_ids,source_id,clicked_element){var dialog_handle=new contextual_dialog();dialog_handle.set_context(clicked_element);var title=tx('ua01');var message=tx('ua02');var reject_actions=function(ref){var post_vars={'action_ids':action_ids,'confirm':false,'ref':ref,'source_id':source_id};new AsyncRequest().setURI('/ajax/unconfirmed_actions.php').setData(post_vars).setHandler(_unconfirmed_actions_on_reject_complete.bind(null,action_ids,source_id)).send();hide(ge('ua_auto_accept'));hide(ge('label_ua_auto_accept'));_unconfirmed_actions_were_rejected=true;}
var dialog_fade_out=function(){dialog_handle.fade_out(100);}
var remove_actions=function(){reject_actions('rooster');dialog_fade_out();}
var inaccurate_actions=function(){var inaccurate_title=tx('ua03');var inaccurate_message=tx('ua04');var remove_inaccurate_actions=function(){reject_actions('rooster_not_me');dialog_fade_out();}
var remove_inaccurate_actions_and_block=function(){reject_actions('rooster_not_me_and_block');rooster_blocked_sources[source_id]=true;dialog_fade_out();}
dialog_handle.show_choice(inaccurate_title,inaccurate_message,tx('ua:just-reject'),remove_inaccurate_actions,tx('ua:block-source'),remove_inaccurate_actions_and_block,'',tx('sh:cancel-button'),dialog_fade_out);var dialog_popup=dialog_handle.obj.firstChild;dialog_popup.className='block_source_dialog_popup '+dialog_popup.className;}
if(rooster_blocked_sources[source_id]==true){inaccurate_actions=remove_actions;}
dialog_handle.show_choice(title,message,tx('ua:reject'),remove_actions,tx('ua:did-not-do'),inaccurate_actions,'',tx('sh:cancel-button'),dialog_fade_out);}
function _unconfirmed_actions_on_reject_complete(action_ids,source_id){for(var i=0;i<action_ids.length;++i){hide(ge('unconfirmed_action_'+action_ids[i]));unconfirmed_actions.total--;if(unconfirmed_actions.total==0){unconfirmed_actions_hide_rooster();}
unconfirmed_actions.counts[source_id]--;if(unconfirmed_actions.counts[source_id]==0){}}};
if(typeof(ScriptInventory)!='undefined'){ScriptInventory.addScript&&ScriptInventory.addScript("\/var\/releases\/thefacebook-r82587-02122008\/www\/html\/js\/unconfirmed_actions.js","77538",1203052598);}

var
noErr=0,kError_ErrorTool_BadErrorName=1337001,kError_ErrorTool_DuplicateErrorName=1337002,kError_ErrorTool_BadNamespaceName=1337003,kError_ErrorTool_BadErrorID=1337004,kError_ErrorTool_DuplicateNamespaceName=1337005,kError_ErrorTool_BadNamespaceID=1337006,kError_ErrorTool_WriteFailed=1337007,kError_ErrorTool_BadServiceName=1337008,kError_ErrorTool_RequestFailed=1337009,kError_ErrorTool_TempWriteFailed=1337010,kError_ErrorTool_LintFailed=1337011,kError_Account_IncorrectPassword=1340001,kError_Account_NotAuthenticated=1340002,kError_Account_MissingPassword=1340003,kError_Profile_InvalidAttribute=1341001,kError_Database_WriteFailed=1342001,kError_Account_NotLoggedIn=1340004,kError_Global_ValidationError=1346001,kError_Mobile_Error=1347001,kError_Login_DownError=1348001,kError_Login_ExternalLoginError=1348002,kError_Login_NoCookies=1348003,kError_Login_DeveloperLoginError=1348004,kError_Login_ZiddioContestMessage=1348005,kError_Login_OneTimeCodeMessage=1348006,kError_Login_MustLogInToSeeMessage=1348007,kError_Platform_NotLoggedIn=1349001,kError_Platform_NoAppInfoForAppID=1349002,kError_Platform_LoginError=1349003,kError_Login_ReactivateAccountMessage=1348008,kError_Login_GenericError=1348009,kError_Login_CreatorAccountError=1348010,kError_Login_NotComfirmedError=1348012,kError_Login_AccountDeactivatedError=1348013,kError_Login_AccountMergedError=1348014,kError_Login_AccountMergingError=1348015,kError_TPS_NoTicketId=1350001,kError_TPS_InvalidTicketStatus=1350002,kError_TPS_FailedUpdateTicketStatus=1350003,kError_TPS_FailedUpdateTicketSubject=1350004,kError_TPS_FailedUpdateTicketOwner=1350005,kError_TPS_FailedUpdateTicketQueue=1350006,kError_Login_IncorrectEmailOrPasswordError=1348016,kError_Login_PasswordsCaseSensitiveSubError=1348017,kError_TPS_FailedCorrespondOut=1350007,kError_TPS_EmptyCorrespondence=1350008,kError_TPS_FailedTicketRefresh=1350009,kError_Registration_LoginViaReg=1351001,kError_TPS_WarnUserFailedBadParams=1350010,kError_TPS_WarnUserFailedBadCall=1350011,kError_debategroups_alreadyVoted=1352001,kError_Payment_CardAlreadyDisabled=1353001,kError_Payment_PaymentException=1353002,kError_Payment_InvalidRequest=1353003,kError_TPS_UserHasTicket=1350013,kError_TPS_TicketAssociateBadParams=1350014,kError_TPS_TicketAssociateFailed=1350015,kError_TPS_EmailHasTicket=1350016,kError_Level1_NotEnabled=1354001,kError_Level1_CouldNotConnectToQueueDB=1354002,kError_Level1_QueueCommitFailed=1354003,kError_Level1_TransactionBeginFailed=1354004,kError_Level1_DirtyQueueSelectFailed=1354005,kError_Level1_NoDirtyKeys=1354006,kError_Level1_DispatchCreationFailed=1354007,kError_Level1_DirtyQueueUpdateFailed=1354008,kError_Level1_TransactionCommitFailed=1354009,kError_Level1_DispatchQueueSelectFailed=1354010,kError_Level1_NothingToDispatch=1354011,kError_TPS_FailedConfirmUser=1350017,kError_TPS_FailedResetPassword=1350018,kError_TPS_UnknownSimpleCommand=1350019,kError_TPS_NameChangeFailed=1350020,kError_TPS_InvalidBdayDate=1350021,kError_TPS_InvalidBdayUserTooYoung=1350022,kError_TPS_InvalidBdayPedophile=1350023,kError_TPS_BdayChangeGeneralFailure=1350024,kError_TPS_TicketAssociateMergeFailed=1350025,kError_TPS_TicketAssociateSimpleFailed=1350026,kError_TPS_TicketAssociateUnspecifiedError=1350027,kError_TPS_TicketAssociateRemoveUIDFailed=1350028,kError_TPS_VerificationScoreUpdateFailed=1350029,kError_TPS_AffilAddUseReAdd=1350030,kError_TPS_AffilAddEmailRequired=1350031,kError_TPS_AffilAddFailed=1350032,kError_TPS_AffilConfirmFailed=1350033,kError_TPS_AffilRemoveFailed=1350034,kError_TPS_AffilPendingFailed=1350035,kError_TPS_AffilReaddFailure=1350036,kError_TPS_AffilsUpdateError=1350037,kError_TPS_AffilWidgetUnknownAction=1350038,kError_TPS_AccountChangeFailedDark=1350039,kError_Async_NotLoggedIn=1357001,kError_Async_NotInternUser=1357002,kError_TPS_TicketAttachBadParams=1350040,kError_TPS_TicketAttachGetPendingFailed=1350041,kError_Payment_RefundExceedsAmount=1353004,kError_Payment_RefundAmountNotSupported=1353005,kError_Database_DatabaseDown=1342002,kError_TPS_AffilAddHSUserTooOld=1350042,kError_Admanager_ActionFailed=1359001,kError_Admanager_UpdateFailed=1359002,kError_Calendar_LackEditPermission=1360001,kError_Calendar_GenericError=1360002,kError_CSDC_Disabled=1361001,kError_Calendar_CannotJoinPrivate=1360003,kError_Reviews_UpdateFailed=1362001,kError_Reviews_CreateFailed=1362002,kError_Global_FailedCaptcha=1346002,kError_Payment_RefundMerchantCheck=1353006,kError_Video_TagExists=1363001,kError_Video_TagFailed=1363002,kError_Video_TagLimitReached=1363003,kError_Calendar_CannotSeeItem=1360004,kError_Calendar_PrivateCalendar=1360005,kError_Async_LoginChanged=1357003,kError_Calendar_CannotInviteOthers=1360006,kError_Mobile_CarrierInputDuplicate=1347002,kError_Mobile_NoData=1347003,kError_Ratings_MissingRequiredParams=1365001,kError_Ratings_InvalidContest=1365002,kError_Ratings_InvalidTarget=1365003,kError_Ratings_ContestNotRunning=1365004,kError_Ratings_NoTargetsFound=1365005,kError_Ratings_TargetTrojan=1365006,kError_Ratings_InvalidScore=1365007,kError_TPS_TicketAddCCFailed=1350043,kError_TPS_TicketRemoveCCFailed=1350044,kError_TPS_QueueAddCCFailed=1350045,kError_TPS_QueueRemoveCCFailed=1350046,kError_TPS_NoQueueId=1350047,kError_TPS_CCEditNoActionSpecified=1350048,kError_Global_ContentError=1346003,kError_Mobile_StatusUpdatesPrivacy=1347004,kError_TPS_FailedChangeLanguage=1350049,kError_TPS_QueuePrefChangeFailed=1350050,kError_TPS_FailedChangePriority=1350051;
if(typeof(ScriptInventory)!='undefined'){ScriptInventory.addScript&&ScriptInventory.addScript("\/var\/releases\/thefacebook-r82587-02122008\/www\/html\/js\/error_data.js","83246",1203052589);}

function search_typeaheadpro(obj,source,properties){this.anchor_block=true;this.parent.construct(this,obj,source,properties);}
search_typeaheadpro.extend(typeaheadpro);search_typeaheadpro.prototype.auto_select=false;search_typeaheadpro.prototype.less_than_n_chars=false;search_typeaheadpro.prototype.show=function(){if(!this.less_than_n_chars){this.parent.show();this.dropdown.style.width='148px';}else{this.hide();}}
search_typeaheadpro.prototype.hide=function(){this.parent.hide();remove_css_class_name(ge('q'),'typeahead_border');}
search_typeaheadpro.prototype.found_suggestions=function(suggestions,text,fake_data){this.parent.found_suggestions(suggestions,text,fake_data);if(this.list.firstChild&&this.list.firstChild.firstChild){add_css_class_name(this.list.firstChild.firstChild,'blue_top_border');remove_css_class_name(this.list,'no_border_list');add_css_class_name(this.list.lastChild.lastChild,'blue_bottom_border');add_css_class_name(ge('q'),'typeahead_border');}else{remove_css_class_name(ge('q'),'typeahead_border');remove_css_class_name(ge('q'),'typeahead_border');add_css_class_name(this.list,'no_border_list');}}
function search_friend_source(get_param){this.parent.construct(this,get_param);new AsyncRequest().setMethod('GET').setReadOnly(true).setURI('/ajax/typeahead_search.php?'+get_param).setErrorHandler(function(){}).setHandler(function(response){this.values=response.getPayload().entries;this.build_index();}.bind(this)).send();}
search_friend_source.extend(static_source);search_friend_source.prototype.text_noinput=search_friend_source.prototype.text_placeholder=search_friend_source.prototype.text_nomatch='';search_friend_source.prototype.cache_results=true;search_friend_source.prototype.gen_html=function(friend,highlight){if(friend.it){return['<div class="icon" style="background-image: url(',friend.it,')">&nbsp;</div><div class="app_name">',typeahead_source.highlight_found(friend.t,highlight),'</div>'].join('');}else{return['<div>',typeahead_source.highlight_found(friend.t,highlight),'</div><div><small>',friend.n,'</small></div>'].join('');}}
search_friend_source.prototype.search_value=function(text){if(text.length>=2){this.owner.less_than_n_chars=false;return this.parent.search_value(text);}else if(this.is_ready){this.owner.less_than_n_chars=true;return[];}}
function search_typeahead_onsubmit(friend){if(friend){if(SEARCH_TYPEAHEAD_ONCLICK){if(!search_friend_source.already_logged){eval(SEARCH_TYPEAHEAD_ONCLICK);search_friend_source.already_logged=true;}}
if(friend.u.indexOf('?')!=-1){document.location=friend.u+'&ref=ts';}else{document.location=friend.u+'?ref=ts';}
return false;}}
search_friend_source.prototype._sort_text_obj=function(a,b){if(a.o!=b.o){return a.o-b.o;}else if(a.t==b.t){return 0;}
return a.t<b.t?-1:1}
if(typeof(ScriptInventory)!='undefined'){ScriptInventory.addScript&&ScriptInventory.addScript("\/var\/releases\/thefacebook-r82587-02122008\/www\/html\/js\/search_typeaheadpro.js","72172",1203052596);}

function animation(obj){if(this==window){return new animation(obj);}else{this.obj=obj;this._reset_state();this.queue=[];this.last_attr=null;}}
animation.resolution=20;animation.offset=0;animation.prototype._reset_state=function(){this.state={attrs:{},duration:500}}
animation.prototype.stop=function(){this._reset_state();this.queue=[];return this;}
animation.prototype._build_container=function(){if(this.container_div){this._refresh_container();return;}
if(this.obj.firstChild&&this.obj.firstChild.__animation_refs){this.container_div=this.obj.firstChild;this.container_div.__animation_refs++;this._refresh_container();return;}
var container=document.createElement('div');container.style.padding='0px';container.style.margin='0px';container.style.border='0px';container.__animation_refs=1;var children=this.obj.childNodes;while(children.length){container.appendChild(children[0]);}
this.obj.appendChild(container);this.obj.style.overflow='hidden';this.container_div=container;this._refresh_container();}
animation.prototype._refresh_container=function(){this.container_div.style.height='auto';this.container_div.style.width='auto';this.container_div.style.height=this.container_div.offsetHeight+'px';this.container_div.style.width=this.container_div.offsetWidth+'px';}
animation.prototype._destroy_container=function(){if(!this.container_div){return;}
if(!--this.container_div.__animation_refs){var children=this.container_div.childNodes;while(children.length){this.obj.appendChild(children[0]);}
this.obj.removeChild(this.container_div);}
this.container_div=null;}
animation.ATTR_TO=1;animation.ATTR_BY=2;animation.ATTR_FROM=3;animation.prototype._attr=function(attr,value,mode){attr=attr.replace(/-[a-z]/gi,function(l){return l.substring(1).toUpperCase();});var auto=false;switch(attr){case'background':this._attr('backgroundColor',value,mode);return this;case'margin':value=animation.parse_group(value);this._attr('marginBottom',value[0],mode);this._attr('marginLeft',value[1],mode);this._attr('marginRight',value[2],mode);this._attr('marginTop',value[3],mode);return this;case'padding':value=animation.parse_group(value);this._attr('paddingBottom',value[0],mode);this._attr('paddingLeft',value[1],mode);this._attr('paddingRight',value[2],mode);this._attr('paddingTop',value[3],mode);return this;case'backgroundColor':case'borderColor':case'color':value=animation.parse_color(value);break;case'opacity':value=parseFloat(value,10);break;case'height':case'width':if(value=='auto'){auto=true;}else{value=parseInt(value,10);}
break;case'borderWidth':case'lineHeight':case'fontSize':case'marginBottom':case'marginLeft':case'marginRight':case'marginTop':case'paddingBottom':case'paddingLeft':case'paddingRight':case'paddingTop':case'bottom':case'left':case'right':case'top':case'scrollTop':case'scrollLeft':value=parseInt(value,10);break;default:throw new Error(attr+' is not a supported attribute!');}
if(this.state.attrs[attr]===undefined){this.state.attrs[attr]={};}
if(auto){this.state.attrs[attr].auto=true;}
switch(mode){case animation.ATTR_FROM:this.state.attrs[attr].start=value;break;case animation.ATTR_BY:this.state.attrs[attr].by=true;case animation.ATTR_TO:this.state.attrs[attr].value=value;break;}}
animation.prototype.to=function(attr,value){if(value===undefined){this._attr(this.last_attr,attr,animation.ATTR_TO);}else{this._attr(attr,value,animation.ATTR_TO);this.last_attr=attr;}
return this;}
animation.prototype.by=function(attr,value){if(value===undefined){this._attr(this.last_attr,attr,animation.ATTR_BY);}else{this._attr(attr,value,animation.ATTR_BY);this.last_attr=attr;}
return this;}
animation.prototype.from=function(attr,value){if(value===undefined){this._attr(this.last_attr,attr,animation.ATTR_FROM);}else{this._attr(attr,value,animation.ATTR_FROM);this.last_attr=attr;}
return this;}
animation.prototype.duration=function(duration){this.state.duration=duration?duration:0;return this;}
animation.prototype.checkpoint=function(distance,callback){if(distance===undefined){distance=1;}
this.state.checkpoint=distance;this.state.checkpointcb=callback;this.queue.push(this.state);this._reset_state();return this;}
animation.prototype.blind=function(){this.state.blind=true;return this;}
animation.prototype.hide=function(){this.state.hide=true;return this;}
animation.prototype.show=function(){this.state.show=true;return this;}
animation.prototype.ease=function(ease){this.state.ease=ease;return this;}
animation.prototype.go=function(){var time=(new Date()).getTime();this.queue.push(this.state);for(var i=0;i<this.queue.length;i++){this.queue[i].start=time-animation.offset;if(this.queue[i].checkpoint){time+=this.queue[i].checkpoint*this.queue[i].duration;}}
animation.push(this);return this;}
animation.prototype._frame=function(time){var done=true;var still_needs_container=false;var whacky_firefox=false;for(var i=0;i<this.queue.length;i++){var cur=this.queue[i];if(cur.start>time){done=false;continue;}else if(cur.checkpointcb&&(cur.checkpoint*cur.duration+cur.start>time)){this._callback(cur.checkpointcb,time-cur.start-cur.checkpoint*cur.duration);cur.checkpointcb=null;}
if(cur.started===undefined){if(cur.show){this.obj.style.display='block';}
for(var a in cur.attrs){if(cur.attrs[a].start!==undefined){continue;}
switch(a){case'backgroundColor':case'borderColor':case'color':var val=animation.parse_color(get_style(this.obj,a=='borderColor'?'borderLeftColor':a));if(cur.attrs[a].by){cur.attrs[a].value[0]=Math.min(255,Math.max(0,cur.attrs[a].value[0]+val[0]));cur.attrs[a].value[1]=Math.min(255,Math.max(0,cur.attrs[a].value[1]+val[1]));cur.attrs[a].value[2]=Math.min(255,Math.max(0,cur.attrs[a].value[2]+val[2]));}
break;case'opacity':var val=get_opacity(this.obj);if(cur.attrs[a].by){cur.attrs[a].value=Math.min(1,Math.max(0,cur.attrs[a].value+val));}
break;case'height':case'width':var val=animation['get_'+a](this.obj);if(cur.attrs[a].by){cur.attrs[a].value+=val;}
break;case'scrollLeft':case'scrollTop':var val=(this.obj==document.body)?(document.documentElement[a]||document.body[a]):this.obj[a];if(cur.attrs[a].by){cur.attrs[a].value+=val;}
cur['last'+a]=val;break;default:var val=parseInt(get_style(this.obj,a),10);if(cur.attrs[a].by){cur.attrs[a].value+=val;}
break;}
cur.attrs[a].start=val;}
if((cur.attrs.height&&cur.attrs.height.auto)||(cur.attrs.width&&cur.attrs.width.auto)){if(ua.firefox()<3){whacky_firefox=true;}
this._destroy_container();for(var a in{height:1,width:1,fontSize:1,borderLeftWidth:1,borderRightWidth:1,borderTopWidth:1,borderBottomWidth:1,paddingLeft:1,paddingRight:1,paddingTop:1,paddingBottom:1}){if(cur.attrs[a]){this.obj.style[a]=cur.attrs[a].value+(typeof cur.attrs[a].value=='number'?'px':'');}}
if(cur.attrs.height&&cur.attrs.height.auto){cur.attrs.height.value=animation.get_height(this.obj);}
if(cur.attrs.width&&cur.attrs.width.auto){cur.attrs.width.value=animation.get_width(this.obj);}}
cur.started=true;if(cur.blind){this._build_container();}}
var p=(time-cur.start)/cur.duration;if(p>=1){p=1;if(cur.hide){this.obj.style.display='none';}}else{done=false;}
var pc=cur.ease?cur.ease(p):p;if(!still_needs_container&&p!=1&&cur.blind){still_needs_container=true;}
if(whacky_firefox&&this.obj.parentNode){var parentNode=this.obj.parentNode;var nextChild=this.obj.nextSibling;parentNode.removeChild(this.obj);}
for(var a in cur.attrs){switch(a){case'backgroundColor':case'borderColor':case'color':this.obj.style[a]='rgb('+
animation.calc_tween(pc,cur.attrs[a].start[0],cur.attrs[a].value[0],true)+','+
animation.calc_tween(pc,cur.attrs[a].start[1],cur.attrs[a].value[1],true)+','+
animation.calc_tween(pc,cur.attrs[a].start[2],cur.attrs[a].value[2],true)+')';break;case'opacity':set_opacity(this.obj,animation.calc_tween(pc,cur.attrs[a].start,cur.attrs[a].value));break;case'height':case'width':this.obj.style[a]=pc==1&&cur.attrs[a].auto?'auto':animation.calc_tween(pc,cur.attrs[a].start,cur.attrs[a].value,true)+'px';break;case'scrollLeft':case'scrollTop':var val=(this.obj==document.body)?(document.documentElement[a]||document.body[a]):this.obj[a];if(cur['last'+a]!=val){delete cur.attrs[a];}else{var diff=animation.calc_tween(pc,cur.attrs[a].start,cur.attrs[a].value,true)-val;if(a=='scrollLeft'){window.scrollBy(diff,0);}else{window.scrollBy(0,diff);}
cur['last'+a]=diff+val;}
break;default:this.obj.style[a]=animation.calc_tween(pc,cur.attrs[a].start,cur.attrs[a].value,true)+'px';break;}}
if(p==1){this.queue.splice(i--,1);this._callback(cur.ondone,time-cur.start-cur.duration);}}
if(whacky_firefox){parentNode[nextChild?'insertBefore':'appendChild'](this.obj,nextChild);}
if(!still_needs_container&&this.container_div){this._destroy_container();}
return!done;}
animation.prototype.ondone=function(fn){this.state.ondone=fn;return this;}
animation.prototype._callback=function(callback,offset){if(callback){animation.offset=offset;callback.call(this);animation.offset=0;}}
animation.calc_tween=function(p,v1,v2,whole){return(whole?parseInt:parseFloat)((v2-v1)*p+v1,10);}
animation.parse_color=function(color){var hex=/^#([a-f0-9]{1,2})([a-f0-9]{1,2})([a-f0-9]{1,2})$/i.exec(color);if(hex){return[parseInt(hex[1].length==1?hex[1]+hex[1]:hex[1],16),parseInt(hex[2].length==1?hex[2]+hex[2]:hex[2],16),parseInt(hex[3].length==1?hex[3]+hex[3]:hex[3],16)];}else{var rgb=/^rgba? *\(([0-9]+), *([0-9]+), *([0-9]+)(?:, *([0-9]+))?\)$/.exec(color);if(rgb){if(rgb[4]==='0'){return[255,255,255];}else{return[parseInt(rgb[1],10),parseInt(rgb[2],10),parseInt(rgb[3],10)];}}else if(color=='transparent'){return[255,255,255];}else{throw'Named color attributes are not supported.';}}}
animation.parse_group=function(value){var value=trim(value).split(/ +/);if(value.length==4){return value;}else if(value.length==3){return[value[0],value[1],value[2],value[1]];}else if(value.length==2){return[value[0],value[1],value[0],value[1]];}else{return[value[0],value[0],value[0],value[0]];}}
animation.get_height=function(obj){var pT=parseInt(get_style(obj,'paddingTop'),10),pB=parseInt(get_style(obj,'paddingBottom'),10),bT=parseInt(get_style(obj,'borderTopWidth'),10),bW=parseInt(get_style(obj,'borderBottomWidth'),10);return obj.offsetHeight-(pT?pT:0)-(pB?pB:0)-(bT?bT:0)-(bW?bW:0);}
animation.get_width=function(obj){var pL=parseInt(get_style(obj,'paddingLeft'),10),pR=parseInt(get_style(obj,'paddingRight'),10),bL=parseInt(get_style(obj,'borderLeftWidth'),10),bR=parseInt(get_style(obj,'borderRightWidth'),10);return obj.offsetWidth-(pL?pL:0)-(pR?pR:0)-(bL?bL:0)-(bR?bR:0);}
animation.push=function(instance){if(!animation.active){animation.active=[];}
animation.active.push(instance);if(!animation.timeout){animation.timeout=setInterval(animation.animate.bind(animation),animation.resolution);}}
animation.animate=function(){var done=true;var time=(new Date()).getTime();for(var i=0;i<animation.active.length;i++){if(animation.active[i]._frame(time)){done=false;}else{animation.active.splice(i--,1);}}
if(done){clearInterval(animation.timeout);animation.timeout=null;}}
animation.ease={}
animation.ease.begin=function(p){return p*p;}
animation.ease.end=function(p){p-=1;return-(p*p)+1;}
animation.ease.both=function(p){if(p<=0.5){return(p*p)*2;}else{p-=1;return(p*p)*-2+1;}}
if(typeof(ScriptInventory)!='undefined'){ScriptInventory.addScript&&ScriptInventory.addScript("\/var\/releases\/thefacebook-r82587-02122008\/www\/html\/js\/animation.js","78694",1203052584);}

function Vector2(x,y,domain){copy_properties(this,{x:x,y:y,domain:domain||'pure'});};copy_properties(Vector2.prototype,{x:function(){return this.x;},y:function(){return this.y;},toString:function(){return'('+this.x+', '+this.y+')';},add:function(vx,vy){var x=this.x,y=this.y,l=arguments.length;if(l==1){if(vx.domain!='pure'){vx=vx.convertTo(this.domain);}
x+=vx.x;y+=vx.y;}else if(l==2){x+=vx;y+=arguments[1];}else{Util.warn('Vector2.add called with %d arguments, should be one (a vector) or '+'two (x and y coordinates).',l);}
return new Vector2(x,y,this.domain);},mul:function(sx,sy){if(typeof(sy)=="undefined"){sy=sx;}
return new Vector2(this.x*sx,this.y*sy,this.domain);},sub:function(v){var x=this.x,y=this.y,l=arguments.length;if(l==1){if(v.domain!='pure'){v=v.convertTo(this.domain);}
x-=v.x;y-=v.y;}else if(l==2){x-=v;y-=arguments[1];}else{Util.warn('Vector2.add called with %d arguments, should be one (a vector) or '+'two (x and y coordinates).',l);}
return new Vector2(x,y,this.domain);},distanceTo:function(v){return this.sub(v).magnitude();},magnitude:function(){return Math.sqrt((this.x*this.x)+(this.y*this.y));},toViewportCoordinates:function(){return this.convertTo('viewport');},toDocumentCoordinates:function(){return this.convertTo('document');},convertTo:function(newDomain){if(newDomain!='pure'&&newDomain!='viewport'&&newDomain!='document'){Util.error('Domain %q is not valid; legitimate coordinate domains are %q, %q, '+'%q.','pure','viewport','document');return new Vector2(0,0);}
if(newDomain==this.domain){return new Vector2(this.x,this.y,this.domain);}
if(newDomain=='pure'){return new Vector2(this.x,this.y);}
if(this.domain=='pure'){Util.error('Unable to covert a pure vector to %q coordinates; a pure vector is '+'abstract and does not exist in any document coordinate system. If '+'you need to hack around this, create the vector explicitly in some '+'document coordinate domain, by passing a third argument to the '+'constructor. But you probably don\'t, and are just using the class '+'wrong. Stop doing that.',newDomain);return new Vector2(0,0);}
var o=Vector2.getScrollPosition('document');var x=this.x,y=this.y;if(this.domain=='document'){x-=o.x;y-=o.y;}else{x+=o.x;y+=o.y;}
return new Vector2(x,y,newDomain);},setElementPosition:function(el){var p=this.convertTo('document');el.style.left=parseInt(p.x)+'px';el.style.top=parseInt(p.y)+'px';return this;},setElementDimensions:function(el){el.style.width=parseInt(this.x)+'px';el.style.height=parseInt(this.y)+'px';return this;},setElementWidth:function(el){el.style.width=this.x+'px';return this;}});copy_properties(Vector2,{compass:{east:'e',west:'w',north:'n',south:'s',center:'center',northeast:'ne',northwest:'nw',southeast:'se',southwest:'sw'},domainError:function(){Util.error('You MUST provide a coordinate system domain to Vector2.* functions. '+'Available domains are %q and %q. See the documentation for more '+'information.','document','viewport');},getEventPosition:function(e,domain){domain=domain||'document';e=event_get(e);return(new Vector2(mouseX(e),mouseY(e),'document').convertTo(domain));},getScrollPosition:function(domain){domain=domain||'document';return(new Vector2(pageScrollX(),pageScrollY(),'document').convertTo(domain));},getElementPosition:function(el,domain){domain=domain||'document';return(new Vector2(elementX(el),elementY(el),'document').convertTo(domain));},getElementDimensions:function(el){if(ua.safari()&&el.nodeName=='TR'){var tds=el.getElementsByTagName('td');var dimensions=Vector2.getElementCompassPoint(tds[tds.length-1],Vector2.compass.southeast).sub(Vector2.getElementPosition(tds[0]));return dimensions;}
var x=el.offsetWidth||0;var y=el.offsetHeight||0;return new Vector2(x,y);},getElementCompassPoint:function(el,which){which=which||Vector2.compass.southeast;var p=Vector2.getElementPosition(el);var d=Vector2.getElementDimensions(el);var c=Vector2.compass;switch(which){case c.east:return p.add(d.x,d.y*.5);case c.west:return p.add(0,d.y*.5);case c.north:return p.add(d.x*.5,0);case c.south:return p.add(d.x*.5,d.y);case c.center:return p.add(d.mul(.5));case c.northwest:return p;case c.northeast:return p.add(d.x,0);case c.southwest:return p.add(0,d.y);case c.southeast:return p.add(d);}
Util.error('Unknown compass point %s.',which);return p;},getViewportDimensions:function(){var x=(window&&window.innerWidth)||(document&&document.documentElement&&document.documentElement.clientWidth)||(document&&document.body&&document.body.clientWidth)||0;var y=(window&&window.innerHeight)||(document&&document.documentElement&&document.documentElement.clientHeight)||(document&&document.body&&document.body.clientHeight)||0;return new Vector2(x,y);},getDocumentDimensions:function(){var x=(document&&document.body&&document.body.scrollWidth)||(document&&document.documentElement&&document.documentElement.scrollWidth)||0;var y=(document&&document.body&&document.body.scrollHeight)||(document&&document.documentElement&&document.documentElement.scrollHeight)||0;return new Vector2(x,y);},scrollTo:function(v){if(!(v instanceof Vector2)){v=new Vector2(Vector2.getScrollPosition().x,Vector2.getElementPosition($(v)).y,'document');}
v=v.toDocumentCoordinates();if(window.scrollTo){window.scrollTo(v.x,v.y);}}});
if(typeof(ScriptInventory)!='undefined'){ScriptInventory.addScript&&ScriptInventory.addScript("\/var\/releases\/thefacebook-r82587-02122008\/www\/html\/js\/vector.js","78128",1203052598);}

function captchaRefresh(skippedCaptchaClass,registrationPage){var ajax=new Ajax((function(ajaxObj,responseText){document.getElementById("captcha").innerHTML=responseText;}),(function(ajaxObj,responseText){aiert(tx('cc01'));}));var url='/captcha/refresh_ajax.php';if(registrationPage){url=url+'?registration_page&skipped_captcha_class='+skippedCaptchaClass;}else{url=url+'?skipped_captcha_class='+skippedCaptchaClass;}
return ajax.get(url);}
if(typeof(ScriptInventory)!='undefined'){ScriptInventory.addScript&&ScriptInventory.addScript("\/var\/releases\/thefacebook-r82587-02122008\/www\/html\/js\/captcha.js","70672",1203052586);}

var RecaptchaTemplates={VertHtml:'<table id="recaptcha_table" class="recaptchatable" >\n<tr>\n<td colspan="6" class=\'recaptcha_r1_c1\'></td>\n</tr>\n<tr>\n<td class=\'recaptcha_r2_c1\'></td>\n<td colspan="4" class=\'recaptcha_image_cell\'><div id="recaptcha_image"></div></td>\n<td class=\'recaptcha_r2_c2\'></td>\n</tr>\n<tr>\n<td rowspan="6" class=\'recaptcha_r3_c1\'></td>\n<td colspan="4" class=\'recaptcha_r3_c2\'></td>\n<td rowspan="6" class=\'recaptcha_r3_c3\'></td>\n</tr>\n<tr>\n<td rowspan="3" class=\'recaptcha_r4_c1\' height="49">\n<div class="recaptcha_input_area">\n<label for="captcha_response" class="recaptcha_input_area_text"><span id="recaptcha_instructions_image" class="recaptcha_only_if_image recaptcha_only_if_no_incorrect_sol"></span><span id="recaptcha_instructions_audio" class="recaptcha_only_if_no_incorrect_sol recaptcha_only_if_audio"></span><span id="recaptcha_instructions_error" class="recaptcha_only_if_incorrect_sol"></span></label><br/>\n<input name="captcha_response" id="captcha_response" type="text" />\n</div>\n</td>\n<td rowspan="4" class=\'recaptcha_r4_c2\'></td>\n<td><a id=\'recaptcha_reload_btn\' tabindex=\'-1\'><img id=\'recaptcha_reload\' width="25" height="17" /></a></td>\n<td rowspan="4" class=\'recaptcha_r4_c4\'></td>\n</tr>\n<tr>\n<td><a id=\'recaptcha_switch_audio_btn\' tabindex=\'-1\' class="recaptcha_only_if_image"><img id=\'recaptcha_switch_audio\' width="25" height="16" alt="" /></a><a id=\'recaptcha_switch_img_btn\' tabindex=\'-1\' class="recaptcha_only_if_audio"><img id=\'recaptcha_switch_img\' width="25" height="16" alt=""/></a></td>\n</tr>\n<tr>\n<td><a id=\'recaptcha_whatsthis_btn\' tabindex=\'-1\'><img id=\'recaptcha_whatsthis\' width="25" height="16" /></a></td>\n</tr>\n<tr>\n<td class=\'recaptcha_r7_c1\'></td>\n<td class=\'recaptcha_r8_c1\'></td>\n</tr>\n</table>\n',VertCss:'.recaptchatable td img {\n/* see http://developer.mozilla.org/en/docs/Images%2C_Tables%2C_and_Mysterious_Gaps */\ndisplay: block;\n}\n.recaptchatable .recaptcha_r1_c1 { background: url(IMGROOT/sprite.png) -0px -63px no-repeat; width: 318px; height: 9px; }\n.recaptchatable .recaptcha_r2_c1 { background: url(IMGROOT/sprite.png) -18px -0px no-repeat; width: 9px; height: 57px; }\n.recaptchatable .recaptcha_r2_c2 { background: url(IMGROOT/sprite.png) -27px -0px no-repeat; width: 9px; height: 57px; }\n.recaptchatable .recaptcha_r3_c1 { background: url(IMGROOT/sprite.png) -0px -0px no-repeat; width: 9px; height: 63px; }\n.recaptchatable .recaptcha_r3_c2 { background: url(IMGROOT/sprite.png) -18px -57px no-repeat; width: 300px; height: 6px; }\n.recaptchatable .recaptcha_r3_c3 { background: url(IMGROOT/sprite.png) -9px -0px no-repeat; width: 9px; height: 63px; }\n.recaptchatable .recaptcha_r4_c1 { background: url(IMGROOT/sprite.png) -43px -0px no-repeat; width: 171px; height: 49px; }\n.recaptchatable .recaptcha_r4_c2 { background: url(IMGROOT/sprite.png) -36px -0px no-repeat; width: 7px; height: 57px; }\n.recaptchatable .recaptcha_r4_c4 { background: url(IMGROOT/sprite.png) -214px -0px no-repeat; width: 97px; height: 57px; }\n.recaptchatable .recaptcha_r7_c1 { background: url(IMGROOT/sprite.png) -43px -49px no-repeat; width: 171px; height: 8px; }\n.recaptchatable .recaptcha_r8_c1 { background: url(IMGROOT/sprite.png) -43px -49px no-repeat; width: 25px; height: 8px; }\n.recaptchatable .recaptcha_image_cell center img { height:57px;}\n.recaptchatable .recaptcha_image_cell center { height:57px;}\n.recaptchatable .recaptcha_image_cell {\nbackground-color:white; height:57px;\n}\n/* some people break their style sheet, we need to clean up after them */\n#recaptcha_area, #recaptcha_table {\nwidth: 318px !important;\n}\n.recaptchatable, #recaptcha_area tr, #recaptcha_area td, #recaptcha_area th {\nmargin:0px !important;\nborder:0px !important;\npadding:0px !important;\nborder-collapse: collapse !important;\nvertical-align: middle !important;\n}\n.recaptchatable * {\nmargin:0px;\npadding:0px;\nborder:0px;\nfont-family:helvetica,sans-serif;\nfont-size:8pt;\ncolor:black;\nposition:static;\ntop:auto;\nleft:auto;\nright:auto;\nbottom:auto;\ntext-align:left !important;\n}\n.recaptchatable #recaptcha_image {\nmargin:auto;\n}\n.recaptchatable img {\nborder:0px !important;\nmargin:0px !important;\npadding:0px !important;\n}\n.recaptchatable a, .recaptchatable a:hover {\n-moz-outline:none;\nborder:0px !important;\npadding:0px !important;\ntext-decoration:none;\ncolor:blue;\nbackground:none !important;\nfont-weight: normal;\n}\n.recaptcha_input_area {\nposition:relative !important;\nwidth:146px !important;\nheight:45px !important;\nmargin-left:20px !important;\nmargin-right:5px !important;\nmargin-top:4px !important;\nbackground:none !important;\n}\n.recaptchatable label.recaptcha_input_area_text {\nmargin:0px !important;  \npadding:0px !important;\nposition:static !important;\ntop:auto !important;\nleft:auto !important;\nright:auto !important;\nbottom:auto !important;\nbackground:none !important;\nheight:auto !important;\nwidth:auto !important;\n}\n.recaptcha_theme_red label.recaptcha_input_area_text,\n.recaptcha_theme_white label.recaptcha_input_area_text {\ncolor:black !important;\n}\n.recaptcha_theme_blackglass label.recaptcha_input_area_text {\ncolor:white !important;\n}\n.recaptchatable #captcha_response  {\nwidth:145px !important;\nposition:absolute !important;\nbottom:7px !important;\npadding:0px !important;\nmargin:0px !important;\nfont-size:10pt;\n}\n.recaptcha_theme_blackglass #captcha_response,\n.recaptcha_theme_white #captcha_response {\nborder: 1px solid gray;\n}\n.recaptcha_theme_red #captcha_response {\nborder:1px solid #cca940;\n}\n.recaptcha_audio_cant_hear_link {\nfont-size:7pt;\ncolor:black;\n}\n.recaptchatable {\nline-height:1em;\n}\n#recaptcha_instructions_error {\ncolor:red !important;\n}\n',CleanHtml:'<table id="recaptcha_table" class="recaptchatable">\n<tr height="73">\n<td class=\'recaptcha_image_cell\' width="302"><center><div id="recaptcha_image"></div></center></td>\n<td style="padding: 10px 7px 7px 7px;">\n<a id=\'recaptcha_reload_btn\' tabindex=\'-1\'><img id=\'recaptcha_reload\' width="25" height="18" alt="" /></a>\n<a id=\'recaptcha_switch_audio_btn\' tabindex=\'-1\' class="recaptcha_only_if_image"><img id=\'recaptcha_switch_audio\' width="25" height="15" alt="" /></a><a id=\'recaptcha_switch_img_btn\' tabindex=\'-1\' class="recaptcha_only_if_audio"><img id=\'recaptcha_switch_img\' width="25" height="15" alt=""/></a>\n<a id=\'recaptcha_whatsthis_btn\' tabindex=\'-1\'><img id=\'recaptcha_whatsthis\' width="25" height="16" /></a>\n</td>\n<td style="padding: 18px 7px 18px 7px;">\n<img id=\'recaptcha_logo\' alt="" width="71" height="36" />\n</td>\n</tr>\n<tr>\n<td style="padding-left: 7px;">\n<div class="recaptcha_input_area" style="padding-top: 2px; padding-bottom: 7px;">\n<input style="border: 1px solid #3c3c3c; width: 302px;" name="captcha_response" id="captcha_response" type="text" />\n</div>\n</td>\n<td></td>\n<td style="padding: 4px 7px 12px 7px;">\n<img id="recaptcha_tagline" width="71" height="17" />\n</td>\n</tr>\n</table>\n',CleanCss:'.recaptchatable td img {\ndisplay: block;\n}\n.recaptchatable .recaptcha_image_cell center img { height:57px;}\n.recaptchatable .recaptcha_image_cell center { height:57px;}\n.recaptchatable .recaptcha_image_cell {\nbackground-color:white; height:57px; \npadding: 7px !important;\n}\n.recaptchatable, #recaptcha_area tr, #recaptcha_area td, #recaptcha_area th {\nmargin:0px !important;\nborder:0px !important;\nborder-collapse: collapse !important;\nvertical-align: middle !important;\n}\n.recaptchatable * {\nmargin:0px;\npadding:0px;\nborder:0px;\ncolor:black;\nposition:static;\ntop:auto;\nleft:auto;\nright:auto;\nbottom:auto;\ntext-align:left !important;\n}\n.recaptchatable #recaptcha_image {\nmargin:auto;\nborder: 1px solid #dfdfdf !important;\n}\n.recaptchatable a img {\nborder:0px;\n}\n.recaptchatable a, .recaptchatable a:hover {\n-moz-outline:none;\nborder:0px !important;\npadding:0px !important;\ntext-decoration:none;\ncolor:blue;\nbackground:none !important;\nfont-weight: normal;\n}\n.recaptcha_input_area {\nposition:relative !important;\nbackground:none !important;\n}\n.recaptchatable label.recaptcha_input_area_text {\nborder:1px solid #dfdfdf !important;\nmargin:0px !important;  \npadding:0px !important;\nposition:static !important;\ntop:auto !important;\nleft:auto !important;\nright:auto !important;\nbottom:auto !important;\n}\n.recaptcha_theme_red label.recaptcha_input_area_text,\n.recaptcha_theme_white label.recaptcha_input_area_text {\ncolor:black !important;\n}\n.recaptcha_theme_blackglass label.recaptcha_input_area_text {\ncolor:white !important;\n}\n.recaptchatable #captcha_response  {\nfont-size:11pt;\n}\n.recaptcha_theme_blackglass #captcha_response,\n.recaptcha_theme_white #captcha_response {\nborder: 1px solid gray;\n}\n.recaptcha_theme_red #captcha_response {\nborder:1px solid #cca940;\n}\n.recaptcha_audio_cant_hear_link {\nfont-size:7pt;\ncolor:black;\n}\n.recaptchatable {\nline-height:1em;\nborder: 1px solid #dfdfdf !important;\n}\n.recaptcha_error_text {\ncolor:red;\n}\n'};var RecaptchaStr;function create_captcha(){setTimeout(function(){Recaptcha.create("6LezHAAAAAAAADqVjseQ3ctG3ocfQs2Elo1FTa_a","recaptchadiv_view",{theme:"custom",callback:Recaptcha.focus_response_field})},0);}
function recaptcha_init_str(){RecaptchaStr={visual_challenge:tx('rec07'),audio_challenge:tx('rec08'),refresh_btn:tx('rex09'),instructions_visual:tx('rec10'),instructions_audio:tx('rec11'),help_btn:tx('rec12'),cant_hear_this:tx('rec14'),incorrect_try_again:"Incorrect. Try again."};}
var RecaptchaOptions;var RecaptchaDefaultOptions={tabindex:0,theme:'red',callback:null,lang:'en',custom_theme_widget:null};var Recaptcha={widget:null,timer_id:-1,style_set:false,theme:null,type:'image',ajax_verify_cb:null,$:function(id){if(typeof(id)=="string"){return document.getElementById(id);}
else{return id;}},create:function(public_key,element,options){Recaptcha.destroy();if(element){Recaptcha.widget=Recaptcha.$(element);}
Recaptcha._init_options(options);Recaptcha._call_challenge(public_key);},destroy:function(){var challengefield=Recaptcha.$('recaptcha_challenge_field');if(challengefield){challengefield.parentNode.removeChild(challengefield);}
if(Recaptcha.timer_id!=-1){clearInterval(Recaptcha.timer_id);}
Recaptcha.timer_id=-1;var imagearea=Recaptcha.$('recaptcha_image');if(imagearea){imagearea.innerHTML="";}
if(Recaptcha.widget){if(Recaptcha.theme!="custom"){Recaptcha.widget.innerHTML="";}else{Recaptcha.widget.style.display="none";}
Recaptcha.widget=null;}},focus_response_field:function(){var $=Recaptcha.$;var field=$('captcha_response');try{field.focus();}catch(ignored){}},get_challenge:function(){if(typeof(RecaptchaState)=="undefined"){return null;}
return RecaptchaState.challenge;},get_response:function(){var $=Recaptcha.$;var field=$('captcha_response');if(!field){return null;}
return field.value;},ajax_verify:function(callback){Recaptcha.ajax_verify_cb=callback;var scriptURL=Recaptcha._get_api_server()+"/ajaxverify"+"?c="+encodeURIComponent(Recaptcha.get_challenge())+"&response="+encodeURIComponent(Recaptcha.get_response());Recaptcha._add_script(scriptURL);},_ajax_verify_callback:function(data){Recaptcha.ajax_verify_cb(data);},_get_api_server:function(){var protocol=window.location.protocol;var server;if(typeof(_RecaptchaOverrideApiServer)!="undefined"){server=_RecaptchaOverrideApiServer;}else if(protocol=='https:'){server="api-secure.recaptcha.net";}else{server="api.recaptcha.net";}
return protocol+"//"+server;},_call_challenge:function(public_key){var scriptURL=Recaptcha._get_api_server()+"/challenge?k="+public_key+"&ajax=1&cachestop="+Math.random();if(typeof(RecaptchaOptions.extra_challenge_params)!="undefined"){scriptURL+="&"+RecaptchaOptions.extra_challenge_params;}
Recaptcha._add_script(scriptURL);},_add_script:function(scriptURL){var scriptTag=document.createElement("script");scriptTag.type="text/javascript";scriptTag.src=scriptURL;Recaptcha._get_script_area().appendChild(scriptTag);},_get_script_area:function(){var parentElement=document.getElementsByTagName("head");if(!parentElement||parentElement.length<1){parentElement=document.body;}
else{parentElement=parentElement[0];}
return parentElement;},_init_options:function(opts){var comb_opt=RecaptchaDefaultOptions;var user_opts=opts||{};for(var p in user_opts){comb_opt[p]=user_opts[p];}
RecaptchaOptions=comb_opt;},challenge_callback:function(){var element=Recaptcha.widget;Recaptcha._reset_timer();if(window.addEventListener){window.addEventListener('unload',function(e){Recaptcha.destroy();},false);}
if(Recaptcha._is_ie()&&window.attachEvent){window.attachEvent('onbeforeunload',function(){});}
if(navigator.userAgent.indexOf("KHTML")>0){var iframe=document.createElement('iframe');iframe.src="about:blank";iframe.style.height="0px";iframe.style.width="0px";iframe.style.visibility="hidden";iframe.style.border="none";var textNode=document.createTextNode("This frame prevents back/forward cache problems in Safari.");iframe.appendChild(textNode);document.body.appendChild(iframe);}
Recaptcha._finish_widget();},_add_css:function(css){var styleTag=document.createElement("style");styleTag.type="text/css";if(styleTag.styleSheet){if(navigator.appVersion.indexOf("MSIE 5")!=-1){document.write("<style type='text/css'>"+css+"</style>");}
else{styleTag.styleSheet.cssText=css;}}else if(navigator.appVersion.indexOf("MSIE 5")!=-1){document.write("<style type='text/css'>"+css+"</style>");}
else{var textNode=document.createTextNode(css);styleTag.appendChild(textNode);}
Recaptcha._get_script_area().appendChild(styleTag);},_set_style:function(css){if(Recaptcha.style_set){return;}
Recaptcha.style_set=true;Recaptcha._add_css(css+"\n\n"+".recaptcha_is_showing_audio .recaptcha_only_if_image,"+".recaptcha_isnot_showing_audio .recaptcha_only_if_audio,"+".recaptcha_had_incorrect_sol .recaptcha_only_if_no_incorrect_sol,"+".recaptcha_nothad_incorrect_sol .recaptcha_only_if_incorrect_sol"+"{display:none !important}");},_init_builtin_theme:function(){var $=Recaptcha.$;var $_=RecaptchaStr;var $ST=RecaptchaState;var css,html,imgfmt;var server_no_slash=$ST.server;if(server_no_slash[server_no_slash.length-1]=="/")
server_no_slash=server_no_slash.substring(0,server_no_slash.length-1);var IMGROOT=server_no_slash+"/img/"+Recaptcha.theme;if(Recaptcha.theme=='clean'){css=RecaptchaTemplates.CleanCss;html=RecaptchaTemplates.CleanHtml;imgfmt='png';}
else{css=RecaptchaTemplates.VertCss;html=RecaptchaTemplates.VertHtml;imgfmt='gif';}
css=css.replace(/IMGROOT/g,IMGROOT);Recaptcha._set_style(css);Recaptcha.widget.innerHTML="<div id='recaptcha_area'>"+html+"</div>";$('recaptcha_reload').src=IMGROOT+"/refresh."+imgfmt;$('recaptcha_switch_audio').src=IMGROOT+"/audio."+imgfmt;$('recaptcha_switch_img').src=IMGROOT+"/text."+imgfmt;$('recaptcha_whatsthis').src=IMGROOT+"/help."+imgfmt;if(Recaptcha.theme=='clean'){$('recaptcha_logo').src=IMGROOT+"/logo."+imgfmt;$('recaptcha_tagline').src=IMGROOT+"/tagline."+imgfmt;}
$('recaptcha_reload').alt=$_.refresh_btn;$('recaptcha_switch_audio').alt=$_.audio_challenge;$('recaptcha_switch_img').alt=$_.visual_challenge;$('recaptcha_whatsthis').alt=$_.help_btn;$('recaptcha_reload_btn').href="javascript:Recaptcha.reload ();";$('recaptcha_reload_btn').title=$_.refresh_btn;$('recaptcha_switch_audio_btn').href="javascript:Recaptcha.switch_type('audio');";$('recaptcha_switch_audio_btn').title=$_.audio_challenge;$('recaptcha_switch_img_btn').href="javascript:Recaptcha.switch_type('image');";$('recaptcha_switch_img_btn').title=$_.visual_challenge;$('recaptcha_whatsthis_btn').href=Recaptcha._get_help_link();$('recaptcha_whatsthis_btn').target="_blank";$('recaptcha_whatsthis_btn').title=$_.help_btn;$('recaptcha_whatsthis_btn').onclick=function(){Recaptcha.showhelp();return false;};$('recaptcha_table').className="recaptchatable "+"recaptcha_theme_"+Recaptcha.theme;if($("recaptcha_instructions_image")){$("recaptcha_instructions_image").appendChild(document.createTextNode($_.instructions_visual));}
if($("recaptcha_instructions_audio")){$("recaptcha_instructions_audio").appendChild(document.createTextNode($_.instructions_audio));}
if($("recaptcha_instructions_error")){$("recaptcha_instructions_error").appendChild(document.createTextNode($_.incorrect_try_again));}},_finish_widget:function(){var $=Recaptcha.$;var $_=RecaptchaStr;var $ST=RecaptchaState;var $OPT=RecaptchaOptions;var theme=$OPT.theme;switch(theme){case'red':case'white':case'blackglass':case'clean':case'custom':break;default:theme='red';break;}
if(!Recaptcha.theme){Recaptcha.theme=theme;}
if(Recaptcha.theme!="custom"){Recaptcha._init_builtin_theme();}else{Recaptcha._set_style("");}
var challengeField=document.createElement("input");challengeField.type="password";challengeField.setAttribute("autocomplete","off");challengeField.style.display="none";challengeField.name="recaptcha_challenge_field";challengeField.id="recaptcha_challenge_field";$('captcha_response').parentNode.insertBefore(challengeField,$('captcha_response'));$('captcha_response').setAttribute("autocomplete","off");$('recaptcha_image').style.width='300px';$('recaptcha_image').style.height='57px';Recaptcha.should_focus=false;Recaptcha._set_challenge($ST.challenge,'image');if($OPT.tabindex){$('captcha_response').tabIndex=$OPT.tabindex;}
if(Recaptcha.widget){Recaptcha.widget.style.display='';}
if($OPT.callback){$OPT.callback();}},switch_type:function(new_type){var $C=Recaptcha;$C.type=new_type;$C.reload($C.type=='audio'?'a':'v');},reload:function(reason){var $C=Recaptcha;var $=$C.$;var $ST=RecaptchaState;if(typeof(reason)=="undefined")
reason='r';var scriptURL=$ST.server+"reload?c="+$ST.challenge+"&k="+$ST.site+"&reason="+reason+"&type="+$C.type;if(typeof(RecaptchaOptions.extra_challenge_params)!="undefined"){scriptURL+="&"+RecaptchaOptions.extra_challenge_params;}
$C.should_focus=reason!='t';$C._add_script(scriptURL);},finish_reload:function(new_challenge,type){RecaptchaState.is_incorrect=false;Recaptcha._set_challenge(new_challenge,type);},_set_challenge:function(new_challenge,type)
{var $C=Recaptcha;var $ST=RecaptchaState;var $=$C.$;$ST.challenge=new_challenge;$C.type=type;$('recaptcha_challenge_field').value=$ST.challenge;$('recaptcha_challenge_field').defaultValue=$ST.challenge;$('recaptcha_image').innerHtml="";if(type=='audio'){var wavurl=$ST.server+"image?c="+$ST.challenge;var httpwavurl=wavurl;if(httpwavurl.indexOf("https://")==0){httpwavurl="http://"+httpwavurl.substring(8);}
var embedCode;if($C._is_ie()){embedCode='<object height="40" CLASSID="CLSID:6BF52A52-394A-11d3-B153-00C04F79FAA6" src="'+httpwavurl+'" ><param name="URL" value="'+httpwavurl+'"><param name="autoStart" value="true"><param name="uimode" value="mini"></object>';}else{embedCode='<EMBED SRC="'+wavurl+'" height="40" bgcolor="white" AUTOSTART="true"/>';}
var cantHearCode='<br/><a class="recaptcha_audio_cant_hear_link" target="_blank" href="'+httpwavurl+'">'+RecaptchaStr.cant_hear_this+'</a>';$("recaptcha_image").innerHTML=embedCode+cantHearCode;}else if(type=='image'){var imageurl=$ST.server+'image?c='+$ST.challenge;$('recaptcha_image').innerHTML="<img style='display:block;' height='57' width='300' src='"+imageurl+"'/>";}
Recaptcha._css_toggle("recaptcha_had_incorrect_sol","recaptcha_nothad_incorrect_sol",$ST.is_incorrect);Recaptcha._css_toggle("recaptcha_is_showing_audio","recaptcha_isnot_showing_audio",type=='audio');$C._clear_input();if($C.should_focus){$C.focus_response_field();}
$C._reset_timer();},_reset_timer:function(){var $ST=RecaptchaState;clearInterval(Recaptcha.timer_id);Recaptcha.timer_id=setInterval("Recaptcha.reload('t');",($ST.timeout-60*5)*1000);},showhelp:function(){window.open(Recaptcha._get_help_link(),"recaptcha_popup","width=460,height=570,location=no,menubar=no,status=no,toolbar=no,scrollbars=yes,resizable=yes");},_clear_input:function(){var resp=Recaptcha.$('captcha_response');resp.value="";},_displayerror:function(msg){var $=Recaptcha.$;$('recaptcha_image').innerHTML='';$('recaptcha_image').appendChild(document.createTextNode(msg));},reloaderror:function(msg){Recaptcha._displayerror(msg);},_is_ie:function(){return(navigator.userAgent.indexOf("MSIE")>0)&&!window.opera;},_css_toggle:function(classT,classF,isset){var element=Recaptcha.widget;if(!element)
element=document.body;var classname=element.className;classname=classname.replace(new RegExp("(^|\\s+)"+classT+"(\\s+|$)"),' ');classname=classname.replace(new RegExp("(^|\\s+)"+classF+"(\\s+|$)"),' ');classname+=" "+(isset?classT:classF);element.className=classname;},_get_help_link:function(){var lang=RecaptchaOptions.lang;return'http://recaptcha.net/popuphelp/'+(lang=='en'?"":(lang+".html"));}};function captcha_whatsthis(obj){var dialog=new contextual_dialog();dialog.set_context(obj);var provider_link='<a onclick="window.open(\'http://recaptcha.net/popuphelp/\',\'recaptcha_popup\',\'width=460,height=570,location=no,menubar=no,status=no,toolbar=no,scrollbars=yes,resizable=yes\')">'+'ReCaptcha</a>';var content='<div class="captcha_popup" style="padding: 5px;">'+
tx('rec16')+'<br/><br/>'+
tx('rec17',{'provider_link':provider_link})+'</div>';dialog.show_message(tx('rec18'),content);dialog.reset_iframe();}
if(typeof(ScriptInventory)!='undefined'){ScriptInventory.addScript&&ScriptInventory.addScript("\/var\/releases\/thefacebook-r82587-02122008\/www\/html\/js\/recaptcha_ajax.js","79095",1203052595);}

function select_languages(action){if(action=='show_first'){$('default_lang').innerHTML='';show($('first_lang'));hide($('change_lang_link'));}else if(action=='show_both'){$('default_lang').innerHTML='';show($('first_lang'));show($('second_lang'));hide($('change_lang_link'));hide($('add_another_link'));}else if(action=='add_another'){show($('second_lang'));show($('conjunction'));hide($('add_another_link'));set_invite_locales('second');}else if(action=='remove'){hide($('second_lang'));show($('first_lang'));show($('add_another_link'));hide($('conjunction'));$('locales[1]').value=0;}}
function set_invite_locales(firstOrSecond){if(firstOrSecond=='first'){$('locales[0]').value=get_form_select_value($('invite_lang[0]'));}else if(firstOrSecond='second'){$('locales[1]').value=get_form_select_value($('invite_lang[1]'));}}
if(typeof(ScriptInventory)!='undefined'){ScriptInventory.addScript&&ScriptInventory.addScript("\/var\/releases\/thefacebook-r82587-02122008\/www\/html\/js\/invite.js","82877",1203052591);}

} catch(ex) {
  debug_rlog(ex,true);
}

deadmanSafety = true;