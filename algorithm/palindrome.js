//check if empty
// check if string
// reverse string and check if match

const palindromeCheck = function(string) {
    if(string === '') {
        return false;
    }
    else if (typeof string === 'string') {
        let reverse = string.toLowerCase().split("").reverse().join("");

        if (reverse === string) {
            return true; 
        } else {
            return false;
        }

    } else {
        return false;
    }
}

const palindromResultPassing = palindromeCheck('racecar')
const palindromResultFailing = palindromeCheck('hello')
const palindromResultEdgeEmptyFailing = palindromeCheck('')

console.log('palindromResultPassing', palindromResultPassing)
console.log('palindromResultFailing', palindromResultFailing)
console.log('palindromResultEdgeEmptyFailing', palindromResultEdgeEmptyFailing)

