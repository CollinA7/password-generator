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

var generatePassword = function passwordPrompt() {

  var generateBtn = window.confirm("Would you like to create a password?");

  if (generateBtn) {
   passwordCriteria();
  }

}

function passwordCriteria() {

  var lengthPrompt = window.prompt("Please pick a password length bewtween 8 and 128.");

  if (lengthPrompt <= 8 || lengthPrompt >= 128) {
    window.alert("Try again. Please enter a number between 8 and 128.");
  }

  if (lengthPrompt >= 8 || lengthPrompt <= 128) {
    
    window.value = lengthPrompt;
  }

  var specialCharacter = window.confirm("Would you like the password to consist of any special characters?");
  
  if (specialCharacter) {
    randomGenerator();
  }

  function randomGenerator() {
    
    var characterConfirm = window.prompt("Would you like the password to consist of: upper-case, lower-case, numbers, and/or special characters?");

    if (characterConfirm === "UPPER" || characterConfirm === "upper") {

      var string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

      var stringLength = string.length;

      var randomCharacter = string[ Math.floor(Math.random() * stringLength)];

      // invoke the random function here
      console.log(randomCharacter);
    }

    if (characterConfirm === "LOWER" || characterConfirm === "lower") {

      var string = "abcdefghijklmnopqrstuvwxyz";

      var stringLength = string.length;

      var randomCharacter = string[ Math.floor(Math.random() * stringLength)];

      // invoke the random function here
      console.log(randomCharacter);
    }

    if (characterConfirm === "numbers" || characterConfirm === "NUMBERS") {

      var string = "1234567890";

      var stringLength = string.length;

      var randomCharacter = string[ Math.floor(Math.random() * stringLength)];

      // invoke the random function here
      console.log(randomCharacter);
    }


  }

}

// add for loop *reference robot-gladiator* for the in depth randomizer function.