

const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
let summery = 0;
let leng = numbers.length;


for (let counter = 0; counter < leng; counter++) {
    let writtennumber = numbers[counter];
    summery = summery + writtennumber;
}

console.log("Summary", summery)

console.log("Average", summery / 10);


let square = numbers.map(x => x * x);
console.log("square", square);

let square_root = numbers.map(x => Math.sqrt(x));
console.log("square_root", square_root);

console.log("Min value =", Math.min(...numbers));

console.log("Max value =", Math.max(...numbers));

