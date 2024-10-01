let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("Game Drawn.");
    msg.innerText="Game was Draw.play again";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win !");
        msg.innerText = "You win!!"
        msg.style.backgroundColor = "green"
    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        console.log("you loose");
        msg.innerText="You loose"
        msg.style.backgroundColor = "red"
    }
};

const playGame =(userChoice) =>{
    console.log("user choice =",userChoice)
    const compChoice = genCompChoice();
    console.log("comp choice =",compChoice);

    if(userChoice === compChoice) {
        //draw game
        drawGame();
    } else {
        let userWin=true;
        if(userChoice === "rock"){
            //scissor,paper
        userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper") {
            //rock,scissor
        userWin = compChoice === "scissor" ? false : true;
        }
        else if(userChoice === "scissor") {
            //rock,paer
        userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
    });
});

