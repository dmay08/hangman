//constants
const totalWrongGuess = 6
const words = ['happy'];

// App state
let alphabet, wordChosen, rightLetters, wrongLetters

//Element references = not changing
const alphabetUl = document.getElementById('alphabet')
const wordChosenUl = getElementById('word-chosen')
const hangman = document.getElementById('hangman')

console.log(letters)

// Functions
function init() { //starting app states
    alphabet = ['a', 'b', 'c', 'd']
    wordChosen = words[0]; //we can add later
    rightLetters = [];
    wrongLetters = [];
    // guessesLeft = 6 (don't need: can use: 6-wrongLetters.length
    render()
}

function render() { //initial board
    // Render Alphabet
    alphabet.forEach( a=> {
        const button = document.createElement()
        const li = document.createElement()

        button.addEventListener('click', handleLetterClick);
        button.value = button.innerText = a;
       
        button.innerText = a;
        li.appendChild(button);
        alphabetUl.appendChild(li);

    })
    // Render Word Chosen
    wordChosen.split('').forEach((l, i) => {
        const li = document.createElement('li');
        li.id = l + i; // allows us to target double letters (like p0, p1 for "happy")
        li.innerText = l;
        li.classList.add('hidden'); // THIS might BE REDONE (for line 53 task Chuck left me with)
        wordChosenUl.appendChild(li);
    })
}
function update() { //updates after every letter click (after checking to see if right / wrong)
    // Update wordChosenLi's with rightLetter array
    rightLetters.forEach(l => {
        const el = document.getElementById(l);
        el.classList.remove('hidden');
        // how do we get the guessed letters (same letter like p in happy) to NOT have the class hidden
    })
}

function handleLetterClick(e) {
    // Check against chosen word
    const clickedLetter = e.target.value
    const foundLetters = wordChosen.split('').filter(l=> { /* filter automatically pushes into foundLetters[] */
        l === clickedLetter);
    }
  
    // if right - add to right array add class to button and reveal letter
    if (foundLetters.length) { // if length = 0; false - 
        foundLetters.forEach(l => rightLetters.push(l))
        checkWin() 
        update()
    }
     //foundLetters = empty (if nothing) or length
    // if wrong - add to wrong array and error class and show part of hangman and reduce guest count 
       
}

function checkWin() {
    if (rightLetters.length === chosenWord.length) {
        // alert winner!
    }
}


// TOMORROW:

// change the color of buttons if they're RIGHT & WRONG 
    //  button.disabled = true;
// reveal part of the hangman 

// Stretch goals 
    // Make categories modal

// call checkwin after every click