let Nome
let idadeAtl
let cat

Nome=prompt("Digite seu nome: ")
idadeAtl=Number(prompt("Digite sua idade,atleta: "))
cat=prompt("E a categoria: ")

switch(true){
    case (idadeAtl>=5 && idadeAtl<=10):
      alert("Sua categoria é infantil")
      break;
      case (idadeAtl>=11 && idadeAtl<=15):
        alert("Sua categoria é juvenil")
        break;
        case (idadeAtl>=16 && idadeAtl<=20):
          alert("Sua categoria é junior")
          break;
          case (idadeAtl>21 && idadeAtl<=25):
            alert("Sua categoria é profissional")
            break;
}