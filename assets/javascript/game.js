var horrorMovies = ["it", "itfollows", "martyrs", "evildead", "hereditary", "trickrtreat", "sinister", "theconjuring", "reanimator", "mothmanprophecies", "getout", "us", "thething", "theshining", "butterflyeffect", "thehouseof1000corpses", "thedevilsrejects", "popcorn", "nightmareonelmstreet", "halloween", "fridaythe13th", "poultrygeist", "mothersday", "thedecent", "seven", "panslabyrinth", "audition", "shutter", "thering", "thebabadook", "theexorcist", "cabininthewoods", "texaschainsaw massacre", "gacy", "behindthemask", "alien", "jaws", "chuckie", "leprechaun", "psycho", "midsommer", "insidious", "aquietplace", "thecabininthewoods", "cabinfever", "saw", "carrie", "thestrangers", "silenceofthelambs", "wouldyourather", "yournext", "hatchet", "inside", "splinter", "thefog", "jeeperscreepers"
];

var winCount = 0;
var guessesRemainingCount = 9;

var wins = document.getElementById("wins");
var currentWord = document.getElementById("currentWord");
var guessesRemaining = document.getElementById("guessesRemaining");
var lettersGuessed = document.getElementById("lettersGuessed");
var word = ""


var selectedWord = [];
var lettersGuessedCount =[];
var correctKeys = []

//     function correctLetter(x) {
//         var correctKeys = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
//     if (correctKeys.includes(x.toLowercase())){
//         console.log("Begin Game!");
//     } 
// }
function resetGame() {
    // pick a random word
    word = horrorMovies[Math.floor(Math.random() * horrorMovies.length)];

    for (var i = 0; i < word.length; i++) {
        selectedWord[i]= "_";
    }
    // reset letters guessed
    lettersGuessedCount = []
    // reset guesses remaining
    guessesRemainingCount = 9

    currentWord.textContent = "Current Word: " + selectedWord.join("");
    
}

function winsLosses() {
    // check win and losses, if won or loss reset game
    if (selectedWord.join("") === word) {
        winCount++;
        resetGame();
    } else {

    if (guessesRemainingCount === 0) {
    alert("YOU LOSE!");
    resetGame()
    }
            
    }
}

    resetGame()

  document.onkeyup = function(event) {

    var userGuess = event.key;

    console.log(word)
    var remainingLetters = word.length;

    if (remainingLetters > 0) {
        console.log(remainingLetters);
        
        
        for (var j = 0; j < word.length; j++) {
            
            if (word[j] === userGuess) {
                selectedWord[j] = userGuess;
            }
        }
        
        lettersGuessedCount.push(userGuess);
        
        console.log(lettersGuessedCount)
        
        
    }

    if (word.indexOf(userGuess) === -1) {
        guessesRemainingCount--;
    }
   
    winsLosses()
        
        wins.textContent = "Wins: " + winCount;
        currentWord.textContent = "Current Word: " + selectedWord.join("");
        guessesRemaining.textContent = "Number of guesses remaining: " + guessesRemainingCount;
        lettersGuessed.textContent = "Letters Guessed: " + lettersGuessedCount;
    
}
// create an array of horror movies

// create wins and losses variable

// create letters guessed and tries remaining variable

// create if and else rules of the game

