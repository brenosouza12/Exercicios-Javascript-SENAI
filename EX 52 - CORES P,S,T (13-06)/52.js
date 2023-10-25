/*Fazer um programa no qual o usuário deve digitar as três cores primárias (amarelo, vermelho, azul) e armazenar em um vetor. 
Solicitar três vezes “Digite uma cor primária: ”.
 Em seguida deve digitar as três cores secundárias (laranja, verde, violeta) e armazenar em outro vetor.
 Solicitar três vezes “Digite uma cor secundária: ”. 
 Um novo vetor deve ser criado com cores primárias + secundárias (amarelo, vermelho, azul, laranja, verde, violeta). 
 No início dessa lista deve-se adicionar preto e no final branco. Perguntar “Adicionar no início da lista: ” e “Adicionar ao final da lista: ”.
 Mostrar na tela a sequência completa, incluindo preto e branco.*/

 let coresPrimarias = []
 let coresSecundarias = []
 let corPrimaria = []
 let corSecundaria = []
 let coresCompletas = []
 let corInicio = []
 let corFinal = []

   for(i = 0 ; i < 3; i++){

      corPrimaria = prompt("Digite uma cor primaria: ")
      coresPrimarias.push(corPrimaria)

   }

   for(i = 0;i < 3; i++){

      corSecundaria = prompt("Digite uma cor secundaria: ")
      coresSecundarias.push(corSecundaria)

   }

   coresCompletas = ["preto"].concat(coresPrimarias, coresSecundarias, "branco")

   corInicio = prompt("Adicionar no inicio da lista: ")
   coresCompletas.unshift(corInicio)

   corFinal = prompt("Adicionar ao final da lista")
   coresCompletas.push(corFinal)


   alert(coresCompletas)

   
