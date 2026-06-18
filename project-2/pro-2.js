

function calculate() {
let num1 = +(prompt('Enter any number.', '1'));
let sign = (prompt('Enter the operation.', '+'));
let num2 = +(prompt('Enter any number.', '2'));



    if (sign === "+") {
        add = num1 + num2;
        alert(`Result is ${num1} + ${num2} = ${add} `);
    }

    if (sign === "-") {
        let sub = num1 - num2;
        alert(`Result is ${num1} - ${num2} = ${sub} `);
    }

    if (sign === "*") {
        let multiply = num1 * num2;
        alert(`Result is ${num1} * ${num2} = ${multiply} `);
    }

    if (sign === "/") {
        let divide = num1 / num2;
        alert(`Result is ${num1} / ${num2} = ${divide} `);
    }


}

function claculateAgain(){
   const again= confirm("Want to calculate again?");
    if(again){
        calculate();
    }
    else{
        alert('Thank You for using calculator.')
    }
}
// //function add(){
//  //  let add= num1 + num2;

// }

// function sub(){
//     let sub=num1-num2;
// }

// function multiply(){
//     let multiply= num1 * num2;
// }

// function divide(){
//     let divide=num1 / num2;
// }

calculate();
claculateAgain()