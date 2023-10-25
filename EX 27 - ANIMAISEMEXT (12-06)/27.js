
let nomeEspecie = prompt("Digite o nome da espécie:");
let populacao = Number(prompt("Digite a população da espécie:"));


let classificacao;
if (populacao >= 200 && populacao <= 500) {

  classificacao = "Espécie criticamente em perigo";

} else if (populacao > 500 && populacao <= 1000) {

  classificacao = "Espécie em perigo";

} else if (populacao > 1000 && populacao <= 5000) {

  classificacao = "Espécie vulnerável!";

} else {

  classificacao = "Espécie não classificada";
  
}


alert("Espécie: " + nomeEspecie + "\nClassificação: " + classificacao);
