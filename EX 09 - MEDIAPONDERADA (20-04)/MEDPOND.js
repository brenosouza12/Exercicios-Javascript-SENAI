let nota1,nota2,nota3
let peso1 = 1,peso2 = 1,peso3 = 3
let somaNotasPesos,somaPesos
let MediaPonderada

somaPesos = peso1 + peso2 + peso3

nota1 = Number(prompt("Digite a primeira nota: "))
nota2 = Number(prompt("DIgite a segunda nota: "))
nota3 = Number(prompt("Digite a terceira nota: "))

somaNotasPesos = Number((nota1 * peso1) * (nota2 * peso2) * (nota3 * peso3)).toFixed(2)

MediaPonderada = somaNotasPesos/somaPesos

alert(`A media ponderada é: ${MediaPonderada}`)