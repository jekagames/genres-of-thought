var groupGenre= "";
var oddGenre= "";
var groupObjective= "";
var secretObjective= "";
var roundQuestion= "";
var cache = 5;
var calls = 0;
var genreArray;
var questionArray;
var groupObjectArray;

function randomGenreNoRpt () {
//define array:
genreArray = ["Romantic","Comedy","Horror","Documentary","Science Fiction"];
 //shuffle array:
genreArray.sort(function(){return Math.round(Math.random());});	

groupGenre = genreArray.pop();
oddGenre = genreArray.pop();
}

function randomGroupObjective () {
//define array:
groupObjectArray = ["Bake a birthday cake","Decide on a restaurant to eat at","Change a flat tire","Keep the surprise party secret by any means necessary","Give the cat a bath"];
 //shuffle array:
groupObjectArray.sort(function(){return Math.round(Math.random());});	
groupObjective = groupObjectArray.pop();
}

function randomQuestion () {
//define array:
questionArray = ["If your life were a movie, what genre would it be?","How did your genre affect your interpretation of events?","How do genres create expectations and ways of thinking?","What are some other systems that affect the way that we think?","Do the rules we are thinking with affect what possible conclusions we draw?"];
 //shuffle array:
questionArray.sort(function(){return Math.round(Math.random());});	
roundQuestion = questionArray.pop();
}

function rollRound() {
	randomGenreNoRpt();
    // groupGenre= "Romantic Comedy";
    // oddGenre= "Horror";
randomGroupObjective();
    secretObjective= "Make sure that none of the other players gets suffers bodily injury";
	randomQuestion();
    
    document.getElementById("GroupGenre").innerHTML = "Group Genre: "+ groupGenre;
    document.getElementById("OddGenre").innerHTML = "Odd Genre Out: "+ oddGenre;
    document.getElementById("GroupObjective").innerHTML = "Group Objective: " + groupObjective;
    document.getElementById("SecretObjective").innerHTML = "Odd Genre Out's Secret Objective: " + secretObjective;
    document.getElementById("RoundQuestion").innerHTML = "The Question To Ask at the End of this Round: " + roundQuestion;
}


 