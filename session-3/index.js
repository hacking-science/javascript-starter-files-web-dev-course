// let a = 5; 
// const b = 10; 

// let c = a + b

// console.log(c)

// a = 20

// console.log(c) 

// c = a + b

// console.log(c)


function sayHey (name) {
    console.log("hey " + name + "!")
}

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

console.log(futureAge("Harjeet", 27))

console.log(futureAge("Mary", 17))
