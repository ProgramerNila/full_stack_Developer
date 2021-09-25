// Excriess Fizz Buzz
// problem :FizzBuzz
// Take a number
// if it is divided by 3, prient Fizz
// if it is divided by 5, prient Buzz
// if it is divided by 5 and 3, prient FizzBuzz
// otherWise, prient Nothing

let number = 15;
if (number % 3 === 0 && number % 5 === 0) {
  console.log("FizzBuzz");
} else if (number % 5 === 0) {
  console.log("Buzz");
} else if (number % 3 === 0) {
  console.log("Fizz");
} else {
  console.log("Nothing");
}

// Excriess Fizz Buzz with ternary oparator
console.log(
  number % 3 === 0 && number % 5 === 0
    ? "FizzBuzz"
    : number % 3 === 0
    ? "Fizz"
    : number % 5 === 0
    ? "Buzz"
    : "Nothing"
);
// Excriess leapyear or not;
let year = 2004;
if (year % 400 === 0) {
    console.log('this is a leap year');
} else if (year % 4 === 0 && year % 100 !== 0) {
    console.log('this is a leep year');
} else {
    console.log('this is not a leep year');
}
console.log();


// terenary  oparator 









