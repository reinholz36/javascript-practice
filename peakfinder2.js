
// var arr = [-1, -3, -7, -4, -3, -2, -1];
var arr = [-3, 2, 4, 7, 9, 13, 11, 8, 7, 3, 1];

peakFind = function(arr) {
    
    // Splits array length (works for odd or even array lengths)
    var splitLength = Math.floor((arr.length - 1 ) / 2);

    // If the array has only one value
    if (splitLength <= 0) {
        result = arr[splitLength]
        return console.log("result",result);
    }

    if (arr[splitLength] > arr[splitLength + 1]) 
    {
        if (arr[splitLength] > arr[splitLength - 1]) {
            return console.log("result", arr[splitLength])
        }
        
        let newArray = arr.slice(0, splitLength)
        console.log('newArray2', newArray)
        peakFind(newArray)
    }

    if (arr[splitLength] < arr[splitLength + 1]) 
    {
        let newArray = arr.slice(splitLength + 1)
        console.log('newArray', newArray)
        peakFind(newArray)
    }
    
}

peakFind(arr);