

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
	$('nav > .3').click(function() {
		window.open('https://outinsideout.github.io/Portfolio/cv.html', '_blank');
	});
	$('nav > .4').click(function() {
		window.open('https://github.com/outInsideOut', '_blank');
	});
	$('nav > .5').click(function() {
		window.open('https://www.linkedin.com/in/fionn-o-connor-a117071b7/', '_blank');
	});
	$('#ChadPi .image').click(function() {
		window.open('https://dreamingspires.dev', '_blank');
	});
	$('#dreamingSpires .image').click(function() {
		window.open('https://dreamingspires.dev', '_blank');
	});
	$('#fractions .image').click(function() {
		window.open('https://github.com/outInsideOut/fractions', '_blank');
	});
	$('#RasPiMC .image').click(function() {
		window.open('https://github.com/outInsideOut/RaspberryPiMinecraft', '_blank');
	});
	$('#SmartSudoku .image').click(function() {
		window.open('https://github.com/outInsideOut/SmartSudoku', '_blank');
	});
	$('#Timer .image').click(function(){
		window.open('https://github.com/outInsideOut/Timers---A-CPP-Static-Library', '_blank');
	});
	$('#BST .image').click(function(){
		window.open('https://github.com/outInsideOut/CPP_tree', '_blank');
	});
	$('#compCalc .image').click(function(){
		window.open('https://codepen.io/outInsideout/full/RJBbQw', '_blank');
	});
	$('#proGlide .image').click(function(){
		window.open('https://proglidelincoln.co.uk', '_blank');
	});
	$('#sudokuSolver .image').click(function() {
		window.open('https://github.com/outInsideOut/SudokuSolver', '_blank');
	});
	$('#checkbox').click(function(){
		console.log("checked");
		if (this.checked) {
			$('.index').css('background-color', '#333')
			console.log("checked");
		} else { $('.index').css('background-color', '#efefef')}
	});
});
