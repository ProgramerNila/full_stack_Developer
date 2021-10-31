const doctor = {
  name: "jon",
  designation: "kidny specalisht",
  clinic: {
    name: "humasha clinic",
    address: {
      long: 30.26,
      lat: 20,
    },
    buliding: "4 tola",
  },
  pacient: 105,
};
// const { name, designation, clinic  } = doctor;
// const { name: clinickName, address } = clinic;
// const {long, lat}={address}
const {
  name,
  designation,
  
  clinic: {
    name: clinickName,
    address: { long, lat },
  },
} = doctor;

console.log(doctor);
console.log(clinickName);
// console.log(address);

// Cloning an object

const frirnd = {
  name: 'Jannat',
  age: '9 Months'
}
const copiedUser= {}
console.log(frirnd);
//  way 1 for coppied
for (const key in frirnd) {
  
  copiedUser[key]= frirnd[key]
}
console.log(copiedUser);

//  way 2 for coppied

const copiedUser2 = Object.assign({}, frirnd)
console.log(copiedUser2);

//  way 3 for coppied

const copiedUser3 = { ...frirnd }
console.log(copiedUser3);








