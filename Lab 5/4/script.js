
        function validForm() {
            var error = document.getElementById("ErrorMessage");
            error.style.color = "red";
            error.innerHTML = "";

            var user = document.getElementById("Username").value;
            var pass = document.getElementById("Password").value;
            var repeat = document.getElementById("Repeat").value;
            var age = document.getElementById("Age").value;
            var enroll = document.getElementById("Enroll").value;
            var email = document.getElementById("Email").value;

            if (user === "") {
                error.innerHTML += "Please enter Username<br>";
                return false;
            } else if (user.length < 8) {
                error.innerHTML += "Invalid Username<br>";
                return false;
            }

            var pass_pattern = /^(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,12}$/;
            if (pass === "") {
                error.innerHTML += "Please Enter Password<br>";
                return false;
            } else if ((pass.length < 8 || pass.length > 12) && !pass_pattern.test(pass)) {
                error.innerHTML += "Invalid Password<br>";
                return false;
            }

            if (repeat === "") {
                error.innerHTML += "Please Reenter Password<br>";
                return false;
            } else if (pass !== repeat) {
                error.innerHTML += "Passwords do not match<br>";
                return false;
            }

            if (age === "") {
                error.innerHTML += "Please enter age<br>";
                return false;
            } else if (age < 18) {
                error.innerHTML += "Age is less than 18<br>";
                return false;
            }

            if (enroll === "") {
                error.innerHTML += "Please enter Enrollment Number<br>";
                return false;
            } else if (enroll.length != 11) {
                error.innerHTML += "Invalid Enrollment Number<br>";
                return false;
            }

            var email_pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,6}$/;
            if (email === "") {
                error.innerHTML += "Please enter Email<br>";
                return false;
            } else if (!email_pattern.test(email)) {
                error.innerHTML += "Invalid Email<br>";
                return false;
            }

            return true;
        }