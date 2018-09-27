// constants
const words = {
    animals: ['CHIMPANZEE', 'ALLIGATOR', 'GORILLA', 'PLATYPUS', 'CHEETAH'],
    countries: ['AMERICA', 'CHINA', 'RUSSIA', 'BELGIUM', 'BRAZIL'],
    holidays: ['CHRISTMAS', 'HANUKKAH', 'KWANZAA', 'EASTER', 'RAMADAN']
}

// app state = "what are the things you have to remember during gameplay"
let wordChosen, rightLetters, wrongLetters, category;

// cached element references (need to access these)
const wordChosenUl = document.getElementById('word-chosen');
// const alphabetUl = document.getElementById('alphabet');
const hangmanImageEl = document.getElementById('hangman');
const letterBtns = document.querySelectorAll('#alphabetWrap button');
const message = document.getElementById('message');
const categoryIs = document.getElementById('category') // still need to USE this below
const modal = document.getElementById('my-modal');
const playAgain = document.getElementById('bottomWrap');

/* event listeners = "in response to user interaction, update state, then call render" */

modal.addEventListener('click', function(event) {
    category = event.target.textContent.toLowerCase();
    wordChosen = words[category][Math.floor(Math.random() * words[category].length)];
    modal.style.display = "none";
    init();
    render();
});

document.getElementById('alphabetWrap').addEventListener('click', handleLetterClick);


// functions

init();

function init() {
    rightLetters = [];
    wrongLetters = [];
}

function render() { // taking state and puttign it in the DOM aka "VISUALIZING THE STATUS OF YOUR GAME"
    // render "Category is: ___"
    categoryIs.innerHTML = `Category is: ${category.toUpperCase()}`;

    // render image
    hangmanImageEl.src = `images/img${wrongLetters.length}.png`;
    
    // render alphabet
    letterBtns.forEach((btn) => {
        var letter = btn.textContent;
        if (wrongLetters.includes(letter)) {
            btn.className = 'wrong-letter';
        } else if (rightLetters.includes(letter)) {
            btn.className = 'right-letter';
        } else {
            btn.className = 'hvr-grow';
        }
    });
   
    // render answer
    wordChosenUl.innerHTML = '';
    wordChosen && wordChosen.split('').forEach(l => { // the && checks if wordChosen has a value THEN it's split (otherwise doesn't split)
        const li = document.createElement('li')
        li.innerText = l;
        li.className = rightLetters.includes(l) ? 'show' : 'hidden';
        wordChosenUl.appendChild(li);
    });
    // game win & lose logic
    if (rightLetters.length === wordChosen.length) {
        message.innerHTML = "You win!"; // else if amt of tries is nto equal to word (then run for loop) else (you lose)
    } else if (wrongLetters.length === 6) {
        message.innerHTML = "You lose...";
        gameOver = "true";
    } else if (rightLetters.length < wordChosen.length) {
        message.innerHTML = `${6 - wrongLetters.length} guesses remaining`;
    } 
}

function handleLetterClick(evt) {
    if (wrongLetters.length === 6) return;
    var target = event.target;
    if (target.tagName !== 'BUTTON') return;
    var letter = target.textContent;
    if (wrongLetters.includes(letter) || rightLetters.includes(letter)) return;
    if (wordChosen.includes(letter)) {
        var numLetters = wordChosen.split('').filter(function(l) {
            return l === letter;
        });
        // target.className = "right-letter";
        rightLetters = rightLetters.concat(numLetters); // concatonate one array to aonother (numLetters into rightLetters)
    } else {
        wrongLetters.push(letter);
        // target.className = "wrong-letter";
    } 
    render();
}

playAgain.addEventListener('click', function(){ 
    modal.style.display = "flex";
});


// TO DO:
    // make sure it meets specifications
    // cleanup / align properly
    // add readME
    // update PICTURES






