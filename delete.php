<?php

  define("HOST","localhost");
  define("USER","root");
  define("PASS","");
  define("DB","myapp");

  $con = mysqli_connect(HOST,USER,PASS,DB);

  if (!$con){
      die("Error in connection" . mysqli_connect_error()) ;
  }


  if (isset($_SERVER['HTTP_ORIGIN'])) {
          header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
          header('Access-Control-Allow-Credentials: true');
          header('Access-Control-Max-Age: 86400');    // cache for 1 day
      }

      // Access-Control headers are received during OPTIONS requests
      if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS'){
          if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
              header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

          if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
              header("Access-Control-Allow-Headers:{$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

          exit(0);
      }

  $data = file_get_contents("php://input");

    if (isset($data)) {
        $request = json_decode($data);
        $Date = $request->search;
    }
$sql = "DELETE FROM events WHERE Date='$Date'";

if ($con->query($sql) === TRUE) {
  $response= 1;
} else {
   $response= "Error: " . $sql . "<br>" . $con->error;
}
 echo json_encode( $response);
?>
