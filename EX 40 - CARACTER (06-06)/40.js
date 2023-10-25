// Inicializa um contador
let contador = 1;

// Array para armazenar os tamanhos das palavras
let tamanhos = [];

// Loop while para obter as cinco palavras
while (contador <= 5) {
  // Solicita ao usuário que digite uma palavra
  let palavra = prompt(`Digite a palavra ${contador}:`);

  // Calcula o tamanho da palavra e armazena no array
  tamanhos.push(palavra.length);

  // Incrementa o contador
  contador++;
}

// Exibe os tamanhos das palavras
alert("Tamanhos das palavras:");
for ( i = 0; i < tamanhos.length; i++) {
  alert(`Palavra ${i + 1}: ${tamanhos[i]} caracteres`);
}
