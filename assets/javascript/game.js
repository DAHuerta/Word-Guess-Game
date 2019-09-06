var horrorMovies = ["it", "itfollows", "martyrs", "evildead", "hereditary", "trickrtreat", "sinister", "theconjuring", "reanimator", "mothmanprophecies", "getout", "us", "thething", "theshining", "butterflyeffect", "thehouseof1000corpses", "thedevilsrejects", "popcorn", "nightmareonelmstreet", "halloween", "fridaythe13th", "poultrygeist", "mothersday", "thedecent", "seven", "panslabyrinth", "audition", "shutter", "thering", "thebabadook", "theexorcist", "cabininthewoods", "texaschainsaw massacre", "gacy", "behindthemask", "alien", "jaws", "chuckies", "leprechaun", "psycho", "midsommer", "insidious", "aquietplace", "thecabininthewoods", "cabinfever", "saw", "carrie", "thestrangers", "silenceofthelambs", "wouldyourather", "yournext", "hatchet", "inside", "splinter", "thefog", "jeeperscreepers"
];

var winCount = 0;
var guessesRemainingCount = 9;

var wins = document.getElementById("wins");
var currentWord = document.getElementById("currentWord");
var guessesRemaining = document.getElementById("guessesRemaining");
var lettersGuessed = document.getElementById("lettersGuessed");


var selectedWord = [];
var lettersGuessedCount =[];

document.onkeyup = function(event) {

    var userGuess = event.key;
    
    var word = horrorMovies[Math.floor(Math.random() * horrorMovies.length)];
    
    for (var i = 0; i < word.length; i++) {
        selectedWord[i]= "_"; 
    }

    lettersGuessedCount.push(userGuess);

    console.log(lettersGuessedCount);

    if (userGuess === selectedWord) {
        winCount++;
    } else {
        guessesRemainingCount--;
    }

    
    

    wins.textContent = "Wins: " + winCount;
    currentWord.textContent = "Current Word: " + selectedWord.join(" ");
    guessesRemaining.textContent = "Number of guesses remaining: " + guessesRemainingCount;
    lettersGuessed.textContent = "Letters Guessed: " + lettersGuessedCount;
    
    
}
// create an array of horror movies

// create wins and losses variable

// create letters guessed and tries remaining variable

// create if and else rules of the game

