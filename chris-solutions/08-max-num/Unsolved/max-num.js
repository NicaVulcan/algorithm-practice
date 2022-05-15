// Write code to return the largest number in the given array

var maxNum = function(arr) {
    //save highest number, starting at 0
    let highestNum = 0;
    //loop through arr
    for (let i = 0; i < arr.length; i++) {
        //save current number to variable
        let currentNum = arr[i];
        //if currentNum is higher, save it to highestNum
        if (currentNum > highestNum) {
            highestNum = currentNum;
        }
    }
    return highestNum;
};
