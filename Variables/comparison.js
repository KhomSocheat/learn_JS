
// Comparison Operators
const health = 100;
const health2 = 200;

console.log(health === health2); // false  ស្មើ
console.log(health !== health2); // true​​​ មិនស្មើ
console.log(health < health2); // true​​ តូចជាង 
console.log(health > health2); // false​ ធំជាង
console.log(health <= health2); // true តូចជាងឬស្មើ
console.log(health >= health2); // false ធំជាងឬស្មើ


//The diffrence between == and === is that == will compare the value of the variable but it will not compare the type of the variable,
//while === will compare both the value and the type of the variable.
let x = 5; // number type variable
let y = "5"; // string type variable

console.log("Using ==: ",x == y); // true  ស្មើតម្លៃ
console.log("Using ===: ",x === y); // false មិនស្មើទាំងតម្លៃ និងប្រភេទ data type
