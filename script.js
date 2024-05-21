let form = document.getElementById('form');
let btn = document.getElementById('btn');
let popup = document.getElementById('popup');
let mainContainer = document.getElementById('main-container');
let errorMessage = document.getElementById('popup-message');
let input = document.getElementById('input-email');

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const email = form.email.value;
    if (validateEmail(email)) {
        // Show the popup and hide the main container when a valid email is submitted
        popup.classList.remove('hidden');
        popup.classList.add('visible'); // Add the visible class for styling
        mainContainer.classList.add('hidden');
        // Display the submitted email in the popup
        input.innerText = email; // use innerText instead of innerHTML to avoid potential security risks
    } else {
        // Show error message if the email is invalid
        errorMessage.classList.remove('hidden');
        errorMessage.style.color = 'hsl(4, 100%, 67%)';
        errorMessage.style.display = 'inline-flex';
        errorMessage.style.marginLeft = '120px';
        errorMessage.style.fontSize = '.8rem';
        errorMessage.style.fontWeight = '700';
    }
});

function validateEmail(email) {
    // Regular expression for email validation
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}

function dismissMessage() {
    // Hide the popup and show the main container when the dismiss button is clicked
    popup.classList.add('hidden'); // Ensure popup is hidden
    popup.classList.remove('visible'); // Remove the visible class
    mainContainer.classList.remove('hidden'); // Ensure main container is shown
    errorMessage.classList.add('hidden'); // Ensure error message is hidden (if it was displayed)
}