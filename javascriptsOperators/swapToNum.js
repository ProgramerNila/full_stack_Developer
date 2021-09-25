// swap two number
// a=20; b=10;
// after swap ; a=10; b=20;

let a = 20;
let b = 10;
console.log(a,b);
let temp = a;
a = b;
b = temp;
console.log(a,b);
// another way

[a, b] = [b, a]
console.log(a,b);

