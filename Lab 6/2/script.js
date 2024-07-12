const eventBox = document.getElementById('eventBox');
const log = document.getElementById('log');

const logEvent = (event) => {
    log.textContent = `Event: ${event.type}`;
};

eventBox.addEventListener('click', logEvent);
eventBox.addEventListener('dblclick', logEvent);
eventBox.addEventListener('mousedown', logEvent);
eventBox.addEventListener('mouseup', logEvent);
eventBox.addEventListener('mouseenter', logEvent);
eventBox.addEventListener('mouseleave', logEvent);
eventBox.addEventListener('mouseover', logEvent);
eventBox.addEventListener('mousemove', logEvent);
eventBox.addEventListener('contextmenu', logEvent);