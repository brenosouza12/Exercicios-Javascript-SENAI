
let populacao = Number(prompt("Digite a população da região: "));
let area = Number(prompt("Digite a área da região (em metros quadrados): "));

let densidade = populacao / area;

if (densidade >= 100) {

  alert("Densidade demográfica alta!");

} else if (densidade >= 25 && densidade < 100) {

  alert("Densidade demográfica média!");

} else {

  alert("Densidade demográfica baixa!");
  
}
