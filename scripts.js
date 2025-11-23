/* Add your JavaScript to this file */
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.newsletter form');
    const messageDiv = document.querySelector('.message');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const emailInput = document.getElementById('email');
        const email = emailInput.value.trim();
        
        if (email === '') {
            messageDiv.textContent = 'Please enter a valid email address.';
            messageDiv.style.backgroundColor = '#f8d7da';
            messageDiv.style.color = '#721c24';
        } else {
            messageDiv.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;
            messageDiv.style.backgroundColor = '#d1edff';
            messageDiv.style.color = '#155724';
            emailInput.value = '';
        }
    });
});