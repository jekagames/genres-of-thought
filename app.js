var groupGenre= "";
var oddGenre= "";
var groupObjective= "";
var secretObjective= "";
var roundQuestion= "";

function rollRound() {
    document.getElementById("GroupGenre").innerHTML = "Group Genre: "+ groupGenre;
    document.getElementById("OddGenre").innerHTML = "Odd Genre Out: "+ oddGenre;
    document.getElementById("GroupObjective").innerHTML = "Group Objective: " + groupObjective;
    document.getElementById("SecretObjective").innerHTML = "Odd Genre Out's Secret Objective: " + secretObjective;
    document.getElementById("RoundQuestion").innerHTML = "The Question To Ask at the End of this Round: " + roundQuestion;

    groupGenre= "Romantic Comedy";
    oddGenre= "Horror";
    groupObjective= "Bake a birthday cake";
    secretObjective= "Make sure that none of the other players gets suffers bodily injury";
    roundQuestion= "If your life were a movie, what genre would it be?";
}