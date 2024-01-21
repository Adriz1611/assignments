/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(number) {
    let max = number[0];
    number.forEach(number => {
        if (number > max) {
            max = number;
        }
    
    
    });
    return max;
}

const numbers = [3,7,2,9,1];
console.log(findLargestElement(numbers));

module.exports = findLargestElement;