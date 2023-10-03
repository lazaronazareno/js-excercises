const userNumber = window.prompt('Ingrese un número: ')
const n = parseInt(userNumber)
let a = 0
let b = 1
let temp = 0
let count = 1

while (count !== n) {
  temp = a + b
  a = b
  b = temp
  count++
}

console.log('En la posición ' + n + ' el número Fibonacci es: ' + b)
