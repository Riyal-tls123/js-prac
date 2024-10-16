let score = 213

console.log(typeof score);

let value = "345"

console.log(typeof value);
console.log(value)

let valueInNumber = Number(value)
console.log(typeof valueInNumber);
console.log(value)

let point = "33abc"

console.log(typeof point);
let pointInNumber = Number(point)
console.log(typeof pointInNumber);
console.log(pointInNumber);

/*
"33" whn we convert the number it gives "33"->33
"33abc"->NaN
true-> 1
false->0
*/

let isLoggedIn = ""

let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn)

/*
now if I convert a empty string "" into boolean
it will give false; ""->false and "abk"->ture
*/

let anyNum = 45

let StringNumber = String(anyNum)

console.log(StringNumber)
console.log(typeof StringNumber)

// this is how we convert into string