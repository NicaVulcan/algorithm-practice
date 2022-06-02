// TODO: Write code to create a function that accepts an array of numbers and a target number
// if the target number is present in the array, return its index
// else return -1
// You may not use the `indexOf`, `lastIndexOf` or `includes` methods

var linearSearch = function (arr, target) {
    //if empty arr, return -1
    if (!arr.length) {return -1}
    //loop through arr
    for (let i = 0; i < arr.length; i++) {
        //if target is in arr, return i
        if (arr[i] == target) {
            return i;
        }
    }
    //if target is not in arr, return -1
    return -1;
};
