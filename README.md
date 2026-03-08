# JavaScript Reference Guide

A comprehensive guide to JavaScript programming language.

## Table of Contents

- [Introduction](#introduction)
- [Variables](#variables)
- [Data Types](#data-types)
- [Operators](#operators)
- [Control Flow](#control-flow)
- [Functions](#functions)
- [Arrays](#arrays)
- [Objects](#objects)
- [Classes](#classes)
- [Promises & Async](#promises--async)
- [DOM Manipulation](#dom-manipulation)
- [ES6+ Features](#es6-features)
- [Common Methods](#common-methods)

## Introduction

JavaScript is a high-level, interpreted programming language that is one of the core technologies of the web. It enables interactive web pages and is essential for web development.

```javascript
console.log("Hello, JavaScript!");
```

## Variables

### Variable Declarations

```javascript
// var - function scoped (avoid in modern JS)
var oldWay = "function scoped";

// let - block scoped, can be reassigned
let age = 25;
age = 26;

// const - block scoped, cannot be reassigned
const name = "John";
// name = "Jane"; // Error!

// const with objects - object is mutable
const person = { name: "John" };
person.name = "Jane"; // This works!
```

## Data Types

### Primitive Types

```javascript
// String
let text = "Hello";
let text2 = 'World';
let text3 = `Template literal ${text}`;

// Number
let integer = 42;
let float = 3.14;
let negative = -10;

// Boolean
let isTrue = true;
let isFalse = false;

// Undefined
let notDefined;
console.log(notDefined); // undefined

// Null
let empty = null;

// Symbol (ES6)
let sym = Symbol("unique");

// BigInt (ES2020)
let bigNumber = 1234567890123456789012345678901234567890n;
```

### Reference Types

```javascript
// Object
let obj = { key: "value" };

// Array
let arr = [1, 2, 3];

// Function
let func = function() {};
```

### Type Checking

```javascript
typeof "text";      // "string"
typeof 42;          // "number"
typeof true;        // "boolean"
typeof undefined;   // "undefined"
typeof null;        // "object" (known quirk)
typeof {};          // "object"
typeof [];          // "object"
typeof function(){}; // "function"

// Better array check
Array.isArray([]);  // true
```

## Operators

### Arithmetic Operators

```javascript
let x = 10, y = 3;

x + y;  // 13 (Addition)
x - y;  // 7  (Subtraction)
x * y;  // 30 (Multiplication)
x / y;  // 3.333... (Division)
x % y;  // 1  (Modulus/Remainder)
x ** y; // 1000 (Exponentiation)

x++;    // Increment
x--;    // Decrement
```

### Comparison Operators

```javascript
// Equality
5 == "5";   // true (loose equality, type coercion)
5 === "5";  // false (strict equality, no coercion)
5 != "5";   // false
5 !== "5";  // true

// Relational
10 > 5;     // true
10 < 5;     // false
10 >= 10;   // true
10 <= 5;    // false
```

### Logical Operators

```javascript
true && false;  // false (AND)
true || false;  // true (OR)
!true;          // false (NOT)

// Short-circuit evaluation
let result = null || "default";  // "default"
let result2 = "value" || "default"; // "value"

// Nullish coalescing (ES2020)
let value = null ?? "default";  // "default"
let value2 = 0 ?? "default";    // 0
```

## Control Flow

### Conditional Statements

```javascript
// if-else
if (condition) {
    // code
} else if (anotherCondition) {
    // code
} else {
    // code
}

// Ternary operator
let result = condition ? valueIfTrue : valueIfFalse;

// Switch
switch (value) {
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    default:
        console.log("Other");
}
```

### Loops

```javascript
// for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// while loop
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// do-while loop
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 5);

// for...of (iterate over values)
for (let value of [1, 2, 3]) {
    console.log(value);
}

// for...in (iterate over keys)
for (let key in {a: 1, b: 2}) {
    console.log(key);
}

// break and continue
for (let i = 0; i < 10; i++) {
    if (i === 3) continue; // Skip 3
    if (i === 8) break;    // Stop at 8
    console.log(i);
}
```

## Functions

### Function Declaration

```javascript
function greet(name) {
    return `Hello, ${name}!`;
}
```

### Function Expression

```javascript
const greet = function(name) {
    return `Hello, ${name}!`;
};
```

### Arrow Functions (ES6)

```javascript
// Basic syntax
const greet = (name) => {
    return `Hello, ${name}!`;
};

// Concise syntax (implicit return)
const greet = name => `Hello, ${name}!`;

// Multiple parameters
const add = (a, b) => a + b;

// No parameters
const sayHi = () => "Hi!";
```

### Default Parameters

```javascript
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}

greet();        // "Hello, Guest!"
greet("John");  // "Hello, John!"
```

### Rest Parameters

```javascript
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

sum(1, 2, 3, 4); // 10
```

### Callback Functions

```javascript
function processData(callback) {
    let data = "processed";
    callback(data);
}

processData((result) => {
    console.log(result);
});
```

## Arrays

### Creating Arrays

```javascript
let arr1 = [1, 2, 3];
let arr2 = new Array(1, 2, 3);
let arr3 = Array.of(1, 2, 3);
let arr4 = Array.from("abc"); // ['a', 'b', 'c']
```

### Array Methods

```javascript
let arr = [1, 2, 3, 4, 5];

// Add/Remove elements
arr.push(6);        // Add to end
arr.pop();          // Remove from end
arr.unshift(0);     // Add to beginning
arr.shift();        // Remove from beginning
arr.splice(2, 1);   // Remove at index

// Iteration
arr.forEach(item => console.log(item));

// Transformation
let doubled = arr.map(x => x * 2);
let filtered = arr.filter(x => x > 2);
let sum = arr.reduce((acc, x) => acc + x, 0);

// Search
arr.find(x => x > 3);      // First element > 3
arr.findIndex(x => x > 3); // Index of first element > 3
arr.includes(3);           // true
arr.indexOf(3);            // Index of 3

// Other useful methods
arr.slice(1, 3);    // Extract portion
arr.concat([6, 7]); // Merge arrays
arr.join(", ");     // "1, 2, 3, 4, 5"
arr.reverse();      // Reverse in place
arr.sort();         // Sort in place

// Some/Every
arr.some(x => x > 4);  // true if any match
arr.every(x => x > 0); // true if all match
```

### Spread Operator

```javascript
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

// Copy array
let copy = [...arr1];

// Merge arrays
let merged = [...arr1, ...arr2];
```

### Destructuring

```javascript
let [a, b, c] = [1, 2, 3];
console.log(a); // 1

// Skip elements
let [first, , third] = [1, 2, 3];

// Rest pattern
let [head, ...tail] = [1, 2, 3, 4];
console.log(tail); // [2, 3, 4]
```

## Objects

### Creating Objects

```javascript
// Object literal
let person = {
    name: "John",
    age: 30,
    greet() {
        return `Hello, I'm ${this.name}`;
    }
};

// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

let person2 = new Person("Jane", 25);

// Object.create
let person3 = Object.create(person);
```

### Accessing Properties

```javascript
let obj = { name: "John", age: 30 };

// Dot notation
obj.name;

// Bracket notation
obj["name"];
obj["first name"]; // For keys with spaces

// Dynamic access
let key = "name";
obj[key]; // "John"
```

### Object Methods

```javascript
let obj = { a: 1, b: 2, c: 3 };

// Get keys, values, entries
Object.keys(obj);    // ['a', 'b', 'c']
Object.values(obj);  // [1, 2, 3]
Object.entries(obj); // [['a', 1], ['b', 2], ['c', 3]]

// Copy/Merge
Object.assign({}, obj, { d: 4 });
let copy = { ...obj }; // Spread operator

// Freeze/Seal
Object.freeze(obj);  // Make immutable
Object.seal(obj);    // Prevent add/remove properties
```

### Destructuring

```javascript
let person = { name: "John", age: 30, city: "NYC" };

// Basic destructuring
let { name, age } = person;

// Rename variables
let { name: personName } = person;

// Default values
let { country = "USA" } = person;

// Rest pattern
let { name, ...rest } = person;
console.log(rest); // { age: 30, city: "NYC" }
```

### Computed Property Names

```javascript
let key = "dynamic";
let obj = {
    [key]: "value",
    [`${key}_2`]: "value2"
};
```

## Classes

### Basic Class

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        return `Hello, I'm ${this.name}`;
    }
    
    // Static method
    static species() {
        return "Homo sapiens";
    }
}

let person = new Person("John", 30);
person.greet(); // "Hello, I'm John"
Person.species(); // "Homo sapiens"
```

### Inheritance

```javascript
class Animal {
    constructor(name) {
        this.name = name;
    }
    
    speak() {
        return `${this.name} makes a sound`;
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Call parent constructor
        this.breed = breed;
    }
    
    speak() {
        return `${this.name} barks`;
    }
}

let dog = new Dog("Rex", "Labrador");
dog.speak(); // "Rex barks"
```

### Getters and Setters

```javascript
class Circle {
    constructor(radius) {
        this._radius = radius;
    }
    
    get radius() {
        return this._radius;
    }
    
    set radius(value) {
        if (value > 0) {
            this._radius = value;
        }
    }
    
    get area() {
        return Math.PI * this._radius ** 2;
    }
}

let circle = new Circle(5);
console.log(circle.area); // 78.54...
```

## Promises & Async

### Promises

```javascript
// Creating a promise
let promise = new Promise((resolve, reject) => {
    let success = true;
    
    if (success) {
        resolve("Success!");
    } else {
        reject("Error!");
    }
});

// Using a promise
promise
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => console.log("Done"));
```

### Async/Await

```javascript
// Async function
async function fetchData() {
    try {
        let response = await fetch("https://api.example.com/data");
        let data = await response.json();
        return data;
    } catch (error) {
        console.error("Error:", error);
    }
}

// Call async function
fetchData().then(data => console.log(data));
```

### Promise Methods

```javascript
// Promise.all - wait for all
Promise.all([promise1, promise2, promise3])
    .then(results => console.log(results));

// Promise.race - first to complete
Promise.race([promise1, promise2])
    .then(result => console.log(result));

// Promise.allSettled - wait for all (success or fail)
Promise.allSettled([promise1, promise2])
    .then(results => console.log(results));

// Promise.any - first to succeed
Promise.any([promise1, promise2])
    .then(result => console.log(result));
```

## DOM Manipulation

### Selecting Elements

```javascript
// Get element by ID
document.getElementById("myId");

// Get elements by class name
document.getElementsByClassName("myClass");

// Get elements by tag name
document.getElementsByTagName("div");

// Query selector (CSS selectors)
document.querySelector(".myClass");      // First match
document.querySelectorAll(".myClass");   // All matches
```

### Modifying Elements

```javascript
let element = document.querySelector("#myId");

// Change content
element.textContent = "New text";
element.innerHTML = "<strong>Bold text</strong>";

// Change attributes
element.setAttribute("class", "newClass");
element.getAttribute("class");
element.removeAttribute("class");

// Change styles
element.style.color = "red";
element.style.backgroundColor = "blue";

// Add/Remove classes
element.classList.add("active");
element.classList.remove("active");
element.classList.toggle("active");
element.classList.contains("active");
```

### Creating and Removing Elements

```javascript
// Create element
let div = document.createElement("div");
div.textContent = "Hello";

// Append to DOM
document.body.appendChild(div);
document.body.insertBefore(div, document.body.firstChild);

// Remove element
div.remove();
// or
div.parentNode.removeChild(div);
```

### Event Listeners

```javascript
let button = document.querySelector("#myButton");

// Add event listener
button.addEventListener("click", function(event) {
    console.log("Button clicked!");
});

// Arrow function
button.addEventListener("click", (event) => {
    console.log("Button clicked!");
});

// Remove event listener
function handleClick(event) {
    console.log("Clicked!");
}
button.addEventListener("click", handleClick);
button.removeEventListener("click", handleClick);

// Event object
button.addEventListener("click", (e) => {
    e.preventDefault();  // Prevent default action
    e.stopPropagation(); // Stop event bubbling
    console.log(e.target); // Element that triggered event
});
```

## ES6+ Features

### Template Literals

```javascript
let name = "John";
let age = 30;

// String interpolation
let message = `Hello, ${name}! You are ${age} years old.`;

// Multi-line strings
let multiline = `
    This is
    a multi-line
    string
`;

// Tagged templates
function tag(strings, ...values) {
    console.log(strings); // Array of string parts
    console.log(values);  // Array of values
}
tag`Hello ${name}, you are ${age}!`;
```

### Modules

```javascript
// export.js
export const PI = 3.14159;
export function square(x) {
    return x * x;
}
export default class Calculator {}

// import.js
import Calculator, { PI, square } from './export.js';
import * as math from './export.js';
```

### Optional Chaining

```javascript
let user = {
    name: "John",
    address: {
        street: "Main St"
    }
};

// Without optional chaining
let street = user && user.address && user.address.street;

// With optional chaining
let street = user?.address?.street;
let nonexistent = user?.contact?.phone; // undefined (no error)
```

### Nullish Coalescing

```javascript
// Old way (falsy values: 0, "", false, null, undefined, NaN)
let value = input || "default"; // "default" if input is 0 or ""

// New way (only null or undefined)
let value = input ?? "default"; // Uses input if it's 0 or ""
```

### Map and Set

```javascript
// Map - key-value pairs
let map = new Map();
map.set("key", "value");
map.set(123, "number key");
map.get("key");     // "value"
map.has("key");     // true
map.delete("key");
map.clear();

// Iterate map
for (let [key, value] of map) {
    console.log(key, value);
}

// Set - unique values
let set = new Set([1, 2, 3, 3, 3]); // Set {1, 2, 3}
set.add(4);
set.has(2);    // true
set.delete(2);
set.clear();

// Iterate set
for (let value of set) {
    console.log(value);
}
```

## Common Methods

### String Methods

```javascript
let str = "Hello World";

str.length;              // 11
str.toUpperCase();       // "HELLO WORLD"
str.toLowerCase();       // "hello world"
str.trim();              // Remove whitespace
str.includes("World");   // true
str.startsWith("Hello"); // true
str.endsWith("World");   // true
str.indexOf("World");    // 6
str.slice(0, 5);         // "Hello"
str.substring(0, 5);     // "Hello"
str.split(" ");          // ["Hello", "World"]
str.replace("World", "JS"); // "Hello JS"
str.replaceAll("l", "L");   // "HeLLo WorLd"
str.repeat(2);           // "Hello WorldHello World"
str.charAt(0);           // "H"
str.charCodeAt(0);       // 72
```

### Number Methods

```javascript
let num = 42.567;

num.toFixed(2);          // "42.57"
num.toPrecision(4);      // "42.57"
parseInt("42");          // 42
parseFloat("42.5");      // 42.5
Number.isInteger(42);    // true
Number.isNaN(NaN);       // true
Math.round(num);         // 43
Math.floor(num);         // 42
Math.ceil(num);          // 43
Math.max(1, 2, 3);       // 3
Math.min(1, 2, 3);       // 1
Math.random();           // Random between 0 and 1
Math.abs(-5);            // 5
Math.pow(2, 3);          // 8
Math.sqrt(16);           // 4
```

### Date Methods

```javascript
let now = new Date();
let date = new Date("2024-01-01");

now.getFullYear();       // 2024
now.getMonth();          // 0-11 (January = 0)
now.getDate();           // 1-31
now.getDay();            // 0-6 (Sunday = 0)
now.getHours();          // 0-23
now.getMinutes();        // 0-59
now.getSeconds();        // 0-59
now.getTime();           // Milliseconds since 1970
now.toISOString();       // "2024-01-01T00:00:00.000Z"
now.toLocaleDateString(); // "1/1/2024"
```

### JSON Methods

```javascript
let obj = { name: "John", age: 30 };

// Object to JSON string
let json = JSON.stringify(obj);

// JSON string to object
let parsed = JSON.parse(json);

// Pretty print
let pretty = JSON.stringify(obj, null, 2);
```

---

## Best Practices

- Use `const` by default, `let` when reassignment is needed
- Use strict equality (`===`) instead of loose equality (`==`)
- Use arrow functions for callbacks
- Use template literals for string concatenation
- Use async/await instead of promise chains
- Use destructuring for cleaner code
- Use meaningful variable and function names
- Add comments for complex logic
- Handle errors with try/catch
- Avoid global variables

## Resources

- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JavaScript.info](https://javascript.info/)
- [ECMAScript Specifications](https://tc39.es/ecma262/)

---

**Happy Coding! 🚀**
