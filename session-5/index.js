
//standard way of writing a function 
function getGrade(total) {
    
    grade_boundary_A_plus = 90
    grade_boundary_A = 80
    
    if(total > grade_boundary_A_plus){
        grade = "A+"
    }
    else if(grade_boundary_A < total && total <=grade_boundary_A_plus){
        grade = "A"
    }
    else if (70 <= total && total< 80){
        grade = "B"
    }
    else if(60 <= total && total < 70){
        grade = "C"
    }
    else if (50 <= total && total < 60){
        grade = "D"
    }
    else if (40 <= total && total< 50){
        grade  = "E"
    }
    else if (30 <= total && total< 40){
        grade = "F"
    }
    else{
        grade = "Fail"
    };

    return grade

}

console.log(getGrade(70));

//function standard if statement

function check_if_number_is_even(number){

    if ((number % 2) === 0){
        return true
    }
    else{
        return false
    }
}

// function ternary statement 
function check_if_number_is_even(number){

    return (number %2 === 0) ? true : false;
}



console.log(check_if_number_is_even(10))

// standard if statments 
function check_evening_class(day){ 
 
    if (day == "Monday"){
        return "You have no evening class today"
    }
    else if(day == "Tuesday"){
        return "You have intro to web development tonight"
    }
    else if(day == "Wednesday"){
        return "You have no evening class today"
    }
    else if(day == "Thursday"){
        return "You have intro to web development tonight"
    }
    else if(day == "Friday"){
        return "You have no evening class today"
    }
    else{
        return "Its the weekend!"
    }
};


//switch 
function check_evening_class(day){ 
 
    switch(day){
        case "Monday":
        return "You have no evening class today";

        case "Tuesday":
        return "You have intro to web development tonight" ;   

        case "Wednesday":
        return "You have no evening class today";
        
        case "Thursday":
        return "You have intro to web development tonight";

        case "Friday":
        return "You have no evening class today";

        default:
            return "Its the weekend!"
        
    };

}

console.log(check_evening_class("Saturday"))

function checkName(name){

    switch(name){
        
        case "Harjeet": 
        return "You are an instructor";

        case "Samuel": 
        return "You are an instructor";

        case "Charlene": 
        return "You are a founder";

        case "Sarah": 
        return "You are our course coridinator";

        default:
            return "You are a memeber of the CBF community";

    };
}

console.log(checkName("Rahma"));


function calulator(number_1, number_2, operation){

    switch(operation){

        case "add":
            return number_1 + number_2;
        case "minus":
            return number_1 - number_2;
        case "multiply":
            return number_1 * number_2;
        case "divide":
            return number_1 / number_2;            
        case "check remainder": 
            return number_1 % number_2;
    };
}

console.log(calulator(12, 4, "divide"));