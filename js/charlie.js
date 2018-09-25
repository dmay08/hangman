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

// Funcitons
init()

function init() {
  // prettier-ignore
  alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  wordChosen = words[0]
  rightLetters = []
  wrongLetters = []
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

  // Render Word Chosen
  wordChosen.split('').forEach((l, i) => {
    const li = document.createElement('li')
    li.id = l + i
    li.innerText = l
    li.classList.add('hidden')
    wordChosenUl.appendChild(li)
  })
}

function update() {
  // Update wordChosenLi's with rightLetter array
  rightLetters.forEach(l => {
    const el = document.getElementById(l)
    el.classList.remove('hidden')
  })
}

function handleLetterClick(e) {
  // Check against chosen word
  const clickedLetter = e.target.value
  const foundLetters = wordChosen.split('').filter(l => l === clickedLetter)
  // if right add to right array add class to button and reveal letter
  if (foundLetters.length) {
    foundLetters.forEach(l => rightLetters.push(l))
    checkWin()
    update()
  }
  // if wrong add to wrong array and error class and show part of hangman and reduce guess count
}

function checkWin() {
  if (rightLetters.length === wordChosen.length) {
    // alert winner!!!!
  }
}
