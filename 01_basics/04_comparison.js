// console.log(2 > 1);
// console.log(1 < 2);
// console.log(2 >= 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0);  -> false
// console.log(null == 0); -> false
// console.log(null >= 0); -> true

/*
reason is there's a difference between equality check (==) and comparisons test (>, <, >=, <=)
whn doing comparison it converts null to a number, treating it as 0.
as a result null >= 0 is true and null > 0 is false. */

// console.log(undefined == 0);
// console.log(undefined > 0); all false
// console.log(undefined < 0);

// === it's called strict check it not only checks the value it checks the data type too

// console.log("2" === 2); -> false

