let speech = new SpeechSynthesisUtterance();  // Tworzymy nową instancję mowy
speech.lang = 'pl-PL';  // Ustawiamy język na polski

// Funkcja do odczytu tekstu z sekcji
function readSection(sectionId) {
    const sectionText = document.getElementById(sectionId).innerText; // Pobieramy tekst z sekcji
    speech.text = sectionText;  // Ustawiamy tekst do odczytu
    speech.rate = 1;  // Tempo odczytu (można zmieniać)
    speech.volume = 1;  // Głośność (1 - maksymalna)
    speechSynthesis.speak(speech);  // Uruchamiamy odczyt
}

// Funkcja pauzująca odczyt
function pauseSpeech() {
    speechSynthesis.pause();
}

// Funkcja zatrzymująca odczyt
function stopSpeech() {
    speechSynthesis.cancel();
}
