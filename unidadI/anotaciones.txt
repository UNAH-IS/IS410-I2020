Formatos de transmision de informacion
CSV (Comma Separated Values)

Ejemplo:
    Juan, Perez, Masculino, 35, Honduras


XML:

<persona>
    <nombre>Juan</nombre>
    <apellido>Perez</apellido>
    <edad>35</edad>
    <genero>Masculino</genero>
    <pais>Honduras</pais>
    <fecha-nacimiento>
        <dia>12</dia>
        <mes>12</mes>
        <anio>2012</anio>
    </fecha-nacimiento>
    <direccion>Col Kennedy, bloque 1</direccion>
</persona>


JSON (Javascript Object Notation): 
persona = {
    nombre:"Juan",
    apellido:"Perez",
    edad:"35",
    genero:"Masculino",
    fechaNacimiento:{
        dia:12,
        mes:12,
        anio:2012
    }
}


Servidor WEB:
PHP
MySQL
Apache

WAMP    -> WindowsApacheMysqlPHP
LAMPP   -> LinuxApacheMysqlPHPPython
MAMP    -> MacApacheMysqlPHP
XAMPP   -> X Sistema Operativo ApacheMysqlPHPPython


Carpeta publica de Apache:
    www
    htdocs


CSS: Hojas de estilo en cascada
Es el lenguaje para definir el estilo o apariencia de las etiquetas de un documento html.
Formas de incluir CSS:
*En linea: Los estilos se escriben en la etiqueta que se desea modificar. Se utiliza la propiedad style y se escriben los estilos utilizando la siguiente sintaxis:
    estilo1:valor1;estilo2:valor2;...;estiloN:valorN;

*En el encabezado del documento html:
    Se aplican utilizando la etiqueta style dentro de la etiqueda head.
    Para poder aplicar los estilos es necesario definir identificadores llamados SELECTORES los cuales pueden ser:
    -Nombre de la etiqueta
    -Id de la etiqueta: Se utiliza el prefijo # (numeral)
    -Una clase de estilos: Se utiliza el prefijo . (punto)

    La sintaxis para definir selectores es la siguiente:
    selector{
        estilo1:valor1;
        estilo2:valor2;
        ...;
        estiloN:valorN;
    }
*En archivos externos:
    Se crean archivos planos con la extension .css 
    Se incluyen a un documento html utilizando la etiqueta link dentro de la etiqueta head.


Prioridades estilos:
1. Estilos en linea
2. Estilos por ID
3. Estilos por clase css
4. Estilos por etiqueta

Se puede saltar la prioridad utilizando !important


Media Query CSS -> Sitios web responsivos o adaptables a diferentes tamaños de pantalla (Responsive websites).


Bootstrap CSS
Javascript
LocalStorage