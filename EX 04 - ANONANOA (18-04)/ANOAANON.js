let anoBirth
let anoCurrent
let IdadeAnos
let IdadeSemanas
let IdadeDias
let IdadeMeses
let Idade
anoBirth = Number(prompt("Digite o ano que tu nasceu, meu caro gafanhoto: "))
anoCurrent = Number(prompt("Digite o ano atual: "))

Idade = anoCurrent-anoBirth


IdadeAnos = anoCurrent - anoBirth
IdadeMeses = Idade * 12
IdadeSemanas = Idade * 52
IdadeDias = Idade * 365
alert(`Idade em anos: ${IdadeAnos}`)
alert(`Idade em meses: ${IdadeMeses}`)
alert(`Idade em semanas: ${IdadeSemanas}`)
alert(`Idade em dias: ${IdadeDias}`)