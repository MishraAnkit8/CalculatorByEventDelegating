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
            // Clear button for  clear the display
            clear();
        }

        if (e.target.textContent === '+' || e.target.textContent === '-' || e.target.textContent === '*' || e.target.textContent === '/') {
            console.log('working');
            if (currentNum !== '') {
                console.log('current Number value', currentNum);
                if (currentOp !== '') {
                    calculateResult();
                }
                currentOp = e.target.textContent; // Store the operator itself
                console.log('working condition of operator', currentOp);
                // Update res window
                res.value = currentNum + currentOp; 
                console.log('res.value ==', res.value);
                currentNum = '';
                dotBtn = false;
            }
        } else {
            if (e.target.textContent === '.') {
                // Check if a dot has already been used in the current number
                if (!dotBtn) {
                    // If no dot has been used, add the dot
                    currentNum += e.target.value;
                    res.value += e.target.value;
                    dotBtn = true;
                }
            } else {
                currentNum += e.target.value;
                res.value += e.target.value;
                console.log('current number is=', currentNum);
            }
        }
    }
}

function calculateResult() {
    if (currentNum !== '' && currentOp !== '') {
        console.log('inside calculate function current num', parseFloat(currentNum));
        var result;
        var number1 = parseFloat(res.value.split(currentOp));
        console.log(`number 1 is ${number1}`);
        var number2 = parseFloat(currentNum);
        console.log(`number 2 is ${number2}`);

        switch (currentOp) {
            case '+':
                result = number1 + number2;
                console.log(`result of addition = ${result}`);
                break;
            case '-':
                result = number1 - number2;
                console.log(`result subtraction = ${result}`);
                break;
            case '*':
                result = number1 * number2;
                console.log(`result multiplication = ${result}`);
                break;
            case '/':
                if (number2 === 0) {
                    res.value = 'Error';
                    return;
                }
                result = number1 / number2;
                console.log(`result results of division = ${result}`);
                break;
            default:
                break;
        }

        res.value = result; // Update the display correctly
        currentNum = result;
        console.log(`current number is after update ${currentNum}`);
        currentOp = '';
    }
}

enterBtn.addEventListener('click', calculateResult);

function clear() {
    res.value = '';
    currentNum = '';
    currentOp = '';
    dotBtn = false;
}
