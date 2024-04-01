let userScore=0;
let compScore=0;
const msg=document.querySelector("#msg");
const userScoreBoard=document.querySelector("#user-score");
const compScoreBoard=document.querySelector("#comp-score");

const choices=document.querySelectorAll(".choice");

const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame=()=>{
    // console.log("Game was draw");
    msg.innerText="Game was Draw. Play Again";
    msg.style.backgroundColor="#272838";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        console.log("You Won");
        userScore++;
        userScoreBoard.innerText=userScore;
        msg.innerText=`User Won!! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        console.log("You Lost!");
        compScore++;
        compScoreBoard.innerText=compScore;
        msg.innerText=`You Lost!!  ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";

    }

}

const playGame=(userChoice)=>{
    // console.log("user choice="+userChoice);
    // to generate computer's choice
    const compChoice= genCompChoice();
    // console.log("computer choice="+compChoice);
    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            // scissor paper
            userWin= compChoice==="paper" ? false:true;
        }else if(userChoice==="paper"){
            // scissor rock
            userWin= compChoice==="scissor"? false:true;
        }else{
            // paper rock
            userWin=compChoice==="rock"? false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        // console.log(userChoice);
        playGame(userChoice);
    })
})