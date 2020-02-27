// Informacion del lado del cliente:
/*
Cookies
LocalStorage
SessionStorage
WebSQL (Sqlite) -> Deprecada
indexedDB (noSQL)
*/

var localStorage = window.localStorage;
/*localStorage.setItem("nombre","Juan");
localStorage.setItem("apellido","Perez");
localStorage.setItem("edad","34");*/

let artista = {nombre:'Vicente',caratula:'img.jpg'};
localStorage.setItem("artista",JSON.stringify(artista));