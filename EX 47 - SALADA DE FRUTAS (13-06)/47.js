// Cria um vetor vazio para armazenar as frutas
let frutas = [];

// Loop para adicionar frutas até que seja adicionada a cereja
while (true) {
  // Pergunta ao usuário qual fruta adicionar
  let fruta = prompt("Qual fruta adicionar?");

  // Adiciona a fruta ao vetor
  frutas.push(fruta);

  // Verifica se a fruta adicionada foi a cereja
  if (fruta.toLowerCase() === "cereja") {
    break;
  }
}

// Exibe a lista de frutas
alert("Sua salada de frutas está pronta!");
alert("Lista de frutas: " + frutas.join(", "));
