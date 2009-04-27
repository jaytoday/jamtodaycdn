//easing equation, borrowed from jQuery easing plugin
//http://gsgd.co.uk/sandbox/jquery/easing/
$.easing.easeOutQuart = function (x, t, b, c, d) {
return -c * ((t=t/d-1)*t*t*t - 1) + b;
};

var $num = $('.thecontent.li').length;
var $step = $num - 1;

$(document).ready(function() {

	
	
$(window).scroll(function(){
	
$('#sideposts').stop();
var scroll = $(window).scrollTop();
$('#sideposts').animate({top: scroll},'slow'); 

});


var $scroll = $('.thecontent');//we'll re use it a lot, so better save it to a var.



$scroll.serialScroll({
items:'li',
duration:1200,
//easing:'easeOutQuart',
lock:true,
cycle:true,
force:true,
axis:'y',
lazy:false,
interval:8000, 
step:1,  // li.length != even
start:$step,

});	





});