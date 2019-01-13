//vars
let userOne = "";
let userTwo = "";
let scoreOne = document.getElementById("scorePlOne");
let scoreTwo = document.getElementById("scorePlTwo");
let constraint = document.getElementById("constraint");
let scoreOneValue = 0;
let scoreTwoValue = 0;
let constraintValue = 5;


//events
document.getElementById("submitUsers").addEventListener("click", function(){
    userOne = document.getElementById("user1").value;
    userTwo = document.getElementById("user2").value;
    document.getElementById("buttonPlOne").innerText = userOne;
    document.getElementById("buttonPlTwo").innerText = userTwo;
    document.getElementById("main").classList.remove("hidden");
    document.getElementById("users").classList.add("hidden");
})
document.getElementById("buttonPlOne").addEventListener("click", function() {scoreUpdate(scoreOne, scoreOneValue)});
document.getElementById("buttonPlTwo").addEventListener("click", function() {scoreUpdate(scoreTwo, scoreTwoValue)});
document.getElementById("reset").addEventListener("click", function() {reset()});
constraint.addEventListener("keyup", function(e) {
    if (e.keyCode == 13) {
        resetConstr(e)
    }
});


//functions
function scoreUpdate(score, scoreValue) {
    if (scoreOneValue < constraintValue && scoreTwoValue < constraintValue) {
        ++scoreValue;
        score.innerText = scoreValue;
        
        if (score.id == "scorePlOne") {
            scoreOneValue = scoreValue;
        }
        else {
            scoreTwoValue = scoreValue;
        }
        
        if (scoreOneValue == constraintValue || scoreTwoValue == constraintValue) {
            if (scoreOneValue > scoreTwoValue) {
                scoreOne.classList.add("winner");
                setTimeout(function() {
                    window.alert("Game Over\nWell done " + userOne + "!");
                }, 500);
            }
            else {
                scoreTwo.classList.add("winner");
                setTimeout(function() {
                    window.alert("Game Over\nWell done " + userTwo + "!");
                }, 500);
            }
        }
    }
}

function reset() {
    scoreOne.innerText = 0;
    scoreTwo.innerText = 0;
    scoreOneValue = 0;
    scoreTwoValue = 0;
    scoreOne.classList.remove("winner");
    scoreTwo.classList.remove("winner");
}

function resetConstr() {
    let result = window.confirm("Your game progress will be reset - ARE U SURE?")
    if (result) {
        constraintValue = constraint.value;
        reset(); 
    }

}


