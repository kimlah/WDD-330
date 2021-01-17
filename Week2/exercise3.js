 function minimum(num1, num2) {
    if (num1 < num2) { 
        document.getElementById("display-minimum").innerHTML = num1 + "is the smaller number.";
    }
    else {
        document.getElementById("display-minimum").innerHTML = num2 + "is the smaller number.";
    } 
}