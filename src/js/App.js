$(document).ready(function () {

	/* FLADECLASS CHANGE */

	/* Muestra el loader view mientras durante 2 segundos para dar 
	tiempo a la carga del contenido */
	setTimeout(function () {
		$('.loader').fadeOut("slow", function() {
			$(this).remove();
		});
	}, 2000);

	$('.landing-text').animatedHeadline({
		animationType: 'clip'
	});

	let navbar = $('.navbar')[0];

    /* Hace que el menu toggler button se ancle en la pantalla al empezar a scrollear */
    $(this).scroll(function () {
        if (window.pageYOffset > 200) {
            navbar.classList.add("fixed-navbar");
        } else {
            navbar.classList.remove("fixed-navbar");
        }
    });

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