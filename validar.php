<?php
require_once 'config/conexion.php'; // Ajusta según la ubicación de la carpeta config

$correo = trim($_POST['correo']);
$codigo = trim($_POST['codigo']);
$codigoCorrecto = "MEMANEJO"; // Código universal que entregas

if ($codigo === $codigoCorrecto) {
    // Guardar correo y código en la base de datos
    $stmt = $conn->prepare("INSERT INTO descargas_pdf (correo, codigo) VALUES (?, ?)");
    $stmt->bind_param("ss", $correo, $codigo);
    $stmt->execute();
    $stmt->close();

    // Descargar PDF
    $file = 'archivos/Resumen y tips C.1y2.pdf';
    if (file_exists($file)) {
        header('Content-Description: File Transfer');
        header('Content-Type: application/pdf');
        header('Content-Disposition: attachment; filename="'.basename($file).'"');
        header('Expires: 0');
        header('Cache-Control: must-revalidate');
        header('Pragma: public');
        header('Content-Length: ' . filesize($file));
        readfile($file);
        exit;
    } else {
        echo "Archivo no encontrado.";
    }
} else {
    echo "Código incorrecto.";
}

$conn->close();
?>