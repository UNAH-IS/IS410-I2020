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

function generarTabla(){
    document.getElementById("tbl-info-contenido").innerHTML = '';
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
        Caratula: <img style="width:300px" src="${artistas[indice].caratulaArtista}"><br>`;
    //JSON.stringify(artistas[indice]);
    document.querySelector('#tbl-detalle-albumes tbody').innerHTML = '';
    document.getElementById('artista').innerHTML = artistas[indice].nombreArtista;
    for (let j=0;j<artistas[indice].albumes.length;j++)
        document.querySelector('#tbl-detalle-albumes tbody').innerHTML +=
            `<tr>
            <td>${artistas[indice].albumes[j].tituloAlbum}</td>
            <td>${artistas[indice].albumes[j].anio}</td>
            <td>${artistas[indice].albumes[j].genero}</td>
            <td>${artistas[indice].albumes[j].caratula}</td>
            <td>${artistas[indice].albumes[j].canciones.length}</td>
            <td><button type="button" onclick="verCanciones(${indice},${j})">Ver canciones</button></td>
            </tr>`; 
}

function verCanciones(indiceArtista, indiceAlbum){
    const canciones = artistas[indiceArtista].albumes[indiceAlbum].canciones;
    document.querySelector('#tbl-canciones tbody').innerHTML = '';
    document.getElementById('album').innerHTML = artistas[indiceArtista].albumes[indiceAlbum].tituloAlbum;
    for(let k=0; k<canciones.length; k++)
        document.querySelector('#tbl-canciones tbody').innerHTML +=
            `<tr>
                <td>${canciones[k].nombreCancion}</td>
                <td>${canciones[k].duracion}</td>
            </tr>`;
}

function guardarArtista(){
    let artista = {
        nombreArtista:document.getElementById('nombreArtista').value,
        caratulaArtista:document.getElementById('caratulaArtista').value,
        albumes:[]
    };
    console.log(artista);
    artistas.push(artista);
    console.log(artistas);
    generarTabla();
}