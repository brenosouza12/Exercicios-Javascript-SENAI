let qntdPlastico,qntdPapel,qntdMetal
let valorDoKgPlastico,valorKgPapel,valorKgMetal
let total

valorDoKgPlastico = 2/10
valorKgPapel = 3/30
valorKgMetal = 5/50


qntdPlastico = Number(prompt("Quantidade de plástico (kg): "))
    qntdPapel= Number(prompt("Quantidade de papel (kg): "))
    qntdMetal = Number(prompt("Quantidade de metal (kg): "))

    total= (qntdPlastico * valorDoKgPlastico) + (qntdPapel * valorKgPapel) + (qntdMetal * valorKgMetal)

    alert(`Valor total a receber: R$${total}`)