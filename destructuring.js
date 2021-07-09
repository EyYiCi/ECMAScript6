/**
 * Destructuring assignment gives us an easy way to extract data
 * from arrays and objects and assign them to variables
 */
let cities = [
    "Tokio",
    "Boston",
    "Los Angeles",
    "Seattle",
    "Portland"
];

console.log(cities[0]);

let [first, second] = [
    "Tokio",
    "Boston",
    "Los Angeles",
    "Seattle",
    "Portland"
];

console.log(first);
console.log(second);


//I'll just add enough commas to take the place
let [other,,,commas] = [
    "Tokio",
    "Boston",
    "Los Angeles",
    "Seattle",
    "Portland"
];
console.log("with commas: " + other);
console.log("with commas: " + commas);