function somar (num1, num2) {
    return `Soma de ${num1} e ${num2} é ${num1 + num2}`
}
function subtrair (num1, num2) {
    return `Subtração de ${num1} e ${num2} é ${num1 - num2}`
}
function multiplicar (num1, num2) {
    return `Multiplicação de ${num1} e ${num2} é ${num1 * num2}`
}
function dividir (num1, num2) {
    return `Divisão de ${num1} e ${num2} é ${num1 / num2}`
}


const numero1 = Number(prompt("digite um numero"))
const numero2 = Number(prompt("digite um numero"))

const funcaoSomar = somar( numero1, numero2)
const funcaoSubtrair = subtrair( numero1, numero2)
const funcaoMultiplicar = multiplicar( numero1, numero2)
const funcaoDividir = dividir( numero1, numero2)



console.log(funcaoSomar);
console.log(funcaoSubtrair);
console.log(funcaoMultiplicar);
console.log(funcaoDividir);