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
var oddMusicArray;

function randomGenreNoRpt () {
//define array:
genreArray = ["Romance","Comedy","Horror","Documentary","Science Fiction", "Action", "Mystery", "Fantasy", "Western", "Musical"];
 //shuffle array:
genreArray.sort(function(){return Math.round(Math.random());});	

// groupGenre = genreArray.pop();
// oddGenre = genreArray.pop();
}

function randomGroupObjective () {
//define array:
groupObjectArray = ["Bake a birthday cake.","Decide on a restaurant to eat at.","Change a flat tire.","Keep the surprise party secret by any means necessary.","Give the cat a bath.", "Put together a tent for your campsite.", "Build a snowman together.", "Host a Potluck.", "Dig for hidden treasure!", "Paint your friend's bedroom.", "Build a rooms' worth of flat-pack furniture (i.e. Ikea).", "Form a sweet garage band.", "You are the customers and a teller at a bank.", "Find your way through a hall of funhouse mirrors.", "Take a drive together down a gravel-paved country road.", "Work on your final projects for chemistry class."];
 //shuffle array:
groupObjectArray.sort(function(){return Math.round(Math.random());});	
// groupObjective = groupObjectArray.pop();
}

function randomQuestion () {
//define array:
questionArray = ["If your life were a movie, what genre would it be?","How did your genre affect your interpretation of events?","How do genres create expectations and ways of thinking?","What are some other systems (like genres) that affect the way that we think?", "Do the rules we are thinking with affect what possible conclusions we draw?", "How do our ways of thinking change in different contexts in our daily lives?", "What is something that you used to think or believe that you don't anymore? Is there a reason why that's the case?", "When provided with the same evidence, different people might draw very different conclusions. Why do you think that is?"];
 //shuffle array:
questionArray.sort(function(){return Math.round(Math.random());});	
// roundQuestion = questionArray.pop();
}

function randomOddObjective (){
oddHorrorArray = ["Make sure that none of the other players suffers bodily injury", "Convince the other characters to split up.", "Complete the evil ritual.","Destroy the artefact that could bring on the Apocalypse", "Isolate each other character and turn them into a creature of the night"];
oddRomanceArray = ["Be a matchmaker: Try to make sure all other characters are paired off by the end of the scene (triads are okay).", "Fall in love with one of the other characters. Over the course of the scene, try to convince them to return your feelings.", "Fulfill your destiny as a manic pixie dream human", "Interrupt a climactic moment with a declaration of eternal love", "Punctuate your discussions with other players with meditations on what makes romantic love so amazing."];
oddSciFiArray = ["The other characters are scientifically-fascinating and you should study them.","Subtly collect enough data to prove that one of the other players is a shapeshifting alien.","You are stuck in the past - prevent a future catastrophe without causing too many paradoxes.","Recruit the ideal candidate for SpaceFleet Academy.","Warn the other characters about climate change and coming natural disasters.", "You are an extraterrestrial -- mimic the humans so that they do not suspect a thing."];
oddComedyArray = ["Make up your own catchphrase and use it.", "Provide the laughtrack and other audience reactions for this situational comedy.", "When speaking, use as many puns as possible.", "Tell a knock-knock joke or a chicken-crossing-the-road joke at least three times in this scene"];
oddDocArray = ["Choose another character and provide meaningful narration for their actions, Morgan Freeman-style", "Do your best David Attenborough impression and describe the actions of the other players as if this were a nature documentary.", "Provide fake, exaggerated statistics related to the action of the scene.", "Ask other characters to repeat what they have said for the camera when it feels appropriate.", "Interview the other characters about their actions in the scene while holding a fake camera."];
oddActionArray = ["Make up an action-movie catchphrase and use it.", "Two words: infinite bullets.", "To a person with a hammer, every problem looks like a nail -- you happen to have a bowie knife and a big gun.", "Every time something goes mildly wrong, you are the explosion special effects -- act out the sights and sounds.", "Try to turn the group's task into a high-speed chase."];
oddMystArray = ["You are a Sherlock Holmes type - make wild conjectures based on seemingly disconnected facts", "You are a Personne Fatale (see also Femme/Homme/Humain Fatale) - do you best to be mysterious and alluring.", "Question the other players about their whereabouts on the night of The Murder.", "Tell everyone who will listen about your very elaborate alibi for a crime that you may also describe in detail if you choose.", "Ask other characters where the Butler is, and slowly shake your head, saying, 'It's always the Butler.'"];
oddFanArray = ["Ride a dragon everywhere you go in this scene.", "Your talking sword has opinions about the other characters. Let them know what those opinions are.", "The group's actions are all in accordance with the prophecy. You decide what the prophecy is and who the promised one is.", "You are here to hand-deliver invitations to all the players to the Pig Freckles School of Magecraft and Magic -- tell them about the perks of being a wizard.", "There is a magical realm behind one of the doors in the scene. You get very excited every time one is about to be opened."];
oddWestArray = ["You have a pistol and can do impressive trick shots with it - trace your bullets' trajectories through the scene and have them solve otherwise unwieldly problems.", "One of the characters in this here scene has a price on their head, and you have come to collect the bounty.", "You believe that you and the others are part of a Train Robbery Gang ala Butch Cassidy & the Sundance Kid -- while working on the group task, outline your plan to rob the train.", "Give the other characters their Old West nicknames as soon as possible and refer to them only by these names throughout the scene."];
oddMusicArray = ["Whenever you are inspired during this scene, burst into a topical song.", "Find rhythmic uses for your hands, feet, and other body parts, encourage other characters to join you.", "Say, 'That sounds like a song!' to other characters, and encourage them to sing.", "Perform task-appropriate dance choreography.", "Be the back-up singer to another character, softly repeating the words they say as a song."];

oddHorrorArray.sort(function(){return Math.round(Math.random());});	
oddRomanceArray.sort(function(){return Math.round(Math.random());});	
oddSciFiArray.sort(function(){return Math.round(Math.random());});	
oddComedyArray.sort(function(){return Math.round(Math.random());});	
oddDocArray.sort(function(){return Math.round(Math.random());});	
oddActionArray.sort(function(){return Math.round(Math.random());});
oddMystArray.sort(function(){return Math.round(Math.random());});
oddFanArray.sort(function(){return Math.round(Math.random());});
oddWestArray.sort(function(){return Math.round(Math.random());});
oddMusicArray.sort(function(){return Math.round(Math.random());});

// if (oddGenre == "Horror") {
// //if the odd genre is horror
// secretObjective = oddHorrorArray.pop();
// } else if (oddGenre == "Romance") {
// //if the odd genre is romance
// secretObjective = oddRomanceArray.pop();
// } else if (oddGenre == "Science Fiction") {
// //if the odd genre is scifi
// secretObjective = oddSciFiArray.pop();
// } else if (oddGenre == "Comedy") {
// //if the odd genre is comedy
// secretObjective = oddComedyArray.pop();
// } else if (oddGenre == "Documentary") {
// //if the odd genre is documentary
// secretObjective = oddDocArray.pop();
// } else if (oddGenre == "Action") {
// //if the odd genre is action
// secretObjective = oddActionArray.pop();
// } else if (oddGenre == "Mystery") {
// //if the odd genre is mystery
// secretObjective = oddMystArray.pop();
// } else if (oddGenre == "Fantasy") {
// //if the odd genre is fantasy
// secretObjective = oddFanArray.pop();
// } else if (oddGenre == "Western") {
// //if the odd genre is western
// secretObjective = oddWestArray.pop();
// } else if (oddGenre == "Musical") {
// //if the odd genre is musical
// secretObjective = oddMusicArray.pop();
// } else {
// 	secretObjective = "You have no direction in life. This is an error message."
// }
}

function rollRound() {
	randomGenreNoRpt();
	randomGroupObjective();
   	randomOddObjective();
	randomQuestion();

roundQuestion = questionArray.pop();
groupObjective = groupObjectArray.pop();
groupGenre = genreArray.pop();
oddGenre = genreArray.pop();

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
//if the odd genre is action
secretObjective = oddActionArray.pop();
} else if (oddGenre == "Mystery") {
//if the odd genre is mystery
secretObjective = oddMystArray.pop();
} else if (oddGenre == "Fantasy") {
//if the odd genre is fantasy
secretObjective = oddFanArray.pop();
} else if (oddGenre == "Western") {
//if the odd genre is western
secretObjective = oddWestArray.pop();
} else if (oddGenre == "Musical") {
//if the odd genre is musical
secretObjective = oddMusicArray.pop();
} else {
	secretObjective = "You have no direction in life. This is an error message."
}
    
    document.getElementById("GroupGenre").innerHTML = "Group Genre: "+ groupGenre;
    document.getElementById("GroupObjective").innerHTML = "Group Objective: " + groupObjective;
    document.getElementById("OddGenre").innerHTML = "Odd Genre Out: "+ oddGenre;
    document.getElementById("SecretObjective").innerHTML = "Odd Genre Secret Objective: " + secretObjective;
    document.getElementById("RoundQuestion").innerHTML = "The Prompt: " + roundQuestion;

}


 