
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener el token CSRF y verificarlo
    session_start();
    if (empty($_POST['csrf_token']) || $_POST['csrf_token'] !== $_SESSION['csrf_token']) {
        die("Token CSRF no válido.");
    }

    // Variables del formulario
    $nombre = htmlspecialchars(trim($_POST['nombre']));
    $correo = htmlspecialchars(trim($_POST['correo']));
    $telefono = htmlspecialchars(trim($_POST['telefono']));
    $mensaje = htmlspecialchars(trim($_POST['mensaje']));

    // Validar que los campos obligatorios no estén vacíos y que el correo sea válido
    if (!empty($nombre) && !empty($correo) && !empty($mensaje) && filter_var($correo, FILTER_VALIDATE_EMAIL)) {
        
        // Email destinatario (tu correo electrónico)
        $destinatario = "egodiseno@gmail.com"; 
        $asunto = "Nuevo mensaje de contacto";
        
        // Cuerpo del correo
        $cuerpo_mensaje = "Has recibido un nuevo mensaje de contacto.\n\n";
        $cuerpo_mensaje .= "Nombre: $nombre\n";
        $cuerpo_mensaje .= "Correo: $correo\n";
        $cuerpo_mensaje .= "Teléfono: $telefono\n";
        $cuerpo_mensaje .= "Mensaje:\n$mensaje\n";
        
        // Encabezados del correo
        $headers = "From: no-reply@example.com\r\n"; // Usar una dirección de correo genérica para evitar problemas con el spoofing
        $headers .= "Reply-To: $correo\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

        // Enviar el correo
        if (mail($destinatario, $asunto, $cuerpo_mensaje, $headers)) {
            header("Location: index.html?mensaje=exito");
            exit();
        } else {
            header("Location: index.html?mensaje=error");
            exit();
        }
    } else {
        header("Location: index.html?mensaje=datos_invalidos");
        exit();
    }
} else {
    header("Location: index.html?mensaje=metodo_no_valido");
    exit();
}
?>
