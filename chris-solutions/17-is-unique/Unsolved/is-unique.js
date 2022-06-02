// TODO: Write code to create a function that accepts an array numbers
// Return `true` is no number appears in the array more than once, else return `false`

var isUnique = function(arr) {
    numObj = {};
    //loop through arr
    for (let i = 0; i < arr.length; i++) {
        //save current number to variable
        let currNum = arr[i];
        //if currNum already exists in numObj, return false
        if (numObj[currNum]) {
            return false;
        }
        //if currNum doesn't already exist in numObj, create it
        numObj[currNum] = 1;
    }
    //if loop goes all the way through without finding a match, return true
    return true;
};

//*This one killed my spirits a little bit
