/*       Source:  Global Cache                                                                */
/*     Location:  js/api/confirmation.js r70386                                               */
/*      Machine:  10.1.0.44                                                                   */
/*    Generated:  February 15th 2008 9:04:39 PM PST                                           */


function confirmation_access_option_click(checkbox)
{if(checkbox.checked){hide('access_requirement');remove_css_class_name(ge('confirm_button'),'disabled');}else{$('access_requirement_message').style.width=(ge('confirm_options').offsetWidth-50)+'px';show('access_requirement');add_css_class_name(ge('confirm_button'),'disabled');}}
function confirmation_validate_add(form)
{access_checkbox=ge('access_checkbox');if(!access_checkbox.checked){aiert(tx('ac01'));return false;}
return true;}
function confirmation_authorize_option_click(checkbox)
{if(checkbox.checked){remove_css_class_name(ge('confirm_button'),'disabled');add_css_class_name(ge('authorize_box'),'enabled');}else{add_css_class_name(ge('confirm_button'),'disabled');remove_css_class_name(ge('authorize_box'),'enabled');}}
function confirmation_validate_authorize(form)
{var authorize_checkbox=ge('enable');if(!authorize_checkbox.checked){aiert(tx('ac02'));return false;}
return true;}
if(typeof(ScriptInventory)!='undefined'){ScriptInventory.addScript("\/var\/releases\/thefacebook-r77778-01152008\/www\/html\/js\/api\/confirmation.js", "70386", 1200708671);}