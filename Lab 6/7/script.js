let items = [];

function createItem() {
    const newItem = document.getElementById('newItem').value;
    if (newItem) {
        items.push(newItem);
        document.getElementById('newItem').value = '';
        renderItems();
    } else {
        alert('Please enter a value.');
    }
}

function readItems() {
    const itemsList = document.getElementById('itemsList');
    itemsList.innerHTML = '';
    items.forEach((item, index) => {
        const li = document.createElement('li');
        li.className = 'item';
        li.textContent = `${index}: ${item}`;
        itemsList.appendChild(li);
    });
}

function updateItem() {
    const index = document.getElementById('updateIndex').value;
    const newItem = document.getElementById('updateItem').value;
    if (index !== '' && newItem) {
        if (index >= 0 && index < items.length) {
            items[index] = newItem;
            document.getElementById('updateIndex').value = '';
            document.getElementById('updateItem').value = '';
            renderItems();
        } else {
            alert('Invalid index.');
        }
    } else {
        alert('Please enter both index and value.');
    }
}

function deleteItem() {
    const index = document.getElementById('deleteIndex').value;
    if (index !== '') {
        if (index >= 0 && index < items.length) {
            items.splice(index, 1);
            document.getElementById('deleteIndex').value = '';
            renderItems();
        } else {
            alert('Invalid index.');
        }
    } else {
        alert('Please enter an index.');
    }
}

function renderItems() {
    readItems();
}

document.addEventListener('DOMContentLoaded', renderItems);


