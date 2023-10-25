let capacidadeMaxima = 50;
let insumos = "ok";
let encerramento = "";

while (true) {
  let quantidadePessoas = Number(prompt("Quantas pessoas chegaram ao restaurante?"));

  if (quantidadePessoas <= 0) {
    encerramento = "Programa encerrado pelo usuário.";
    break;
  }

  if (quantidadePessoas > capacidadeMaxima) {
    encerramento = "Restaurante atingiu a capacidade máxima de pessoas.";
    break;
  }

  if (insumos === "insuficientes") {
    encerramento = "Restaurante encerrado por falta de insumos.";
    break;
  }

  insumos = prompt("Os insumos estão 'ok' ou 'insuficientes'?");

  if (insumos !== "ok" && insumos !== "insuficientes") {
    encerramento = "Opção inválida. Programa encerrado.";
    break;
  }
}

alert(encerramento);
