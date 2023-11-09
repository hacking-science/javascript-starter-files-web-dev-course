// ****************************************************TASK 1 - OBJECTS****************************************************


let personA = {
    name: "Harjeet",
    age: 27,
    location: "London", 
    likes: "photography"
};


let personB = {
    name: "Nadine",
    age: 34,
    location: "London", 
    likes: "kickboxing"
};

let personC = {
    name: "Rakinder",
    age: 33,
    location: "Coventry", 
    likes: "yoga"
};

let personD= {
    name: "Greg",
    age: 30,
    location: "California", 
    likes: "Meditation"
};

console.log(personB.age);
console.log(personC.location);

function biography(person){
    return "Hi my name is " + person.name + ". I am " + person.age + " years old, I live in " + person.location + " and I enjoy " + person.likes + "!"
}

console.log(biography(personD));
console.log(biography(personA));














// ****************************************************TASK 2 - MATHS OPERATORS****************************************************
// ***Uncomment the code below to begin the task***

// const x = 6;
// const y = 4;

// const addition = x + y;

// console.log("Addition: x + y " + addition);

// const subtraction = x - y;

// console.log("Subtraction: x - y " + subtraction);

// const multiplication = x * y;

// console.log("multiplication: x * y " + multiplication);

// const division = x * y;

// console.log("Division: x + y " + division);















// ****************************************************TASK 3****************************************************



const x = 10;
const y = 5; 
const z = 23;

//conditional operators, will compare and return true or false

console.log(x > y); //greater than? 
console.log(x === 10); //is it equal to?
console.log(x < y); //less than
console.log(x !== y); //is it not equal to?


console.log((x > y) && (x>z)); // using the && AND operators, checks if both expressions are true. 
console.log((x > y) || (x>z)); // using the || OR operators, checks if at least 1 of the expressions is true.

//maths operators, will perfrom an operation and return the value
console.log(x + y); //addition 
console.log(x - 10); //subtraction 
console.log(x * y); //multiply
console.log(x / y); //divsion



// if statements 

const a = 10;
const b = 5;

if (a > b){
    console.log("Hello")
}
else if (a === b){
    console.log("Hola")
}
else {
    console.log("bye")
};

// if statement 

const stored_password = "password123!";
const user_entered_password = prompt("Please enter your password:");

if (stored_password === user_entered_password) {
    console.log("Access granted, logging in...")
}
else{
    console.log("incorrect password")
}






