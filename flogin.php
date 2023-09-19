<?php
// Establish a database connection
$servername = "localhost";
$username = "root";
$password = "azob3t9jA";
$dbname = "loginregistration";

$conn = new mysqli('localhost', 'root', 'azob3t9jA', 'loginregistration', '3307');

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve user input
$email = $_POST['email'];
$password = $_POST['password'];

// Query the database
$stmt = $conn->prepare("SELECT * FROM loginregister WHERE email = ? AND password = ?");
$stmt->bind_param("ss", $email, $password);

if ($stmt->execute()) {
    $result = $stmt->get_result();
    if ($result->num_rows == 1) {
        // Authentication successful
        echo "Login successful!";
    } else {
        // Authentication failed
        echo "Login failed. Invalid username or password.";
    }
} else {
    // Error executing the query
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
