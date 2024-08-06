// Wordle game variables
const targetWord = "coded"; // The correct Wordle word
let attempts = 0;
const maxAttempts = 6;

// Wordle game logic
function checkWordle() {
    const input = document.getElementById("wordle-input").value.toLowerCase();
    const wordleMessage = document.getElementById("wordle-message");
    if (input.length !== 5) {
        wordleMessage.textContent = "Please enter a 5-letter word.";
        return;
    }

    const wordleGrid = document.getElementById("wordle-grid");
    const row = document.createElement("div");
    row.className = "wordle-row";

    let correctLetters = 0;
    for (let i = 0; i < 5; i++) {
        const cell = document.createElement("div");
        cell.className = "wordle-cell";
        cell.textContent = input[i];

        if (input[i] === targetWord[i]) {
            cell.classList.add("correct");
            correctLetters++;
        } else if (targetWord.includes(input[i])) {
            cell.classList.add("present");
        } else {
            cell.classList.add("absent");
        }

        row.appendChild(cell);
    }

    wordleGrid.appendChild(row);
    attempts++;

    if (correctLetters === 5) {
        wordleMessage.textContent = "Correct! Enter the password.";
        document.getElementById("wordle-container").style.display = "none";
        document.getElementById("password-protection").style.display = "block";
    } else if (attempts >= maxAttempts) {
        wordleMessage.textContent = "Game over. The correct word was " + targetWord + ".";
    } else {
        wordleMessage.textContent = "Try again. Attempts left: " + (maxAttempts - attempts);
    }

    document.getElementById("wordle-input").value = "";
}

// Password check logic
const correctPassword = "a1b2c3d4e5f6"; // The correct password

function checkPassword() {
    const inputPassword = document.getElementById("password-input").value;
    const errorMessage = document.getElementById("error-message");

    if (inputPassword === correctPassword) {
        document.getElementById("password-protection").style.display = "none";
        document.getElementById("content").style.display = "block";
    } else {
        errorMessage.textContent = "Incorrect password. Please try again.";
    }
}
