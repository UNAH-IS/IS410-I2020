var artistas = [
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
                        nombreCancion:'Perreo intenso',
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

function generarTabla(){
    for (let i=0;i<artistas.length;i++)
        //document.querySelector("#tbl-info tbody")
        document.getElementById("tbl-info-contenido").innerHTML += 
                `<tr>
                    <td>${artistas[i].nombreArtista}</td>
                    <td><img src="${artistas[i].caratulaArtista}" ></td>
                    <td>${artistas[i].albumes.length}</td>
                    <td><button onclick="verDetalles(${i})">Ver detalles</button></td>
                </tr>`;
    console.log(artistas);
}

generarTabla();

function verDetalles(indice){
    document.getElementById('detalle').innerHTML = 
        `Artista: ${artistas[indice].nombreArtista}<br>
        Caratula: <img src="${artistas[indice].caratulaArtista}"><br>`;
    //JSON.stringify(artistas[indice]);
    document.querySelector('#tbl-detalle-albumes tbody').innerHTML = '';
    for (let j=0;j<artistas[indice].albumes.length;j++)
        document.querySelector('#tbl-detalle-albumes tbody').innerHTML +=
            `<tr>
            <td>${artistas[indice].albumes[j].tituloAlbum}</td>
            <td>${artistas[indice].albumes[j].anio}</td>
            <td>${artistas[indice].albumes[j].genero}</td>
            <td>${artistas[indice].albumes[j].caratula}</td>
            <td>${artistas[indice].albumes[j].canciones.length}</td>
            </tr>`; 
}


