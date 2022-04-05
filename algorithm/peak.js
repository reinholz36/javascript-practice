// Peak Finder
// In this activity you will be writing code to create a function that takes in an array of numbers and returns the peak of the array.

// Return the peak of the array. A peak is defined as the element in the array that is greater than all of the numbers to its right and greater than all of the elements to its left.

// For example, given the following array:

// var arr = [1, 3, 7, 4, 3, 2, 1];
// The following should be returned:
// 7;
// Assume that the array contains exactly one peak.

// It's possible for the peak to be the first or last element in the array if it is greater than all other elements. For example, the following given the following array:

// var arr = [2, 4, 6, 8, 10];
// The following number should be returned:
// 10;
// Assume the array will contain at least one number. If the array contains only one number, the only number is the peak.

// Bonus
// Can you implement this algorithm without checking every number in the array?

// Psuedo Code 
// 1. find the mid point of an array 
// 2. check if numbers to left or right are greater
// 3. If numbers to left or right are not greater log that value
// 4. If numbers to the left/right are greater select midpoint of that side 
// 5. Repeat steps 2 and 3 until result 

//Special Handeling Cases
//Array with just one value
//Array with odd or even length 

//lookups
// Using Math.floor instead of Math.round https://stackoverflow.com/questions/20904368/javascript-finding-the-most-middle-value-in-an-array

var arr = [-1, -3, -7, -4, -3, -2, -1];
// var arr = [7];

peakFind = function(arr) {
    let maxValue = -Infinity

    arr.forEach(element => {
        if (element > maxValue) {
            maxValue = element
            }
    });
    console.log('maxValue', maxValue);
 
}

peakFind(arr);