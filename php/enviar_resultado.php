<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Cargar PHPMailer
require __DIR__ . '/phpmailer/src/Exception.php';
require __DIR__ . '/phpmailer/src/PHPMailer.php';
require __DIR__ . '/phpmailer/src/SMTP.php';

// Cargar configuración SMTP fuera de public_html
$config = require __DIR__ . '/../../mail/config_mail.php';

// Recibir datos POST del quiz
$nombre    = $_POST['nombre'] ?? 'Desconocido';
$correo    = $_POST['correo'] ?? 'Sin correo';
$telefono  = $_POST['telefono'] ?? 'Sin teléfono';
$puntaje   = $_POST['puntaje'] ?? '0';
$total     = $_POST['total'] ?? '0';
$porcentaje = $_POST['porcentaje'] ?? '0';
$estado    = $_POST['estado'] ?? 'Desconocido';
$errores   = $_POST['errores'] ?? 'Ninguno';

$mail = new PHPMailer(true);

try {
    // Configuración SMTP
    $mail->isSMTP();
    $mail->Host       = $config['SMTP_HOST'];
    $mail->SMTPAuth   = true;
    $mail->Username   = $config['SMTP_USER'];
    $mail->Password   = $config['SMTP_PASS'];
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = $config['SMTP_PORT'];

    // UTF-8
    $mail->CharSet = 'UTF-8';
    $mail->Encoding = 'base64';

    // Remitente y destinatario
    $mail->setFrom($config['SMTP_USER'], 'Quiz memanejo.cl');
    $mail->addAddress('leonardo.azo@memanejo.cl', 'Leonardo'); // Destinatario principal

    // Contenido
    $mail->isHTML(true);
    $mail->Subject = "Nuevo resultado del Quiz memanejo 🚗";
    $mail->Body    = "
        <h2>Nuevo resultado del Quiz memanejo 🚗</h2>
        <p><strong>Nombre:</strong> $nombre</p>
        <p><strong>Correo:</strong> $correo</p>
        <p><strong>Teléfono:</strong> $telefono</p>
        <p><strong>Puntaje:</strong> $puntaje / $total ($porcentaje%)</p>
        <p><strong>Estado:</strong> $estado</p>
        <p><strong>Errores:</strong><br>$errores</p>
    ";
    $mail->AltBody = "Nuevo resultado del Quiz memanejo\n\nNombre: $nombre\nCorreo: $correo\nTeléfono: $telefono\nPuntaje: $puntaje / $total ($porcentaje%)\nEstado: $estado\nErrores: $errores";

    $mail->send();
    echo "success";
} catch (Exception $e) {
    echo "error: {$mail->ErrorInfo}";
}
?>