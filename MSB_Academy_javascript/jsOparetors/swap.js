let a = 10;
let b = 20;
console.log(a, b);
// swap

let temp = a;
a = b;
b = temp;
console.log(a, b);

// another way 

[a, b] = [b, a]
console.log(a,b);