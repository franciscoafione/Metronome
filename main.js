import Timer from "./timer.js";

const tempoDisplay = document.querySelector('.tempo');
const tempoText = document.querySelector('.tempo-text');
const decreaseTempoBtn = document.querySelector('.decrease-tempo');
const increaseTempoBtn = document.querySelector('.increase-tempo');
const tempoSlider = document.querySelector('.slider');
const startStopBtn = document.querySelector('.start-stop');
const substractBeats = document.querySelector('.substract-beats');
const addBeats = document.querySelector('.add-beats');
const measureCount = document.querySelector('.measure-count');

const click1 = new Audio('click1.mp3');
const click2 = new Audio('click2.mp3');


let bpm = 120;
let beatsPerMeasure = 4;
let count = 0;
let isRunning = false;
let tempoTextString = 'Allegro';

decreaseTempoBtn.addEventListener('click', ()=>{
    bpm--;
    validateTempo();
    updateMetronome();
});
increaseTempoBtn.addEventListener('click', ()=>{
    bpm++;
    validateTempo();
    updateMetronome();
});
tempoSlider.addEventListener('input', () =>{
    bpm = tempoSlider.value;
    validateTempo();
    updateMetronome();
});

substractBeats.addEventListener('click', () =>{
    if (beatsPerMeasure <=1) {return};
    beatsPerMeasure--;
    measureCount.textContent = beatsPerMeasure;
});

addBeats.addEventListener('click', () =>{
    if (beatsPerMeasure >=12) {return};
    beatsPerMeasure++;
    measureCount.textContent = beatsPerMeasure;
});

function updateMetronome(){
    tempoDisplay.textContent = bpm;
    tempoSlider.value = bpm;
    metronome.timeInterval = 60000 / bpm;
    updateTempoText();
}
function validateTempo(){
    if (bpm <=20) {return};
    if (bpm >=270) {return};
}

startStopBtn.addEventListener('click', () =>{
    count = 0;
    if(!isRunning){
        metronome.start();
        isRunning = true;
        startStopBtn.textContent = 'STOP';
    } else {
        metronome.stop();
        isRunning = false;
        startStopBtn.textContent = 'START';
    }
})

function updateTempoText(){
    if(bpm <= 40) {tempoTextString = "Grave"};
    if(bpm > 40 && bpm < 50) {tempoTextString = "Lento"};
    if(bpm > 50 && bpm < 60) {tempoTextString = "Largo"};
    if(bpm > 60 && bpm < 74) {tempoTextString = "Adagio"};
    if(bpm > 74 && bpm < 80) {tempoTextString = "Andantino"};
    if(bpm > 80 && bpm < 90) {tempoTextString = "Moderato"};
    if(bpm > 90 && bpm < 110) {tempoTextString = "Allegretto"};
    if(bpm > 110 && bpm < 134) {tempoTextString = "Allegro"};
    if(bpm > 134 && bpm < 150) {tempoTextString = "Vivace"};
    if(bpm > 150 && bpm < 164) {tempoTextString = "Allegrissimo"};
    if(bpm > 154 && bpm < 180) {tempoTextString = "Presto"};
    if(bpm > 180 && bpm < 270) {tempoTextString = "Prestissimo"};
    
    tempoText.textContent = tempoTextString;
}

function playClick() {
    console.log(count);
    if (count >= beatsPerMeasure){
        count = 0;
    }

    if (count === 0){
        click1.play();
        click1.currentTime = 0;
    } else {
        click2.play();
        click2.currentTime = 0;
    }
    count++;
}

const metronome = new Timer (playClick, 60000 / bpm, {immediate: true});
