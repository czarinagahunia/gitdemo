function pageReady() {
    "use strict";
    var userAuth = document.forms.user_auth;
    var userName = userAuth.loginform__input_email;
    var userPass = userAuth.loginform__input_password;
    var isValid = true;
    var userNameOut = document.getElementById("username__id_hidden");
    var userPassOut = document.getElementById("userpass__id_hidden");
    function validateForm() {
        if (userName.value === "") {
            userName.style.background = "red";
            userName.focus();
            isValid = false;
        } else {
            userName.style.background = "white";
        }
        if (userPass.value === "") {
            userPass.style.background = "red";
            userPass.focus();
            isValid = false;
        } else {
            userPass.style.background = "white";
        }
        if (!isValid) {
            return false;
        }
        userNameOut.innerHTML = "Username: " + userAuth.loginform__input_email.value;
        userPassOut.innerHTML = "Password: " + userAuth.loginform__input_password.value;
        return false;
    }
    userAuth.onsubmit = validateForm;
}
window.onload = pageReady;