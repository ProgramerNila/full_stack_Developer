// Prime Number Means moulik songhka 1 or same number diye vag jay exmaple 11,13,17

// let number = 10;
for (let my = 10; my <= 30; my++){
    let isprime = true;
    for (let i = 2; i <= my-1; i++){
        if (my%i===0) {
            isprime = false;
            break;
        }
    }
    if (isprime) {
        console.log(my);
    }
}



 
// check 10-30 prime number
/* 
    nested loop use korte hobe
    10-30 loop
*/
/* for (let i2 = 10; i2 <= 30; i2++){
    
    let isPrime = true;
    for (let i = 2; i <= number-1; i++){
        if (number%i===0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) console.log(number);
        
    
} */
