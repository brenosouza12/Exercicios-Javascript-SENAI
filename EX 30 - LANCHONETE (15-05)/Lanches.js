

let CachorroQuente=1.70
let BauruSimples=2.30
let BauruComOvos=2.60
let Hamburguer=2.40
let CheeseBurgue=2.50
let Refrigerante=1.00

let Codigo
let Quantidade
let conta

Codigo=Number(prompt("Digite o código do produto: "))
Quantidade=Number(prompt("Digite a quantidade: "))

switch(Codigo) {
    case 100:
        conta=(CachorroQuente*Quantidade)
          alert(conta)
            break;
    case 101:
        conta=(BauruSimples*Quantidade)
          alert(conta)
            break;
    case 102:
        conta=(BauruComOvos*Quantidade)
          alert(conta)
            break;
    case 103:
        conta=(Hamburguer*Quantidade)
          alert(conta)
            break;
    case 104:
        conta=(CheeseBurgue)
          alert(conta)
            break;
    case 105:
        conta=(Refrigerante*Quantidade)
          alert(conta)
            break;                                     
        
}