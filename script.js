// Assignment Code
var generateBtn = document.querySelector("#generate");
// get button for confirm criteria
var confirmBtn = document.querySelector("#confirm");
// declare criteria
var length;
var useLowerCase;
var useUpperCase;
var useNumeric;
var useSpecial;

// Write password to the #password input
function writePassword() {
  // console.log(document.getElementsByName('length').value);
  var password = generatePassword();
  
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function setCriteria() {
length = Number(document.getElementById('length').value);
console.log(length);
useLowerCase= document.getElementById('useLowercase').checked;
console.log(useLowerCase);
useUpperCase= document.getElementById('useUppercase').checked;
useSpecial= document.getElementById('useSpecial').checked;
useNumeric= document.getElementById('useNumeric').checked;
modal.style.display = "none";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Add event listener to confirm button
confirmBtn.addEventListener("click", setCriteria);

// Preventdefault form submit, to avoid refresh page
document.getElementById("confirm").addEventListener("click", function(event){
  event.preventDefault()
});
// event handler

/**
 * 
 * @param {number} length  - The expected length of the password
 * @param {boolean} useLowerCase - whether lowercase letters will be included
 * @param {boolean} useUpperCase - whether uppercase letters will be included
 * @param {boolean} useNumeric - whether numeric values are included
 * @param {boolean} useSpecial - whether special characters are included
 * @returns 
 */

//  length, useLowerCase, useUpperCase, useNumeric, useSpecial
function generatePassword() {
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

/*
Modal Test Start
*/
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
/*
Modal Test End
*/


