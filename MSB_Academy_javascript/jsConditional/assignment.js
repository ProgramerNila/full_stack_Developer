// Task 1: Odd Number Or Even Number

let num = 50;
if (num%2===0) {
    console.log('even');
} else if (num % 2 !== 0) {
    console.log('Odd');
} else {
    console.log('wrong');
}
// Task 2: Negitive Or Positive Or 0 number
if (num<0) {
    console.log('negitive');
} else if (num>0) {
    console.log('Positive');
} else if (num === 0) {
    console.log('This is Zero');
}
// Task 3: Big number comparer between 2 Numbers
if (num>=50) {
    console.log('ami boro');
}if (num<=0) {
    console.log('ami soto');
}

// Task 4:   Small number comparer between 3 Numbers

let num1 = 2000;
let num2 = 100000;
let num3 = 500;
if (num1 < num2 && num1 < num3) {
    
    console.log('ami number1',num1);
} else if (num2 < num1 && num2 < num3) {
    console.log('number2',num2);
    
} else {
    console.log('Haha ami 3');
}
// Task 5:  divisble 5, 11, or both
// for (let i = 1; i < 100; i++){
//     if (i % 5 === 0 && i % 11 === 0) {
//     console.log('bothe 5 and 11',i);
    
// } else if(i % 5 === 0) {
//     console.log('only 5',i);
// } else if (i % 11 === 0) {
//     console.log('only11',i);
// }
// }
// Task 6:100 between 200 and even Number ; number is even and it is in btween in 100 and 200 else condition not fullfill

let number = 150;
if (number <= 200 && number % 2 === 0 &&number >= 100) {
    console.log('number is even and it is in btween in 100 and 200');
    
} else {
    console.log('condition not fullfill');
}
// Task 7:  day find out in week

let day = 7;
switch (day) {
    case 1:
        console.log('Saturday ');
        break;
    case 2:
        console.log('Sunday');
        break;
    case 3:
        console.log('Monday');
        break;
    case 4:
        console.log('Tuesday');
        break;
    case 5:
        console.log('Wednesday');
        break;
    case 6:
        console.log('Thursday');
        break;
    case 7:
        console.log('Friday');
        break;

    default:
        console.log('out of week');
        break;
}

// Task 10: character Vowel Or Constant

//Defines true if is a vowel(uppercase or lowercase);
function isVowel(character) {
    switch (character) {
        case "a":
        case "A":
        case "e":
        case "E":
        case "i":
        case "I":  
        case "o":
        case "O":
        case "u":
        case "U": 
            return true;
        default:
            return false;
    }
}

// Brings a dependent message if previous result is true or false.
var letter = 'a';
if (isVowel(letter)) console.log("The letter is a vowel.");
else console.log("The letter is consonant.");

// Task 11: character uppercase or lowerCase
let characters = 'A';

if ( characters === characters.toUpperCase()) {
    console.log('ata uppercase');
} else {
    console.log('ata lowercase');
}
// Task 12: character Alphabet or digit or special
let alphabet = '8';

if (/[a-zA-Z]/.test(alphabet)) {
    console.log('letter');
} else if (/[0-9]/.test(alphabet)){
    console.log('digit');
} else {
    console.log('special');
}
//  Task 13: conditionl statements use kore 100000 er digit koiti
let degit = 99999;
if (degit < 100000) {
    let degitNum= degit.toString()
    console.log(degitNum.length);
} else {
    console.log('give right number');
}

//  Task 15: distance diffarent values

/*
 first100km=120 tk
 secound101-200=200tk
 third201-300=300tk
 rest= not interested

*/

let distance = 200;
if (distance <= 100) {
    console.log(120);
}else if (distance<=200) {
    console.log(200);
} else if(distance<=300){
    console.log(300);
} else {
    console.log('not interset');
}
/* 
// this is advanc
let destense = 400;
let first100km = 20;
let secound200km = 30;
let third300km = 50;
if (destense<=100) {
    let fri = first100km * destense;
    console.log(fri);

} else if (destense <= 200) {
    let fristDestance = first100km * 100
    let secoundDes = destense-100
    let rest200 = secound200km * secoundDes
    let total_101_200 = fristDestance + rest200;
    
    console.log(total_101_200);
} else if (destense <= 300) {
    let fristDestance = first100km * 100
    let secoundDes = secound200km * 100;
    let rest100 = destense - 200;
    let third300= rest100*third300km
    let total_201_300 = fristDestance + secoundDes + third300;
    console.log(total_201_300);
} else {
    console.log('not interested');
}
 */

let a = 10;
let b = 20;
// let ab = a + b;
let c = 15;
if ((a+b)>c) {
    console.log('trivuz hobe');
} else {
    console.log('nothing');
}

var days = function(month,year) {
    return new Date(year, month, 0).getDate();
 };
console.log(days(2, 2100)); // July month
console.log(days(9, 2012)); // September Month

var month = 2;
var year = 2016;
var date = new Date(year, month, 0).getDate();
console.log(date);