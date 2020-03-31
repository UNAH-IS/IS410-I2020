<?php
    //echo 'Informacion: ' . file_get_contents('php://input');
    header("Content-Type: application/json");
    switch($_SERVER['REQUEST_METHOD']){
        case 'POST':
            $_POST = json_decode(file_get_contents('php://input'),true);
            $resultado["mensaje"] = "Guardar usuario, informacion:". json_encode($_POST);
            echo json_encode($resultado);
        break;
        case 'GET':
            if (isset($_GET['id'])){
                $resultado["mensaje"] = "Retornar el usuario con el id: " . $_GET['id'];
                echo json_encode($resultado);
            }else{
                $resultado["mensaje"] = "Retornar todos los usuarios";
                echo json_encode($resultado);
            }
        break;
        case 'PUT':
            $_PUT = json_decode(file_get_contents('php://input'),true);
            $resultado["mensaje"] =  "Actualizar un usuario con el id: " .$_GET['id'].
                                    ",  Informacion a actualizar: ".json_encode($_PUT);
            echo json_encode($resultado);
        break;
        case 'DELETE':
            $resultado["mensaje"] = "Eliminar un usuario con el id: ".$_GET['id'];
            echo json_encode($resultado);
        break;
    }
?>