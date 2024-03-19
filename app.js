let inputBox = document.getElementById('input');
let buttons = document.querySelectorAll('button');
let string = '';
let lastOperator = '';

buttons.forEach(element => {
    element.addEventListener('click', function (b) {
        if (b.target.innerText == '=') {
            string = string == '' ? '0' : string;
            try {
                string = String(eval(string));
                inputBox.value = string;
            } catch (error) {
                inputBox.value = "Error(Press AC)";
            }
        } else if (b.target.innerText == 'AC') {
            string = '';
            lastOperator = '';
            inputBox.value = string;
        } else if (b.target.innerText == 'DEL') {
            string = string.substring(0, string.length - 1);
            inputBox.value = string;
        } else if (['+', '-', '*', '/'].includes(b.target.innerText)) {
            if (string.endsWith('+') || string.endsWith('-') || string.endsWith('*') || string.endsWith('/')) {
                string = string.substring(0, string.length - 1);
            }
            string += b.target.innerText;
            lastOperator = b.target.innerText;
            inputBox.value = string;
        } else {
            string += b.target.innerText;
            inputBox.value = string;
        }
    });
});