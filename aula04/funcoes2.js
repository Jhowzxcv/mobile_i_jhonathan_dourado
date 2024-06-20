const TesteImparPar = (n) => {
    let calculoTeste = n % 2

    if (calculoTeste != 0){
        return "Número Impar"
    }else {
        return "Número Par"
    }
}

console.log(TesteImparPar(89798743));
console.log(TesteImparPar(45));
console.log(TesteImparPar(1756e10));
console.log();
        