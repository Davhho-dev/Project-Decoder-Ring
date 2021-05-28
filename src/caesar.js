// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    //return false if shift is not given, 0, above 25 or less than 25
    if(shift === 0 || shift > 25 || shift < -25 || shift === undefined) return false;
    //since we want to ignore capital letters
    let lowerCase = input.toLowerCase();
    let result = "";

    //if decode - we want to go backwards (ex. shift = -2 => should be 2)
    if(!encode) {
      shift = shift - (shift * 2);
    }

    let remainder = 0;
    let alphabet = "abcdefghijklmnopqrstuvwxyz";

    //traverse through the length of the input
    //shifter = ASCII code of letter at index + the shift value
    for(let i = 0; i < lowerCase.length; i++) {
      const shifter = lowerCase.charCodeAt(i) + shift;
      //maintaing spaces and symbols - check to see if char is not a letter
      if(lowerCase.charAt(i).match(/[a-z]/i) === null) {
         result += lowerCase.charAt(i); 
      }
      /*Allows letter to wrap back to the front
      --> since this is to wrap z to a (right to left) we offset by subtracting 1
      */
      if(shifter > 122) {
        remainder = (shifter - 122);
        result += alphabet.charAt(remainder - 1);
      }
      /*Allows letter to wrap from front to back
      --> since this is to wrap a to z (left to right), we offset by adding 1 
      */
      if(shifter < 97 && lowerCase.charAt(i).match(/[a-z]/i)) {
        remainder = 97 - (shifter);
        result += String.fromCharCode((122 + 1) - remainder);
      }
      //if in between ASCII of a to z then push the the char
      if(shifter >= 97 && shifter <= 122) {
        result += String.fromCharCode(shifter);
      }
    }
    return result;
  }
  return {
    caesar,
  };
})();



module.exports = { caesar: caesarModule.caesar };
