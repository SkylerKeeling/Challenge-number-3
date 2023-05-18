// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var length = document.getElementById("#length");
var lowercase = document.getElementById("#lowercase");
var uppercase =document.getElementById("#uppercase");
var numeric = document.getElementById("#numeric");
var special = document.getElementById("#special");

var lowercaseCodes = charCodeAt(97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122);
var uppercaseCodes = charCodeAt(65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90);
var numericCodes = charCodeAt(48,49,50,51,52,53,54,55,56,57);
var specialCodes = charCodeAt(33,34,35,36,37,38,39,40,41,42,43,44,45,46,47);

const chosenLength = length.valued;
const plusLowerCase = lowercase.checked;
const plusUpperCase = uppercase.checked;
const plusNumeric = numeric.checked;
const plusSpecial = special.checked; 

var password = writePassword(length, lowercaseCodes, uppercaseCodes, numericCodes, specialCodes);

if length < 8 || length > 128 {
  print("criteria does not meet requirements");
}

function check () {


}

// Write password to the #password input

function writePassword(length, lowercaseCodes, uppercaseCodes, numericCodes, specialCodes) {
    
    if (lowercaseCodes) {return password.includes(lowercaseCodes);
  }
    else if 
    (uppercaseCodes) {return password.includes(uppercaseCodes);
    }
    else if 
    (numericCodes) {return password.includes(numericCodes);
    }
    else if 
    (specialCodes) {return password.includes(specialCodes);
    }

    for 



}

if 



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);