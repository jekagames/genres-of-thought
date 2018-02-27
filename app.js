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
var oddHorrorArray;
var oddRomanceArray;
var oddSciFiArray;
var oddComedyArray;
var oddDocArray;
var oddActionArray;
var oddMystArray;
var oddFanArray;
var oddWestArray;

function randomGenreNoRpt () {
//define array:
genreArray = ["Romance","Comedy","Horror","Documentary","Science Fiction", "Action", "Mystery", "Fantasy", "Western"];
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
questionArray = ["If your life were a movie, what genre would it be?","How did your genre affect your interpretation of events?","How do genres create expectations and ways of thinking?","What are some other systems (like genres) that affect the way that we think?","Do the rules we are thinking with affect what possible conclusions we draw?"];
 //shuffle array:
questionArray.sort(function(){return Math.round(Math.random());});	
roundQuestion = questionArray.pop();
}

function randomOddObjective (){
oddHorrorArray = ["Make sure that none of the other players suffers bodily injury", "Convince the other players to split up.", "horror-c","horror-d", "horror-e"];
oddRomanceArray = ["Be a matchmaker: Try to make sure all other characters are paired off by the end of the scene", "Try to fall in love with one of the other characters.", "horror-c", "horror-d", "horror-e"];
oddSciFiArray = ["scifi-a","scifi-b","scifi-c","scifi-d","scifi-e"];
oddComedyArray = ["com-a", "com-b", "com-c", "com-d", "com-e"];
oddDocArray = ["doc-a", "doc-b", "doc-c", "doc-d", "doc-e"];
oddActionArray = ["act-a", "act-b", "act-c", "act-d", "act-e"];
oddMystArray = ["myst-a", "myst-b", "myst-c", "myst-d", "myst-e"];
oddFanArray = ["fan-a", "fan-b", "fan-c", "fan-d", "fan-e"];
oddWestArray = ["west-a", "west-b", "west-c", "west-d", "west-e"];


oddHorrorArray.sort(function(){return Math.round(Math.random());});	
oddRomanceArray.sort(function(){return Math.round(Math.random());});	
oddSciFiArray.sort(function(){return Math.round(Math.random());});	
oddComedyArray.sort(function(){return Math.round(Math.random());});	
oddDocArray.sort(function(){return Math.round(Math.random());});	
oddActionArray.sort(function(){return Math.round(Math.random());});
oddMystArray.sort(function(){return Math.round(Math.random());});
oddFanArray.sort(function(){return Math.round(Math.random());});
oddWestArray.sort(function(){return Math.round(Math.random());});

if (oddGenre == "Horror") {
//if the odd genre is horror
secretObjective = oddHorrorArray.pop();
} else if (oddGenre == "Romance") {
//if the odd genre is romance
secretObjective = oddRomanceArray.pop();
} else if (oddGenre == "Science Fiction") {
//if the odd genre is scifi
secretObjective = oddSciFiArray.pop();
} else if (oddGenre == "Comedy") {
//if the odd genre is comedy
secretObjective = oddComedyArray.pop();
} else if (oddGenre == "Documentary") {
//if the odd genre is documentary
secretObjective = oddDocArray.pop();
} else if (oddGenre == "Action") {
//if the odd genre is documentary
secretObjective = oddDocArray.pop();
} else if (oddGenre == "Mystery") {
//if the odd genre is documentary
secretObjective = oddDocArray.pop();
} else if (oddGenre == "Fantasy") {
//if the odd genre is documentary
secretObjective = oddDocArray.pop();
} else if (oddGenre == "Western") {
//if the odd genre is documentary
secretObjective = oddDocArray.pop();
} else {
	secretObjective = "You have no direction in life. This is an error message."
}
}

function rollRound() {
	randomGenreNoRpt();
	randomGroupObjective();
   	randomOddObjective();
	randomQuestion();
    
    document.getElementById("GroupGenre").innerHTML = "Group Genre: "+ groupGenre;
    document.getElementById("GroupObjective").innerHTML = "Group Objective: " + groupObjective;
    document.getElementById("OddGenre").innerHTML = "Odd Genre Out: "+ oddGenre;
    document.getElementById("SecretObjective").innerHTML = "Odd Genre Secret Objective: " + secretObjective;
    document.getElementById("RoundQuestion").innerHTML = "The Prompt: " + roundQuestion;
}


 