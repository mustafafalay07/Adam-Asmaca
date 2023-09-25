const words = ["javascript", "programming", "developer", "computer", "website"];
let selectedWord = words[Math.floor(Math.random() * words.length)];
const wordDisplay = document.getElementById("word-display");
const letterInput = document.getElementById("letter-input");
const guessButton = document.getElementById("guess-button");
const restartButton = document.getElementById("restart-button");
const message = document.getElementById("message");
const guessCount = document.getElementById("guess-count");
let guesses = 0;
let guessedLetters = [];

function displayWord() {
    let displayText = "";
    for (const letter of selectedWord) {
        if (guessedLetters.includes(letter)) {
            displayText += letter;
        } else {
            displayText += "_";
        }
        displayText += " ";
    }
    wordDisplay.textContent = displayText;
}

function checkWin() {
    if (!wordDisplay.textContent.includes("_")) {
        message.textContent = "Tebrikler, kazandınız!";
        guessButton.disabled = true;
    }
}

function checkLoss() {
    if (guesses >= 6) {
        message.textContent = "Üzgünüz, kaybettiniz. Doğru kelime: " + selectedWord;
        guessButton.disabled = true;
    }
}

guessButton.addEventListener("click", () => {
    const letter = letterInput.value.toLowerCase();
    if (letter.match(/^[a-z]$/) && !guessedLetters.includes(letter)) {
        guessedLetters.push(letter);
        displayWord();
        if (!selectedWord.includes(letter)) {
            guesses++;
        }
        guessCount.textContent = guesses;
        checkWin();
        checkLoss();
    }
    letterInput.value = "";
});

restartButton.addEventListener("click", () => {
    selectedWord = words[Math.floor(Math.random() * words.length)];
    guessedLetters = [];
    guesses = 0;
    guessButton.disabled = false;
    message.textContent = "";
    guessCount.textContent = guesses;
    displayWord();
});

displayWord();
