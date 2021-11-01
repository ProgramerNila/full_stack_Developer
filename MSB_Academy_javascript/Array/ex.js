// Odd Sum in array

const numbers = [10, 5, 30,7,9,500];

const oddnum = numbers.filter(num => num % 2 === 1).reduce((num,sum)=>num+=sum,0)

console.log(oddnum);

// Even Max 
// way 1
const evenNum = numbers.filter(num => num % 2 === 0).reduce((num, sum) => num = sum, -1);
console.log(evenNum);
// way 2 
const evenNum2 = numbers.filter(num => num % 2 === 0);
console.log(Math.max(...evenNum2));

// Books ex 


const books = [
    {name:'books1',price: 50, rating: 4.5},
    {name:'books2',price: 50, rating: 4.2},
    {name:'books3',price: 400, rating: 5},
    {name:'books4',price: 250, rating: 4},
]

const prob1 = books.filter(num => num.price < 500 && num.rating >4);

console.log(prob1);

const sorted = prob1.sort((a, b) => a.rating<b.rating?1:-1);
console.log(sorted);



