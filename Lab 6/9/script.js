document.addEventListener('keydown', function(event) {
    const message = document.getElementById('message');
    const key = event.key.toLowerCase();
    if (['a', 'e', 'i', 'o', 'u'].includes(key)) {
        message.textContent = `Vowel "${key}" is pressed.`;
    } else {
        message.textContent = `Key "${key}" is pressed.`;
    }
});

document.addEventListener('keyup', function() {
    document.body.style.backgroundColor = 'blue';
    setTimeout(() => {
        document.body.style.background = 'linear-gradient(135deg, #ff4081, #81d4fa)';
    }, 500);
});
