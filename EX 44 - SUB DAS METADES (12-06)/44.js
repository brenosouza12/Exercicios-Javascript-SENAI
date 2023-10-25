//Desenvolva um programa que o usuário digite 10 números positivos e inteiros,
// ao final mostre o valor do resultado do somatório da primeira metade dos números menos o somatório da segunda metade. 
//(Somatório da primeira metade - Somatório da segunda metade)

let vetorNumeros = []
let numeroAdd
let prMetade = 0
let sgMetade = 0
let sub

    for(i = 0; i < 10;i++){

        numeroAdd = Number(prompt("Digite um numero: "))
        vetorNumeros.push(numeroAdd)
         
          if(i < 5){
             
              prMetade += prMetade += numeroAdd

          }else{

            sgMetade += sgMetade += numeroAdd
             
          }

    }

    sub = prMetade - sgMetade

    alert (sub)

    