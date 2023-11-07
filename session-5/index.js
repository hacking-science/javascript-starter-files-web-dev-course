
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


