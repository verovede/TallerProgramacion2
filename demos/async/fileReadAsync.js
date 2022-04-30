//let inventors = JSON.parse(fs.readFileSync(PATH, 'utf-8')); --> el sync es para sacarlo del default que asincrono

// fyle system es el que permite trabajar con el sistema de archivos
// const fs = require('fs'); -> esto puede decrepar
// para usar el import hay que agregar al package.json -> "type": "module"

import fs from 'fs';

//fs.readFile -> es para leer el archivo (ubicacion del archivo , encoding para que lo lea como texto , callback (err,data) )
fs.readFile('./bigfile.txt', 'utf-8', (err, data) => {
    // si no hay error, nulo o vacio, devuelve la info de bigfile
    if (!err) {
        console.log("Se ejecuto OK");       
        console.log(data);
    }
})

