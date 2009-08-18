$(document).ready(function(){


$('a#about').click(function(){

$('div#about_post').show().animate({opacity: 1}, 0);
$('div#posts.main').animate({opacity: 0}, 500).slideUp(1000);

});

$('div#close_about').find('a').click(function(){
$('div#posts.main').animate({opacity: 1}, 2000).show();
$('div#about_post').animate({opacity: 0}, 500).slideUp(2000);

});


    if (window.location.href.indexOf("#about") != -1) {
        $('a#about').trigger('click');
    }



//Larger thumbnail preview 

$("ul.thumb li").hover(function() {
	$(this).css({'z-index' : '10'});
	$(this).find('img').addClass("hover").stop()
		.animate({
			marginTop: '-110px', 
			marginLeft: '-110px', 
			top: '50%', 
			left: '50%', 
			width: '174px', 
			height: '174px',
			padding: '20px' 
		}, 200);
	
	} , function() {
	$(this).css({'z-index' : '0'});
	$(this).find('img').removeClass("hover").stop()
		.animate({
			marginTop: '0', 
			marginLeft: '0',
			top: '0', 
			left: '0', 
			width: '100px', 
			height: '100px', 
			padding: '5px'
		}, 400);
});

//Swap Image on Click
	$("ul.thumb li a").click(function() {
		
		var mainImage = $(this).attr("href"); //Find Image Name
		$("#main_view img").attr({ src: mainImage });
		return false;		
	});
 
});
