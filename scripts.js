document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formStatus = document.getElementById('formStatus');
    formStatus.textContent = 'Thank you for your message!';
    formStatus.style.color = 'green';
    this.reset();
});
