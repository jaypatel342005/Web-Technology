
function validForm() {
    var user = document.getElementById('Username').value;
    var pass = document.getElementById('Password').value;
    var error = document.getElementById('errorMessage');
    error.innerHTML = "";
    var valid = true;

    if (user === "") {
        error.innerHTML += "Please enter Username<br/>";
        valid = false;
    } else if (user.length < 8) {
        error.innerHTML += "Invalid Username<br/>";
        valid = false;
    }

    var pass_pattern = /^(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,12}$/;
    if (pass === "") {
        error.innerHTML += "Please enter Password<br/>";
        valid = false;
    } else if (!pass_pattern.test(pass)) {
        error.innerHTML += "Invalid Password<br/>";
        valid = false;
    }

    return valid;
}

function resetForm() {
    document.getElementById('Username').value = "";
    document.getElementById('Password').value = "";
    document.getElementById('errorMessage').innerHTML = "";
}
