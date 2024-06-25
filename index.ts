// 1 _______________________________________ NAMED FUNCTION ___________________________________________________

// A named function is one where you declare and call a function by its given name. Example: Named Function. function display() { console.log("Hello TypeScript!" ); } display(); //Output: Hello TypeScript. Functions can also include parameter types and return type.
// ____________________________________________________________________________________________________________

console.log("\n\t\tFUN1 ---> NAME FUNCTION\n");
function myfunction(n1: number, n2: number) {
  console.log("Multiply n1 * n2");
  return n1 * n2;
}
console.log(myfunction(4, 8));
// 2 ______________________________________ ANONYMOUS FUNCTION _________________________________________________

// In TypeScript, an Anonymous Function Type represents a function without a specific name. It defines the shape of functions by specifying parameter types and return types, allowing flexible and reusable function definitions.
// ______________________________________________________________________________________________________________

console.log("\n\t\tFUN2 ---> ANONYMOUS FUNCTION\n");
setTimeout(function () {
  console.log(
    "Anonymous function pora code run hone k bad execute hota hai 'Hello World'"
  );
}, 500);
// 3 _________________________________________ ARROW FUNCTION ___________________________________________________

// Arrow functions, a new way to write anonymous function expressions are similar to lambda in other programming languages. It is also called the fat arrow. The arrow function has a lexical scoping of the this keyword. Because of arrow functions, we do not need to type the word function multiple times.
// ______________________________________________________________________________________________________________

console.log("\n\t\tFUN3 ---> ARROW FUNCTION");
let arrowFun = (name: string) => {
  return name;
};
console.log(arrowFun("Sana"));

// 4 ______________________________ IMEDIATELY INVOKED FUNCTIONS EXPRESSIONS ___________________________________

// An immediately invoked function expression (IIFE) is a design pattern that produces a lexical scope using function scoping.
// ______________________________________________________________________________________________________________

console.log("\n\t\tFUN4 ---> IIFE FUNCTION\n");
(function yourName(name: string, age: number) {
  console.log(`"Hello",${name},Your Age Is ${age}`);
})("Hamza", 34);

console.log("\n\t\tFUN4 ---> IIFE FUNCTION + ARROW FUNCTION\n");

((fName: string, lName: string) => {
  console.log(`Your Name is ${fName} ${lName}`);
})("Huzaifa", "Faisal");

// 5 _______________________________ HIGHER ORDER FUNCTION ____________________________________________________

// In essence, a Higher Order function in TypeScript is a function that either takes one or more functions as parameters, returns a function as a result, or both. These parameters and return types can all be strictly typed.

// __________________________________________________________________________________________________________

// 5A ____________________________________HIGHER ORDER FUNCTION MAP DEFINATION_________________________________

// In this example, map() is a higher order function that applies a function to each element of the array. The function it applies is an arrow function that takes a number and returns its square.
// ______________________________________________________________________________________________________________

console.log("\n\t\tFun5 ---> HIGHER ORDER FUNCTION ==>MAP,FILTER,REDUCE\n");
console.log("\n\t\tMAP FUNCTION\n");
let arr = [1, 2, 3, 4, 5];

let newArr = arr.map((elem, i) => {
  console.log("index", i);
  return elem + 10;
});
console.log("orignal Array", arr);
console.log("newArray", newArr);

// 5B ___________________________ HIGHER ORDER FUNCTION FILTER DEFINATION ______________________________________

// filter() is an inbuilt TypeScript function which is used to creates a new array with all elements that pass the test implemented by the provided function. Syntax: array.filter(callback[, thisObject])
// ______________________________________________________________________________________________________________

console.log("\n\t\tFILTER FUNCTION\n");
let arr2 = [1, 2, 3, 4, 5];

let newArr2 = arr2.filter((val) => {
  return val < 4 && val > 2;
  // val == 4
  //   val < 4;
});
console.log("original Array2", arr2);
console.log("newArr2", newArr2);

// 5C _______________________________ HIGHER ORDER FUNCTION REDUCE DEFINATION __________________________________

// reduce() is an inbuilt TypeScript function which is used to apply a function against two values of the array as to reduce it to a single value. Syntax: array.reduce(callback[, initialValue])
// ______________________________________________________________________________________________________________

console.log("\n\t\tREDUCE METHOD\n");
let sum = [5, 10, 15, 20, 25];

let res = sum.reduce((total, currentItem) => {
  console.log(`Total ${total} CurrentItem ${currentItem}`);
  return total + currentItem;
}, 0);
console.log(res);

// 6 ___________________________________ CONSTRUCTOR FUNCTION _________________________________________________

// A class in TypeScript can also include properties, methods, and constructor logic. Second, what is a constructor? A constructor is a special function that exists inside a class, that is called only once when the object is created. Classes are unique, and therefore so are the constructor function calls.
// ____________________________________________________________________________________________________________

console.log("\n\t\tFUN6 ---> CONSTRUCTER FUNCTION\n");
class Student {
  name: string = "";
  age: number = 0;
  constructor(n: string, age: number) {
    this.name = n;
    this.age = age;
  }
}
let std1 = new Student("sana", 34);
let std2 = new Student("hamza", 13);
let std3 = new Student("huzaifa", 32);

console.log(std1, std2, std3);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++