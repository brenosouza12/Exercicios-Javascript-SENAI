
let userInput = prompt("Digite um número inteiro:");
userInput = parseInt(userInput);

while (isNaN(userInput) || !Number.isInteger(userInput) || userInput <= 1) {
  userInput = prompt("Entrada inválida! Digite um número inteiro válido maior que 1:");
  userInput = parseInt(userInput);
}

let primes = [];
let currentNumber = 2;

while (currentNumber <= userInput) {
  let isPrime = true;

  for (let i = 2; i <= Math.sqrt(currentNumber); i++) {
    if (currentNumber % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    primes.push(currentNumber);
  }

  currentNumber++;
}

alert(primes);
