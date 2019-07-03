"use strict";

let calculator = [];
let valueOne = [];
let valueInput;
let actionButtonPress = 0;
let result;
let selected_button;
let operators;

function clearDisplay() {
    valueOne = valueInput = calculator = [];
    result = actionButtonPress = 0;
    document.querySelector("#input_value").value = 0;
    releaseDot();
    removeAllClass();
}

function removeAllClass() {
    selected_button = document.querySelectorAll(".active_button");

    for (let i = 0; i < selected_button.length; i++) {
        selected_button[i].classList.remove('active_button');
        selected_button[i].disabled = false;

    }
}


function getnumber(id) {
    calculator.push(id);
    valueInput = parseFloat(calculator.join(""));
    console.log(valueInput);
    document.querySelector("#input_value").value = valueInput;

    removeAllClass();

    if (id === ".") {
        preventDotAction();
    }
}


function calculateEquation() {
    if (actionButtonPress !== 0) {
        calculator = calculator.join("");
        calculator = parseFloat(calculator);

        if(operators === "+") {
            result = calculator + valueOne;
            console.log(result);

            return document.querySelector("#input_value").value = result;
        }

        if(operators === "-") {
            result = valueOne - calculator;
            console.log(result);

            return document.querySelector("#input_value").value = result;
        }

        calculator = [0];
        calculator.push(result);

        actionButtonPress = 0;

        document.querySelector(".addition").disabled = false;
        document.querySelector(".addition").classList.remove('active_button');

        document.querySelector(".equal").disabled = true;
        document.querySelector(".equal").classList.add('active_button');
    }

    //console.log(addition() + "ddddd");
}

function addition() {
    if (actionButtonPress !== 1) {
        valueOne = parseFloat(calculator.join(""));
        calculator = [0];
        console.log(calculator);
        actionButtonPress = 1;
        document.querySelector(".addition").disabled = true;
        document.querySelector(".addition").classList.add('active_button');
        releaseDot();
        operators = "+";
    }
}

function subtraction() {

    if (actionButtonPress !== 2) {
        valueOne = parseFloat(calculator.join(""));
        calculator = [0];
        console.log(calculator);
        actionButtonPress = 2;

        document.querySelector(".subtraction").disabled = true;

        document.querySelector(".subtraction").classList.add('active_button');

        releaseDot();

        operators = "-";
    }

}

function preventDotAction() {
    let preventDot = document.querySelector(".dots");
    preventDot.disabled = true;
    preventDot.classList.add('dotButton');
    preventDot.innerHTML = "Used";
}

function releaseDot() {
    let preventDot = document.querySelector(".dots");
    preventDot.disabled = false;
    preventDot.classList.remove('dotButton');
    preventDot.innerHTML = "&#8729;";
}


