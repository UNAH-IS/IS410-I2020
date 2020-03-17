<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php include("menu.html"); ?>
    <form action="procesar.php" method="POST">
        <input name="usuario" type="text" placeholder="Usuario">
        <input name="password" type="password" placeholder="Password">
        <button type="submit">Guardar</button>
    </form>
    <hr>
    <?php
        include("ver-usuarios.php");
    ?>
</body>
</html>