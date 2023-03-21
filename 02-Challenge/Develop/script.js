// Assignment Code
var generateBtn = document.querySelector("#generate");

var characterAmountNumber = document.getElementById('characterAmountNumber')
const form = document.getElementById('passwordGeneratorForm')

var LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)


form.addEventListener("click", e => {
  e.preventDefault()
  var characterAmount = characterAmountNumber.value
  var password = writePassword(characterAmount)
  passwordDisplay.innerText = password
})

// Write password to the #password input
function writePassword(characterAmount) {

  let charCodes = LOWERCASE_CHAR_CODES
  
  var passwordCharacters = []
  for (let i = 0; i < characterAmount; i++) {
    var characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join('')
}

  function arrayFromLowToHigh(low, high) {
    const array = []
    for (let i = low; i <= high; i++) {
      array.push(i)
    }
    return array
  }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
