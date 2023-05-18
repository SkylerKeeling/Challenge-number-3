// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const alphabetUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];










// Write password to the #password input

function generatePassword () {
  
  var passwordLength = prompt("Enter password length");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("criteria does not meet requirements");
    return
   }
   var characterBank = [];

  if (confirm ("Include lowercase letters?")) {
    console.log("yes, use lowercase")
    characterBank = characterBank.concat(alphabet);

  }
  if (confirm ("Include uppercase letters?")) {
    console.log("yes, use uppercase");
    characterBank = characterBank.concat(alphabetUpper);
  }
  if (confirm ("Include numbers?")) {
    console.log("yes, use numbers");
    characterBank = characterBank.concat(numericCharacters);
  }
  if (confirm ("Include special characters?")) {
    console.log("yes, use special characters");
    characterBank = characterBank.concat(specialCharacters);
  }
  console.log(characterBank);
  var newPassword = "";

  for (var i = 0; i < passwordLength; i++) {
 
  }
  
  
  
  return newPassword;
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) 
 