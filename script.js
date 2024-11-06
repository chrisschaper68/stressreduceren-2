const affirmations = [
    "Je bent sterker dan je denkt.",
    "Vandaag is een nieuw begin.",
    "Focus op wat je gelukkig maakt.",
    "Jij hebt de controle over jouw gedachten.",
    "Laat stress los, omarm rust.",
    "Je verdient rust en vrede.",
    "Alles komt op zijn tijd goed.",
    "Kies voor positiviteit, vandaag en elke dag.",
    "Laat los wat je niet kunt controleren.",
    "Ontspanning is net zo belangrijk als productiviteit."
];

function setDailyAffirmation() {
    const affirmationText = affirmations[Math.floor(Math.random() * affirmations.length)];
    document.getElementById("daily-affirmation").innerText = affirmationText;
}

document.addEventListener("DOMContentLoaded", setDailyAffirmation);