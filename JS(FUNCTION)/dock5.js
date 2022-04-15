function bmi(user){
    if (user<=18.5){
        return "Underweight"
    }
    else if (user<=25.0){
        return "Normal"
    }
    else if (user<=30.0){
        return "Underwater"
    }
    else if (user>30){
        return "obese"
    }

}
console.log(bmi(require("readline-sync").questionInt("Enter your BMI:")))
