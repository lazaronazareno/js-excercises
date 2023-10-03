const userNumber = window.prompt('Ingrese un numero: ')
const string = '*'
let count = 0
let secondaryCount = userNumber
while (userNumber > 0 && count < userNumber) {
  console.log(string.toString().repeat(count + 1))
  count++
}
while (count >= secondaryCount && secondaryCount !== 0) {
  secondaryCount--
  console.log(string.toString().repeat(secondaryCount))
  count++
}
