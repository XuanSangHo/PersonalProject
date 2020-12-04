$(document).ready(function() {
	$(".menu li").hover(function(){
		$(this).find("ul:first").slideDown(500);
	}, function(){
		$(this).find("ul:first").hide(300);
	});
});