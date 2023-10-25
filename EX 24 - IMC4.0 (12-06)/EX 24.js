let alturaCharacter
let pesoCharacter

   alturaCharacter = Number(prompt("Digite sua altura: "))
   pesoCharacter = Number(prompt("Digite seu peso: "))

let imc = pesoCharacter/(alturaCharacter * alturaCharacter)

let mensagem = ""

      if(imc < 18){

         mensagem = "Você esta abaixo do peso. ";

      }else if (imc >= 18 && imc <= 25){

         mensagem = "Você esta na faixa do peso ideal. ";

      }else{
         
         mensagem = "Você esta acima do peso. "

      }

      alert('Seu IMC é: ' + imc.toFixed(2));
      alert(mensagem)