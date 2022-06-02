// Write code to create a function that accepts a number and returns true if the number is a perfect square, otherwise it returns false.
// You may not use the built-in Math.sqrt method

var isPerfectSquare = function(num) {
    //0 and 1 are perfect squares but cannot be iterated over
    if (num == 0 || num == 1) {return true};
    if (num < 0) {return false};
    //loop through numbers 0 - num
    for (let i = 1; i < num; i++) {
        //divide num by each iteration
        let result = num / i;
        console.log(result)
        //compare result to iteration
        //if same, true
        //if higher or lower, false
        if (result == i) {
            return true;
        } else if (result < i) {
            return false;
        }
        console.log(`${result} vs. ${i}`)
    }
};

