// constants
const words = {
    animals: ['Monkey', 'Alligator'],
    countries: ['America', 'China'],
    colors: ['Red', 'Blue']
}

// app state
let wordChosen, rightLetters, wrongLetters, category;

// cached element references (need to access these)
const wordChosenUl = document.getElementById('word-chosen');
const alphabetUl = document.getElementById('alphabet');
const hangman = document.getElementById('hangman');
const letterBtns = document.querySelectorAll('#alphabetWrap button');
const message = document.getElementById('message');
const categoryIs = document.getElementById('category') // still need to USE this below
const modal = document.getElementById('my-modal');


modal.addEventListener('click', function(event) {
    category = event.target.textContent.toLowerCase();
    wordChosen = words[category][Math.floor(Math.random() * words[category].length)];
    document.getElementById('my-modal').style.display = "none";
    render();
});

// functions

init();

function init() {
    rightLetters = [];
    wrongLetters = [];
}

function render() { // taking state and puttign it in a DOM
    // render image
    //hangmanImageEl.src = `images/img${wrongLetters.length}.png`; 
    
    // render alphabet
    letterBtns.forEach((btn) => {
        var letter = btn.value;
        if (wrongLetters.includes(letter)) btn.className = 'wrong-letter';
        if (rightLetters.includes(letter)) btn.className = 'right-letter';
    });
    // render answer
    wordChosenUl.innerHTML = '';
    wordChosen && wordChosen.split('').forEach(l => { // the && checks if wordChosen has a value THEN it's split (otherwise doesn't split)
        const li = document.createElement('li')
        li.innerText = l;
        li.className = rightLetters.includes(l) ? 'show' : 'hidden';
        wordChosenUl.appendChild(li);
    });
    if (rightLetters.length === wordChosen.length) {
        message.innerHTML = "You win!" // else if amt of tries is nto equal to word (then run for loop) else (you lose)
    } else if (rightLetters.length < wordChosen.length) {
        message.innerHTML = `${6 - wrongLetters.length} guesses remaining`;
    } else if (wrongLetters.length === 6) {
        message.innerHTML = "You lose..."
    }
}







