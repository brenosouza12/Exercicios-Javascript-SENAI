let valorProduto=document.getElementById("produtoUm")
let valorProdutoDois=document.getElementById("produtoDois")
let valorProdutoTres=document.getElementById("produtoTres")
let valorProdutoQuatro=document.getElementById("produtoQuatro")

let quantidadeUm=document.getElementById("quantidadeUm")
let quantidadeDois=document.getElementById("quantidadeDois")
let quantidadeTres=document.getElementById("quantidadeTres")
let qunatidadeQuatro=document.getElementById("quantidadeQuatro")

let valorUm=document.getElementById("valorUm")
let valorDois=document.getElementById("valorDois")
let valorTres=document.getElementById("valorTres")
let valorQuatro=document.getElementById("valorQuatro")

let divTotal=document.getElementById("Total com desconto")

function desconto(){


divTotal.innerHTML=(Number(valorUm.value)+Number(quantidadeUm**20))
divTotal.innerHTML=(Number(valorDois.value)+Number(quantidadeDois**20))
divTotal.innerHTML=(Number(valorTres.value)+Number(quantidadeTres**20))
divTotal.innerHTML=(Number(valorQuatro.value)+Number(qunatidadeQuatro**20))






}