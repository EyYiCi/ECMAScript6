// ...
let cats = ["Drago","Furia","Cath"];
let dogs = ["Theo", "Canelo"];


let animals = ["Monky","Miro", cats, dogs];

//I need show in animals all object, but 
console.log(animals);

//I use the spread operator because is really powerful
let animalsPower = ["Monkoo","Snak",...cats, ...dogs];
console.log(animalsPower);


//Create an array !
function master(programa, ...senseis){
    console.log("Bienvenido a " + programa);
    console.log(senseis);
}

master("Master en coding", "Mali","Dani","Sher");

function sum(x,y,z){
    return x+y+z;
}

const number = [1,9,6];
console.log(sum(...number));