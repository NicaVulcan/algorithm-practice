// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two

var productOfLargestTwo = function(arr) {
    //variables to save largest number, and second largest number
    let largest = arr[0];
    let secondLargest = arr[0];
    //loop through numbers in arr
    for (let i = 0; i < arr.length; i++) {
        //save current number
        let currNumber = arr[i];
        if (currNumber > largest) {
            //if the current number is larger than 'largest', assign 'largest' value to 'secondLargest', and 'currNumber' value to 'largest'
            secondLargest = largest;
            largest = currNumber;
        }
    }
    return largest * secondLargest;
};

// **This one took me longer than I'd care to admit!
