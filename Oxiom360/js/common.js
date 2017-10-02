$(document).ready(function() {

	$(window).scroll(function() {
		if ($(this).scrollTop() > 200){  
			$('.top-line').addClass("scroll-fixed");
		}
		else{
			$('.top-line').removeClass("scroll-fixed");
		}
	});

	$(document).mouseup(function (e) {
		var container = $(".sub-menu");
		if (container.has(e.target).length === 0){
			$('.sub-menu').removeClass('active');
		}
	});

	// Dropdown menu

	$('.dropdown-open').click(function(e){
		e.preventDefault();
		$(this).next().toggleClass('active');
	});

	// $(document).mouseup(function (e) {
	// 	var container = $(".sub-menu");
	// 	if (container.has(e.target).length === 0){
	// 		$('.sub-menu').removeClass('active');
	// 	}
	// });

	$('.open-menu').click(function(e){
		e.preventDefault();
		$('#cssmenu').slideToggle();
	});

	// Accordion menu
	
	$('#cssmenu li.active').addClass('open').children('ul').show();
	$('#cssmenu li.has-sub>a').on('click', function(){
		$(this).removeAttr('href');
		var element = $(this).parent('li');
		if (element.hasClass('open')) {
			element.removeClass('open');
			element.find('li').removeClass('open');
			element.find('ul').slideUp(200);
		}
		else {
			element.addClass('open');
			element.children('ul').slideDown(200);
			element.siblings('li').children('ul').slideUp(200);
			element.siblings('li').removeClass('open');
			element.siblings('li').find('li').removeClass('open');
			element.siblings('li').find('ul').slideUp(200);
		}
	});

	$('.my-carousel').owlCarousel({
		//stagePadding: 10,
		loop:true,
		animateOut: 'fadeOut',
		nav:true,
		margin: 20,
		autoplay:true,
		autoplayTimeout:5000,
		navText : ['',''],
		autoplayHoverPause:true,
		smartSpeed: 1500,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			640:{
				items:1
			},
			900:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});

});