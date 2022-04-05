// Create a function that takes a given string and returns a new string with all of the characters in reverse order. You are not permitted to use the built-in reverse method.

//03/21/2022
// Psuedo Coding
// Split a word string into individual characters in an array
// Reverse characters in array order 
// Join characters into a single string
// Return result

// Reverse word method using javascript function
// word = 'reinholz'
// splitword = word.split('');
// console.log(splitword);
// reverseword = splitword.reverse();
// console.log('reverse', reverseword);
// result = reverseword.join('');
// console.log('result', result);

// Super Algo INterVieW WaY 🙄

alogWordFunction = function(algoWord) {
    splitAlgoWord = algoWord.split('');
    
    var reverseArray = []
    
    for (let i = 0; i < splitAlgoWord.length; i++) {
        const element = splitAlgoWord[i];
        reverseArray.unshift(element);
    }
    result = reverseArray.join('');
    console.log('result', result);
    }
    
    alogWordFunction('Trivial');