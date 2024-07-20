document.addEventListener('DOMContentLoaded', function() {
    const heading = document.getElementById('heading');
    const timeButton = document.getElementById('timeButton');
    const redButton = document.getElementById('redButton');
    const greenButton = document.getElementById('greenButton');
    const timeDisplay = document.getElementById('timeDisplay');

    heading.addEventListener('mouseover', function() {
        heading.style.color = 'yellow';
    });

    heading.addEventListener('mouseout', function() {
        heading.style.color = 'black';
    });

    timeButton.addEventListener('click', function() {
        const currentDateTime = new Date();
        timeDisplay.textContent = `Current Date and Time: ${currentDateTime}`;
    });

    redButton.addEventListener('click', function() {
        document.body.style.background = 'red';
    });

    greenButton.addEventListener('click', function() {
        document.body.style.background = 'green';
    });
});
