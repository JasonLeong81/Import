var camper = 3;
var camper = 4;

let k = 1;
k = 2;
// console.log(camper,k);
function x(){
  console.log(camper,k);
}
// x();

// When you declare a variable with the var keyword, it is declared globally, or locally if declared inside a function.
// The let keyword behaves similarly, but with some extra features. When you declare a variable with the let keyword inside a block, statement, or expression, its scope is limited to that block, statement, or expression.



// const////////////////////////////////////////////////////////////////////////////////////////////////

const s = [2,5,7];
s[1] = 0;
// console.log(s);

// to ensure object is non-mutable, use object.freeze instead of const
// Object.freeze(s);
// try{
//   s[0] = 1;}
// catch(err){
//   console.log(err.name);
// }
// console.log(s[0]);



// Arrow Functions (...) ///////////////////////////////////////////////////////////////////////////////////////

const sum = (...args) => {
  const argss = [...args];
  return argss.reduce((a, b) => a + b, 0);
}

// console.log(sum(1,2,3));

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

// console.log(arr2);



// Destructuring assignment ///////////////////////////////////////////////////////////////////////////////////////

// const x = [1, 2, 3, 4, 5];
// const [y, z] = x;
// console.log(y); // 1
// console.log(z); // 2

// let a, b;
// [a=5, b=7] = [1]; // A variable can be assigned a default, in the case that the value unpacked from the array is undefined.
// console.log(a); // 1
// console.log(b); // 7

let a = 1; // Without destructuring assignment, swapping two values requires a temporary variable (or, in some low-level languages, the XOR-swap trick).
let b = 3;

[a, b] = [b, a];
// console.log(a); // 3
// console.log(b); // 1

const arr = [1,2,3];
[arr[2], arr[1]] = [arr[1], arr[2]];
// console.log(arr); // [1,3,2]

function f() {
  return [1, 2];
}

// let a, b;
// [a, b] = f();
// console.log(a); // 1
// console.log(b); // 2

// function f() {
//   return [1, 2, 3];
// }

// const [a, , b] = f();
// console.log(a); // 1
// console.log(b); // 3

// const HIGH_TEMPERATURES = {
//   yesterday: 75,
//   today: 77,
//   tomorrow: 80
// };
//
// // change code below this line
//
// const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;
//
// // change code above this line
//
// console.log(highToday); // should be 77
// console.log(highTomorrow); // should be 80

// const source = [1,2,3,4,5,6,7,8,9,10];
// function removeFirstTwo(list) {
//   "use strict";
//   // Only change code below this line
//   const [a,b,...arr] = list; // Change this line
//   // Only change code above this line
//   return arr;
// }
// const arr = removeFirstTwo(source);

// const stats = {
//   max: 56.78,
//   standard_deviation: 4.34,
//   median: 34.54,
//   mode: 23.87,
//   min: -0.75,
//   average: 35.85
// };
// const half = ({ max, min }) => (max + min) / 2.0;

// const createPerson = (name, age, gender) => {
//   "use strict";
//   return {
//     name,
//     age,
//     gender
//   };
//
// };
// console.log(createPerson("Zodiac Hasbro", 56, "male"));




// Template Literal //////////////////////////////////////////////////////////
// ${} this is basically it

// short to way create Functions //////////////////////////////////////////
// When defining functions within objects
// const bicycle = {
//   gear: 2,
//   setGear(newGear) {
//     this.gear = newGear;
//   }
// };
// // Only change code above this line
// bicycle.setGear(3);
// console.log(bicycle.gear);



// Getters and setters ////////////////////////////////////////////////////////////////////
// Getter functions are meant to simply return (get) the value of an object's private variable to the user without the user directly accessing the private variable.
// Setter functions are meant to modify (set) the value of an object's private variable based on the value passed into the setter function. This change could involve calculations, or even overwriting the previous value completely.
// It is a convention (this._author = author;)

// class Book {
//   constructor(author) {
//     this._author = author;
//   }
//   // getter
//   get writer() {
//     return this._author;
//   }
//   // setter
//   set writer(updatedAuthor) {
//     this._author = updatedAuthor;
//   }
// }
// const lol = new Book('anonymous');
// console.log(lol.writer);  // anonymous
// lol.writer = 'wut';
// console.log(lol.writer);  // wut


// EXPORT & IMPORT//////////////////////////////////////////////////////////////////
// const uppercaseString = (string) => {
//   return string.toUpperCase();
// }
//
// const lowercaseString = (string) => {
//   return string.toLowerCase()
// }
//
// export {uppercaseString};
// export {lowercaseString};
// import {uppercaseString, lowercaseString} from './index.js'; // can also import without {} if we are only importing one thing
// import * as stringFunctions from "./string_functions.js";









// Since export default is used to declare a fallback value for a module or file, you can only have one value be a default export in each module or file. Additionally, you cannot use export default with var, let, or const
import add from './js2.js';
console.log(add(1,2));









// Promises //////////////////////////////////////////////////////////////////
// const makeServerRequest = new Promise((resolve, reject) => {
//   // responseFromServer represents a response from a server
//   let responseFromServer = true;
//   if(responseFromServer) {
//     resolve('We got the data');
//     // Change this line
//   } else {
//     reject('Data not received');
//     // Change this line
//   }
// });
// makeServerRequest.then(result => {
//   console.log(result);
// });
// makeServerRequest.catch(error => {
//   console.log(error);
// });
//
// // makeServerRequest;
// Promise.all([
//   makeServerRequest
// ]).then((text)=>{
//   console.log(text);
// });







// Comments
