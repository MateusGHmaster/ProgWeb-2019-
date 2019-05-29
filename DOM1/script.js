document.getElementById("btn").onclick = function(){

	var r = document.getElementById("raio").value;

	var area = Math.PI * r * r;
	var circ = 2 * Math.PI * r;

	document.getElementById("area").value = area.toFixed(2);
	document.getElementById("circ").value = circ.toFixed(2);
