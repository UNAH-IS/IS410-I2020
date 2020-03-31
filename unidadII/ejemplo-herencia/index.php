<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        include_once('clases/class-alumno.php');
        include_once('clases/class-maestro.php');
        $alumno = new Alumno('Juan','Perez', 35, 'Masculino','Ing en Sistemas','2020121323',65);
        $maestro = new  Maestro('Pedro','Perez', 35, 'Masculino','Ing en Sistemas','343434',1000,"Matutino");
        $maestro->matricular();
        $alumno->matricular();

        //$persona = new Persona('Pedro','Martinez', 33,'Masculino','Ing Quimica');
    ?>
</body>
</html>