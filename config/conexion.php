<?php
// Conexión a la base de datos del curso
define('DB_HOST', 'localhost');
define('DB_USER', 'memanej1_usuario_agenda');      // Usuario del curso
define('DB_PASSWORD', 'Leomcfly6969');             // Contraseña del curso
define('DB_NAME', 'memanej1_agenda_clases');       // Base de datos del curso

$conn = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
?>