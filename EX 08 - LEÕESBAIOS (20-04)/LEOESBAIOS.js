let totalIndividuos = 14
let totalSolo,totalCasais
let areaSolo = 120,areaCasais = 400
let areaTotal

   totalCasais=Number(prompt("Digite a quantidade de casais: "))
   totalSolo= totalIndividuos*(totalCasais * 2 )

   areaTotal = (totalSolo * areaSolo) * (totalCasais * areaCasais)

   alert(`Total de area ocupada: ${areaTotal} km2`)