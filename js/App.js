/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', function () {
	console.log('callback - particles.js config loaded');
});

$(document).ready(function () {

	/* Muestra el loader view mientras durante 2 segundos para dar 
	tiempo a la carga del contenido */
	setTimeout(function () {
		$('.loader').remove();
	}, 2000);

	$('.landing').animatedHeadline({
		animationType: 'clip'
	});

	$(window).on('scroll', function () {
		var menu_area = $('.nav-area');
		if ($(window).scrollTop() > 200) {
			menu_area.addClass('sticky_navigation');
		} else {
			menu_area.removeClass('sticky_navigation');
		}
	});

	let menu_toggler = $('#navbar')[0];
	let sticky = menu_toggler.offsetTop;

	/* Hace que el menu toggler button se ancla en la pantalla al empezar a scrollear */
    /* $(this).scroll(function () {
        if (window.pageYOffset > sticky) {
            menu_toggler.classList.add("sticky");
        } else {
            menu_toggler.classList.remove("sticky");
        }
    });
 */
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