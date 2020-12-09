

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

for (let i = 0; i < numbers.length; i++) {
    let sayi = numbers[i];
    summery2 += sayi;
}
console.log("Summery", summery2);
console.log("Average", summery2 / numbers.length);

for (let i = 0; i < numbers.length; i++) {

    console.log("Square of numbers", [i + 1], numbers[i] * numbers[i])
}

for (let i = 0; i < numbers.length; i++) {

    console.log("square_root of numbers", [i + 1], Math.sqrt(numbers[i]))
}


for (let i = 0; i < numbers.length; i++) {
    if (Max < numbers[i]) {
        Max = numbers[i];
    }

}

for (let i = 0; i < numbers.length; i++) {
    if (Min > numbers[i]) {
        Min = numbers[i];
    }
}


console.log("Maximum_value", Max);
console.log("Minimum_value", Min);

