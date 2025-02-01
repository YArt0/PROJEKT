function readText() {
    // Pobieramy tekst z elementu <p>
    const text = document.getElementById("text-to-read").innerText;

    // Tworzymy instancję syntezatora mowy
    const speechSynthesis = window.speechSynthesis;

    // Tworzymy obiekt mowy
    const utterance = new SpeechSynthesisUtterance(text);

    // Pobieramy wartości z suwaków
    const rate = document.getElementById("rate").value;
    const volume = document.getElementById("volume").value;

    // Ustawiamy właściwości syntezatora
    utterance.lang = 'pl-PL';  // Ustawienie języka polskiego
    utterance.rate = rate;     // Ustawienie tempa odczytu
    utterance.volume = volume; // Ustawienie głośności

    // Uruchamiamy odtwarzanie
    speechSynthesis.speak(utterance);
}

// Aktualizowanie wartości wyświetlanych obok suwaków
document.getElementById("rate").addEventListener("input", function() {
    document.getElementById("rate-value").textContent = this.value;
});

document.getElementById("volume").addEventListener("input", function() {
    document.getElementById("volume-value").textContent = this.value;
});
