// Countdown bis zum Burgstemmer Bierfest
// Datum: 22. August 2025, 17:00 Uhr (Ortszeit)

const countdownElement = document.getElementById("countdown");

// Wenn Element nicht gefunden wird, abbrechen
if (countdownElement) {
  function updateCountdown() {
    // Zielzeit (CEST ungefähr) – passt für unsere Zwecke
    const target = new Date("2025-08-22T17:00:00");

    const now = new Date();
    const diff = target - now;

    if (diff <= 0) {
      countdownElement.textContent = "Heute ist Bierfest! 🍻";
      return;
    }

    const seconds = Math.floor(diff / 1000);
    const days = Math.floor(seconds / (60 * 60 * 24));
    const hours = Math.floor((seconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((seconds % (60 * 60)) / 60);

    countdownElement.textContent =
      days + " Tage · " +
      hours.toString().padStart(2, "0") + " Std · " +
      minutes.toString().padStart(2, "0") + " Min";
  }

  updateCountdown();
  setInterval(updateCountdown, 60 * 1000); // jede Minute aktualisieren
}
