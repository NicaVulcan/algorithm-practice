// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

var isPalindrome = function(str) {
    //save reversed str to variable (turn into array, reverse order, join back to string)
    let strReversed =  str.split('').reverse().join('');
    //check to see if str matches strReversed
    if (str == strReversed) {
        //if a match, return true
        return true;
    } else {
        //if not a match, return false
        return false;
    }
};
