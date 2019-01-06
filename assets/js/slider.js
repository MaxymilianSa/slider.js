var slides = document.getElementsByClassName('solo-slide')

var prev = document.getElementById('prev');
var next = document.getElementById('next');

var line = document.getElementById('line');

var slide = 0;

prev.onclick = function(){

	slides[slide].className = 'solo-slide hide-slide';
	slide--;

	if(slide < 0){
		slide = (slides.length - 1);
	}

	slides[slide].className = 'solo-slide show-slide';
}

next.onclick = function(){

	slides[slide].className = 'solo-slide hide-slide';

	slide++;

	if(slide == slides.length){
		slide = 0;
	}

	slides[slide].className = 'solo-slide show-slide';

}

function activeSlider(){

	line.className += ' white-line-active';

	slides[slide].className = 'solo-slide hide-slide';

	slide++;

	if(slide == slides.length){
		slide = 0;
	}

	slides[slide].className = 'solo-slide show-slide';

	setTimeout(function(){line.className = 'white-line';}, 5900);
}

setTimeout(function(){line.className += ' white-line-active'}, 100);
setTimeout(function(){line.className = 'white-line';}, 5800);

setInterval(activeSlider, 6000);