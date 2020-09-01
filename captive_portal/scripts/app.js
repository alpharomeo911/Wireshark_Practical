var password;
var password1;
var button = document.getElementById("submitBtn");
var para = document.getElementById("toAdd");

button.addEventListener('click', function(event) {
    password = document.getElementById("password");
    password1 = document.getElementById("confirmPassword");
    if(password.value !== password1.value) {
        para.innerHTML = "<p>Make sure the password are correct.</p>";
        button.classList.remove("btn-success");
        button.classList.add("btn-danger");
    } else {
        window.location.href = "https://www.google.com";
    }
});
