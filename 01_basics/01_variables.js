const accountId = 144553
let accountEmail = "abk@gmail.com"
var accountPassword = "12345"
accountCity = "Kolkata"
let accountState;

// accountId = 2 // not working

accountEmail = "abhra@gmail.com"
accountPassword = "1234"
accountCity = "Rishra"

/*
prefer not to use var because of
issue in block scope and functional scope
*/

console.table([accountEmail, accountId, accountPassword, accountCity,accountState])