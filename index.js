const start = document.querySelector('#forStart');
start.addEventListener('click', () => {
    let maxNum = parseInt(prompt("Enter a maximum number!!!"));
    while (!maxNum) {
        maxNum = parseInt(prompt("Enter a valid maximum number!!!"));
    }
    let gusNum = Math.floor(Math.random() * maxNum) + 1;
    alert("Enter Q or q to quit the game");
    let Guess = prompt("Guess the number!!!");
    let count = 1;
    while (Guess !== 'q' || Guess !== 'Q') {
        if (parseInt(Guess) > gusNum) {
            Guess = prompt("Guess a lower number!!!");
            count++;
        }
        else if (parseInt(Guess) < gusNum) {
            Guess = prompt("Guess a higher number!!!");
            count++;
        }
        else if (parseInt(Guess) === gusNum) {
            alert(`You took ${count} Attempts!!!`)
            break;
        }
        else {
            Guess = prompt("Guess a higher number!!!");
            count++;
        }
        if (Guess === 'q' || Guess === 'Q') {
            alert("you have Quit the game!!!");
            break;
        }
    }
})
