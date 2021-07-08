const id = Symbol();

const courseInfo = {
    title: "JavaScript",
    topics: ["strings","arrays","objects"],
    id:"js-course" //add other development

};

console.log(courseInfo);

//I want to do is I want to set the ID of course info to this number.
// I want to give it a unique identifier. This is going to be saved here as a symbol.
//So if I console log that I should see it. 

courseInfo[id] = 4777;
console.log(courseInfo);

//What happens if another developer comes through and adds in an ID field to the course info object? 
console.log(courseInfo[id]);

//The ID will be JavaScript course. Now if I try to log course info again,
// we're going to see that ID has been added. But even though I've added an ID as a symbol,
// there's no naming conflict. So this is one possible reason to use a symbol 
//if you want to capture a unique identifier and associate that with an object,
// make it a symbol and you'll never get into naming conflicts. 
console.log(courseInfo);
