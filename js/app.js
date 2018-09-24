/*----- constants -----*/


/*----- app's state (variables) -----*/

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 
'v', 'w', 'x', 'y', 'z'];

var guessesLeft; // Amt of guesses remaining
var guessesCorrect; // Amt of correct guesses
var wordLength; // Amount of letters in a word
var wordBank; // Bank of words (array);

var wordChosen; // Word that is chosen;
var letterClicked; // Letter that is clicked;

var wordSelected = []; // selected word???
var letterClickedList = []; // worded word guesses??

var playAgain; // Play again button
// ------ my own 
var categoryClicked // category clicked on init page


/*----- cached element references -----*/


/*----- event listeners -----*/
letterClicked.addEventListener('click', letterClick);
playAgain.addEventListener('click', initialize);

/*----- functions -----*/

// !! INITIAL PAGE!!!
// 1) initialize page
function initialize() {}; 

// 2) respond to category that is clicked
    // generate random word from specified category array of words

// !! GAME PAGE !!
// 3) initialize game page AND
    // generate random word (wordChosen) from specified category array AND
    // update ?answerArray? to wordChosen

// 4) respond to letter that is clicked (event listener)
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









//    !!  FROM VIDEO: !!
//Choosing a random word

var words = [
    'monkey',
    'alligator',
    'cheetah',
    'platypus'
];

var wordChosen = words[Math.floor(Math.random() * words.length)];

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

