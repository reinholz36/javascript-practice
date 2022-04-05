// Return the number of vowels present in str.

var vowelCount = function(str) {
convertToLower = str.toLowerCase()
splitWord = convertToLower.split('');
let vowelCounter = 0;  

for (let i = 0; i < splitWord.length; i++) {
    
    if (splitWord[i] === "a" || 
        splitWord[i] === "e" || 
        splitWord[i] === "i" || 
        splitWord[i] === "o" || 
        splitWord[i] === "u"
    ) 
    {
        vowelCounter++;
    } ;
}

return console.log("vowelCounter", vowelCounter)
};

vowelCount('algorithm')