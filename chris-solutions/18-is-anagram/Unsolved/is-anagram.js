// TODO: Write code to create a function that accepts two strings
// Return true if the strings are anagrams of each other, otherwise return false

var isAnagram = function (strA, strB) {
    //save character count to object
    let strACount = {};
    //loop through first string
    for (let i = 0; i < strA.length; i++) {
        //save current character to variable
        let currChar = strA[i];
        //if a key in strACount exists for current character, add 1, otherwise create new key and set to 1
        strACount[currChar] ? strACount[currChar]++ : strACount[currChar] = 1;
    }
    //loop through second string
    for (let i = 0; i < strB.length; i++) {
        //save current character to variable
        let currChar = strB[i];
        if (strACount[currChar] && strACount[currChar] > 0) {
            //if currChar exists as a key in strACount, and it hasn't been reduced beyond 0, decrease by 1
            strACount[currChar]--;
        } else {
            //if currChar does not exist as a key in strACount, or if strB has more of that character than strA, it is not an anagram
            return false;
        }
    }
    return true;
};

//*tricky one