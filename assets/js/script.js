// Assignment code here


// Get references to the #generate element
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphabetUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','('];

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword); 


// Write password to the #password input

function generatePassword () {
  var characterBank = [];
  var newPassword = "";
  var passwordLength = parseInt(prompt("Enter password length"));
  if (passwordLength < 8 || passwordLength > 128) {
    alert("criteria does not meet requirements");
    return null;
   }
  if (confirm ("Include lowercase letters?")) {
    characterBank = characterBank.concat(alphabet);
  }
  if (confirm ("Include uppercase letters?")) {
    characterBank = characterBank.concat(alphabetUpper);
  }
  if (confirm ("Include numbers?")) {
    characterBank = characterBank.concat(numericCharacters);
  }
  if (confirm ("Include special characters?")) {
    characterBank = characterBank.concat(specialCharacters);
  }
  if (characterBank.length == 0) {
    alert("no characters selected, please select valid options");
    return null;
  }
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * characterBank.length);
    newPassword = newPassword + characterBank[randomIndex];
  }
  return newPassword;
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  }




 