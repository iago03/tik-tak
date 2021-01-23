var firstPlayerInp = document.querySelector(".first-player");
var secondPlayerInp = document.querySelector(".second-player");
var gamersNames = document.querySelector(".gamers-names");
var startBtn = document.querySelector(".start-btn");
var allGameBoxBtns = document.querySelectorAll(".game-box-btn");
var isFirstPlayerReady = true;
var canIStartGame = false;
var vinfirst = "";
var vinSecond = "";
var gameEnd = false
  

startBtn.addEventListener("click", function () {
    if(firstPlayerInp.value != "" && secondPlayerInp.value != ""){
        canIStartGame = true;
        setNamesToGames(firstPlayerInp, secondPlayerInp);
    }
});

function checkWinnerLogic(){
    var letter = "";
    for(var i = 0; i < 9; i++){
        if(i % 3 ==0){
            if(allGameBoxBtns[i].textContent == allGameBoxBtns[i+1].textContent
                && allGameBoxBtns[i].textContent == allGameBoxBtns[i+2].textContent
                && allGameBoxBtns[i].textContent != ""){
     
                 letter = allGameBoxBtns[i].textContent;
                 gameEnd = true;
                 console.log(letter);
             }
        }

        else if(i == 2){
            if(allGameBoxBtns[i].textContent == allGameBoxBtns[i+2].textContent
                && allGameBoxBtns[i].textContent == allGameBoxBtns[i+4].textContent
                && allGameBoxBtns[i].textContent != ""){
     
                 letter = allGameBoxBtns[i].textContent;
                 gameEnd = true;
                 console.log(letter);
             }
        }

        else if(i == 4){
            if(allGameBoxBtns[i].textContent == allGameBoxBtns[i-4].textContent
                && allGameBoxBtns[i].textContent == allGameBoxBtns[i+4].textContent
                && allGameBoxBtns[i].textContent != ""){
     
                 letter = allGameBoxBtns[i].textContent;
                 gameEnd = true;
                 console.log(letter);
             }
        }

        if(i == 6 ||i == 7 || i == 8){
            if(allGameBoxBtns[i].textContent == allGameBoxBtns[i-3].textContent
                && allGameBoxBtns[i].textContent == allGameBoxBtns[i-6].textContent
                && allGameBoxBtns[i].textContent != ""){
     
                 letter = allGameBoxBtns[i].textContent;
                 gameEnd = true;
                 console.log(letter);
             }
        }
    }

    if(letter == "X"){
        alert(`Won : ${vinfirst}`);
        window.location.reload()
    }
    else if(letter == "O"){
        alert(`Won : ${vinSecond}`);
        window.location.reload()
    }
}


function setNamesToGames(firstInp, secondInp) {
    gamersNames.textContent = `Player ${firstInp.value} : Player ${secondInp.value}`;
    vinfirst = firstInp.value;
    vinSecond = secondInp.value;
    firstInp.value = "";
    secondInp.value = "";
}

for (var i = 0; i < allGameBoxBtns.length; i++) {
    allGameBoxBtns[i].addEventListener("click", function () {
        if(!gameEnd){
            if (canIStartGame) {
                if (isFirstPlayerReady)
                    this.textContent = "X";
                else
                    this.textContent = "O";
                this.disabled  = true;
                isFirstPlayerReady = !isFirstPlayerReady;
                checkWinnerLogic();
            }
        }
    })
}