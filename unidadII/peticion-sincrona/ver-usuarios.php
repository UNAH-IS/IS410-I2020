<?php
    $contenidoArchivo = file_get_contents('usuarios.json');
    $usuarios = json_decode($contenidoArchivo, true);
?>
<table>
    <thead>
        <tr>
            <th>Usuario</th>
            <th>Password</th>
        </tr>
    </thead>
    <tbody>
        <?php
            for($i=0;$i<sizeof($usuarios);$i++){
                echo    '<tr>
                            <td>'.$usuarios[$i]["usuario"].'</td>
                            <td>'.$usuarios[$i]["password"].'</td>
                        </tr>';
            }
        ?>
    </tbody>
</table>