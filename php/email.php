<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require dirname(__DIR__) . '/vendor/autoload.php';

if (isset($_POST['formData'])) {

    $mail = new PHPMailer(true);

    $fullname = $_POST['formData']['fullname'];
    $email = $_POST['formData']['email'];
    $message = $_POST['formData']['message'];

    try {
        $mail->setFrom('extibax@extibax.com', 'Extibax.com');

        $mail->addAddress('extibax@gmail.com', 'Extibax');

        $mail->Subject = 'Hey extibax! New message from extibax.com';

        $mail->Body = 'From:' . $fullname . ' Her email:' . $email . ' Her message' . $message;

        if ($mail->send()) {
            echo 1;
        } else {
            echo 0;
        }
    } catch (Exception $e) {
        echo $e->errorMessage();
    } catch (\Exception $e) {
        echo $e->getMessage();
    }
}