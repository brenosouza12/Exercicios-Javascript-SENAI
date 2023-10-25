/*Faça um programa em que o usuário digite o nome de 5 produtos e seus preços (“Digite o produto” / “Digite o seu preço”) 
e armazene esses nomes e preços em dois vetores separados. O programa deve calcular e mostrar:

a) A quantidade de produtos com preço inferior a R$50;
b) O nome dos produtos com preço de R$50 a R$100;
c) A média dos preços dos produtos com preço superior a R$100.*/

let nomes = []
let precos = []
let nome = []
let preco = []
let qtdProdutosInferiores50 = 0
let produtosEntre50e100 = [];
let somaPrecosSuperiores100 = 0
let qtdProdutosSuperiores100 = 0
let mediaPrecosSuperiores100 

    for(i = 0; i < 5;i++){

         nome = prompt("Digite o produto " + (i + 1) + ":")
         preco = Number(prompt("Digite o preço do produto " + (i + 1) + ":"))
         nomes.push(nome)
         precos.push(preco)

    }

    for(i = 0; i < 5;i++){

         if(precos[i] < 50){

            qtdProdutosInferiores50++

         }else if(precos[i] >= 50 && precos[i] <= 100){

            produtosEntre50e100.push(nomes[i])

         }else if(precos[i] > 100){

            somaPrecosSuperiores100 += precos[i]
            qtdProdutosSuperiores100++

         }

    }
         mediaPrecosSuperiores100 = somaPrecosSuperiores100 / qtdProdutosSuperiores100

         alert("Quantidade de produtos com preço inferior a R$50: " + qtdProdutosInferiores50);
         alert("Produtos com preço entre R$50 e R$100: " + produtosEntre50e100.join(", "));
         alert("Média dos preços dos produtos com preço superior a R$100: " + mediaPrecosSuperiores100.toFixed(2));
     