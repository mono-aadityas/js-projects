const scores = [78, 92, 85, 99, 99];

function getAverage(scores) {
    let total = 0;

    scores.forEach(function (score) {
        total = total + score;
    });
    return total / scores.length ;

}

function getGrade(score) {

    if (score >= 90) {
        alert('A - Excellent');
    }

    else if (score >= 80) {
        alert('B - Good Work');

    }
    else if (score >= 70) {
        alert('C - Average');

    }
    else if (score >= 60) {
        alert('D - Below average');

    }
    else {
        alert('F - Better luck next ');

    }
}
const average = getAverage(scores);
const finalGrade = getGrade(Math.round(average));

const showAverage=document.getElementById('showAverage');

 let result =`The average of [${scores.join(', ')}] is ${average}`;

 showAverage.innerHTML = result;