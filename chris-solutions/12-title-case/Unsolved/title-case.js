// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

var titleCase = function(str) {
    //turn str to arr
    let strToArr = str.split(" ");
    //variables for new arr and new string
    let newString = [];
    //loop through each word in array
    strToArr.map(word => {
        //change first letter to uppercase
        let firstLetter = word[0].toUpperCase();
        //separate the rest of the word
        let restOfWord = word.slice(1);
        //connect both parts of word and push to array
        newString.push(firstLetter + restOfWord);
    })
    //turn array back to string
    return newString.join(" ");
};
