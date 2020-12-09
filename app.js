

const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
let summery = 0;
let summery2 = 0;
let leng = numbers.length;
let Max = -Infinity;
let Min = Infinity;


for (let counter = 0; counter < leng; counter++) {
    let writtennumber = numbers[counter];
    summery = summery + writtennumber;
}

for (let z = 0; z < numbers.length; z++) {
    let sayi = numbers[z];
    summery2 += sayi;
}
console.log("Summery", summery2);
console.log("Average", summery2 / numbers.length);

for (let i = 0; i < numbers.length; i++) {

    console.log("Square of numbers", [i + 1], numbers[i] * numbers[i])
}

for (let a = 0; a < numbers.length; a++) {

    console.log("square_root of numbers", [a + 1], Math.sqrt(numbers[a]))
}


for (let p = 0; p < numbers.length; p++) {
    if (Max < numbers[p]) {
        Max = numbers[p];
    }

}

for (let k = 0; k < numbers.length; k++) {
    if (Min > numbers[k]) {
        Min = numbers[k];
    }
}


console.log("Maximum_value", Max);
console.log("Minimum_value", Min);

