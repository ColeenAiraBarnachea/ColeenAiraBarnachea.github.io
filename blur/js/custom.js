$(document).ready(function() {
	
	// Nivo slider
	$('#slideshow').nivoSlider({
		effect: 'random',
		slices: 10,
		animSpeed: 500,
		pauseTime: 5000,
		directionNav: true, //Next & Prev
		directionNavHide: true, //Only show on hover
		controlNav: true, //1,2,3...
		keyboardNav: true, //Use left & right arrows
		captionOpacity: 1, //Universal caption opacity
		pauseOnHover: true //Stop animation while hovering
	});
	
	$('#slideshow').find('.nivo-slice:first').addClass('roundleft');
	$('#slideshow').find('.nivo-slice:last').addClass('roundright');
	
	
	
	// Fancy modals
	$("a.fancybox, #portfolio .project_small a").fancybox({
		'overlayOpacity' : 0.5,
		'overlayColor'	 : '#000'
	});
	
	
	$("#portfolio .project_small.video a").click(function() {
		$.fancybox({
			'padding'		: 0,
			'autoScale'		: false,
			'transitionIn'	: 'none',
			'transitionOut'	: 'none',
			'title'			: this.title,
			'width'			: 640,
			'height'		: 360,
			'href'			: this.href.replace(new RegExp("([0-9])","i"),'moogaloop.swf?clip_id=$1'),
			'type'			: 'swf'
		});
	
		return false;
	});



	// Pagetitle search bar
	$('.pagetitle form input.text').click(function() { $(this).attr('value', ''); });
	
	
	
	// Portfolio filter
	$('#portfolio_filter a').click(function() {
		if(!($(this).parent().hasClass('active'))) {
			$(this).parents('ul').find('.active').removeClass('active');
			$(this).parent().addClass('active');
		
			var i;
			var type = $(this).attr('class');
			
			if(type == 'all') {
				$('#portfolio .project_small').fadeIn();
				i = 0;
				$('#portfolio .project_small').each(function() {
					$(this).removeClass('middle').find('a').attr('rel', 'portfolio');					
					if((typeof(i) == 'undefined') || i == 3) {
						i = 0;
					} else {
						if(i == 1) { $(this).addClass('middle'); }
					}	
					i++;
				});
					
			} else {
			
				$('#portfolio .project_small').each(function() {
					$(this).hide().find('a').attr('rel', '');
					if(($(this).hasClass(type))) {
						$(this).fadeIn().removeClass('middle').find('a').attr('rel', 'portfolio');		
						if((typeof(i) == 'undefined') || i == 3) {
							i = 0;
						} else {
							if(i == 1) { $(this).addClass('middle'); }
						}	
						i++;
					} else {
						$(this).hide();
					}
				});
			}
		}
		
		return false;
		
	});

	
	
	// PNG fix
	if($.browser.msie) {
		DD_belatedPNG.fix('#header h1, #holder, #content blockquote, #content form input.text, #content form textarea, .blogpost .cmntshead .rss, #services ul li h3, .project_small, #logos li img, #footer .left a, .nivo-controlNav, .nivo-controlNav a, .nivo-directionNav a');
	}
	
});