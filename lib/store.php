<?php

// Connect to wedding db
$con=mysqli_connect("localhost","root","root","wedding");
if (mysqli_connect_errno()){
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

// Get values from POST
$id = $_POST["id"];
$attending = $_POST["attending"];
$guestemail = $_POST["guest_email"];


// Update row based on ID
mysqli_query($con,"UPDATE guests SET GUEST_EMAIL='$guestemail', ATTENDING='$attending' WHERE GUEST_ID=$id");

// Close connection
mysqli_close($con);

?>