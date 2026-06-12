// Select DOM elements
const userInput = document.getElementById('userInput');
const actionBtn = document.getElementById('actionBtn');
const dataList = document.getElementById('dataList');

// Retrieve stored data on load, fallback to empty array
let data = JSON.parse(localStorage.getItem('appData')) || [];

// Function to render items in the UI
function renderList() {
    dataList.innerHTML = ''; // Clear list
    data.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item;
        
        // Add delete capability
        li.addEventListener('click', () => {
            deleteItem(index);
        });
        
        dataList.appendChild(li);
    });
}

// Function to add data
function addData() {
    const text = userInput.value.trim();
    if (text !== '') {
        data.push(text);
        localStorage.setItem('appData', JSON.stringify(data));
        userInput.value = ''; // Reset input
        renderList();
    }
}

// Function to delete data
function deleteItem(index) {
    data.splice(index, 1);
    localStorage.setItem('appData', JSON.stringify(data));
    renderList();
}

// Event Listeners
actionBtn.addEventListener('click', addData);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addData();
    }
});

// Initial render
renderList();
