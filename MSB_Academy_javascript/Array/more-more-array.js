// combainig and slicing the array

let numbers = [23, 56, 89, 70, 56, 47, 13];
console.log(numbers);numbers.push(230, 45,)
const numCopyOfSlice = numbers.slice() // copy using slice
console.log(numCopyOfSlice);
const num =[1000, 2000,]
const copyArray = [...numbers, ...num]; /// concate in 2 array
console.log(copyArray);

console.log(numbers);

// join array

const sp = numCopyOfSlice.join('-');
console.log(sp);

// convert string in array 

const message = 'I am learnig in js ';
const sps = message.split(' ') // convert in array
console.log(sps);
sps.pop()
const joinTo = sps.join('-')
console.log(joinTo);
console.log(message);

/// Map js

const num2 = [2, 3, 4];
const gun = num2.map(num => num * 2);
console.log(gun);

/// Filter js

/* Reduce Method */

const reducedSum = num2.reduce((sum, num) => sum * num,1);

console.log(reducedSum);



















