for(let letter of "JavaScript"){
    console.log(letter);

}
//Array strings

let topics = ["JavaScript", "Node","CSS"];

for(let topic of topics){
    console.log(topic);
}

// Map()

let topicMap = new Map();

topicMap.set("react",{description:"ui",otro:"info"});
topicMap.set("HTML","/topic/html");
topicMap.set("CSS","/topic/css");

for(let topic of topicMap){
    console.log(topic);
}

for(let topic of topicMap.keys()){
    console.log(topic);
}

for(let topic of topicMap.values()){
    console.log(topic);
}

for(let topic of topicMap.entries()){
    console.log(topic);
}