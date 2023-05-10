function somaDoisNumeros (num1, num2) {
    console.log(`A soma de ${num1} + ${num2} = ${num1 + num2}`);
}

console.log("================ex2 - a======================");
somaDoisNumeros(20,30)
somaDoisNumeros(10,5)
console.log("\n");

function primeiroNumeroMaiorQueSegundo (num1, num2) {
    return `${num1} é maior do que ${num2}?  ${num1 > num2}`
}

console.log("================ex2 - b======================");
console.log(primeiroNumeroMaiorQueSegundo(2,11));
console.log(primeiroNumeroMaiorQueSegundo(20,11));
console.log(primeiroNumeroMaiorQueSegundo(20,20));
console.log("\n");

function numeroEhPar (num) {
    return `O número ${num} é par? ${num%2===0}`
}

console.log("================ex2 - c======================");
console.log(numeroEhPar(6));
console.log(numeroEhPar(9));
console.log("\n");


function salarioRoubado (salario) {
    const descontoInss = salario * 0.90
    return `O salario liquido será de ${descontoInss}`;
}

console.log("================ex2 - d======================");

console.log(salarioRoubado(1000));
console.log(salarioRoubado(100));
console.log("\n");
