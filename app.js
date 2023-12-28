let userScore = 0;                                              // if userwin score will increase
let compScore = 0;                                              // if computerwin score will increase

const choices = document.querySelectorAll(".choice");           // this for query is used for accessing the html or for
const msg = document.querySelector("#msg");                     // displaying / changing 
const user_score = document.querySelector("#user-score");
const comp_score = document.querySelector("#comp-score");

const genrateComputerChoice = () =>{                        //It generate Computer move by using math.random function

    const randomNum = Math.random();                      //Give number range frm 0 to 1 And I am Dividing number into 3 
    //computer generate move                                
    let computerMove;
    if(randomNum >=0 && randomNum < 1/3){                   //for fast 1/3 range it will consider as rock
        computerMove = 'rock';
    }
    else if(randomNum >= 1/3 && randomNum < 2/3){           // for middle range consider as paper
        computerMove = 'paper';
    }
    else{
        computerMove = 'scissor';                           // and remaining range consider as scissor
    } 
    return computerMove;
}

const drawGame = () => {                                    // if match get draw this function is used
    msg.innerText = "Game was Draw. Play again.";
  };

 const scores = (user, userChoice, compChoice) => {         //it is used for proceding the score of user and comp
    if(user === true){
        userScore++;
        user_score.innerText = userScore;                   //used for displaing or increasing score of user
        msg.innerText = "You Win!!";
    }
    else if(user === false){
        compScore++;
        comp_score.innerText = compScore;                   //used for displaing or increasing score of comp
        msg.innerText = "You Loss!!";
    }
 } 

const game = (userchoice, compchoice) => {
    if(userchoice === compchoice){
        drawGame();
    }
    else{                                                  //if it is not draw it will check user and computer choies
        let userWin = true;
        if(userchoice === "rock"){
            if(compchoice === "paper"){
                userWin = false; 
            }
            else if(compchoice === "scissor"){
                userWin = true;
            }
        }
        else if(userchoice === "paper"){
            if(compchoice === "rock"){
                userWin = true; 
            }
            else if(compchoice === "scissor"){
                userWin = false; 
            }
        }
        else if(userchoice === "scissor"){
            if(compchoice === "rock"){
                userWin = false; 
            }
            else if(compchoice === "paper"){
                userWin = true; 
            }
        }
        
    return userWin;
    }
}

const playGame = (userChoice) => {                          
    console.log("User choice ", userChoice);                //Show in console tab in inspect
    const compChoice = genrateComputerChoice();             // genrate and store the value
    console.log("Computer choice ", compChoice);

    const user = game(userChoice, compChoice);              // take user win or choice 
    scores(user, userChoice, compChoice);                   // final output
}

choices.forEach((choice) => {                           //used for get access of image after click
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);                           //it takes user image click input 
    })
})

