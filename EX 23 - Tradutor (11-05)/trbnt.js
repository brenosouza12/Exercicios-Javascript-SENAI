let traducaoUm=document.getElementById("optionOne")
let traducaoDois=document.getElementById("optionTwo")
let traducaoTres=document.getElementById("optionThree")
let traducaoQuatro=document.getElementById("optionFour")
let traducaoCinco=document.getElementById("optionFive")
let Resultado=document.getElementById("Resultado")
let select=document.getElementById("select")

function Traduzir(){

switch(select.value){
      
    case 'optionOne':
        Resultado.value="One"
        break
    case 'optionTwo':
            Resultado.value="Two"
        break 
    case 'optionThree':
            Resultado.value="Three"
        break 
        
    case 'optionFour':
            Resultado.value="Four"
        break 
        
    case 'optionFive':
            Resultado.value="Five"
        break      

}
}

    
