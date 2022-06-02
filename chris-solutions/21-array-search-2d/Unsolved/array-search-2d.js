// Write code to create a function that accepts a two-dimensional array
// Each 2D element contains either the string "X" or "O" (both capitalized)
// Return the number of times "X" appears in the 2D array

var arraySearch2D = function(arr) {
    //X count variable
    let xCount = 0;
    //loop through array
    arr.map(string => {
        string.map(char => {
            //search for X in each element
            //if X, xCount++
            if (char == "X") {
                xCount++;
            }
        })
        //return XCount
    })
    return xCount;
};

//* there has to be a non O^2 way to do this

