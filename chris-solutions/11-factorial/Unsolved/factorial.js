// Write code to create a function that returns the factorial of `num`

var factorial = function(num) {
    //set variable for product
    let product = 1;
    //loop through all numbers from num down to 1
    while (num > 1) {
        //multiply each number by product
        product *= num;
        //decrease num by 1 at each iteration
        num--;
    }
    return product;
};
