const countdownElement = document.getElementById("countdown");

if (countdownElement) {
  function updateCountdown() {
    const target = new Date("2026-08-22T17:00:00");
    const now = new Date();
    const diff = target - now;

    if (diff <= 0) {
      countdownElement.textContent = "Heute ist Bierfest! 🍻";
      return;
    }

    const seconds = Math.floor(diff / 1000);
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);

    countdownElement.textContent =
      days + " Tage · " +
      hours.toString().padStart(2, "0") + " Std · " +
      minutes.toString().padStart(2, "0") + " Min";
  }

  updateCountdown();
  setInterval(updateCountdown, 60000);
}
