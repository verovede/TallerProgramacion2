/* 
    Dada la siguiente cadena extraida de una pagina web (es una porsión de HTML)
    Cada línea corresponde al tiempo en minutos y segundos de un tipo de video
    Nuestro cliente nos solicita desarrollar una función que permita calcular el tiempo total en segundos,
    por tipo de video (Flexbox Video, Redux Video) 
*/


const str = `<ul>
<li data-time="5:17">Flexbox Video</li>
<li data-time="8:22">Flexbox Video</li>
<li data-time="3:34">Redux Video</li>
<li data-time="5:23">Flexbox Video</li>
<li data-time="7:12">Flexbox Video</li>
<li data-time="7:24">Redux Video</li>
<li data-time="6:46">Flexbox Video</li>
<li data-time="4:45">Flexbox Video</li>
<li data-time="4:40">Flexbox Video</li>
<li data-time="7:58">Redux Video</li>
<li data-time="11:51">Flexbox Video</li>
<li data-time="9:13">Flexbox Video</li>
<li data-time="5:50">Flexbox Video</li>
<li data-time="5:52">Redux Video</li>
<li data-time="5:49">Flexbox Video</li>
<li data-time="8:57">Flexbox Video</li>
<li data-time="11:29">Flexbox Video</li>
<li data-time="3:07">Flexbox Video</li>
<li data-time="5:59">Redux Video</li>
<li data-time="3:31">Flexbox Video</li>
</ul>`;

const tipoVideo = "Flexbox Video"

const tipoVideo2 = "Redux Video"

function htmlASegundos(string, tipoVideo) {

    //SEPARAR LAS LINEAS
    const separadosPorLineas = string.split("<li")

    //FILTRO LAS LINEAS QUE TIENEN EL TIPOVIDEO

    const arrayDeString = new Array()
    for (let i = 0; i < separadosPorLineas.length; i++) {

        if (separadosPorLineas[i].includes(tipoVideo)) {

            // MATCH devuelve el tiempo entre " "
            const strSeparado = separadosPorLineas[i].match(/"([^"]*)"/g)

            // toString() PASA DE ARRAY A STRING
            const nuevoString = strSeparado.toString()

            // REPLACE SACA LAS ""
            const sinComi = nuevoString.replace(/['"]+/g, '')

            //
            arrayDeString.push(sinComi)
        }
    }
    // RECORRE LOS STRING SEPARADOS
    let suma = 0;
    for (let i = 0; i < arrayDeString.length; i++) {

        // SEPARA EN DOS OBJETOS EN FUNCION DE LOS :
        var a = arrayDeString[i].split(':');

        // MULTIPLICA EN FUNCION DE LOS MINUTOS / SEGUNDOS
        const segundos = a[0] * 60 + a[1] * 1;

        // ACUMULA LOS SEGUNDOS POR CADA REGISTRO
        suma = suma + segundos
    }

    return suma;
}

console.log("SUMAS TOTAL: " + htmlASegundos(str, tipoVideo))

console.log("SUMAS TOTAL: " + htmlASegundos(str, tipoVideo2))

function getVideos(str) {
    //separo en lineas
    return str
        .replace('<ul>', '') // elimina el <ul>
        .replace('</ul>', '') // elimins el </ul>                
        .split('</li>') // divide el str en una array de string
        .slice(0, -1) //devuelve una porcion del array 0 es donde empieza y -1 todos menos el ultimo
        .map(video => ({
            type: video.split('>')[1],
            minutos: parseInt(video.split('"')[1].split(':')[0]),
            segundos: parseInt(video.split('"')[1].split(':')[1]),
        }))

}
function totalSegPorTipo(videos, type) {
    let totalSegundos = 0;
    videos
        .filter(video => video.type === type)
        .forEach(video => {
            totalSegundos = totalSegundos + video.segundos + (video.minutos * 60)

        });
    return totalSegundos;
}

console.log(totalSegPorTipo(getVideos(str), "Flexbox Video"))
console.log(totalSegPorTipo(getVideos(str), "Redux Video"))