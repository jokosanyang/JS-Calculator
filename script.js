// declare variables
var display = document.getElementById("display");
var calculator = document.getElementById("calc");
var result = 0;
var operator = "";

// make numbers appear in the display
calculator.addEventListener("click", print);
    
    function print(e) {
        if (display.textContent == "0" && e.target && e.target.classList.contains("number")) {
            display.textContent = e.target.textContent;
        } 
        else if (e.target && e.target.classList.contains("number") || e.target.id == ".") {
            display.textContent = display.textContent.concat("", e.target.textContent);
        }
    }

// make calculations work
calculator.addEventListener("click", calculate);

    function calculate(e) {
        if (e.target && e.target.classList.contains("calculations")) {
            result = parseFloat(display.textContent);
            operator = e.target.id;
            display.textContent = 0;
        }
        if (e.target && e.target.id == "equals") {
            if (operator == "plus") {
            result = result + parseFloat(display.textContent);
            } if (operator == "minus") {
            result = result - parseFloat(display.textContent);
            } if (operator == "multiply") {
            result = result * parseFloat(display.textContent);
            } if (operator == "divide") {
            result = result / parseFloat(display.textContent);
            }
            display.textContent = result;
            result = 0;
            operator = "";
        }
            if (e.target && e.target.id == "clear") {
            result = 0;
            display.textContent = result;
            operator = "";
        }
    }
