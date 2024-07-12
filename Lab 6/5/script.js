document.getElementById('changePropertiesButton').addEventListener('click', () => {
    const element = document.getElementById('myElement');

    // Change color
    element.style.color = 'white';

    // Change background color
    element.style.backgroundColor = 'rgba(0, 123, 255, 0.8)';

    // Change font size
    element.style.fontSize = '30px';

    // Add a border
    element.style.border = '2px solid white';

    // Add a box shadow
    element.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.4)';

    // Add a transform effect
    element.style.transform = 'rotate(5deg)';
});
