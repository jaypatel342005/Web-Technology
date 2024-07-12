var inputField = document.getElementById('inputField');
var eventInfo = document.getElementById('eventInfo');

inputField.addEventListener('keydown', function(event) {
  eventInfo.innerText = `Key: ${event.key}, Code: ${event.code}, KeyCode: ${event.keyCode}`;
});

inputField.addEventListener('keyup', function(event) {
  eventInfo.innerText = `Key Released: ${event.key}`;
});

inputField.addEventListener('keypress', function(event) {
  eventInfo.innerText = `Key Pressed: ${event.key}`;
});