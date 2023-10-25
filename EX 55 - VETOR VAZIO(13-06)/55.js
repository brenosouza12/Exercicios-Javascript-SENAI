/*Faça um programa que crie um vetor vazio.
 Esse programa deve perguntar qual opção o usuário deseja (1, 2, 3, 0) e as opções devem executar as tarefas abaixo. 
======== MENU ========
1- Cadastrar nome
2- Excluir um nome
3- Editar um nome
4- Pesquisar se um nome está cadastrado
5- Listar todos os nomes cadastrados
0- Sair do programa*/


let nomes = []
let opcao
let novoNome
let nomeExcluir
let indiceExcluir
let nomeEditar
let indiceEditar
let novoNomeEditado
let nomePesquisar

   while(true){

    alert("======== MENU DO PROGRAMA ========")
    alert(`1.Cadastrar nome\n2.Excluir um nome\n3.Editar um nome\n4.Pesquisar se um nome está cadastrado\n5.Listar todos os nomes cadastrados\n0.Sair do programa`)
    

   

   opcao = prompt ("Digite a opção desejada: ")


        if (opcao === "0") {
          
          alert("Saindo do programa, tente novamente em outro momento");
           break;
           
        } 

     switch(opcao){

         case "1":

            novoNome = prompt("Digite o nome a ser cadastrado: ")
            nomes.push(novoNome)
            alert("Nome cadastrado com sucesso")
            break;

         case "2":

            nomeExcluir = prompt("Digite o nome a ser excluido: ")
            indiceExcluir = nomes.indexOf(nomeExcluir)
              if(indiceExcluir !== - 1){
                
                nomes.splice(indiceExcluir, 1);
                alert("Nome excluido com sucesso!")

              }else{
               
                alert("O nome não esta cadastrado")

              }
              break;

         case "3":

             nomeEditar = prompt("Digite o nome a ser editado: ")
             indiceEditar = nomes.indexOf(nomeEditar)
             if(indiceEditar !== -1){

               novoNomeEditado = prompt("Digite o novo nome: ")
               nomes[indiceEditar] = novoNomeEditado;
               alert("Nome editado com sucesso!")

             }else{

               alert("O nome não esta cadastrado")

             }
             break;

         case "4":
            
             nomePesquisar = prompt("Digite o nome a ser pesquisado: ")
              if(nomes.includes(nomePesquisar)){
               
               alert("O nome esta cadastrado!")

              }else{

               alert("O nome não esta cadastrado!")

              }
              break;
              
         case "5":
              
               if(nomes.length > 0){
                  
                alert("Nomes cadastrados: ")
                 for(i = 0; i < nomes.length;i++){
                    
                  alert(nomes[i])

                 }

               }else{

                  alert("Nenhum nome cadastrado!")

               }
               break;

         case "0":
               
             alert("Saindo do programa, tente novamente em outro momento")
             break;

         default:
          
             alert("Errouuuu! Tente novamente")
             break;

            }
          }    
              