// scripts.js

let speech = new SpeechSynthesisUtterance();
let rate = document.getElementById('rate');
let volume = document.getElementById('volume');
let rateValue = document.getElementById('rate-value');
let volumeValue = document.getElementById('volume-value');

// Ustawienia prędkości i głośności
rate.addEventListener('input', function() {
    rateValue.textContent = rate.value;
    speech.rate = rate.value;
});

volume.addEventListener('input', function() {
    volumeValue.textContent = volume.value;
    speech.volume = volume.value;
});

// Funkcja odczytująca tekst
function readText() {
    let textContent = document.querySelector('.content').innerText;
    speech.text = textContent;
    speech.rate = rate.value;
    speech.volume = volume.value;
    speech.lang = 'pl-PL';

    // Sprawdzamy dostępność mowy w przeglądarce
    if (typeof speechSynthesis !== 'undefined') {
        speechSynthesis.speak(speech);
    } else {
        alert("Twoja przeglądarka nie obsługuje tej funkcji.");
    }
}

// Pauza odczytu
function pauseSpeech() {
    speechSynthesis.pause();
}

// Wznawianie odczytu
function resumeSpeech() {
    speechSynthesis.resume();
}

// Zatrzymywanie odczytu
function stopSpeech() {
    speechSynthesis.cancel();
}
