// Write code to add all the numbers in `arr` and return the total

var sumArray = function(arr) {
    //set variable for total
    let total = 0;
    //loop through all numbers in array
    for (i = 0; i < arr.length; i++) {
        //add each new value to previous total
        total += arr[i];
    }
    return total;
};
