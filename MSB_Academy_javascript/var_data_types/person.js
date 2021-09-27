let person = {
    name: 'Reshme',
    age: 25,
    isMarried: true,
    homeAddress: { houseNo: `13/2`, road: `14,block`, flat: 1, },
    friends: ['sila', 'mila', 'nila']

}

console.log(person);
console.log(person.homeAddress.houseNo);
console.log(person.friends[0]=253);

person['isMarried'] = false
person.name= 'she'
person.homeAddress['flat']='amr bari'
console.log(person);



