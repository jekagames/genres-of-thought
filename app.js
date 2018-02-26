var groupGenre= "";
var oddGenre= "";
var groupObjective= "";
var secretObjective= "";
var roundQuestion= "";
var cache = 5;
var calls = 0;
var genreArray;

function randomGenreNoRpt () {
//define array:
genreArray = ["Romantic","Comedy","Horror","Documentary","Science Fiction"];
 //shuffle array:
genreArray.sort(function(){return Math.round(Math.random());});	

groupGenre = genreArray.pop();
oddGenre = genreArray.pop();
}

function rollRound() {
	randomGenreNoRpt();
    // groupGenre= "Romantic Comedy";
    // oddGenre= "Horror";
    groupObjective= "Bake a birthday cake";
    secretObjective= "Make sure that none of the other players gets suffers bodily injury";
    roundQuestion= "If your life were a movie, what genre would it be?";
    
    document.getElementById("GroupGenre").innerHTML = "Group Genre: "+ groupGenre;
    document.getElementById("OddGenre").innerHTML = "Odd Genre Out: "+ oddGenre;
    document.getElementById("GroupObjective").innerHTML = "Group Objective: " + groupObjective;
    document.getElementById("SecretObjective").innerHTML = "Odd Genre Out's Secret Objective: " + secretObjective;
    document.getElementById("RoundQuestion").innerHTML = "The Question To Ask at the End of this Round: " + roundQuestion;
}


 