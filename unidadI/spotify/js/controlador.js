var localStorage = window.localStorage;
var artistas;
var artistaSeleccionado;
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
    //document.getElementById("lista-artistas").innerHTML = '';
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

function verArtista(codigoArtista){
    console.log('Ver artista con codigo: ' + codigoArtista);
    //document.querySelector('#vista-artista').style.display = 'block';


    $("#vista-artista").show();
    $("#vista-playlist").hide();
}

// function agregarCancion(codigoCancion){
//     console.log("Agregar cancion "+codigoCancion);
//     $("#modal-playlists").modal('show');
// }

