// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


/**
 * 
 * @param {number} length  - The expected length of the password
 * @param {boolean} useLowerCase - whether lowercase letters will be included
 * @param {boolean} useUpperCase - whether uppercase letters will be included
 * @param {boolean} useNumeric - whether numeric values are included
 * @param {boolean} useSpecial - whether special characters are included
 * @returns 
 */
function generatePassword(length, useLowerCase, useUpperCase, useNumeric, useSpecial) {
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "0123456789";
  var specialchar = ' !\"#$%&\'()*+,-./:;<=>?@[\\\]^_`{|}~';
  var characterspool = "";
  var result = "";
  if (useLowerCase) {
    characterspool = characterspool.concat(lowercase);
  }
  if (useUpperCase) {
    characterspool = characterspool.concat(uppercase);
  }
  if (useNumeric) {
    characterspool = characterspool.concat(numeric);
  }
  if (useSpecial) {
    characterspool = characterspool.concat(specialchar);
  }

  var charpoollength = characterspool.length;

  for (var i = 0; i < length; i++) {
    result = result + characterspool.charAt(Math.floor(Math.random() * charpoollength));
  }
  return result;
}



