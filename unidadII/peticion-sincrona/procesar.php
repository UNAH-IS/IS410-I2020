<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
        /*echo 'Usuario: ' . $_POST['usuario'].'<br>';
        echo 'Password: ' .$_POST['password'];*/
        // echo '<pre>';
        // var_dump($_POST);
        // echo '</pre>'; 
        $usuarios = array();
        $usuarios[] = $_POST;//0
        $archivo = fopen('usuarios.json','a+');//r: Lectura, w: Escritura, a+: Anexar
        fwrite($archivo, json_encode($usuarios));
        fclose($archivo);

        echo "Se escribio esta información en el archivo: " .json_encode($_POST);
    ?>
</body>
</html>