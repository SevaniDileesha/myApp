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

  //require "dbconnect.php";

    $data = file_get_contents("php://input");

    if (isset($data)) {
        $request = json_decode($data);
        $email = $request->email;
        $password = $request->password;
      }

      $email= mysqli_real_escape_string($con,$email);
      $password = mysqli_real_escape_string($con,$password);
     $email = stripslashes($email);
    $password = stripslashes($password);

    $sql = "SELECT id FROM users WHERE email = '$email' and password = '$password'";

      $result = mysqli_query($con,$sql);
      $row = mysqli_fetch_array($result,MYSQLI_ASSOC);
      //$active = $row['active'];
      $count = mysqli_num_rows($result);

      // If result matched myusername and mypassword, table row must be 1 row

      if($count >0) {
     $response= "Your Login success";

      }else {
    $response= "Your Login Email or Password is invalid";
      }

 echo json_encode( $response);
?>
