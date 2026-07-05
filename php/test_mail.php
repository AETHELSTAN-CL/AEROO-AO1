<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/phpmailer/src/Exception.php';
require __DIR__ . '/phpmailer/src/PHPMailer.php';
require __DIR__ . '/phpmailer/src/SMTP.php';

$config = require __DIR__ . '/../../mail/config_mail.php';

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host       = $config['SMTP_HOST'];
    $mail->SMTPAuth   = true;
    $mail->Username   = $config['SMTP_USER'];
    $mail->Password   = $config['SMTP_PASS'];
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = $config['SMTP_PORT'];

    $mail->setFrom($config['SMTP_USER'], 'Test Memanejo');
    $mail->addAddress('leonardo.azo@memanejo.cl'); // tu correo destino

    $mail->isHTML(true);
    $mail->Subject = "Prueba PHPMailer";
    $mail->Body    = "Si ves esto, PHPMailer funciona desde el host.";
    $mail->send();
    echo "Correo enviado correctamente";
} catch (Exception $e) {
    echo "Error: {$mail->ErrorInfo}";
}