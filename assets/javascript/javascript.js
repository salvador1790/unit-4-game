var targetNumber
var redCrystal 
var purpleCrystal 
var blueCrystal 
var greenCrystal 
var targetScore = 0;
var wins = 0;
var losses = 0;



var generateTarget = function () {

     targetNumber = Math.ceil(Math.random() * 120);
     redCrystal = Math.ceil(Math.random() * 11);
     purpleCrystal = Math.ceil(Math.random() * 11);
     blueCrystal = Math.ceil(Math.random() * 11);
     greenCrystal = Math.ceil(Math.random() * 11);

    $("#target").html(targetNumber);

}

$("#redcrystal").click(function(){
    targetScore = targetScore + redCrystal;
    $("#scoreNumber").html(targetScore);
    checkGameOver();
})

$("#purplecrystal").click(function(){
    targetScore = targetScore + purpleCrystal;
    $("#scoreNumber").html(targetScore);
    checkGameOver();
})

$("#bluecrystal").click(function(){
    targetScore = targetScore + blueCrystal;
    $("#scoreNumber").html(targetScore);
    checkGameOver();
})

$("#greencrystal").click(function(){
    targetScore = targetScore + greenCrystal;
    $("#scoreNumber").html(targetScore);
    checkGameOver();
})

var checkGameOver = function (){
    if (targetScore === targetNumber){
        wins++;
        $("#wins").html(wins);
        resetGame();
    } else if (targetScore > targetNumber){
        losses++;
        $("#losses").html(losses);
        resetGame();
    }
}

var resetGame = function (){
     
    targetNumber = Math.ceil(Math.random() * 120);
     redCrystal = Math.ceil(Math.random() * 11);
     purpleCrystal = Math.ceil(Math.random() * 11);
     blueCrystal = Math.ceil(Math.random() * 11);
     greenCrystal = Math.ceil(Math.random() * 11);
     targetScore = 0;
     wins = 0;
     losses = 0;
     
     $("#target").html(targetNumber);
     $("#scoreNumber").html(0);
     checkGameOver();

}




generateTarget();









