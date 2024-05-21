let form = document.getElementById('form');
let btn = document.getElementById('btn');
let popup = document.getElementById('popup');
let mainContainer = document.getElementById('main-container');
let errorMessage = document.getElementById('popup-message');

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const email = form.email.value;
    if (validateEmail(email)) {
        popup.classList.toggle('hidden');
        mainContainer.classList.toggle('hidden');
        popup.style.width = '375px';
        popup.style.display = 'flex';
        popup.style.flexWrap = 'wrap';
        popup.style.alignItems = 'center';
        popup.style.padding = '10px';
        popup.style.borderRadius = '8px';
        popup.style.backgroundColor = '#ffffff';
        popup.style.margin = '0 auto';
    } else {
        errorMessage.classList.toggle('hidden');
        errorMessage.style.color = 'hsl(4, 100%, 67%)';
        errorMessage.style.display = 'inline-flex';
        errorMessage.style.marginLeft = '120px';
        errorMessage.style.fontSize = '.8rem';
        errorMessage.style.fontWeight = '700';

    }
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}

function dismissMessage() {
    let errorMessage = document.getElementById('popup-message');
    errorMessage.classList.toggle('hidden');
    let mainContainer = document.getElementById('main-container');
    mainContainer.classList.toggle('hidden');
}
