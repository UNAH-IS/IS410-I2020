<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        include_once('clases/class-usuario.php');
        $objeto = new Usuario("Pedro","Martinez", "12/12/2012","Masculino");
        // $objeto->setNombre("Juan");
        // $objeto->setApellido("Perez");

        //echo "<h1>".$objeto->getNombre() ." ". $objeto->getApellido()."</h1>";
        echo "<h1>$objeto</h1>";

    ?>
</body>
</html>