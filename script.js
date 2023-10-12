var res = document.getElementById('result');
var clr = document.getElementById('clear-btn');
var currentNum = '';
var currentOp = '';
var enterBtn = document.getElementById('enterBtn');
var dotBtn = false;
var container = document.querySelector('.container');
container.addEventListener('click', valfun);

function valfun(e) {
    if (e.target && e.target.tagName === 'BUTTON') {
        if (e.target.textContent === 'C') {
            clear();
            return;
        }

        if (e.target.textContent === 'Enter') {
            calculateResult();
            return;
        }

        if (e.target.textContent === '+' || e.target.textContent === '-' || e.target.textContent === '*' || e.target.textContent === '/') {
            handleOperatorClick(e.target.textContent);
        } else if (e.target.textContent === '.') {
            handleDotClick(e.target.value);
        } else {
            handleNumberClick(e.target.value);
        }
    }
}

function handleOperatorClick(operator) {
    if (currentNum !== '') {
        if (currentOp !== '') {
            calculateResult();
        }
        currentOp = operator;
        res.value = currentNum + currentOp;
        currentNum = '';
        dotBtn = false;
    }
}

function handleDotClick(value) {
    if (!dotBtn) {
        currentNum += value;
        res.value += value;
        dotBtn = true;
    }
}

function handleNumberClick(value) {
    currentNum += value;
    res.value += value;
}

function calculateResult() {
    if (currentNum !== '' && currentOp !== '') {
        var result;
        var number1 = parseFloat(res.value.split(currentOp));
        var number2 = parseFloat(currentNum);

        switch (currentOp) {
            case '+':
                result = number1 + number2;
                break;
            case '-':
                result = number1 - number2;
                break;
            case '*':
                result = number1 * number2;
                break;
            case '/':
                if (number2 === 0) {
                    res.value = 'Error';
                    return;
                }
                result = number1 / number2;
                break;
            default:
                break;
        }

        res.value = result;
        currentNum = result;
        currentOp = '';
    }
}

function clear() {
    res.value = '';
    currentNum = '';
    currentOp = '';
    dotBtn = false;
}
// avoiding nesting 
