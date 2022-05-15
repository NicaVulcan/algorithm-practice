// Write code to return the the number of vowels in `str`

var vowelCount = function(str) {
    //variable for vowel count
    let vowels = 0;
    //loop through each character in str
    for (let i = 0; i < str.length; i++) {
        //save current (lower case) character to variable
        let currentChar = str[i].toLowerCase();
        //check if character is a vowel
        if (currentChar == "a" || 
            currentChar =="e" || 
            currentChar =="i" || 
            currentChar =="o"|| 
            currentChar =="u") {
                console.log(currentChar)
                vowels += 1;
        }
    }
    return vowels;
};
