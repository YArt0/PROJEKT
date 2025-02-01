let speech = new SpeechSynthesisUtterance();

// Funkcja do odczytu tekstu danego rozdziału
function readSection(sectionId) {
    const sectionText = document.getElementById(sectionId).innerText;
    speech.text = sectionText;
    speech.lang = 'pl-PL';
    speech.rate = 1; // Standardowe tempo
    speech.volume = 1; // Standardowa głośność
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
