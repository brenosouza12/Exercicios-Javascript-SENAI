let distanciaPercorrida
let tempoTrilhas
let velocidadeMedia


distanciaPercorrida = Number(prompt("Você percorreu quantos kms: "))
tempoTrilhas = Number(prompt("O tempo da trihas em horas: "))

velocidadeMedia=distanciaPercorrida/tempoTrilhas


alert(`Sua média de velocidade durante essa trilha foi de ${velocidadeMedia} km/h`)