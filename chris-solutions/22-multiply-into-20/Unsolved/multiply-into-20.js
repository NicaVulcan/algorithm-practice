// const multiplyInto20 = function(arr) {
//   // TODO: Write Your Code Here
//   //loop through arr
//   for (let num of arr) {
//     //loop again to multiply each element by all other elemnts
//     for (let el2 of arr) {
//       let product = el1 * el2;
//       //if product is 20, return true
//       if (product === 20) { 
//         console.log(`${el1} times ${el2} is 20`);
//         return true;
//       }
//     }
//   }
//   return false;
// };

// * another O^2 :/

const multiplyInto20 = function (arr) {
  //save factors of 20 to object
  let factors = {};
  //loop through arr
  for (let num of arr) {
    //save factor to variable
    let factor = 20/num;
    //if the factor is an integer, save to factors object
    if (Number.isInteger(factor)) {
      factors[num] = true;
    }
    //if the complementary factor exists in factors object, return true
    if (factors[factor]) return true;
  }
  return false;
};

// * that's better!!
