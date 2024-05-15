const form = document.getElementById('form');
const success = document.getElementById('success-message');
const hideMain = document.getElementById('main-container');

function handleSubmit(e) {
    e.preventDefault();
    success.classList.toggle('hidden');
    hideMain.classList.toggle('hidden');
}

form.addEventListener('submit', handleSubmit);