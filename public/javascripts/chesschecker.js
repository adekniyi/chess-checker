var player1Name = document.querySelector(".player1name")
var player2Name = document.querySelector(".player2name")
var player1Button = document.querySelector(".player1Inp");
var player2Button = document.querySelector(".player2Inp");
var player1Number = document.querySelector(".player1Num");
var player2Number = document.querySelector(".player2Num");
var resetBtton = document.querySelector(".reset");
var input = document.querySelector("#number");
var highestScore = document.querySelector("h3 span");
var winner = document.querySelector(".playerThatWon");
var player1Score = 0;
var player2Score = 0;
var gameOver = false;
var winningScore = 0;





// player1Button.addEventListener("click", function(){
//             if(player1Number != highestScore.innerHTML){
//                 player1Number.innerHTML++;
//         }else{
//             player1Number.innerHTML = highestScore.innerHTML;
//         }
//     });
player1Button.addEventListener("click", function(){
if(!gameOver){
    player1Score++
        if(player1Score === winningScore){
            player1Number.classList.add("winner");
        gameOver = true;
        winner.innerHTML = player1Name.textContent + " won";

    }
    }
    player1Number.innerHTML = player1Score;
});
player2Button.addEventListener("click", function(){
    if(!gameOver){
        player2Score++
            if(player2Score === winningScore){
                player2Number.classList.add("winner");
            gameOver = true;
            winner.innerHTML = player2Name.textContent + " won";
        }
        }
        player2Number.innerHTML = player2Score;
    });

input.addEventListener("change", function(){
    highestScore.innerHTML = input.value;
    winningScore = Number(input.value);
});
resetBtton.addEventListener("click", function(){
    player1Score = 0;
    player2Score = 0;
    player1Number.innerHTML = 0;
    player1Number.classList.remove("winner");
    player2Number.classList.remove("winner");
    player2Number.innerHTML = 0;
    gameOver = false;
    highestScore.innerHTML = winningScore;
    winner.innerHTML = " ";
})