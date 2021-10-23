// for loop


for (let i = 0; i < 10; i++){
    console.log(i);
}

// for in loop

const user = {
    name: 'j',
    age: 24,
}
for (const key in user) {
    
        const element = user[key];
        
    console.log(element,key);
}
/* const num = [1, 2, 4, 5, 6, 8];
for (const key in num) {
    console.log(num[key]);
} */

// for of loop

/* for (const index of num) {
    console.log(index);
} */
// Break And Countinue


for (let p = 1; p <= 10; p++){
   
    if (p === 5) {
        continue;
    }
     console.log(p);
}
