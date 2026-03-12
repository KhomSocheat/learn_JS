//Learn Anonymous Function
// Anonymous functions are functions that do not have a name.

add = (a,b) => a + b; // This is an anonymous function assigned to the variable 'add'

console.log(add(5, 10)); // Output: 15

var list = [20, 2, 3, 4, 5, 6 , 7, 8, 9, 10 , 11, 12, 13, 14, 15];

found = list.filter((x) => x > 3).sort().map((x) => "Number: " + x); // This is an anonymous function used as a callback in the filter method
//method filter() is used to filter the elements of an array based on a condition. In this case, it filters out the numbers that are greater than 3.
//method sort() is used to sort the elements of an array in ascending order. In this case, it sorts the filtered numbers.
//method map() is used to create a new array by applying a function to each element of an array. In this case, it creates a new array of strings that say "Number: " followed by the number.
console.log(found); // Output: [4, 5]