// Functions in JavaScript have 4 main types:

// 1. Function Declaration
// 2. Function Expression
// 3. Arrow Function
// 4. Anonymous Function

// type: 
// 1. No parameters and no return value
function sayHello() {
    console.log("Hello World!");
}
sayHello();
    // end of no parameters and no return value


// 2. Parameters and no return value
function sayHelloWithName(name) {
    console.log("Hello ", name);
}
sayHelloWithName("John");
// end of parameters and no return value

// 3. No parameters and return value
function getGreeting() {
    return "Hello World!";
}
console.log(getGreeting());
// end of no parameters and return value

// 4. Parameters and return value
function addNumbers(a, b) {
    return a + b;
}
console.log(addNumbers(5, 10));
// end of parameters and return value



// Example of a function with multiple parameters 
function do_something_with_parameter(parameter, parameter2) {
    console.log("Hello My Name is ", parameter);
    console.log("Parameter 2 is ", parameter2); 
}

do_something_with_parameter("Hello World!" , "This is parameter 2");

