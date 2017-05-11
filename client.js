let updateFunctions = []; //'let' removes hoisting to reduce issues with global variables
for(let i =0; i<2; i++){
  updateFunctions.push(function(){return i;});
}
console.log(updateFunctions[0]());

// const == constant variable that cannot be changed
const MARKUP_PCT=88;
if (MARKUP_PCT > 0) {
  const MARKUP_PCT = 10;
}
console.log(MARKUP_PCT);//will log out 88 because the initial constant is outside of the block scope of the conditional

//arrow function with single parameter
var findPrice = items => items * 7.99;
console.log(findPrice(3));

// arrow function with multiple parameters
var findPrice = (items, tip) => items * 7.99 * (1 + tip);
console.log(findPrice(3, 0.15));

//spread operators can pick apart arrays using spread (...param)
var prices = [12, 20, 18];
var maxPrice = Math.max(...prices);
console.log(maxPrice); //logs out 20 from the array prices

var prices = [12, 20, 18];
var minPrice = Math.min(...prices);
console.log(minPrice); //logs out 12 from the array prices

// template literal - can pass valiables from expressions into strings
let invoiceNum = '1257';
console.log('Template literal:', `Invoice Number: ${invoiceNum}`);

// deconstructed array uses index position to access values.
let salary = ['3200', '5000', '7400', '3200'];
let [low, average, high, taco] = salary;
console.log('deconstructed value of taco:', taco);

// advanced destructuring - will log out nested array values
for(let[a, b] of [[5, 10]]){
  console.log(`${a} ${b}`);
}
