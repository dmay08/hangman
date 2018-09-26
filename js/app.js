// constants
const totalWrongGuess = 6
const words = ['happy']

// App State
let alphabet, wordChosen, rightLetters, wrongLetters

// Element References
const alphabetUl = document.getElementById('alphabet')
const wordChosenUl = document.getElementById('word-chosen')
const hangman = document.getElementById('hangman')

// Event Listneners

// Functions
init()

function init() {
  alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  wordChosen = words[0] //we can add later
  rightLetters = []
  wrongLetters = []
   // guessesLeft = 6 (don't need: can use: 6 - wrongLetters.length
  render()
} 

function render() {
  // Render Alphabet
  alphabet.forEach(a => {
    const button = document.createElement('button')
    const li = document.createElement('li')

    button.addEventListener('click', handleLetterClick)
    button.value = button.innerText = a
    li.appendChild(button)
    alphabetUl.appendChild(li)
  })

  // Render Answer
  wordChosenUl.innerHTML = '';
  wordChosen.split('').forEach((l, i) => {
    const li = document.createElement('li')
    // li.id = l + i // allows us to target double letters (like p0, p1 for "happy")    - DON'T NEED! 
    li.innerText = l;
    li.className = rightLetters.includes(l) ? 'show' : 'hidden';
    // li.classList.add('hidden') // THIS might BE REDONE (for line 53 task Chuck left me with)
    wordChosenUl.appendChild(li)
  })
}

function update() { //updates after every letter click (after checking to see if right / wrong)
    // Update wordChosenLi's with rightLetter array
  rightLetters.forEach(l => {
    const el = document.getElementById(l)
    el.classList.remove('hidden')  // how do we get the guessed letters (same letter like p in happy) to NOT have the class hidden
  })
}

function handleLetterClick(e) {
  // Check against chosen word
  const clickedLetter = e.target.value
  if (wrongLetters.includes(clickedLetter) || rightLetters.includes(clickedLetter)) return;
  
  
  const foundLetters = wordChosen.split('').filter(l => l === clickedLetter) /* filter automatically pushes into foundLetters[] */
  // if right add to right array add class to button and reveal letter
  if (foundLetters.length) {
    foundLetters.forEach(l => rightLetters.push(l))
    checkWin()
    update()
  }
  // if wrong add to wrong array and error class and show part of hangman and reduce guess count
     //foundLetters = empty (if nothing) or length
}

function checkWin() {
  if (rightLetters.length === wordChosen.length) {
    // alert winner!!!!
  }
}

// TOMORROW:


// reveal part of the hangman 

// Stretch goals 
    // Make categories modal

// call checkwin after every click








/* --------------------------------------------------------------------------------------------- */

/*----- event listeners -----*/
// categoryArray.addEventListener('click', generateWord);

// playAgain.addEventListener('click', initialize);


// /*----- functions -----*/


// modalStart.addEventListener('click', function(evt) {

// })





// !! INITIAL PAGE!!!
// 1) initialize page


// 2) respond to category that is clicked (grab value & check)
    // generate random word from specified category array of words

// !! GAME PAGE !!
// 3) initialize game page AND
    // generate random word (wordChosen) from specified category array AND
    // update ?answerArray? to wordChosen

// 4) respond to letter that is clicked (event listener) & check to see if it is in array;
    // letter button changes color AND
    // REVEAL this letter in ?answerArray? (if in word) OR
    // REVEAL one picture of hangman AND
        // subtract 1 from "guessesLeft" AND
        // display new guessesLeft


// 5) Continue steps 3-4 until EITHER:
    // all letters in ?answerArray? are revealed OR:
        // DISPLAY: "You win!" (in <p>"guesses remaining"</p>)
    // guessesLeft = 0
        // DISPLAY: "Bummer! Word was "wordChosen)"








//display messages function
// var display = function () { //print outs for end game
//     showGuessesLeft.innerHTML = `${guessesLeft} guesses left!`;
//     if (guessesLeft < 1) {
//         showGuesseLeft.innerHTML = `Bummer! The word was: ${wordSelected}.`
//     } 
//     for (var i = 0; i < letterClickedList.length; i++) {
//         if (total + space === letterClickedList) { // total space??
//             showGuessesLeft.innerHTML = "You win!;"
//         }
//     }
// }
/* --- in class Monday 9/24 ---- */



//Choosing a random word

// var words = [
//     'monkey',
//     'alligator',
//     'cheetah',
//     'platypus'
// ];


var wordChosen = words[Math.floor(Math.random() * words.length)];
// push or set? into "wordChosen"


