<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hola mundo</title>
</head>
<body>
    <?php
        //COMENTARIOS DE UNA LINEA
        /* COMENTARIOS DE MUCHAS LINEAS */
        #Otro tipo de comentario
        $nombre = "Pedro";  
        //echo 'Hola ' . $nombre;
        echo "Hola $nombre";
        echo "<ul>";
        for($i=0;$i<10;$i++)
            echo "<li>Item $i</li>";
        echo "</ul>";


        $arreglo = array();
        $arreglo[0] = 300;
        $arreglo[1] = 200;
        $arreglo[2] = 600;
        for ($i=0;$i<count($arreglo);$i++)
            echo "$arreglo[$i]<br>";

        $nombres[] = "Pedro";//0
        $nombres[] =  "Juan";//1
        echo "<h1>$nombres[0] $nombres[1]</h1>";

        $cosas[] = 1;//0
        $cosas[] = "Hola";//1
        $cosas[] = $nombres;//2
        //Lanza un error al imprimir el item 2 porque es otro arreglo
        // for ($i=0;$i<count($cosas);$i++)
        //     echo "$cosas[$i]<br>";
        echo "<pre>";
        var_dump($cosas);
        echo "</pre>";

        //Arreglos asociativos: Utilizan cadenas en vez de enteros como indices

        $persona1["nombre"] = "Juan";
        $persona1["apellido"] = "Perez";
        $persona1["edad"] = 35;
        
        echo "<pre> PERSONA1";
        var_dump($persona1);
        echo "</pre>";
        echo "<hr>";
        echo json_encode($persona1); //Recibe un arreglo y retorna una cadena en JSON

        $persona2 = array(
            "nombre"=>"Pedro",
            "apellido"=>"Martinex",
            "edad"=>44
        );

        echo "<pre> PERSONA2";
        var_dump($persona2);
        echo "</pre>";
        echo "<hr>";
        echo json_encode($persona2); //Recibe un arreglo y retorna una cadena en JSON
        /*
            let persona = {
                nombre: "Juan",
                apellido: "Perez",
                edad: 35
            }
        */
        echo "<hr>";
        $cadenaJSON = '{"marca":"Asus","modelo":"N45d","procesador":"32234GHz"}';
        //Segundo parametro es para que el arreglo sea asociativo
        $computadora = json_decode($cadenaJSON, true); //Recibe una cadena JSON, retorna un arreglo
        echo "<h1>".$computadora['marca']."</h1>";

        $computadoras[0]["marca"] = "Asus";
        $computadoras[0]["modelo"] = "N76k";
        $computadoras[0]["ram"] = "30000";

        $computadoras[1]["marca"] = "Dell";
        $computadoras[1]["modelo"] = "Inspiron";
        $computadoras[1]["ram"] = "40000";

        echo "<pre>";
        var_dump($computadoras);
        echo "</pre><hr>";
        echo json_encode($computadoras);


        //Esto solo es para probar que se puede generar codigo javascript desde php
        echo "<script>console.log('Hola mundo')</script>";
    ?>
</body>
</html>