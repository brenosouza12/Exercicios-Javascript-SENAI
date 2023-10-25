let anoNasc

anoNasc=Number(prompt("Digite o ano que vocês nasceu: "))

switch(true){
   case (anoNasc <=1945):
    alert("Sem geração")
    break
   case (anoNasc>= 1946) && (anoNasc <=1964):
    alert("Baby Boomers")
    break
    case (anoNasc>= 1965) && (anoNasc <=1980):
    alert("Geração X")
    break
    case (anoNasc>= 1981) && (anoNasc <=1996):
    alert("Geração Y")
    break
    case (anoNasc>= 1997) && (anoNasc <=2010): 
    alert("Geração Z")
    break
    case (anoNasc>= 2011):
    alert("Geração Alpha")
    break  
}