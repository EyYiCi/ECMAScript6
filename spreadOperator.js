// ...
let cats = ["Drago","Furia","Cath"];
let dogs = ["Theo", "Canelo"];


let animals = ["Monky","Miro", cats, dogs];

//I need show in animals all object, but 
console.log(animals);

//I use the spread operator because is really powerful
let animalsPower = ["Monkoo","Snak",...cats, ...dogs];
console.log(animalsPower);