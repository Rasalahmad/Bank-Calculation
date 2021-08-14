document.getElementById('login-submit').addEventListener('click', function() {
    // get user email
    const userField = document.getElementById('user-email');
    const userEmail = userField.value;

    // get user password
    const emailField = document.getElementById('user-password');
    const userPassword = emailField.value;

    // check email and password
    if (userEmail == 'abc@gmail.com' && userPassword == '1234') {
        window.location.href = 'banking.html';
    }
})