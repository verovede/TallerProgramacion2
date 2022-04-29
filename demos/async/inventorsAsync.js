// UTLIZANDO FUNCIONES ASINCRONAS DE LECTURA Y ESCRITURA

import fs from 'fs';

const path = './inventors.json'

const nuevoInventor = { first: 'Nuevo', last: 'Inventor', year: 2022 }

//1. Leer el archivo inventors .json
fs.readFile(path, 'utf-8', (err, data) => {
    if (!err) {
        //2. agregar inventor 
        const inventors = JSON.parse(data)
        inventors.push(nuevoInventor)
        //3. escribir en el json incluyendo el nuevo inventor
        fs.writeFileSync(
            path, JSON.stringify(inventors, null, ' '), err => {
            if (!err) {
                //4. leer el archivo con el nuevo inventor
                fs.readFile(path, 'utf-8', (err, data) => {
                    if (!err) {
                        console.log(JSON.parse(data));
                    }    
                })
                // fin punto 4
            }
        })// fin punto 3
    }
})