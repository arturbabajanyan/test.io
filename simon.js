const colorList = ['green', 'red', 'yellow', 'blue'];
let level = 0;
let computerChoice = [];
let  playerChoice = [];
let inGame = false;
let rightAnswer = 0;


function startGame(e) {
    if (!inGame) {
        setTimeout(nextSequence, 100);
        inGame = true;
    }
}

document.addEventListener('keyup', startGame);
document.querySelector('h1').addEventListener('click', startGame);



for (let i = 0; i < colorList.length; i++) {
    document.querySelectorAll('.btn')[i].addEventListener('click', function(e) {
        playerChoice.push(e.target.id);
        clickEffect(e.target.id);
        checkAnswers(playerChoice.length-1);
    })
}


function  checkAnswers(currentLevel) {
    if (computerChoice[currentLevel] === playerChoice[currentLevel]) {
        if (computerChoice.length === playerChoice.length) {
            rightAnswer = setTimeout(nextSequence, 1000);
        }
    } else {
        document.body.classList.add('game-over');
        setTimeout(() => document.body.classList.remove('game-over'), 100);
        document.getElementById("level-title").innerHTML = `${sadFace} Game Over ${sadFace}`;
        if ((level - 1) < 0) {
            document.getElementById("level-title").innerText += `\n${level} correct matches\nPress Any Key or Click Here To Start Again`;
        } else {
            document.getElementById("level-title").innerText += `\n${level-1} correct matches\nPress Any Key or Click Here To Start Again`;
        }
        startOver();
    }
}


function startOver() {
    if (playerChoice.length > computerChoice.length) {
        clearTimeout(rightAnswer);
    }
    level = 0;
    computerChoice = [];
    inGame = false;
}


function nextSequence() {
    playerChoice = [];
    level++;
    if (level > 5) {
        document.getElementById("level-title").innerHTML = `${nerdFace} Level ${level} ${nerdFace}`;
    } else {
        document.getElementById("level-title").innerHTML = `${happyFace} Level ${level} ${happyFace}`;
    }
    randomNumber = (Math.floor(Math.random() * 4));
    computerChoice.push(colorList[randomNumber]);
    funcFadeOut(colorList[randomNumber]);
}


// ---------------- random choose effect ---------------- //
function funcFadeOut(color) {
    document.getElementById(color).style.opacity = '0';
    fadeOutValue = 0;

    const fadeOut = setInterval(function() {
        if (fadeOutValue <= 100) {
            document.getElementById(color).style.opacity = `${fadeOutValue}%`;
            fadeOutValue += 10;
        } else {
            clearInterval(fadeOut);
        }
    }, 30)
}


// ---------------- player click effect ---------------- //
function clickEffect(color) {
    document.getElementById(color).classList.add('pressed');
    setTimeout(() => {document.getElementById(color).classList.remove('pressed')}, 70);
}
