//Object Basics with Dot & Bracket Notation
// Dot and Braket['']
const user = {
    name: 'Nila',
    age: 25,

}
console.log(user.age);
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
console.log(user);
























