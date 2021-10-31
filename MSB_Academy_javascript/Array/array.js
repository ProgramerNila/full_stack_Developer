// Array
const num = [1, 25, 58, 46, 23,1];
//Add in element
num.unshift(25,36,44) // add in first 
num.push(25,36,44) // add in last
num.splice(3,0, 85,63,45) // add in middle
// Remove in element 

num.shift() // remove in first 
num.pop() // remove in last 
num.splice(3, 6) // remove in middle 

// finding elements in array

console.log(num.includes(44)); // true or false return korbe
console.log(num.indexOf(233)); // index number or -1  return korbe
console.log(num.lastIndexOf(10)); // last index number or -1  return korbe
console.log(num);
// object in array er modde khuje pete hole find method use korte hoy 
const doctors = [
    {name:'jon', age:31},
    {name: 'mary', age: 23},
    {name: 'shila', age: 50},
]

const finds = doctors.find(x => x.age<50); // only first item return 
const findss = doctors.filter(x => x.age<50); // all match item

console.log(findss);

// iterator in an array in arrow function

num.forEach((element) => console.log(element));

//sorting and reverse

const number = [10, 20, 7, 5, 6, 60, 93];
// number.sort(function(a,b){return a-b})
// number.sort((ab, ba)=>ab-ba)
// number.reverse((ab, ba)=>ab-ba)
// number.reduce((ab, ba)=>ab-ba)
// number.sort((ab, ba)=>ab-ba)
console.log(number.sort((ab, ba)=>ab-ba));













