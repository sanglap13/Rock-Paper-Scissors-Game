const compChoiceDis = document.getElementById("comp-choice")
const userChoiceDis = document.getElementById("user-choice")
const resultDis = document.getElementById("result")
let userChoice
let compChoice
let result

const possibleChoices = document.querySelectorAll('button')

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDis.innerHTML = userChoice
    generateCompChoice()
    getResult()
}))

function generateCompChoice() {
    const randomNumber = Math.floor(Math.random() * 3); // also can use possibleChoices.length

    if(randomNumber === 1) {
        compChoice = 'rock'
    }
    if(randomNumber === 2) {
        compChoice = 'paper'
    }
    if(randomNumber === 3) {
        compChoice = 'scissors'
    }
    compChoiceDis.innerHTML = compChoice;
}


function getResult() {
    if(compChoice === userChoice) {
        result = 'Draw!'
    }
    if(compChoice === 'rock' &&  userChoice === 'paper') {
        result = 'you win'
    }
    if(compChoice === 'rock' &&  userChoice === 'scissors') {
        result = 'you lost'
    }
    if(compChoice === 'paper' &&  userChoice === 'scissors') {
        result = 'you win'
    }
    if(compChoice === 'paper' &&  userChoice === 'rock') {
        result = 'you lost'
    }
    if(compChoice === 'scissors' &&  userChoice === 'rock') {
        result = 'you win'
    }
    if(compChoice === 'scissors' &&  userChoice === 'paper') {
        result = 'you lost'
    }
    resultDis.innerHTML = result
}