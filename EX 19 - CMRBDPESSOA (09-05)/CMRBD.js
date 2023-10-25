let nomePessoa
let idadePessoa
let ComorbidadePessoa

nomePessoa=prompt("Digite seu nome: ")
idadePessoa=Number(prompt("Digite sua idade: "))
ComorbidadePessoa=prompt("Você tem alguma comorbidade? ")

if(idadePessoa>60 && ComorbidadePessoa=="Sim"){
    alert("Pode se vacinar")
}
else{
    alert("Não pode se vacinar")
}