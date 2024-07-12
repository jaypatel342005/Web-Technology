document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    clearErrors();

    let isValid = true;

    const name = document.getElementById('name').value.trim();
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();
    const age = document.getElementById('age').value;
    const nationality = document.getElementById('nationality').value.trim();
    const birthdate = document.getElementById('birthdate').value;
    const university = document.getElementById('university').value.trim();

    if (name === '') {
        showError('nameError', 'Full Name is required');
        isValid = false;
    }

    if (username === '') {
        showError('usernameError', 'Username is required');
        isValid = false;
    }

    if (!validateEmail(email)) {
        showError('emailError', 'Invalid Email');
        isValid = false;
    }

    if (password.length < 6) {
        showError('passwordError', 'Password must be at least 6 characters');
        isValid = false;
    }

    if (password !== confirmPassword) {
        showError('confirmPasswordError', 'Passwords do not match');
        isValid = false;
    }

    if (!validatePhone(phone)) {
        showError('phoneError', 'Invalid Phone Number');
        isValid = false;
    }

    if (address === '') {
        showError('addressError', 'Address is required');
        isValid = false;
    }

    if (age <= 0) {
        showError('ageError', 'Invalid Age');
        isValid = false;
    }

    if (nationality === '') {
        showError('nationalityError', 'Nationality is required');
        isValid = false;
    }

    if (birthdate === '') {
        showError('birthdateError', 'Birth Date is required');
        isValid = false;
    }

    if (university === '') {
        showError('universityError', 'University is required');
        isValid = false;
    }

    if (isValid) {
        alert('Registration Successful!');
        this.reset();
    }
});

function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(errorMessage => {
        errorMessage.style.display = 'none';
    });
}

function showError(id, message) {
    const errorElement = document.getElementById(id);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
    const re = /^\d{10}$/;
    return re.test(String(phone));
}
