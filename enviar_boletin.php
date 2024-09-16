<?php
session_start();

// Función para verificar el token CSRF
function verifyCsrfToken($token) {
    return isset($_SESSION['csrf_token']) && hash_equals($_SESSION['csrf_token'], $token);
}

// Generar el token CSRF si no existe
if (empty($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
}

// Procesar el formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Verificar el token CSRF
    if (!verifyCsrfToken($_POST['csrf_token'])) {
        header("Location: index.html?mensaje=csrf_error");
        exit();
    }

    // Obtener y sanitizar los datos del formulario
    $nombre = htmlspecialchars(trim($_POST['nombre']));
    $correo = htmlspecialchars(trim($_POST['correo']));

    // Validar los datos
    if (empty($nombre) || empty($correo)) {
        header("Location: index.html?mensaje=campos_obligatorios");
        exit();
    }

    if (!filter_var($correo, FILTER_VALIDATE_EMAIL)) {
        header("Location: index.html?mensaje=correo_invalido");
        exit();
    }

    // Configuración del correo
    $to = "egodiseno@gmail.com"; // Reemplaza con tu dirección de correo electrónico
    $subject = "Nueva suscripción al boletín";
    $message = "Nombre: $nombre\nCorreo: $correo";
    $headers = "From: no-reply@example.com\r\nReply-To: $correo\r\n";

    // Enviar el correo
    if (mail($to, $subject, $message, $headers)) {
        header("Location: index.html?mensaje=exito");
        exit();
    } else {
        header("Location: index.html?mensaje=error_envio");
        exit();
    }
} else {
    header("Location: index.html?mensaje=metodo_no_permitido");
    exit();
}
?>
