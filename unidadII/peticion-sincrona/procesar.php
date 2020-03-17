<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
        sleep(10);
        /*echo 'Usuario: ' . $_POST['usuario'].'<br>';
        echo 'Password: ' .$_POST['password'];*/
        // echo '<pre>';
        // var_dump($_POST);
        // echo '</pre>'; 

        $contenidoArchivo = file_get_contents('usuarios.json');
        $usuarios = json_decode($contenidoArchivo,true);
        $usuarios[] = $_POST;
        $archivo = fopen('usuarios.json','w');//r: Lectura, w: Escritura, a+: Anexar
        fwrite($archivo, json_encode($usuarios));
        fclose($archivo);
    ?>

    <hr>
    <?php
        include("ver-usuarios.php");
    ?>
</body>
</html>