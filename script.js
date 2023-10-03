const playerText = document.getElementById('playerText')
const computerText = document.getElementById('computerText')
const overlay = document.querySelector('.overlay')
const resultContain = document.querySelector('.resultContain')
const resultText = document.getElementById('resultText')
const resultImage = document.getElementById('resultImage')
const choiceBtns = document.querySelectorAll('.choiceBtn')
const playerHand = document.getElementById('playerHand')
const computerHand = document.getElementById('compHand')

let player;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener('click', ()=>{
    player = button.querySelector('.btnText').textContent;
    computerTurn()

    const myInterval = setInterval(() => {
        playerHand.style.animation = "rotate 2s infinite"
        computerHand.style.animation = "rotate 2s infinite"
    }, 0);

    setTimeout(() => {
        
        clearInterval(myInterval)
        playerHand.style.animation = "rotfate 2s infinite"
        computerHand.style.animation = "roftate 2s infinite"

        playerText.textContent = `${player}`
        computerText.textContent = `${computer}`
        
        if(player === "ROCK"){
            playerHand.querySelector('span').innerHTML = '&#9994;'
        }else if(player === "PAPER"){
            playerHand.querySelector('span').innerHTML = '&#9995;'
        }else{
            playerHand.querySelector('span').innerHTML = '&#9996;'
        }
        
        if(computer === "ROCK"){
            computerHand.querySelector('span').innerHTML = '&#9994;'
        }else if(computer === "PAPER"){
            computerHand.querySelector('span').innerHTML = '&#9995;'
        }else{
            computerHand.querySelector('span').innerHTML = '&#9996;'
        }
    }, 1000);

    resultText.textContent = checkWinner()

    if(checkWinner() === 'Draw!'){
        resultImage.style.backgroundImage = "url('./draw.svg')"
    }else if(checkWinner() === 'You Win!'){
        resultImage.style.backgroundImage = "url('./win.svg')"
    }else if(checkWinner() === 'You Lose!'){
        resultImage.style.backgroundImage = "url('./lose.svg')"
    }

    setTimeout(() => {
        resultContain.style.transform = "translate(-50%, -50%) scale(1)"
        resultContain.style.opacity = "1"
        resultContain.style.visibility = "visible"
        
        overlay.style.opacity = "1"
        overlay.style.visibility = "visible"

    }, 2000);
    
    setTimeout(() => {
        resultContain.style.transform = "translate(-50%, -50%) scale(0.5)"
        resultContain.style.opacity = "0"
        resultContain.style.visibility = "hidden"
        
        overlay.style.opacity = "0"
        overlay.style.visibility = "hidden"

    }, 3000);
}))

function computerTurn(){
    const random = Math.floor(Math.random() * 3) +1

    switch (random) {
        case 1:
            computer = "ROCK"
            break;
        case 2:
            computer = "PAPER"
            break;
        case 3:
            computer = "SCISSORS"
            break;
    }
}
function checkWinner(){
    if(computer == player){
        return 'Draw!';
    }
    else if(computer == 'ROCK'){
        return(player == 'PAPER'? 'You Win!': 'You Lose!')
    }
    else if(computer == 'PAPER'){
        return(player == 'SCISSORS'? 'You Win!': 'You Lose!')
    }
    else if(computer == 'SCISSORS'){
        return(player == 'ROCK'? 'You Win!': 'You Lose!')
    }
}