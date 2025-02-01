// Tworzymy obiekt do odczytu tekstu
let speech = new SpeechSynthesisUtterance();

// Funkcja do odczytu tekstu danego rozdziału
function readSection(sectionId) {
    const sectionText = document.getElementById(sectionId).innerText;
    speech.text = sectionText;
    speech.lang = 'pl-PL'; // Ustawienie języka na polski
    speech.rate = 1; // Tempo odczytu (1 to standardowe)
    speech.volume = 1; // Głośność (1 to maksymalna głośność)
    
    // Rozpoczynamy odczyt
    speechSynthesis.speak(speech);
}

// Pauza odczytu
function pauseSpeech() {
    speechSynthesis.pause();
}

// Zatrzymywanie odczytu
function stopSpeech() {
    speechSynthesis.cancel();
}
