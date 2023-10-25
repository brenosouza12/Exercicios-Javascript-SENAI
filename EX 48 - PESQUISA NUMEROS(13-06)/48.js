let vetorNumeros = [4, 10, 7, 8 , 8, 9, 6, 8, 4, 5]
let numeroPesquisado
let resultado = '>>>> Índices que o número aparece <<<<\n\n'
// let vetorIndices = []
let numeroEncontrado = false

    numeroPesquisado = Number(prompt("Digite um número: "))

    for(i = 0; i < vetorNumeros.length; i++){

        if(numeroPesquisado == vetorNumeros[i]){

            resultado += `Índice: ${i}\n`
            numeroEncontrado = true
            // vetorIndices.push(i)

        }

    }

    if(!numeroEncontrado){

        resultado += `Não localizamos o número! :(`

    }

// alert("Índices: " + vetorIndices)
alert(resultado)

