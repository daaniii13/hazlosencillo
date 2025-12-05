<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultados de valoración</title>
    <link rel="stylesheet" href="../css/form.css">
</head>
<body>
    <h1>Resultados del formulario de valoración</h1>
    <p>Estos son los datos introducidos por el usuario:</p>
    <?php
        // Declaramos una serie de variables para recoger los campos necesarios del formulario
        $nombre = $_POST["nombre"];
        $numero = $_POST["telefono"];
        $tipoBusqueda = $_POST["tipoBusqueda"];
        $estrellas = $_POST["estrellas"];
        $comentario = $_POST["comentario"];
    ?>
    <!-- Se imprime por pantalla una lista desordenada con la información obtenida -->
    <ul class="resultado tarjeta-resultado">
        <?php
            echo "<li><b>Se llama:</b> $nombre</li>";
            echo "<li><b>Su número es:</b> $numero</li>";
            echo "<li><b>Estrellas asignadas:</b> $estrellas ⭐</li>";
            echo "<li><b>Nos encontró:</b> $tipoBusqueda</li>";
            echo "<li><b>Comentario:</b> $comentario</li>";
        ?>
    </ul>
    <!-- Redirige a la página de inicio -->
    <a href="../html/index.html" id="volver-inicio">Volver a inicio</a>
</body>
</html>
