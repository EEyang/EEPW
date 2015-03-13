$(document).ready(function() {

	$('#about').click(function() {
		console.log("Hello World!");
		$('html, body').animate( {
			scrollTop: $('.marketing').offset().top-100
		}, 1000);
	});


});