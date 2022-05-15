// Write code to loop through the array of numbers
// At each iteration, if a number is evenly divisible by 3 print "Fizz"
// If a number is evenly divisible by 5 print "Buzz"
// If a number is evenly divisible by both 3 AND 5, print "Fizz Buzz"
// If a number is not divisible by 3 or 5, print the number

var fizzBuzz = function(arr) {
    //loop through arr
    for (let i = 0; i < arr.length; i++) {
        //save current number to 'num'
        let num = arr[i];
        if (num % 15 == 0) {
            //return 'Fizz Buzz' if divisible by 15 (3 & 5)
            console.log('Fizz Buzz');
        } else if (num % 3 == 0) {
            //return 'Fizz' if divisible by 3
            console.log('Fizz');
        } else if (num % 5 == 0) {
            //return 'Buzz' if divisible by 5
            console.log('Buzz');
        } else {
            //return num if not divisible by either 3 or 5
            console.log(num);
        }
    }
};
