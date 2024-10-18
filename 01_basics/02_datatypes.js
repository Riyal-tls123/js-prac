// "use strict";  // treat all JS code as newer ver

// alert (3+3) // we are using jsnode, not browser so this syntax will not work

/*
types of data types
number -> 2 to the power 53 obdhi ney
bigint r o boro input newar jonno kaje lge
string -> ""
boolean -> true/false
null -> standalone value
undefined -> jar value dewa hoy ni akhn o
symbol -> unique 
object
*/

// console.log(typeof null);
// console.log(typeof undefined);

const id = Symbol('123')
const anotherId = Symbol('123')

// although they both have 123 input but they are different

console.log(id === anotherId);

// so both have 123 input but they are not equal bcz of Symbol jkhn kono input k amader unique krte hoy tkhn amra Symbol datatype use kri
