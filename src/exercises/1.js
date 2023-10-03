const userNumber = window.prompt('Ingrese un numero: ')
const n = parseInt(userNumber)
let a = 0
let b = 1
let count = 0
let fibonacciNumber = 0

while (count < n) {
  count++
  a = b - a
  b = a + b
  if (count === n) {
    fibonacciNumber = a
  }
}

console.log('En la posicion ' + userNumber + ' el numero fibonacci es: ' + fibonacciNumber)
