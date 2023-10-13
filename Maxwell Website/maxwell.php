<?php

    use PHPmailer\PHPmailer\PHPmailer;
    use PHPmailer\PHPmailer\Exception;
    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';
    require 'phpmailer/src/SMTP.php';

    if (isset($_POST["submit"])) {
        $mail = new PHPMailer(true);

        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'obaogeayobami@gmail.com';
        $mail->Password = 'taofkpcizbgxttnz';
        $mail->SMPTSecure = 'ssl';
        $mail->Port = 465;
        $mail->setFrom('obaogeayobami@gmail.com');
        $mail->addAddress($_POST['senderMail']);
        $mail->isHTML(true);
        $mail->Subject = $_POST['senderName'];
        $mail->Body = $_POST['senderMessage'];
        $mail->send();
        echo "message sent";
    }
?>
