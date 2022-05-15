// Fill in the body of each function with the code required

var add = function(num1, num2){
    
    //-- if didn't provide a number, exit
    if(isNaN(num1) || isNaN(num2)) return false;
    
    //-- otherwise, return results
    return (num1 + num2)
};

var subtract = function(num1, num2) {

    //-- if didn't provide a number, exit
    if(isNaN(num1) || isNaN(num2)) return false;
    
    //-- otherwise return results
    return (num1 - num2)
};

var multiply = function(num1, num2) {
    
    //-- if didn't provide a number, exit
    if(isNaN(num1) || isNaN(num2))return false;

    //-- Otherwise, return results
    return ( num1 * num2 )
};

var divide = function(num1, num2) {

    //-- if didn't provide a number, exit
    if(isNaN(num1) || isNaN(num2))return false;

    //-- otherwise, return results
    return ( num1 / num2 )
};
