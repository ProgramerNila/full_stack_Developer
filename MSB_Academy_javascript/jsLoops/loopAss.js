// task 1

/* for (let i = 1; i <= 100; i++){
    console.log(i);
} */
// task 2

/* for (let i = 100; i >= 1; i--){
    console.log(i);
} */
// task 3
/* let sum = 0;
for (let i = 1; i <= 100; i++){
    if (i%2===0) {
       sum+=i
    } 
}
console.log(sum);
let avr = sum / 100;
console.log(avr); */
// task 4
/* for (let i = 1; i <= 100; i++){
    if (i%2===0) {
        console.log(i);
    }
} */
// task 5
/* let even = 0;
let odd = 0; */

/* for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        even+=i
    } else {
        odd+=i 
    }

}
console.log(even);
console.log(odd); */

// task 6

/* for (let i = 1800; i <= 2000; i++){
    if (i%4===0) {
        console.log(i);
    } else if (i % 400 === 0 && i % 100 !== 0) {
        console.log(i);
    }
} */
// task 7
/* let num = 15;
for (let i = 1; i <= 10; i++){
    let prod = num * i;
    console.log(prod);
} */
// task 8

/* let fact = 1;
for (let multiplier = 1; multiplier <= 6; multiplier++) {
    fact *= multiplier
    // console.log(` ${multiplier}x${fact}= ${fact}`);
}
console.log(fact); */
 // task 9
/*  let divisor = 20;
for (let multiplier = 1; multiplier <divisor; multiplier++) {
    if (divisor%multiplier===0) {
        console.log(`${multiplier} , ${divisor}`);
    }
 
} */

 // task 10
/* let number = 10245484;

let lastDigit = number % 10;
console.log(lastDigit);

while (number >= 10) {
  number =parseInt (number / 10);
}

let firstDigit = number;
console.log(firstDigit); */
 // task 11
let number = 123456;
let sum = 0;

while (number > 0) {
  let lastDigit = number % 10; // step 2
  sum = sum + lastDigit; // step 2

  number = parseInt(number / 10); // step 3;
}

console.log(sum);