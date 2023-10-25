/*Faça um programa que solicite ao usuário digitar 5 números e mostre a soma da multiplicação dos números pelo maior número digitado. 
(Exemplo: pegar os 4 números digitados que não são o maior e multiplicá-los individualmente pelo maior. 
Mostrar a soma das multiplicações).*/

let numeros = []
let numero = []
let maiorNumero = []
let somaMult = 0

   for(i = 0;i < 5;i++){

      numero = Number(prompt("Digite um numero: "))
      numeros.push(numero)

   }
   
   maiorNumero = Math.max(...numeros)

   for(i = 0; i < 5;i++){

      if(numeros[i]!== maiorNumero){

          somaMult += numeros[i] * maiorNumero

      }

   }

   alert("A soma das multiplicações é: " + somaMult)
 
