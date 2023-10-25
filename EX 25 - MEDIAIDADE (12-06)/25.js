let totalIdade = 0;
let maiorIdade = 0;

for (let i = 1; i <= 5; i++) {
  let nomeCharacter = prompt("Digite o nome da pessoa " + i + ":");
  let idadeCharacter = Number(prompt("Digite a idade de " + nome + ":"));

  totalIdade += idadeCharacter;

      if (idadeCharacter > maiorIdade) {

         maiorIdade = idadeCharacter;

  }
}

let mediaIdade = totalIdade / 5;

      alert("A média de idade das pessoas é: " + mediaIdade);
      alert("A maior idade dentre as pessoas é: " + maiorIdade);
