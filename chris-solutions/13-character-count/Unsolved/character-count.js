// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string

var characterCount = function(str) {
    //convert str to array of characters
    arr = str.split("");
    //character count object
    charCountObj = {};
    for (let i = 0; i < arr.length; i++) {
        //save current character to variable
        let currentChar = arr[i];
        if (!charCountObj[currentChar]) {
            //if currentChar hasn't been counted, add to charCountObj
            charCountObj[currentChar] = 1;
        } else {
            //if it has been counte, add to the count
            charCountObj[currentChar] += 1;
        }
    }
    return charCountObj
};
