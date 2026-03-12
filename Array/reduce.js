let list1 = [1, 2, 3, 4, 5];

let total = list1.reduce((x, y) => x + y);
console.log(total); // Output: 15


let numbers = [1, 2, 3, 4, 5];

numbers.reduce((total,num) => {
    console.log("total: ", total);
    console.log("num: ", num);
    return total + num;
    
})