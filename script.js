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

        var a = null;
        var b = null;
        var c = null;
        var d = null;

    function calculate(e) {
        if (e.target && e.target.id == "plus") {
            a = parseInt(display.textContent);
            display.textContent = 0;
        }
        if (e.target && e.target.id == "minus") {
            b = parseInt(display.textContent);
            display.textContent = 0;
        }
        if (e.target && e.target.id == "multiply") {
             c = parseInt(display.textContent);
            display.textContent = 0;
        }
        if (e.target && e.target.id == "divide") {
            d = parseInt(display.textContent);
            display.textContent = 0;
        }
        if (e.target && e.target.id == "equals") {
            if (a !== null) {
            result = a + parseInt(display.textContent);
            } if (b !== null) {
            result = b - parseInt(display.textContent);
            } if (c !== null) {
            result = c * parseInt(display.textContent);
            } if (d !== null) {
            result = d / parseInt(display.textContent);
            }
            display.textContent = result;
            result = 0;
            a = null;
            b = null;
            c = null;
            d = null;
        }
        if (e.target && e.target.id == "clear") {
            result = 0;
            display.textContent = result;
        }
    }