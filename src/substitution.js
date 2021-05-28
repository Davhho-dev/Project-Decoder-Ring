// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  //helper function to check if alphabet is unique (no repeating chars)
  function noRepeats(str) {
    let arr = [];
    for(let i = 0; i < str.length; i++) {
      if(arr.includes(str[i])) {
        return false
      }else if(!arr.includes(str[i])) {
        arr.push(str[i]);
      }
    }
    return true;
  }
 

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    let lowerCase = [...(input.toLowerCase())];
    let key = [];
    let result;
    //if no alphabet, less than 26, or not unique => return false
    if(alphabet === undefined || alphabet.length != 26 || !noRepeats(alphabet)) return false;
    let regAlpha = "abcdefghijklmnopqrstuvwxyz";
    /*encoding
    -> traverse length of alphabet
    --> matching alphabet at index with regular alphabet at index
    ---> push into an empty array
    -> we want to map each letter with the values in the array of objects
    */
    if(encode) {
      for(let i = 0; i < alphabet.length; i++) {
        key[regAlpha.charAt(i)] = alphabet[i];
      };
      result = lowerCase.map(index => {
        if(index === " ") {
          return " ";       //finding instance of space to preserve space
        }
        return key[index];
      })
    }
    /*decoding
    -> traverse through length of alphabet
    --> we will reverse the order of the given keys and values to decode
    ---> push into an empty array
    -> map each letter with the values in the array of objects
    */
    else {
      for(let i = 0; i < alphabet.length; i++) {
        key[alphabet.charAt(i)] = regAlpha[i];
      };
      result = lowerCase.map(index => {
        if(index === " ") {
          return " ";     //finding instance of space to preserve space
        }
        return key[index];
      })
    }
    return result.join("");     //join the data in array into one string
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
