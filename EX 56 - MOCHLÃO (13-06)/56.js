/*Você está fazendo um mochilão pela Europa e precisa saber qual a distância que vai percorrer em determinada viagem ou trecho da viagem,
 utilizando trem. 
 De Bruxelas até Berlim são 764km e de Berlim até Praga são 350km. 
 De Praga até Viena são mais 292km.
 De Viena até Budapeste, são outros 242km.
 Faça um sistema no qual o usuário digite a cidade de origem, em seguida a cidade de destino. Mostrar na tela a distância total (km) da viagem.

Bruxelas <-> Berlim = 764km
Berlim <-> Praga = 350km
Praga <-> Viena = 292km
Viena <-> Budapeste = 242km*/


let distancias = [

   [0,764,0,0],//Distâncias a partir de Bruxelas [Bruxelas, Berlim, Praga, Viena]
   [764,0,350,0],//Distâncias a partir de Berlim [Berlim, Bruxelas, Praga, Viena]
   [0,350,0,292],//Distâncias a partir de Praga [Praga, Berlim, Bruxelas, Viena]
   [0,0,292,0]//Distâncias a partir de Viena [Viena, Praga, Berlim, Bruxelas]

]

let origem = prompt("Digite a cidade de origem: ")

let destino = prompt("Digite a cidade de destino: ")

let indiceOrigem = -1
let indiceDestino = -1
let distTotal
   
    if(origem === "Bruxelas"){
   
       indiceOrigem = 0

    }else if(origem === "Berlim"){

       indiceOrigem = 1

    }else if(origem === "Praga"){

       indiceOrigem = 2

    }else if(origem === "Viena"){

       indiceOrigem = 3

    }


       if(destino === "Bruxelas"){

        indiceDestino = 0

       }else if(destino === "Berlim"){

        indiceDestino = 1

       }else if(destino === "Praga"){

        indiceDestino = 2

       }else if(destino === "Viena"){

        indiceDestino = 3

       }
          
           if(indiceOrigem !== -1 && indiceDestino !== -1){

             distTotal = distancias[indiceOrigem][indiceDestino]

              if(distTotal > 0){

               alert("A distância total da viagem é de " + distTotal + " km.")

              }else{

               alert("Não foi possível calcular a distância. Verifique as cidades digitadas, por favor :(.")

              }
              
           }else{

            alert("Cidades de origem ou destino inválidas.")

           }

   