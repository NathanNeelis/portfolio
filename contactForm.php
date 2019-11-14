<?php

if (isset($_POST['submit'])){
    $name = $_POST['name'];
    $mailFrom = $_POST['email'];
    $message = $_POST['message'];

    $mailTo = "nathan.neelis@hva.nl";
    $headers = "From: ".$name;
    $txt = "You have received an email from ".$name."\n\n".$mailFrom."\n\n".$message;

    mail($mailTo, $subject, $text, $headers);

    header("Location: verzonden.html");

}



?>
