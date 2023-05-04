function calcularTempo() {
	let listaTempos = document.getElementById("lista").value;
	let tempos = listaTempos.split(/\r?\n/);
	let totalSegundos = 0;
	for (let i = 0; i < tempos.length; i++) {
		let tempo = tempos[i].split(",");
		let minutos = parseInt(tempo[0]);
		let segundos = parseInt(tempo[1]);
		totalSegundos += minutos * 60 + segundos;
	}
	let horas = Math.floor(totalSegundos / 3600);
	let minutosRestantes = Math.floor((totalSegundos % 3600) / 60);
	let segundosRestantes = totalSegundos % 60;
	document.getElementById("resultado").innerHTML = "Tempo Total: " + horas + " horas, " + minutosRestantes + " minutos e " + segundosRestantes + " segundos.";
}


// function calcularTempo() {
// 	let minutos = parseInt(document.getElementById("minutes").value);
// 	let segundos = parseInt(document.getElementById("seconds").value);
// 	let tempoTotal = minutos * 60 + segundos;
// 	document.getElementById("resultado").innerHTML = "Tempo Total: " + tempoTotal + " segundos.";
// }
