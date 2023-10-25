let pesoDaPessoa, alturaDaPessoa, imc

    pesoDaPessoa = Number(prompt("Digite o seu peso: "))
    alturaDaPessoa = Number(prompt("Digite a sua altura: "))

    imc = Number(pesoDaPessoa / (alturaDaPessoa ** 2)).toFixed(2)

    alert(`IMC: ${imc}`)