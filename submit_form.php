<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Send an email
    $to = 'your-email@example.com';
    $subject = 'Contact Form Submission';
    $emailBody = "Name: $name\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $emailBody, $headers)) {
        echo 'Thank you for your message! We will get back to you shortly.';
    } else {
        echo 'Sorry, an error occurred while sending your message.';
    }
}
?>
