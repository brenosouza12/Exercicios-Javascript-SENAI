let tConvidados = 45
let tLitrosChopp = 300
let desperdicioChopp, sobraChopp
let tChoppBebido, choppPessoa

    desperdicioChopp = Number(prompt("Quanto foi desperdiçado? (l): "))
    sobraChopp = Number(prompt("Quanto sobrou? (l): "))

    tChoppBebido = tLitrosChopp - desperdicioChopp - sobraChopp

    choppPessoa = tChoppBebido / tConvidados

    alert(`Total de litros bebidos por pessoa: ${choppPessoa}`)

    