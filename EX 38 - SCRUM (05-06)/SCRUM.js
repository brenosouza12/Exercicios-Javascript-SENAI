let tempoTotalProjeto = Number(prompt("Digite o tempo total em dias: "))

let periodoSprints = Number(prompt("Digite o periodo da sprints em dias: "))

let numeroSprints = Math.floor(tempoTotalProjeto / periodoSprints)

let titulosSprints = []
let objetivoSprints = []


for( i = 1;i <= numeroSprints;i++){

    let titulo = prompt ("Digite o titulo da sprint " + i + ":")
    let objetivo = prompt ("Digite o objetivo da sprint " + i + ":")


    titulosSprints.push(titulo);
    objetivoSprints.push(objetivo);
}

alert("Sprints cadastradas:");
       for ( i = 0; i < titulosSprints.length; i++) {
       alert("Sprint " + (i + 1) + ":");
       alert("Título: " + titulosSprints[i]);
       alert("Objetivo: " + objetivoSprints[i]);
}
 
