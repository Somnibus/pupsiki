function checkNumber(number) {
    if (number > 0) {
      console.log("The number is positive.");
    } else if (number < 0) {
      console.log("The number is negative.");
    } else {
      console.log("The number is zero.");
    }
  }
  
  // Test the function
  checkNumber(5);    // Output: The number is positive.
  checkNumber(-3);   // Output: The number is negative.
  checkNumber(0);    // Output: The number is zero.
  
  function checkString (string){
    if(string.length >5) {
        console.log ("Long string");
    } else {
console.log("Short string");
    }
};
checkString ("hello");
checkString ("Abracadabra");
checkString ("587ponbvyhuj");

function vovelConsonant (letter){
    if(        letter === "a" ||
        letter === "O" ||
        letter === "e" ||
        letter === "i" ||
        letter === "u"  ) {
        console.log("The character is a vowel.");
    }else{
        console.log("The character is a consonant.");
    }
};
vovelConsonant("a");
vovelConsonant("n");