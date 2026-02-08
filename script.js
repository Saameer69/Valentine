function moveButton() {
    const noBtn = document.getElementById('noButton');
    

    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;


    const cutePhrases = [
        "Are you sure?",
        "Pretty please?",
        "Don't break my heart :(",
        "I'll be very sad...",
        "Think again!",
        "Last chance!",
        "Look at the cute cat!",
        "Really??",
        "Please say yes! ❤️"
    ];
    
    const randomPhrase = cutePhrases[Math.floor(Math.random() * cutePhrases.length)];
    noBtn.innerText = randomPhrase;
}

function nextPage() {
    window.location.href = "yes.html";
}