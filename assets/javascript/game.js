//Global Variable
// ---------------------------------------------------------------------------------------------------

var words = ["carol", "presents", "santa"];
console.log (words);
var randomChoice = words[Math.floor(Math.random()*words.length)];
console.log (randomChoice);
var wins = 0;
console.log (wins);
var losses = 0;
console.log (losses);

//#ID
// ---------------------------------------------------------------------------------------------------

var randomChoiceElement = document.getElementById("randomChoice");
console.log(randomChoiceElement);
var guessedLettersElement = document.getElementById("guessedLetters");
console.log(guessedLettersElement);
var attemptsRemainingElement = document.getElementById("attemptsRemaining");
console.log(attemptsRemainingElement);
var winsElement = document.getElementById("wins");
console.log(winsElement);
var lossesElement = document.getElementById("losses");
console.log(lossesElement);

// function
// ---------------------------------------------------------------------------------------------------

function game() {

    wins = sessionStorage.getItem("winwin");
    document.getElementById("wins").innerHTML = wins;
    losses = sessionStorage.getItem("lossloss");
    document.getElementById("losses").innerHTML = losses;

    words = randomChoice;
    correctGuesses = [];
    wrongGuesses = [];
    allowedGuesses = 15;

    for (var i = 0; i < randomChoice.length; i++) {
        correctGuesses.push("_");
    }

console.log("randomChoice: " + words);   
console.log("correctGuesses: " + correctGuesses);
console.log(wrongGuesses);
//innerHTML

randomChoiceElement.innerHTML = correctGuesses.join(" ");
attemptsRemainingElement.innerHTML = allowedGuesses;
}

// ---------------------------------------------------------------------------------------------------

function updateGuesses(letter) {

    if (randomChoice.indexOf(letter) === -1) {
    wrongGuesses.push(letter);
    guessedLettersElement.innerHTML = wrongGuesses.join(", ");
    attemptsRemainingElement.innerHTML = allowedGuesses--;
    } 

    else {

        for (var i = 0; i < randomChoice.length; i++) {
        if (randomChoice[i] === letter) {
            correctGuesses[i] = letter;
        }

    }

console.log(letter);
// innerHTML

randomChoiceElement.innerHTML = correctGuesses.join(" ");
    }
}

// if (wrongGuesses = letter)

// ---------------------------------------------------------------------------------------------------

function checkWin() {
    if (correctGuesses.indexOf("_") === -1) {
        alert("You Win"); wins++; sessionStorage.setItem("winwin",wins); window.location.reload();
    } else if (allowedGuesses === -1) {
        alert("You Lose!"); losses++; sessionStorage.setItem("lossloss",losses); window.location.reload();
    }
}

winsElement.innerHTML = wins;
lossesElement.innerHTML = losses;

// ---------------------------------------------------------------------------------------------------
 
// ---------------------------------------------------------------------------------------------------
document.onkeyup = function (event) {
    var guessedLetters = String.fromCharCode(event.keyCode).toLowerCase();
    
    updateGuesses(guessedLetters);
    checkWin();
};

game();