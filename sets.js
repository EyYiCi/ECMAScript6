let books = new Set();
books.add("Pride and prejudice");
//I can add another element like this
books.add("War and peace").add("Oliver Twist");
//Result
console.log(books);
//object size of books
console.log(books.size);
//Seach with word 'has'
console.log("has other", books.has("other"));
console.log("has Twist", books.has("Twist"));
console.log("has Oliver Twist", books.has("Oliver Twist"));
//Delete 
books.delete("Oliver Twist");
//result delete
console.log("has Oliver Twist now NO", books.has("Oliver Twist"));

//I try add again the same element
books.add("War and peace");
//show the result, but can't not add
console.log(books);

// books.map(function(item)) not is a function
//So, I do to use for each
books.forEach(function(item){
    console.log(item);
});


