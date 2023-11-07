let a = 5; //integer 
const b = 10.5; //float, real, decimal
let first_name = "Harjeet"; //strings
let is_thurday = true //boolean



// // orginal way of writing function 
// function sayHey (name) {
//     return "hey " + name + "!"
// };

// // function expression
// const sayHey = function(name) {
//     return "hey " + name + "!"};

// arrow function expression
const sayHey = () => "hey" + "!";

// console.log(sayHey())


function conversation(name, topic){
    sayHey(name)
    console.log("Do you like " + topic + "?")
}

function multiply_by_5(x){
    return x * 5
}

let y = multiply_by_5(8)


function futureAge (name, current_age){
    age_in_5_years = current_age + 5
    return "Hi " + name + "! You will be " + age_in_5_years + " in 5 years time"
}

// console.log(futureAge("Harjeet", 27))
// console.log(futureAge("Mary", 17))

//standard way of writing a function 
function sqaureNumber(number) {
    return number * number;
}

//function expression 
const sqaureNumber = function(number){
    return number * number
}


// arrow function 
const sqaureNumber = (number) => number * number;

// console.log(sqaureNumber(5));


//function practice 

//standard function to multiply numbers together 

function multiply_numbers(a, b){
    return a * b 
};

console.log(multiply_numbers(9,8));

//function expression to calulate how many seconds in a number of days

const calculate_seconds_from_days = function(number_of_days) {
    return "There are " + (number_of_days * 24 * 60 * 60) + " seconds in " + number_of_days + " days."
}


console.log(calculate_seconds_from_days(5)); 

//arrow function to calulate the cost of travel 

const calulate_cost = (distance) => "£" + distance * 3.5 ;

console.log(calulate_cost(2));