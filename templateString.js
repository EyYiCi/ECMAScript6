function print(firstName){
    //Ejemplo numero 1 : imprimir normal
console.log("Ejemplo 1 : Hello", firstName);
    //Ejemplo numero 2 : print using as a concatenation operator
    console.log("Ejemplo 2 : Hello " + firstName);
    //Ejemplo numero 3 : print using template string
    console.log(`Ejemplo 3 : Hello ${firstName}`)
}

function createOtherExample(firstName, price){
    let shipping = 4.85;
    console.log(`Hi ${firstName}! Thanks!
        Total: $${price}
        Shipping: $${shipping}
        Grand Total: $${price + shipping}
    `);
}

print("EyYiCi"); 
createOtherExample("Ale", 474);