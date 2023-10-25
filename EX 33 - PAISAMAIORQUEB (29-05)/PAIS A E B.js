let paisA = 80000
let paisB = 200000
let Contanos = 0

while (paisA<=paisB) {
  

    paisA = (paisA*3/100)+paisA
    paisB = (paisB*1.5/100)+paisB

    Contanos++
}

alert(`O país A sera maior que o B em:  ${Contanos} anos`)