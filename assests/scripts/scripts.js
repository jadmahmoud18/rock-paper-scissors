// Variables
let computerChoice = ''
let result = ''
let winsCount = 0
let lossesCount = 0
let tiesCount = 0

// Functions

function computerChoose() {
    const randomNumber = Math.random();
    console.log(randomNumber)

    if (randomNumber >= 0 && randomNumber < 1/3) {
        computerChoice = 'Rock'
    }
    else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerChoice = 'Paper'
    }
    else {
        computerChoice = 'Scissors'
    }
}

function playerChooseRock() {
    const playerChoice = 'Rock'

    if (playerChoice === computerChoice) {
        result = 'Tie'
        tiesCount += 1
        document.getElementById('resultMessage').innerHTML = 'Tie!'
        document.getElementById('computerChoiceMessage').innerHTML = 'Computer Chose: Rock'
    }
    else if (playerChoice !== computerChoice && computerChoice === 'Scissors') {
        result = 'Win'
        winsCount += 1
        document.getElementById('resultMessage').innerHTML = 'You Win!'
        document.getElementById('computerChoiceMessage').innerHTML = 'Computer Chose: Scissors'
    }
    else {
        result = 'Lose'
        lossesCount += 1
        document.getElementById('resultMessage').innerHTML = 'You Lose!'
        document.getElementById('computerChoiceMessage').innerHTML = 'Computer Chose: Paper'
    }
    console.log(result)
    document.getElementById('winsCount').innerHTML = winsCount
    document.getElementById('tiesCount').innerHTML = tiesCount
    document.getElementById('lossesCount').innerHTML = lossesCount
    document.getElementById('playAgainMessage').innerHTML = 'To play again, simply click the button for your new choice again.'
}

function playerChoosePaper() {
    const playerChoice = 'Paper'

    if (playerChoice === computerChoice) {
        result = 'Tie'
        tiesCount += 1
        document.getElementById('resultMessage').innerHTML = 'Tie!'
        document.getElementById('computerChoiceMessage').innerHTML = 'Computer Chose: Paper'
    }
    else if (playerChoice !== computerChoice && computerChoice === 'Scissors') {
        result = 'Lose'
        lossesCount += 1
        document.getElementById('resultMessage').innerHTML = 'You Lose!'
        document.getElementById('computerChoiceMessage').innerHTML = 'Computer Chose: Scissors'
    }
    else {
        result = 'Win'
        winsCount += 1
        document.getElementById('resultMessage').innerHTML = 'You Win!'
        document.getElementById('computerChoiceMessage').innerHTML = 'Computer Chose: Rock'
    }
    console.log(result)
    document.getElementById('winsCount').innerHTML = winsCount
    document.getElementById('tiesCount').innerHTML = tiesCount
    document.getElementById('lossesCount').innerHTML = lossesCount
    document.getElementById('playAgainMessage').innerHTML = 'To play again, simply click the button for your new choice again.'
}

function playerChooseScissors() {
    const playerChoice = 'Scissors'

    if (playerChoice === computerChoice) {
        result = 'Tie'
        tiesCount += 1
        document.getElementById('resultMessage').innerHTML = 'Tie'
        document.getElementById('computerChoiceMessage').innerHTML = 'Computer Chose: Scissors'
    }
    else if (playerChoice !== computerChoice && computerChoice === 'Rock') {
        result = 'Lose'
        lossesCount += 1
        document.getElementById('resultMessage').innerHTML = 'You Lose!'
        document.getElementById('computerChoiceMessage').innerHTML = 'Computer Chose: Rock'
    }
    else {
        result = 'Win'
        winsCount += 1
        document.getElementById('resultMessage').innerHTML = 'You Win!'
        document.getElementById('computerChoiceMessage').innerHTML = 'Computer Chose: Paper'
    }
    console.log(result)
    document.getElementById('winsCount').innerHTML = winsCount
    document.getElementById('tiesCount').innerHTML = tiesCount
    document.getElementById('lossesCount').innerHTML = lossesCount
    document.getElementById('playAgainMessage').innerHTML = 'To play again, simply click the button for your new choice again.'
}

// Pop Up
document.getElementById('openPopupBtn').addEventListener('click', function() {
    document.getElementById('popUp').classList.add('active');
    document.getElementById('popUpOverlay').classList.add('active');
});

document.getElementById('closePopupBtn').addEventListener('click', function() {
    document.getElementById('popUp').classList.remove('active');
    document.getElementById('popUpOverlay').classList.remove('active');
});

document.getElementById('popUpOverlay').addEventListener('click', function() {
    document.getElementById('popUp').classList.remove('active');
    document.getElementById('popUpOverlay').classList.remove('active');
});
