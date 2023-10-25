// Criar um programa que gere um vetor com 10 números inteiros aleatórios entre 0 e 20. 
// Mostre o vetor na tela. O vetor não pode conter números repetidos.

let vetorAleatorios = []
let numeroAleatorio
let numeroExiste = false

let vetorGerados = []
let contagemGerados = 0


    for(i = 0; i < 10; i++){
    
        do{

            numeroExiste = false

            numeroAleatorio = Math.floor(Math.random() * 21)
    
            for(j = 0; j < vetorAleatorios.length; j++){

                if(numeroAleatorio == vetorAleatorios[j]){
     
                    numeroExiste = true
		    vetorGerados.push(numeroAleatorio)
		    contagemGerados++
     
                }
    
            }
                
        }while(numeroExiste)    
            
        vetorGerados.push(numeroAleatorio)
        vetorAleatorios.push(numeroAleatorio)
        contagemGerados++

    }

alert(`Vetor: ${vetorAleatorios}\n\nQuantidade Gerados: ${contagemGerados}\nGerados: ${vetorGerados}`)
