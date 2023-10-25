let vectorUm = []
let vectorDois = []
let vectorIntercalado = []
let numeroAdd

    for(i = 0; i < 6; i++){

        numeroAdd = Number(prompt("Digite um número: "))

        if(i < 3){

            vectorUm.push(numeroAdd)

        }else{

            vectorDois.push(numeroAdd)

        }

    }

    for(j = 0; j < 3; j++){

        vectorIntercalado.push(vectorUm[j])
        vectorIntercalado.push(vectorDois[j])

    }

    alert(vectorIntercalado)
