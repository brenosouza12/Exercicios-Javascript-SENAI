// Desenvolver um programa que peça ao usuário o número de doenças a cadastrar,
// no qual ele deve cadastrar o nome da doença e se ela é transmitida por vírus, bactéria ou por ambos. 
//Ao final, mostrar quatro listas:
// doenças transmitidas por vírus, doenças transmitidas por bactérias, doenças transmitidas por ambos, lista com todas doenças.

let numeroDoencas
let nomeDoencas 
let transmicaoDoencas
let virus = []
let bacteria = []
let ambos = []
let todos = []

numeroDoencas = Number(prompt("Digite quantas doenças você deseja cadastrar: "))

   for(i = 0;i < numeroDoencas;i++){

         nomeDoencas = prompt("Nome da doença: ")
         transmicaoDoencas =  prompt("É transmitida por virus,bacteria ou ambos? ")
        
         todos.push(nomeDoencas)

         if(transmicaoDoencas == 'bacteria'){

            bacteria.push(nomeDoencas)
            
         }
   
         if(transmicaoDoencas == 'virus'){
      
           virus.push(nomeDoencas)
           
         }

         if(transmicaoDoencas == 'ambos'){

            ambos.push(nomeDoencas)

         }

   }

   alert('As doenças transmitidas por bacterias: ' + bacteria)

   alert('As doenças transmitidas por virus: ' + virus)

   alert('As doenças transmitidas por ambos: ' + ambos)

   alert(`Todas as doenças são: ${bacteria},${virus},${ambos}`)
