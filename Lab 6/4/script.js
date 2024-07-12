const form = document.getElementById('myForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Event Fired: submit');
});

form.addEventListener('reset', (event) => {
    console.log('Event Fired: reset');
});

form.addEventListener('focus', (event) => {
    console.log('Event Fired: focus');
}, true);

form.addEventListener('blur', (event) => {
    console.log('Event Fired: blur');
}, true);

form.addEventListener('change', (event) => {
    console.log('Event Fired: change');
});

form.addEventListener('input', (event) => {
    console.log('Event Fired: input');
});

form.addEventListener('click', (event) => {
    console.log('Event Fired: click');
});

form.addEventListener('keydown', (event) => {
    console.log('Event Fired: keydown');
});

form.addEventListener('keyup', (event) => {
    console.log('Event Fired: keyup');
});

form.addEventListener('keypress', (event) => {
    console.log('Event Fired: keypress');
});
