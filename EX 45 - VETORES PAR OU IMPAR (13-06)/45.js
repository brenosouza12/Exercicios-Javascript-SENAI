// Criando um vetor para armazenar os números digitados
let numeros = [];

// Pedindo ao usuário para digitar os números
for ( i = 0; i < 5; i++) {
  let numero = Number(prompt("Digite um número inteiro:"));
  numeros.push(numero);
}

// Criando um vetor para armazenar apenas os números ímpares
let numerosImpares = [];

// Calculando a soma dos números ímpares
let somaImpares = 0;

// Iterando pelo vetor de números digitados
for (var i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 !== 0) {
    numerosImpares.push(numeros[i]);
    somaImpares += numeros[i];
  }
}

// Exibindo a lista de números ímpares e a soma
alert("Números ímpares digitados: " + numerosImpares.join(", "));
alert("Soma dos números ímpares: " + somaImpares);
