function btnPress(event) {
    let buttonvalue = event.target.value
    if (buttonvalue == '=') {
        displayValue2.innerHTML = eval(displayValue2.innerHTML)
        displayValue.innerHTML = eval(displayValue2.innerHTML);
    } else if (buttonvalue == 'AC') {
        displayValue.innerHTML = 0;
        displayValue2.innerHTML = 0;

    }
    else if (buttonvalue == '*') {
        let sample = /[\+\-\/]$/
        if (sample.test(displayValue.innerHTML.charAt(displayValue.innerHTML.length - 1)) == true) {
            displayValue.innerHTML = displayValue.innerHTML.slice(0, -1)
            displayValue2.innerHTML = displayValue2.innerHTML.slice(0, -1)
            displayValue.innerHTML += 'x'
            displayValue2.innerHTML += buttonvalue
        }
        else if (displayValue.innerHTML.charAt(displayValue.innerHTML.length - 1) != 'x' && displayValue.innerHTML[displayValue.innerHTML.length - 1] !== 'x') {
            displayValue.innerHTML += 'x'
            displayValue2.innerHTML += buttonvalue;
        }

    }
    else if (buttonvalue == 'del') {
        displayValue.innerHTML = displayValue.innerHTML.slice(0, -1)
        displayValue2.innerHTML = displayValue2.innerHTML.slice(0, -1);
        if (displayValue.innerHTML.length < 1) {
            displayValue.innerHTML = 0;
            displayValue2.innerHTML = 0
        }
    }
    else if (buttonvalue == '.') {
        //used to check if decimal point already exist
        if (displayValue.innerHTML.includes('.') === false) {
            displayValue.innerHTML += '.';
            displayValue2.innerHTML += '.';
        }
    }

    else {
        if (displayValue.innerHTML == 0 || displayValue2.innerHTML == 0) {
            displayValue.innerHTML = buttonvalue;
            displayValue2.innerHTML = buttonvalue;

        } else {
            if (buttonvalue == '+') {
                let sample = /[x\-\/]$/
                if (sample.test(displayValue.innerHTML.charAt(displayValue.innerHTML.length - 1)) == true) {
                    displayValue.innerHTML = displayValue.innerHTML.slice(0, -1)
                    displayValue2.innerHTML = displayValue2.innerHTML.slice(0, -1)
                    displayValue.innerHTML += buttonvalue
                    displayValue2.innerHTML += buttonvalue
                }
                else if (displayValue.innerHTML.charAt(displayValue.innerHTML.length - 1) != '+' && displayValue.innerHTML[displayValue.innerHTML.length - 1] !== '+') {
                    displayValue.innerHTML += buttonvalue
                    displayValue2.innerHTML += buttonvalue;
                }
            }
            else if (buttonvalue == '/') {
                let sample = /[\+\-x]$/
                if (sample.test(displayValue.innerHTML.charAt(displayValue.innerHTML.length - 1)) == true) {
                    displayValue.innerHTML = displayValue.innerHTML.slice(0, -1)
                    displayValue2.innerHTML = displayValue2.innerHTML.slice(0, -1)
                    displayValue.innerHTML += buttonvalue
                    displayValue2.innerHTML += buttonvalue
                }
                else if (displayValue.innerHTML.charAt(displayValue.innerHTML.length - 1) != '/' && displayValue.innerHTML[displayValue.innerHTML.length - 1] !== '/') {
                    displayValue.innerHTML += buttonvalue
                    displayValue2.innerHTML += buttonvalue;
                }
            }
            else if (buttonvalue == '-') {
                let sample = /[\+x\/]$/
                if (sample.test(displayValue.innerHTML.charAt(displayValue.innerHTML.length - 1)) == true) {
                    displayValue.innerHTML = displayValue.innerHTML.slice(0, -1)
                    displayValue2.innerHTML = displayValue2.innerHTML.slice(0, -1)
                    displayValue.innerHTML += buttonvalue
                    displayValue2.innerHTML += buttonvalue
                }
                if (displayValue.innerHTML.charAt(displayValue.innerHTML.length - 1) != '-' && displayValue.innerHTML[displayValue.innerHTML.length - 1] !== '-') {
                    displayValue.innerHTML += buttonvalue
                    displayValue2.innerHTML += buttonvalue;
                }
            }
            else {
                displayValue.innerHTML += buttonvalue;
                displayValue2.innerHTML += buttonvalue;
            }
        }
    }
}