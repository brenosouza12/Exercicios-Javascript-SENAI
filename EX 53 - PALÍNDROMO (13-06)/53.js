/*Palíndromo é aquele elemento que, se lido de trás para frente e de frete para trás, é o mesmo. 
Exemplos: 616, 2112 2442, 87655678. 
Criar um vetor onde deve-se digitar 6 números e verificar se o vetor é palíndromo.
 (DESAFIO: fazer com 7 números e com palavras).*/

 let vetor = []
 let isPalindromo =  true;

   vetor[1] = prompt("Digite o primeiro numero: ")
   vetor[2] = prompt("Digite o segundo numero: ")
   vetor[3] = prompt("Digite o terceiro numero: ")
   vetor[4] = prompt("Digite o quarto numero: ")
   vetor[5] = prompt("Digite o quinto numero: ")
   vetor[6] = prompt("Digite o sexto numero: ")

       for(i = 0; i < vetor.length / 2;i++){

            if(vetor[i] !== vetor[vetor.length -  1 - i]){

                isPalindromo = false;
                break;

            }

       }

       if(isPalindromo){
          
         alert("O vetor é um palindromo!")

       }else{

         alert("O vetor não é um palindromo!")
    
       }