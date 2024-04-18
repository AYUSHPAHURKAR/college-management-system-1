document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get input values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Validate username and password (for demonstration, check if username is "admin" and password is "password")
    if (username === 'ayush.pahurkar@gmail.com' && password === 'Ayush@123') {
        // Successful login, redirect or show success message
        document.getElementById('loginMessage').textContent = 'Login successful!';
        // Redirect to admin dashboard or another page
        window.location.href = "dashboard.html";
    } else {
        // Failed login, show error message
        document.getElementById('loginMessage').textContent = 'Invalid username or password. Please try again.';
    }
});


