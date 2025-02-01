let utterance;
let isSpeaking = false;
let speechSynthesis = window.speechSynthesis;

// Funkcja do rozpoczęcia odczytu
function readText() {
    if (isSpeaking) return; // Zapobiega ponownemu kliknięciu, jeśli już odtwarzamy

    // Pobieramy tekst
    const text = document.querySelectorAll('#document-text');
    let content = '';
    text.forEach(paragraph => content += paragraph.textContent + ' ');

    // Tworzymy obiekt mowy
    utterance = new SpeechSynthesisUtterance(content);
    
    // Pobieramy wartości z suwaków
    const rate = document.getElementById("rate").value;
    const volume = document.getElementById("volume").value;

    // Ustawiamy właściwości mowy
    utterance.lang = 'pl-PL';
    utterance.rate = rate;
    utterance.volume = volume;

    // Rozpoczynamy odtwarzanie
    speechSynthesis.speak(utterance);
    isSpeaking = true;

    // Dodajemy event listener na koniec odczytu
    utterance.onend = () => {
        isSpeaking = false;
    };
}

// Funkcja do pauzowania mowy
function pauseSpeech() {
    if (speechSynthesis.speaking && !speechSynthesis.paused) {
        speechSynthesis.pause();
    }
}

// Funkcja do wznawiania mowy
function resumeSpeech() {
    if (speechSynthesis.paused) {
        speechSynthesis.resume();
    }
}

// Funkcja do zatrzymywania mowy
function stopSpeech() {
    if (speechSynthesis.speaking || speechSynthesis.paused) {
        speechSynthesis.cancel();
        isSpeaking = false;
    }
}

// Aktualizowanie wartości suwaków w czasie rzeczywistym
document.getElementById("rate").addEventListener("input", function() {
    document.getElementById("rate-value").textContent = this.value;
});

document.getElementById("volume").addEventListener("input", function() {
    document.getElementById("volume-value").textContent = this.value;
});
