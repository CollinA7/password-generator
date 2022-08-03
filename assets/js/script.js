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


// User clicks button

//button triggers eventListener

//eventListener runs an anonymous function to create password

// anonymous function creates a password of random numbers and letters

//password is displayed on the "Your secure password" placeholder
