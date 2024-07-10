let score = "Kaivalya"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(valueInNumber);

// "23" => 23
// "23abc" => NaN (Not an Number) but type of NaN is number because we assign it as Number(score)
//  true => 1; false => 0

let isLoggedIn = "Kaivalya"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false 
// "" => false 
// "Kaivalya" => true

let someNumber = 23

let stringNumber = String(someNumber)
console.log(someNumber);
console.log(typeof stringNumber); 