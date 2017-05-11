let updateFunctions = [];
for(let i =0; i<2; i++){
  updateFunctions.push(function(){return i;});
}
console.log(updateFunctions[0]());

var findPrice = items => items * 7.99;
console.log(findPrice(3));

var findPrice = (items, tip) => items * 7.99 * (1 + tip);
console.log(findPrice(3, 0.15));

let salary = ['3200', '5000', '7400', '3200'];
let [low, average, high, taco] = salary;
console.log(taco); // deconstructed array uses index position to access values.

// advanced destructuring - will log out nested array values
for(let[a, b] of [[5, 10]]){
  console.log(`${a} ${b}`);
}
