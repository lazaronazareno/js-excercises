const userNumber = window.prompt('Ingrese un número: ')
let piramide = ''

for (let i = 1; i <= userNumber; i++) {
  for (let j = 0; j < i; j++) {
    piramide += '*'
  }
  piramide += '\n'
}

for (let x = userNumber - 1; x > 0; x--) {
  for (let y = 0; y < x; y++) {
    piramide += '*'
  }
  piramide += '\n'
}

console.log(piramide)
