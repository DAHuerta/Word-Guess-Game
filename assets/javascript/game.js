var horrorMovies = ["it", "it follows", "martyrs", "evil dead", "hereditary", "trick r treat", "sinister", "the conjuring", "reanimator", "mothman prophecies", "get out", "us", "the thing", "the shining", "butterfly effect", "the house of 1000 corpses", "the devils rejects", "popcorn", "nightmare on elmstreet", "halloween", "friday the 13th", "poultrygeist", "mothers day", "the decent", "seven", "pans labyrinth", "audition", "shutter", "the ring", "the babadook", "the exorcist", "cabin in the woods", "texas chainsaw massacre", "gacy", "behind the mask", "alien", "jaws", "chuckies", "leprechaun", "psycho", "midsommer", "insidious", "a quiet place", "the cabin in the woods", "cabin fever", "saw", "carrie", "the strangers", "silence of the lambs", "would you rather", "your next", "hatchet", "inside", "splinter", "the fog"
];

var winCount = 0;
var guessesRemainingCount = 8;

var wins = document.getElementById("wins");
var currentWord = document.getElementById("currentWord");
var guessesRemaining = document.getElementById("guessesRemaining");
var lettersGuessed = document.getElementById("lettersGuessed");


var selectedWord = [];
var lettersGuessed =[];

document.onkeyup = function(event) {

    var userGuess = event.key;
    
    var word = horrorMovies[Math.floor(Math.random() * horrorMovies.length)];
    
    for (var i = 0; i < word.length; i++) {
        selectedWord[i]= " _ "; 
    }

    if (guessesRemainingCount > 0) {
        lettersGuessed.push(userGuess);
    }

    
    

    wins.textContent = "Wins: " + winCount;
    currentWord.textContent = "Current Word: " + selectedWord;
    guessesRemaining.textContent = "Number of guesses remaining: " + guessesRemainingCount;
    lettersGuessed.textContent = "Letters Guessed: " + lettersGuessed;
    
    
}
// create an array of horror movies

// create wins and losses variable

// create letters guessed and tries remaining variable

// create if and else rules of the game

