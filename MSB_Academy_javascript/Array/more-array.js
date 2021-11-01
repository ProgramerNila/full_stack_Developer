// Arry of every method

const numbers = [2, 56, 23, -48, 78, 4];
let sum = numbers.every((x=>x>0)) // sobgula positive 
let sum2 = numbers.some((x=>x>0))// je kono ak ba ekadik positive


console.log(sum);
console.log(sum2);
 const res=numbers.some((num => num > 0));
// console.log(res);

var t = [-1,-2,-3,5,6,1]
var positiveArr = [];
var negativeArr = [];
t.forEach(function (item) {
    if (item<0) {
        positiveArr.push(item)
    } else {
        negativeArr.push(item)
    }
})
console.log(positiveArr) // output [5, 6, 1]
console.log(negativeArr) // output [-1, -2, -3]













