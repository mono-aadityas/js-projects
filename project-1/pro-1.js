function startGame() {
    const secret = Math.floor(Math.random() * 100) + 1;
    console.log(secret);
    let guess 
    let count = 0;
    while (secret !== guess && count<50) {
        count++
        guess = +(prompt("Guess the number ?", ''));
        if(guess === 0){
            alert('Game Over')
            break;
        }
        if (secret > guess) {
            alert('Too Low !');
        
        }
        if (secret < guess) {
            alert('Too High !');
            
        }

        if (secret === guess) {
            alert(`You guessed right in ${count-1} attempts .`);
        }
    }



}

startGame();