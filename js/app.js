/*----- constants (var that you don't want to change) -----*/
//var categoryArray = ['animals', 'balloons', 'trees']
var alphabet;

/*----- app's state (variables) -----*/
var state; /* got this from Ryan - use later for switch case break */



/* ------- Mon 9/24 reading thru pseudo & generate variables */
var currCategory; (//if currCategory = categoryArray[0] then ..)

var wordChosen; // Word that is chosen / randomized;
var wordBank; // Bank of words (array);

var hiddenAnswer = []; // Hidden ("_") array that reveals letters
var letterClicked; // Letter that is clicked;
var lettersChosen (lettersClickedList) = []; // worded word guesses = array of letters user has clicked

var guessesLeft; // Amt of guesses remaining
var playAgain; // Play again button

var hangman; // hangman image 
/* ------- Mon 9/24^ ---------------------















 /* ----leftovers from tutorial not used when goign thru pseudo */
var guessesCorrect; // Amt of correct guesses
var wordLength; // Amount of letters in a word

var wordSelected = []; // selected word???
/* ------leftovers^ --------------------------------------- */


/*----- cached element references -----*/
    // each app state variable should be down here
modalStart = document.getElementById()


/*----- event listeners -----*/
categoryArray.addEventListener('click', generateWord);
letterClicked.addEventListener('click', letterClick);
playAgain.addEventListener('click', initialize);

/*----- functions -----*/
/* --------- monday 9/24 - DONE!!! -------- */
function initialize() {
    // initial state of everything THAT WILL CHANGE!!
    hangman = [0, 0, 0, 0, 0, 0]; // if hangman[0] is selected -> change that to 1
    alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
    'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 
    'v', 'w', 'x', 'y', 'z'];
    hiddenAnswer = wordChosen;
    guessesLeft = 6;

};
/* --------- monday 9/24 - DONE!!! -------- */



function generateWord() {};
function letterClick() {};


modalStart.addEventListener('click', function(evt) {

})





// !! INITIAL PAGE!!!
// 1) initialize page
function initialize() {}; 

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
function clickLetter()

// 5) Continue steps 3-4 until EITHER:
    // all letters in ?answerArray? are revealed OR:
        // DISPLAY: "You win!" (in <p>"guesses remaining"</p>)
    // guessesLeft = 0
        // DISPLAY: "Bummer! Word was "wordChosen)"






/* --- in class Monday 9/24 ---- */
//mask function for answer array
var hideLetters = function () { 
    correct = document.createElement('ul');
    
    for (var i = 0; i < wordSelected.length; i++) {
        letterClicked = document.createElement('li');
        letterClicked = setAttribute('class', 'letterClicked');

        if (wordSelected[i] === "-") {
            letterClicked.innerHTML = "-";
        } else {
            letterClicked.innerHTML = "_";
        }

        letterClickedList.push(letterClicked);
        wordHolder.appendChild(correct);
        correct.appendChild(letterClicked);
    }
}

//display messages function
var display = function () { //print outs for end game
    showGuessesLeft.innerHTML = `${guessesLeft} guesses left!`;
    if (guessesLeft < 1) {
        showGuesseLeft.innerHTML = `Bummer! The word was: ${wordSelected}.`
    } 
    for (var i = 0; i < letterClickedList.length; i++) {
        if (total + space === letterClickedList) { // total space??
            showGuessesLeft.innerHTML = "You win!;"
        }
    }
}
/* --- in class Monday 9/24 ---- */





//    !!  FROM VIDEO: !!
//Choosing a random word

var words = [
    'monkey',
    'alligator',
    'cheetah',
    'platypus'
];

var wordChosen = words[Math.floor(Math.random() * words.length)];
// push or set? into "wordChosen"

/*   TO TEST:
var el = document.getElementById("demo")
el.innerHTML = wordChosen;
*/

// ------------------------------------

//Set up Answer Array
var answerArray = [];
for (var i = 0; i < words.length; i++) {
    answerArray[i] = '_';
}
//el.innerHTML = answerArray.join(' ');

// ------------------------------------

//Code the game loop (includes get rid of commas)

/* create variable to keep track of letters that remain to be guessed */
var remainingLetters = wordChosen.length;

//the Game Loop (while loop)
while (remainingLetters > 0) {
    //show the player their progress
    var el = document.getElementById("demo");
    el.innerHTML = answerArray.join(' ');
    //get a guess from the player
    var letterClicked = 

}

