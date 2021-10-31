//Object Basics with Dot & Bracket Notation
// Dot and Braket['']
const user = {
    name: 'Nila',
    age: 25,
    hrllo: {
        fk: 'hello'
    }
}
console.log(user.hrllo);
console.log(user['name']);

//###Adding, Modifying & Deleting Properties (with Dynamic Property Access)

// add
user.email= 'resa@gmail.com'
user['phone']= '018298989578'

console.log(user);

// update 
console.log(user.phone = 'xxxxxxxxx');
console.log(user['name'] = 'Humasha');
user.age+=9
console.log(user);

// Delete
delete user.phone
// console.log(user);

// #### Object Methods & This Keyword

/* 
1. object er vitore function declare kora jay, 
2. seta k method bole
*/
const myNumb = {
    name: 'Nila',
    age: 30,
    add: 'mask',
    myFriends: function() {
        console.log(`this is ${this.age} `);

    }
}
console.log(myNumb.myFriends());

// ###### Traversing Object Entries 
/* 1. akta object er modde protita property ba value k access kora jay */

const profile = {
    id: 23,
    class: 7,
    Name: 'bacchu'
}

// Way 1
for (const key in profile) {
    const ksys = profile[key]
    console.log(ksys, key);
}

// way 2

console.log(Object.keys(profile));
console.log(Object.values(profile));

for (const key of Object.keys(profile)) {
    console.log(key);
}
for (const key of Object.values(profile)) {
    console.log(key);
}

// Exercise – Total Salary

const salary = {
    x: 20,
    y: 30,
    k: 50,
    l: 300,
    h: 250
}

let sum5 = 0;
for (const key in salary) {
    const everyPerson = salary[key];
    sum5+=everyPerson
}

console.log(sum5);

// Object Destructuring

/* object destracting er somoy same name er variable hole rename kortye hoy p */

const myNumb2 = {
    name: 'Nila',
    age: 30,
    add: 'mask',
    mybest: {
        name: 'she',
        age:300
    },
}

const { name, age } = myNumb2;
const { name:title}= myNumb2.mybest // name: titele rename this property
console.log(name);
console.log(title);
console.log();
