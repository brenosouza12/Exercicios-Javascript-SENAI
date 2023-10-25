let SalarioAnual
let SalarioMensal
let PisoSalarial
let meses

meses=12

SalarioAnual=Number(prompt("Digite o seu salário anual: "))
PisoSalarial=Number(prompt("Digite o seu piso salarial: "))

SalarioMensal=(SalarioAnual/meses)
alert("O seu salário mensal é: " + SalarioMensal)

if(SalarioMensal>PisoSalarial){
    alert("O seu salário está acima do piso salarial")
}
else{
    alert("O seu salário está abaixo do piso salarial")
}