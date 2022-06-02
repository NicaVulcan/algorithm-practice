// Write code to create a function that accepts a string containing only 0s and 1s
// Return true if there are an equal number of 0s and 1s
// Else return false

var zeroesAndOnes = function(str) {
    //counter object
    let counter = {zeroes: 0, ones: 0};
    //loop over string
    for (let char of str) {
        //add to respective counter
        parseInt(char) ? counter.zeroes++ : counter.ones++
    }
    //compare counters
    if (counter.zeroes == counter.ones) return true;
    return false;
};
