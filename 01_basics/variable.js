const accountId = 144553
let accountEmail = "kaivalya@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed



accountEmail = "mohan@google.com"
accountPassword = "222111"
accountCity = "Latur"
console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/



console.table([accountId, accountEmail, accountPassword, accountCity, accountState])