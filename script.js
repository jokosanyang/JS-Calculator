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
        else if (e.target && e.target.classList.contains("number") || e.target.id == ".") {
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
            a = parseFloat(display.textContent);
            display.textContent = 0;
        }
        if (e.target && e.target.id == "minus") {
            b = parseFloat(display.textContent);
            display.textContent = 0;
        }
        if (e.target && e.target.id == "multiply") {
             c = parseFloat(display.textContent);
            display.textContent = 0;
        }
        if (e.target && e.target.id == "divide") {
            d = parseFloat(display.textContent);
            display.textContent = 0;
        }
        if (e.target && e.target.id == "equals") {
            if (a !== null) {
            result = a + parseFloat(display.textContent);
            } if (b !== null) {
            result = b - parseFloat(display.textContent);
            } if (c !== null) {
            result = c * parseFloat(display.textContent);
            } if (d !== null) {
            result = d / parseFloat(display.textContent);
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