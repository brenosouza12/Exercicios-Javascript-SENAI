let cidade
let tempMax = 0
let tempMin = 0
let amplitude = 0
let resultado = ""
let media
let ampSoma = 0

cidade = prompt("Digite o nome da cidade: ")

for( i = 0; i < 5 ; i++){

    tempMax = Number(prompt(`Digite a temperatura máxima:  `))
    tempMin = Number(prompt(`Digite a temperatura minima:  `))

    amplitude = tempMax - tempMin
    ampSoma = ampSoma + amplitude
    resultado = resultado + `A amplitude do dia ${i + 1} é : ${amplitude}\n `
}

media = ampSoma/5

alert (resultado)
alert (`A media será : ${media} `)





