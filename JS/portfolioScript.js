

$(document).ready(function(){
	$('nav ul').click(function(){
		console.log(this.getAttribute('class'))
		
		if (this.getAttribute('class') == '1') {
			$('html, body').animate({
				scrollTop: 0
			}, 800)
		}
		else if (this.getAttribute('class') == '2') {
			var scrollHeight = $('.myWork').offset().top - 50;
			$('html, body').animate({

				scrollTop: scrollHeight
			}, 800)
		};
		//some code for 3
	});
	var navTop = $('nav').offset().top;
	$(window).scroll(function() {
		console.log('scrolling')
		if($(window).scrollTop() >= navTop){
			console.log(navTop)
			$('nav').addClass('sticky')
		} else {
			$('nav').removeClass('sticky')
		};
	});
	$('#compCalc .image').click(function(){
		window.open('https://codepen.io/outInsideout/full/RJBbQw', '_blank');
	});
	$('#checkbox').click(function(){
		console.log("checked");
		if (this.checked) {
			$('.index').css('background-color', '#333')
			console.log("checked");
		} else { $('.index').css('background-color', '#3DD9D9')}
	});
});