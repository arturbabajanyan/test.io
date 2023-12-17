const colorList = ['green', 'red', 'yellow', 'blue'];
let level = 0;
let computerChoice = [];
let  playerChoice = [];
let inGame = false;


document.addEventListener("keyup", function() {
    if (!inGame) {
        setTimeout(nextSequence, 100);
        inGame = true;
    }
});


for (let i = 0; i < colorList.length; i++) {
    document.querySelectorAll('.btn')[i].addEventListener('click', function(e) {
        playerChoice.push(e.target.id);
        clickEffect(e.target.id);
        checkAnswers(playerChoice.length-1);
    })
}


function  checkAnswers(currentLevel) {
    // console.log(computerChoice.length);
    // console.log(playerChoice.length);
    if (computerChoice[currentLevel] === playerChoice[currentLevel]) {
        if (computerChoice.length === playerChoice.length) {
            // console.log("perfect");
            setTimeout(nextSequence, 1000);
        }
    } else {
        // console.log('wrong answer');
        document.body.classList.add('game-over');
        setTimeout(() => document.body.classList.remove('game-over'), 100);
        document.getElementById("level-title").innerHTML = `${angryFace} Game Over ${angryFace}`;
        if ((level - 1) < 0) {
            document.getElementById("level-title").innerText += `\n\nYou did ${level} correct matches\n\nPress Any Key To Start Again`;
        } else {
            document.getElementById("level-title").innerText += `\n\nYou did ${level-1} correct matches\n\nPress Any Key To Start Again`;
        }
        startOver();
    }
}


function startOver() {
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
