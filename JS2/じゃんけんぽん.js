var a = parseInt(prompt())

resultado = 0

while(a>0 && a<4){
	console.log("Escolha a sua jogada:\n1 - Pedra\n2 - Papel\n3 - Tesoura")
	var r = Math.ceil(Math.random()*3)
	if (r == 1){
		console.log("O computador jogou Pedra\n")
	}
	if (r ==2 ){
		console.log("O computador jogou Papel\n")
	}
	if (r == 3){
		console.log("O computador jogou Tesoura\n")
	}
	if (a == r){
		console.log("O jogo empatou!\n")
	}
	if (a == 1 && r == 2){
		console.log("Você perdeu, seu fracassado!\n")
		console.log ("Seu resultado foi de " + resultado + " pontos!")
		break
	}
	if (a == 1 && r == 3){
		console.log("Você ganhou, seu lindo!\n")
		resultado = resultado + 1
	}
	if (a == 2 && r == 1){
		console.log("Você ganhou, seu lindo!\n")
		resultado = resultado + 1
	}
	if (a == 2 && r == 3){
		console.log("Você perdeu, seu fracassado!\n")
		console.log ("Seu resultado foi de " + resultado + " pontos!")
		break
	}
	if (a == 3 && r ==1){
		console.log("Você perdeu, seu fracassado!\n")
		console.log ("Seu resultado foi de " + resultado + " pontos!")
		break
	}
	if (a == 3 && r ==2){
		console.log("Você ganhou, seu lindo!\n")
		resultado = resultado + 1
	}
	a = parseInt(prompt())
}

