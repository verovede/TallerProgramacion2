// fyle system es el que permite trabajar con el sistema de archivos

import fs from 'fs';

let datos = '';

fs.readFile('./bigfile.txt', 'utf-8', (err, data) => {
    if (!err) {
        console.log("Se ejecuto OK");
        datos = data;
        console.log(datos);
    }
})

console.log("datos", datos);