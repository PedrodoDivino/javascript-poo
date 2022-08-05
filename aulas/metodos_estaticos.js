class Operacao {
    static somar(num1, num2){
        return num1 + num2
    }
    static subtrair(num1, num2){
        return num1 - num2
    }
    static multiplicar(num1, num2){
        return num1 * num2
    }
    static dividir(num1, num2){
        return num1 / num2
    }
}
console.log(Operacao.somar(6, 2))
console.log(Operacao.subtrair(6, 2))
console.log(Operacao.multiplicar(6, 2))
console.log(Operacao.dividir(6, 2))