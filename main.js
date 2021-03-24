var asideLeft = document.querySelector(".left");
var asideright = document.querySelector(".right");
var allInputs = document.querySelectorAll("input");
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

var btnNumber = 0;

for(var i = 0; i < allInputs.length; i++)
{
    allInputs[i].addEventListener("click",function(){
        this.style.border = "1px solid #ced4da";
    })
}

startBtn.addEventListener("click", function () {
    
    if(firstPlayerInp.value != "" && secondPlayerInp.value != ""){
        if(window.innerWidth < 850){
            asideright.style.display = "block";
            asideLeft.style.display = "none";
        }

        canIStartGame = true;
        setNamesToGames(firstPlayerInp, secondPlayerInp);


    }else{
        firstPlayerInp.style.border = "1px solid red";
        secondPlayerInp.style.border = "1px solid red";
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
             }
        }

        else if(i == 2){
            if(allGameBoxBtns[i].textContent == allGameBoxBtns[i+2].textContent
                && allGameBoxBtns[i].textContent == allGameBoxBtns[i+4].textContent
                && allGameBoxBtns[i].textContent != ""){
     
                 letter = allGameBoxBtns[i].textContent;
                 gameEnd = true;
             }
        }

        else if(i == 4){
            if(allGameBoxBtns[i].textContent == allGameBoxBtns[i-4].textContent
                && allGameBoxBtns[i].textContent == allGameBoxBtns[i+4].textContent
                && allGameBoxBtns[i].textContent != ""){
     
                 letter = allGameBoxBtns[i].textContent;
                 gameEnd = true;
             }
        }

        else if(i == 6 ||i == 7 || i == 8){
            if(allGameBoxBtns[i].textContent == allGameBoxBtns[i-3].textContent
                && allGameBoxBtns[i].textContent == allGameBoxBtns[i-6].textContent
                && allGameBoxBtns[i].textContent != ""){
     
                 letter = allGameBoxBtns[i].textContent;
                 gameEnd = true;
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
    }else if(btnNumber == 9 && letter == ""){
        alert("Draw");
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
                    {
                        this.textContent = "X";
                        btnNumber++
                    }
                else
                    {
                        this.textContent = "O";
                        btnNumber++
                    }
                this.disabled  = true;
                isFirstPlayerReady = !isFirstPlayerReady;
                checkWinnerLogic();
            }
        }
    })
}