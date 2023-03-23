// Assignment Code
var generateBtn = document.querySelector("#generate");


var UCCODES = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var LCCODES = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var NUMCODES = ["1","2","3","4","5","6","7","8","9","0"]
var SYMCODES = ["!","#","$","%","&","(",")","*","+","-",".","/",":",";","<",">","=","?","@","[","]","_","{","}","|"]

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {

  var characterAmount = prompt("How many characters would you like your password to contain?")
  var NumbersQ= confirm("include numbers?")
  var SymbolsQ= confirm("include Sym?")
  var UppercaseQ= confirm("include UC?")

  let charCodes = LCCODES
  if (UppercaseQ) charCodes = charCodes.concat(UCCODES)
  if (SymbolsQ) charCodes = charCodes.concat(SYMCODES)
  if (NumbersQ) charCodes = charCodes.concat(NUMCODES)


    var passwordCharacters = []
  for (let i = 0; i < characterAmount; i++) {
    var characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(characterCode)
  }
  return passwordCharacters.join('')

}