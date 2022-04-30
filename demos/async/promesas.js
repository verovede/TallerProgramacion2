/* Promesas
Cuando invoco un metodo o un servicio, la invocacion del metodo es que me devuelva algo -> Una promesa
que algo me va a devolver: PENDING / FULFILLED / REJECTED
Las proesas se pueden encadenar / anidar
Los metodos de las promesas son them (cuando de sumple) y catch (cuando se produce un error) */

//UTILIZANDO PROMESAS DE LECTURA Y ESCRITURA
// importar sistema de archivos con promesas
import fs from 'fs/promises';

// levanto la informacion del json 
const path = './inventors.json'

// creo el nuevo inventor para agregar en el punto 2
const nuevoInventor = { first: 'Nuevo', last: 'Inventor', year: 2022 }

//1 Leer el archivo inventors .json con promesas 
fs.readFile(path, 'utf-8')
    // .them (pide un callback)
    .then(data => {
        console.log(JSON.parse(data))
        const inventors = JSON.parse(data)
        //2 Agregar el inventor
        inventors.push(nuevoInventor)
        //3 esribir el json (persistir)
        return fs.writeFile(path, JSON.stringify(inventors, null, ' '))
    }).then(() => {
        //4 leer el archivo con el cambio
        return fs.readFile(path, 'utf-8')
    }).then(data => {
        console.log(JSON.parse(data))
    })
    // .catch (un callback con el error)
    .catch(error => {
        console.log(error.message)
    })

// ENDECAMIENTO DE LAS PROMESAS, CUANDO UNA SE CUMPLE SIGUE LA OTRA


