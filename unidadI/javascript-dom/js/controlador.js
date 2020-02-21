// Modelo Vista Controlador (Patron MVC)

// Modelo (Capa de datos y logica de negocios: Backend - PHP y las bases de datos)
// Vista (Html, CSS)
// Controlador (Gestionar las acciones del usuario (eventos, instrucciones, navegacion), Javascript)


console.log(document.getElementById('parrafo1').innerHTML);
document.getElementById('parrafo1').innerHTML = '<h1>Este es el nuevo texto del parrafo 1</h1>';


function login(){
    console.log(`Usuario: ${document.getElementById('usuario').value} ,Password: ${document.getElementById('password').value}`);
    document.getElementById('resultado').innerHTML = `Usuario: ${document.getElementById('usuario').value} ,Password: ${document.getElementById('password').value}`;
    validarCampoVacio('usuario');
    validarCampoVacio('password');
}

function validarCampoVacio(id){
    if (document.getElementById(id).value == ''){
        document.getElementById(id).classList.remove('input-success');
        document.getElementById(id).classList.add('input-error');
    }else{ 
        document.getElementById(id).classList.remove('input-error');
        document.getElementById(id).classList.add('input-success');
    }
}

function asignarValores(){
    document.getElementById('usuario').value = 'elbrayan';
    document.getElementById('password').value = 'asd.456';
}

function mostrarParrafos(){
    //document.querySelector('p'); //Selecciona solo el primer elemento que cumpla con el selector.
    let parrafos = document.querySelectorAll('p'); //Retorna todas las etiquetas
    for(let i = 0; i< parrafos.length;i++)
        console.log(parrafos[i].innerHTML);
}

function mostrarSeccion(){
    //document.getElementById('contenido').style.backgroundColor = '#ff0000';
    document.getElementById('contenido').style.display = 'block';
}

function ocultarSeccion(){
    document.getElementById('contenido').style.display = 'none';
}

function validarEmail(etiqueta){
    console.log(etiqueta.value);
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(etiqueta.value)){
        etiqueta.classList.remove('input-error');
        etiqueta.classList.add('input-success');
    }else{ 
        etiqueta.classList.remove('input-success');
        etiqueta.classList.add('input-error'); 
    }
}