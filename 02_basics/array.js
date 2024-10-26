const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Ironman", "Thor"]
const myArr2 = new Array(1, 2, 3, 4)

// arrays in js is resizable nd eta mixed type er data rakha jete pre mne same array te string,number etc store kra jay

// console.log(myArr[0]);

// myArr.push(6)
// myArr.push(7)
// myArr.pop() -> kono input dite lge na just last element ta remove kre dey

// myArr.unshift(9)  -> eta array er suru te add krte help kre
// myArr.shift() -> similarly 1st element k dlt kre dey

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9)); -> element na thkle output -1 dey

// const newArr = myArr.join() -> joins the elements together and turns them into string data type


// console.log(typeof myArr);
// console.log(typeof newArr); 


console.log("A", myArr );

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C", myArr);
console.log(myn2);


