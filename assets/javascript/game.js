$(document).ready(function(){


var crystalValue = 0;
var counter = 0;
var randNum = 0;
var wins = 0;
var losses = 0;


$("#totalScore").html(crystalValue);
//$("#totalScore").html(crystalValue);

function resetGame() {
   //console.log("crystals array= " + crystals);
  generateRandom();
  
$("#randomNumber").text(randNum);
  counter = 0;

$("#totalScore").html(counter);
  //$("#totalScore").html(counter);
  

  $("#buttons").empty();
  crystalSelector();
  //alert("resetting this game");
  buttonClick();
}



function generateRandom(){
  var min = 15;
  var max = 120;

  // and the formula is:

  randNum = Math.floor(Math.random() * (max - min + 1)) + min;

	return randNum;

}


function crystalSelector(){
  var crystals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12];

 var outArray = [];

 console.log("this is the crystals array: " +crystals);

for(var i=0; i<4; i++) {
    outArray.push(crystals.splice(Math.floor(Math.random()*crystals.length), 1)[0]);

    var j = i+1;
    var buttonName = "button" + j;

    //console.log("this is the button Name" + buttonName);

    var gemButton = $("<button>");

    gemButton.addClass("imgContainer button roll");
    gemButton.attr("id",buttonName);
    gemButton.attr("data-crystalvalue", outArray[i]);

    $("#buttons").append(gemButton);

    //$("#totalScore").html(crystalValue);

  }

console.log("new array " + outArray);

}


generateRandom();
crystalSelector();
buttonClick();

//puts random number in the page
$("#randomNumber").text(randNum);


function buttonClick (){
$(".button").on("click", function() {

    
    var crystalValue = ($(this).attr("data-crystalvalue"));

    crystalValue = parseInt(crystalValue);

    counter += crystalValue;
  
    $("#totalScore").html(counter);


    if (counter === randNum) {
      wins++;
      $(".wins").text("WINS: " + wins);
      alert("you win");

      resetGame()

    }

    else if (counter >= randNum) {
      
      losses++;

      $(".losses").text("LOSSES: " + losses);
      resetGame();
      alert("you lose");
    }


  });


}

});
