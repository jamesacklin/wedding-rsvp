<?php

// Connect to wedding db
$con=mysqli_connect("localhost","root","root","wedding");
if (mysqli_connect_errno()){
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

// Get values from POST
$id = $_POST["id"];
$guestemail = $_POST["guest_email"];

// Update row based on ID
mysqli_query($con,"UPDATE guests SET GUEST_EMAIL='$guestemail' WHERE GUEST_ID=$id");

// Close connection
mysqli_close($con);

?>