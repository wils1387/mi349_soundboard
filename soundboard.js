var buttonOne = document.getElementById("SoundtrackConcept");
var buttonTwo = document.getElementById("UIStartup");
var buttonThree = document.getElementById("BlindedByTheCats");

var soundtrackConcept = new Audio('sounds/referenceConcept.mp3');
var uIStartup = new Audio('sounds/UIStartup-1.mp3')
var blindedByTheCats = new Audio('sounds/BlindedbytheCatsV2.wav')

function playSound(sound) {
    sound.play();
}

playSound();
