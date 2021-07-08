/**
 *  why would you want to use a map? Well, you might want to use something other than a string as a key.
 *  Unlike objects, maps iterate its elements in their insertion order. 
 * So unlike objects that can come back in any order, the key value pairs can come back in any order, 
 * map objects are always going to deliver those back to us in the order in which they were added. 
 * So maps are a useful data type in JavaScript that are fairly new to the language, 
 * but you can use them for all sorts of interesting things.
 */
let course = new Map();

course.set("react", {description: "ui"});
course.set("jest", {description: "testing"});

console.log(course);
console.log(course.react); // undefined
console.log(course.get("react"));

//Other example with Map

let details = new Map([
    [new Date(),"today"],
    [2 , {javascript: ["js","node","react"]}],
    ["items",[1,2]]
]);

    console.log(details);
    console.log(details.size); // Size will give you three

details.forEach(function (item){
    console.log(item);
})