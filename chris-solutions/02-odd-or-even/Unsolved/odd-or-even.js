// Write code to return the string "odd" if `num` is an odd number
// and return the string "even" if `num` is an even number

var oddOrEven = function(num) {
    //check if remainder equals 0 after dividing num by 2
    if (num % 2 == 0) {
        //if remainder equals 0, num is even
        return "even";
    } else {
        //otherwise, it's odd
        return "odd";
    }
};
