// Write code to loop through the array of numbers
// At each iteration, if a number is evenly divisible by 3 print "Fizz"
// If a number is evenly divisible by 5 print "Buzz"
// If a number is evenly divisible by both 3 AND 5, print "Fizz Buzz"
// If a number is not divisible by 3 or 5, print the number
var arr = [13, 14, 15, 16, 17, 18, 19, 20];
console.log('=======================================')
console.log('Original Array: ',arr)
console.log('=======================================')
var fizzBuzz = function(arr) {
    console.log('⚡️Things are about to get real Fizzy and Buzzy!⚡️')
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 3 === 0 && arr[i] % 5 != 0) {
            arr[i] = 'Fizz'
        }
        if (arr[i] % 5 === 0 && arr[i] % 3 != 0) {
            arr[i] = 'Buzz'
        }
        if (arr[i] % 5 === 0 && arr[i] % 3 === 0) {
            arr[i] = 'Fizz Buzz'
        }
        console.log(arr[i])
    }
    console.log('=======================================')
    console.log('Updated Array: ', arr)
    console.log('=======================================')
};

fizzBuzz(arr)