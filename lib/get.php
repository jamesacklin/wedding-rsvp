<?

// Get row ID from GET argument
$id = htmlspecialchars($_GET["id"]);

// Connect to wedding db
$con=mysqli_connect("localhost","root","root","wedding");
if (mysqli_connect_errno()){
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

// Build results string
$result = mysqli_query($con,"SELECT * FROM guests WHERE GUEST_ID = $id");

// Close MySQL connection
mysqli_close($con);

// Assign variables from fetch result
while($invite = mysqli_fetch_array($result)){
  $guestname = $invite['NAME'];
  $num_meals = $invite['GUEST_NUM'];
  $guestemail = $invite['GUEST_EMAIL'];
}

// Build JSON string
echo json_encode(array(
  "name" => "$guestname",
  "seats" => "$num_meals",
  "email" => "$guestemail"
));

?>