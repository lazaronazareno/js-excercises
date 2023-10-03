const userNumber = window.prompt('Ingrese un numero: ')
let factorialNumber = 1

for (let i = 1; i <= userNumber; i++) {
  factorialNumber = factorialNumber * i
}
console.log('Factorial: ' + factorialNumber)
