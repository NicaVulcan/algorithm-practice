// Write code to create a function that accepts a string and returns the string in camelCase

var camelCase = function(str) {
    //split str into all lower case words
    let words = str.toLowerCase().split(" ");
    //loop through words in string starting from second word
    for (let i = 1; i < words.length; i++) {
        //split word into characters
        words[i] = words[i].split("")
        //first character changed to upper case
        words[i][0] = words[i][0].toUpperCase();
        //join characters back into word
        words[i] = words[i].join("");
    }
    //join words into camel case string
    return words.join("")
};
