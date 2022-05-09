var arrA = [1, 9, 8, 7];
var arrB = [10, 12, 1, 6, 5];


function commonNumberBetweenArrays(arrayA, arrayB) {
    
   let combinedArray = arrayA.concat(arrayB).sort()

   for (let i = 0; i < combinedArray.length; i++) {
    
       if (combinedArray[i] === combinedArray[i + 1]) {
           return console.log("result",combinedArray[i])
       } else {
        console.log("no match")
       } 
   }
}

commonNumberBetweenArrays(arrA, arrB)

// In this activity you will be writing code to create a function that takes in two arrays of numbers, with one number in common between the two arrays. Your function should return the number in common between the two arrays.

// Instructions
// Open Unsolved/common-element.js in your code editor—this is the only file you will modify in this activity.

// In this file you will be writing code in the body of the commonElement function, to achieve the following:

// Return the number in common between the two given arrays.

// Refer to the following arrays for an example:

// // The number 1 is present in both arrays
// var arrA = [1, 9, 8, 7];
// var arrB = [10, 12, 1, 6, 5];
// Given the preceding arrays, the following should be returned:

// 1
// Important: You may not use the indexOf or includes methods to complete this problem.

// You can check whether your function works properly by opening Unsolved/test.html in your web browser.

// Functions that pass the tests will be denoted with a green check mark.

// Functions that fail the tests will be denoted with a red X and an error message.

// Hints
// You might want to use the code from the previous zeroes-and-ones activity in your solution for this problem.