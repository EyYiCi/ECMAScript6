const sandwich = {
    title: "Reuben",
    price: 7,
    description: "A classic",
    ingredients: [
        "bread",
        "corned beef",
        "dressing",
        "sauerkraut",
        "cheese"
    ]
};

console.log(sandwich);
console.log(sandwich.price);
console.log(sandwich.description)

/**
 * Update variable to include the variables with destructuring
 */
 const {title, price} = {
    title: "Reuben",
    price: 17,
    description: "A classic",
    ingredients: [
        "bread",
        "corned beef",
        "dressing",
        "sauerkraut",
        "cheese"
    ]
};

console.log(title);
console.log(price);

/**
 * Other example more complex
 */

const vacation = {
    destination: "MachuPichu",
    travelers: 4,
    activity:"skiing",
    cost:"so much"
}

function marketing({destination,activity}){
    return `Come to ${destination} and do some ${activity}`;
}

console.log(marketing(vacation));
