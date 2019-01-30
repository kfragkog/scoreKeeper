//vars
let userOne = "";
let userTwo = "";
let scoreOne = document.getElementById("scorePlOne");
let scoreTwo = document.getElementById("scorePlTwo");
let constraint = document.getElementById("constraint");
let scoreOneValue = 0;
let scoreTwoValue = 0;
let constraintValue = 5;
let arrGame = [];
let arrHistory = [];

//events
document.getElementById("submitUsers").addEventListener("click", function() {
  userOne = document.getElementById("user1").value;
  userTwo = document.getElementById("user2").value;
  document.getElementById("buttonPlOne").innerText = userOne;
  document.getElementById("buttonPlTwo").innerText = userTwo;
  document.getElementById("main").classList.remove("hidden");
  document.getElementById("users").classList.add("hidden");
});
document.getElementById("buttonPlOne").addEventListener("click", function() {
  scoreUpdate(scoreOne, scoreOneValue);
});
document.getElementById("buttonPlTwo").addEventListener("click", function() {
  scoreUpdate(scoreTwo, scoreTwoValue);
});
document.getElementById("reset").addEventListener("click", function() {
  reset();
});
constraint.addEventListener("keyup", function(e) {
  if (e.keyCode == 13) {
    resetConstr(e);
  }
});
document.getElementById("buttonGameH").addEventListener("click", function() {
  document.getElementById("popup").classList.remove("hidden");
  document.getElementById("main").style.opacity = "0.05";
  document.querySelector("h1").style.opacity = "0.05";
  populateGameHistory();
});
document.querySelector(".deleteImg").addEventListener("click", function() {
  document.getElementById("popup").classList.add("hidden");
  document.getElementById("main").style.opacity = "1";
  document.querySelector("h1").style.opacity = "1";
});

//functions
function scoreUpdate(score, scoreValue) {
  if (scoreOneValue < constraintValue && scoreTwoValue < constraintValue) {
    ++scoreValue;
    score.innerText = scoreValue;

    if (score.id == "scorePlOne") {
      scoreOneValue = scoreValue;
    } else {
      scoreTwoValue = scoreValue;
    }

    if (scoreOneValue == constraintValue || scoreTwoValue == constraintValue) {
      arrGame = [];
      arrGame.push(scoreOneValue);
      arrGame.push(scoreTwoValue);

      if (scoreOneValue > scoreTwoValue) {
        scoreOne.classList.add("winner");
        setTimeout(function() {
          window.alert("Game Over\nWell done " + userOne + "!");
        }, 500);
        arrGame.push(userOne);
      } else {
        scoreTwo.classList.add("winner");
        setTimeout(function() {
          window.alert("Game Over\nWell done " + userTwo + "!");
        }, 500);
        arrGame.push(userTwo);
      }

      arrHistory.push(arrGame);
      if (arrHistory.length > 5) {
        arrHistory.shift();
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
  let result = window.confirm("Your game progress will be reset - ARE U SURE?");
  if (result) {
    constraintValue = constraint.value;
    reset();
  }
}

function populateGameHistory() {
  document.getElementById("list").innerHTML = "";
  console.log(arrHistory);
  for (let i = 0; i < arrHistory.length; i++) {
    let ul = document.getElementById("list");
    let li = document.createElement("li");
    let divOne = document.createElement("div");
    let divThree = document.createElement("div");
    let divTwo = document.createElement("div");
    let divFour = document.createElement("div");

    divOne.innerText = arrHistory[i][0];
    divThree.innerText = "-";
    divTwo.innerText = arrHistory[i][1];
    divFour.innerText = arrHistory[i][2];

    ul.appendChild(li);
    li.appendChild(divOne);
    li.appendChild(divTwo);
    li.appendChild(divThree);
    li.appendChild(divFour);
  }
}
