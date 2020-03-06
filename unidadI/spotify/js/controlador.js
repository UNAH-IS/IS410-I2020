var localStorage = window.localStorage;
var artistas;
var artistaSeleccionado;
var albumSeleccionado;
if (localStorage.getItem("artistas")==null){
    artistas = [
        {
            nombreArtista:'Metallica',
            caratulaArtista: 'img/metallica-logo.png',
            albumes:[
                {
                    tituloAlbum:'Album 1',
                    anio:2222,
                    genero:'Rock',
                    caratula:'img/cover1.jpg',
                    canciones:[
                        {
                            nombreCancion:'Perreo intenso',
                            duracion:'3:33'
                        },
                        {
                            nombreCancion:'El Tra',
                            duracion:'3:33'
                        }
                    ]
                },
                {
                    tituloAlbum:'Album 2',
                    anio:2222,
                    genero:'Queso',
                    caratula:'img/cover2.jpg',
                    canciones:[
                        {
                            nombreCancion:'Perreo intenso Remix 1',
                            duracion:'3:33'
                        }
                    ]
                },
                {
                    tituloAlbum:'Album 3',
                    anio:2222,
                    genero:'Rock',
                    caratula:'img/cover3.jpg',
                    canciones:[
                        {
                            nombreCancion:'Perreo intenso, versión cumbión ',
                            duracion:'3:33'
                        }
                    ]
                }
            ]
        },
        {
            nombreArtista:'Epica',
            caratulaArtista: 'img/epica-logo.jpg',
            albumes:[
                {
                    tituloAlbum:'Album 1',
                    anio:2222,
                    genero:'Rock',
                    caratula:'img/cover1.jpg',
                    canciones:[
                        {
                            nombreCancion:'Tusa',
                            duracion:'3:33'
                        }
                    ]
                },
                {
                    tituloAlbum:'Album 2',
                    anio:2222,
                    genero:'Queso',
                    caratula:'img/cover2.jpg',
                    canciones:[
                        {
                            nombreCancion:'Otra rola',
                            duracion:'3:33'
                        }
                    ]
                },
                {
                    tituloAlbum:'Album 3',
                    anio:2222,
                    genero:'Rock',
                    caratula:'img/cover3.jpg',
                    canciones:[
                        {
                            nombreCancion:'Perreo intenso',
                            duracion:'3:33'
                        }
                    ]
                }
            ]
        }
    ];
    localStorage.setItem("artistas",JSON.stringify(artistas));
}else{
    artistas = JSON.parse(localStorage.getItem('artistas'));
}


console.log(artistas);


function generarListaArtistas(){
    document.getElementById("lista-artistas").innerHTML = '';
    for (let i=0;i<artistas.length;i++)
        //document.querySelector("#tbl-info tbody")
        document.getElementById("lista-artistas").innerHTML += 
                `<li class="nav-item">
                    <div class="nav-link" onclick="verArtista(${i})">
                        <i class="fas fa-music"></i> ${artistas[i].nombreArtista}
                    </div>
                </li>`;

    console.log(artistas);
}

generarListaArtistas();
// function verPlaylist(codigoPlaylist){
//     console.log('Ver playlist con codigo: ' + codigoPlaylist);
//     $("#vista-playlist").show();
//     $("#vista-artista").hide();
// }

function verArtista(indiceArtista){
    console.log('Ver artista con codigo: ' + indiceArtista);
    artistaSeleccionado = indiceArtista;
    document.getElementById("titulo-artista").innerHTML = artistas[indiceArtista].nombreArtista;
    //document.querySelector('#vista-artista').style.display = 'block';
    document.getElementById("vista-artista").innerHTML = '';
    for (let j=0;j<artistas[indiceArtista].albumes.length;j++){
        const album = artistas[indiceArtista].albumes[j];
        let canciones='';
        for (let k=0;k<album.canciones.length;k++){
            canciones += `
            <div class="row song-item">
                <div class="col-1"><i class="fas fa-play"></i></div>
                <div class="col-10">
                    <div class="song-title">${album.canciones[k].nombreCancion}</div>
                    <div class="song-description">${artistas[indiceArtista].nombreArtista} - ${album.tituloAlbum}</div>
                </div>
                <div class="col-1">
                    <span>${album.canciones[k].duracion}</span>
                    <button onclick="agregarCancion(${k})" class="btn btn-outline-success btn-sm" title="Agregar a playlist"><i class="fas fa-plus"></i></button>
                </div>
            </div>`;
        }



    document.getElementById("vista-artista").innerHTML +=
        `<section class="container-fluid">
            <div class="row">
                <div class="col-4 text-center">
                    <div class="cover-image" style="background-image:url(${album.caratula});">
                    </div><br>
                    <h5 class="text-muted">${album.tituloAlbum}</h5>
                    <button class="btn btn-success" type="button" onclick="nuevaCancion(${j})">Nueva Cancion</button>
                </div>
            <div class="col-8">
                ${canciones}
            </div>
            </div>
        </section><hr>`;
    }
    $("#vista-artista").show();
    $("#vista-playlist").hide();
}

// function agregarCancion(codigoCancion){
//     console.log("Agregar cancion "+codigoCancion);
//     $("#modal-playlists").modal('show');
// }

function guardarArtista(){
    let artista = {
        nombreArtista:document.getElementById('nombreArtista').value,
        caratulaArtista:document.getElementById('caratulaArtista').value,
        albumes:[]
    };
    console.log(artista);
    artistas.push(artista);
    console.log(artistas);
    localStorage.setItem('artistas',JSON.stringify(artistas));
    generarListaArtistas();
    $('#modal-nuevo-artista').modal('hide');
}

function guardarAlbum(){
    let album= {
        tituloAlbum:document.getElementById('tituloAlbum').value,
        anio:document.getElementById('anioAlbum').value,
        genero:document.getElementById('generoAlbum').value,
        caratula:document.getElementById('caratulaAlbum').value,
        canciones:[] 
    };

    console.log(album);

    artistas[artistaSeleccionado].albumes.push(album);
    localStorage.setItem('artistas',JSON.stringify(artistas));
    verArtista(artistaSeleccionado); //Volver a generar los albumes del artista seleccionado
    //Otra opcion es unicamente agregar el item guardado
    $('#modal-nuevo-album').modal('hide');

}

function nuevaCancion(indiceAlbum){
    albumSeleccionado = indiceAlbum;
    console.log('Indice album: ' + indiceAlbum);
    $('#modal-nueva-cancion').modal('show');
}

function guardarCancion(){
    let cancion = {
        nombreCancion:document.getElementById('nombreCancion').value,
        duracion:document.getElementById('duracion').value
    }

    artistas[artistaSeleccionado].albumes[albumSeleccionado].canciones.push(cancion);
    localStorage.setItem('artistas', JSON.stringify(artistas));
    $('#modal-nueva-cancion').modal('hide');
    verArtista(artistaSeleccionado);
}