<?php
session_start();
if (isset($_POST['action'])) {
  $_SESSION['server']="you have received a message";
}