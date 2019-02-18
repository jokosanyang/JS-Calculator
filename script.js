// declare variables
var display = document.getElementById("display");
var calculator = document.getElementById("calc");
var numbers = document.getElementsByClassName("number");
var calcs = document.getElementsByClassName("calculations");
var result = 0;

// make numbers appear in the display
calculator.addEventListener("click", print);
    
    function print(e) {
        if (display.textContent == "0" && e.target && e.target.classList.contains("number")) {
            display.textContent = e.target.textContent;
        } 
        else if (e.target && e.target.classList.contains("number")) {
            display.textContent = display.textContent.concat("", e.target.textContent);
        }
    }

// make calculations work
calculator.addEventListener("click", calculate);

    function calculate(e) {
        console.log(result);
        if (e.target && e.target.classList.contains("number") && result == 0) {
            result = parseInt(e.target.textContent);
        }
        if (e.target && e.target.id == "plus") {
            result = parseInt(display.textContent);
            display.textContent = 0;
        }
        if (e.target && e.target.id == "minus") {
            result = parseInt(display.textContent);
            display.textContent = 0;
        }
        if (e.target && e.target.id == "multiply") {
            result = parseInt(display.textContent);
            display.textContent = 0;
        }
        if (e.target && e.target.id == "divide") {
            result = parseInt(display.textContent);
            display.textContent = 0;
        }
        if (e.target && e.target.id == "equals") {
            result = result + parseInt(display.textContent);
            display.textContent = result;
        }
        if (e.target && e.target.id == "clear") {
            result = 0;
            display.textContent = result;
        }
    }