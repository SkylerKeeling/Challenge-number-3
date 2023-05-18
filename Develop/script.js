// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var length = document.getElementById("length");
var lowercase = document.getElementById("lowercase");
var uppercase =document.getElementById("uppercase");
var numeric = document.getElementById("numeric");
var special = document.getElementById("special");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

if 



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
