function calculate() {
    let num1 = +prompt("Enter any number.", "1");
    let sign = prompt("Enter the operation.", "+");
    let num2 = +prompt("Enter any number.", "2");

    let result = null;

    switch (sign) {
        case "+": {
            result = num1 + num2;
            break;
        }
        case "-": {
            result = num1 - num2;
            break;
        }
        case "*": {
            result = num1 * num2;
            break;
        }
        case "/": {
            result = num1 / num2;
            break;
        }
        case "%": {
            result = num1 % num2;
            alert("Modulo is a mathematical operation that returns the remainder left over after one number is divided by another");
            break;
        }
        default: {
            alert("operator is wrong");
        }
    }

    if (result === null) {
        return;
    }

    alert(`Result is ${num1} ${sign} ${num2} = ${result}`);

    claculateAgain();
}

function claculateAgain() {
    const again = confirm("Want to calculate again?");

    if (!again) {
        alert("Thank You for using calculator.");

        return;
    }

    calculate();
}

calculate();