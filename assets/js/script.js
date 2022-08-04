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



  //  This is the function selected all of the criteria
  function passwordCriteria() {

    var lengthPrompt = window.prompt("Please pick a password length bewtween 8 and 128.");

    if (lengthPrompt <= 8 || lengthPrompt >= 128) {
      window.alert("Try again. Please enter a number between 8 and 128.");

      passwordCriteria();
    }

    if (lengthPrompt >= 8 || lengthPrompt <= 128) {
      
      window.value = lengthPrompt;
      randomGenerator();
    }


    function randomGenerator() {


      // variables here are asking for the criteria to add to the length
      var upperCaseGen = window.confirm("Would you like the password to consist of upper-case letters?");

      if (upperCaseGen) {

        var string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        var stringLength = string.length;

        var randomCharacter = string[ Math.floor(Math.random() * stringLength)];

        // invoke the random function here
        console.log(randomCharacter);
      }

      var lowerCaseGen = window.confirm("Would you like the password to contain lower-case letters?")

      if (lowerCaseGen) {

        var string = "abcdefghijklmnopqrstuvwxyz";

        var stringLength = string.length;

        var randomCharacter = string[ Math.floor(Math.random() * stringLength)];

        console.log(randomCharacter);
        
      }

      var numberGen = window.confirm("Would you like to include numbers in the password?")

      if (numberGen) {

        var string = "1234567890";

        var stringLength = string.length;

        var randomCharacter = string[ Math.floor(Math.random() * stringLength)];

        console.log(randomCharacter);
      }

      var specialGen = window.confirm("Would you like to include special characters?");

      if (specialGen) {

        var string = "!@#$%&*?~"

        var stringLength = string.length;

        var randomCharacter = string[ Math.floor(Math.random() * stringLength)];

        console.log(randomCharacter);
      }
      
      for (var i = 0; i < lengthPrompt.length; i++){
        
        if (upperCaseGen){
          var u = (upperCaseGen);
        }

        else {
          upperCaseGen = null;
        };

        if (lowerCaseGen){
          var l = (lowerCaseGen);
        }

        else {
          lowerCaseGen = null;
        };

        if (numberGen){
          var N1 = (numberGen)
        }

        else {
          numberGen = null;
        };

        if (specialGen){
          var S1 = (specialGen)
        }

        else {
          specialGen = null;
        };
        
      }

      return password;
      
    }
    
  }

}

// add for loop *reference robot-gladiator* for the in depth randomizer function.