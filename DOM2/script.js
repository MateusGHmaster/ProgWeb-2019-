document.getElementById('desenhar').onclick = function(){

	var alturas = document.querySelectorAll('input[type=number]');
	var largura = document.getElementById('largura');

	for(var i = 0; i < 5; i++){

		document.getElementById('container').innerHTML += '<div id=barra'+ i +'></div>';

		document.getElementById('barra' + i).style.width = largura.value + 'px';
		document.getElementById('barra' + i).style.height = alturas[i].value + 'px';
	}
}
