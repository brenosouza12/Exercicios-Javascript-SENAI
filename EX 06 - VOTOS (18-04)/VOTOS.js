let TotalEleitores
let VotosCand1
let VotosCand2
let VotosNulos
let VotosBrancos
let PercentualC1
let PercentualC2
let PercentualN
let PercentualB

TotalEleitores = Number(prompt("Digite a quantidade de eleitores: "))
VotosCand1 = Number(prompt("Digite o número de votos do candidato 1: "))
VotosCand2 = Number(prompt("Digite o número de votos do candidato 2: "))
VotosNulos = Number(prompt("Digite o número de votos nulos: "))
VotosBrancos = Number(prompt("Digite o número de votos brancos: "))

PercentualC1=VotosCand1*(TotalEleitores/100)
alert("O percentual de pessoas que votou no candidato 1 é:" +PercentualC1)
PercentualC2=VotosCand2*(TotalEleitores/100)
alert("O percentual de pessoas que votou no candidato 2 é:" +PercentualC2)
PercentualN=VotosNulos*(TotalEleitores/100)
alert("O percentual de pessoas que votou nulo é:" +PercentualN)
PercentualB=VotosBrancos*(TotalEleitores/100)
alert("O percentual de pessoas que votou branco é:" +PercentualB)