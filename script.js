/*
Modal Start
*/
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// Modal Trigger Button
var btn = document.getElementById("generate");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
/*
Modal End
*/
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

  modal.style.display = "none";
  // automatically copy to clipboard
  navigator.clipboard.writeText(passwordText.value);

  /* Alert the copied text */
  
  setTimeout(function(){
    alert("Auto generated password copied the clipboard!");
  },500);

}
// Linked to event listener for Confirm button, assigns the values via form, and run validation, then call writepassword
function setCriteria() {
  length = Number(document.getElementById('length').value);
  console.log(length);
  useLowerCase = document.getElementById('useLowercase').checked;
  console.log(useLowerCase);
  useUpperCase = document.getElementById('useUppercase').checked;
  useSpecial = document.getElementById('useSpecial').checked;
  useNumeric = document.getElementById('useNumeric').checked;

  if(checkCriteria()){
    writePassword();
  }
}

// Validate set form values against minimum criteria for password generation
function checkCriteria() {
  if (length > 128 || length < 8) {
    alert("Make sure you select the password length within range of 8-128!");
    return false;
  } else if (!(useLowerCase || useUpperCase || useNumeric || useSpecial)) {
    alert("Make sure you select at least one of the character set to generate password from.")
    return false;
  }
  else return true;
}

// Add event listener to generate button, updated the user flow and no need for this listener
// generateBtn.addEventListener("click", writePassword);

// Add event listener to confirm button
confirmBtn.addEventListener("click", setCriteria);

// Preventdefault form submit, to avoid refresh page
document.getElementById("confirm").addEventListener("click", function (event) {
  event.preventDefault()
});


//  length, useLowerCase, useUpperCase, useNumeric, useSpecial
// Build the pool first by examining the above values, and then generate each letter till the length
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




