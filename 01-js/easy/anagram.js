/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    sortstr1 = str1.split('').sort().join('');
    sortstr2 = str2.split('').sort().join('');

    return sortstr1 == sortstr2;

}

let str1 = "LISTEN";
let str2 = "SILENT";

Result = isAnagram(str1,str2);
console.log(Result);

module.exports = isAnagram;
