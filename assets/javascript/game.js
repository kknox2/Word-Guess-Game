//array of video games
var words = ["MARIO", "ZELDA", "CONTRA", "CASTLEVANIA"
];

var maxNumGuesses = 11; // max number of guesses 
var guessedLetters = []; // store the guessed letters
var ansWordArr = []; // store the "_" and to be used to replace the word answer
var numGuessesRemaining = 0; // number of guesses left
var numWins = 0; // number of wins
var numLosses = 0; // number of losses
var isFinished = false; // when true, game can start again
var ansWord; // the word that is being played

// function runs at the start of page and used to restart after game isFinished
function setup() {
    //picks random word from words list
    ansWord = words[Math.floor(Math.random() * words.length)];

    ansWordArr = [];

    // adds "_" to ansWordArr
    for (var i = 0; i < ansWord.length; i++) {
        ansWordArr[i] = " _ ";
    }
    console.log(ansWordArr);
    // reset the variables 
    numGuessesRemaining = maxNumGuesses;
    guessedLetters = [];

    updateScreen();

};

//updates the HTML from the functions
function updateScreen() {
    document.getElementById("numWins").innerText = numWins;
    document.getElementById("numLosses").innerText = numLosses;
    document.getElementById("numGuesses").innerText = numGuessesRemaining;
    document.getElementById("answerWord").innerText = ansWordArr.join("");
    document.getElementById("guessedLetters").innerText = guessedLetters;

};

//function to check if the player is a winner
function isWinner() {
    //if there are no more "_" in the ansWordArr then +1 to Wins and switch isFinished to true
    if (ansWordArr.indexOf(" _ ") === -1) {
        numWins++;
        isFinished = true;
        console.log(ansWord);
        //if the answer is guessed then show game picture
        if (ansWord === "MARIO") {
            var marioImage = document.createElement("IMG");
            marioImage.setAttribute("src", "./assets/images/mario.jpg");
            marioImage.setAttribute("alt", "Picture of mario");
            var gameImagaesContainer = document.getElementById("game-images");
            gameImagaesContainer.appendChild(marioImage);
            // document.getElementById("mario").src = "/assets/images/mario.png";
            console.log("YOU WIN");
        } else if (ansWord === "ZELDA") {
            var marioImage = document.createElement("IMG");
            marioImage.setAttribute("src", "./assets/images/zelda.jpg");
            marioImage.setAttribute("alt", "Picture of zelda");
            var gameImagaesContainer = document.getElementById("game-images");
            gameImagaesContainer.appendChild(marioImage);
            // document.getElementById("zelda").src = "/assets/images/zelda.png";
            console.log("YOU WIN");
        } else if (ansWord === "CONTRA") {
            var marioImage = document.createElement("IMG");
            marioImage.setAttribute("src", "./assets/images/contra.jpg");
            marioImage.setAttribute("alt", "Picture of contra");
            var gameImagaesContainer = document.getElementById("game-images");
            gameImagaesContainer.appendChild(marioImage);
            // document.getElementById("contra").src = "/assets/images/contra.png";
            console.log("YOU WIN");
        } else if (ansWord === "CASTLEVANIA") {
            var marioImage = document.createElement("IMG");
            marioImage.setAttribute("src", "./assets/images/castlevania.jpg");
            marioImage.setAttribute("alt", "Picture of castelevania");
            var gameImagaesContainer = document.getElementById("game-images");
            gameImagaesContainer.appendChild(marioImage);
            // document.getElementById("castlevania").src = "/assets/images/castlevania.png";
            console.log("YOU WIN");
        }

        console.log("GAME OVER!");
    };

}

//function to check if player is a loser
function isLoser() {
    // if the numGuessesRemaining is 0 then -1 numLosses and switch isFinished to true
    if (numGuessesRemaining <= 0) {
        numLosses++;
        isFinished = true;
        //show loser image
        var marioImage = document.createElement("IMG");
        marioImage.setAttribute("src", "./assets/images/loser.jpg");
        marioImage.setAttribute("alt", "Picture of loser");
        var gameImagaesContainer = document.getElementById("game-images");
        gameImagaesContainer.appendChild(marioImage);
        document.getElementById("numLosses").style.color = "#e12d2e";
        console.log("game over!");
    }
};

//function to check the key that's pressed
function checkGuess(letter) {
    //if letter is not in guessedLetters array then push the letter to the array
    console.log(letter);
    for (var i = 0; i < ansWord.length; i++) {
        if (letter === ansWord[i]) {
            ansWordArr[i] = letter;
            console.log("This letter was right!");
            console.log(ansWordArr);
        }
    }

    updateScreen();

    if (guessedLetters.indexOf(letter) === -1) {
        guessedLetters.push(letter);
        //if the letter isn't in the answer word then -1 the numGuessesRemaining
        updateScreen();
        //if letter is in answer then replace the positioned "_" with the letter
    }
    if (ansWord.indexOf(letter) === -1) {
        numGuessesRemaining--;
        updateScreen();
    }

}

//event listener for key pressed
document.onkeyup = function (event) {
    //if isFinished is true then restart the game to the initial setup 
    //and switch isFinished back to false
    if (isFinished) {
        setup();
        isFinished = false;
    } else {
        //check to see if only letters A-Z are pressed
        //functions are executed when user presses A-Z key
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            checkGuess(event.key.toUpperCase());
            updateScreen();
            isWinner();
            isLoser();
        }
    }
};


setup();

console.log(ansWord);