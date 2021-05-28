// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  let polybiusSqrEncode = {
    "a": 11, "b": 21, "c": 31, "d": 41, "e": 51,
    "f": 12, "g": 22, "h": 32, "i": 42, "j": 42, "k": 52,
    "l": 13, "m": 23, "n": 33, "o": 43, "p": 53,
    "q": 14, "r": 24, "s": 34, "t": 44, "u": 54,
    "v": 15, "w": 25, "x": 35, "y": 45, "z": 55,
  }

  let polybiusSqrDecode = {
    "a": 11, "b": 21, "c": 31, "d": 41, "e": 51,
    "f": 12, "g": 22, "h": 32, "(i/j)": 42, "k": 52,
    "l": 13, "m": 23, "n": 33, "o": 43, "p": 53,
    "q": 14, "r": 24, "s": 34, "t": 44, "u": 54,
    "v": 15, "w": 25, "x": 35, "y": 45, "z": 55,
  }

  /* helper function
  -> takes an arr as a parameter
  -> pushes value at index into a string
  -> return a string of digits
  */
  function stringNum(arr) {
    let result = "";
    arr.forEach(num => {
      (num === 0) ? (result += " ") : (result += num);
    })
    return result;
  }

  /*helper function
  -> takes in input
  -> replace whitespace with "00" and pushes into string
  --> we know that 00 is never part of the cypher, so it's okay to add into string
  -> return new string
  */
  function fillSpace(str) {
    let result = "";
    for(let i = 0; i < str.length; i++) {
      (str.charAt(i) === " ") ? result+= "00" : result += str.charAt(i);
    }
    return result;
  }

  function polybius(input, encode = true) {
    // your solution code here
    let nums = [];
    let lowerCase = input.toLowerCase(); //lowercase input
    /*encode
    -> traverse through input (lowercase) and traverse through polybiusSqrEncode obj
    -> if input at given index is a whitespace, push a 0 into the array (nums)
    -->break out of the if statement to prevent it from looping through the polybiusSqrEncode obj
    -> if char at index matches the value of the given object key, push the key into array (nums)
    -> pass the array into helper function stringNum
    --> helper function interprets the 0 as a space, thus returning the correct string with the correct space
    */
    if(encode) {
      for(let i = 0; i < lowerCase.length; i++) {
        for(let letter in polybiusSqrEncode) {
          if(lowerCase.charAt(i) === " ") {
            nums.push(0);
            break;
          }
          if(lowerCase.charAt(i) === letter) nums.push(polybiusSqrEncode[letter]);
        }
      }
      return stringNum(nums);
    }
    /*decoding
    -> split the input by space then combine within (input has no space now)
    --> get the length; if odd - return false, else keep going through code
    -> filledInput => adds 00 to white space
    -> traverse through length of filledInput minus 2
    --> since we are using substring, we don't need to account for the entire length, hence subtracting two from filledInput
    -> traverse through polybiusSqrDecode
    --> if value matches the substring (which has been parse as an interger)
    ----> push the key into array (nums);
    -> if the parse subString is 00, then we push a white space into array (nums)
    -> pass array (nums) into helper function to return the correct string with spacing
    */
    else {
      const oddLength = input.split(" ").join("").length;
      if(!(oddLength % 2 === 0)) return false;
      let filledInput = fillSpace(input);
      for(let i = 0; i <= filledInput.length - 2; i = i+2) {
        const subString = filledInput.substr(i, 2);
        for(let val in polybiusSqrDecode) {
          if(polybiusSqrDecode[val] === parseInt(subString)) nums.push(val);
          if(parseInt(subString) === 00) {
            nums.push(" ");
            break;
          }
        }
      }
      return stringNum(nums);
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
