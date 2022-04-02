// # Is Unique

// In this activity, you will write code to create a function that takes an array of numbers and returns `true` if no number appears more than once in the given array; else, it returns `false`.

// * In this file, you will write code in the body of the `isUnique()` function to achieve the following:

//   * Return `true` if no number appears more than once in the given array; else, return `false`.

//   * See the following array for an example:

//     ```js
//     var arr = [3, 4, 5, 7, 9]; // no number is repeated
//     ```

//   * Given the preceding array, the following should be returned:

//     ```js
//     true
//     ```

//   * See the following array for an example:

//     ```js
//     var arr = [20, -20, 18, 2, 3, 20]; // 20 appears twice
//     ```

//   * Given the preceding array, the following should be returned:

//     ```js
//     false
//     ```

var arr = [20, -20, 18, 2, 3, 20]; // 20 appears twice

matchCheck = function(arr) {
    arraySort = arr.sort()
    for (let i = 0; i < arraySort.length; i++) {
        
        if(arraySort[i] === arraySort[i + 1]) {
            return console.log(`false: the following match found for value ${arraySort[i]}`)
        }
    }
    return console.log(`true: No match found in ${arr}`)
}

matchCheck(arr);
