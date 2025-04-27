// script.js
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            // Send data to the backend
            fetch('http://localhost:3000/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            })
                .then((response) => response.text())
                .then((data) => {
                    alert(data); // Show success message
                    contactForm.reset();
                })
                .catch((error) => {
                    console.error('Error:', error);
                    alert('Failed to send message. Please try again.');
                });
        } else {
            alert('Please fill out all fields.');
        }
    });
});