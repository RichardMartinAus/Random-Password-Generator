// Assignment code here
// Arrays of characters
var lowerCaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n","o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N","O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = ["!",'"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

// Funtion to generate password from arrays
var generatePassword = function () {
  
  // Ask user for length of password and cast response to a number
  var passwordLength = Number(window.prompt("How many characters would you like your password to be? (8 to 128)"));

  // If user pressed Cancel, input lower than 7 or higher than 128 immediately end function
  if (!passwordLength||passwordLength<8||passwordLength>128) {
    window.alert ("The password needs to be between 8 and 128 characters! Click on the Generate Password button to begin again!")
    return;
  }
  console.log(passwordLength)
  
  // Ask user to include LOWERCASE or not
  var lowerCaseIncluded = window.confirm("Add Lowercase Letters?");
  // Ask user to include UPPERCASE or not
  var upperCaseIncluded = window.confirm("Add Uppercase Letters?");
  // Ask user to include NUMBERS or not
  var numbersIncluded = window.confirm("Add Numbers?");
  // Ask user to include SPECIAL CHARS or not
  var specialCharactersIncluded = window.confirm("Add Special Characters?");
    
  // COMBINE USER CHOICES
  let userChoice = (" ");
  // If user pressed OK, add lowercase to the list
  if (lowerCaseIncluded) {
    userChoice = lowerCaseCharacters
  }
   // If user pressed OK, add uppercase to the list
  if (upperCaseIncluded) {
    userChoice = userChoice.concat(upperCaseCharacters);
  } 
  // If user pressed OK, add NUMBERS to the list
  if (numbersIncluded) {
    userChoice = userChoice.concat(numberCharacters);
  }
  // If user pressed OK, add SPECIAL CHARACTERS to the list
  if (specialCharactersIncluded) {
    userChoice = userChoice.concat(specialCharacters);
  }
  console.log(userChoice)

  // Generate random array pulled from selected arrays at the selected length
  function passwordCharacters (userChoice) {
    return userChoice[Math.floor(Math.random() * userChoice.length)]
  }
  
  var characters = userChoice,
    result = " ";
  for (var i = 0; i < passwordLength; i++) {
    result += passwordCharacters(characters)
  }
  console.log(result)
  return result;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);