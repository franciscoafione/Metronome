const tempoDisplay = document.querySelector('.tempo');
const tempoText = document.querySelector('.tempo-text');
const decreaseTempoBtn = document.querySelector('.decrease-tempo');
const increaseTempoBtn = document.querySelector('.increase-tempo');
const tempoSlider = document.querySelector('.slider');
const startStopBtn = document.querySelector('.start-stop');
const substractBeats = document.querySelector('.substract-beats');
const addBeats = document.querySelector('.add-beats');
const measureCount = document.querySelector('.measure-count');

let bpm = 120;
let beatsPerMeasure = 4;
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
    updateTempoText();
}
function validateTempo(){
    if (bpm <=20) {return};
    if (bpm >=270) {return};
}

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