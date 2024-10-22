function isPalindrome(word) {
  // Compare the word with its reversed version
  return word === word.split('').reverse().join('');
}



if (require.main === module) {
  //  here is Custom tests
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot")); 

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba")); 

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a")); 

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab")); 
}

module.exports = isPalindrome;





























