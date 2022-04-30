// UTLIZANDO FUNCIONES ASINCRONAS DE LECTURA Y ESCRITURA

// importar sistema de archivos
import fs from 'fs';

// levanto la informacion del json
const path = './inventors.json'

// creo el nuevo inventor
const nuevoInventor = { first: 'Nuevo', last: 'Inventor', year: 2022 }


//1 Leer el archivo inventors .json
fs.readFile(path, 'utf-8', (err, data) => {
    if (!err) {
        console.log(data)

        //2 Agregar el inventor
        // me traigo la lista de inventores a una constante inventors    
        let inventors = JSON.parse(data);
        inventors.push(nuevoInventor)

        //3 esribir el json (persistir)
        fs.writeFile(path, JSON.stringify(inventors, null, ' '), err => {
            if (!err) {
                console.log("Se escribio sin errores")

                //4 leer el archivo con el cambio
                fs.readFile(path, 'utf8', (err, data) => {
                    if (!err) {
                        console.log("Listado con cambio")
                        console.log(data)
                    } else { console.log("No se encontro el archvo") }
                })
            } else { console.log("No se pudo escirbir el archivo") }
        })

    } else { console.log("No se encontro el archivo") }

})