
let operation = ''
let expressionArray = []
let numbers = ''
let shouldPop = true

const screen = document.querySelector('#displayArea');
const tools = document.querySelectorAll('.tools');
const nums = document.querySelectorAll('.num');
const C = document.querySelector('#clear');
const equal = document.querySelector('#equal');


// Listerners
for (const each of tools) {
    each.addEventListener('click', function (event) {
        const elementThatWasClicked = event.target;
        operationPressed(elementThatWasClicked.id)
    });
}

for (const each of nums) {
    each.addEventListener('click', function (event) {
        const elementThatWasClicked = event.target;
        numberPressed(elementThatWasClicked.id)
    });
}

C.addEventListener('click', clearScreen);
equal.addEventListener('click', calcResult);

function returnCalcResult() {
    if (isNumber(expressionArray[0]) && (operation === '+' || operation === '-' || operation === 'x' || operation === '/') && isNumber(expressionArray[2])) {
        if (operation === '+') { return Number(expressionArray[0]) + Number(expressionArray[2]) }
        else if (operation === '-') { return Number(expressionArray[0]) - Number(expressionArray[2]) }
        else if (operation === 'x') { return Number(expressionArray[0]) * Number(expressionArray[2]) }
        else if (operation === '/') { return Number(expressionArray[0]) / Number(expressionArray[2]) }
    }

    else {
        clearScreen()
        screen.innerText = "Error"
    }
}

function calcResult() {
    if (expressionArray.length < 3) {
        clearScreen()
        screen.innerText = "Error"
        return
    }

    const result = returnCalcResult()
    expressionArray = []
    expressionArray.push(result)
    console.log(expressionArray)
    updateScreen()

}

// Handles when an operation button is pressed (+, -, /, *)
function operationPressed(key) {
    let op = ''
    numbers = ''

    if (key === 'plus') {
        op = '+'
    }
    if (key === 'minus') {
        op = '-'
    }
    if (key === 'cross') {
        op = 'x'
    }
    if (key === 'divide') {
        op = '/'
    }
    expressionArray.push(op)
    console.log(expressionArray)
    shouldPop = false

    if (expressionArray.length > 3) {
        const result = returnCalcResult()
        expressionArray.splice(0)
        expressionArray.push(result)
        expressionArray.push(op)
        console.log(expressionArray)
    }
    operation = op
    updateScreen()

}


// Handles when a number button is pressed
function numberPressed(numberId) {

    if (numberId === 'one') {
        numbers = numbers + '1';
        if (shouldPop) { expressionArray.pop() }
        expressionArray.push(numbers)
    }
    else if (numberId === 'two') {
        numbers = numbers + '2';
        if (shouldPop) { expressionArray.pop() }
        expressionArray.push(numbers)
    }
    else if (numberId === 'three') {
        numbers = numbers + '3';
        if (shouldPop) { expressionArray.pop() }
        expressionArray.push(numbers)
    }
    else if (numberId === 'four') {
        numbers = numbers + '4';
        if (shouldPop) { expressionArray.pop() }
        expressionArray.push(numbers);
    }
    else if (numberId === 'five') {
        numbers = numbers + '5'
        if (shouldPop) { expressionArray.pop() }
        expressionArray.push(numbers)
    }
    else if (numberId === 'six') {
        numbers = numbers + '6';
        if (shouldPop) { expressionArray.pop() }
        expressionArray.push(numbers)
    }
    else if (numberId === 'seven') {
        numbers = numbers + '7';
        if (shouldPop) { expressionArray.pop() }
        expressionArray.push(numbers)
    }
    else if (numberId === 'eight') {
        numbers = numbers + '8';
        if (shouldPop) { expressionArray.pop() }
        expressionArray.push(numbers)
    }
    else if (numberId === 'nine') {
        numbers = numbers + '9'
        if (shouldPop) { expressionArray.pop() }
        expressionArray.push(numbers)
    }
    else if (numberId === 'zero') {
        numbers = numbers + '0'
        if (shouldPop) { expressionArray.pop() }
        expressionArray.push(numbers)
    }
    else if (numberId === 'period') {
        numbers = numbers + '.'
        if (shouldPop) { expressionArray.pop() }
        expressionArray.push(numbers)
    }

    shouldPop = true
    updateScreen()
}

// Clears the screen
function clearScreen() {
    expressionArray.splice(0)
    numbers = ''
    updateScreen()

}

// Updates the screen based on `firstNumber`, `operation`, and `secondNumber`
function updateScreen() {
    let showResult = ''
    for (const each of expressionArray) {
        showResult = showResult + each
    }
    screen.innerText = showResult
}

 //helper function
function isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); }




