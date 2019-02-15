// declare variables
var display = document.getElementById("display");
var calculator = document.getElementById("calc");
var numbers = document.getElementsByClassName("number");
var calcs = document.getElementsByClassName("calculations");


// make numbers appear in the display
    calculator.addEventListener("click", print);

function print(e) {
    if (e.target && e.target.nodeName == "BUTTON" || e.target.nodeName == "P")
    display.textContent = e.target.textContent;
    }
