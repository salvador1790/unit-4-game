
var redCrystal = Math.ceil(Math.random() * 11);
var purpleCrystal = Math.ceil(Math.random() * 11);
var blueCrystal = Math.ceil(Math.random() * 11);
var greenCrystal = Math.ceil(Math.random() * 11);



var generateTarget = function  () {

    var targetNumber = Math.ceil(Math.random() * 120);

    $("#target").html(targetNumber);

}

generateTarget();









