class Vehicle {
    constructor(description, wheels){
        this.description = description;
        this.wheels = wheels;
    }
    describeYourself(){
        console.log(`I am a ${this.description}
        with ${this.wheels} wheels`);
    }
}
let coolSkinVan = new Vehicle("cool ski van",4);
console.log(coolSkinVan);
coolSkinVan.describeYourself();

class SemiTruck extends Vehicle{
    constructor(){
        super("semi truck",18 );
    }
}
let grocesryStoreSemi = new SemiTruck();
grocesryStoreSemi.describeYourself();

//Getting and setting class values

let attendance = {
    _list:[],
    set addName(name){
        this._list.push(name);
    },
    get list(){
        return this._list.join(",");
    }
};
attendance.addName="Ale GC";
console.log(attendance.list);
attendance.addName="NayeRex";
attendance.addName="Theo";
console.log(attendance.list);

class Hike {
    constructor(distance,pace){
        this.distance = distance;
        this.pace = pace;
    }
    get lengthInHours(){
        return `${this.calcLength()} hours`;
    }
    calcLength(){
        return this.distance / this.pace;
    }
}

const mtTallac = new Hike(10,2);
console.log(mtTallac.lengthInHours);