<?php
// Define valid credentials
$valid_username = "admin";
$valid_password = "password";

// Start session
session_start();

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve user input
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Validate credentials
    if ($username === $valid_username && $password === $valid_password) {
        // Set user authentication status in session
        $_SESSION["authenticated"] = true;

        // Redirect to the welcome page
        header("Location: Testhtml2.html");
        exit;
    } else {
        // Display error message if credentials are invalid
        echo "Invalid username or password. Please try again.";
    }
}
?>
