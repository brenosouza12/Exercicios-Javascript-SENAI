let notaUm
let notaDois
let notaTres
let notaQuatro
let mediaDasNotas

notaUm=Number(prompt("Digite sua nota 1: "))
notaDois=Number(prompt("Digite sua nota 2: "))
notaTres=Number(prompt("Digite sua nota 3: "))
notaQuatro=Number(prompt("Digite sua nota 4: "))

mediaDasNotas=(notaUm+notaDois+notaTres+notaQuatro)/4

if(mediaDasNotas>7){
    alert("Wow,você passou de ano, oh yeah")
}
else{
    alert("No,você esta reprovado")
}
