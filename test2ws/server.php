<?php
session_start();
header('Content-Type: text/event-stream');
header('Cache-Control: no-cache');


if (isset($_SESSION['server'])) {
  $data = array(
      'message'=> $_SESSION['server']
  );
  $data = json_encode($data);
  echo "data: {$data}\n\n";
  unset($_SESSION['server']);
}