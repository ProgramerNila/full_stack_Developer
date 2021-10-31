// rest parameter

/*  */

const sum = (...ar) => {
    let gun = -1;
    for (const iterator of ar) {
        if (iterator>gun) {
           gun=iterator
       }
    }
    return gun
}

console.log(sum(2,5,8));





