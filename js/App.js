$(document).ready(function () {

	/* Muestra el loader view durante 2 segundos para dar 
	tiempo a la carga del contenido */
	setTimeout(function () {
		$('.loader').fadeOut("slow", function () {
			$(this).remove();
		});
	}, 2000);

	/* Se inicializa las animaciones del texto del landing */
	$('.landing-text').animatedHeadline({
		animationType: 'clip'
	});

	/* Hace que el menu toggler button se ancle en la pantalla al empezar a scrollear */
	let navbar = $('#navbar')[0];
	let upButton = $('#up');
	$(this).scroll(function () {
		if (window.pageYOffset > 250) {
			navbar.classList.add("fixed-navbar");
			upButton.fadeIn('slow', function () {
				$(this).css('display', 'block');
			});
		} else {
			navbar.classList.remove("fixed-navbar");
			upButton.fadeOut('slow', function () {
				$(this).css('display', 'none');
			});
		}
	});

	/* Cuando se hace click sobre el navbar se cambiara de color para evitar problemas de lectura */
	$('#btn-menu-toggler').click(function () {
		$('.navbar').toggleClass("bg-white");
	});

	$('#up').click(function () {
		$('html, body').animate(
			keyframes = {
				scrollTop: 0
			}, options = 2000
		);
	});

	$('.nav-item').click(function() {
		$('#navbarItems').collapse('hide');
	});

	new AOS.init({
		once: true
	});

	new SmoothScroll('a[href*="#"]', {
		speed: 1500
	});

	$('#form').submit(function (e) {
		e.preventDefault();
		let formData = {
			fullname: $('#fullname').val(),
			email: $('#email').val(),
			message: $('#message').val()
		}
		
		if (fullname && email && message) {
			$.post('php/email.php', { formData }, (res) => {
				if (res == "1") {
					swal("¡Thank you so much!", "¡I'll responde as soon as I can!", "success");
					$('#form')[0].reset();
					
				} else {
					swal("¡OMG!", "¡Something is wrong with this form, Contact me for other way, Please!", "error");
				}
			});
		}
	});

});