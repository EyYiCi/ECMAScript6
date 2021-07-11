/**
 * Function declaration
 * Function expression
 * IIFE (Immediately Invoked Function Expression)
 * Shorthand method definition
 * Arrow function
 * Generator function
 * Function constructor
 */

// Function declaration  : (support hoisting)
function Hello(name){
    console.log(`Hi ! ${name}.`);
}
Hello('Alejandra');

function response(){
    return 'Hi! Ale';
}
console.log(response());

//Function expression: (do not support hoisting)
const sum = function sumTwo(value){
    return value + 2;
}
console.log(sum(4));

//---- anonymous
const sumAnony = function (value){
    return value + 2;
}
console.log(sumAnony(4));

//IIFE (Immediately Invoked Function Expression) :
// These types of functions are executed immediately and are not accessible later
/*( function (){
    let name = 'EyYiCi'
    return `Hi ${name}`
})();*/

//Shorthand method definition
//Can be used a method in the declaration of an object in ES6 classes

const poblacion = {
    personas:[],
    add(...personas){
        this.personas.push(...personas);
    },
    saluda(index){
        return `Hola soy ${this.personas[index]}`;
    }
};

poblacion.add('Luis','Ale','Naye');
const result = poblacion.saluda(1);
console.log(result);

//If I wrote this same function in a classic way it would be like below:
const poblacionClassic = {
    person: [],
    add: function(...person){
        this.person.push(...person);
    },
    saluda: function(index){
        return `Hi soy ${this.person[index]}`;
    }
};
poblacionClassic.add('Dani','Brenda','Ale');
const resultClassic = poblacionClassic.saluda(1);
console.log(resultClassic);

//Arrow function
/**
 * The "arrow functions" don't create their own context when executed. Unlike the "function expression"
 * or the "function declaration" that creates its own context
 * The "arrow functions" are anonymous
 * The arguments object is not in the context of the function
 * If when defining the function we do not use the symbol of the curly braces.The function will return
 * as a result of the function the result of the execution of the instruction that we have indicated.
 */

const saluda = (nombre) => {
    return `Hola ${nombre}`;
}

console.log(saluda('EyYiCi Ale'));

//Compactar un poco mas el codigo
const saluda2 = (nombre) => `Hola ${nombre}`;
console.log(saluda2('Other Hi Ale'));

//Generator function
/**
 * It allows us to stop or exit the functin at a point within the set of instructions than make up our
 * function and later return the execution from the point where we stopped previously
 * The syntax of these functions is the same as the "function declaration" or "function expression". 
 * We should only use the symbol * at the beginning of the definition of our function
 * Another difference of these functions is that it always returns an object with the followin
 * structure every time we invoke the next() function
 */

function *generatorFunction(){
    console.log('Ejemplo generator function');
    yield 'Un kit kat';

    console.log('¿continuamos?');
    yield 'Fin del ejemplo';
}

const gen = generatorFunction();
console.log(gen.next().value);
console.log('La funcion se encuentra pausada');
console.log(gen.next().value);
console.log(gen.next().value);

// Function constructor
const sumaFunction = new Function('numero1','numero2', 'return numero1 + numero2');
console.log(sumaFunction(10,15));







