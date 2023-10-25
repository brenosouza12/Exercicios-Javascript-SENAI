
let cont = 1;
let numero
while (cont <= 5) {
  userInput = parseInt(prompt(`Digite o ${cont}º número inteiro:`));

  if (isPrime(userInput)) {
    alert(`${userInput} é um número primo.`);
  } else {
    alert(`${userInput} não é um número primo.`);
  }

  cont++;
}

