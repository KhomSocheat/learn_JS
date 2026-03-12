const my_money = [100, 200, 300, 400, 500];


console.log(my_money.toString()); // toString() method converts an array to a string and returns the result. The elements will be separated by commas.

my_money.pop(); //! remove the last element of the array
my_money.shift(); //! remove the first element of the array
my_money.slice(1, 3); //! return a new array containing the elements from index 1 to index 2 (not including index 3)
    
//! overwrite the first element of the array
my_money[0] = 1000;


my_money.push(600); //! add an element to the end of the array
my_money.unshift(0); //!add an element to the beginning of the array

//! loop through the array and print each element using for loop
for (let i = 0; i < my_money.length; i++) {
    console.log(my_money[i]);
}


//! loop through the array and print each element using forEach method
// my_money.forEach(e => {
//     console.log(e);
// });
