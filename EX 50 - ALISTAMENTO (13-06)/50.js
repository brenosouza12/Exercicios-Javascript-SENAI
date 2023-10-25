/*Em cidades menores, o alistamento para o exército acontece esporadicamente ao longo dos anos. 
Criar um programa no qual pergunte ao usuário se houve alistamento dos anos 2000 a 2009, uma pergunta para cada ano. 
Se houve alistamento deve ser digitado “S” e se não houve alistamento “N”. 
Após digitar tudo, deve-se mostrar na tela o último ano que houve alistamento. 
Caso não tenha ocorrido alistamento, mostrar “Não houve alistamento nos últimos 10 anos”*/


let alistamentoChar = []
let ultimoAnoAlistamento = []
let resposta = []

  for(let ano = 2000;ano <= 2009;ano++){

      resposta = prompt("Houve alistamento no ano" + ano + "? (S/N)")

  }

  alistamentoChar.push(resposta)

    for(i = 0;i < alistamentoChar.length;i++){

        if(alistamentoChar[i === "s"]){
            
            ultimoAnoAlistamento = 2000 + i

        }

    }

        if(ultimoAnoAlistamento !== -1){

           alert("O ultimo ano de alistamento foi" + ultimoAnoAlistamento);

        }else{

           alert("Não houve alistamento no ultimos 10 anos")

        }
        
    