// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

let num1 = 2
let num3 = 4

function multadd(num2) {
 let ret = num2 * add(num3);
 return ret;

 function add(num3){
   let ret2 = num3 + 2;
   return ret2;

 }
}

let answer = multadd(num1);
console.log(answer);


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
