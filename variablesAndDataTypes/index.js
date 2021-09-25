console.log('hello World', 'How are you');
// 2.1 varaiabele
let javascript = 'me';
javascript = 'you';
const name = 'she'

console.log(name);

console.log(javascript);
//2.2 data types check
let num = 123154;
console.log(typeof num);
// 2.3 object declear
let user = {
    name: 'Humasha',
    age: 6,
    face: 'round',
    dateOfBrith: 12,
}

console.log(user);
//  collect one property of object
console.log(user.age);
// collect another way one property of object
console.log(user['name']);
//collect another 3 way one property of object
let userName= user['name']
console.log(userName);
//Change obeject property value
user['age'] = 'ata age silo'
console.log(user['age']);
//2.5 Array, array index, array length

let friends = ['mursheda', 'sema', 'you', 'mumu', 'pupu']
// check array length
console.log(friends.length);

// check array posisition 
// sema koto number position e ase
console.log(friends.indexOf('sema'));
// change/ replace koro 3 number array k
friends[3]='pupu'
// 3 number index or 4 number position e k
console.log(friends[3]);
// kono element k array er modde khuje na pawa gele value hobe -1;
console.log(friends.indexOf(7));

//2.6 function , parameter, sum, 
function myFunction(num) {
    let myName = num;
    // function theke kono kisu value pete chaile retun korte hoy, but sob somoy return korar dorkar pore na
    return myName
   
}

console.log(myFunction('nila'));

//2.7 Template Literals
// `` = backtick e lekar niyom (`hfgsfgfh ${she}`)

let message = `hi,
how are you`;
console.log(message);

let she = 'humasha';
console.log(`Her name is ${she}`);
// 2.8 Excriess object
let excriess = {
    name: 'Mukta',
    age: '27',
    isMarried: true,
    HomeAddress: {logn: 89, lat: 23},
    friend: ['she', 'gsgfh',],

}
console.log(excriess);
console.log(excriess.age);
console.log(excriess.HomeAddress);
console.log(excriess.HomeAddress.logn);
console.log(excriess['HomeAddress']);
console.log(excriess['HomeAddress']['lat']);
console.log(excriess.friend);
console.log(excriess.friend[1]);





















