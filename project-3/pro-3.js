
function runFizzBuzz() {

    const output = document.getElementById('output');
    let result = '';
    for (i = 1; i <= 100; i++) {


        if (i % 3 === 0 && i % 5 === 0) {
            result += 'FizzBuzz<br>';

        }

        else if (i % 3 === 0) {
            result += 'Fizz<br>';

        }

        else if (i % 5 === 0) {
            result += 'Buzz<br> ';
        }

        else {
            result += `${i}<br>`;
        }

    }

    output.innerHTML = result;
}

