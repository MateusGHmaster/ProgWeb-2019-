var max = 8;
var cont = 0;
document.addEventListener('mousemove', function(e){
                if(cont == max){
		document.body.removeChild(document.querySelector('.dot'));
		cont = max - 1;
	}
	var dot = document.createElement('div');
	dot.className = 'dot';
	dot.style.left = e.pageX + 'px';
	dot.style.top = e.pageY + 'px';
	document.body.appendChild(dot);
	cont++;
});
