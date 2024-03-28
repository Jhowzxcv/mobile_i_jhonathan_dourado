const TesteImparPar = (n) => {
    let calculoTeste = n % 2

    if(calculoTeste == 1){
        return "Numero Impar"
    } else {
        return "Numero Par"
    }
}

console.log(TesteImparPar(17))
console.log(TesteImparPar(64))
console.log(TesteImparPar(1500))