<?php
$email = $_POST['email'];
$password = $_POST['password'];
$uname = $_POST['uname'];


$conn = new mysqli('localhost','root','azob3t9jA','loginregistration','3307');
if($conn->connect_error){
    die('Connection Failed : '.$conn->connect_error);
}else{
$stmt = $conn->prepare('insert into loginregister(uname, email, password) values(?, ?, ?)');
$stmt->bind_param('sss', $uname, $email, $password);
$stmt->execute();
echo 'please wait while we attend to you shortly...';
$stmt->close();
$conn->close();
}
?>

