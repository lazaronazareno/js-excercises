let userNumber = window.prompt('Ingrese un numero: ')
let numberBinaryValue = 0
let stringBinaryValue = ''
let realBinaryValue = ''

while (Math.floor(userNumber) > 0) {
  numberBinaryValue = userNumber % 2
  stringBinaryValue += numberBinaryValue
  userNumber = Math.floor(userNumber / 2)
}

for (let i = stringBinaryValue.length - 1; i >= 0; i--) {
  realBinaryValue += stringBinaryValue[i]
}

console.log(realBinaryValue)
