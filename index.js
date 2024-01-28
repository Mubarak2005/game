let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
msg = document.querySelector("#msg");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}


const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore += 1;
        document.querySelector("#user-score").innerText = userScore;
        msg.innerText = `you win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compScore += 1;
        document.querySelector("#comp-score").innerText = compScore;
        msg.innerText = `You lost!  ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }

}


const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        msg.innerText = "Game was Draw! Play again.";
        msg.style.backgroundColor = "#010";
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            //paper, scissors
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});