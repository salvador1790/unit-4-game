var targetNumber
var redCrystal 
var purpleCrystal 
var blueCrystal 
var greenCrystal 
var targetScore = 0;



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
})

$("#purplecrystal").click(function(){
    targetScore = targetScore + purpleCrystal;
    $("#scoreNumber").html(targetScore);
})

$("#bluecrystal").click(function(){
    targetScore = targetScore + blueCrystal;
    $("#scoreNumber").html(targetScore);
})

$("#greencrystal").click(function(){
    targetScore = targetScore + greenCrystal;
    $("#scoreNumber").html(targetScore);
})



generateTarget();









