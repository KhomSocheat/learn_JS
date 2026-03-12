let list = [1, 2, 3, 4, 5, 6 , 7, 8, 9, 10 , 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let found = list.find((x) => x > 3); // This is an anonymous function used as a callback in the find method
//method find() is used to find the first element of an array that satisfies a condition. In this case, it finds the first number that is greater than 3.
console.log(found); // Output: 4

let filtered = list.filter((x) => x > 3); // This is an anonymous function used as a callback in the filter method
//method filter() is used to filter the elements of an array based on a condition. In this case, it filters out the numbers that are greater than 3.
console.log(filtered); // Output: [4, 5, 6 , 7, 8, 9, 10 , 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
