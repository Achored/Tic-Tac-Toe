// Divs Divs Divs Divs Divs Divs Divs Divs Divs Divs Divs Divs Divs Divs 
const players= document.getElementById("players");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");

// Input type = text 
let player1_name = document.getElementById("player1-name")
let player2_name = document.getElementById("player2-name")

// Main button
const play_btn = document.getElementById("play");

// Player 1 Div buttons
const next_btn = document.getElementById("next");
const vsAI = document.getElementById("vs-AI");

// Player 2 Div buttons

const back = document.getElementById("back");
const start = document.getElementById("start");

// Tic tac toe div
const game =document.getElementById("game");

// Button declarations

const button0 = document.getElementById("button0");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const button6 = document.getElementById("button6");
const button7 = document.getElementById("button7");
const button8 = document.getElementById("button8");


// Tic Tac Toe buttons
const buttons = [button0, button1, button2, button3, button4, button5, button6, button7,button8];
// Winning combinations
const winningCombi = [
                      [button0, button1, button2],
                      [button3, button4, button5],
                      [button6, button7, button8],
                      [button0, button3, button6],
                      [button1, button4, button7],
                      [button2, button5, button8],
                      [button0, button4, button8],
                      [button2, button4, button6]
                     ];

// Option (New Game/Restart) Buttons

const restart = document.getElementById("restart");
const newgame = document.getElementById("newgame");


// Sets a global variable for game buttons to check turns. 

let i = 0;
let playing = 1;

// A function that loops through all the buttons. keyFunction is a parameter that accepts a function. The function will then apply to all buttons as it loops through all of them. 
// buttonNumber is the element iteration of the game buttons. 
let buttonLoop = (keyFunction) => {
  for (buttonNumber = 0; buttonNumber < buttons.length; buttonNumber ++)
  {
    keyFunction(buttons[buttonNumber]);
    
  }
}
// Function to disable/enable buttons after the match has been decided.  Uses buttonLoop function to loop through all the buttons. 
let ButtonStatus = (buttonStatus) => {
    buttonLoop((button) =>{
      button.disabled = buttonStatus;
    })
}
// Function that clears  the textContent of each button. Uses buttonLoop function to loop through all the buttons. 
let clearButtonvalues = () =>{
  buttonLoop((button) =>{
    button.textContent = ""
  })
}

//
let reset = () => {
  i = 0;
  return i;
}

// Functions to hide and show div
show = (show) => {
    show.style.display = "flex";
}

hide = (hide) =>{
  hide.style.display = "none";
}

// Function that checks the turn (X or O) based on how many clicks were initiated. 

checkTurn = (button) => {
  if  (i % 2 === 0) {
    button.textContent = "X";
  }
  else {
    button.textContent = "O";
  }
}


// Function that checks if the button already has a value of X or O. 
ifClicked = (button) => {
  if (button.textContent == "X" || button.textContent == "O") {
    alert("Button already clicked. Choose another one.");
  }
  else {
    checkTurn(button);
   
  }
}

// Button to start the game and proceed to input details for player 1 and 2

play_btn.addEventListener("click", function(event){
  show(players);
  show(player1);
  hide(player2);
});

// Button to input player 2 details

next_btn.addEventListener("click", function(event){
 
  if (player1_name.value != ""){
    show(player2);
    hide(player1);
  }
  else {
    alert("Please input a value.");}
});


//Button to play with an AI instead of another player

vsAI.addEventListener("click", function(event){
  hide(players);
  show(game);
  hide(play_btn);
});

// Starts the game and show the tic tac toe division

start.addEventListener("click", function(event){
  if (player2_name.value != ""){
    hide(players);
    hide(play_btn);
    show(game);
    
  }
  else {
    alert("Please input a value.");}
});

back.addEventListener("click", function(event){
  show(players);
  show(player1);
  hide(player2);
});


// Restarts the game and clears the buttons. If player 1 restarts the game, player 2 wins and vice versa. 

restart.addEventListener("click", function(event) {
  clearButtonvalues();

  if (button8.textContent === undefined) {

    if (i % 2 === 0)
    {
      alert(player2_name.value + " wins by default!");
      reset();
    } 
    else {
      alert(player1_name.value + " wins by default!");
      reset();

    }
  }
  else {
    ButtonStatus(false);
    reset();
  }
})

// Initiates a new game

newgame.addEventListener("click", function(event){
  player1_name.value = "";
  player2_name.value = "";
  show(players);
  show(player1);
  hide(player2);
  hide(game);

})

// 

for (let j = 0; j < buttons.length; j++) {
  buttons[j].addEventListener("click", function() {
    ifClicked(buttons[j]);
    i = i + 1;

    // Check who wins
    if (
      (button0.textContent === "X" && button1.textContent === "X" && button2.textContent === "X") ||
      (button3.textContent === "X" && button4.textContent === "X" && button5.textContent === "X") ||
      (button6.textContent === "X" && button7.textContent === "X" && button8.textContent === "X") ||
      (button0.textContent === "X" && button3.textContent === "X" && button6.textContent === "X") ||
      (button1.textContent === "X" && button4.textContent === "X" && button7.textContent === "X") ||
      (button2.textContent === "X" && button5.textContent === "X" && button8.textContent === "X") ||
      (button0.textContent === "X" && button4.textContent === "X" && button8.textContent === "X") ||
      (button2.textContent === "X" && button4.textContent === "X" && button6.textContent === "X")
      )
        {
          alert (player1_name.value + " wins!")
          ButtonStatus(true);
          playing = 0;

        }
    
    else if (
        (button0.textContent === "O" && button1.textContent === "O" && button2.textContent === "O") ||
        (button3.textContent === "O" && button4.textContent === "O" && button5.textContent === "O") ||
        (button6.textContent === "O" && button7.textContent === "O" && button8.textContent === "O") ||
        (button0.textContent === "O" && button3.textContent === "O" && button6.textContent === "O") ||
        (button1.textContent === "O" && button4.textContent === "O" && button7.textContent === "O") ||
        (button2.textContent === "O" && button5.textContent === "O" && button8.textContent === "O") ||
        (button0.textContent === "O" && button4.textContent === "O" && button8.textContent === "O") ||
        (button2.textContent === "O" && button4.textContent === "O" && button6.textContent === "O")
      )
        {
          alert (player2_name.value + " wins!")
          ButtonStatus(true);
          playing = 0;
        }

      else if (
          button0.textContent != "" &&
          button1.textContent != "" &&
          button2.textContent != "" &&
          button3.textContent != "" &&
          button4.textContent != "" &&
          button5.textContent != "" &&
          button6.textContent != "" &&
          button7.textContent != "" &&
          button8.textContent != ""
        ) {
      alert("It's a tie!");
      disableBtns();
      playing = 0;
    }
    });
  }