let totalGasto = 0;
let valorRestante = 200;
let quantidadeVinis = 0;
let vinilMaisCaro = { nome: '', valor: 0 };
let vinilMaisBarato = { nome: '', valor: Infinity };
let mediaPrecos = 0;

while (valorRestante > 0) {
  let nomeVinil = prompt("Digite o nome do vinil:");
  let valorVinil = parseFloat(prompt("Digite o valor do vinil em reais:"));

  if (valorVinil > valorRestante) {
    alert("O valor do vinil ultrapassa o limite disponível. Compra encerrada.");
    break;
  }

  totalGasto += valorVinil;
  valorRestante -= valorVinil;
  quantidadeVinis++;

  if (valorVinil > vinilMaisCaro.valor) {
    vinilMaisCaro.nome = nomeVinil;
    vinilMaisCaro.valor = valorVinil;
  }

  if (valorVinil < vinilMaisBarato.valor) {
    vinilMaisBarato.nome = nomeVinil;
    vinilMaisBarato.valor = valorVinil;
  }
}

if (quantidadeVinis > 0) {
  mediaPrecos = totalGasto / quantidadeVinis;
}

console.log("Total gasto em reais: " + totalGasto.toFixed(2));
console.log("Valor restante em dinheiro: " + valorRestante.toFixed(2));
console.log("Quantidade de vinis comprados: " + quantidadeVinis);
console.log("Média de preço dos vinis: " + mediaPrecos.toFixed(2));
console.log("Vinil mais caro: " + vinilMaisCaro.nome + " - R$" + vinilMaisCaro.valor.toFixed(2));
console.log("Vinil mais barato: " + vinilMaisBarato.nome + " - R$" + vinilMaisBarato.valor.toFixed(2));
