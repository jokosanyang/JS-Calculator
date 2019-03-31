// declare variables
const display = document.getElementById("display");
const calculator = document.getElementById("calc");
let result = 0;
let operator = "";

// make numbers appear in the display

    const print = (e) => {
        if (e.target.classList.contains("number") && operator == "equals") {
            display.textContent = e.target.textContent;
            operator = "";
        }
        else if (display.textContent == "0" && e.target.classList.contains("number")) {
            display.textContent = e.target.textContent;
        } 
        else if (e.target.classList.contains("number") || e.target.id == "decimal") {
            display.textContent = display.textContent.concat("", e.target.textContent);
        }
    }
  calculator.addEventListener("click", print);
    

// make calculations work
    const calculate = (e) => {
        if (e.target.classList.contains("calculations")) {
            result = parseFloat(display.textContent);
            operator = e.target.id;
            display.textContent = 0;
        }
        if (e.target.id == "equals") {
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
            operator = "equals";
        }
            if (e.target.id == "clear") {
            result = 0;
            display.textContent = result;
            operator = "";
        }
    }
    calculator.addEventListener("click", calculate);
