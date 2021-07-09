
function skier(name, sound){
    return {
        name: name,
        sound: sound,
        powerYell: function (){
            let yell = this.sound.toUpperCase();
            console.log(`${yell}! ${yell}`);
        }
    };
}
console.log(skier("Alex","Yuju").name);
skier("Ale","woo").powerYell();

// Not is necesario de same name with ECMAScript
function skierOther(name, sound){
    return {
        name,
        sound,
        powerYell: function (){
            let yell = this.sound.toUpperCase();
            console.log(`${yell}! ${yell}`);
        }
    };
}
console.log(skier("Other","Yeaa").name);
skier("Alf","WuoWuo").powerYell();


/**
 * CREATING OBJECTS WITH THE SPREAD OPERATOR
 */

const daytime = {
    breakfast: "oatmeal",
    lunch: "peanut butter and jelly"
};

const nighttime = "mac and cheese";

const backpackingMeals = {
    ...daytime,
    nighttime
};

console.log(backpackingMeals);