let num = Number("123") + 7;
console.log(num); 

let val = 0;
console.log(!val ? "Invalid" : val); 

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) continue;
    process.stdout.write(i + (i < 10 ? ", " : ""));
}
console.log(); 

let arr = [1, 2, 3, 4, 5];
let evens = arr.filter(x => x % 2 === 0);
console.log(evens); 
let arr1 = [1, 2, 3], arr2 = [4, 5, 6];
let merged = [...arr1, ...arr2];
console.log(merged); 

let dayNum = 2;
let day;
switch(dayNum){
    case 1: day="Sunday"; break;
    case 2: day="Monday"; break;
    case 3: day="Tuesday"; break;
    case 4: day="Wednesday"; break;
    case 5: day="Thursday"; break;
    case 6: day="Friday"; break;
    case 7: day="Saturday"; break;
    default: day="Invalid"; 
}
console.log(day); 

let strings = ["a","ab","abc"];
let lengths = strings.map(s => s.length);
console.log(lengths); 

function divisibleBy3And5(n){
    if(n % 3 === 0 && n % 5 === 0) return "Divisible by both";
    else return "Not divisible by both";
}
console.log(divisibleBy3And5(15)); 

const square = x => x*x;
console.log(square(5)); 

function formatPerson({name, age}){
    return `${name} is ${age} years old`;
}
const person = {name:'John', age:25};
console.log(formatPerson(person)); 

function sumAll(...nums){
    return nums.reduce((a,b)=>a+b,0);
}
console.log(sumAll(1,2,3,4,5)); 

function delayedSuccess(){
    return new Promise(resolve => setTimeout(()=>resolve("Success"), 3000));
}
delayedSuccess().then(console.log); 

function maxInArray(arr){
    return Math.max(...arr);
}
console.log(maxInArray([1,3,7,2,4]));

function getObjectKeys(obj){
    return Object.keys(obj);
}
console.log(getObjectKeys({name:"John", age:30})); 

function splitWords(str){
    return str.split(" ");
}
console.log(splitWords("The quick brown fox")); 

// JavaScript Essay Answers

/* 1. Difference between forEach and for...of
- forEach is a method on arrays. It takes a callback and executes it for each element. You cannot `break` out of a forEach loop.
- for...of is a language construct for iterating over iterable objects (like arrays, strings, sets, maps). You *can* use `break` or `continue`.

Example:
*/
const arr3 = [1,2,3];
arr3.forEach(x => console.log(x)); // prints 1 2 3
for (const x of arr3) {
    if(x===2) break; 
    console.log(x); // prints 1
}

/* 2. Hoisting and Temporal Dead Zone (TDZ)
Hoisting: JavaScript moves function and variable declarations to the top of their scope at runtime.

TDZ: Variables declared with let or const exist in the scope but cannot be accessed until the declaration is evaluated, otherwise a ReferenceError occurs.
*/
// Example :
console.log(a); // undefined (hoisted)
var a = 5;

console.log(b); // ReferenceError (TDZ)
let b = 10;

/* 3. Difference between == and ===
== checks value equality with type coercion.

=== checks strict equality (no type coercion, must be same type and value).
*/
//Example:
"5" == 5  // true
"5" === 5 // false

/* 4. try-catch and async operations
try-catch allows you to catch exceptions to prevent your program from crashing.

In async functions, errors can be caught using try-catch around await.
*/
// Example:
try {
    let data = await fetchData();
    console.log(data);
} catch(err) {
    console.error("Error fetching data:", err);
}

/* 5. Type conversion vs coercion
Type conversion: Explicitly converting a type to another type.
Type coercion: JavaScript implicitly converts types during operations.
*/

// Example :
let str = "123";
let num1 = Number(str); // conversion

"5" - 2 // 3 (string coerced to number)
"5" + 2 // "52" (number coerced to string)

