// create a function that takes in an array and a target
// loop through the array and compare numbers against  the target
// if the target matches return the index value
// if the target does not exist return -1

const testArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]

numVerify = function(num) {
for (let i = 0; i < testArray.length; i++) {
    if (testArray[i] === num) {
        return console.log(testArray.indexOf(testArray[i]))
    }
}
return console.log(-1);
}

numVerify(14);