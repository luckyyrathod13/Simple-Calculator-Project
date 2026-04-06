let num1 = "";
let num2 = "";
let operation = "";

function appendNumber(number) {
    document.getElementById("display").value += number;
}

function setOperation(op) {
    num1 = document.getElementById("display").value;
    operation = op;
    document.getElementById("display").value = "";
}

function calculate() {
    num2 = document.getElementById("display").value;

    let result;

    if (operation === "+")
        result = Number(num1) + Number(num2);

    else if (operation === "-")
        result = Number(num1) - Number(num2);

    else if (operation === "*")
        result = Number(num1) * Number(num2);

    else if (operation === "/")
        result = Number(num1) / Number(num2);

    document.getElementById("display").value = result;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}