function validateForm() {
    const fullname = document.getElementById('fullname').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirm_password = document.getElementById('confirm_password').value;
    const address = document.getElementById('address').value;
    const age = document.getElementById('age').value;
    const nationality = document.getElementById('nationality').value;
    const birthdate = document.getElementById('birthdate').value;
    const university = document.getElementById('university').value;

    if (fullname === "" || username === "" || email === "" || phone === "" || password === "" || confirm_password === "" || address === "" || age === "" || nationality === "" || birthdate === "" || university === "") {
        alert("All fields must be filled out");
        return false;
    }

    if (password !== confirm_password) {
        alert("Passwords do not match");
        return false;
    }

    if (!validateEmail(email)) {
        alert("Invalid email format");
        return false;
    }

    if (!validatePhone(phone)) {
        alert("Invalid phone number format. It should contain only digits and be 10-15 digits long.");
        return false;
    }

    return true;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^\d{10,15}$/;
    return re.test(phone);
}
