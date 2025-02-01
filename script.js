function readText() {
    // Pobieramy tekst z elementu <p>
    const text = document.getElementById("text-to-read").innerText;

    // Tworzymy instancję syntezatora mowy
    const speechSynthesis = window.speechSynthesis;

    // Tworzymy obiekt mowy
    const utterance = new SpeechSynthesisUtterance(text);

    // Opcjonalnie ustawienia języka i tempa
    utterance.lang = 'pl-PL';  // Ustawienie języka polskiego
    utterance.rate = 1;        // Szybkość mowy
    utterance.pitch = 1;       // Ton głosu

    // Uruchamiamy odtwarzanie
    speechSynthesis.speak(utterance);
}
