let larguraPiscina, comprimentoPiscina, areaPiscina
let azulejosMetro = 120, vCaixa = 45.5
let quantidadeTotalAzulejos, tCaixas, gastoTotal
let sobraAzulejos

    larguraPiscina = Number(prompt("Largura da piscina (m):"))
    comprimentoPiscina = Number(prompt("Comprimento da piscina (m):"))

    areaPiscina = Number(larguraPiscina * comprimentoPiscina).toFixed(2)

    quantidadeTotalAzulejos = areaPiscina * azulejosMetro
    tCaixas = (quantidadeTotalAzulejos / 60).toFixed()

    gastoTotal = tCaixas * vCaixa
    sobraAzulejos = (tCaixas * 60) - quantidadeTotalAzulejos

    alert(`Total de Caixas: ${tCaixas} caixas.\nGasto total com a piscina: R$${gastoTotal}.\nSobrou pro banheiro: ${sobraAzulejos} azulejos.`)
