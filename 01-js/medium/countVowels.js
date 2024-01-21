/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {

    const vowels = ['a','e','i','o','u'];
    let vowelsfound = 0;

    for (let index = 0; index < str.length; index++) {
      for (let i = 0; i< vowels.length; i++){
        if (vowels[i] === str[index]){
          vowelsfound++;
      }
      }
      
    }

    return vowelsfound;

}

const str = "i love you priyanka";
console.log(countVowels(str));

module.exports = countVowels;