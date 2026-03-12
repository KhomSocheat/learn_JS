let salary = [1000, 2000, 3000, 4000, 5000];

let a = 5;
a = a + 1;
a += 1; //! this is the same as a = a + 1
a++; //! this is the same as a = a + 1


let total =0;
for (let i = 0; i < salary.length; i++) {
    // total = total + salary[i];
    total += salary[i]; //! this is the same as total = total + salary[i]

}
console.log(`Total Salary: ${total}`);