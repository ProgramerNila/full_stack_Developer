let nymbers = [2, 50, 23,65, 80];
let sum = 0;
for (let i = 0; i < nymbers.length; i++){
    let element = nymbers[i]
    sum+=element
}
console.log(sum);
// way 2 For of loop
let sum2=0
for (const num of nymbers) {
    sum2+=num
}
console.log(sum2);
// Way 3 For in loop
let sum3=0
for (const key in nymbers) {
   
    const element = nymbers[key];
    sum3+=element
        
    
}
console.log(sum3);
