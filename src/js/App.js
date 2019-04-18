$(document).ready(function () {

	/* FLADECLASS CHANGE */

	/* Muestra el loader view mientras durante 2 segundos para dar 
	tiempo a la carga del contenido */
	setTimeout(function () {
		$('.loader').remove();
	}, 2000);

	$('.landing').animatedHeadline({
		animationType: 'clip'
	});

	/* $(window).on('scroll', function () {
		var menu_area = $('.nav-area');
		if ($(window).scrollTop() > 200) {
			menu_area.addClass('sticky_navigation');
		} else {
			menu_area.removeClass('sticky_navigation');
		}
	}); */

	/* var sections      = $('section');
	var navbar        =	$('#nav');
	var navbarHeight  = navbar.height();

	var sectionOffset = [];

	sections.each(function() {
		var section = $(this);

        var position = section.offset().top - navbarHeight;
        var backgroundColor = section.css("background-color");

        sectionOffset.push({'postion': position,'color': backgroundColor});
       
    });

	$(window).on('scroll', function(){
		var scrollPos = $(document).scrollTop();

		$.each(sectionOffset, function(index, section){
			if (scrollPos >= section.postion) {
				navbar.css("background-color", section.color);
			}
		}) 
	}); */

});