function helloUsername() {
    let name = prompt("what is your name?");
    if (name)
        alert(`Hello, ${name}!`);
    else
        alert(`Hello!`);
}

function askNumber(i) {
    return Number(prompt(`enter the ${i} number`));
}

function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

function calculate(operation, operator) {
    let a = askNumber("first");
    let b = askNumber("second");
    let result = operation(a, b);
    alert(`${a} ${operator} ${b} = ${result}`);
}