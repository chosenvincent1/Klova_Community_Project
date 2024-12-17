// the script side of this website
document.getElementById('validationForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    // Clear previous errors
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
    document.querySelectorAll('input, textarea').forEach(el => el.classList.remove('error'));

    let isValid = true;
    // Validate Name
    const name = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    if (name.value.trim() === '') {
        nameError.textContent = 'Name is required.';
        name.classList.add('error');
        isValid = false;
    }
    // Validate Phone
    const phone = document.getElementById('phone');
    const phoneError = document.getElementById('phoneError');
    if (phone.value.trim() === "") {
        phoneError.textContent = 'Phone number is rquired.';
        phone.classList.add('error');
        isValid = false;
    }

    // Validate Email
    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        emailError.textContent = 'Please enter a valid email address.';
        email.classList.add('error');
        isValid = false;
    }

    // Validate Checkbox
    const checkbox = document.getElementById('checkbox');
    const checkboxError = document.getElementById('checkboxError');
    if (!checkbox.checked) {
        checkboxError.textContent = 'You need to chose one.';
        isValid = false;
    }

    // Validate Message
    const message = document.getElementById('message');
    const messageError = document.getElementById('messageError');
    if (message.value.trim() === '') {
        messageError.textContent = 'Message cannot be empty.';
        message.classList.add('error');
        isValid = false;
    }

    // If all inputs are valid, log success (or handle accordingly)
    if (isValid) {
        alert('Form submitted successfully!');
    }
});




